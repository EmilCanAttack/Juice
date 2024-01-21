// app.js
const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

// Indstil visningssystemet (EJS)
app.set('view engine', 'ejs');

// Indstil krop-parser for POST-anmodninger
app.use(express.urlencoded({ extended: true }));

// Indstil session middleware
app.use(session({
  secret: 'your-secret-key', // Udskift med en stærk nøgle i produktionsmiljøet
  resave: false,
  saveUninitialized: true
}));

// Indlæs controller for autentificering
const authController = require('./controllers/authController');
app.use('/', authController);

// En simpel rute til startsiden
app.get('/', (req, res) => {
  res.redirect('/frontpage'); // Omdirigerer brugeren til forsiden
});

// Start serveren
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
