<strong>React.js Project Assignment</strong>

Your task is to <strong>design</strong> and <strong>implement</strong> a web application (Single Page Application) using React.js. Use a service like Kinvey or Firebase for your <strong>back-end</strong> or create your own with Node.js and MongoDB or a framework in another language (ASP.NET, Spring, Symfony). It can be a <strong>discussion forum, blog system, e-commerce site, online gaming site, social network,</strong> or any other web application of your choice.
<h2>1.     Application Structure</h2>
The application should have:
<ul>
 	<li>Public Part (Accessible without authentication)</li>
 	<li>Private Part (Available for Registered Users)</li>
</ul>
<h3>1.1 Public Part</h3>
The public part of your projects should be visible <strong>without authentication</strong>. This public part could be the application start page, the user login, and user registration forms, as well as the public data of the users, e.g., the blog posts in a blog system, the public offers in a bid system, the products in an e-commerce system, etc.

<strong>1.2 Private Part (User Area)</strong>

Registered users should have a personal area in the web application <strong>accessible after</strong> <strong>successful login</strong>. This area could hold for example the user's profiles management functionality, the user's offers in a bid system, the user's posts in a blog system, the user's photos in a photo-sharing system, the user's contacts in a social network, etc.
<h2>2.     General Requirements</h2>
Your Web application should use the following technologies, frameworks, and development techniques:
<ul>
 	<li>At least 3 different <strong>dynamic pages</strong> (pages like about, contacts, etc. do not count towards that figure)</li>
 	<li>Must have specific <strong>views</strong>:
<ul>
 	<li><strong>Catalog</strong> – list of all created records</li>
 	<li><strong>Details</strong> – information about a specific record</li>
</ul>
</li>
 	<li>At least one collection, different from the User collection, with all CRUD operations (create, read, update, delete)
<ul>
 	<li><strong>Logged in users</strong> – create <strong>records</strong> and <strong>request</strong> to the REST API, <strong>interaction</strong> with the records (via Likes, Dislikes, Comments, etc.)</li>
 	<li><strong>Logged in (author)</strong> – to be able to <strong>Edit</strong> / <strong>Delete</strong> their records</li>
 	<li>A<strong> Guest </strong>should have <strong>access</strong> to basic website <strong>information</strong> (catalog, details), but <strong>not</strong> to the <strong>functional activities</strong></li>
</ul>
</li>
 	<li>Use React.js for the <strong>client-side</strong></li>
 	<li>Communicate to a <strong>remote service</strong> (via REST, sockets, GraphQL, or a similar client-server technique)</li>
 	<li>Implement <strong>authentication</strong></li>
 	<li>Implement <strong>client-side routing</strong></li>
 	<li>Demonstrate use of programming concepts, <strong>specific to the React library</strong>: stateless and state full components, bound forms, synthetic events, Component Styling, etc.</li>
 	<li>Use a <strong>source control system</strong>, like GitHub</li>
 	<li><strong>It is required to have committed in GitHub for at least 3 days</strong></li>
</ul>
<h2>3.     Other requirements</h2>
<ul>
 	<li>Apply <strong>error handling</strong> and <strong>data validation</strong> to avoid crashes when invalid data is entered</li>
 	<li>The application should be divided into <strong>components</strong> with <strong>separate CSS files</strong>.</li>
 	<li>Brief <strong>documentation</strong> on the project and project architecture (as .md file)</li>
 	<li>Demonstrate use of programming concepts - React Hooks, Context API</li>
</ul>
<h2>4.     Public Project Defense</h2>
Each student will have to deliver a <strong>public defense</strong> of their work in front of the other students, trainers, and assistants. Students will have <strong>only 20 minutes</strong> for the following:
<ul>
 	<li><strong>Demonstrate</strong> how the application works (very shortly)</li>
 	<li>Show the <strong>source code</strong> and explain how it works</li>
 	<li>Answer <strong>questions</strong></li>
</ul>
&nbsp;

Please be <strong>strict in the timing</strong>! In the <strong>20<sup>th</sup></strong> minute, you <strong>will be interrupted</strong>! It is a good idea to leave <strong>the last 5 minutes for questions.</strong>

Be <strong>well prepared</strong> to present the maximum of your work for the minimum amount of time. Open <strong>the project assets</strong> beforehand to save time.
<h2>5.     Bonuses</h2>
<ul>
 	<li>Use a <strong>state management</strong> solution (React Redux) instead of Context API</li>
 	<li>Write <strong>Unit Tests</strong> for your code</li>
 	<li>Good UI and UX</li>
 	<li>Use a <strong>file storage cloud API</strong>, e.g., <strong>Dropbox</strong>, <strong>Google Drive,</strong> or other for storing the files</li>
 	<li>Connect to an external API, like Google Maps, AccuWeather, etc.</li>
 	<li><strong>Deploy</strong> <strong>the</strong> <strong>application</strong> in a cloud (Heroku, Firebase)</li>
 	<li><strong>Bonuses depend on the complexity of the implementation</strong></li>
 	<li>Anything that is not described in the assignment is a bonus if it has some practical use</li>
</ul>
<h2>6.     Assessment Criteria</h2>
<h3>General Requirements – 50 %</h3>
Implementing all the general requirements will grant you a place on the defense schedule. All projects that do not have the general requirements will not be accepted for defense.
<h3>Other Requirements – 20 %</h3>
<h3>Functionality Presentation – 10 %</h3>
Adequately demonstrate the requested functionality. Know your way around the application and quickly demonstrate the code.
<h3>Answering Questions – 20 %</h3>
Answer questions about potential functionality outside the scope of the project.
<h3>Bonuses – up to 10 %</h3>
Additional functionality or libraries outside the general requirements, with motivated usage.

<br><br><hr>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
