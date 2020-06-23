import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './navbar.css';
import Menu from '../../images/menu.png';


const styles = {
  list : {
    width : '250',
    background: 'transparent',
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },
  sideBarIcon : {
    cursor : "pointer",
    position: 'absolute',
    right: '0',
    padding: '20px',
    width: '10px',
    marginTop: '-30px',
    textShadow: '2px 2px #181212',
  },
  menu: {
    width: '15px',
  },
  appBar: {
    background: 'transparent',
    position: 'absolute',
    boxShadow: 'none',
    height: '70px',
    fontFamily: 'Averia Sans Libre, cursive',
    fontSize: '12px',
    
  },
  logo: {
    width: '70px',
  },
  logoBox: {
    left: '0',
    marginLeft: '-10px',
    marginTop: '-5px',
    textAlign: 'center',
  },
  link: {
    padding: '15px',
    textDecoration: 'none',
    color: '#181212',
    marginTop: '-10px',
    fontWeight: '550',
    letterSpacing: '2px',
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
    color: '#181212',
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
                  <p className = {this.props.classes.sideBarIcon} onClick={()=>{this.setState({drawer:true})}}><img className={classes.menu} src={Menu} alt="menu"/></p>
              </div>
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
               <ListItem><Link to="/" key = {1} button divider className={classes.drawer}>HOME</Link></ListItem>
               <ListItem><Link to="/about" key = {2} button divider className={classes.drawer}>ABOUT ME</Link></ListItem>
               <ListItem><Link to="/projects" key = {3} button divider className={classes.drawer}>PORTFOLIO</Link></ListItem>
               <ListItem>
               {/* <div className={classes.iconBoxSmall}>
                  <img className={classes.iconsSmall} id="iconHover" src={Git} alt="Git" onClick={() => window.open("https://github.com/rcortez1775", "_blank")}/>  
                  <img className={classes.iconsSmall} id="iconHover" src={Linkedin} alt="Linkedin" onClick={() => window.open("https://www.linkedin.com/in/robert-cortez-bb5537a5/", "_blank")}/>
                </div> */}
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
          <Typography variant = "headline" style={{flexGrow:1}} color="inherit" >
            <div className={classes.logoBox}>
             <Link to="/" className={classes.link}>HOME</Link>
             <Link to="">|</Link>
             <Link to="/about" className={classes.link}>ABOUT ME</Link>
             <Link to="">|</Link>
             <Link to="/projects" className={classes.link}>PORTFOLIO</Link>
           </div>
          </Typography>
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