const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/pizzahouse', {
   useNewUrlParser: true
});

// Create a scheme for items in the museum: a title and a path to an image.
const itemSchema = new mongoose.Schema({
   title: String,
   path: String,
   description: String,
});

// Create a scheme for order items
const orderItemSchema = new mongoose.Schema({
   itemID: String,
   orderID: String,
   pizzaType: Number,
   description: String,
   size: Number,
   quantity: Number
});

// Create a scheme for order items
const orderSchema = new mongoose.Schema({
   orderID: String,
   delivery: Boolean,

   subtotal: Number,
   tax: Number,
   total: Number,

   name: String,
   address: String,
   city: String,
   state: String,
   zip: String,

   card: String,
   cvv: String,
   expDate: String,


});

// Create a model for order items
const Item = mongoose.model('Item', itemSchema);
const OrderItem = mongoose.model('OrderItem', orderItemSchema);
const Order = mongoose.model('Order', orderSchema);


// Create a new order item
app.post('/api/items', async (req, res) => {
   const orderItem = new OrderItem({
      itemID: req.body.itemID,
      orderID: req.body.orderID,
      pizzaType: req.body.pizzaType,
      description: req.body.description,
      size: req.body.size,
      quantity: req.body.quantity
   });
   // Check if item is already in order
   try {
      let item = await OrderItem.findOne({
         orderID: req.body.orderID,
         pizzaType: req.body.pizzaType,
         description: req.body.description,
         size: req.body.size,
      });
      if (item != null) {
         item.quantity = req.body.quantity + 1;
         await item.save();
      } else {
         await orderItem.save();
      }
      res.sendStatus(200);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

// Get a list of all of the order items
app.get('/api/items', async (req, res) => {
   try {
      let items = await OrderItem.find();
      res.send(items);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

// Get a list of the order items for orderID
app.get('/api/items/:orderID', async (req, res) => {
   try {
      let items = await OrderItem.find({
         orderID: req.params.orderID
      });
      res.send(items);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

// Delete an order item
app.delete('/api/items/:itemID', async (req, res) => {
   try {
      await OrderItem.deleteOne({
         itemID: req.params.itemID
      });
      res.sendStatus(200);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

// Edit an item
app.put('/api/items/:itemID', async (req, res) => {
   try {
      let item = await OrderItem.findOne({
         itemID: req.params.itemID
      });
      item.size = req.body.size;
      item.quantity = req.body.quantity;
      await item.save();
      res.sendStatus(200);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

// Create a new order item
app.post('/api/orders', async (req, res) => {
   const order = new Order({
      orderID: req.body.orderID,
      delivery: req.body.delivery
   });
   // Check if order already exists
   try {
      await order.save();
      res.sendStatus(200);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

// Get list of all orders
app.get('/api/orders', async (req, res) => {
   try {
      let orders = await Order.find();
      res.send(orders);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

// Get order by id
app.get('/api/orders/:orderID', async (req, res) => {
   try {
      let order = await Order.find({
         orderID: req.params.orderID
      });
      res.send(order);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

// Edit an order delivery option
app.put('/api/orders/delivery/:orderID', async (req, res) => {
   try {
      let order = await Order.findOne({
         orderID: req.params.orderID
      });
      order.delivery = req.body.delivery;

      await order.save();
      res.sendStatus(200);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

// Edit an order totals
app.put('/api/orders/totals/:orderID', async (req, res) => {
   try {
      let order = await Order.findOne({
         orderID: req.params.orderID
      });
      order.subtotal = req.body.subtotal;
      order.tax = req.body.tax;
      order.total = req.body.total;

      await order.save();
      res.sendStatus(200);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

// Edit an order payment details
app.put('/api/orders/payment/:orderID', async (req, res) => {
   try {
      let order = await Order.findOne({
         orderID: req.params.orderID
      });
      order.name = req.body.name;
      order.address = req.body.address;
      order.city = req.body.city;
      order.state = req.body.state;
      order.zip = req.body.zip;
      order.card = req.body.card;
      order.cvv = req.body.cvv;
      order.expDate = req.body.expDate;

      await order.save();
      res.sendStatus(200);
   } catch (error) {
      console.log(error);
      res.sendStatus(500);
   }
});

app.listen(3000, () => console.log('Server listning on port 3000!'));