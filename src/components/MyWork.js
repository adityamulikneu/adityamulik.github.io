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
      <div style={{textAlign:"center", justifyContent:"center", alignItems:"center"}}>
        <p style={{textAlign:"center", fontSize: "50px"}}>Work In Progress!!!!!</p>
      </div>
    </Grid>
  );
};

export default MyWork;