const internalError = (message, internalCode) => ({
  message,
  internalCode
});

const validationError = (attr, internalCode) => ({
  message,
  internalCode
});

exports.INVALID_USER = "invalid_user";
exports.invalidUser = internalError(
  "Invalid username or password",
  exports.INVALID_USER
);

exports.BLANK_ERROR = "blank_error";
exports.blankError = attr =>
  internalError(`${attr} can´t be empty`, exports.BLANK_ERROR);

exports.BOOK_NOT_FOUND = "book_not_found";
exports.bookNotFound = internalError("Book not found", exports.BOOK_NOT_FOUND);

exports.SAVING_ERROR = "saving_error";
exports.savingError = message => internalError(message, exports.SAVING_ERROR);

exports.DATABASE_ERROR = "database_error";
exports.databaseError = message =>
  internalError(message, exports.DATABASE_ERROR);

exports.DEFAULT_ERROR = "default_error";
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);

exports.VALIDATION_ERROR = "validation_error";
exports.validationError = attr =>
  internalError(`This ${attr} is already in use`, exports.VALIDATION_ERROR);
