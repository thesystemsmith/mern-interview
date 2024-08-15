//signup controller function

const signup = (req, res) => {
    let { body } = req;
    if (body) {
        res.send('success');
    }
    else {
        throw new Error('Error Here')
    }
}

//signup route

route.post('/signup', signup)


// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


// Synchronous Error Handling
app.get('/sync', (req, res, next) => {
    try {
        // Synchronous code that might throw an error
        if (somethingWentWrong) {
            throw new Error('Something went wrong!');
        }
        res.send('This is a synchronous route!');
    } catch (err) {
        next(err); // Pass the error to the error-handling middleware
    }
});

// Asynchronous Error Handling
app.get('/async', async (req, res, next) => {
    try {
        // Asynchronous code that might throw an error
        const data = await someAsyncFunction();
        res.send(data);
    } catch (err) {
        next(err); // Pass the error to the error-handling middleware
    }
});