const router = require('express').Router();
const regionDetailsController = require('../../controllers/region-details');

router.route('/region-info/create').post(regionDetailsController.addRegionDetails);
router.route('/region-info/find-one').post(regionDetailsController.getRegionDetails);
router.route('/region-info/details').post(regionDetailsController.findAllRegionDetails);
router.route('/region-info/list-items').get(regionDetailsController.regionDetailsList);
router.route('/region-info/update/:id').put(regionDetailsController.updateRegionDetails);
router.route('/region-info/active-inactive/:id').put(regionDetailsController.activeInactiveRegionDetails);
router.route('/region-info/delete/:id').delete(regionDetailsController.deleteRegionDetails);

module.exports = router;