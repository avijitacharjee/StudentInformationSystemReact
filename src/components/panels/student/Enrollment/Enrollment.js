import { Button, CircularProgress, Paper, Table } from '@material-ui/core';
import React from 'react';
import axios from 'axios';
import './styles.css';
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
        axios.get("http://127.0.0.1:8000/api/courses").then(
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
                'open': false,
                checked: false,
                courses : []
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
            const handleUpdate = (id)=>{
                this.props.history.push('teacher/update/'+id);
            }
            const handleChange = (event) => {
                console.log(event);
                this.setState({
                    checked : event.target.checked
                });
            }
            const handleCheckboxChange = (event, id) => {
                if (event.target.checked) {
                    state.courses.push(id);
                } else {
                    const index = state.courses.indexOf(id);
                    if (index > -1) {
                        state.courses.splice(index, 1);
                    }
                }
                console.log(state.courses);
            }
            const handleButtonClick = () => {
                console.log(state.courses.toString());
                let formData = new FormData();
                formData.append('user_id',this.props.match.params.id+'');
                formData.append('course_id', state.courses.toString());
                formData.append('session','abcd');
                formData.append('semester','5'); 
                axios.post("http://127.0.0.1:8000/api/enroll", formData).then(
                    response=> {
                        console.log(response);
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
                                    <td>
                                        
                                    </td>
                                    <td>Name</td>
                                    <td>Course Code</td>
                                    <td>Semester</td>
                                    <td>Credit</td>
                                    {/* <td></td> */}
                                    {/* <td></td> */}
                                    
                                </tr>
                            </thead>
                            <tbody>
                            {
                             (droplets.length > 0) ? droplets.map( (droplet, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                onChange={(event)=>handleCheckboxChange(event,droplet.id)}
                                            />
                                        </td>
                                        <td>{ droplet.name }</td>
                                        <td>{ droplet.course_code }</td>
                                        <td>{ droplet.semester}</td>
                                        <td>{ droplet.credit}</td>
                                        {/* <td> <Button variant="contained" color="primary" onClick={()=>handleUpdate(droplet.id)}> Update </Button> </td> */}
                                        {/* <td> <Button variant="contained" color="secondary" onClick={()=>handleOpen(droplet.id)}> Delete</Button></td> */}
                                    </tr>
                                    
                                )
                            }) : <tr><td colSpan="5">Loading...</td></tr> }
                            </tbody>
                        </table>
                        <div class="btn">
                            <Button variant="contained" color="primary" onClick={handleButtonClick}>Submit</Button>
                        </div>
                        
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
                {this.state.response ? <Table droplets={this.state.response.data.data} /> : 
                <div class="full">
                    <CircularProgress/>
                </div>
                }
                
            </div>
        )
    }
}

export default TeacherCrud;