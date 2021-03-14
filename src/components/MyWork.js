import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import ProjectCard from './ProjectCard';
import Grid from '@material-ui/core/Grid';

const MyWork = () => (
  <Grid container>
    <Grid item xs={12} sm={12} md={12}>
      <GitHubCalendar username="adityamulik" >
        <ReactTooltip delayShow={50} html />
      </GitHubCalendar>
    </Grid>   
    <Grid item xs={3} sm={5} md={3}>
      <ProjectCard 
        project={"Web Scrapping"}
        description={
        "A simple web scrapping application created using Python. \
        It scrapes data"
        }
      />
      <ProjectCard 
        project={"GeoLocation API App"}
        description={
        "A simple web scrapping application created using Python. \
        It scrapes data"
        }
      />
      <ProjectCard 
        project={"Task Management"}
        description={
        "A simple web scrapping application created using Python. \
        It scrapes data"
        }
      />
      <ProjectCard 
        project={"React Blog"}
        description={
        "A Blog Web app created using the MERN stack.\
        Application created using NodeJS and ExpressJS on the backend,\
        ReactJS for the frontend and MongoDB to persist data.\
        Application is hosted lived on AWS."
        }
        application={"http://ec2-52-14-127-238.us-east-2.compute.amazonaws.com/"}
      />
    </Grid>     
  </Grid>
);

export default MyWork;