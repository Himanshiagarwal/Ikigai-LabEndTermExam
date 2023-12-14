import React, { useState, useEffect } from 'react';
import { FaHistory } from 'react-icons/fa';
import './Calculator.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const historyContainer = document.getElementById('history-container');
    if (historyContainer) {
      historyContainer.scrollTop = historyContainer.scrollHeight;
    }
  }, [history, showHistory]);

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const clearExpression = () => {
    setExpression('');
  };

  const evaluateExpression = () => {
    try {
      const result = eval(expression);
      setHistory([...history, { expression, result, dateTime: new Date().toLocaleString() }]);
      setExpression(result.toString());
    } catch (error) {
      setHistory([...history, { expression, result: 'Error', dateTime: new Date().toLocaleString() }]);
      setExpression('Error');
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="calculator">
      <div className="history-button" onClick={toggleHistory}>
        <FaHistory />
      </div>
      <div className="display">{expression}</div>
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', '%'].map((button) => (
          <div key={button} className="button" onClick={() => handleButtonClick(button)}>
            {button}
          </div>
        ))}
        <div className="button equal" onClick={evaluateExpression}>
          =
        </div>
        <div className="button ac" onClick={clearExpression}>
          AC
        </div>
      </div>
      {showHistory && (
        <div className="history" id="history-container">
          <h3>History</h3>
          <ul>
            {history.map((entry, index) => (
              <li key={index}>
                <span>{entry.expression}</span>
                <span> = </span>
                <span>{entry.result}</span>
                <span className="date-time">{entry.dateTime}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Calculator;