# About this project

This is a Student Result Management System created with a python backend and react 
frontend components. This is a single page application in React and consists of 4 links, the home page, the students page, the courses page and the results page which can be accessed from the navigation bar at the top.

In the home page, the user will see a Navigation Bar that can lead to the other pages in this app.

In the students page, the user is able to add a first name, family name and date of birth for an individual. Once submit is clicked that person along with their info is added to a tabular list.

In the courses page, the user is able to add in a course title, Once submit is clicked the course names shows up in a tabular list

In the results page, the user can select a student that they have added in the students page and a course that they have added in the courese page followed by a letter grade of A-F for that course. Once submit is clicked all the content selected by the user shows up in a tabular list on the results page. 

## Must Haves folders/files

You must have a flaskApp folder and a reactApp folder.

Amongst the flaskApp folder you should have the following:

>flaskApp
    app.py
    venv (folder)

Amongst the reactApp folder you should have the following:

>reactApp
    >node-modules (folder)
    >public (folder)
    >src (folder)
        >components (folder)
            Courses.jsx
            HomeScreen.jsx
            Results.jsx
            Students.jsk

        >Styles (folder)
            main.css

    App.js
    index.js
    .gitignore
    package-lock.json
    package.json
    README.md

package-lock.json


### How to run the app

You must have Node.js, Python3, and Flask installed for the following app to work 

1. Pull the git repository into a folder
2. Open 1 terminal and cd into the flaskApp folder
3. Then run the following commands:
	1) source venv/bin/activate
	2) python3 app.py

4. Now that you have the server running, open a new terminal and cd into the reactApp folder
5. Run the following commands:
	1) npm install
	2) npm start

6) This will then direct you to a localhost page on a web browser where you can use the student management system 

NOTE: You may have to run the following command in the flaskApp terminal (1st terminal opened) in case of any installation issues with CORS: pip install flask_cors.





<!-- ### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->


