// Load environment variables
// require("dotenv").config();

// Require core modules
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

// App setup
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Routes
app.get("/greet", (req, res) => {
  res.send("hiiii");
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!!" });
  }

  try {
    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.TO_EMAIL,
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\n${message}`,
    });

    res
      .status(200)
      .json({ message: "Message sent successfully!", id: result.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Email could not be sent!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
