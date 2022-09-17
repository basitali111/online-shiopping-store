# Online Shop

Online Shop - A web application based on an external API which contains information about Products for sell. The web app allows the user to view one page with a list of Products that could be filtered by some parameters. it's a list of metrics that can be filtered by each specific item on sell. It also shows one page for the item details.

## Project requirements
API First you need to choose an API to base the development of the webapp on. The API should allow you to get numeric values based on a parameter. We recommend that you choose an API that is open or needs an API key. If you choose an API that require authentication, you should implement it on your own.

### Some example APIs are:

Financial modeling prep API: stock data.
Air pollution API: air quality data.
You can find many APIs in this GitHub repo or in ProgrammableWeb. Some of the APIs requires a token for authentication and some others are just open.

## Design

You should follow these design guidelines, including:
Colors (select one main color for your website).
Typography: font face, size and weight.
Layout: composition and space between elements.
Original design idea by Nelson Sakwa on Behance.

The Creative Commons license of the design requires that you give appropriate credit to the author. Therefore, you must do it in the README of your project.

Interactions

## Home page

When the page loads, the webapp shows the list of categories that could be filtered out by some parameter, for example by the category name.
Along with the category name, you will display some numeric values per category that come from the API.
When the user clicks (or taps) on a category item, the application navigates to the details page.
Details page

In the details page, the webapp retrieves data from the API to show detailed data in the category.
When the user clicks on the "Back" button (<), the user navigates to the home page.
Testing requirements

Create unit tests for pure functions in your Redux code.
Create integration tests for your application using the React Testing Library.
You may need to mock the access to the API, so that your tests don't send actual requests.
You may need to mock the connection to the Redux Store.
Technical requirements

The project is a single-page application (SPA) built with React and Redux.
The data retrieved from the API should be stored in the Redux store.
You should filter the data that you retrieve from the API using a Filter stateless component.
Every page (the main page and the pages for each item) should have a unique route within the SPA.
The project should be deployed and accessible online (add a link to the online version of your app to your README file).
## Built With
- HTML
- CSS
- JavaScrpt
- REACT
= Fakestoreapi
Live Demo in progress , web app to be deployed...()
[Live Demo]('https://basit-online-shopping.netlify.app/')
 ## Setup
To clone the repository run `` in your terminal
run cd Leaderboard
run npm install
run npm run build
open the app directory using this > cd math-magician
run npm start to view wbsite
npm test Launches the test runner in the interactive watch
Prerequisites
-Github flow knowledge. -Basic CSS,HTML,JavaScript,React. -Installation of files.

## Install
Set up Github Actions
Set up linter > Lighthouse . ,Stylelint ,
Added Eslint
REACT and redux installations
npm install to add dependencies after cloning
npm start to view website in browser

## Author
👤 **Basit Ali**

- GitHub: [@githubhandle](https://github.com/basitali111)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/basit-ali-3961141b3/)
- Twitter: [Twitter](https://twitter.com/BasitAl35031734)
Acknowlwdgement
Nelson Sakwa on Behance for design the Creative Commons License.

🤝 Contributing
Contributions and feature requests are welcome!

## 📝 License

This project is [MIT](./MIT.md) licensed.