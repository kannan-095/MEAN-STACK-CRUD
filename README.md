# MEAN-STACK-CRUD

1.Install Node, MongoDB.
2. create folder for the app and go to that folder(data).
3. run npm command to create package.json file
4. Install express.js, body-parser, mongoose.
5. create server.js file, main entry point for the application.
6. create folder for UI front end say Client.
7. configure server.js file to access index.html file on load of the application.

app.use(express.statiic(__dirname + '/client'));

7. in client folder create index.html, js folder for all js file, views folder for all html file.
8. Install the bower dependecies like angular.js, angular.ui router in client folder.i havnt commited that components...
9. client/app.js for all configuartion for routing n all.
10. server/routes.js for all routing.
11. DBModels folder to create model schemas.
12. server/controllers folder to create route controller for each api.routing.
13. All the controlers will require in server/routes.js file to handle the requests.
