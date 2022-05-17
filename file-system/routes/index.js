const { Router } = require('express');
const router = Router();

router.get('/', (_req, res) => {
    res.send('File system page');
})

module.exports = router;