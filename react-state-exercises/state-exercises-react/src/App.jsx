import { useState } from 'react';

const columns = [
  {
    id: 'todo',
    title: 'To Do',
  },
  {
    id: 'doing',
    title: 'Doing',
  },
  {
    id: 'done',
    title: 'Done',
  },
];

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Review React state',
      status: 'todo',
    },
    {
      id: 2,
      title: 'Practice updating arrays',
      status: 'doing',
    },
    {
      id: 3,
      title: 'Commit completed exercises',
      status: 'done',
    },
  ]);

  const [taskInput, setTaskInput] = useState('');

  const [taskStatus, setTaskStatus] = useState('todo');

  const handleAddTask = (e) => {
    e.preventDefault();

    if (taskInput.trim() === '') {
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      title: taskInput,
      status: taskStatus,
    };

    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });

    setTaskInput('');
    setTaskStatus('todo');
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => {
        return task.id !== id;
      });
    });
  };

  const handleMoveTask = (id, newStatus) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: newStatus,
          };
        }

        return task;
      });
    });
  };

  return (
    <main className="page">
      <section className="board">
        <header className="board-header">
          <p className="eyebrow">React Practice</p>
          <h1>Kanban Task Board</h1>
          <p>
            Practice adding, filtering, updating, and removing tasks with React
            state.
          </p>
        </header>

        <form className="task-form" onSubmit={handleAddTask}>
          <label htmlFor="task-title">New Task</label>

          <div className="form-row">
            <input
              type="text"
              id="task-title"
              value={taskInput}
              placeholder="Add a new task"
              onChange={(e) => {
                setTaskInput(e.target.value);
              }}
            />

            <select
              value={taskStatus}
              onChange={(e) => {
                setTaskStatus(e.target.value);
              }}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit">Add Task</button>
          </div>
        </form>

        <div className="columns-grid">
          {columns.map((column) => {
            const filteredTasks = tasks.filter((task) => {
              return task.status === column.id;
            });

            return (
              <section className="task-column" key={column.id}>
                <div className="column-header">
                  <h2>{column.title}</h2>
                  <span>{filteredTasks.length}</span>
                </div>
                <div className="task-list">
                  {filteredTasks.length === 0 && (
                    <p className="empty-message">No tasks here yet.</p>
                  )}
                  {filteredTasks.map((task) => {
                    return (
                      <article key={task.id} className="task-card">
                        <p>{task.title}</p>

                        <div className="tasks-actions">
                          <button
                            type="button"
                            onClick={() => {
                              handleDeleteTask(task.id);
                            }}
                          >
                            Delete
                          </button>
                          {task.status !== 'todo' && (
                            <button
                              type="button"
                              onClick={() => {
                                handleMoveTask(task.id, 'todo');
                              }}
                            >
                              Move to To Do
                            </button>
                          )}

                          {task.status !== 'doing' && (
                            <button
                              type="button"
                              onClick={() => {
                                handleMoveTask(task.id, 'doing');
                              }}
                            >
                              Move to doing
                            </button>
                          )}

                          {task.status !== 'done' && (
                            <button
                              type="button"
                              onClick={() => {
                                handleMoveTask(task.id, 'done');
                              }}
                            >
                              Move to done
                            </button>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default App;
