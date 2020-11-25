import { CircularProgress, Grid, Paper, TextField } from '@material-ui/core';
import React from 'react';
import axios from 'axios';
import './styles.css';
export default class StudentProfile extends React.Component {
    state = {
        response :null
    }
    componentDidMount() {
        let _this = this;
        axios.get("http://127.0.0.1:8000/api/student/"+this.props.match.params.id).then(
            _response=> {
                _this.setState({
                    response : _response
                });
                console.log(_response)
            }
        ).catch(error=> {
            console.log(error.message);
            
        });
    }
    render() {
        
        return (
            <div class="body">
                {(this.state.response ?
                    <div>
                        <div class="section-1">
                            <div class="dp">
                                <Paper elevation={16}>
                                    {/* <img src="https://www.gstatic.com/tv/thumb/persons/528854/528854_v9_bb.jpg" width ="500" height="500"/> */}
                                    <img src="https://lorempixel.com/640/480/?65716" width="500" height= "600"/>
                                </Paper>
                            </div>
                        </div>
                        <div class="section-2">
                            <Paper elevation={16}>
                                <Grid container spacing={2} className="box">
                                    <Grid item xs={12} sm={6}>
                                        <Paper elevation={16} className="field">
                                            Name : {this.state.response.data.data.name}
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper elevation={16} className="field">
                                            Department : {this.state.response.data.data.department}
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper elevation={16} className="field">
                                            Semester : {this.state.response.data.data.semester}
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                            <Paper elevation={16} className="field">
                                            Id : {this.state.response.data.data.id }
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                            <Paper elevation={16} className="field">
                                            Batch : {this.state.response.data.data.batch}
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                            <Paper elevation={16} className="field">
                                            Phone  : {this.state.response.data.data.user.phone_number}
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>
                    </div>
                    : <div class="full">
                        <CircularProgress />
                    </div>
                )}
            </div>
        )
    }
}