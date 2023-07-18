const router = require('express').Router();
const exportSourceOwnerController = require('../../controllers/export-source-owner');

router.route('/export/source-owner/create').post(exportSourceOwnerController.addExportSourceOwner);
router.route('/export/source-owner/find-one').post(exportSourceOwnerController.getExportSourceOwner);
router.route('/export/source-owner/details').post(exportSourceOwnerController.findAllExportSourceOwner);
router.route('/export/source-owner/list-items').get(exportSourceOwnerController.exportSourceOwnerList);
router.route('/export/source-owner/update/:id').put(exportSourceOwnerController.updateExportSourceOwner);
router.route('/export/source-owner/active-inactive/:id').put(exportSourceOwnerController.activeInactiveExportSourceOwner);
router.route('/export/source-owner/delete/:id').delete(exportSourceOwnerController.softDeleteExportSourceOwner);

module.exports = router;