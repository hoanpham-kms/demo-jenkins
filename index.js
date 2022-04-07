const express = required('express');

const app = express();

app.get('/contact', function (req, res) {
    res.send('Hello jenkin.');
});

app.listen(3000, function() {
    console.log('Server is running at port 3000.');
});