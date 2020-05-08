"use strict"
const getDb = require("../util/dbManager").getDb


class User {

  constructor(user) {
    this._id = user._id;
    this.name = user.name
    this.email = user.email
    this.password = user.password
    this.birthdate = user.birthdate
    this.phone = user.phone
    this.address = user.address
    this.gender = user.gender
    this.image = user.image
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      //Update
      dbOp = db.collection("users")
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      //Create
      dbOp = db.collection("users")
        .insertOne(this);
    }

    return dbOp
      .then(() => {
        //Nothing to show
      })
      .catch(err => {
        throw err
      })
  }

}

const fetchAll = () => {
  const db = getDb()
  return db
    .collection("users")
    .find()
    .toArray()
    .then(users => {
      return users
    })
    .catch(err => {
      throw err
    })
}

const fetchFilter = (email, name) => {
  let query = {}
  if (name) {
    query.name = name
  }
  if (email) {
    query.email = email
  }
  const db = getDb()
  return db
    .collection("users")
    .find(query)
    .toArray()
    .then(users => {
      return users
    })
    .catch(err => {
      throw err
    })
}

exports.User = User
exports.fetchAll = fetchAll
exports.fetchFilter = fetchFilter