import React from "react";
import { saveAs } from 'file-saver';
import PDF from '@mikecousins/react-pdf';
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
    justifyContent: "center"
  },
  modal: {
    display: "flex",
    overflowX: "auto",
    border: "none",
    boxShadow: "none",
    justifyContent: "center",    
    marginTop: 5,
    marginBottom: 5,
    // outline: "none",
  }
}));

const PDFViewer = ({pdf, onCancel, visible}) => {

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
        <Fade in={visible}>
          <div>
            <PDF 
              file={pdf}
              onDocumentError={onDocumentError}
            >          
            </PDF>          
          </div>
        </Fade>
      </Modal>
    </div>    
  )
};

export default PDFViewer;