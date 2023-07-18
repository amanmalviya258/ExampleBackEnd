const joi = require('@hapi/joi');

const addExportDestSourceValidator = data => {
    const addExportDestSource = {
        destName: joi.string().trim().required().error(() => {
            return { message: 'destName is not allowed to be empty' }
        }),
        destMethod: joi.string().trim().required().error(() => {
            return { message: 'destMethod is not allowed to be empty' }
        }),
        channelId: joi.string().trim().required().error(() => {
            return { message: 'channelId is not allowed to be empty' }
        }),
        channelDestination: joi.string().trim().required().error(() => {
            return { message: 'channelDestination is not allowed to be empty' }
        }),
        exportSource: joi.string().trim().required().error(() => {
            return { message: 'exportSource is not allowed to be empty' }
        }),
        dataSet: joi.string().trim().required().error(() => {
            return { message: 'dataSet is not allowed to be empty' }
        }),
        destUrl: joi.string().trim().required().error(() => {
            return { message: 'destUrl is not allowed to be empty' }
        }),
        listId: joi.string().trim().required().error(() => {
            return { message: 'listId is not allowed to be empty' }
        }),
        ftpAddress: joi.string().trim().required().error(() => {
            return { message: 'ftpAddress is not allowed to be empty' }
        }),
        ftpUsername: joi.string().trim().required().error(() => {
            return { message: 'ftpUsername is not allowed to be empty' }
        }),
        ftpPassword: joi.string().trim().required().error(() => {
            return { message: 'ftpPassword is not allowed to be empty' }
        }),
        ftpPort: joi.string().trim().required().error(() => {
            return { message: 'ftpPort is not allowed to be empty' }
        }),
        apiHeaders: joi.string().trim().required().error(() => {
            return { message: 'apiHeaders is not allowed to be empty' }
        }),
        destDataFields: joi.string().trim().required().error(() => {
            return { message: 'destDataFields is not allowed to be empty' }
        }),
    }
    return joi.validate(data, addExportDestSource);
}

const editExportDestSourceValidator = data => {
    const editExportDestSource = {
        destName: joi.string().trim().required().error(() => {
            return { message: 'destName is not allowed to be empty' }
        }),
        destMethod: joi.string().trim().required().error(() => {
            return { message: 'destMethod is not allowed to be empty' }
        }),
        channelId: joi.string().trim().required().error(() => {
            return { message: 'channelId is not allowed to be empty' }
        }),
        channelDestination: joi.string().trim().required().error(() => {
            return { message: 'channelDestination is not allowed to be empty' }
        }),
        exportSource: joi.string().trim().required().error(() => {
            return { message: 'exportSource is not allowed to be empty' }
        }),
        dataSet: joi.string().trim().required().error(() => {
            return { message: 'dataSet is not allowed to be empty' }
        }),
        destUrl: joi.string().trim().required().error(() => {
            return { message: 'destUrl is not allowed to be empty' }
        }),
        listId: joi.string().trim().required().error(() => {
            return { message: 'listId is not allowed to be empty' }
        }),
        ftpAddress: joi.string().trim().required().error(() => {
            return { message: 'ftpAddress is not allowed to be empty' }
        }),
        ftpUsername: joi.string().trim().required().error(() => {
            return { message: 'ftpUsername is not allowed to be empty' }
        }),
        ftpPassword: joi.string().trim().required().error(() => {
            return { message: 'ftpPassword is not allowed to be empty' }
        }),
        ftpPort: joi.string().trim().required().error(() => {
            return { message: 'ftpPort is not allowed to be empty' }
        }),
        apiHeaders: joi.string().trim().required().error(() => {
            return { message: 'apiHeaders is not allowed to be empty' }
        }),
        destDataFields: joi.string().trim().required().error(() => {
            return { message: 'destDataFields is not allowed to be empty' }
        }),
    }
    return joi.validate(data, editExportDestSource);
}

const softDeleteExportDestSourceValidator = data => {
    const softDeleteExportDestSource = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, softDeleteExportDestSource);
}

const deleteExportDestSourceValidator = data => {
    const deleteExportDestSource = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, deleteExportDestSource);
}

module.exports = { addExportDestSourceValidator, editExportDestSourceValidator, softDeleteExportDestSourceValidator, deleteExportDestSourceValidator }