/***
 * File name: controller contact.js
 * Author's name: Nguyen Huynh Quang Vinh
 * StudentID: 301214805
 * Web App name: Porfolio Website - Assignment 2
 * Date: Oct 31st, 2022
 */
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create reference to the model (dbschema )
let Contact = require("../models/contact");

module.exports.displayContactList = (req, res, next) => {
  let sorty = {name : 1};
  Contact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {

      res.render("contact/list", {
        title: "Contacts",
        ContactList: contactList,
        displayName: req.user ? req.user.displayName : "",
      });
      //render contact.ejs and pass title and Contactlist variable we are passing contactList object to ContactList property
    }
  }).sort(sorty);
};

module.exports.addpage = (req, res, next) => {
  res.render("contact/add", {
    title: "Add Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.addprocesspage = (req, res, next) => {
  let newContact = Contact({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
  });
  Contact.create(newContact, (err, Contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the contact list
      res.redirect("/contact-list");
    }
  });
};

module.exports.displayeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  Contact.findById(id, (err, contacttoedit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("contact/edit", {
        title: "Edit Contact",
        contact: contacttoedit,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processingeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let updatecontact = Contact({
    _id: id,
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
  });
  Contact.updateOne({ _id: id }, updatecontact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the contact list
      res.redirect("/contact-list");
    }
  });
};

module.exports.deletepage = (req, res, next) => {
  let id = req.params.id;
  Contact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh contact list
      res.redirect("/contact-list");
    }
  });
};
