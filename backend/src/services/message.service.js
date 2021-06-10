const { error } = require('@yapsody/lib-handlers');
const { Op } = require('sequelize');
const { sequelizeManager } = require('../managers');

const { MessageModel } = sequelizeManager;

const getListCount = async ({
  status, search,
}) => {
  const where = {

  };

  if (status) {
    where.status = status;
  }

  if (search) {
    where.name = {
      [Op.like]: `%${search}%`,
    };
  }

  return MessageModel.count({
    where,
  });
};

const getList = async ({
  status, sort_by, sort_order, search, ids,
}) => {
  const where = {};

  if (ids) {
    where.id = ids;
  }

  if (status) {
    where.status = status;
  }

  if (search) {
    where.name = {
      [Op.like]: `%${search}%`,
    };
  }

  const order = [];
  order.push([sort_by, sort_order]);

  return MessageModel.findAll({
    where,
    order,
  });
};

const getOne = async ({ id }) => {
  const where = {
    id,
  };

  const item = await MessageModel.findOne({
    where,
  });

  if (!item) {
    return error.throwNotFound('Note');
  }

  return item;
};

const addOne = async ({
  from,
  to,
  body,
  colour,
}) => MessageModel.create({
  from,
  to,
  body,
  colour,
});

const updateOne = async ({
  id,
  from,
  to,
  body,
  colour,
}) => {
  const item = await getOne({
    id,
  });

  item.from = from !== undefined ? from : item.from;
  item.to = to !== undefined ? to : item.to;
  item.body = body !== undefined ? body : item.body;
  item.colour = colour !== undefined ? colour : item.colour;

  return item.save();
};

const deleteOne = async ({ id }) => {
  const item = await getOne({
    id,
  });

  return item.destroy();
};

module.exports = {
  getListCount,
  getList,
  getOne,
  addOne,
  updateOne,
  deleteOne,
};
