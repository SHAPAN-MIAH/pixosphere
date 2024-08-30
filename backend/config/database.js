const mongoose = require("mongoose");

exports.connectDataBase = () => {
  mongoose
    .connect("mongodb://localhost:27017/pixoSphere")
    .then((con) => console.log(`Database Connected : ${con.connection.host}`))
    .catch((err) => console.log(err));
};
