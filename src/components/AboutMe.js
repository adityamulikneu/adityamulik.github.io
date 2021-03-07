import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
  <div>
    <Grid 
      container
    > 
      <Item className={classes.insta}>
        <InstagramEmbed 
          className="insta-embed"
          url="https://www.instagram.com/p/BtqgBFxnLEZ/"
          clientAccessToken= {CLIENT_ID +"|"+ CLIENT_SECRET}
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {console.log('loaded')}}
          onSuccess={() => {console.log('success')}}
          onAfterRender={() => {console.log('rendered')}}
          onFailure={() => {}}
        />
      </Item>
      <Item className={classes.insta}>
        <InstagramEmbed 
          className="insta-embed"
          url="https://www.instagram.com/p/B2_27CbnfFJ/"
          clientAccessToken= {CLIENT_ID +"|"+ CLIENT_SECRET}
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {console.log('loaded')}}
          onSuccess={() => {console.log('success')}}
          onAfterRender={() => {console.log('rendered')}}
          onFailure={() => {}}
        />
      </Item>
      <Item className={classes.insta}>
        <InstagramEmbed 
          className="insta-embed"
          url="https://www.instagram.com/p/B2HfJo1HoXh/"
          clientAccessToken= {CLIENT_ID +"|"+ CLIENT_SECRET}
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {console.log('loaded')}}
          onSuccess={() => {console.log('success')}}
          onAfterRender={() => {console.log('rendered')}}
          onFailure={() => {}}
        />
      </Item>
      <Item className={classes.insta}>     
        <InstagramEmbed 
          className="insta-embed"
          url="https://www.instagram.com/p/BhhzCPlFB_a/"
          clientAccessToken= {CLIENT_ID +"|"+ CLIENT_SECRET}
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {console.log('loaded')}}
          onSuccess={() => {console.log('success')}}
          onAfterRender={() => {console.log('rendered')}}
          onFailure={() => {}}
        />
      </Item>
      <Item className={classes.insta}>     
        <InstagramEmbed 
          className="insta-embed"
          url="https://www.instagram.com/p/5UwtU8g1fC/"
          clientAccessToken= {CLIENT_ID +"|"+ CLIENT_SECRET}
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {console.log('loaded')}}
          onSuccess={() => {console.log('success')}}
          onAfterRender={() => {console.log('rendered')}}
          onFailure={() => {}}
        />   
      </Item>
      <Item className={classes.insta}>    
        <InstagramEmbed 
          className="insta-embed"
          url="https://www.instagram.com/p/xbmd8KA1Wy/"
          clientAccessToken= {CLIENT_ID +"|"+ CLIENT_SECRET}
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {console.log('loaded')}}
          onSuccess={() => {console.log('success')}}
          onAfterRender={() => {console.log('rendered')}}
          onFailure={() => {}}
        />   
      </Item>
    </Grid>
    <p>Twitter Feed Goes Here</p>
  </div>
  )
);

export default AboutMe;