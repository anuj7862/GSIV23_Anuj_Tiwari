# GSynergy React Web Challenge: GSIV23

This README provides detailed instructions for running the code and also highlights accomplishments, outlines potential improvements, and feedback for this Challenge.

## Table of Contents
- [Getting Started](#getting-started)
- [Highlighted Achievements](#highlighted-achievements)
- [Possible Improvements](#possible-improvements)
- [Feedback](#feedback)

## Getting Started

To get started with the App, follow these steps: 

1. Clone the repository: `git clone https://github.com/anuj7862/GSIV23_Anuj_Tiwari.git`
2. In the project directory install dependencies using the command: `npm install`
4. Obtain ACCESS TOKEN for API from TMDB (`https://www.themoviedb.org/settings/api`)
5. After getting the Access token value from TMDB add the ACCESS TOKEN value in the `appEnvConfig` file :
   `export const ACCESS_TOKEN = <Your Access Token value>`
7. Launch the app: `npm start`
8. Access the app in your browser at [http://localhost:3000](http://localhost:3000)


## Highlighted Achievements

Here are some achievements that demonstrate my proficiency in this challenge:

### 1. Code Structure and Component Reusability:

Organized the codebase into folders like `pages`, `component`, `state`, and `config`, enabling a clear separation of concerns. Additionally,  designed reusable components like `MovieCard`, `MovieDetails`, and `MovieList` for maintainability and scalability.

### 2. Utilization of Sass for Styling:

Employed Sass to create the CSS files for this project. This approach allowed me to harness the power of variables, nesting, and other advanced features to produce maintainable and organized stylesheets.

### 3. State Management with React-Redux

Employed the efficient and robust technique of State Management through React-Redux in conjunction with Redux-Thunk to handle state and API interactions. This includes creating well-structured actions and reducers to manage data fetched from APIs. By utilizing middleware like Redux-Thunk, I am able to manage asynchronous operations seamlessly, providing a smooth user experience.

### 4. Seamless API Integration

Within this application, seamless integration with external APIs has been achieved to fetch essential data. These API calls have been meticulously encapsulated, and a comprehensive error-handling mechanism is in place. This design ensures that users are provided with a fluid and uninterrupted experience, even in the face of potential errors during data retrieval.

### 5. Responsive Design

Incorporated media queries and utilized responsive design libraries to ensure that the App provides an optimal viewing experience across a wide range of devices. By leveraging both custom media queries and responsive design tools.

### 6. Dynamic Color Coding for Movie Ratings

Implemented a dynamic color coding for movie ratings on both screens, where ratings greater than or equal to 7 are highlighted in green, ratings greater than or equal to 4 are highlighted in amber, and the rest are highlighted in red. This feature enhances the visual appeal of the app.

### 7. Efficient Routing and Navigation with React Router:

Integrated `react-router-dom' to handle routing and navigation within the App. This allows users to easily navigate between different sections of the app while maintaining a smooth and intuitive user experience.


## Possible Improvements

With an additional 4 hours, I would focus on enhancing the following enhancements further:

### 1. Focused Unit Testing

I will allocate time to implement comprehensive unit tests, with a particular focus on critical components and interactions to ensure the stability and reliability of the app.

### 2. Optimization Efforts

I will perform optimization tasks such as code splitting, lazy loading, and performance tuning to ensure that the app performs efficiently and delivers a seamless experience.

### 3. Accessibility and Advanced Features

I will further enhance accessibility by conducting audits, improving keyboard navigation, and implementing advanced features that enhance the overall user experience.

### 4. Error Handling with Custom Modals: 

I will try to implement a more robust error-handling mechanism and also create custom modal dialogs to provide users with clear and informative error messages, enhancing the user experience during unexpected scenarios.

## Feedback

Thank you for providing the opportunity to complete this challenge. I found the exercise to be engaging and beneficial for assessing my React skills. The instructions were clear, and the project requirements were well-defined.

In terms of improvement, it might be helpful to include a section in the instructions that outlines the expected scope and complexity of the solution. This could provide candidates with a better understanding of the level of detail and features they should aim to include in their submissions.

Overall, I believe the challenge serves its purpose effectively and provides a solid foundation for evaluating React proficiency. Thank you again for the opportunity, and I look forward to any potential future collaborations :).
