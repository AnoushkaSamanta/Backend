const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const jwt=require("jsonwebtoken")

app.use(cookieParser());
app.get("/", (req, res) => {
  //    res.cookie("name","megha")
  //    res.send("done")

  //   bcrypt.genSalt(10, function (err, salt) {  //encrypt
  //     bcrypt.hash("poffffy", salt, function (err, hash) {
  //       console.log(hash)
  //     });
  //   });

  //decrypt by comparing
  //   bcrypt.compare("pofffy","$2b$10$TP6QzKhqBZmwuFZ66P9qzOuHObvYtGDISmHUFQeytfLE6bkcFMkoS",function (err, result) {
  //       console.log(result);
  //     }
  //   );

     let token =jwt.sign({email:"anoushka@example.com"},"secret");
     res.cookie("token",token);
     console.log(token)
     res.send("done")
    
});




app.get("/read", (req, res) => {
  console.log(req.cookies.token);
 let data= jwt.verify(req.cookies.token,"secret")
  res.send(data);
});

app.listen(3000);
