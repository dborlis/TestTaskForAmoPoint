const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const geoip = require('geoip-lite');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // so we can open index.html and login.html

const db = new sqlite3.Database('./visits.db');

db.run(`
  CREATE TABLE IF NOT EXISTS visits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT,
    city TEXT,
    userAgent TEXT,
    url TEXT,
    timestamp TEXT
  )
`);



// middleware for auth
const AUTH_TOKEN = 'super-puper-secret-token'; // todo - use JWT

function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];

    if (token !== AUTH_TOKEN) {
        return res.status(401).send('Unauthorized');
    }

    next();
}

// super simple auth
const ADMIN_LOGIN = 'admin';
const ADMIN_PASS = 'admin';

app.post('/login', (req, res) => {
    const { login, password } = req.body;

    if (login === ADMIN_LOGIN && password === ADMIN_PASS) {
        res.json({ token: AUTH_TOKEN });
    } else {
        res.status(401).send('Unauthorized');
    }
});


// track the visitors
app.post('/track', (req, res) => {
    const ip =
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress;

    const geo = geoip.lookup(ip);
    const city = geo ? geo.city : 'Unknown';

    const { userAgent, url, timestamp } = req.body;

    db.run(
        `INSERT INTO visits (ip, city, userAgent, url, timestamp)
     VALUES (?, ?, ?, ?, ?)`,
        [ip, city, userAgent, url, timestamp]
    );

    res.sendStatus(200);
});


// stats by hours with unique IPs
app.get('/stats/hours', authMiddleware, (req, res) => {
    db.all(`
    SELECT 
      strftime('%Y-%m-%d %H:00', timestamp) as hour,
      COUNT(DISTINCT ip) as visits
    FROM visits
    GROUP BY hour
    ORDER BY hour
  `, (err, rows) => {
        res.json(rows);
    });
});


// stats by cities
app.get('/stats/cities', authMiddleware, (req, res) => {
    db.all(`
    SELECT city, COUNT(*) as count
    FROM visits
    GROUP BY city
  `, (err, rows) => {
        res.json(rows);
    });
});


// run
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});