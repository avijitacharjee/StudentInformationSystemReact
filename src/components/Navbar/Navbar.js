import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from '@material-ui/core/styles';

import { Grid, Button, AppBar, Toolbar, Typography, MenuItem, Menu, Avatar} from "@material-ui/core"

import "./navbar.css";

class Navbar extends React.Component {
    state={
        anchorEl:null
      };
    render() {
        const {anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className="root">
                <AppBar position="static" color="default" className="AppBar">
                <Grid item sm={12} xs={12} className="container">
                    <Toolbar>
                        <Grid className="grow">
                            <Button className="main-logo">
                                <Avatar src="https://puc.ac.bd/Content/assets/Image/puc.png" className="avatar" />
                            </Button>
                        </Grid>
                        <Button color="inherit" onClick={this.handleMenu} className="buttonFontSize">Discover</Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                                }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Teacher</MenuItem>
                            <MenuItem onClick={this.handleClose}>Student</MenuItem>
                            <MenuItem onClick={this.handleClose}>Advisor</MenuItem>
                            <MenuItem onClick={this.handleClose}>CR</MenuItem>
                        </Menu>
                        <Button color="inherit" className="buttonFontSize">Teacher</Button>
                        <Button color="inherit" className="buttonFontSize">Student</Button>
                        <Button color="inherit" className="buttonFontSize">Advisor</Button>
                        <Button color="inherit" className="buttonFontSize">CR</Button>
                        <Button color="inherit" className="buttonFontSize">Profile</Button>
                        <Button variant="contained" color="primary" className="loginButton">Login</Button>
                    </Toolbar>
                </Grid>
                </AppBar>
            </div>    
        )
    }
}
export default Navbar;