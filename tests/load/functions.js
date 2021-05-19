const faker = require('faker');

function createEmail(userContext, events, done) {
    userContext.vars.email = faker.internet.email();
    userContext.vars.password = faker.internet.password(12)+'$'
    done();
}

module.exports = {createEmail}