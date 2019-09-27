import React from 'react';
import NavbarPage from './../../Component/navbar/navbar'
import NavTabs from './../../Component/Tabs/tabs'
import Chips from './../../Component/chips/chips'
import Grid from '@material-ui/core/Grid'
import Cards from './../../Component/Cards/cards'
import CarouselPage from './../../Component/Slider/slider'
import FooterPagePro from './../../Component/Footer/footer'

export default class User extends React.Component{
    render(){
        return(
<div>
    <NavbarPage/>
    <br/>
        <CarouselPage />
        <br/>
    <NavTabs>
        <Grid container justify="center" >
        <Grid item>
        <Chips/>
        </Grid>
        </Grid>  
        <br/>
          <Cards path={this.props.history}/> 
            <Cards path={this.props.history}/>  
            <Cards path={this.props.history}/>
             <Cards path={this.props.history}/>
             <Cards path={this.props.history}/>
            <Cards path={this.props.history}/>
            <Cards path={this.props.history}/>
            <Cards path={this.props.history}/>
            <Cards path={this.props.history}/>
            <Cards path={this.props.history}/>
            </NavTabs>

            <FooterPagePro />
    </div>
        )
    }
} 