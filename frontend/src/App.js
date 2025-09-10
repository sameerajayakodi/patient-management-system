import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateNewQuestionnaires from './components/questionnaires/CreateNewQuestionnaires';
import NewQuestionnaireSecond from './components/questionnaires/NewQuestionnaireSecond';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/questionnaires/new-questionnaire" replace />} />
          <Route path="/questionnaires/new-questionnaire" element={<CreateNewQuestionnaires />} />
          <Route path="/questionnaires/new-questionnaire-second" element={<NewQuestionnaireSecond />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;