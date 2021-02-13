const mongoose = require("mongoose");
const db = require("../models");

// This file empties the books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    title: "Moby Dick",
    author: ["Herman Melville"],
    description:
      "Long before penning Moby-Dick, which many regard as the quintessential American novel, author Herman Melville was captivated by life on the open sea. White Jacket adopts a different perspective, focusing on the brutal treatment that many sailors received at the hands of their superiors. In particular, it has been noted that this novel proved to be instrumental in banning the practice of flogging in several branches of the U.S. military.",
    image: "http://books.google.com/books/content?id=53Tv9BaNjGoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=53Tv9BaNjGoC&source=gbs_api",
  },
  {
    title: "Becoming",
    author: ["Michelle Obama"],
    description:
      "In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America, she helped create the most welcoming and inclusive White House in history. With unerring honesty and lively wit, she describes her triumphs and her disappointments, both public and private. A deeply personal reckoning of a woman of soul and substance who has steadily defied expectations.",
    image: "http://books.google.com/books/content?id=hi17DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=hi17DwAAQBAJ&dq=title:becoming&hl=&source=gbs_api",
  }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
