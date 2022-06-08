const express = require('express');
const cors = require('cors');
const appConfig = require('./src/models');
const mongoose = require('mongoose');

const app = express();
const port = appConfig.Port || 8000;

const corsOption = {
    origin: '*'
}

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


appConfig.mongoose.connect(appConfig.dbString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
    console.log(`Sever is now connected to the db!`)
}).catch(err => {
    console.log(`Server is unable to connect to db!`)
    process.exit();
});


require('./src/routes/question.routes')(app)

app.get('/', (req, res) => {
	res.status(200).send({code: 0, status: 'Success', message: 'Welcome to question api server! Please add "/api" to your url' });
});


app.listen(port, () => {
	console.log(`App is now listening on http://localhost:${port}`);
});

