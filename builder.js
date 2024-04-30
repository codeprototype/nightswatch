import jwt from 'jsonwebtoken';

function builders(data, secret='the king in the north') {
    return jwt.sign(data, secret);
}

export default builders;
