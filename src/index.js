const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const { sendBasicEmail } = require("./services/email-service");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);

    //calling basic email-service and passing this message to send mail
    sendBasicEmail(
      "support@admin.com",
      "moviebookingappservice@gmail.com",
      "This is a testing email",
      "Hey, how are you, I hope you like the support"
    );
  });
};

setupAndStartServer();
