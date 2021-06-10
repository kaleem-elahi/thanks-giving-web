const { error, success } = require('@yapsody/lib-handlers');
const {
  getListValidation, getId, addMessageValidation, updateMessageValidation,
} = require('../validations');
const { messageService } = require('../services');

const getListCount = async (req, res, next) => {
  try {
    const validatedReqData = await getListValidation.validateAsync(req.query);
    const {
      status,
      search,
    } = validatedReqData;
    const count = await messageService.getListCount({
      status,
      search,
    });
    return success.handler({ count }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const getList = async (req, res, next) => {
  const reqData = { ...req.query };
  if (reqData.ids) {
    reqData.ids = reqData.ids.split(';');
  }
  try {
    const validatedReqData = await getListValidation.validateAsync(reqData);
    const {
      status,
      sort_by,
      sort_order,
      search,
      ids,
    } = validatedReqData;
    const messages = await messageService.getList({
      status,
      sort_by,
      sort_order,
      search,
      ids,
    });
    return success.handler({ messages }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const getOne = async (req, res, next) => {
  const { messageId } = req.params;
  try {
    const id = await getId.validateAsync(messageId);
    const message = await messageService.getOne({
      id,
    });
    return success.handler({ message }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const addOne = async (req, res, next) => {
  const reqBody = req.body;
  try {
    const validatedReqData = await addMessageValidation.validateAsync(reqBody);
    const {
      from,
      to,
      body,
      colour,
    } = validatedReqData;
    const message = await messageService.addOne({
      from,
      to,
      body,
      colour,
    });
    return success.handler({ message }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const updateOne = async (req, res, next) => {
  const { messageId } = req.params;
  const reqBody = req.body;
  try {
    const id = await getId.validateAsync(messageId);
    const validatedReqData = await updateMessageValidation.validateAsync(reqBody);
    const {
      from,
      to,
      body,
      colour,
    } = validatedReqData;
    const message = await messageService.updateOne({
      id,
      from,
      to,
      body,
      colour,
    });
    return success.handler({ message }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const deleteOne = async (req, res, next) => {
  const { messageId } = req.params;
  try {
    const id = await getId.validateAsync(messageId);
    const message = await messageService.deleteOne({
      id,
    });
    return success.handler({ message }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

module.exports = {
  getListCount,
  getList,
  getOne,
  addOne,
  updateOne,
  deleteOne,
};
