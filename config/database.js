const mongoose = require('mongoose');
module.exports = async function() {
  try {
    // Replace database value in the .env file with your database config url
    const DATABASE =
      process.env.NODE_ENV === 'test'
        ? process.env.DATABASE_TEST
        : process.env.DATABASE;

        console.log(DATABASE);
    await mongoose.connect(DATABASE)
    .then(()=>{console.log('connection succesful')})
    .catch(err=>console.log(err))
    //console.log(logger)
    //logger.info('Connected to the database.');
    console.log('Connected to the database.');
  } catch (error) {
    //logger.error('Could not connect to the database.', error);
    console.log('Could not connect to the database.', error);
  }
};

