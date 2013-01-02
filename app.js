var express, app;

express = require('express');

app = express();

app.use(express.logger());
app.use(express.compress());
app.use(express.static('public'));

app.get('/images/movies/:id', function(request, response) {
  response.send(request.params.id);
});

app.listen(process.env.PORT || 5000);
