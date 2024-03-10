const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// get suveikia tada kai treipiamasi toki adresa http://localhost:3000/
app.get('/', (req, res) => {
  //   res.send({ message: 'Labas programavime!', date: new Date() });
  res.send({ message: 'Labas programavime!' });
});

//http://localhost:3000/about
app.get('/about', (req, res) => {
  res.send({ message: 'About us', content: 'we are te best!' });
});

//http://localhost:3000/contact
app.get('/contact', (req, res) => {
  let title = 'Contact us';
  let phone = '+370 600 0000';
  let email = 'info@veb.com';
  res.send({ title, phone, email });
});

// REST API
// GET: /posts
// GET: /posts/:id
// POST: /posts
// PATCH: /posts/:id
// DELETE: /posts/:id

app.get('/posts', (req, res) => {
  res.send({ message: 'All posts' });
});

app.get('/posts/:id', (req, res) => {
  // console.log(req);
  res.send({ message: `Post with id ${req.params.id}` });
});

app.post('/posts/', (req, res) => {
  console.log(req.body);
  res.send({ message: 'Post created' });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
