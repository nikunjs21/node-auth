// const mongoose = require("mongoose")

// const userSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true
//     }
// }, {
//     timestamps: true
// })

// userSchema.methods.bark = function bark () {
//     const greeting = this.name ? "Name is Jeff! ("+this.name+")" : "Name is Jeff!"
//     console.log(greeting)
// }

// const User = mongoose.model("User", userSchema)

// module.exports = User

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.sayMyName = function sayMyName() {
  const myName = this.name
    ? "Vatashiva namae " + this.name + "desu."
    : "My name is Jeff!";
  console.log(myName);
};

const User = mongoose.model("User", userSchema);

export default User;
