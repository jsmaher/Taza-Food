import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import   {MDBBtn} from "mdbreact"
import pict from './../../images/images.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color:"#c270e5"
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
  },
//   image: {
//     width: 128,
//     height: 128,
//   },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            {/* <ButtonBase className={classes.image}> */}
              <img className={classes.img} alt="complex" src={pict} />
            {/* </ButtonBase> */}
          </Grid>
          <Grid item xs={12} lg={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                 <h2> Standard license</h2>
                </Typography>
                <Typography variant="body2" gutterBottom color="#c90044">
                It's is very delicious dish. In Pakistan everyone likes this dish because when we make this type dish on that time we are very sincere with our work
                </Typography>
                <Typography variant="body2" color="#c90044" >
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                {/* <Typography variant="body2" style={{ cursor: 'pointer',float:"right" }}> */}
                 <MDBBtn style={{
                     backgroundColor:"#1c9723",
                     color:"white",
                 }}
                 color="#c90044">Buy</MDBBtn>
                {/* </Typography> */}
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
