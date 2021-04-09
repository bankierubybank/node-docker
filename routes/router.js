const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const logger = require('/usr/src/app/controllers/logger.js');

const utils = require('../utils/utils.js').default;

const debugging = true;

express().use(bodyParser.json());

const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

/**
 * Create core and assign core to routes.
 */
async function main() {
    router.get('/test', (req, res) => {
        res.status(200).send("Test");
    })

    router.use((req, res) => {
        res.status(404).send('Not found.');
    });
}

main();

module.exports = router;