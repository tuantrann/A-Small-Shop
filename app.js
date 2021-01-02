const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const sequelize = require('./util/database');
// const Product = require('./models/product');
// const User = require('./models/user');
// const Cart = require('./models/cart');
// const CartItem = require('./models/cart-item');
// const Order = require('./models/order');
// const OrderItem = require('./models/order-item');
// const mongoConnect = require('./util/database').mongoConnect;
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
  User.findById('5feee022175fd94064ac723c')
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://tuanga99:ZW1TRa6SiWeDNMAk@cluster0.vnzft.mongodb.net/shop?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then((result) => {
    User.findOne().then((user) => {
      if (!user) {
        const user1 = new User({
          name: 'Max',
          email: 'max@test.com',
          cart: {
            items: [],
          },
        });
        user1.save();
      }
    });

    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

// mongoConnect(() => {
//     app.listen(3000);
// });

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
