require('dotenv').config()
const express= require('express')

const mongoose =require('mongoose')

const conn = async ()=> {
    try {
    //   await mongoose.connect(process.env.DATABASE_URL, {
    //     family:4
    // })
    //     .then(() => {
    //         console.log('FINE');
    //     })
    //     .catch(() => {
    //         console.log("BAD");
    //     })
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Connected")
      } catch (error) {
        console.log(error)
      }
    
}
module.exports = conn
