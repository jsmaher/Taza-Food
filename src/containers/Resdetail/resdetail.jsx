import React from 'react'
import Products from './../../Component/product/products'
import Grid from '@material-ui/core/Grid'
import pic from './../../images/bg1.jpg'

export default class ResDetail extends React.Component{
    render(){
        return(
            <div>
                <Grid container >
                <Grid item lg={12}>
                <center>
                <img 
                height="450px" 
                width="1300px"
        
                src={pic} alt=""/>
               </center>
                </Grid>
                </Grid>
                <br/>
          <Products/>
      <br/>
      <Products/>
      <br/>
      <Products/>
      <br/>
      <Products/>
      <br/>
      <Products/>
  
            </div>
        )
    }
}