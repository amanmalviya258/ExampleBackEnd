const responseBody = require('./index');
const responseCode = require('./error-code');

const responseHandler = (req, res, next) => {
    res.success = (data = {}) => {
        res.status(responseCode.success).json(responseBody.success(data));
    };
    res.found = (data = {}) => {
        res.status(responseCode.found).json(responseBody.found(data));
    };
    res.badRequest = (data = {}) => {
        res.status(responseCode.badRequest).json(responseBody.badRequest(data));
    };
    res.unAuthorized = (data = {}) => {
        res.status(responseCode.unAuthorized).json(responseBody.unAuthorized(data));
    };
    res.notFound = (data = {}) => {
        res.status(responseCode.notFound).json(responseBody.notFound(data));
    };
    res.failure = (data = {}) => {
        res.status(responseCode.failure).json(responseBody.failure(data));
    };
    res.validationError = (data = {}) => {
        res.status(responseCode.validationError).json(responseBody.validationError(data));
    };
    res.internalServerError = (data = {}) => {
        res.status(responseCode.internalServerError).json(responseBody.internalServerError(data));
    };
    next();
};

module.exports = responseHandler;