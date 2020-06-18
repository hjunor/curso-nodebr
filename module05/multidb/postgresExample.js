//npm install sequelize pg-hstore pg

const Sequelize = require('sequelize');
const driver = new Sequelize('heros', 'heberthjunor', '5df4k8t2k9', {
  host: 'localhost',
  dialect: 'postgres',
  quoteIdentifiers: false,
  operatorsAliases: false,
});

async function main() {
  const Herois = driver.define(
    'heros',
    {
      id: {
        type: Sequelize.INTEGER,
        requided: true,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        required: true,
      },
      poder: {
        type: Sequelize.STRING,
        required: true,
      },
    },
    {
      tableName: 'TB_HEROIS',
      freezeTableName: false,
      timestamps: false,
    }
  );
  await Herois.sync();
  await Herois.create({
    nome: 'Vegeta',
    poder: 'Deus',
  });

  const result = await Herois.findAll({ raw: true });
  console.log(result);
}
main();
