import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import Logo from '../../images/logo.png';
import {Link} from 'react-router-dom';
import Email from '../../images/email.png';
import Linkedin from '../../images/linkedin.png';
import Facebook from '../../images/facebook.png';
import Git from '../../images/git.png';
import menuBar from '../../images/menu.png';
import './navbar.css';


const styles = {
  list : {
    width : '250',
    background: '#111111',
    
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    color : "white",
    cursor : "pointer",
    position: 'absolute',
    right: '0',
    padding: '20px',
    width: '40px',
    marginTop: '-40px',
  },
  appBar: {
    background: '#111111',
    position: 'fixed',
    height: '90px',
    fontFamily: 'Dosis, sans-serif',
    fontSize: '25px',
  },
  logo: {
    width: '70px',
  },
  logoBox: {
    left: '0',
    marginLeft: '-10px',
    marginTop: '10px',
  },
  link: {
    padding: '15px',
    textDecoration: 'none',
    color: '#F7F9FB',
    marginTop: '-10px',
  },
  icons: {
    width: '30px',
    color: 'white',
    marginTop: '-5px',
    padding: '10px',
  },
  iconsSmall: {
    width: '30px',
    color: 'white',
    padding: '10px',
    margin: 'auto',
    left: '0',
    right: '0',
  },
  iconBox: {
    paddingLeft: '30px',
  },
  iconBoxSmall: {
    background: '#212025',
    height: '495px',
  },
  drawer: {
    fontFamily: 'Dosis, sans-serif',
    color: '#F7F9FB',
    textDecoration: 'none',
    fontSize: '30px',
    padding: '10px',
  },
};

class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    const {classes} = this.props
    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <div>
                <img className = {this.props.classes.sideBarIcon}
                  onClick={()=>{this.setState({drawer:true})}} src={menuBar} alt="Menu" /> 
              </div>
                <Typography variant = "headline" style={{flexGrow:1}} color="inherit" >
                  <div className={classes.logoBox}>
                    <img className={classes.logo} src={Logo} alt="Logo" />
                  </div>
                </Typography>
              <Typography color="inherit" variant = "headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list} id="grid">
               <ListItem><Link to="/" key = {1} button divider className={classes.drawer}>Home</Link></ListItem>
               <ListItem><Link to="/about" key = {2} button divider className={classes.drawer}>About Me</Link></ListItem>
               <ListItem><Link to="/projects" key = {3} button divider className={classes.drawer}>Projects</Link></ListItem>
               <ListItem><Link to="/contact" key = {4} button divider className={classes.drawer}>Contact</Link></ListItem>
               <ListItem>
               <div className={classes.iconBoxSmall}>
                  <img className={classes.iconsSmall} id="iconHover" src={Git} alt="Git" onClick={() => window.open("https://github.com/rcortez1775", "_blank")}/>  
                  <img className={classes.iconsSmall} id="iconHover" src={Email} alt="Email" />
                  <img className={classes.iconsSmall} id="iconHover" src={Facebook} alt="Facebook" onClick={() => window.open("https://www.facebook.com/robert.a.cortez.9", "_blank")}/>
                  <img className={classes.iconsSmall} id="iconHover" src={Linkedin} alt="Linkedin" onClick={() => window.open("https://www.linkedin.com/in/robert-cortez-bb5537a5/", "_blank")}/>
                </div>
               </ListItem>
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant = "headline" style={{flexGrow:1}} color="inherit" ><div className={classes.logoBox}>
            <img className={classes.logo} src={Logo} alt="Logo" id="logoSlide" />
          </div></Typography>
          <Link to="/" className={classes.link}>Home</Link>
          <Link to="/about" className={classes.link}>About Me</Link>
          <Link to="/projects" className={classes.link}>Projects</Link>
          <Link to="/contact" className={classes.link}>Contact</Link>
          <div className={classes.iconBox}>
            <img className={classes.icons} id="iconHover" src={Git} alt="Git" onClick={() => window.open("https://github.com/rcortez1775", "_blank")}/>  
            <img className={classes.icons} id="iconHover" src={Email} alt="Email" />
            <img className={classes.icons} id="iconHover" src={Facebook} alt="Facebook" onClick={() => window.open("https://www.facebook.com/robert.a.cortez.9", "_blank")}/>
            <img className={classes.icons} id="iconHover" src={Linkedin} alt="Linkedin" onClick={() => window.open("https://www.linkedin.com/in/robert-cortez-bb5537a5/", "_blank")}/>
          </div>
        </Toolbar>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styles)(ResAppBar);