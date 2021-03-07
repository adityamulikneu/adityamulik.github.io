import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typewriter from 'typewriter-effect/dist/core';
import Button from '@material-ui/core/Button';
import PDFViewer from './PDFViewer';
import pdf from '../assets/Aditya_Mulik_Resume.pdf';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core';

const Dashboard = () => {

  const [showPdf, setShowPdf] = useState(false);

  return(
    <div>
      <PDFViewer 
        pdf={pdf}
        onCancel={() => setShowPdf(false)}
        visible={showPdf}
      />
      <Button
        onClick={() => setShowPdf(!showPdf)}
        variant="contained"
        color="primary"
      >
        Resume
      </Button>
    </div>
  );
};

export default Dashboard;