const router = require('express').Router();
const exportDestSourceConfigController = require('../../controllers/export-dest-source-config');

router.route('/export/dest-source-config/create').post(exportDestSourceConfigController.addExportDestSourceConfig);
router.route('/export/dest-source-config/find-one').post(exportDestSourceConfigController.getExportDestSourceConfig);
router.route('/export/dest-source-config/details').post(exportDestSourceConfigController.findAllExportDestSourceConfig);
router.route('/export/dest-source-config/list-items').get(exportDestSourceConfigController.exportDestSourceConfigController);
router.route('/export/dest-source-config/update/:id').put(exportDestSourceConfigController.updateExportDestSourceConfig);
router.route('/export/dest-source-config/active-inactive/:id').put(exportDestSourceConfigController.activeInactiveExportDestSourceConfig);
router.route('/export/dest-source-config/delete/:id').delete(exportDestSourceConfigController.softDeleteExportDestSourceConfig);

module.exports = router;