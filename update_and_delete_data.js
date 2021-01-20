const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data name harus di isi!!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  riview: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// Fruit.updateOne(
//   { _id: "60076c4d9da76b2af4bacf1f" },
//   { name: "nanas" },
//   function (error) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Berhasil update data mangga jadi nanas ke dalam database");
//     }
//   }
// );

Fruit.deleteOne({ _id: "60076c4d9da76b2af4bacf1f" }, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil delete data nanas di dalam database");
  }
});

Fruit.find(function (error, fruits) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log("Nama-nama buah setelah didelete");
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});
