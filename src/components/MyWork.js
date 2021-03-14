import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import ProjectCard from './ProjectCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    calendar : {
      justifyContent: "center",
    },
    cardItem: {
      minWidth: 275,
      float: "left",
      marginRight: 10
    },
    card : {
      minWidth: 275,
      float: "left",
      marginRight: 10
    }
  })
);

const MyWork = () => {

  const classes = useStyles();

  return (
    <Grid 
      container
      direction="row"
      justify="center"
    >
      <Grid 
        item 
        className={classes.calendar} 
        xs={11} sm={9} md={8}
      >
        <Typography />
        <GitHubCalendar username="adityamulik" className={classes.calendar}>
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      </Grid>   
      <Grid 
        item
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.cardItem} 
        xs={9} sm={4} md={4}
      >
        <ProjectCard 
          style={{
            maxHeight: "300px"
          }}
          project={"Web Scrapping"}
          description={
          "A simple web scrapping application created using Python.\
          It scrapes data from a website of prices of a product\
          and as soon as the price reduces to a certain limit defined,\
          it emails the user about the updated price."
          }
        />
      </Grid>
      <Grid 
        item
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.cardItem} 
        xs={9} sm={4} md={4}
      >
        <ProjectCard 
          className={classes.card}
          project={"GeoLocation API App"}
          description={
          "A Geolocation app built using Django Web Framework,\
          it use's mapquest's API which returns the co-ordinates\
          of the location uploaded in a excel csv file."
          }
          url="https://geolocationapidjangoapp.herokuapp.com/"
        />
      </Grid>
      <Grid 
        item
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.cardItem} 
        xs={9} sm={4} md={4}
      >
        <ProjectCard 
          project={"Task Management"}
          description={
          "Task Management Application built using Python's Django Web Framework.\
          Basic CRUD application functionality to create projects and tasks. Using\
          Django REST Framework, APIs exposed of the application which are consumed\
          by ReactJS on the frontend."
          } 
          url="https://django-task-management-app.herokuapp.com"
        />
      </Grid>
      <Grid 
        item
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.cardItem} 
        xs={9} sm={4} md={4}
      >
        <ProjectCard 
          project={"React Blog"}
          description={
          "A Blog Web app created using the MERN stack.\
          Application created using NodeJS and ExpressJS on the backend,\
          ReactJS for the frontend and MongoDB to persist data.\
          Application is hosted lived on AWS."
          }
          url={"http://ec2-52-14-127-238.us-east-2.compute.amazonaws.com/"}
        />
      </Grid>     
    </Grid>
  );
};

export default MyWork;