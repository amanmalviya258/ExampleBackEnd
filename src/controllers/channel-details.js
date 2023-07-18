const ChannelDetails = require('../models/channel-details');
const { addChannelDetailsValidator, editChannelDetailsValidator, softDeleteChannelDetailsValidator } = require('../utils/validations/joi/channel-details');
const dbService = require('../services/db-services');
const ObjectId = require('mongodb').ObjectId;

exports.addChannelDetails = async (req, res) => {
    try {
        let dataToCreate = { ...req.body.data || {} };
        const { error } = addChannelDetailsValidator(dataToCreate);
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const existing = await dbService.findOne(ChannelDetails, { name: dataToCreate.name })
        if (existing) { return res.found(); }
        dataToCreate = new ChannelDetails(dataToCreate);
        let createdChannelDetails = await dbService.create(ChannelDetails, dataToCreate);
        return res.success({ data: createdChannelDetails });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.getChannelDetails = async (req, res) => {
    try {
        let query = {};
        if (!ObjectId.isValid(req.body.data.id)) { return res.validationError({ message: 'invalid objectId.' }); }
        query._id = req.body.data.id;
        let options = {};
        let foundChannelDetails = await dbService.findOne(ChannelDetails, query, options);
        if (!foundChannelDetails) { return res.notFound(); }
        return res.success({ data: foundChannelDetails });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.findAllChannelDetails = async (req, res) => {
    try {
        let query = options = {};
        if (typeof req.body.query === 'object' && req.body.query !== null) { query = { ...req.body.query }; }
        if (req.body.isCountOnly) {
            let totalRecords = await dbService.count(ChannelDetails, query);
            return res.success({ data: { totalRecords } });
        }
        if (req.body && typeof req.body.options === 'object' && req.body.options !== null) { options = { ...req.body.options }; }
        let foundChannelDetailss = await dbService.paginate(ChannelDetails, query, options); if (!foundChannelDetailss || !foundChannelDetailss.data || !foundChannelDetailss.data.length) { return res.notFound(); }
        return res.success({ data: foundChannelDetailss });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.channelDetailsList = async (req, res) => {
    try {
        let foundChannelDetailss = await dbService.findMany(ChannelDetails, {}); if (!foundChannelDetailss || !foundChannelDetailss.length) { return res.notFound(); }
        const data = []
        foundChannelDetailss.map(item => { data.push({ "label": item.name, "value": item.id }); });
        return res.success({ data: data });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.updateChannelDetails = async (req, res) => {
    try {
        let dataToUpdate = { ...req.body.data };
        const { error } = editChannelDetailsValidator(dataToUpdate);
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        let updatedChannelDetails = await dbService.updateOne(ChannelDetails, query, dataToUpdate);
        if (!updatedChannelDetails) { return res.notFound(); }
        return res.success({ data: updatedChannelDetails });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.activeInactiveChannelDetails = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const updateBody = { isActive: true, remark: req.body.data.remark };
        const activeInactiveChannelDetails = await dbService.updateOne(ChannelDetails, query, updateBody);
        if (!activeInactiveChannelDetails) { return res.notFound(); }
        return res.success({ data: activeInactiveChannelDetails });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.softDeleteChannelDetails = async (req, res) => {
    try {
        const { error } = softDeleteChannelDetailsValidator({ ...req.body.data });
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        const updateBody = { isDeleted: true, remark: req.body.data.remark };
        const softDeletedChannelDetails = await dbService.updateOne(ChannelDetails, query, updateBody);
        if (!softDeletedChannelDetails) { return res.notFound(); }
        return res.success({ data: softDeletedChannelDetails });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.deleteChannelDetails = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const deletedChannelDetails = await dbService.deleteOne(ChannelDetails, query);
        if (!deletedChannelDetails) { return res.notFound(); }
        return res.success({ data: deletedChannelDetails });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};