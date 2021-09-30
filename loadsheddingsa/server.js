const express = require('express');
const morgan = require('morgan');
const router = require('./routes/api');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')




const PORT = process.env.PORT || 8080;
const app = express();


mongoose.connect(process.env.MONGODB_URL|| 'mongodb://localhost/platformmovies', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}

    , (error) => {
        if (error) {
            console.log('error!!!')
        }
        else
        console.log('new dater running!!!')
    }

);

mongoose.connection.on('connected', () => {
    console.log('folder mongo connected!!!')
});






app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))



app.use(morgan('tiny'));
app.use(cors());
app.use('/loadsheddingapi', router);

app.use(express.static(__dirname + "/client/build"))

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
   
}





app.listen(PORT, console.log(`cloudfound server runig on PORT${PORT} `));
