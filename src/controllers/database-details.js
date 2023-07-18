const DatabaseDetails = require('../models/database-details');
const { addDatabaseDetailsValidator, editDatabaseDetailsValidator, softDeleteDatabaseDetailsValidator } = require('../utils/validations/joi/database-details');
const dbService = require('../services/db-services');
const ObjectId = require('mongodb').ObjectId;

exports.addDatabaseDetails = async (req, res) => {
    try {
        let dataToCreate = { ...req.body.data || {} };
        const { error } = addDatabaseDetailsValidator(dataToCreate);
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const existing = await dbService.findOne(DatabaseDetails, { name: dataToCreate.name })
        if (existing) { return res.found(); }
        dataToCreate = new DatabaseDetails(dataToCreate);
        let createdDatabaseDetails = await dbService.create(DatabaseDetails, dataToCreate);
        return res.success({ data: createdDatabaseDetails });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.getDatabaseDetails = async (req, res) => {
    try {
        let query = {};
        if (!ObjectId.isValid(req.body.data.id)) { return res.validationError({ message: 'invalid objectId.' }); }
        query._id = req.body.data.id;
        let options = {};
        let foundDatabaseDetails = await dbService.findOne(DatabaseDetails, query, options);
        if (!foundDatabaseDetails) { return res.notFound(); }
        return res.success({ data: foundDatabaseDetails });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.findAllDatabaseDetails = async (req, res) => {
    try {
        let query = options = {};
        if (typeof req.body.query === 'object' && req.body.query !== null) { query = { ...req.body.query }; }
        if (req.body.isCountOnly) {
            let totalRecords = await dbService.count(DatabaseDetails, query);
            return res.success({ data: { totalRecords } });
        }
        if (req.body && typeof req.body.options === 'object' && req.body.options !== null) { options = { ...req.body.options }; }
        let foundDatabaseDetailss = await dbService.paginate(DatabaseDetails, query, options);
        if (!foundDatabaseDetailss || !foundDatabaseDetailss.data || !foundDatabaseDetailss.data.length) { return res.notFound(); }
        return res.success({ data: foundDatabaseDetailss });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.databaseDetailsList = async (req, res) => {
    try {
        let foundDatabaseDetailss = await dbService.findMany(DatabaseDetails, {});
        if (!foundDatabaseDetailss || !foundDatabaseDetailss.length) { return res.notFound(); }
        const data = []
        foundDatabaseDetailss.map(item => { data.push({ "label": item.name, "value": item.id }); });
        return res.success({ data: data });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.updateDatabaseDetails = async (req, res) => {
    try {
        let dataToUpdate = { ...req.body.data };
        const { error } = editDatabaseDetailsValidator(dataToUpdate);
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        let updatedDatabaseDetails = await dbService.updateOne(DatabaseDetails, query, dataToUpdate);
        if (!updatedDatabaseDetails) { return res.notFound(); }
        return res.success({ data: updatedDatabaseDetails });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.activeInactiveDatabaseDetails = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const updateBody = { isActive: true, remark: req.body.data.remark };
        const activeInactiveDatabaseDetails = await dbService.updateOne(DatabaseDetails, query, updateBody);
        if (!activeInactiveDatabaseDetails) { return res.notFound(); }
        return res.success({ data: activeInactiveDatabaseDetails });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.softDeleteDatabaseDetails = async (req, res) => {
    try {
        const { error } = softDeleteDatabaseDetailsValidator({ ...req.body.data });
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        const updateBody = { isDeleted: true, remark: req.body.data.remark };
        const softDeletedDatabaseDetails = await dbService.updateOne(DatabaseDetails, query, updateBody);
        if (!softDeletedDatabaseDetails) { return res.notFound(); }
        return res.success({ data: softDeletedDatabaseDetails });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.deleteDatabaseDetails = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const deletedDatabaseDetails = await dbService.deleteOne(DatabaseDetails, query);
        if (!deletedDatabaseDetails) { return res.notFound(); }
        return res.success({ data: deletedDatabaseDetails });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};