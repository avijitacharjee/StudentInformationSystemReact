import React from 'react';
class TeacherUpdate extends React.Component {
    render() {
        return (
            <div>
                {this.props.match.params.id}
                 
            </div>
        )
    }
}
export default TeacherUpdate;