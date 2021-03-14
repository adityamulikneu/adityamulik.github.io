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
      <div style={{ padding: 20 }}>
        <Grid container       
          xs={12} sm={12} md={12}    
          direction={"column"} 
          spacing={5} 
          justify="space-evenly"
          alignContent="center"
          style={{ 
            margin: 0,
            width: '100%',
          }}
        >
          <Grid item style={{textAlign: "center"}}>
            <img src={image} alt="profile-pic" className="profile-pic"/>
          </Grid>
          <Grid item>
            <Typography
            >
              <Typewriter 
                onInit={(typewriter) => {
                  typewriter.typeString("Hi, I'm Aditya Mulik & I'm a Software Developer!")                  
                    .pauseFor(2000)
                    .deleteChars(25)
                    .typeString("I'm a passionate programmer!")  
                    .start()                
                }}
              />
            </Typography>   
          </Grid>
          <Grid item style={{textAlign: "center"}}>
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
      </div>
    </React.Fragment>
  );
};

export default Dashboard;