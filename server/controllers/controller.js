const { Pool } = require("pg");
const db = require("../model/model");
const controller = {};

controller.getExpense = async (req, res, next) => {
  const text = `SELECT * FROM expense3;`;
  // const text = `SELECT * FROM expenses;`;
  try {
    // const response = await db.query(text, (err, result) => {
    const result = await db.query(text);
    console.log('[11] result: ', result);
    // console.log(result);
      // console.log(result.rows)
    res.locals.expenses = result.rows;
    console.log(res.locals.expenses);
    return next();
    
  } catch (err) {
    // return next({
    //   log: "fatal error retrieving expenses from database inside controller.getExpense",
    //   status: 404,
    // });
    console.log('[22] err.message: ', err.message);
    return next(err);
  } 
};

controller.getBalance = (req, res, next) => {
  const text = `SELECT SUM(amount) FROM expense3`;
  // const text = `SELECT SUM(amount) FROM expenses`;
  // try {
      db.query(text, (err, result) => {
        if (err) {
          // next({
          //   log: "fatal error retrieving balance from database",
          //   status: 404,
          // });
          console.log('[37] err.message: ',err.message);
          return next(err);
        } else {
          
      console.log('rows: ', result.rows)
      console.log('rows at 0:', result.rows[0])
      console.log('sum: ', result.rows[0].sum)
      res.locals.balance = result.rows[0].sum;
      // console.log(res.locals.expenses);
      return next();
        }
    
    });
  // } catch {
  //   return next({
  //     log: "fatal error retrieving balance from database",
  //     status: 404,
  //   });
  
};

controller.postExpense = async (req, res, next) => {
  try {
    const { vendor, amount, category, id } = req.body;

  // console.log('req.body:', req.body);
  // try {
    const text = `INSERT INTO expense3 VALUES( '${vendor}', ${amount}, '2017-12-20','${category}');`;
    // res.locals.newExpense = req.body;
    // db.query(text, (err, result) => {
    //   // console.log(result);
    //   return next();
    // });
    res.locals.newExpense = req.body;
    console.log('req.body:', req.body);
    console.log('req.body.id:', req.body.id);
    const result = await db.query(text);
    // console.log('[72] result: ', result);
      // console.log(result);
    return next();
    
  } catch (err) {  
    // return next({
    //   log: "fatal error creating new expense in database inside controller.postExpense",
    //   status: 404,
    // });
    console.log('[81] err.message: ',err.message);
    return next(err);
  }
};

controller.deleteExpense = async (req, res, next) => {
  // const { vendor, amount, category, date} = req.params;
  // const { id } = req.params;
  
  // console.log(`req.params: `,req.params);
  // console.log(`id: ${id}`);
  // console.log("req.params for delete", id);
  try {
    // const { id } = req.params;
    // const text = `DELETE FROM expense3 WHERE id = ${id}`;
    // // const text = `DELETE FROM expenses WHERE id = ${id}`;
    // console.log(`id: ${id}`);
    // res.locals.oldExpense = req.params;
    // db.query(text, (err, result) => {
    //   // console.log(result);
    //   return next();
    const { id } = req.params;
    const text = `DELETE FROM expense3 WHERE id = ${id}`;
    // const text = `DELETE FROM expenses WHERE id = ${id}`;
    console.log(`id: ${id}`);
    res.locals.oldExpense = req.params;
    const result = await db.query(text, (err, result) => {
      // console.log(result);
      return next();
    });
  } catch (err) {
    console.log('[112] err.message: ', err.message);
    return next({
      log: "fatal error deleting  expense in database inside controller.deleteExpense",
      status: 404,
    });
  }
};

controller.retrieveLastId = (req, res, next) => {
  const { vendor, amount, category } = req.body;
  console.log('retrieveLastId ',req.body);
  // try {
    // const text = `SELECT id FROM expense3 ORDER BY id DESC LIMIT 1`;
    // const text = `SELECT id FROM expenses ORDER BY id DESC LIMIT 1`;
    // console.log('res.locals.index', res.locals.index)
  db.query(text, (err, result) => {
    if (err) {
      console.log('[129] err.message: ',err.message)
      return next(err);
    }

      if (!result.rows[0].id) {
        res.locals.index = 0;
      } else {
        res.locals.index = result.rows[0].id;
      }
      // console.log(result);
      return next();
    });
  // } catch {
  //   return next({
  //     log: "fatal error retriving last index",
  //     status: 404,
  //   });
  // }
};

module.exports = controller;

// INSERT INTO table_name(column1, column2, …)
// VALUES (value1, value2, …);

// CREATE TABLE expense (
//     Vendor varchar(255),
//     Amount int,
//     Date date,
//     Category varchar(255),
//     id int
// );
// INSERT INTO expense3 VALUES ('Walmart', 12, '2022-1-10', 'Shampoo', 0);
