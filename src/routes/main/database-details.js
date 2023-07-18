const router = require('express').Router();
const databaseDetailsController = require('../../controllers/database-details');

router.route('/database-info/create').post(databaseDetailsController.addDatabaseDetails);
router.route('/database-info/find-one').post(databaseDetailsController.getDatabaseDetails);
router.route('/database-info/details').post(databaseDetailsController.findAllDatabaseDetails);
router.route('/database-info/list-items').get(databaseDetailsController.databaseDetailsList);
router.route('/database-info/update/:id').put(databaseDetailsController.updateDatabaseDetails);
router.route('/database-info/active-inactive/:id').put(databaseDetailsController.activeInactiveDatabaseDetails);
router.route('/database-info/delete/:id').delete(databaseDetailsController.softDeleteDatabaseDetails);

module.exports = router;