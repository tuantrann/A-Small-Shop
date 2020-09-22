const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const sequelize = require('./util/database');
// const Product = require('./models/product');
// const User = require('./models/user');
// const Cart = require('./models/cart');
// const CartItem = require('./models/cart-item');
// const Order = require('./models/order');
// const OrderItem = require('./models/order-item');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const errorController = require('./controllers/error');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById('5f69a29b9de08acd84d6d712')
    .then(user => {
        req.user = user;
        next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


mongoConnect(() => {
    app.listen(3000);
});



// Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
// User.hasMany(Product);


// Cart.belongsTo(User);
// User.hasOne(Cart);

// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });

// Order.belongsTo(User);
// User.hasMany(Order);
// Order.belongsToMany(Product, { through: OrderItem } );

// sequelize
// .sync()
// // .sync({force: true})
// .then(result => {
//     return User.findByPk(1);
    
// })
// .then(user => {
//     if (!user) {
//         return User.create({ name: 'Max', email: 'test@test.com'});
//     }
//     return user;
// })
// .then(user => {
//     console.log(user);
    
//     return user.createCart();
// })
// .then(cart => {
//     app.listen(3000);
// })
// .catch(err => {
//     console.log(err);
// });

