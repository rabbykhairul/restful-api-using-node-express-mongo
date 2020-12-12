const mongoose = require("mongoose");

const URI =
  "mongodb+srv://admin:2kRLa5V4N9LNDLFp@cluster0.sug9z.mongodb.net/first-test?retryWrites=true&w=majority";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

const customerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
