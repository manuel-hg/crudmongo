require('dotenv').config();

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connection success')
}).catch((error)=> {
    console.log('connection error', error)
})