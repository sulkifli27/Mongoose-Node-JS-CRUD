const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  riview: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// Insert Satu Data
// const apple = new Fruit({
//   name: "Apple",
//   rating: 7,
//   riview: "Rasanya manis ",
// });

// apple.save(function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Berhasil simpan buah apple ke dalam database");
//   }
// });

// Insert Banyak Data
const kiwi = new Fruit({
  name: "Kiwi",
  rating: 9,
  riview: "Buah yang paling enak ",
});

const jeruk = new Fruit({
  name: "Jeruk",
  rating: 6,
  riview: "Asem rasanya ",
});

const pisang = new Fruit({
  name: "Pisang",
  rating: 10,
  riview: "Buah yang paling manis dan segar",
});

Fruit.insertMany([kiwi, jeruk, pisang], function (error) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log("Berhasil simpan buah ke dalam database");
  }
});
