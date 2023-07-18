const ImportDataSource = require('../models/import-data-source');
const ImportDataSourceHeaders = require('../models/import-data-source-headers');
const { addImportDataSourceValidator, editImportDataSourceValidator, softDeleteImportDataSourceValidator } = require('../utils/validations/joi/import-data-source');
const dbService = require('../services/db-services');
const ObjectId = require('mongodb').ObjectId;

exports.addImportDataSource = async (req, res) => {
    try {
        let dataToCreate = { ...req.body.data || {} };
        const { error } = addImportDataSourceValidator(dataToCreate);
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const existing = await dbService.findOne(ImportDataSource, { name: dataToCreate.name })
        if (existing) { return res.found(); }
        dataToCreate = new ImportDataSource(dataToCreate);
        var findMax = await dbService.findMaxValue(ImportDataSource, {}, {}, { sort: { sourceId: -1 } });
        const data = {
            name: dataToCreate.name,
            sourceId: dataToCreate.sourceId == null ? findMax[0].sourceId + 1 : dataToCreate.sourceId,
            ownerId: dataToCreate.ownerId,
            location: dataToCreate.location,
            dbName: dataToCreate.dbName,
            connectToLakehouse: dataToCreate.connectToLakehouse,
            category: dataToCreate.category,
            trustFactor: dataToCreate.trustFactor,
            dupeCheck: dataToCreate.dupeCheck,
            badCheck: dataToCreate.badCheck,
            emailVerification: dataToCreate.emailVerification,
            remark: dataToCreate.remark,
        }
        let createdImportDataSource = await dbService.create(ImportDataSource, data);
        return res.success({ data: createdImportDataSource });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.getImportDataSource = async (req, res) => {
    try {
        let query = {};
        if (!ObjectId.isValid(req.body.data.id)) { return res.validationError({ message: 'invalid objectId.' }); }
        query._id = req.body.data.id;
        let options = {};
        let foundImportDataSource = await dbService.findOne(ImportDataSource, query, options);
        if (!foundImportDataSource) { return res.notFound(); }
        return res.success({ data: foundImportDataSource });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.findAllImportDataSource = async (req, res) => {
    try {
        let query = options = {};
        if (typeof req.body.query === 'object' && req.body.query !== null) { query = { ...req.body.query }; }
        if (req.body.isCountOnly) {
            let totalRecords = await dbService.count(ImportDataSource, query);
            return res.success({ data: { totalRecords } });
        }
        if (req.body && typeof req.body.options === 'object' && req.body.options !== null) { options = { ...req.body.options }; }
        let foundImportDataSources = await dbService.paginate(ImportDataSource, query, options);
        if (!foundImportDataSources || !foundImportDataSources.data || !foundImportDataSources.data.length) { return res.notFound(); }
        return res.success({ data: foundImportDataSources });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.findAllImportDataSourceHeaders = async (req, res) => {
    try {
        let query = options = {};
        if (typeof req.body.query === 'object' && req.body.query !== null) { query = { ...req.body.query }; }
        if (req.body.isCountOnly) {
            let totalRecords = await dbService.count(ImportDataSourceHeaders, query);
            return res.success({ data: { totalRecords } });
        }
        if (req.body && typeof req.body.options === 'object' && req.body.options !== null) { options = { ...req.body.options }; }
        let foundImportDataSourceHeaders = await dbService.paginate(ImportDataSourceHeaders, query, options);
        if (!foundImportDataSourceHeaders || !foundImportDataSourceHeaders.data || !foundImportDataSourceHeaders.data.length) { return res.notFound(); }
        return res.success({ data: foundImportDataSourceHeaders });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.importDataSourceList = async (req, res) => {
    try {
        let foundImportDataSources = await dbService.findMany(ImportDataSource, {});
        if (!foundImportDataSources || !foundImportDataSources.length) { return res.notFound(); }
        const data = []
        foundImportDataSources.map(item => { data.push({ "label": item.name, "value": item.id }); });
        return res.success({ data: data });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.updateImportDataSource = async (req, res) => {
    try {
        let dataToUpdate = { ...req.body.data };
        const { error } = editImportDataSourceValidator(dataToUpdate);
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        let updatedImportDataSource = await dbService.updateOne(ImportDataSource, query, dataToUpdate);
        if (!updatedImportDataSource) { return res.notFound(); }
        return res.success({ data: updatedImportDataSource });
    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.activeInactiveImportDataSource = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const updateBody = { isActive: true, remark: req.body.data.remark };
        const activeInactiveImportDataSource = await dbService.updateOne(ImportDataSource, query, updateBody);
        if (!activeInactiveImportDataSource) { return res.notFound(); }
        return res.success({ data: activeInactiveImportDataSource });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.softDeleteImportDataSource = async (req, res) => {
    try {
        const { error } = softDeleteImportDataSourceValidator({ ...req.body.data });
        if (error) { return res.validationError({ message: error.details[0].message.replace(/['"]+/g, '') }); }
        const query = { _id: req.params.id };
        const updateBody = { isDeleted: true, remark: req.body.data.remark };
        const softDeletedImportDataSource = await dbService.updateOne(ImportDataSource, query, updateBody);
        if (!softDeletedImportDataSource) { return res.notFound(); }
        return res.success({ data: softDeletedImportDataSource });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};

exports.deleteImportDataSource = async (req, res) => {
    try {
        const query = { _id: req.params.id };
        const deletedImportDataSource = await dbService.deleteOne(ImportDataSource, query);
        if (!deletedImportDataSource) { return res.notFound(); }
        return res.success({ data: deletedImportDataSource });
    }
    catch (error) {
        return res.internalServerError({ message: error.message });
    }
};