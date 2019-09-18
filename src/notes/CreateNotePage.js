import React from 'react';
import { withRouter } from 'react-router-dom';
import { createNote } from './NotesApi';

class CreateNotePageCore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {title: '', text: '', errorOnCreate: false};
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
                    </label>
                    <label>
                        Text:
                        <textarea name="text" value={this.state.text} onChange={this.handleTextChange} />
                    </label>
                    <input type="submit" value="Create" />
                    {this.renderError()}
                </form>
            </div>
        );
    }

    renderError() {
        if (!this.state.errorOnCreate) {
            return null;
        }

        return (<div>Error. Try again</div>)
    }

    handleTitleChange = (event) => {
        this.setState({...this.state, title: event.target.value});
    }

    handleTextChange = (event) => {
        this.setState({...this.state, text: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({...this.state, errorOnCreate: false});

        createNote(this.state.title, this.state.text)
            .then(json => {
                this.props.history.push('/notes');
            })
            .catch(err => {
                this.setState({...this.state, errorOnCreate: true});
            });
    }
}

export const CreateNotePage = withRouter(CreateNotePageCore);
