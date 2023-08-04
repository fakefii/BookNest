require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (allowedOrigins.includes(origin) || !origin) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//   })
// );

// const frontendDomain = 'http://localhost:3000';

// const corsOptions = {
//   origin: frontendDomain,
//   methods: ['GET', 'POST'],

// };

// app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001'); // Replace with your frontend URL
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes");
app.use(routes);


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
  });