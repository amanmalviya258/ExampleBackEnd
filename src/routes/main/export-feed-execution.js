const router = require('express').Router();
const exportFeedExecutionController = require('../../controllers/export-feed-execution');

router.route('/export/feed-execution-management/create').post(exportFeedExecutionController.addExportFeedExecution);
router.route('/export/feed-execution-management/find-one').post(exportFeedExecutionController.getExportFeedExecution);
router.route('/export/feed-execution-management/details').post(exportFeedExecutionController.findAllExportFeedExecution);
router.route('/export/feed-execution-management/list-items').get(exportFeedExecutionController.exportFeedExecutionList);
router.route('/export/feed-execution-management/update/:id').put(exportFeedExecutionController.updateExportFeedExecution);
router.route('/export/feed-execution-management/active-inactive/:id').put(exportFeedExecutionController.activeInactiveExportFeedExecution);
router.route('/export/feed-execution-management/delete/:id').delete(exportFeedExecutionController.softDeleteExportFeedExecution);

module.exports = router;