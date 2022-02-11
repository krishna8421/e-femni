import * as Joi from "joi";

export const product = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  singleData: Joi.boolean().required(),
  data: Joi.when("singleData", {
    is: true,
    then: Joi.object({
      imgUrl: Joi.string().required(),
      productName: Joi.string().required(),
      price: Joi.number().required(),
    }),
  }).when("singleData", {
    is: false,
    then: Joi.array().items(
      Joi.object({
        imgUrl: Joi.string().required(),
        productName: Joi.string().required(),
        price: Joi.number().required(),
      })
    ),
  }),
});
