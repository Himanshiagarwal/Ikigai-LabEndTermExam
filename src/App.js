import React from 'react';
import Calculator from './Calculator';
import TodoApp from './TodoApp';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className="whole-page">
      <header className="header">
        <h1>Calculator and Todo list</h1>
      </header>
      <main className="main">
        <section className="calculator-section">
          <Calculator />
        </section>
        <section className="todo-app-section">
          <TodoApp />
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Website</p>
      </footer>
    </div>
  );
};

export default App;