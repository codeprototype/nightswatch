import jwt from 'jsonwebtoken'
function builders(secret) {
    return function(req, res, next) {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.status(403).json({ error: 'Failed to authenticate token' });
            }
            req.user = decoded;
            next();
        });
    };
}

export default builders;
