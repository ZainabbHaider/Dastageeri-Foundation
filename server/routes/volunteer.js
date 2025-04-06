import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// import logo from 'src\logo.png';
const router = express.Router();

// Middleware for body parsing and CORS
router.use(bodyParser.json());
router.use(cors());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route to handle form submission
router.post('/submit-form', async (req, res) => {
  const { name, email, phone, interests, availability } = req.body;

  try {
    const mailOptions = {
      from: 'Dastigeeri Foundation',
      to: 'asad.h.shaikh@gmail.com', // Email address to receive form submissions
      subject: 'New Volunteer Registration',
      html: `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                color: #333;
                line-height: 1.5;
                margin: 0;
                padding: 20px;
                background-color: #f4f4f4;
              }
              .email-container {
                background-color: #ffffff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              .email-header {
                text-align: center;
                margin-bottom: 20px;
              }
              .email-header img {
                width: 150px;
                height: auto;
              }
              .email-header h2 {
                font-size: 24px;
                color: #2c3e50;
              }
              .email-content {
                font-size: 16px;
                color: #34495e;
              }
              .email-content p {
                margin: 10px 0;
              }
              .email-footer {
                margin-top: 20px;
                font-size: 14px;
                text-align: center;
                color: #7f8c8d;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="email-header">
                <img src="https://drive.google.com/uc?export=view&id=1If8ElBguspNmADc56-i5D0IbS_ovkQh_" alt="NGO Logo" />
                <h2>New Volunteer Registration</h2>
              </div>
              <div class="email-content">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Areas of Interest:</strong> ${interests}</p>
                <p><strong>Availability:</strong> ${availability}</p>
              </div>
              <div class="email-footer">
                <p>Thank you for your continued support!</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to submit the form. Please try again later.' });
  }
});

export default router;
