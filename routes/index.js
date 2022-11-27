var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/click', function(req, res, next) {
  res.render('click', { title: 'Express' });
});

router.post('/click', (req,res)=>{
  res.send("oke lah")
})

router.get('/edit', (req,res)=>{
  res.send(`<form hx-put="/edit" hx-target="this" hx-swap="outerHTML">
  <div>
    <label>First Name</label>
    <input type="text" name="firstName" value="Joe">
  </div>
  <div class="form-group">
    <label>Last Name</label>
    <input type="text" name="lastName" value="Blow">
  </div>
  <div class="form-group">
    <label>Email Address</label>
    <input type="email" name="email" value="joe@blow.com">
  </div>
  <button class="btn btn-primary">Submit</button>
  <button class="btn btn-danger" hx-get="/contact/1">Cancel</button>
</form> `)
})

router.put('/edit', (req,res)=>{
  var body = req.body;
  res.send(`<div hx-target="this" hx-swap="outerHTML">
 <div><label>First Name</label>: ${body.firstName}</div>
    <div><label>Last Name</label>: ${body.lastName}</div>
    <div><label>Email</label>: ${body.email}</div>
    <button hx-get="/edit" class="btn btn-primary">
    Edit
    </button></div>`)
})



router.get('/bulk-update', (req,res) => {
  res.render('bulk-update')
})

router.put('/activate', (req,res)=>{
  var body = req.body;
  res.send(body)
})

router.put('/deactivate', (req,res)=>{
  var body = req.body;
  res.send(body)
})

module.exports = router;
