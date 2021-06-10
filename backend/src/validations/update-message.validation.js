const Joi = require('joi');
const yapValidations = require('@yapsody/lib-validations');

module.exports = Joi.object()
  .keys({
    to: yapValidations.name.label('To'),
    from: yapValidations.name.label('From'),
    body: yapValidations.generic.string.any.label('Message'),
    colour: yapValidations.name.label('Colour'),
  }).min(1);
