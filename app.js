const express = require("express");

    const app = express();
    const port = 3000;

    

    //require the controller
   const homeController = require("./app_server/controllers/homeController");
    app.set("view engine", "hbs");
    app.set("views", __dirname + "/views");

    app.get("/", homeController.home);
    app.get("/about", (req, res)=>{
        res.render("about", {title:"About Us", description: "This is the about page."});
});

app.get("/contact", (req, res) => {
     res.render("contact", {title:"Contact Us", description: "This is the contact page."});
});
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);


    });
