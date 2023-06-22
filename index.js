let express = require('express'),
mongoose = require('mongoose'),
cors = require('cors');

let app = express();
let port = 3001;

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/pizza-mshp');

let pizzaSchema = new mongoose.Schema({
    title: String,
    desciption: String,
    ingredients: Array,
    image: String,
    price: Number
});
let Pizza = mongoose.model('pizza', pizzaSchema);

let CURRENT_USER = '649371924f76bc81434020a1';
let usersSchema = new mongoose.Schema({
    cart: [{
        type: mongoose.ObjectId,
        ref: 'pizza'
    }]
});
let User = mongoose.model('user', usersSchema);

app.get('/pizza/all', async (req,res) => {
    let pizzas = await Pizza.find();
    res.send(pizzas);
});
app.get('/pizza/new', async (req,res) => {
    let pizzas = await Pizza.find().sort({createdAt: -1}).limit(3);
    res.send(pizzas);
});
app.get('/pizza/find', async (req,res) => {
    let id = req.query.id
    let pizza = await Pizza.findOne({_id: id});
    res.send(pizza)
});

app.post('/user/cart', async (req,res) => {
    let user = await User.findOne({_id: CURRENT_USER}).populate('cart');
    res.send(user);
});
app.post('/user/count-cart', async (req,res) => {
    let user = await User.findOne({_id: CURRENT_USER});
    res.send(user.cart);
});

app.post('/user/cart-add', async (req,res) => {
    let pizza_id = req.body.id;
    let user = await User.findOne({_id: CURRENT_USER});
    user.cart.push(pizza_id); 
    await user.save();
    res.sendStatus(200);
});

app.post('/user/cart-remove', async (req,res) => {
    let pizza_index = req.body.index;
    let user = await User.findOne({_id: CURRENT_USER});
    user.cart.splice(pizza_index, 1);
    await user.save();
    res.sendStatus(200);
});

app.post('/user/cart-remove-all', async (req,res) => {
    let user = await User.findOne({_id: CURRENT_USER});
    user.cart = [];
    await user.save();
    res.sendStatus(200);
});