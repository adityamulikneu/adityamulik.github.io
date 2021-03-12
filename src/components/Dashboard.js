import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typewriter from 'typewriter-effect/dist/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PDFViewer from './PDFViewer';
import pdf from '../assets/Aditya_Mulik_Resume.pdf';
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  dashboard: {
    alignItems: "center"
  }
})
);

const Dashboard = () => {

  const [showPdf, setShowPdf] = useState(false);
  const classes = useStyles();

  return(
    <div className={classes.dashboard}>
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
      <Button
        onClick={() => setShowPdf(!showPdf)}
        variant="contained"
        color="primary"
      >
        Contact Me!
      </Button>
    </div>
  );
};

export default Dashboard;