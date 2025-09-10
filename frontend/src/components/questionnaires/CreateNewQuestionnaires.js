import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateNewQuestionnaires = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.title || !formData.description || !formData.category) {
      console.log('Form validation failed: All fields are required');
      return;
    }
    
    // Log form data (existing functionality)
    console.log('Form Data:', formData);
    
    // Process form data here (existing functionality would be maintained)
    // This could include API calls, validation, etc.
    
    // Navigate to the second questionnaire page after successful form submission
    navigate('/questionnaires/new-questionnaire-second');
  };

  return (
    <div className="create-new-questionnaires">
      <h1>Create New Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a category</option>
            <option value="medical">Medical</option>
            <option value="psychological">Psychological</option>
            <option value="demographic">Demographic</option>
          </select>
        </div>
        
        <button type="submit" className="submit-btn">
          Create Questionnaire
        </button>
      </form>
    </div>
  );
};

export default CreateNewQuestionnaires;