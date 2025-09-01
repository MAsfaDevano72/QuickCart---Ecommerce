// test-connection.js
import mongoose from "mongoose";

const uri = "mongodb+srv://quickcart-ecommerce:quickcart12345@cluster0.amdcylk.mongodb.net/quickcart?retryWrites=true&w=majority";

// Ganti <password> dengan password sebenarnya, dan encode jika ada simbol seperti @

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas successfully.");
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("❌ Connection failed:", err.message);
  });
