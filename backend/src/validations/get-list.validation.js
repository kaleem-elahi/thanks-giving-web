const Joi = require('joi');
const yapValidations = require('@yapsody/lib-validations');

module.exports = Joi.object()
  .keys({
    sort_by: yapValidations.sortBy.default('created_at').label('Sort By'),
    sort_order: yapValidations.sortOrder.default('desc').label('Sort Order'),
    status: yapValidations.status.label('Status'),
    search: yapValidations.searchQuery.label('Search Query'),
    ids: Joi.array().items(yapValidations.id).label('Ids'),
  })
  .unknown(true);
