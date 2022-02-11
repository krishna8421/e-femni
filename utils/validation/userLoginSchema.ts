import * as Joi from "joi";

export const login = Joi.object({
    email: Joi.string().email().required(),
    pass: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9#?!@$%^&*-]{8,40}$"))
      .required(),
})