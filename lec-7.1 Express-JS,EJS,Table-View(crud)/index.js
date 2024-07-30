let express = require("express");
const app = express();

const port = 8000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log(`server is started on port :- ${port}`);
});

app.set("view engine", "ejs");
let data = [
  {
    id: 1,
    name: "John",
    phone: "234567",
  },
  {
    id: 2,
    name: "Jane",
    phone: "345678",
  },
];

app.get("/", (req, res) => {
  return res.render("table", {
    users: data,
  });
});
