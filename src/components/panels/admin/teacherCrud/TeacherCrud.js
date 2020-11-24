import { Button, Paper, Table } from '@material-ui/core';
import React from 'react';
import axios from 'axios';
import './TeacherCrud.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));
  
class TeacherCrud extends React.Component {
    state = {
        response: null
    }
    componentDidMount() {
        let _this = this;
        axios.get("http://127.0.0.1:8000/api/teachers").then(
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
        
        const Table = ({ droplets }) => {
            const classes = useStyles();
            var state = {
                'id': 0,
                'open' : false
            }

            const handleOpen = (id) => {
                this.setState({
                    'id': id,
                    'open': true
                });
            };

            const handleClose = () => {
                this.setState({
                    'open': false
                });
            };
            const handleDelete = () => {
                var _this = this;
                var url = "http://127.0.0.1:8000/api/teacher/" + _this.state.id + "/delete";
                console.log(url);
                axios.get(url).then(
                    response=> {
                        console.log(response);
                        handleClose();
                    }
                ).catch(error=> {
                    console.log(error.message);
                    
                });
            }
            return (
                <div class="table-page">
                    <Paper elevation ="16">
                        <table className="table">
                            <thead className="t-header">
                            <tr>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Department</td>
                                <td>Email</td>
                                <td></td>
                                <td></td>
                            </tr>
                            </thead>
                            <tbody>
                            {
                             (droplets.length > 0) ? droplets.map( (droplet, index) => {
                                return (
                                    <tr key={index}>
                                        <td><img src={ droplet.user.picture_path } width="60" height="50"/></td>
                                        <td>{ droplet.id }</td>
                                        <td>{droplet.department}</td>
                                        <td>{droplet.user.email}</td>
                                        <td> <Button variant="contained" color="primary"> Update </Button> </td>
                                        <td> <Button variant="contained" color="secondary" onClick={()=>handleOpen(droplet.id)}> Delete</Button></td>
                                    </tr>
                                    
                                )
                            }) : <tr><td colSpan="5">Loading...</td></tr> }
                            </tbody>
                        </table>
                    </Paper>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className="modal"
                        open={this.state.open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={this.state.open}>
                        <div className="paper">
                            <h2 id="transition-modal-title" class="modal-head">Confirmation</h2>
                            <p id="transition-modal-description" class="modal-text">Are you sure to delete?</p>
                            <div class="modal-btn">
                                <Button variant="contained" color="secondary" onClick={()=>handleDelete()}>Ok</Button>
                                <div class="space">
                                    
                                </div>
                                <Button variant="contained" color="primary" onClick={handleClose}>Cancel</Button>
                            </div>
                        </div>
                        </Fade>
                    </Modal>
                </div>
            );
          }
        return (
            <div>
                {this.state.response ? <Table droplets={this.state.response.data.data} /> : "Loading"}
                
            </div>
        )
    }
}

export default TeacherCrud;