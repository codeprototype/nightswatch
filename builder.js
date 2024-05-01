import jwt from 'jsonwebtoken';

function builders(data, secret='the king in the north', options={expiresIn: '24h'}) {
    return jwt.sign(data, secret, options);
}

export default builders;
