const express = require("express");
const bodyParser = require("body-parser");

const { PORT, REMINDER_BINDING_KEY } = require("./config/serverConfig");

const EmailService = require("./services/email-service");
const TicketController = require("./controllers/ticket-controller");

const jobs = require("./utils/job");
const { createChannel, subscribeMessage } = require("./utils/messageQueue");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);

  // suscribing message
  const channel = await createChannel();
  subscribeMessage(channel, EmailService, REMINDER_BINDING_KEY);

  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
};

setupAndStartServer();
