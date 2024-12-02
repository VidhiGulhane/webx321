// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB (replace 'your_database_url' with your actual MongoDB connection string)
// mongoose.connect('mongodb+srv://root:root@thriftythreads.9wrxm.mongodb.net/?retryWrites=true&w=majority&appName=ThriftyThreads', { useNewUrlParser: true, useUnifiedTopology: true });

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// // Define Mongoose Schemas
// const UserSchema = new mongoose.Schema({
//     username: String,
//     password: String,
// });

// const CartSchema = new mongoose.Schema({
//     userId: String,
//     items: Array, // Array of item objects
// });

// const ResaleSchema = new mongoose.Schema({
//     userId: String,
//     item: String,
//     condition: String,
// });

// // Create Mongoose Models
// const User = mongoose.model('User ', UserSchema);
// const Cart = mongoose.model('Cart', CartSchema);
// const Resale = mongoose.model('Resale', ResaleSchema);

// // Route to serve index.html for root URL
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Registration Route
// app.post('/register', async (req, res) => {
//     const { username, password } = req.body;

//     // Create a new user
//     const newUser  = new User({ username, password });
//     await newUser .save();
//     res.send('User  registered successfully!');
// });

// // Add to Cart Route
// app.post('/add-to-cart', async (req, res) => {
//     const { userId, item } = req.body;

//     // Check if the user already has a cart
//     let cart = await Cart.findOne({ userId });
//     if (!cart) {
//         // If not, create a new cart
//         cart = new Cart({ userId, items: [] });
//     }
    
//     // Add the item to the cart
//     cart.items.push(item);
//     await cart.save();
//     res.send('Item added to cart successfully!');
// });

// // Resale Form Submission Route
// app.post('/resel', async (req, res) => {
//     const { userId, item, condition } = req.body;

//     // Create a new resale entry
//     const newResale = new Resale({ userId, item, condition });
//     await newResale.save();
//     res.send('Resale item submitted successfully!');
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// // Registration Route
// app.post('/register', async (req, res) => {
//     const { username, password, email } = req.body;

//     // Check if the email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//         return res.status(400).json({ message: 'Email already exists.' });
//     }

//     // Create a new user
//     const newUser = new User({ username, password, email });
//     await newUser.save();

//     // Send a success message
//     res.json({ message: 'Successfully signed up!' });
// });

// // Login Route
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     // Find the user by email and password (Note: password should be hashed in a real app)
//     const user = await User.findOne({ email, password });
//     if (user) {
//         res.json({ message: 'Successfully logged in!' });
//     } else {
//         res.status(401).json({ message: 'Invalid email or password.' });
//     }
// });
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://root:root@thriftythreads.9wrxm.mongodb.net/?retryWrites=true&w=majority&appName=ThriftyThreads', { useNewUrlParser: true, useUnifiedTopology: true });

// // Create User Schema and Model
// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String
// });

// const User = mongoose.model('User', userSchema);

// // Registration Route
// app.post('/register', async (req, res) => {
//     const { username, email, password } = req.body;

//     // Check if the email is already registered
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//         return res.status(400).json({ message: 'Email already registered!' });
//     }

//     // Save the new user
//     const newUser = new User({ username, email, password });
//     await newUser.save();
//     res.json({ message: 'Successfully signed up!' });
// });

// // Login Route
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     // Find user by email and password
//     const user = await User.findOne({ email, password });
//     if (!user) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//     }
//     res.json({ message: 'Successfully logged in!' });
// });

// // Serve HTML Page
// app.use(express.static('public'));

// // Start Server
// app.listen(5000, () => {
//     console.log('Server started on http://localhost:5000');
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:root@thriftythreads.9wrxm.mongodb.net/?retryWrites=true&w=majority&appName=ThriftyThreads', { useNewUrlParser: true, useUnifiedTopology: true });

// Create User Schema and Model
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Registration Route
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'Email already registered!' });
    }

    // Save the new user
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.json({ message: 'Successfully signed up!' });
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find user by email and password
    const user = await User.findOne({ email, password });
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json({ message: 'Successfully logged in!' });
});

// Serve HTML Page
app.use(express.static('public'));

// Start Server
app.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
});