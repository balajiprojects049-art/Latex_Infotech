// Simple Express server for handling contact form submissions
// No third-party email services - uses your own email SMTP directly!

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: process.env.SMTP_PORT || 587,
        secure: false, // Use TLS
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASSWORD // Your email password or app password
        }
    });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Validate input
        if (!name || !email || !phone || !message) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        }

        // Create email transporter
        const transporter = createTransporter();

        // Email content
        const mailOptions = {
            from: `"Latex Infotech Website" <${process.env.EMAIL_USER}>`,
            to: 'info@latexinfotech.com',
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(to right, #2563eb, #06b6d4); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #1f2937; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-left: 3px solid #2563eb; border-radius: 4px; }
            .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">From Latex Infotech Website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">👤 Name:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">📧 Email:</span>
                <div class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <span class="label">📱 Phone:</span>
                <div class="value"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></div>
              </div>
              <div class="field">
                <span class="label">💬 Message:</span>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">This email was sent from the contact form at latexinfotech.com</p>
              <p style="margin: 10px 0 0 0;">© ${new Date().getFullYear()} Latex Infotech. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Success response
        res.status(200).json({
            success: true,
            message: 'Message sent successfully! We will get back to you within 24 hours.'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to send message. Please try again later.'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Email server is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n✅ Email server running on http://localhost:${PORT}`);
    console.log(`📧 Contact form endpoint: http://localhost:${PORT}/api/contact\n`);
});
