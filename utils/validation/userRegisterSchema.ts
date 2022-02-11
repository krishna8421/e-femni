import * as Joi from "joi";

export const register = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  pass: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9#?!@$%^&*-]{8,40}$"))
    .required(),
});
