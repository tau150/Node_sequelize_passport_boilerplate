const errors = require("../errors");

const DEFAULT_STATUS_CODE = 500;

const statusCodes = {
  [errors.INVALID_USER]: 400,
  [errors.BOOK_NOT_FOUND]: 404,
  [errors.SAVING_ERROR]: 400,
  [errors.VALIDATION_ERROR]: 400,
  [errors.DATABASE_ERROR]: 503,
  [errors.DEFAULT_ERROR]: 500,
  [errors.BLANK_ERROR]: 400
};

exports.handle = (error, req, res, next) => {
  if (error.internalCode) {
    res.status(statusCodes[error.internalCode] || DEFAULT_STATUS_CODE);
  } else {
    // Unrecognized error, notifying it to rollbar.
    next(error);
    res.status(DEFAULT_STATUS_CODE);
  }

  return res.send({
    message: error.message,
    internal_code: error.internalCode
  });
};