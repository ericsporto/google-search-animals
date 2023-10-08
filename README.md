# Google Search Animals

This project was developed as a technical test in the selection process for the frontend developer position.

## Project Overview

It is a search page, simulating the Google page where, using a fake data generator, we can search for categories of animals.

## Getting Started

To run the project, you need to clone it using the following command:
git clone https://github.com/ericsporto/google-search-animals.git

After cloning the repository, navigate to the project directory in your terminal and follow these steps:
Install the project dependencies:

`yarn`

Start the development server:

`yarn dev`

To run the tests:

`yarn test`


## Functionalities
`Home Page`
The following features were developed on the Home page:

.Layout (Header, Search Field, and Footer)
.Reusable input component
.Activation of search and field cleaning buttons via checks
.Search made via button click or pressing Enter on the keyboard
.Redirection to results page
.Full responsiveness of the page and components


`Results Page`
The following features were developed on the results page:

.Layout (Header and results area)
.Search via pressing enter on the keyboard
.Skeleton loading for feedback to the user while waiting for requests to be resolved
.Display of results in a harmonious way and following the previous layout pattern
.Treatment of results with specific messages
.Reusable Details Card component appearing when clicking on results
.Redirection when clicking on the logo to the main page
.Complete responsiveness, including Header, Results, and Card display of details in the form of a Modal


## Technologies Used
To develop the project, the following technologies and libraries were used:

ReactJs and NextJs for building the frontend
faker-js/faker for generating fake data
react-icons for adding icons to the application
zustand for state management
vitest for testing
TypeScript for type checking and reducing the risk of bugs in production


## The project is deployed on Vercel and can be accessed at the following URL:

`https://google-search-animals.vercel.app/`

## Author
Developed by Eric de Souza Porto Carvalho