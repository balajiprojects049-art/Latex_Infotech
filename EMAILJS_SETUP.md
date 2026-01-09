# EmailJS Setup Guide for Contact Form

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE!)
3. Sign up with your email or Google account

### Step 2: Add Email Service
1. In your EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - **Outlook**
   - Or any other provider
4. Connect your email account (the one that will SEND emails)
5. Copy the **Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template
1. Click **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template:

**Template Content:**
```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from the Latex Infotech contact form.
Reply to: {{reply_to}}
```

**Template Settings:**
- **To Email:** info@latexinfotech.com
- **From Name:** Latex Infotech Website
- **Reply To:** {{reply_to}}

4. Click **"Save"**
5. Copy the **Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (looks like a long string)
3. Copy it

### Step 5: Update the Code
Open `src/pages/Contact.jsx` and replace these lines (around line 71-74):

```javascript
const SERVICE_ID = 'service_latex'; // Replace with YOUR Service ID from Step 2
const TEMPLATE_ID = 'template_contact'; // Replace with YOUR Template ID from Step 3
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with YOUR Public Key from Step 4
```

For example:
```javascript
const SERVICE_ID = 'service_abc123';
const TEMPLATE_ID = 'template_xyz789';
const PUBLIC_KEY = 'XyZ123AbC456DeF789';
```

### Step 6: Test!
1. Save the file
2. Refresh your browser at http://localhost:5174/contact
3. Fill out the form
4. Click "Send Message"
5. Check `info@latexinfotech.com` for the email!

## Email Template Parameters

The form sends these values to your template:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone number
- `{{message}}` - User's message
- `{{to_email}}` - Your email (info@latexinfotech.com)
- `{{reply_to}}` - User's email (for replies)

## Free Tier Limits
- **200 emails/month** (plenty for most websites!)
- Upgrade to paid plan if you need more

## Troubleshooting

### Error: "Failed to send message"
- Double-check your Service ID, Template ID, and Public Key
- Make sure you've verified your email in EmailJS
- Check the browser console for detailed error messages

### Email not received
- Check your spam folder
- Verify the "To Email" in your template is `info@latexinfotech.com`
- Check EmailJS dashboard → Activity for delivery status

### CORS errors
- EmailJS handles CORS automatically - this shouldn't happen
- If it does, make sure you're using the latest version of @emailjs/browser

## Alternative Template (HTML Format)

For a nicer-looking email, use this HTML template:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(to right, #2563eb, #06b6d4); color: white; padding: 30px; text-align: center;">
    <h1 style="margin: 0;">New Contact Form Submission</h1>
    <p style="margin: 10px 0 0 0;">From Latex Infotech Website</p>
  </div>
  
  <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb;">
    <div style="margin-bottom: 20px;">
      <strong>👤 Name:</strong>
      <div style="background: white; padding: 12px; margin-top: 5px; border-left: 3px solid #2563eb;">
        {{from_name}}
      </div>
    </div>
    
    <div style="margin-bottom: 20px;">
      <strong>📧 Email:</strong>
      <div style="background: white; padding: 12px; margin-top: 5px; border-left: 3px solid #2563eb;">
        <a href="mailto:{{from_email}}">{{from_email}}</a>
      </div>
    </div>
    
    <div style="margin-bottom: 20px;">
      <strong>📱 Phone:</strong>
      <div style="background: white; padding: 12px; margin-top: 5px; border-left: 3px solid #2563eb;">
        <a href="tel:{{phone}}">{{phone}}</a>
      </div>
    </div>
    
    <div style="margin-bottom: 20px;">
      <strong>💬 Message:</strong>
      <div style="background: white; padding: 12px; margin-top: 5px; border-left: 3px solid #2563eb; white-space: pre-wrap;">
        {{message}}
      </div>
    </div>
  </div>
  
  <div style="background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; font-size: 12px;">
    <p style="margin: 0;">This email was sent from the contact form at latexinfotech.com</p>
    <p style="margin: 10px 0 0 0;">© 2026 Latex Infotech. All rights reserved.</p>
  </div>
</div>
```

**Template Settings for HTML:**
- **Content Type:** HTML
- **Subject:** New Contact Form Submission from {{from_name}}
- **To Email:** info@latexinfotech.com
- **Reply To:** {{reply_to}}

---

## Summary

✅ **No backend needed** - Works entirely from the browser  
✅ **Free tier** - 200 emails/month  
✅ **Works locally** - Test immediately without deployment  
✅ **Works on Vercel** - Deploy and forget  
✅ **Email sent to** info@latexinfotech.com  
✅ **5-minute setup** - Faster than SendGrid!

**Questions?** Check [EmailJS Documentation](https://www.emailjs.com/docs/)
