const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middle wares
app.use(express.json());
app.use(cors());

//listen to a port
app.listen(5000, () => {
  console.log("SERVER STARTED");
});

//all currencies
app.get("/getAllCurrencies", (req, res) => {
  const nameURL =
    "https://openexchangerates.org/api/currencies.json?app_id=3eb2f3445b044b5ab1e089eadbb4bb61";




  try {

    const nameResponce = await axios.get(nameURL);
    const nameData = nameResponce.data;
    
    return res.json(nameData);

  } catch (err) {
    console.error(err);
  }
});
