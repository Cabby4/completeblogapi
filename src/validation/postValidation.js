const Joi = require("joi");

const createPostSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(100)
    .required(),

  content: Joi.string()
    .min(10)
    .required(),

  category: Joi.string()
    .required(),
});

module.exports = {
  createPostSchema,
};