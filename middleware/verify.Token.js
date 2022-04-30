const jwt = require("jsonwebtoken");

// verify user token from headers

const verifyToken = (req, res, next) => {
    // retrieve token from headers
    const tokenWithBearer = req.headers.authorization;

    // verify token if it exist and return and error if no token is found
if (!tokenWithBearer) {
    return res.status(403).json({ error: "Use not authenticated"});
}
// split token
const token = tokenWithBearer.split(" ")[1];

try {
    // veryfy if the token is correct
    const user = jwt.verify(token, "secret");

    // attach the verified user to the req
    req.user = user;
} catch (error) {
    // verify with the user
    return res.status(403).json({ error: "User not authenticated"});

}

next();
};

// export.VeryfyToken

module.exports = {
    verifyToken,
};
