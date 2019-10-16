import React from 'react';
import PropTypes from 'prop-types';
import './navbar.css';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import {Link} from 'react-router-dom';
import Email from '../../images/email.png';
import Linkedin from '../../images/linkedin.png';
import Facebook from '../../images/facebook.png';
import Git from '../../images/git.png';
import Logo from '../../images/logo.png';


const styles = {
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        height: '90px',
        margin: 'auto',
        top: '0',
        background: '#212025',
        fontFamily: 'Barriecito, cursive',
        fontSize: '25px',
        overflow: 'hidden',
        paddingLeft: '200px',
      },
    link: {
      padding: '15px',
      textDecoration: 'none',
      color: '#F7F9FB',
    },
    icons: {
      width: '30px',
      color: 'white',
      marginTop: '15px',
      padding: '10px',
    },
    iconBox: {
      paddingLeft: '50px',
    },
    logo: {
      width: '95px',
    },
    logoBox: {
      left: '0',
      position: 'fixed',
      marginLeft: '10px',
    },

  };
  
  class LabelBottomNavigation extends React.Component {
    state = {
      value: 'home',
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
      const { classes } = this.props;
      const { value } = this.state;
      
  
      return (
        <BottomNavigation value={value} onChange={this.handleChange} className={classes.stickToBottom}>
          <div className={classes.logoBox}>
            <img className={classes.logo} src={Logo} alt="Logo" />
          </div>
          <Link to="/" className={classes.link}>Home</Link>
          <Link to="/about" className={classes.link}>About Me</Link>
          <Link to="/projects" className={classes.link}>Portfolio</Link>
          <div className={classes.iconBox}>
            <img className={classes.icons} id="iconHover" src={Git} alt="Git" />  
            <img className={classes.icons} id="iconHover" src={Email} alt="Email" />
            <img className={classes.icons} id="iconHover" src={Facebook} alt="Facebook" />
            <img className={classes.icons} id="iconHover" src={Linkedin} alt="Linkedin" />
          </div>
        </BottomNavigation>
      );
    }
  } 
  
  LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LabelBottomNavigation);