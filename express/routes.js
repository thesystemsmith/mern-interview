// Route parameters in Express.js are placeholders in the route definition that capture values from the URL. 
// They are specified in the route path using colon syntax (:) and can be accessed in route handlers using req.params. Here's an example:

app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    // Use userId in the route handler
});
