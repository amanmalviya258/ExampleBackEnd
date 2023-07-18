const ExportDestSourceConfig = require('../models/export-dest-source-config');
const { addExportDestSourceConfigValidator, editExportDestSourceConfigValidator, softDeleteExportDestSourceConfigValidator } = require('../utils/validations/joi/export-dest-source-config');
const dbService = require('../services/db-services');
const ObjectId = require('mongodb').ObjectId;

exports.addExportDestSourceConfig = async (req, res) => {
    try {
        let dataToCreate = { ...req.body.data || {} };
        const { error } = addExportDestSourceConfigValidator(dataToCreate);
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const existing = await dbService.findOne(ExportDestSourceConfig, { name: dataToCreate.name })
        if (existing) { return res.found(); }
        dataToCreate = new ExportDestSourceConfig(dataToCreate);
        let createdExportDestSourceConfig = await dbService.create(ExportDestSourceConfig, dataToCreate);
        return res.success({ data: createdExportDestSourceConfig });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.getExportDestSourceConfig = async (req, res) => {
    try {
        let query = {};
        if (!ObjectId.isValid(req.body.data.id)) { return res.validationError({ message: 'invalid objectId.' }); }
        query._id = req.body.data.id;
        let options = {};
        let foundExportDestSourceConfig = await dbService.findOne(ExportDestSourceConfig, query, options);
        if (!foundExportDestSourceConfig) { return res.notFound(); }
        return res.success({ data: foundExportDestSourceConfig });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.findAllExportDestSourceConfig = async (req, res) => {
    try {
        let query = options = {};
        if (typeof req.body.query === 'object' && req.body.query !== null) { query = { ...req.body.query }; }
        if (req.body.isCountOnly) {
            let totalRecords = await dbService.count(ExportDestSourceConfig, query);
            return res.success({ data: { totalRecords } });
        }
        if (req.body && typeof req.body.options === 'object' && req.body.options !== null) { options = { ...req.body.options }; }
        let foundExportDestSourceConfig = await dbService.paginate(ExportDestSourceConfig, query, options);
        if (!foundExportDestSourceConfig || !foundExportDestSourceConfig.data || !foundExportDestSourceConfig.data.length) { return res.notFound(); }
        return res.success({ data: foundExportDestSourceConfig });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.exportDestSourceConfigController = async (req, res) => {
    try {
        let foundExportDestSourceConfig = await dbService.findMany(ExportDestSourceConfig, {});
        if (!foundExportDestSourceConfig || !foundExportDestSourceConfig.length) { return res.notFound(); }
        const data = []
        foundExportDestSourceConfig.map(item => { data.push({ "label": item.name, "value": item.id }); });
        return res.success({ data: data });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.updateExportDestSourceConfig = async (req, res) => {
    try {
        let dataToUpdate = { ...req.body.data };
        const { error } = editExportDestSourceConfigValidator(dataToUpdate);
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        let updatedExportDestSourceConfig = await dbService.updateOne(ExportDestSourceConfig, query, dataToUpdate);
        if (!updatedExportDestSourceConfig) { return res.notFound(); }
        return res.success({ data: updatedExportDestSourceConfig });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.activeInactiveExportDestSourceConfig = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const updateBody = { isActive: true, remark: req.body.data.remark };
        const activeInactiveExportDestSourceConfig = await dbService.updateOne(ExportDestSourceConfig, query, updateBody);
        if (!activeInactiveExportDestSourceConfig) { return res.notFound(); }
        return res.success({ data: activeInactiveExportDestSourceConfig });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.softDeleteExportDestSourceConfig = async (req, res) => {
    try {
        const { error } = softDeleteExportDestSourceConfigValidator({ ...req.body.data });
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        const updateBody = { isDeleted: true, remark: req.body.data.remark };
        const softDeletedExportDestSourceConfig = await dbService.updateOne(ExportDestSourceConfig, query, updateBody);
        if (!softDeletedExportDestSourceConfig) { return res.notFound(); }
        return res.success({ data: softDeletedExportDestSourceConfig });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.deleteExportDestSourceConfig = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const deletedExportDestSourceConfig = await dbService.deleteOne(ExportDestSourceConfig, query);
        if (!deletedExportDestSourceConfig) { return res.notFound(); }
        return res.success({ data: deletedExportDestSourceConfig });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};