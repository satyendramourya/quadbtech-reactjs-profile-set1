# GitHub Job Portal

Welcome to the GitHub Job Portal project! This is a web application built using React, React Router, and Redux to help you find job listings for different programming languages on GitHub Jobs.

## Assignment Guidelines

Please follow the following guidelines while working on this assignment:

1. **Assignment Duration**: You are expected to complete the assignment within 1 day and submit the entire code.

2. **Readme**: Make sure to read this Readme to understand the project requirements.

3. **React Router**: Utilize React Router for routing within the application.

4. **Redux**: Use Redux for state management to efficiently manage application-wide state.

5. **UI and Functionality**:
   - Implement a login/signup feature with minimal but relevant login details.
   - Utilize local storage/session storage to maintain the user's session once they are logged in.
   - Create a landing page with a single input to select the programming language the user is interested in for job searches.
   - Make requests to the GitHub Jobs API (or jsearch API) to fetch job listings based on the selected programming language.
   - Display a list of job listings and allow users to view job details.
   - Implement a separate page for viewing detailed job postings with an option to apply.
   - When a user chooses to apply, present them with a form asking for:
     - Name
     - Email
     - Cover Letter Note
     - Optional file upload for resume, cover letter, etc.
   - After the user submits the form, show a success page with a preview of their application. No API requests are needed for this step; use state management to display the data within the app.

## GitHub Public API Replacement

Please note that the GitHub public API has been deprecated, and for this project, we have used the jsearch API to retrieve job listings.

## About the Author

This project was created by Satyendra Mourya.

## Live Demo

You can access the live demo of this project at [Live Demo](https://quadbtech-reactjs-profile-set1.vercel.app/).

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/github-job-portal.git

2. Navigate to the project directory:

   ```bash
   cd github-job-portal
   
3. Install dependencies:

   ```bash
   npm install
4. Start the development server:
   ```bash
   npm start

5. Open your browser and visit http://localhost:3000 to view the application.

