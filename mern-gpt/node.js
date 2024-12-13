// Event-driven architecture
const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('event', () => {
    console.log('event triggered')
})

emitter.emit('event')

//async
//callback 
fs.readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
})
//promise
fs.promises.readFile('file1.txt')
    .then(data => console.log(data))
    .catch(err => console.error(err))


//node modules
//http
const http = require('http')
http.createServer((req, res) => {
    res.write('hello world')
    res.end()
}).listen(8000)

//server side logic
app.get('/api', (req, res) => {
    res.json({
        message: 'success'
    })
})

//Authentication & Authorization
//jwt: JWT is used for stateless authentication by encoding user details in a signed token.
const jwt = require('jsonwebtoken');

// Generating a token
const token = jwt.sign({ userId: 1, role: 'admin' }, 'secretKey', { expiresIn: '1h' });

// Verifying a token
const decoded = jwt.verify(token, 'secretKey');
console.log(decoded); // { userId: 1, role: 'admin', iat: <timestamp>, exp: <timestamp> }

// passport:Passport is an authentication middleware for Node.js that supports various strategies.
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
        if (err) return done(err);
        if (!user || user.password !== password) return done(null, false, { message: 'Invalid credentials' });
        return done(null, user);
    });
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
});

// OAuth: OAuth is an open standard for access delegation, often used for third-party login systems (e.g., Google, GitHub).
const OAuth2Strategy = require('passport-oauth2');

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://provider.com/oauth2/authorize',
    tokenURL: 'https://provider.com/oauth2/token',
    clientID: 'yourClientID',
    clientSecret: 'yourClientSecret',
    callbackURL: 'http://localhost:3000/auth/callback',
}, (accessToken, refreshToken, profile, done) => {
    User.findOrCreate({ oauthId: profile.id }, (err, user) => {
        return done(err, user);
    });
}));

// Routes
app.get('/auth/provider', passport.authenticate('oauth2'));
app.get('/auth/callback',
    passport.authenticate('oauth2', { failureRedirect: '/login' }),
    (req, res) => res.redirect('/dashboard')
);


// session based auth: uses server side storage
const session = require('express-session');

app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
}));

// Protect routes
app.use((req, res, next) => {
    if (!req.session.user) return res.redirect('/login');
    next();
});

app.post('/login', (req, res) => {
    if (req.body.username === 'user' && req.body.password === 'pass') {
        req.session.user = { id: 1, username: 'user' };
        res.redirect('/dashboard');
    } else {
        res.status(401).send('Unauthorized');
    }
});
