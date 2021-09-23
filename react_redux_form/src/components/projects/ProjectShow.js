import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProject, deleteProject } from '../../actions';
import LoadingSpinner from '../LoadingSpinner';

class ProjectShow extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchProject(id);
    }
    handleDeleteClick = () => {
        const { id } = this.props.match.params;
        this.props.deleteProject(id);
    }
    render() {
        if (!this.props.project) {
            return <LoadingSpinner />
        }
        const { id, name } = this.props.project;
        return (
            <div className="jumbotron">
                <h1>{name}</h1>
                <br/>
                <Link to={`/project/edit/${id}`} className="btn btn-success">Edit</Link>
                <button style={{ marginLeft: '10px' }} type="button" onClick={this.handleDeleteClick} className="btn btn-danger">Delete</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { project: state.projects[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchProject, deleteProject })(ProjectShow);