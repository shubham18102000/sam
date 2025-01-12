const express = require('express');
const cors = require('cors'); // Add the cors package
const app = express();

const port = 3003;

// Enable CORS for all routes
app.use(cors());
app.get('/login', (req, res) => { // Fixed the space in '/ '
    
    res.send('hello, shubham hello!');
  
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Use the correct variable
});
