const ExportDestSource = require('../models/export-dest-source');
const { addExportDestSourceValidator, editExportDestSourceValidator, softDeleteExportDestSourceValidator } = require('../utils/validations/joi/export-dest-source');
const dbService = require('../services/db-services');
const ObjectId = require('mongodb').ObjectId;

exports.addExportDestSource = async (req, res) => {
    try {
        let dataToCreate = { ...req.body.data || {} };
        const { error } = addExportDestSourceValidator(dataToCreate);
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const existing = await dbService.findOne(ExportDestSource, { name: dataToCreate.name })
        if (existing) { return res.found(); }
        dataToCreate = new ExportDestSource(dataToCreate);
        var findMax = await dbService.findMaxValue(ImportDataSource, {}, {}, { sort: { sourceId: -1 } });
        const data = {
            name: dataToCreate.name,
            sourceId: dataToCreate.sourceId == null ? findMax[0].sourceId + 1 : dataToCreate.sourceId,
            exportSource: dataToCreate.exportSource,
            description: dataToCreate.description,
            exportMethod: dataToCreate.exportMethod,
            destUrl: dataToCreate.destUrl,
            ftpAddress: dataToCreate.ftpAddress,
            ftpUsername: dataToCreate.ftpUsername,
            ftpPassword: dataToCreate.ftpPassword,
            ftpPort: dataToCreate.ftpPort,
            apiHeaders: dataToCreate.apiHeaders,
            remark: dataToCreate.remark
        }
        let createdExportDestSource = await dbService.create(ExportDestSource, data);
        return res.success({ data: createdExportDestSource });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.getExportDestSource = async (req, res) => {
    try {
        let query = {};
        if (!ObjectId.isValid(req.body.data.id)) { return res.validationError({ message: 'invalid objectId.' }); }
        query._id = req.body.data.id;
        let options = {};
        let foundExportDestSource = await dbService.findOne(ExportDestSource, query, options);
        if (!foundExportDestSource) { return res.notFound(); }
        return res.success({ data: foundExportDestSource });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.findAllExportDestSource = async (req, res) => {
    try {
        let query = options = {};
        if (typeof req.body.query === 'object' && req.body.query !== null) { query = { ...req.body.query }; }
        if (req.body.isCountOnly) {
            let totalRecords = await dbService.count(ExportDestSource, query);
            return res.success({ data: { totalRecords } });
        }
        if (req.body && typeof req.body.options === 'object' && req.body.options !== null) { options = { ...req.body.options }; }
        let foundExportDestSources = await dbService.paginate(ExportDestSource, query, options);
        if (!foundExportDestSources || !foundExportDestSources.data || !foundExportDestSources.data.length) { return res.notFound(); }
        return res.success({ data: foundExportDestSources });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.exportDestSourceList = async (req, res) => {
    try {
        let foundExportDestSources = await dbService.findMany(ExportDestSource, {});
        if (!foundExportDestSources || !foundExportDestSources.length) { return res.notFound(); }
        const data = []
        foundExportDestSources.map(item => { data.push({ "label": item.name, "value": item.id }); });
        return res.success({ data: data });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.updateExportDestSource = async (req, res) => {
    try {
        let dataToUpdate = { ...req.body.data };
        const { error } = editExportDestSourceValidator(dataToUpdate);
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        let updatedExportDestSource = await dbService.updateOne(ExportDestSource, query, dataToUpdate);
        if (!updatedExportDestSource) { return res.notFound(); }
        return res.success({ data: updatedExportDestSource });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.activeInactiveExportDestSource = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const updateBody = { isActive: true, remark: req.body.data.remark };
        const activeInactiveExportDestSource = await dbService.updateOne(ExportDestSource, query, updateBody);
        if (!activeInactiveExportDestSource) { return res.notFound(); }
        return res.success({ data: activeInactiveExportDestSource });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.softDeleteExportDestSource = async (req, res) => {
    try {
        const { error } = softDeleteExportDestSourceValidator({ ...req.body.data });
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        const updateBody = { isDeleted: true, remark: req.body.data.remark };
        const softDeletedExportDestSource = await dbService.updateOne(ExportDestSource, query, updateBody);
        if (!softDeletedExportDestSource) { return res.notFound(); }
        return res.success({ data: softDeletedExportDestSource });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.deleteExportDestSource = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const deletedExportDestSource = await dbService.deleteOne(ExportDestSource, query);
        if (!deletedExportDestSource) { return res.notFound(); }
        return res.success({ data: deletedExportDestSource });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};