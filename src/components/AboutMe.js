import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const CLIENT_ID = process.env.REACT_APP_INSTAGRAM_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_INSTAGRAM_CLIENT_SECRET;

const styles = theme => ({
  root: {
    flexGrowth: 1
  },
  insta: {
    padding: theme.spacing(5),
    justify: "spaced-between",
  }
});

const Item = props => (<Grid item xs={12} sm={5} md={4} {...props} />)

const AboutMe = withStyles(styles)(
  ({ classes }) => (
  <div style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>
    <p style={{textAlign:"center", fontSize: "50px"}}>Work In Progress!!!!!</p>
  </div>
  )
);

export default AboutMe;