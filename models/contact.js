/***
 * File name: model contact.js
 * Author's name: Nguyen Huynh Quang Vinh
 * StudentID: 301214805
 * Web App name: Porfolio Website - Assignment 2
 * Date: Oct 31st, 2022
 */

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let contactModel = mongoose.Schema(
  {
    name: String,
    email: String,
    number: Number,
  },

  {
    collection: "contacts",
  }
);

//contactsmodel to create new contact more powerful than just class
module.exports = mongoose.model("Contact", contactModel);
