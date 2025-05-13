const express = require('express');
const app = express();

// app.use( (req, res) => {
//     console.log("Ge got a new request");
//     // res.send("<h1>Hello, we got your request from the server</h1>");
//     res.send({ color: 'red'});
// })

app.get('/', (req, res) => {
    res.send('<h1>This is the home page</h1>');
})

app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    const { subreddit } = req.params;
    res.send( `<h1> Welcome to the ${subreddit} subreddit page</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1> Welcome to the ${subreddit} subreddit page and this is the post with id ${postId} </h1>`) 
})

app.get('/cats', (req, res) => {
    res.send('Meow!!!');
})

app.post('/cats', (req, res) => {
    res.send('POST request to /cats');
})

app.get('/dogs', (req, res) => {
    res.send('Woof!!!');
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q) {
        res.send('Nothing found if nothing searched');
    }
    res.send(`Search results for: ${q}`);
})

app.get(/(.*)/, (req, res) => {
    res.send("I don't know that path");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})