"use strict";
const mongodb = require("mongodb");
const getDb = require("../util/dbManager").getDb;


class User {

  constructor(user) {
    if (user) {

      /**
       * The user's _id
       * Required
       */
      this._id = user.id?new mongodb.ObjectID(user.id):undefined;

      /**
       * The user's name
       * Required
       */
      this.name = user.name;

      /**
     * The user's email
     * Required, Unique
     */
      this.email = user.email.toLowerCase();

      /**
     * The user's password
     * Required
     */
      this.password = user.password;

      /**
     * The user's bith date
     */
      this.birthdate = user.birthdate;

      /**
     * The user's phone
     */
      this.phone = user.phone;

      /**
     * The user's country
     */
      this.address = user.country;

      /**
     * The user's state
     */
      this.address = user.state;

      /**
     * The user's city
     */
      this.address = user.city;

      /**
     * The user's gender
     */
      this.gender = user.gender;

      /**
     * The user's photo
     * ( placeholder if undefined )
     */
      this.photo = user.photo;

      /**
       * For the Unique value, the database actually verifies if (email) to be unique
       */
    }
  }

  addNew() {
    //  Getting Database
    const db = getDb();
    //  Returning response from habit creation
    return db
      .collection("users")
      .insertOne(this)
      .then()
      .catch(err => {
        throw err;
      });
  }

  update() {
    //  Getting Database
    const db = getDb();
    //  Returning response from habit creation
    return db.collection("users")
      .updateOne({ _id: this._id }, { $set: this }, { upsert: true })
      .then()
      .catch(err => {
        throw err;
      });
  }

}

const fetchAll = () => {
  //  Getting Database
  const db = getDb();
  //  Finding
  return db
    .collection("users")
    .find()
    .toArray()
    .then(users => {
      return users;
    })
    .catch(err => {
      throw err;
    });
};


const fetchFilter = (email, name) => {
  //  Creating query
  let query = {};
  //  Getting Query attributes
  if (name) {
    query.name = name;
  }
  if (email) {
    query.email = email;
  }
  //  Getting Database
  const db = getDb();
  //  Finding
  return db
    .collection("users")
    .find(query)
    .toArray()
    .then(users => {
      return users;
    })
    .catch(err => {
      throw err;
    });
};

exports.User = User;
exports.fetchAll = fetchAll;
exports.fetchFilter = fetchFilter;