import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from Home");

const handleProfile = (req, res) => res.send("You are on My Profile");

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(4000, handleListening);
