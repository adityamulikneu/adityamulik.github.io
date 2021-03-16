import React from "react";
import { saveAs } from 'file-saver';
import PDF from '@mikecousins/react-pdf';
import ReactLoading from 'react-loading';
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
    right: 15,
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
  
  const onDocumentError = (err) => {
      console.error('pdf viewer error:', err);
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
        onClose={onCancel}
        maskClosable={false}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
      <div className={styles.modalcontainer}>
        <div className={styles.button}>        
          <IconButton 
            className={styles.downloadPdf}
            onClick={saveFile}
          >
            <GetAppIcon />
          </IconButton>
          <IconButton 
            className={styles.closePdf}
            onClick={onCancel}
          >
            <CloseIcon />
          </IconButton>
        </div> 
        <div className={styles.main}>
          {
            visible ?
            <PDF 
              className={styles.pdf}
              file={pdf}
              onDocumentError={onDocumentError}
            >                
            </PDF>              
            : <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />               
          }                   
        </div>  
      </div>          
      </Modal>
    </div>    
  )
};

export default PDFViewer;