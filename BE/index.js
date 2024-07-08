import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { authRouter } from "./Routes/authRoute.js";
import { userRouter } from "./Routes/usersRoute.js";
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());



app.use("/",authRouter)
app.use("/users",userRouter)

const FinalSchema = new mongoose.Schema({
  name: String,
  image: String,
  image2:String,
  price: Number,
  description: String,
  category:String
});

const FinalModel = mongoose.model("final", FinalSchema);

app.get("/final", async (req, res) => {
  const products = await FinalModel.find();
  res.send(products);
});
app.get("/final/:id", async (req, res) => {
  const { id } = req.params;
  const products = await FinalModel.findById(id);
  res.send(products);
});
app.get("/categories", async (req, res) => {
  const products = await FinalModel.find();
  res.send(products);
});
app.get("/categories/:category", async (req, res) => {
  const catgor= req.params.category;
  const data = await FinalModel.find({category:catgor});
  res.send(data);
});

app.post("/final", async (req, res) => {
  const data = req.body;
  const products = new FinalModel(data);
  await products.save();
  res.send(products);
});

app.put("/final/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const products = await FinalModel.findByIdAndUpdate(id, data);
  res.send(products);
});

app.delete("/final/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const products = await FinalModel.findByIdAndDelete(id, data);
  res.send(products);
});

mongoose
  .connect("mongodb+srv://fidan:fidan2911@fidoshh.cia2mse.mongodb.net/?retryWrites=true&w=majority&appName=Fidoshh")
  .then(() => console.log("Connected!"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
