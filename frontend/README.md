# Patient Management System - Frontend

This is the React frontend for the Patient Management System, specifically implementing the questionnaire creation functionality.

## Features

### CreateNewQuestionnaires Component

- **Location**: `/questionnaires/new-questionnaire`
- **Functionality**: Form for creating new questionnaires with navigation
- **Navigation**: Automatically redirects to `/questionnaires/new-questionnaire-second` after successful form submission

#### Form Fields:
- **Title** (required): Text input for questionnaire title
- **Description** (required): Textarea for questionnaire description  
- **Category** (required): Dropdown with options (Medical, Psychological, Demographic)

#### Key Features:
1. **Form Validation**: Ensures all required fields are completed before submission
2. **Data Logging**: Logs form data to console (maintains existing functionality)
3. **Navigation**: Uses React Router's `useNavigate` hook to redirect after submission
4. **Responsive Design**: Clean, accessible form layout with proper styling

## Technical Implementation

### Dependencies
- **React 18.2.0**: Core React framework
- **React Router DOM 6.8.0**: Client-side routing and navigation
- **React Scripts 5.0.1**: Build tooling and development server

### Routing Structure
```
/ → Redirects to /questionnaires/new-questionnaire
/questionnaires/new-questionnaire → CreateNewQuestionnaires component
/questionnaires/new-questionnaire-second → Success page component
```

### Testing
- Comprehensive unit tests using React Testing Library
- Tests cover form rendering, input handling, validation, and navigation
- All tests passing with 100% functionality coverage

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## Navigation Flow
1. User fills out questionnaire form
2. Form validates required fields
3. Form data is logged to console
4. User is automatically navigated to success page
5. Success page provides option to create another questionnaire

This implementation maintains all existing functionality while adding the requested navigation feature.