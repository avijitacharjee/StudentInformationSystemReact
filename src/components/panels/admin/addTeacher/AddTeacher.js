import React from 'react'
import StyleSheet from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './AddTeacher.css'
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
class AddTeacher extends React.Component{
    state = {
        'name': '',
        'email' : '',
        'department': '',
        'phone': '',
        'password': '',
        'image': null,
        'imgUrl': '',
        'teacher_id':''
    }
    handleSubmit = () => {
        console.log(this.state);
        let formData = new FormData();
        formData.append('name',this.state.name);
        formData.append('phone_number', this.state.phone); 
        formData.append('email',this.state.email);
        formData.append('password', this.state.password); 
        //formData.append('image',this.state.image);
        formData.append('department', this.state.department); 
        console.log(formData);
        axios.post("http://127.0.0.1:8000/api/teacher/create", formData).then(
            response=> {
                console.log(response);
            }
        ).catch(error=> {
            console.log(error.message);
            
        });
    }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="body">
                <div className="paper">
                    <Paper elevation={16}>
                    <form className="form" noValidate>
                        <Grid container spacing={2} className="box">
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="Name"
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Full Name"
                                    className="textfield"
                                    autoFocus
                                    
                                    onChange={(e) => {
                                        this.setState({
                                        name : e.target.value 
                                    });
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="department"
                                    label="department"
                                    name="department"
                                    autoComplete="lname"
                                    onChange={(e) => {
                                        this.setState({
                                        department : e.target.value 
                                    });
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => {
                                        this.setState({
                                        email : e.target.value 
                                    });
                                    }}
                                />
                            </Grid>
                            
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="phone_number"
                                    label="Phone no."
                                    type="number"
                                    id="phone_number"
                                    autoComplete="phone"
                                    onChange={(e) => {
                                        this.setState({
                                        phone : e.target.value 
                                    });
                                    }}
                                    />
                                </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="teacher_id"
                                    label="Teacher id"
                                    type="number"
                                    id="teacher_id"
                                    autoComplete="number"
                                    onChange={(e) => {
                                        this.setState({
                                        phone : e.target.value 
                                    });
                                    }}
                            />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e) => {
                                        this.setState({
                                        password : e.target.value 
                                    });
                                    }}
                                    
                                />
                            </Grid>
                            
                            <Grid item xs={6}>
                                <input
                                    accept="image/*"
                                    className="input"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        this.setState({
                                        image : e.target.files[0] ,
                                        imgUrl: URL.createObjectURL(e.target.files[0])
                                    });
                                    }}
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="out" component="span">
                                    Upload picture
                                    </Button>
                                </label>
                                    {this.state.imgUrl ?
                                    <Grid item xs={6}>
                                        <img src={this.state.imgUrl} width="90" height="70"/>
                                    </Grid> : ''}
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className="submit"
                                    onClick={this.handleSubmit}
                                >
                                    Add Teacher
                                </Button>        
                            </Grid>
                        </Grid>
                        </form>
                    </Paper>
                </div>
            </div>
            </div>
            
        )
    }
}
export default AddTeacher;