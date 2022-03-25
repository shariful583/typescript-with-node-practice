import express from "express";
const app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.send('hey from ts');
});

app.listen(port, () => {
    console.log('run successfully');
});