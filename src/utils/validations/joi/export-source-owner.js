const joi = require('@hapi/joi');

const addExportSourceOwnerValidator = data => {
    const addExportSourceOwner = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty' }
        }),
        sourceId: joi.number().integer().required().error(() => {
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
        trustFactor: joi.boolean().required().error(() => {
            return { message: 'trust factor is not allowed to be empty' }
        }),
        dupeReject: joi.boolean().required().error(() => {
            return { message: 'duplicate reject is not allowed to be empty' }
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
    return joi.validate(data, addExportSourceOwner);
}

const editExportSourceOwnerValidator = data => {
    const editExportSourceOwner = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty' }
        }),
        sourceId: joi.number().integer().required().error(() => {
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
        trustFactor: joi.boolean().required().error(() => {
            return { message: 'trust factor is not allowed to be empty' }
        }),
        dupeReject: joi.boolean().required().error(() => {
            return { message: 'duplicate reject is not allowed to be empty' }
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
    return joi.validate(data, editExportSourceOwner);
}

const softDeleteExportSourceOwnerValidator = data => {
    const softDeleteExportSourceOwner = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, softDeleteExportSourceOwner);
}

const deleteExportSourceOwnerValidator = data => {
    const deleteExportSourceOwner = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, deleteExportSourceOwner);
}

module.exports = { addExportSourceOwnerValidator, editExportSourceOwnerValidator, softDeleteExportSourceOwnerValidator, deleteExportSourceOwnerValidator }