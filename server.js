const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hi");
});


app.listen(PORT, () => {
    console.log("Express app listening to port : " + PORT);
});

