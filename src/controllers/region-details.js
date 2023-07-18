const RegionDetails = require('../models/region-details');
const { addRegionDetailsValidator, editRegionDetailsValidator, softDeleteRegionDetailsValidator } = require('../utils/validations/joi/region-details');
const dbService = require('../services/db-services');
const ObjectId = require('mongodb').ObjectId;

exports.addRegionDetails = async (req, res) => {
    try {
        let dataToCreate = { ...req.body.data || {} };
        const { error } = addRegionDetailsValidator(dataToCreate);
        if (error) { return res.badRequest({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const existing = await dbService.findOne(RegionDetails, { name: dataToCreate.name })
        if (existing) { return res.found(); }
        dataToCreate = new RegionDetails(dataToCreate);
        let createdRegionDetails = await dbService.create(RegionDetails, dataToCreate);
        return res.success({ data: createdRegionDetails });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.getRegionDetails = async (req, res) => {
    try {
        let query = {};
        if (!ObjectId.isValid(req.body.data.id)) { return res.validationError({ message: 'invalid objectId.' }); }
        query._id = req.body.data.id;
        let options = {};
        let foundRegionDetails = await dbService.findOne(RegionDetails, query, options);
        if (!foundRegionDetails) { return res.notFound(); }
        return res.success({ data: foundRegionDetails });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.findAllRegionDetails = async (req, res) => {
    try {
        let options = query = {};
        if (typeof req.body.query === 'object' && req.body.query !== null) { query = { ...req.body.query }; }
        if (req.body.isCountOnly) {
            let totalRecords = await dbService.count(RegionDetails, query);
            return res.success({ data: { totalRecords } });
        }
        if (req.body && typeof req.body.options === 'object' && req.body.options !== null) { options = { ...req.body.options }; }
        let foundRegionDetailss = await dbService.paginate(RegionDetails, query, options);
        if (!foundRegionDetailss || !foundRegionDetailss.data || !foundRegionDetailss.data.length) { return res.notFound(); }
        return res.success({ data: foundRegionDetailss });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.regionDetailsList = async (req, res) => {
    try {
        let foundRegionDetailss = await dbService.findMany(RegionDetails, {});
        if (!foundRegionDetailss || !foundRegionDetailss.length) { return res.notFound(); }
        const data = [];
        foundRegionDetailss.map(item => { data.push({ "label": item.name, "value": item.id }); });
        return res.success({ data: data });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.updateRegionDetails = async (req, res) => {
    try {
        let dataToUpdate = { ...req.body.data };
        const { error } = editRegionDetailsValidator(dataToUpdate);
        if (error) { return res.badRequest({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        let updatedRegionDetails = await dbService.updateOne(RegionDetails, query, dataToUpdate);
        if (!updatedRegionDetails) { return res.notFound(); }
        return res.success({ data: updatedRegionDetails });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.activeInactiveRegionDetails = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const updateBody = { isActive: true, remark: req.body.data.remark };
        const activeInactiveRegionDetails = await dbService.updateOne(RegionDetails, query, updateBody);
        if (!activeInactiveRegionDetails) { return res.notFound(); }
        return res.success({ data: activeInactiveRegionDetails });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.softDeleteRegionDetails = async (req, res) => {
    try {
        const { error } = softDeleteRegionDetailsValidator({ ...req.body.data });
        if (error) { return res.badRequest({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        const updateBody = { isDeleted: true, };
        const softDeletedRegionDetails = await dbService.updateOne(RegionDetails, query, updateBody);
        if (!softDeletedRegionDetails) { return res.notFound(); }
        return res.success({ data: softDeletedRegionDetails });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.deleteRegionDetails = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const deletedRegionDetails = await dbService.deleteOne(RegionDetails, query);
        if (!deletedRegionDetails) { return res.notFound(); }
        return res.success({ data: deletedRegionDetails });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};