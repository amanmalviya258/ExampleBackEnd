const joi = require('@hapi/joi');

const addExportFeedExecutionManagementValidator = data => {
    const addExportFeedExecutionManagement = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty' }
        }),
        description: joi.string().trim().required().error(() => {
            return { message: 'description is not allowed to be empty' }
        }),
        feedType: joi.string().trim().required().error(() => {
            return { message: 'feedType is not allowed to be empty' }
        }),
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, addExportFeedExecutionManagement);
}

const editExportFeedExecutionManagementValidator = data => {
    const editExportFeedExecutionManagement = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty' }
        }),
        description: joi.string().trim().required().error(() => {
            return { message: 'description is not allowed to be empty' }
        }),
        feedType: joi.string().trim().required().error(() => {
            return { message: 'feedType is not allowed to be empty' }
        }),
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, editExportFeedExecutionManagement);
}

const softDeleteExportFeedExecutionManagementValidator = data => {
    const softDeleteExportFeedExecutionManagement = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, softDeleteExportFeedExecutionManagement);
}

const deleteExportFeedExecutionManagementValidator = data => {
    const deleteExportFeedExecutionManagement = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, deleteExportFeedExecutionManagement);
}

module.exports = { addExportFeedExecutionManagementValidator, editExportFeedExecutionManagementValidator, softDeleteExportFeedExecutionManagementValidator, deleteExportFeedExecutionManagementValidator }