const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "That's my SuperSecret", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
