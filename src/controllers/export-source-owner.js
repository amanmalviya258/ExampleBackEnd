const ExportSourceOwner = require('../models/export-source-owner');
const { addExportSourceOwnerValidator, editExportSourceOwnerValidator, softDeleteExportSourceOwnerValidator } = require('../utils/validations/joi/export-source-owner');
const dbService = require('../services/db-services');
const ObjectId = require('mongodb').ObjectId;

exports.addExportSourceOwner = async (req, res) => {
    try {
        let dataToCreate = { ...req.body.data || {} };
        const { error } = addExportSourceOwnerValidator(dataToCreate);
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const existing = await dbService.findOne(ExportSourceOwner, { name: dataToCreate.name })
        if (existing) { return res.found(); }
        dataToCreate = new ExportSourceOwner(dataToCreate);
        let createdExportSourceOwner = await dbService.create(ExportSourceOwner, dataToCreate);
        return res.success({ data: createdExportSourceOwner });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.getExportSourceOwner = async (req, res) => {
    try {
        let query = {};
        if (!ObjectId.isValid(req.body.data.id)) { return res.validationError({ message: 'invalid objectId.' }); }
        query._id = req.body.data.id;
        let options = {};
        let foundExportSourceOwner = await dbService.findOne(ExportSourceOwner, query, options);
        if (!foundExportSourceOwner) { return res.notFound(); }
        return res.success({ data: foundExportSourceOwner });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.findAllExportSourceOwner = async (req, res) => {
    try {
        let query = options = {};
        if (typeof req.body.query === 'object' && req.body.query !== null) { query = { ...req.body.query }; }
        if (req.body.isCountOnly) {
            let totalRecords = await dbService.count(ExportSourceOwner, query);
            return res.success({ data: { totalRecords } });
        }
        if (req.body && typeof req.body.options === 'object' && req.body.options !== null) { options = { ...req.body.options }; }
        let foundExportSourceOwners = await dbService.paginate(ExportSourceOwner, query, options);
        if (!foundExportSourceOwners || !foundExportSourceOwners.data || !foundExportSourceOwners.data.length) { return res.notFound(); }
        return res.success({ data: foundExportSourceOwners });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.exportSourceOwnerList = async (req, res) => {
    try {
        let foundExportSourceOwners = await dbService.findMany(ExportSourceOwner, {});
        if (!foundExportSourceOwners || !foundExportSourceOwners.length) { return res.notFound(); }
        const data = []
        foundExportSourceOwners.map(item => { data.push({ "label": item.name, "value": item.id }); });
        return res.success({ data: data });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.updateExportSourceOwner = async (req, res) => {
    try {
        let dataToUpdate = { ...req.body.data };
        const { error } = editExportSourceOwnerValidator(dataToUpdate);
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        let updatedExportSourceOwner = await dbService.updateOne(ExportSourceOwner, query, dataToUpdate);
        if (!updatedExportSourceOwner) { return res.notFound(); }
        return res.success({ data: updatedExportSourceOwner });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.activeInactiveExportSourceOwner = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const updateBody = { isActive: true, remark: req.body.data.remark };
        const activeInactiveExportSourceOwner = await dbService.updateOne(ExportSourceOwner, query, updateBody);
        if (!activeInactiveExportSourceOwner) { return res.notFound(); }
        return res.success({ data: activeInactiveExportSourceOwner });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.softDeleteExportSourceOwner = async (req, res) => {
    try {
        const { error } = softDeleteExportSourceOwnerValidator({ ...req.body.data });
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        const updateBody = { isDeleted: true, remark: req.body.data.remark };
        const softDeletedExportSourceOwner = await dbService.updateOne(ExportSourceOwner, query, updateBody);
        if (!softDeletedExportSourceOwner) { return res.notFound(); }
        return res.success({ data: softDeletedExportSourceOwner });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.deleteExportSourceOwner = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const deletedExportSourceOwner = await dbService.deleteOne(ExportSourceOwner, query);
        if (!deletedExportSourceOwner) { return res.notFound(); }
        return res.success({ data: deletedExportSourceOwner });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};