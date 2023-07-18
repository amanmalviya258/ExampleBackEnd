const ImportSourceOwner = require('../models/import-source-owner');
const { addImportSourceOwnerValidator, editImportSourceOwnerValidator, softDeleteImportSourceOwnerValidator } = require('../utils/validations/joi/import-source-owner');
const dbService = require('../services/db-services');
const ObjectId = require('mongodb').ObjectId;

exports.addImportSourceOwner = async (req, res) => {
    try {
        let dataToCreate = { ...req.body.data || {} };
        const { error } = addImportSourceOwnerValidator(dataToCreate);
        if (error) { return res.badRequest({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const existing = await dbService.findOne(ImportSourceOwner, { name: dataToCreate.name })
        if (existing) { return res.found(); }
        dataToCreate = new ImportSourceOwner(dataToCreate);
        let createdImportSourceOwner = await dbService.create(ImportSourceOwner, dataToCreate);
        return res.success({ data: createdImportSourceOwner });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.getImportSourceOwner = async (req, res) => {
    try {
        let query = {};
        if (!ObjectId.isValid(req.body.data.id)) { return res.validationError({ message: 'invalid objectId.' }); }
        query._id = req.body.data.id;
        let options = {};
        let foundImportSourceOwner = await dbService.findOne(ImportSourceOwner, query, options);
        if (!foundImportSourceOwner) { return res.notFound(); }
        return res.success({ data: foundImportSourceOwner });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.findAllImportSourceOwner = async (req, res) => {
    try {
        let query = options = {};
        if (typeof req.body.query === 'object' && req.body.query !== null) { query = { ...req.body.query }; }
        if (req.body.isCountOnly) {
            let totalRecords = await dbService.count(ImportSourceOwner, query);
            return res.success({ data: { totalRecords } });
        }
        if (req.body && typeof req.body.options === 'object' && req.body.options !== null) { options = { ...req.body.options }; }
        let foundImportSourceOwners = await dbService.paginate(ImportSourceOwner, query, options);
        if (!foundImportSourceOwners || !foundImportSourceOwners.data || !foundImportSourceOwners.data.length) { return res.notFound(); }
        return res.success({ data: foundImportSourceOwners });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.importSourceOwnerList = async (req, res) => {
    try {
        let foundImportSourceOwners = await dbService.findMany(ImportSourceOwner, {});
        if (!foundImportSourceOwners || !foundImportSourceOwners.length) { return res.notFound(); }
        const data = []
        foundImportSourceOwners.map(item => { data.push({ "label": item.name, "value": item.id }); });
        return res.success({ data: data });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.updateImportSourceOwner = async (req, res) => {
    try {
        let dataToUpdate = { ...req.body.data };
        const { error } = editImportSourceOwnerValidator(dataToUpdate);
        if (error) { return res.badRequest({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        let updatedImportSourceOwner = await dbService.updateOne(ImportSourceOwner, query, dataToUpdate);
        if (!updatedImportSourceOwner) { return res.notFound(); }
        return res.success({ data: updatedImportSourceOwner });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.activeInactiveImportSourceOwner = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const updateBody = { isActive: true, remark: req.body.data.remark };
        const activeInactiveImportSourceOwner = await dbService.updateOne(ImportSourceOwner, query, updateBody);
        if (!activeInactiveImportSourceOwner) { return res.notFound(); }
        return res.success({ data: activeInactiveImportSourceOwner });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.softDeleteImportSourceOwner = async (req, res) => {
    try {
        const { error } = softDeleteImportSourceOwnerValidator({ ...req.body.data });
        if (error) { return res.badRequest({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        const updateBody = { isDeleted: true, remark: req.body.data.remark };
        const softDeletedImportSourceOwner = await dbService.updateOne(ImportSourceOwner, query, updateBody);
        if (!softDeletedImportSourceOwner) { return res.notFound(); }
        return res.success({ data: softDeletedImportSourceOwner });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.deleteImportSourceOwner = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const deletedImportSourceOwner = await dbService.deleteOne(ImportSourceOwner, query);
        if (!deletedImportSourceOwner) { return res.notFound(); }
        return res.success({ data: deletedImportSourceOwner });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};