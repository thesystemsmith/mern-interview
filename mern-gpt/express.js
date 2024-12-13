//middleware
app.use((req,res, next) => {
    console.log('req recieved: ', req.method, req.url)
    next()
})

//routing
app.get('/users', (req, res) => {
    res.send('get all users')
})

app.post('/users', (req, res) => {
    res.send('Create a new user');
})

//request respose lifecycle
app.get('/api', (req, res) => {
    res.status(200).json({message: 'success'})
})

//rest api design
app.get('/users', (req, res) => {
    res.send('Get users');
});

app.post('/users', (req, res) => {
    res.send('Create user');
});

app.put('/users/:id', (req, res) => {
    res.send('Update user');
});

app.delete('/users/:id', (req, res) => {
    res.send('Delete user');
});


//error handling
app.use((err, req, res, next)=> {
    console.log(err)
    res.status(500).send('something went wrong')
})