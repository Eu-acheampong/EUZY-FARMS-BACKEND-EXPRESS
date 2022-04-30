const joi = require("joi"); 

const registerSchema = joi.object({
  firstName: joi.string().min(2).max(30),
  firstName: joi.string().min(2).max(30),
  Phone: joi.string().min(2).max(30).required(),
  email: joi.string().email().required(),
});

const loginSchema = joi.object({
    email:joi.string().email().required(),
    password: joi.string().min(6).required(),
});


module.exports = {
    registerSchema,
    loginSchema,
};