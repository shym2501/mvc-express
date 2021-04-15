// Home page
exports.Home = (req, res) => {
  res.render('index', { title: 'Express' })
}

// About Page
exports.About = (req, res) => {
  res.send('Welcome to About Page')
}

// Contact page
exports.Contact = (req, res) => {
  res.send('Welcome to Contact Page')
}