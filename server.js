var express = require('express');
var path = require('path');

const PORT = process.env.PORT || 5000;

var app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});