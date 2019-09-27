import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Logo from './../../images/tazafoodlogo2.png'
import img from './../../images/images (1).jpg'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";


import Chips from './../chips/chips'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    display:"inline-block",
    marginLeft:"15px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "white"
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card} onClick={()=>props.path.push("/resdetail")}>
        
     
     
      <CardMedia
        className={classes.media}
        image={img}
        title="Taza Food"
      />
      <CardContent>
        <h5>Restuarent</h5>
{/* <Chips/> */}
<div className="text-center mt-4">
                <MDBBtn
                 style={{
                     backgroundColor:"#1c9723",
                     color:"white"
                    }}
                    color="#c90044"
                    type="button"
                    >
Order Now                </MDBBtn>
              </div>
      </CardContent>
      <CardActions disableSpacing>
       
       
      </CardActions>
      
    </Card>
  );
}
