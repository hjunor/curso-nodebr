const ICrud = require('./interface/interfaceCrud');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
class Postgres extends ICrud {
  constructor() {
    super();
    this.driver = null;
    this._herois = null;
    this._connect();
  }
  async isConnected() {
    try {
      await this._driver.authenticate();
    } catch (error) {
      console.log('fail', erro);
      return false;
    }
  }
  async defineModel() {
    this._herois = driver.define(
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
  }
  create(item) {
    console.log('O item foi salvo no banco Postegres');
  }
  _connect() {
    this._driver = new Sequelize('heros', 'heberthjunor', '5df4k8t2k9', {
      host: 'localhost',
      dialect: 'postgres',
      quoteIdentifiers: false,
      operatorsAliases: {
        $eq: Op.eq,
        $ne: Op.ne,
        $gte: Op.gte,
        $gt: Op.gt,
        $lte: Op.lte,
        $lt: Op.lt,
        $not: Op.not,
        $in: Op.in,
        $notIn: Op.notIn,
        $is: Op.is,
        $like: Op.like,
        $notLike: Op.notLike,
        $iLike: Op.iLike,
        $notILike: Op.notILike,
        $regexp: Op.regexp,
        $notRegexp: Op.notRegexp,
        $iRegexp: Op.iRegexp,
        $notIRegexp: Op.notIRegexp,
        $between: Op.between,
        $notBetween: Op.notBetween,
        $overlap: Op.overlap,
        $contains: Op.contains,
        $contained: Op.contained,
        $adjacent: Op.adjacent,
        $strictLeft: Op.strictLeft,
        $strictRight: Op.strictRight,
        $noExtendRight: Op.noExtendRight,
        $noExtendLeft: Op.noExtendLeft,
        $and: Op.and,
        $or: Op.or,
        $any: Op.any,
        $all: Op.all,
        $values: Op.values,
        $col: Op.col,
      },
    });
  }
}
module.exports = Postgres;
