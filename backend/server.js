const express = require('express')
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;

const app = express();

const port = 3001;

app.use(cors());

app.use(express.json());

app.use(express.static('static'));



