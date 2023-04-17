const db = require('../connection');

const users = () => {
  const queryString = `select * from users`;
  return db.query(queryString,null,(res) => {
    return res.rows;
  }
  );
};

exports.getAllResources = getAllResources;