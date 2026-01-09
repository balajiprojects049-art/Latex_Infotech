# Contact Form Email Setup Guide

This document explains how to configure the contact form to send emails to `info@latexinfotech.com` using SendGrid.

## Overview

The contact form on the Contact Us page now sends form submissions to `info@latexinfotech.com` via a serverless API function using SendGrid email service.

## Files Created/Modified

1. **`/api/contact.js`** - Serverless API endpoint that handles form submissions
2. **`/src/pages/Contact.jsx`** - Updated to call the API and show loading/success/error states
3. **`.env.example`** - Template for environment variables
4. **`vercel.json`** - Vercel configuration for API routing

## Setup Instructions

### Step 1: Get SendGrid API Key

1. Go to [SendGrid](https://sendgrid.com/) and create a free account (or log in)
2. Navigate to **Settings → API Keys**
3. Click **"Create API Key"**
4. Give it a name (e.g., "Latex Infotech Contact Form")
5. Select **"Full Access"** permissions
6. Click **"Create & View"**
7. **Copy the API key** (you won't be able to see it again!)

### Step 2: Verify Sender Email (Important!)

SendGrid requires you to verify the sender email domain:

1. In SendGrid, go to **Settings → Sender Authentication**
2. Click **"Verify a Single Sender"**
3. Fill in the form with these details:
   - **From Name:** Latex Infotech Website
   - **From Email:** noreply@latexinfotech.com (or any @latexinfotech.com email you have access to)
   - **Reply To:** Same as above
   - Fill in required company details
4. Click **"Create"**
5. Check your email inbox for the verification email
6. Click the verification link

**Note:** If you don't have access to a @latexinfotech.com email, you can:
- Use a personal email temporarily for testing
- Or set up domain authentication (requires DNS access)

### Step 3: Configure Environment Variables

#### For Local Development (Optional)

1. Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```

2. Add your SendGrid API key:
   ```
   SENDGRID_API_KEY=SG.your_actual_api_key_here
   ```

3. The API will work in "demo mode" without this key (logs to console only)

#### For Vercel Production (Required)

1. Go to your Vercel project dashboard
2. Navigate to **Settings → Environment Variables**
3. Add a new variable:
   - **Name:** `SENDGRID_API_KEY`
   - **Value:** Your SendGrid API key (paste it here)
   - **Environment:** Select all (Production, Preview, Development)
4. Click **"Save"**

### Step 4: Deploy to Vercel

1. Commit all changes:
   ```bash
   git add .
   git commit -m "Add contact form email functionality"
   git push
   ```

2. Vercel will automatically deploy your changes

3. After deployment, test the contact form on your live site

## How It Works

### User Flow

1. User fills out the contact form on `/contact`
2. User clicks "Send Message"
3. Button shows loading spinner with "Sending..." text
4. Form data is sent to `/api/contact` endpoint
5. API validates the data and sends email via SendGrid to `info@latexinfotech.com`
6. Success/error message is displayed to the user
7. On success, form is cleared automatically after 5 seconds

### Email Format

The email sent to `info@latexinfotech.com` includes:

- **Subject:** "New Contact Form Submission from [Name]"
- **Reply-To:** User's email address (so you can reply directly)
- **Content:**
  - User's name
  - User's email (clickable mailto link)
  - User's phone (clickable tel link)
  - User's message
  - Professional HTML formatting with your brand colors

### API Response Codes

- **200:** Success - Email sent successfully
- **400:** Bad Request - Missing or invalid fields
- **405:** Method Not Allowed - Only POST requests accepted
- **500:** Server Error - Failed to send email

## Testing

### Test Locally (Demo Mode)

Without setting up SendGrid, the form will work in "demo mode":

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Go to `http://localhost:5173/contact`
3. Fill out and submit the form
4. Check the browser console - you'll see the submission logged
5. The form will show success message

### Test with SendGrid (Production)

1. Set up SendGrid API key as described above
2. Submit the test form
3. Check your `info@latexinfotech.com` inbox
4. You should receive a formatted email

## Troubleshooting

### Issue: "Failed to send message"

**Solutions:**
1. Check that `SENDGRID_API_KEY` is set in Vercel environment variables
2. Verify your sender email in SendGrid
3. Check SendGrid dashboard for error logs
4. Ensure API key has correct permissions

### Issue: Email not received

**Solutions:**
1. Check spam/junk folder
2. Verify sender email authentication in SendGrid
3. Check SendGrid Activity Feed for delivery status
4. Ensure `info@latexinfotech.com` is correct

### Issue: CORS errors in browser

**Solutions:**
1. Verify `vercel.json` is properly committed
2. Redeploy on Vercel
3. Clear browser cache

### Issue: 404 on /api/contact

**Solutions:**
1. Ensure `api/contact.js` exists in the repository
2. Verify file is committed and pushed
3. Check Vercel build logs

## Alternative: Using EmailJS (No Backend Required)

If you prefer not to use SendGrid or want a simpler setup, you can use **EmailJS** which works entirely from the frontend:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update Contact.jsx to use EmailJS SDK

Let me know if you'd like me to implement the EmailJS alternative instead!

## Support

If you need help with setup, please refer to:
- [SendGrid Documentation](https://docs.sendgrid.com/)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)

---

**Email Destination:** info@latexinfotech.com  
**From Address:** noreply@latexinfotech.com  
**Service:** SendGrid  
**Hosting:** Vercel Serverless Functions
