import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { NotesPage } from './notes/NotesPage';
import { CreateNotePage } from './notes/CreateNotePage';

function App() {
  return (
    <div class="container">
      <Router>
        <Route path="/" exact component={NotesPage} />
        <Route path="/notes/" exact component={NotesPage} />
        <Route path="/notes/create" component={CreateNotePage} />
      </Router>
    </div>
  );
}

export default App;
