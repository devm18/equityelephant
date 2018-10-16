require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");

// controllers
const {  } = require("./ctrl");

const app = express();

app.use(json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  // console.log(process.env.CONNECTION_STRING); 
  app.set("db", dbInstance);
});

// test endpoint
// app.get("/api/test", (req, res) => {
//   res.status(200).json("Happy Success!!!!");
// });

// endpoints
// app.get("/api/items", getItems);
// app.delete("/api/item/:id", removeItem);
// app.post("/api/item", addItem);
// app.put("/api/item/:id", updatePrice);

const port = 3001;
app.listen(port, () => console.log(`Listening to port ${port}`));
