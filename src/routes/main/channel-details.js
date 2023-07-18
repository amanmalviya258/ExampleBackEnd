const router = require('express').Router();
const channelDetailsController = require('../../controllers/channel-details');

router.route('/channel-info/create').post(channelDetailsController.addChannelDetails);
router.route('/channel-info/find-one').post(channelDetailsController.getChannelDetails);
router.route('/channel-info/details').post(channelDetailsController.findAllChannelDetails);
router.route('/channel-info/list-items').get(channelDetailsController.channelDetailsList);
router.route('/channel-info/update/:id').put(channelDetailsController.updateChannelDetails);
router.route('/channel-info/active-inactive/:id').put(channelDetailsController.activeInactiveChannelDetails);
router.route('/channel-info/delete/:id').delete(channelDetailsController.softDeleteChannelDetails);

module.exports = router;