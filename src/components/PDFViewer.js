import React, { useState } from "react";
import { saveAs } from 'file-saver';
import PDF from '@mikecousins/react-pdf';
import ReactTooltip from 'react-tooltip';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import GetAppIcon from '@material-ui/icons/GetApp';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
    border: "none",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    outline: 0,
  },
  modal: {
    position: "relative",
    display: "flex",
    overflowX: "auto",
    border: "none",
    boxShadow: "none",
    justifyContent: "center",    
    marginTop: 5,
    marginBottom: 5,
    outline: 0,
  },
  modalcontainer: {
    position: "relative",
    outline: 0,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",  
    zIndex: 1,
    position: "absolute",
    top: 15,
    right: 0,
    padding: "2px",
  },
  downloadPdf: {
  },
  closePdf: {
    "&:hover": {
    }
  }
}));

const PDFViewer = ({pdf, onCancel, visible, type, color}) => {

  const styles = useStyles();
  const [isHidden, toggleHidden] = useState(false);
  
  const onDocumentError = (err) => {
    console.error('pdf viewer error:', err);
  };

  const onPageRenderSuccess = () => {
    setTimeout(() => {
      toggleHidden({
        isHidden:true
      });
    }, 1000);    
  };

  const saveFile = () => {
    saveAs(
      pdf, "Aditya_Mulik_Resume.pdf"
    )
  };

  return(
    <div className={styles.app}>
      <Modal 
        className={styles.modal}
        open={visible}
        onClose={onCancel }
        maskClosable={false}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
      <Fade in={visible}>
        <div className={styles.modalcontainer}>   
            {
              isHidden ? 
              <div 
                className={styles.button}            
              > <IconButton 
                className={styles.downloadPdf}
                onClick={saveFile}
              >
                <GetAppIcon data-tip="Download PDF"/>
                <ReactTooltip />
              </IconButton>
              <IconButton 
                className={styles.closePdf}
                onClick={onCancel}
              >
                <CloseIcon data-tip="Close"/>
                <ReactTooltip />
              </IconButton> </div> 
              : console.log("Button's Disabled!")
            }                          
          <PDF 
            className={styles.pdf}
            file={pdf}
            onDocumentError={onDocumentError}
            onPageRenderSuccess={onPageRenderSuccess}
          >                
          </PDF> 
        </div>  
      </Fade>        
      </Modal>
    </div>    
  )
};

export default PDFViewer;