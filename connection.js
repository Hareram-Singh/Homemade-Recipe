const mongoose = require('mongoose');
const url = ('mongodb+srv://hareramsingh5510:Ankush123@cluster0.reymmhh.mongodb.net/Ankush?retryWrites=true&w=majority')
mongoose.connect(url)
.then((result) => {
    console.log('database connected')
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;