import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // position: 'relative',
    // width: 400,
    // height: 400,
    maxWidth: 375,
    maxHeight: 575,
    backgroundColor: "#fafafa",
    // margin: 15,
    // padding: 5,
  },
  title: {
    fontSize: 34,
  },
  body: {
    // paddingTop: 50,
  },
  demo: {
    position: 'absolute',
    backgroundColor: 'red',
    marginBottom: 0,
  },
  button: {
    marginBottom: 10,
  }
});

const ProjectCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h2" component="h2">
          {props.project}
        </Typography>
        <Typography className={classes.body} variant="body2" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.demo}>
        <Button 
          className={classes.button}
          size="small" 
          onClick={() => {window.location.href=`${props.url}`}}
        >
        Demo
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;