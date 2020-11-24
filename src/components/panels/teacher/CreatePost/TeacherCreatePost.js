import { Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './TCP.css';

class TeacherCreatePost extends React.Component {
    state = {
        v : 10
    }
    handleChange = (e) => {
        this.setState({
            v : e.target.value
        });
    }
    render() {
        return (
            <div className="body">
                <div className="paper">
                    <Paper elevation={16}>
                    <form className="form" noValidate>
                        <Grid container spacing={2} className="box">
                            
                            <Grid item xs={12} className="post-grid">
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="post"
                                    label="Write something"
                                    name="post"
                                    multiline
                                    rows="6"
                                />
                            </Grid>
                            <Grid item xs={12} className="post-grid">
                            <FormControl className="form-control">
                                {/* <InputLabel id="demo-simple-select-label">Select the post for</InputLabel> */}
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.v}
                                onChange={this.handleChange}
                                >
                                <MenuItem value={10}>-- Select the audience for this post.--</MenuItem>
                                <MenuItem value={20}>CRs</MenuItem>
                                <MenuItem value={30}>All</MenuItem>
                                <MenuItem value={49}>Teachers</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                            {/* <div class="space">
                                <p></p>
                            </div> */}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                        >
                            Post
                        </Button>
                        
                        </form>
                    </Paper>
                </div>
            </div>
        )
    }
}
export default TeacherCreatePost;