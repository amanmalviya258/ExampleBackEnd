const router = require('express').Router();
const exportDestSourceController = require('../../controllers/export-dest-source');

router.route('/export/dest-source/create').post(exportDestSourceController.addExportDestSource);
router.route('/export/dest-source/find-one').post(exportDestSourceController.getExportDestSource);
router.route('/export/dest-source/details').post(exportDestSourceController.findAllExportDestSource);
router.route('/export/dest-source/list-items').get(exportDestSourceController.exportDestSourceList);
router.route('/export/dest-source/update/:id').put(exportDestSourceController.updateExportDestSource);
router.route('/export/dest-source/active-inactive/:id').put(exportDestSourceController.activeInactiveExportDestSource);
router.route('/export/dest-source/delete/:id').delete(exportDestSourceController.softDeleteExportDestSource);

module.exports = router;