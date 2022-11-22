//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/blog1", function (req, res) {
  res.sendFile(__dirname + "/blog1.html");
});
app.get("/blog2", function (req, res) {
  res.sendFile(__dirname + "/blog2.html");
});
app.get("/blog3", function (req, res) {
  res.sendFile(__dirname + "/blog3.html");
});
app.get("/case1", function (req, res) {
  res.sendFile(__dirname + "/case1.html");
});

app.post("/", function (req, res) {
  const fullName = req.body.fname;
  const email = req.body.email;
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FIRSTNAME: fullName,
        },
      },
    ],
  };
  var jsonDATA = JSON.stringify(data);

  const url = "https://us21.api.mailchimp.com/3.0/lists/811e3fee5f";
  const options = {
    method: "POST",
    auth: "moringa:bf05733bf25c6cc7c0919421ff49666a-us21",
  };
  //Replace <Any_String> with any string of your choice (your name/username example: auth: "pranshukas:us1-XXXXXXXXXXXXX"

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    // response.on("data", function (data) {
    //     console.log(JSON.parse(data));
    // })
  });
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is Running on port 3000");
});
