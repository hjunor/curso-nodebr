const ContextStrategy = require('./db/strategies/base/contextStrategy');
const MongoDB = require('./db/strategies/mongodb');
const Postgres = require('./db/strategies/postgres');

const CotextMongo = new ContextStrategy(new MongoDB());
const ContextPostgres = new ContextStrategy(new Postgres());
CotextMongo.create();
ContextPostgres.create();
