import { useState } from 'react';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: 'Review React state patterns',
    },
    { id: 2, text: 'Practice array updates' },
    {
      id: 3,
      text: 'Practice and improve daily.',
    },
  ]);

  const [noteInput, setNoteInput] = useState('');

  const handleAddNote = (e) => {
    e.preventDefault();

    if (noteInput.trim() === '') {
      return;
    }

    const newNote = {
      id: crypto.randomUUID(),
      text: noteInput,
    };

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    setNoteInput('');
  };

  const handleRemoveNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id;
      });
    });
  };

  return (
    <main className="page">
      <section className="status-card">
        <p className="eyebrow">React State Exercise</p>
        <h1>Notes App Mini</h1>

        <p className="role">
          Practice controlled inputs and rendering user data.
        </p>

        <form className="note-form" onSubmit={handleAddNote}>
          <input
            type="text"
            placeholder="Write a note"
            className="note-input"
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
          />

          <button type="submit" className="toggle-button">
            Add Note
          </button>
        </form>

        {notes.length > 0 ? (
          <ul className="movie-list">
            {notes.map((note) => {
              return (
                <li className="movie-item" key={note.id}>
                  <span>{note.text}</span>

                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => handleRemoveNote(note.id)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="empty-state">No notes yet. Add your first note.</p>
        )}
      </section>
    </main>
  );
};

export default App;
