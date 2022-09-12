const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/Semicof_Blog');
        console.log("ok!");
    } catch (error) {
        console.log("fail!");
    }
}

module.exports={connect};