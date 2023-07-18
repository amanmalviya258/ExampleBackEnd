const router = require('express').Router();
const importDataSourceController = require('../../controllers/import-data-source');

router.route('/import/data-source/create').post(importDataSourceController.addImportDataSource);
router.route('/import/data-source/find-one').post(importDataSourceController.getImportDataSource);
router.route('/import/data-source/details').post(importDataSourceController.findAllImportDataSource);
router.route('/import/data-source/headers').post(importDataSourceController.findAllImportDataSourceHeaders);
router.route('/import/data-source/list-items').get(importDataSourceController.importDataSourceList);
router.route('/import/data-source/update/:id').put(importDataSourceController.updateImportDataSource);
router.route('/import/data-source/active-inactive/:id').put(importDataSourceController.activeInactiveImportDataSource);
router.route('/import/data-source/delete/:id').delete(importDataSourceController.softDeleteImportDataSource);

module.exports = router;