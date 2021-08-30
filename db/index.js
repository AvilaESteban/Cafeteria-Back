const mongoose = require('mongoose');

const initMongo = () =>
mongoose.connect( process.env.MONGO_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology:true
    },
 () => console.log('conectado a mongo DB')
);

module.exports = {
    initMongo
}