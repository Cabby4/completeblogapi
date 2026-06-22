const Joi = require("joi");

const commentSchema = Joi.object({
  text: Joi.string()
    .min(1)
    .max(500)
    .required(),
});

module.exports = {
  commentSchema,
};