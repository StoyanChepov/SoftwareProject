import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotes } from '../../actions';

class NotesList extends React.Component {
    componentDidMount() {
        this.props.fetchNotes();
    }
    renderEmptyListMessage() {
        return (
            <p className="text-center">
                No notes Found. <br/>
                Create new Note by clicking &nbsp;
                <Link to='/note/new'>here</Link>
            </p>
        );
    }
    renderNotesList() {
        return this.props.notes.map((note, i) => {
            return (
                <Link to={`/note/${note.id}`} key={i} className="list-group-item list-group-item-action flex-column align-items-start" id="2">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{note.title}</h5>
                    </div>
                </Link>
            );
        })
    }

    render() {
        const containsData = this.props.notes.length > 0
        return (
            <div id="noteId" className="jumbotron">
                <h1>Notes</h1>
		        <br/>
                <div className="list-group-1">
                    {containsData ? this.renderNotesList() : this.renderEmptyListMessage()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: Object.values(state.notes)
    };
}

export default connect(mapStateToProps, { fetchNotes })(NotesList);