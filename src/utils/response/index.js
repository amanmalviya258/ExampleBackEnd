const responseStatus = require('./error-status');
const responseCode = require('./error-code');

module.exports = {
    success: (data = {}) => ({
        product: { "name": "RightFul Labs", "version": "v1.0" },
        status: { "code": responseCode.success, "value": data.message || 'Your request is successfully executed.' },
        data: data.data && Object.keys(data.data).length ? data.data : null,
        error: data.data && Object.keys(data.data).length ? false : true,
    }),

    found: (data = {}) => ({
        product: { "name": "RightFul Labs", "version": "v1.0" },
        status: { "code": responseCode.found, "value": data.message || 'Record(s) already exist with specified criteria.' },
        data: data.data && Object.keys(data.data).length ? data.data : null,
        error: data.data && Object.keys(data.data).length ? false : true,
    }),

    badRequest: (data = {}) => ({
        product: { "name": "RightFul Labs", "version": "v1.0" },
        status: { "code": responseCode.badRequest, "value": data.message || 'Request parameters are invalid or missing.' },
        data: data.data && Object.keys(data.data).length ? data.data : null,
        error: data.data && Object.keys(data.data).length ? false : true,
    }),

    unAuthorized: (data = {}) => ({
        product: { "name": "RightFul Labs", "version": "v1.0" },
        status: { "code": responseCode.unAuthorized, "value": data.message || 'You are not authorized to access the request.' },
        data: data.data && Object.keys(data.data).length ? data.data : null,
        error: data.data && Object.keys(data.data).length ? false : true,
    }),

    notFound: (data = {}) => ({
        product: { "name": "RightFul Labs", "version": "v1.0" },
        status: { "code": responseCode.notFound, "value": data.message || 'Record(s) not found with specified criteria.' },
        data: data.data && Object.keys(data.data).length ? data.data : null,
        error: data.data && Object.keys(data.data).length ? false : true,
    }),

    failure: (data = {}) => ({
        product: { "name": "RightFul Labs", "version": "v1.0" },
        status: { "code": responseCode.failure, "value": data.message || 'Some error occurred while performing action.' },
        data: data.data && Object.keys(data.data).length ? data.data : null,
        error: data.data && Object.keys(data.data).length ? false : true,
    }),

    validationError: (data = {}) => ({
        product: { "name": "RightFul Labs", "version": "v1.0" },
        status: { "code": responseCode.validationError, "value": data.message || `Invalid Data, Validation Failed.` },
        data: data.data && Object.keys(data.data).length ? data.data : null,
        error: data.data && Object.keys(data.data).length ? false : true,
    }),

    internalServerError: (data = {}) => ({
        product: { "name": "RightFul Labs", "version": "v1.0" },
        status: { "code": responseCode.internalServerError, "value": data.message || 'Internal server error.' },
        data: data.data && Object.keys(data.data).length ? data.data : null,
        error: data.data && Object.keys(data.data).length ? false : true,
    }),
};
