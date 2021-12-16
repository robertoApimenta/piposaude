const express = require('express');
const cors = require('cors');
const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, ()  => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});