const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const fs = require('fs');

// Initialize nodemailer transporter with your email service provider configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_email_password',
  },
});

/**
 * @swagger
 * /send-otp:
 *   post:
 *     summary: Send OTP
 *     description: Sends an OTP to the provided email address
 *     tags:
 *       - Notification
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email address to send the OTP to
 *     responses:
 *       200:
 *         description: OTP sent successfully
 *       400:
 *         description: Bad request, error during sending OTP
 */
router.post('/send-otp', (req, res) => {
  const { email } = req.body;

  // Generate random OTP (example)
  const otp = Math.floor(1000 + Math.random() * 9000);

  // Send email with OTP
  transporter.sendMail(
    {
      from: 'your_email@gmail.com',
      to: email,
      subject: 'OTP for Verification',
      text: `Your OTP is: ${otp}`,
    },
    (error, info) => {
      if (error) {
        console.error('Error sending OTP:', error);
        res.status(400).json({ message: 'Error sending OTP' });
      } else {
        console.log('OTP sent:', info.response);
        res.status(200).json({ message: 'OTP sent successfully' });
      }
    }
  );
});

/**
 * @swagger
 * /send-booking-confirmation:
 *   post:
 *     summary: Send Booking Confirmation
 *     description: Sends a booking confirmation email to the provided email address
 *     tags:
 *       - Notification
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email address to send the booking confirmation to
 *     responses:
 *       200:
 *         description: Booking confirmation email sent successfully
 *       400:
 *         description: Bad request, error during sending booking confirmation
 */
router.post('/send-booking-confirmation', (req, res) => {
  const { email } = req.body;

  // Send booking confirmation email
  transporter.sendMail(
    {
      from: 'your_email@gmail.com',
      to: email,
      subject: 'Booking Confirmation',
      text: 'Your flight booking has been confirmed. Thank you for choosing us!',
    },
    (error, info) => {
      if (error) {
        console.error('Error sending booking confirmation:', error);
        res.status(400).json({ message: 'Error sending booking confirmation' });
      } else {
        console.log('Booking confirmation email sent:', info.response);
        res
          .status(200)
          .json({ message: 'Booking confirmation email sent successfully' });
      }
    }
  );
});

/**
 * @swagger
 * /send-ticket-pdf:
 *   post:
 *     summary: Send Ticket PDF
 *     description: Sends a ticket PDF to the provided email address
 *     tags:
 *       - Notification
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email address to send the ticket PDF to
 *               ticketPDF:
 *                 type: string
 *                 description: Path to the ticket PDF file
 *     responses:
 *       200:
 *         description: Ticket PDF sent successfully
 *       400:
 *         description: Bad request, error during sending ticket PDF
 */
router.post('/send-ticket-pdf', (req, res) => {
  const { email, ticketPDF } = req.body;

  // Read the ticket PDF file
  fs.readFile(ticketPDF, (err, data) => {
    if (err) {
      console.error('Error reading ticket PDF:', err);
      return res.status(400).json({ message: 'Error reading ticket PDF' });
    }

    // Attach the ticket PDF to the email
    const attachments = [
      {
        filename: 'ticket.pdf',
        content: data,
      },
    ];

    // Send email with attached ticket PDF
    transporter.sendMail(
      {
        from: 'your_email@gmail.com',
        to: email,
        subject: 'Your Ticket',
        text: 'Please find your ticket attached below.',
        attachments: attachments,
      },
      (error, info) => {
        if (error) {
          console.error('Error sending ticket PDF:', error);
          res.status(400).json({ message: 'Error sending ticket PDF' });
        } else {
          console.log('Ticket PDF sent:', info.response);
          res.status(200).json({ message: 'Ticket PDF sent successfully' });
        }
      }
    );
  });
});

module.exports = router;
