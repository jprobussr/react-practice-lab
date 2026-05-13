import { useState, useEffect } from 'react';

const PassingThoughts = () => {
  const [text, setText] = useState('');
  const [thoughts, setThoughts] = useState([
    {
      id: 1,
      text: 'This is a passing thought.',
      expiresAt: Date.now() + 15000,
    },
  ]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleRemoveThought = (id) => {
    setThoughts((prevThoughts) => {
      return prevThoughts.filter((thought) => {
        return thought.id !== id;
      });
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setThoughts((prevThoughts) => {
        return prevThoughts.filter((thought) => {
          return thought.expiresAt > Date.now();
        });
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === '') {
      return;
    }

    const newThought = {
      id: crypto.randomUUID(),
      text: text.trim(),
      expiresAt: Date.now() + 15000,
    };

    setThoughts((prevThoughts) => {
      return [newThought, ...prevThoughts];
    });

    setText('');
  };

  return (
    <section className="thoughts-app">
      <header className="hero">
        <p className="eyebrow">Learn React Hooks</p>

        <h1>Passing Thoughts</h1>

        <p className="hero-text">
          What if you could post something and know it wouldn't live forever?
        </p>

        <p className="hero-text">
          In this project, we'll build a place for our passing thoughts.
        </p>

        <p className="hero-text">
          Once you add a short thought, it'll disappear after just 15 seconds.
        </p>
      </header>

      <form className="thought-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's on your mind?"
          aria-label="What's on your mind?"
          value={text}
          onChange={handleTextChange}
        />

        <button type="submit">Add</button>
      </form>

      <div className="thoughts-container">
        <p className="thought-count">Thoughts: {thoughts.length}</p>
        {thoughts.map((thought) => {
          return (
            <article className="thought-card" key={thought.id}>
              <p className="thought-text">{thought.text}</p>

              <button
                className="remove-button"
                onClick={() => {
                  handleRemoveThought(thought.id);
                }}
              >
                x
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PassingThoughts;
