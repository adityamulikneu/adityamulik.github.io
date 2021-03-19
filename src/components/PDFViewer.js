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
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { scaleBand } from "d3-scale";

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
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",  
    zIndex: 1,
    top: 10,
    right: 0,
    padding: "2px",
  },
  downloadPdf: {
  },
  closePdf: {
    "&:hover": {
    }
  },
  fullscreenPdf: {
    position: "fixed",
    bottom: 0,
    marginLeft: 50,
    "&:hover": {
      color: "black",
      transform: "scale(1.5)",
    }
  },
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

  const handleFullScreen = () => {
    document.getElementById("pdf").requestFullscreen();
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
              > 
                <IconButton 
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
                </IconButton>   
                <IconButton 
                  className={styles.fullscreenPdf}
                  onClick={handleFullScreen}
                >
                  <FullscreenIcon data-tip="Fullscreen"/>
                </IconButton>            
              </div> 
              : console.log("Button's Disabled!")
            }                          
          <PDF 
            id="pdf"
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