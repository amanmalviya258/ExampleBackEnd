const joi = require('@hapi/joi');

const addChannelDetailsValidator = data => {
    const addChannelDetails = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty.' }
        }),
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, addChannelDetails);
}

const editChannelDetailsValidator = data => {
    const editChannelDetails = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty.' }
        }),
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, editChannelDetails);
}

const softDeleteChannelDetailsValidator = data => {
    const softDeleteChannelDetails = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, softDeleteChannelDetails);
}

const deleteChannelDetailsValidator = data => {
    const deleteChannelDetails = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, deleteChannelDetails);
}

module.exports = { addChannelDetailsValidator, editChannelDetailsValidator, softDeleteChannelDetailsValidator, deleteChannelDetailsValidator }