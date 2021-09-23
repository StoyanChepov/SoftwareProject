import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../../actions';

class ProjectsList extends React.Component {
   
    componentDidMount() {
        this.props.fetchProjects();
    }
    renderEmptyListMessage() {
        return (
            <p className="text-center">
                No projects Found. <br/>
                Create new project by clicking &nbsp;
                <Link to='/project/new'>here</Link>
            </p>
        );
    }
    renderList() {
        return this.props.projects.map((project, i) => {
            return (
                <Link to={`/project/${project.id}`} key={i} className="list-group-item list-group-item-action flex-column align-items-start" id="1">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{project.name}</h5>
                    </div>
                </Link>
            );
        })
    }

    render() {
        const containsData = this.props.projects.length > 0
        return (
            <div id="projectId" className="jumbotron">
                <h1>Projects</h1>
		        <br/>
                <div className="list-group-2">
                    {containsData ? this.renderList() : this.renderEmptyListMessage()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: Object.values(state.projects)
    };
}


export default connect(mapStateToProps, { fetchProjects })(ProjectsList);