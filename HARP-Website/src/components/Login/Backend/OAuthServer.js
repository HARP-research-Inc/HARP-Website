import express from 'express';
import cors from 'cors';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
//import { Strategy as MicrosoftStrategy } from 'passport-microsoft';
//import { Strategy as AppleStrategy } from 'passport-apple';
import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

const app = express();
app.use(cors());
app.use(passport.initialize());

// Configure PostgreSQL connection (use your existing connection)
const pool = new Pool({
    connectionString: `postgresql://Articles_owner:npg_Na3VpiL2RBCG@ep-square-king-a80hiral.eastus2.azure.neon.tech/Articles?sslmode=require`,
    ssl: {
        rejectUnauthorized: false
    }
});

app.listen(5000, () => {
    console.log('OAuth server running on port 5000');
});

app.get('/test', (req, res) => {
    res.send('OAuth server is working');
});

// Google OAuth Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            // Check if user exists in database
            const { rows } = await pool.query(
                'SELECT * FROM "Login" WHERE email = $1',
                [profile.emails[0].value]
            );

            if (rows.length) {
                return done(null, rows[0]);
            }

            // Create new user if not exists
            const newUser = await pool.query(
                'INSERT INTO "Login" (email, is_active) VALUES ($1, true) RETURNING *',
                [profile.emails[0].value]
            );

            return done(null, newUser.rows[0]);
        } catch (error) {
            return done(error);
        }
    }
));

// Microsoft OAuth Strategy
// passport.use(new MicrosoftStrategy({
//     clientID: process.env.MICROSOFT_CLIENT_ID,
//     clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
//     callbackURL: "http://localhost:5000/auth/microsoft/callback",
//     scope: ['user.read']
// },
//     async (accessToken, refreshToken, profile, done) => {
//         try {
//             const { rows } = await pool.query(
//                 'SELECT * FROM "Login" WHERE email = $1',
//                 [profile.emails[0].value]
//             );

//             if (rows.length) {
//                 return done(null, rows[0]);
//             }

//             const newUser = await pool.query(
//                 'INSERT INTO "Login" (email, is_active) VALUES ($1, true) RETURNING *',
//                 [profile.emails[0].value]
//             );

//             return done(null, newUser.rows[0]);
//         } catch (error) {
//             return done(error);
//         }
//     }
// ));

// // Apple OAuth Strategy
// passport.use(new AppleStrategy({
//     clientID: process.env.APPLE_SERVICE_ID,
//     teamID: process.env.APPLE_TEAM_ID,
//     keyID: process.env.APPLE_KEY_ID,
//     privateKeyLocation: 'path/to/apple/key.p8',
//     callbackURL: "http://localhost:5000/auth/apple/callback",
//     scope: ['name', 'email']
// },
//     async (accessToken, refreshToken, profile, done) => {
//         try {
//             const { rows } = await pool.query(
//                 'SELECT * FROM "Login" WHERE email = $1',
//                 [profile.email]
//             );

//             if (rows.length) {
//                 return done(null, rows[0]);
//             }

//             const newUser = await pool.query(
//                 'INSERT INTO "Login" (email, is_active) VALUES ($1, true) RETURNING *',
//                 [profile.email]
//             );

//             return done(null, newUser.rows[0]);
//         } catch (error) {
//             return done(error);
//         }
//     }
// ));

// OAuth Routes
app.get('/auth/google',
    passport.authenticate('google', { 
      scope: ['profile', 'email', 'openid'] 
    })
);

app.get('/auth/google/callback', 
    passport.authenticate('google', { 
      failureRedirect: '/login',
      failureFlash: true 
    }),
    (req, res) => {
      // Add more detailed error logging
      console.error('Full authentication error:', req.authError);
      console.error('Authentication details:', req.user);
      
      if (req.authError) {
        return res.status(401).json({ 
          error: 'Authentication failed', 
          details: req.authError 
        });
      }
      
      res.redirect('http://localhost:8080/');
    }
);



// Similar routes for Microsoft and Apple...

export default app;