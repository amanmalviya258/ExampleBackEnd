const joi = require('@hapi/joi');

const addRegionDetailsValidator = data => {
    const addRegionDetails = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty.' }
        }),
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, addRegionDetails);
}

const editRegionDetailsValidator = data => {
    const editRegionDetails = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty' }
        }),
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, editRegionDetails);
}

const softDeleteRegionDetailsValidator = data => {
    const softDeleteRegionDetails = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, softDeleteRegionDetails);
}

const deleteRegionDetailsValidator = data => {
    const deleteRegionDetails = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, deleteRegionDetails);
}

module.exports = { addRegionDetailsValidator, editRegionDetailsValidator, softDeleteRegionDetailsValidator, deleteRegionDetailsValidator }