const app = require("./app.js");
const { connectDataBase } = require("./config/database.js");

connectDataBase();

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`)
})