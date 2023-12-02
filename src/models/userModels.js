const database = require('../database/userDatabase');

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    database.query('SELECT users_mail,users_name FROM users', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const addUser = (name, email, password) => {
  return new Promise((resolve, reject) => {
    const newUser = { name, email, password };

    database.query('INSERT INTO users (users_name, users_mail, users_password) VALUES (?, ?, ?)', [newUser.name, newUser.email, newUser.password], (error, result) => {
      if (error) {
        reject(error);
      } else {
        newUser.id = result.insertId;
        resolve(newUser);
      }
    });
  });
};

module.exports = {
  getAllUsers,
  addUser
};
