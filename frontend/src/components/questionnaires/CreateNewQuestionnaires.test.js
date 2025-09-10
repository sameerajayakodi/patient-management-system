import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CreateNewQuestionnaires from './CreateNewQuestionnaires';

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <CreateNewQuestionnaires />
    </BrowserRouter>
  );
};

describe('CreateNewQuestionnaires', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    // Mock console.log to verify form data logging
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('renders the form with all fields', () => {
    renderComponent();
    
    expect(screen.getByText('Create New Questionnaire')).toBeInTheDocument();
    expect(screen.getByLabelText('Title:')).toBeInTheDocument();
    expect(screen.getByLabelText('Description:')).toBeInTheDocument();
    expect(screen.getByLabelText('Category:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create Questionnaire' })).toBeInTheDocument();
  });

  test('handles form input changes', () => {
    renderComponent();
    
    const titleInput = screen.getByLabelText('Title:');
    const descriptionTextarea = screen.getByLabelText('Description:');
    const categorySelect = screen.getByLabelText('Category:');
    
    fireEvent.change(titleInput, { target: { value: 'Test Questionnaire' } });
    fireEvent.change(descriptionTextarea, { target: { value: 'Test Description' } });
    fireEvent.change(categorySelect, { target: { value: 'medical' } });
    
    expect(titleInput.value).toBe('Test Questionnaire');
    expect(descriptionTextarea.value).toBe('Test Description');
    expect(categorySelect.value).toBe('medical');
  });

  test('logs form data and navigates on form submission', async () => {
    renderComponent();
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText('Title:'), { 
      target: { value: 'Test Questionnaire' } 
    });
    fireEvent.change(screen.getByLabelText('Description:'), { 
      target: { value: 'Test Description' } 
    });
    fireEvent.change(screen.getByLabelText('Category:'), { 
      target: { value: 'medical' } 
    });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Create Questionnaire' }));
    
    // Verify form data was logged
    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith('Form Data:', {
        title: 'Test Questionnaire',
        description: 'Test Description',
        category: 'medical'
      });
    });
    
    // Verify navigation was called
    expect(mockNavigate).toHaveBeenCalledWith('/questionnaires/new-questionnaire-second');
  });

  test('requires all fields to be filled before submission', () => {
    renderComponent();
    
    const submitButton = screen.getByRole('button', { name: 'Create Questionnaire' });
    
    // Try to submit empty form
    fireEvent.click(submitButton);
    
    // Form should not navigate if required fields are empty
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});