const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().lowercase().required(),
  surname: Joi.string().lowercase().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(3).max(15).required().label('password'),
  passwordConfirmation: Joi.any().equal(Joi.ref('password'))
    .required()
    .label('Confirm password')
    .messages({ 'any.only': '{{#label}} does not match' })
});

const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(5).required()
});

module.exports = {
  registerSchema,
  loginSchema,
};