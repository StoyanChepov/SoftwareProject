import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NotesList from './notes/NotesList';
import ProjectsList from './projects/ProjectsList';
import history from '../history';
import Header from './Header';
import NoteShow from './notes/NoteShow';
import ProjectCreate from './projects/ProjectCreate';
import ProjectShow from './projects/ProjectShow';
import NoteCreate from './notes/NoteCreate';
import NoteEdit from './notes/NoteEdit';

const App = () => {
    return (
        <Router history={history}>
            <div>
                <Header />
                <main role="main" className="container">
                    <Switch>
                        <Route exact path="/" exact component={ProjectsList} />
                        <Route path="/notes" exact component={NotesList} />
                        <Route path="/note/new" exact component={NoteCreate} />
                        <Route path="/note/edit/:id" exact component={NoteEdit} />
                        <Route path="/note/:id" component={NoteShow} />
                        <Route path="/project/new" exact component={ProjectCreate} />
                        <Route path="/project/:id" component={ProjectShow} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;