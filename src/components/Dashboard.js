import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typewriter from 'typewriter-effect';
import Button from '@material-ui/core/Button';
import PDFViewer from './PDFViewer';
import pdf from '../assets/Aditya_Mulik_Resume.pdf';
import image from '../assets/aditya.png';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './Dashboard.css';


const Dashboard = () => {

  const [showPdf, setShowPdf] = useState(false);

  return(
    <React.Fragment>
      <Grid container direction={"column"} spacing={4} alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6} md={3} style={{textAlign: "center"}}>
          <img src={image} alt="profile-pic" className="profile-pic"/>
        </Grid>
        <Grid item xs={12} sm={6} md={3} style={{textAlign: "center"}}>
          <Typography>
            <Typewriter 
              onInit={(typewriter) => {
                typewriter.typeString("Hi, I'm Aditya Mulik & I'm a Software Developer!")
                  .pause(1000)
                  .changeDeleteSpeed(10)
                  .deleteChars(25)
                  .typeString("and a passionate programmer!")
                  .start()
              }}
            />
          </Typography>   
        </Grid>
        <Grid className="dashboard-buttons" item xs={12} sm={6} md={3}>
          <PDFViewer 
            pdf={pdf}
            onCancel={() => setShowPdf(false)}
            visible={showPdf}
          />
          <Button
            onClick={() => setShowPdf(!showPdf)}
            variant="contained"
            color="primary"
            style={{margin: "10px"}}
          >
            Resume
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{margin: "10px"}}
          >
            Email Me!
          </Button>
        </Grid>            
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;