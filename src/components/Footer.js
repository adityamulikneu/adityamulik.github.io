import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  icons: {
    marginLeft: theme.spacing(2),
    cursor: 'pointer',
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  customToolbar: {
    justifyContent: "center",
    minHeight: 36
  },
  toolbarMargin: theme.mixins.toolbar
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.customToolbar}>
          <GitHubIcon 
            onClick={() => window.open('https://www.github.com/adityamulik', '_blank')}
            className={classes.icons}
          />
          <LinkedInIcon 
            onClick={() => window.open('https://www.linkedin.com/in/adityamulik', '_blank')}
            className={classes.icons}
          />
          <TwitterIcon 
            onClick={() => window.open('https://www.twitter.com/adityamulik', '_blank')}
            target={"_blank"}
            className={classes.icons}
          />
          <FacebookIcon 
            onClick={() => window.open('https://www.facebook.com/mulikaditya', '_blank')}
            className={classes.icons}
          />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )  
};

export default Footer;