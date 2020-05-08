"use strict"

const MongoClient = require("mongodb").MongoClient

const envDb = process.env.MONGO_DB_NAME
const envUser = process.env.MONGO_DB_USER
const envPass = process.env.MONGO_DB_PASSWORD
const envUrl = process.env.MONGO_DB_URL

let client

const mongoConnect = async () => {

  const url = `mongodb+srv://${envUser}:${envPass}@${envUrl}?retryWrites=true&w=majority`
  client = new MongoClient(url, { useNewUrlParser: true , useUnifiedTopology: true })

  try {

    await client.connect()
    console.log("Connected!")

  } catch (err) {
    throw err
  }

}

//  Database getting
const getDb = () => {
  return client.db(envDb)
  throw "Not database found"
}

//  Close conection
const closeDb = () => {
  client.close()
  console.log("Disconected!")
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb
exports.closeDb = closeDb