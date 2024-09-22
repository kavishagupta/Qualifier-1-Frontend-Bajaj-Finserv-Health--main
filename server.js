const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    axios.get('https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json') 
      .then(response => {
        const data = response.data;
        res.render('index', { employees: data.employees }); 
      })
      .catch(error => {
        console.log('Error:', error);
        res.status(500).send('An error occurred');
      });
  });

app.set('view engine', 'ejs'); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
