const joi = require('@hapi/joi');

const addDatabaseDetailsValidator = data => {
    const addDatabaseDetails = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty.' }
        }),
        description: joi.string().trim().required().error(() => {
            return { message: 'description is not allowed to be empty.' }
        }),
        bufferTableName: joi.string().trim().required().error(() => {
            return { message: 'buffer table name is not allowed to be empty.' }
        }),
        rawTableName: joi.string().trim().required().error(() => {
            return { message: 'raw table name is not allowed to be empty.' }
        }),
        primaryKey: joi.string().trim().required().error(() => {
            return { message: 'primary key is not allowed to be empty.' }
        }),
        type: joi.string().trim().required().error(() => {
            return { message: 'type is not allowed to be empty.' }
        }),
        useFor: joi.string().trim().required().error(() => {
            return { message: 'use for is not allowed to be empty.' }
        }),
        location: joi.string().trim().required().error(() => {
            return { message: 'location is not allowed to be empty.' }
        }),
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, addDatabaseDetails);
}

const editDatabaseDetailsValidator = data => {
    const editDatabaseDetails = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty.' }
        }),
        description: joi.string().trim().required().error(() => {
            return { message: 'description is not allowed to be empty.' }
        }),
        bufferTableName: joi.string().trim().required().error(() => {
            return { message: 'buffer table name is not allowed to be empty.' }
        }),
        rawTableName: joi.string().trim().required().error(() => {
            return { message: 'raw table name is not allowed to be empty.' }
        }),
        primaryKey: joi.string().trim().required().error(() => {
            return { message: 'primary key is not allowed to be empty.' }
        }),
        type: joi.string().trim().required().error(() => {
            return { message: 'type is not allowed to be empty.' }
        }),
        useFor: joi.string().trim().required().error(() => {
            return { message: 'use for is not allowed to be empty.' }
        }),
        location: joi.string().trim().required().error(() => {
            return { message: 'location is not allowed to be empty.' }
        }),
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, editDatabaseDetails);
}

const softDeleteDatabaseDetailsValidator = data => {
    const softDeleteDatabaseDetails = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, softDeleteDatabaseDetails);
}

const deleteDatabaseDetailsValidator = data => {
    const deleteDatabaseDetails = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, deleteDatabaseDetails);
}

module.exports = { addDatabaseDetailsValidator, editDatabaseDetailsValidator, softDeleteDatabaseDetailsValidator, deleteDatabaseDetailsValidator }