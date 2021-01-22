import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const CLIENT_ID = process.env.REACT_APP_INSTAGRAM_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_INSTAGRAM_CLIENT_SECRET;
console.log(CLIENT_ID);

const AboutMe = () => (
  <div>
    <div className="instagram-container">
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
    </div>
    <p>Twitter Feed Goes Here</p>
  </div>
);

export default AboutMe;