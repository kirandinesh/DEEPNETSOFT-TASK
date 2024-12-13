const mongoose = require("mongoose");
module.exports = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err, "MongoDB failed to connect");
  });
