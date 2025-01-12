import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const router = express.Router();

// Middleware for body parsing and CORS
router.use(bodyParser.json());
router.use(cors());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zainabhaider354@gmail.com', // replace with your email
    pass: 'sjyx eylz dwer xyvz', // replace with your app-specific password
  },
});

// Route to handle form submission
router.post('/submit-form', async (req, res) => {
  const { name, email, phone, interests, availability } = req.body;

  try {
    const mailOptions = {
      from: 'zainabhaider354@gmail.com',
      to: 'zainabhaider018@gmail.com', // Email address to receive form submissions
      subject: 'New Volunteer Registration',
      text: `
        Hello! 
        
        A new volunteer has registered:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Interests: ${interests}
        Availability: ${availability}

        Thank you!
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

