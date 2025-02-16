const mongoose = require ('mongoose');
require ('dotenv').config();

const dbConnection=() => {
    const uri ='mongodb+srv://salonizade09:LPSibRHO8TYhFtf2@cluster0.deen9.mongodb.net/?';
if(!uri){
    console.error('MongoDB URI is missing. Kindly check your environment variables');
    process.exit(1);
}
mongoose.connect(uri, {
    dbName: "BioVerse",
    useUnifiedTopology: true,
    useNewUrlParser: true,
}
)
.then(() => {
    console.log('Database connected successfully');
}
)
.catch((error) => {
    console.error('An error occurred', error);
}
);
};

module.exports = {dbConnection};