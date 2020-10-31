const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use('/static', express.static('./static'));
app.listen(process.env.PORT || 3000, () => { 
    console.log('Running At https://localhost:3000');
});
app.get('/', (req, res) => { 
    res.sendFile('index.html', { root: './' });
});
app.get('/download', (req, res) => {
    var url = req.query.url;    
    res.header("Content-Disposition", 'attachment;\  filename="Songs.mp3');    
    ytdl(url, {format: 'mp3'}).pipe(res);
});