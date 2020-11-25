import { Button, Grid, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './CreatePostByAdmin.css';

export default class CreatePostByAdmin extends React.Component {
    state = {
        user_id: null,
        content: null,
        all: null,
        student: null,
        student: null
        
    }
    componentDidMount() {
        
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
                            <div class="space">
                                <p></p>
                            </div>
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
