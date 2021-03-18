require('dotenv').config({ path: './config.env' });
const express = require('express');

const app = express();

//The port will be displayed in the terminal to let you know what port the server is running on
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
