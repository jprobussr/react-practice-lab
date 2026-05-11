import { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([
    { id: 1, name: 'Maya Chen', role: 'Designer', isLead: false },
    { id: 2, name: 'Jordan Lee', role: 'Developer', isLead: false },
    { id: 3, name: 'Maya Chen', role: 'QA Tester', isLead: false },
    { id: 4, name: 'John Probus Sr', role: 'CEO', isLead: true },
  ]);

  const handleToggleLead = (id) => {
    setTeam((prevTeam) => {
      return prevTeam.map((member) => {
        if (member.id === id) {
          return {
            ...member,
            isLead: !member.isLead,
          };
        }

        return member;
      });
    });
  };

  const handleAddMember = () => {
    const rosterOptions = [
      { name: 'Avery Brooks', role: 'Frontend Developer' },
      { name: 'Taylor Kim', role: 'Product Manager' },
      { name: 'Chris Walker', role: 'Backend Developer' },
      { name: 'Jamie Patel', role: 'UX Designer' },
    ];

    const randomMember =
      rosterOptions[Math.floor(Math.random() * rosterOptions.length)];

    const newMember = {
      id: crypto.randomUUID(),
      name: randomMember.name,
      role: randomMember.role,
      isLead: false,
    };

    setTeam((prevTeam) => {
      return [...prevTeam, newMember];
    });
  };

  const handleRemoveMember = (id) => {
    setTeam((prevTeam) => {
      return prevTeam.filter((member) => {
        return member.id !== id;
      });
    });
  };

  return (
    <main className="page">
      <section className="status-card">
        <p className="eyebrow">React State Exercise</p>
        <h1>Team Roster</h1>
        <p className="role">Practice managing people in array state.</p>

        <ul className="movie-list">
          {team.map((member) => {
            return (
              <li className="movie-item" key={member.id}>
                <div>
                  <span>{member.name}</span>
                  <small>{member.role}</small>
                </div>
                {member.isLead && <strong className="lead-badge">Lead</strong>}

                <button
                  className="delete-button"
                  onClick={() => handleToggleLead(member.id)}
                >
                  {member.isLead ? 'Remove Lead' : 'Make Lead'}
                </button>

                <button className="delete-button" onClick={() => handleRemoveMember(member.id)}>Remove Member</button>
              </li>
            );
          })}
        </ul>

        <button className="toggle-button" onClick={handleAddMember}>
          Add Team Member
        </button>
      </section>
    </main>
  );
};

export default App;
