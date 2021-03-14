import React, {useState} from "react";
import Modal from '@material-ui/core/Modal';
import PDF from '@mikecousins/react-pdf';
import './PDFViewer.css';
import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';
import pdf from '../assets/Aditya_Mulik_Resume.pdf';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import { Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// const Fade = React.forwardRef(function Fade(props, ref) {
//   const { in: open, children, onEnter, onExited, ...other } = props;
//   const style = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: open ? 1 : 0 },
//     onStart: () => {
//       if (open && onEnter) {
//         onEnter();
//       }
//     },
//     onRest: () => {
//       if (!open && onExited) {
//         onExited();
//       }
//     },
//   });

//   return (
//     <animated.div ref={ref} style={style} {...other}>
//       {children}
//     </animated.div>
//   );
// });

// Fade.propTypes = {
//   children: PropTypes.element,
//   in: PropTypes.bool.isRequired,
//   onEnter: PropTypes.func,
//   onExited: PropTypes.func,
// };

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
    <Modal 
      className={styles.modal}
      open={visible}
      onClose={onCancel}
      maskClosable={false}
      style={{top: 20}}
      width={"50%"}
    >
      <div className="pdfWrapper">
        <PDF 
          className="pdf"
          file={pdf}
          onDocumentError={onDocumentError}
        >          
        </PDF>    
        <IconButton 
            className="downloadPdf"
            onClick={saveFile}
          >
            <GetAppIcon />
            <p className="tooltip-download">Download</p>
          </IconButton>
          <IconButton 
            className="closePdf"
            onClick={onCancel}
          >
            <CloseIcon />
            <p className="tooltip-close">Close</p>
          </IconButton>          
      </div>
    </Modal>
  )
};

export default PDFViewer;