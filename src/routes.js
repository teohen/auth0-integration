import { Router } from 'express';
import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

import HeroController from './controllers/hero-controller.js';
import TokenController from './controllers/token-controller.js';

const routes = Router();

const checkJwk = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://teohen.us.auth0.com/.well-known/jwks.json`
    }),
    audience: 'https://localhost:3000',
    issuer: [`https://teohen.us.auth0.com/`],
    algorithms: ['RS256']
})

routes.get('/heroes', checkJwk, HeroController.getHeroes)

routes.post('/auth/token', TokenController.getToken)

export default routes;