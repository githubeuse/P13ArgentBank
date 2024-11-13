const mongoose = require("mongoose");
const databaseUrl =
  // process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'
  `mongodb+srv://juliesouvandypro:2VV1pdBp5jTFpYEP@cluster0.bxoyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true });
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
