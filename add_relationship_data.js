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

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data name harus di isi!!"],
  },
  age: {
    type: Number,
  },
  favoriteFruit: fruitSchema,
});

const People = mongoose.model("People", peopleSchema);

const fruitDuku = new Fruit({
  name: "Duku",
  rating: 8,
  riview: "Rasanya sangat manis dan enak",
});

fruitDuku.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil simpan buah duku ke dalam database");
  }
});

const people = new People({
  name: "Sulkifli",
  age: 22,
  favoriteFruit: fruitDuku,
});

people.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil create data sulkifli yang relationship ke buah duku");
  }
});
