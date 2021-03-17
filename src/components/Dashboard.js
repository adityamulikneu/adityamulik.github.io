import React, {useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import PDFViewer from './PDFViewer';
import pdf from '../assets/Aditya_Mulik_Resume.pdf';
import image from '../assets/aditya.png';
import Typewriter from 'typewriter-effect';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';


const Dashboard = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    console.log("Rendered!");
    <ReactLoading type={"balls"} color={"#ffffff"} height={'20%'} width={'20%'} />
  }, []);

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
            <img style={{width: "250px", height: "250px", borderRadius: "50%"}} src={image} alt="profile-pic"/>
          </Grid>
          <Grid item style={matches ? {height: "180px"} : {height: "50px"}}>
            <Typography
              style={matches ? {fontSize: 30, textAlign: "center"} : {fontSize: 30}}
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
              startIcon={<DescriptionIcon />}
            >
              Resume!
            </Button>
            <Button
              onClick={() => {window.location.href="mailto:aditya.mulik@gmail.com"}}
              variant="contained"
              color="primary"
              style={{margin: "10px"}}
              startIcon={<EmailIcon />}
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