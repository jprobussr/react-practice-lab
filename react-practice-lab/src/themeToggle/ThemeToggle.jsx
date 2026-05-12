import { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      return savedTheme;
    }

    return 'dark';
  });

  const handleToggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'dark') {
        return 'light';
      }

      return 'dark';
    });
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main className={`page ${theme}`}>
      <section className="theme-toggle">
        <p className="eyebrow">React Practice</p>
        <h1>Theme Toggle</h1>
        <button type="button" onClick={handleToggleTheme}>
          {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </section>
    </main>
  );
};

export default ThemeToggle;
