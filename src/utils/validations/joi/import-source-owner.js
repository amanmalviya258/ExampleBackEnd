const joi = require('@hapi/joi');

const addImportSourceOwnerValidator = data => {
    const addImportSourceOwner = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty' }
        }),
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, addImportSourceOwner);
}

const editImportSourceOwnerValidator = data => {
    const editImportSourceOwner = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty' }
        }),
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, editImportSourceOwner);
}

const softDeleteImportSourceOwnerValidator = data => {
    const softDeleteImportSourceOwner = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, softDeleteImportSourceOwner);
}

const deleteImportSourceOwnerValidator = data => {
    const deleteImportSourceOwner = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, deleteImportSourceOwner);
}

module.exports = { addImportSourceOwnerValidator, editImportSourceOwnerValidator, softDeleteImportSourceOwnerValidator, deleteImportSourceOwnerValidator }