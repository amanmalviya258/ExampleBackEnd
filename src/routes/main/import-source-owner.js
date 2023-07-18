const router = require('express').Router();
const importSourceOwnerController = require('../../controllers/import-source-owner');

router.route('/import/source-owner/create').post(importSourceOwnerController.addImportSourceOwner);
router.route('/import/source-owner/find-one').post(importSourceOwnerController.getImportSourceOwner);
router.route('/import/source-owner/details').post(importSourceOwnerController.findAllImportSourceOwner);
router.route('/import/source-owner/list-items').get(importSourceOwnerController.importSourceOwnerList);
router.route('/import/source-owner/update/:id').put(importSourceOwnerController.updateImportSourceOwner);
router.route('/import/source-owner/active-inactive/:id').put(importSourceOwnerController.activeInactiveImportSourceOwner);
router.route('/import/source-owner/delete/:id').delete(importSourceOwnerController.softDeleteImportSourceOwner);

module.exports = router;