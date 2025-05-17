// App.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';

export default function App() {
  const [gameCode, setGameCode] = useState('');
  const [joined, setJoined] = useState(false);
  const [nickname, setNickname] = useState('');
  const [answerState, setAnswerState] = useState(null); // null, 'correct', 'incorrect'

  return (
    <motion.div
      className="main-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={`frame ${answerState}`}>
        <h1 className="title">QuizBlitz</h1>

        {!joined ? (
          <div className="form">
            <input
              className="input"
              placeholder="Enter Game Code"
              value={gameCode}
              onChange={(e) => setGameCode(e.target.value)}
            />
            <input
              className="input"
              placeholder="Enter Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <button className="button" onClick={() => setJoined(true)}>
              Join Game
            </button>
          </div>
        ) : (
          <div className="joined">
            <p>Welcome, <strong>{nickname}</strong>!</p>
            <p>Waiting for game to start...</p>

            <div className="flex gap-4 mt-6">
              <button className="button" onClick={() => setAnswerState('correct')}>
                Simulate Correct
              </button>
              <button className="button" onClick={() => setAnswerState('incorrect')}>
                Simulate Incorrect
              </button>
              <button className="button" onClick={() => setAnswerState(null)}>
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
