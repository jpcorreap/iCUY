"use strict"
const getDb = require("../util/dbManager").getDb


class Record {

    constructor(record) {

        /**
         * Date of the record
         */
        this.date = record.date

        /**
         * Habit Title
         */
        this.habit_Id = record.habitTitle

        /**
         * User Email
         */
        this.user_Id = record.userEmail

        /**
         * Value of the input
         */
        this.value = record.value

        /**
         * For the Unique value, the database actually verifies if (date, userEmail, habitTitle) to be unique
         */

    }

    addNew() {

        //  Getting Database
        const db = getDb()
        //  Returning response from habit creation
        return db
            .collection("records")
            .insertOne(this)
            .then()
            .catch(err => {
                return err
            })

    }

}

const fetchAll = () => {
    //  Getting Database
    const db = getDb()
    //  Finding
    return db
        .collection("records")
        .find()
        .toArray()
        .then(records => {
            return records
        })
        .catch(err => {
            throw err
        })
}

const fetchFilter = (date, habitTitle, userEmail) => {
    //  Creating query
    let query = {}
    //  Getting Query attributes
    if (date) {
        query.date = date
    }
    if (habit_Id) {
        query.habit_Id = habitTitle
    }
    if (user_Id) {
        query.user_Id = userEmail
    }
    //  Getting Database
    const db = getDb()
    //  Finding
    return db
      .collection("records")
      .find(query)
      .toArray()
      .then(records => {
        return records
      })
      .catch(err => {
        throw err
      })
  }

exports.Record = Record
exports.fetchAll = fetchAll
exports.fetchFilter = fetchFilter