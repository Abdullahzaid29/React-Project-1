
const express = require("express");
const cors = require("cors");
// import fetch from "node-fetch";
const fetch = require("node-fetch") ;
const bodyParser =require( "body-parser");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
var models = require("./models");
const jwt = require("jsonwebtoken")

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
// app.use(passport.initialize());
// app.use(passport.session());
// require("./passportConfig")(passport);

models.sequelize.sync()
    .then(function () {
        console.log('Nice! Database looks fine')
    }).catch(function (err) {
        console.log(err, "Something went wrong with the Database Update!")
});



// const requestEndpoint = "https://serpapi.com/search.json?q=McDonald%27s&location=austin,+texas,+united+states&tbm=lcl";

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });
// app.get('/fetchData', cors(corsOptions), async (req, res) => {
//   const fetchOptions = {
//       method: 'GET'
//   }
//   const response = await fetch(requestEndpoint, fetchOptions);
//   const jsonResponse = await response.json();
//   res.json(jsonResponse);
// });

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport/passport.js')(passport,models.user)
app.post("/login", (req, res, next) => {
  console.log(req.data,'req');
  passport.authenticate("local-signin", (err, user, info) => {
    if (err) throw err;
    if (!user) {   res.status(200).json({message:"failure",Boolean:false});
    console.log("noooo")}
    else {
      req.login(user, (err) => {
        if (err) throw err;
       

        const token = jwt.sign({id:req.user.id},"secret")
        // res.header("token",token).send({token,message:"Success",Boolean:true})
        res.status(200).json({token,message:"Successfully loggin"});
        console.log(req.user.id);
      });
    }
    
  }
  
  )(req, res, next);
});

app.post("/register", (req, res, next) => {
  passport.authenticate("local-signup", (err, user, info) => {
    if (err) throw err;
    if (!user) {   res.status(200).json({message:"failure"});
    console.log("no")}
    else {
        if (err) throw err;
        res.status(200).json({message:"Successfull"});
        console.log(req.user);
    }

    
    
  }
  
  )(req, res, next);
});
app.get("/", cors(), async (req, res) => {
  res.send("This is the data for the home page");
});

app.post("/fetchData", cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: "GET",
  };

  let { services, location } = req.body;
  let requestEndpoint = [];
  let response = "";
  let results = [];
  for (let i = 0; i <= 200; i += 20) {
    requestEndpoint.push(
      "https://serpapi.com/search.json?q=" +
        services +
        "%27s&location=" +
        location +
        "&start=" +
        i+"&tbm=lcl&api_key=a23a2d53b444148f7a1dd5999b1087b7393792b847049be0ff6bebfb03463e4e"
    );
  }
  for (let j = 0; j < 10; j++) {
    response = await fetch(requestEndpoint[j], fetchOptions);
    results.push(await response.json());
  }
  //&api_key=a23a2d53b444148f7a1dd5999b1087b7393792b847049be0ff6bebfb03463e4e

  res.send(results);
  console.log(results);
  console.log(results[0].title);
  console.log(services);
  console.log(location);
  console.log(requestEndpoint);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// export { fetch };
//McDonald
