const express = require('express');
const path = require('path');


const app = express();
const port = 5000;
const host = '0.0.0.0';


app.use('/static', express.static(path.resolve(__dirname, 'front-end', 'static')));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'front-end', 'index.html'));
});

app.listen(port, host, () => console.log("Server running..."));

