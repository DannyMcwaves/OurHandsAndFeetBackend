# Our Hands And Feet Back end
[![CircleCI](https://circleci.com/gh/WebJamApps/OurHandsAndFeetBackend.svg?style=svg)](https://circleci.com/gh/WebJamApps/OurHandsAndFeetBackend)


<h3>Install</h3>
- npm install
- Request a copy of the .env file, which includes credentials to development mLab and to connect to the Google Auth Service
- There may be times when you need to <b>npm run cleaninstall</b><br>This eliminates any conflicts with existing node modules and new ones being used.

<h3>Run the server</h3>
<b>npm start</b> starts the express server at localhost:7000<br>
<br>
<b>npm run debug</b> also starts the node debugger, which allows you to use Chrome browser to debug. You should also install the NIM add-on to Chrome and set it to automatic mode.


<h3>Authorization</h3>
The .env contains a variable that points to the localhost of the front end and other required credentials.<br>

<h3>test</h3>
<b>npm test</b><br>
runs the tests and generates a coverage report. This report folder should remain outside of the test folder so that Mocca does not confuse the files inside coverage with files that it should be testing.<br><br>
<b>npm run test:debug</b><br>
runs the tests and allows debugging within a Chrome browser. If you install the NIM chrome extension, and set it to automatic mode, then Chrome will open automatically after you run this command.
