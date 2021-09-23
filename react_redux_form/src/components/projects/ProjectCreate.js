import React from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../actions';
import ProjectForm from './ProjectForm';

class ProjectCreate extends React.Component {
    onSubmit = (formValues) => {
        this.props.createProject(formValues);
    }
    render() {
        return (
            <div className="jumbotron">
                <h1>Create a Project</h1>
                <ProjectForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createProject })(ProjectCreate);