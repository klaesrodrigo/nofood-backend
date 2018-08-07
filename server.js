'use strict'

const app = require("./bin/config");
const variables = require("./bin/variables");

require('./routes/index')(app);

app.listen(variables.api.port, () => {
    console.info(`API RUN!! PORT: ${variables.api.port}`);
})