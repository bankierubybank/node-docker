const express = require('express');
const router = express.Router();

const logger = require('/usr/src/app/controllers/logger.js');

const utils = require('../utils/utils.js').default;

const debugging = true;

/**
 * Main routes.
 */
async function main() {
    router.get('/', (req, res) => {
        res.status(200).send("OK");
    })

    router.get('/test', (req, res) => {
        res.status(200).send("Test");
    })

    router.use((req, res) => {
        res.status(404).send('Not found.');
    });
}

main();

module.exports = router;