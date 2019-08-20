// 'use strict';
// const express = require('express')

// const superagent = require('superagent')

// const app = express()


// //Hanna -  these are environment variables
// const PORT = process.env.PORT || 3000;

// const API = 'http://localhost:3000';

// //Hanna - view engine for templates

// app.set('view engine', 'ejs');


// app.listen(3000, () => {
//     console.log("Server is up on 3000")
// })

// app.get("/", (request, response) => {
//     console.log("Responding to root route")
//     response.send("Hello from ROOt!!!")
// })

// app.get("/categories", (request, response) => {
//     const categories = {
//         _id: 1,
//         name: 'The God Father',
//         display_name: 'The God Father',
//         description:'Movie'

//     }
//     response.json([categories])

// })

// app.post("/categories", (request, response) => {

// })

// app.put("/categories:id", (request, response) => {

// })
// app.delete("/categories/:id", (request, response) => {

// })

// app.get("/products", (request, response) => {
//     const products = {
//         _id: 2,
//         category: 'Movies',
//         name: 'Titanic',
//         display_name:'Titanic',
//         description:'Romance'
//     }
//     response.json([products])

// })

// app.post("/products", (request, response) => {

// })

// app.put("/products/:id", (request, response) => {

// })

// app.delete("/products/:id", (request, response) => {

// })

