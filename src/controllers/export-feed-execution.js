const ExportFeedExecution = require('../models/export-feed-execution');
const { addExportFeedExecutionValidator, editExportFeedExecutionValidator, softDeleteExportFeedExecutionValidator } = require('../utils/validations/joi/export-feed-execution');
const dbService = require('../services/db-services');
const ObjectId = require('mongodb').ObjectId;

exports.addExportFeedExecution = async (req, res) => {
    try {
        let dataToCreate = { ...req.body.data || {} };
        const { error } = addExportFeedExecutionValidator(dataToCreate);
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const existing = await dbService.findOne(ExportFeedExecution, { name: dataToCreate.name })
        if (existing) { return res.found(); }
        dataToCreate = new ExportFeedExecution(dataToCreate);
        let createdExportFeedExecution = await dbService.create(ExportFeedExecution, dataToCreate);
        return res.success({ data: createdExportFeedExecution });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.getExportFeedExecution = async (req, res) => {
    try {
        let query = {};
        if (!ObjectId.isValid(req.body.data.id)) { return res.validationError({ message: 'invalid objectId.' }); }
        query._id = req.body.data.id;
        let options = {};
        let foundExportFeedExecution = await dbService.findOne(ExportFeedExecution, query, options);
        if (!foundExportFeedExecution) { return res.notFound(); }
        return res.success({ data: foundExportFeedExecution });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.findAllExportFeedExecution = async (req, res) => {
    try {
        let query = options = {};
        if (typeof req.body.query === 'object' && req.body.query !== null) { query = { ...req.body.query }; }
        if (req.body.isCountOnly) {
            let totalRecords = await dbService.count(ExportFeedExecution, query);
            return res.success({ data: { totalRecords } });
        }
        if (req.body && typeof req.body.options === 'object' && req.body.options !== null) { options = { ...req.body.options }; }
        let foundExportFeedExecutions = await dbService.paginate(ExportFeedExecution, query, options);
        if (!foundExportFeedExecutions || !foundExportFeedExecutions.data || !foundExportFeedExecutions.data.length) { return res.notFound(); }
        return res.success({ data: foundExportFeedExecutions });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.exportFeedExecutionList = async (req, res) => {
    try {
        let foundExportFeedExecutions = await dbService.findMany(ExportFeedExecution, {});
        if (!foundExportFeedExecutions || !foundExportFeedExecutions.length) { return res.notFound(); }
        const data = []
        foundExportFeedExecutions.map(item => { data.push({ "label": item.name, "value": item.id }); });
        return res.success({ data: data });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.updateExportFeedExecution = async (req, res) => {
    try {
        let dataToUpdate = { ...req.body.data };
        const { error } = editExportFeedExecutionValidator(dataToUpdate);
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        let updatedExportFeedExecution = await dbService.updateOne(ExportFeedExecution, query, dataToUpdate);
        if (!updatedExportFeedExecution) { return res.notFound(); }
        return res.success({ data: updatedExportFeedExecution });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.activeInactiveExportFeedExecution = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const updateBody = { isActive: true, remark: req.body.data.remark };
        const activeInactiveExportFeedExecution = await dbService.updateOne(ExportFeedExecution, query, updateBody);
        if (!activeInactiveExportFeedExecution) { return res.notFound(); }
        return res.success({ data: activeInactiveExportFeedExecution });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.softDeleteExportFeedExecution = async (req, res) => {
    try {
        const { error } = softDeleteExportFeedExecutionValidator({ ...req.body.data });
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        const updateBody = { isDeleted: true, remark: req.body.data.remark };
        const softDeletedExportFeedExecution = await dbService.updateOne(ExportFeedExecution, query, updateBody);
        if (!softDeletedExportFeedExecution) { return res.notFound(); }
        return res.success({ data: softDeletedExportFeedExecution });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.deleteExportFeedExecution = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const deletedExportFeedExecution = await dbService.deleteOne(ExportFeedExecution, query);
        if (!deletedExportFeedExecution) { return res.notFound(); }
        return res.success({ data: deletedExportFeedExecution });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};