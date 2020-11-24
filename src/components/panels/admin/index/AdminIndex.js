import { Button, Grid, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Index.css';
export default class AdminIndex extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="paper">
                    <form className="form" noValidate>
                        <Grid container spacing={4} className="box">
                            <Grid item xs={12} sm={4}>
                                <Link to='' style={{ textDecoration: 'none' }}>
                                    <Paper elevation="16">
                                        <div className="cards">
                                            Add Teacher
                                        </div>
                                    </Paper>
                                </Link>
                                
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Link to='' style={{ textDecoration: 'none' }}>
                                    <Paper elevation="16">
                                        <div className="cards">
                                            Approve Student
                                        </div>
                                    </Paper>
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Link to=''style={{ textDecoration: 'none' }}>
                                    <Paper elevation="16">
                                        <div className="cards">
                                            View students
                                        </div>
                                    </Paper>
                                </Link>
                            </Grid>
                            
                        </Grid>
                        <Grid container spacing={4} className="box">
                            <Grid item xs={12} sm={4}>
                                <Link to='' style={{ textDecoration: 'none' }}>
                                    <Paper elevation="16">
                                        <div className="cards">
                                            View Teachers
                                        </div>
                                    </Paper>
                                </Link>
                                
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Link to='' style={{ textDecoration: 'none' }}>
                                    <Paper elevation="16">
                                        <div className="cards">
                                            My Posts
                                        </div>
                                    </Paper>
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Link to=''style={{ textDecoration: 'none' }}>
                                    <Paper elevation="16">
                                        <div className="cards">
                                            Teacher profile update Request
                                        </div>
                                    </Paper>
                                </Link>
                            </Grid>
                            
                        </Grid>
                        <Grid container spacing={4} className="box">
                            <Grid item xs={12} sm={4}>
                                <Link to='' style={{ textDecoration: 'none' }}>
                                    <Paper elevation="16">
                                        <div className="cards">
                                            Teacher course update request
                                        </div>
                                    </Paper>
                                </Link>
                                
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Link to='' style={{ textDecoration: 'none' }}>
                                    <Paper elevation="16">
                                        <div className="cards">
                                            Add Teacher
                                        </div>
                                    </Paper>
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Link to=''style={{ textDecoration: 'none' }}>
                                    <Paper elevation="16">
                                        <div className="cards">
                                            Add Teacher
                                        </div>
                                    </Paper>
                                </Link>
                            </Grid>
                            
                        </Grid>
                        
                        </form>
                </div>
            </div>
        )
    }
}