const Joi = require('joi');
const yapValidations = require('@yapsody/lib-validations');

module.exports = Joi.object()
  .keys({
    to: yapValidations.name.required().label('To'),
    from: yapValidations.name.required().label('From'),
    body: yapValidations.generic.string.any.required().label('Message'),
    colour: yapValidations.name.required().label('Colour'),
  });
