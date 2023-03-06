// Imports, one to create our express server and one for our .env file
import express from "express";
import dotenv from "dotenv";
import http from "http";

// import our express types for TypeScript use
import { Request, Response, NextFunction } from 'express';

// Import the .env variables
dotenv.config();

// Be able to instantiate our express server
const app = express();

// Get our port number
const port = process.env.PORT;

// Spin up a local server
const server = http.createServer(app);

// Listen to the specific port from localhost
server.listen(port, () => {

    console.log(`[server]: Server is running at http://localhost:${port}`);

});

// Initial middleware response to test the functionality
app.use("/add-product", (request : Request, response : Response, next : NextFunction) : void => {

    // In express, we use response.send in order to return some HTML
    console.log("Add product output here!");
    console.log("\n\n");
    response.send("<h1>Add a product here</h1>");

});

// Handles every single request acting as middleware
// Middleware references a series of callbacks which are executed when express requests are executed
// This code seems to be parsed twice
app.use("/",(request : Request, response : Response, next : NextFunction) : void => {

    // Send the HTML response
    console.log("Hello express page");
    console.log("\n\n");
    response.send("<h1>Hello From Express!!</h1>");

});

