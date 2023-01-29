const express = require("express");
const cors = require('cors');
// const res = require("express/lib/response");
const mongoose = require("mongoose");

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5500");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// forma de ler JSON / middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors({
    origin: '*'
}));
const PORT = process.env.PORT || 3000;

// rotas
const userRoutes = require("./routes/userRoutes")
app.use('/user', userRoutes);

const awardRoutes = require("./routes/awardRoutes")
app.use('/award', awardRoutes)


// rota inicial
app.get("/", (req, res) => {
  //mostrar req

  res.json({ message: "Ok" });
});


// mongodb+srv://jobsonb10:n8AVGXYdje1VbH8B@cluster.cjysyc6.mongodb.net/?retryWrites=true&w=majority
// rVWcjHwaIsuwenLa


//entregar uma porta
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://jobsonb10:rVWcjHwaIsuwenLa@cluster.cjysyc6.mongodb.net/grupo-otg"
  )
  .then(() => {
    console.log("Connected to mongodb");
    app.listen(PORT);
  })
  .catch((err) => console.log(err));
