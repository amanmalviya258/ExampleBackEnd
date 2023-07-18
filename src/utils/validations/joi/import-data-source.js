const joi = require('@hapi/joi');

const addImportDataSourceValidator = data => {
    const addImportDataSource = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty' }
        }),
        sourceId: joi.number().integer().allow(null).allow('').error(() => {
            return { message: 'sourceId is not allowed to be empty' }
        }),
        ownerId: joi.string().trim().required().error(() => {
            return { message: 'ownerId is not allowed to be empty' }
        }),
        location: joi.string().trim().required().error(() => {
            return { message: 'location is not allowed to be empty' }
        }),
        dbName: joi.string().trim().required().error(() => {
            return { message: 'db name is not allowed to be empty' }
        }),
        connectToLakehouse: joi.boolean().required().error(() => {
            return { message: 'connect to lake house is not allowed to be empty' }
        }),
        category: joi.string().trim().required().error(() => {
            return { message: 'category is not allowed to be empty' }
        }),
        trustFactor: joi.number().integer().error(() => {
            return { message: 'trust factor is not allowed to be empty' }
        }),
        dupeCheck: joi.boolean().required().error(() => {
            return { message: 'duplicate check is not allowed to be empty' }
        }),
        badCheck: joi.boolean().required().error(() => {
            return { message: 'bad check is not allowed to be empty' }
        }),
        emailVerification: joi.boolean().required().error(() => {
            return { message: 'email verification is not allowed to be empty' }
        }),
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, addImportDataSource);
}

const editImportDataSourceValidator = data => {
    const editImportDataSource = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty' }
        }),
        sourceId: joi.number().integer().allow(null).allow('').error(() => {
            return { message: 'sourceId is not allowed to be empty' }
        }),
        ownerId: joi.string().trim().required().error(() => {
            return { message: 'ownerId is not allowed to be empty' }
        }),
        location: joi.string().trim().required().error(() => {
            return { message: 'location is not allowed to be empty' }
        }),
        dbName: joi.string().trim().required().error(() => {
            return { message: 'db name is not allowed to be empty' }
        }),
        connectToLakehouse: joi.boolean().required().error(() => {
            return { message: 'connect to lake house is not allowed to be empty' }
        }),
        category: joi.string().trim().required().error(() => {
            return { message: 'category is not allowed to be empty' }
        }),
        trustFactor: joi.number().integer().error(() => {
            return { message: 'trust factor is not allowed to be empty' }
        }),
        dupeCheck: joi.boolean().required().error(() => {
            return { message: 'duplicate check is not allowed to be empty' }
        }),
        badCheck: joi.boolean().required().error(() => {
            return { message: 'bad check is not allowed to be empty' }
        }),
        emailVerification: joi.boolean().required().error(() => {
            return { message: 'email verification is not allowed to be empty' }
        }),
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, editImportDataSource);
}

const softDeleteImportDataSourceValidator = data => {
    const softDeleteImportDataSource = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, softDeleteImportDataSource);
}

const deleteImportDataSourceValidator = data => {
    const deleteImportDataSource = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, deleteImportDataSource);
}

module.exports = { addImportDataSourceValidator, editImportDataSourceValidator, softDeleteImportDataSourceValidator, deleteImportDataSourceValidator }