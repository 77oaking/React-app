const express = require('express')
const app = express()
const port = 3000

const apiRoutes=require("./routes/apiRoutes")

app.get('/', async(req, res) => {
  // const Product = require("./models/ProductModel")
  // try {
  //   const product = new Product
  //   product.name="New Product Model"
  //   const productsaved=await product.save()
  //   console.log(productsaved==product)
  //   const products=await Product.find()
  //   console.log(products.length)
  //   res.send("Product Created " + product._id)
  // } catch (error) {    
  //   next(error)
  // }
  res.json({message:"API Running..."})
})

//Mongodb Connection
const connectDB = require("./config/db");
connectDB();

app.use('/api',apiRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})