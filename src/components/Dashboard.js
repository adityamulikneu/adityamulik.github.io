import React, {useState} from 'react';
import './Dashboard.css';
import PDFViewer from './PDFViewer';
import pdf from '../assets/Aditya_Mulik_Resume.pdf';
import image from '../assets/aditya.png';
import Typewriter from 'typewriter-effect';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';;


const Dashboard = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPdf, setShowPdf] = useState(false);

  return(
    <React.Fragment>
      <div style={{ padding: 20 }}>
        <Grid container        
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
          <Grid item style={{height: "50px"}}>
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
              onClick={() => { matches ? window.open(pdf) : setShowPdf(!showPdf) }}
              variant="contained"
              color="primary"
              style={{margin: "10px"}}
            >
              Resume
            </Button>
            <Button
              onClick={() => {window.location.href="mailto:aditya.mulik@gmail.com"}}
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