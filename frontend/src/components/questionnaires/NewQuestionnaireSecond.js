import React from 'react';
import { Link } from 'react-router-dom';

const NewQuestionnaireSecond = () => {
  return (
    <div className="new-questionnaire-second">
      <h1>Questionnaire Created Successfully!</h1>
      <p>Your questionnaire has been created and you've successfully navigated to the second page.</p>
      
      <div className="navigation-links">
        <Link to="/questionnaires/new-questionnaire" className="btn-link">
          Create Another Questionnaire
        </Link>
      </div>
      
      <div className="success-message">
        <h2>Next Steps:</h2>
        <ul>
          <li>Review your questionnaire settings</li>
          <li>Add questions to your questionnaire</li>
          <li>Configure response options</li>
          <li>Publish your questionnaire</li>
        </ul>
      </div>
    </div>
  );
};

export default NewQuestionnaireSecond;