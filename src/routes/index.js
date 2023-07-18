const router = require('express').Router();

router.use(require('./main/channel-details'));
router.use(require('./main/database-details'));
router.use(require('./main/export-dest-source-config'));
router.use(require('./main/export-dest-source'));
router.use(require('./main/export-feed-execution'));
router.use(require('./main/export-source-owner'));
router.use(require('./main/import-data-source'));
router.use(require('./main/import-source-owner'));
router.use(require('./main/region-details'));

module.exports = router;