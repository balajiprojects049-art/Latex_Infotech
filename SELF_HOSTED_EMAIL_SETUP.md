# Self-Hosted Email Server Setup (No Third-Party Services!)

## ✅ What You Get

- **100% Self-Hosted** - Your own Node.js email server
- **No Third-Party Services** - No EmailJS, no SendGrid, no external dependencies
- **Full Control** - Use any email provider (Gmail, Outlook, custom domain)
- **Free** - No monthly limits or costs
- **Simple Setup** - 5 minutes to configure

---

## 📋 Quick Setup Guide

### Step 1: Create `.env` File

Copy the example environment file:

```bash
cp .env.example .env
```

### Step 2: Get Email Credentials

#### Option A: Using Gmail (Recommended for Testing)

1. **Enable 2-Step Verification:**
   - Go to https://myaccount.google.com/security
   - Click "2-Step Verification" and turn it ON

2. **Create App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select "Windows Computer" (or any device)
   - Click "Generate"
   - **Copy the 16-character password** (it looks like: `xxxx xxxx xxxx xxxx`)

3. **Update `.env` file:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   EMAIL_USER=youremail@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   PORT=3001
   ```

#### Option B: Using Outlook/Hotmail

Update `.env` file:
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
EMAIL_USER=youremail@outlook.com
EMAIL_PASSWORD=your-password
PORT=3001
```

#### Option C: Using Custom Domain (@latexinfotech.com)

Ask your domain/hosting provider for SMTP settings, then update `.env`:
```env
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
EMAIL_USER=noreply@latexinfotech.com
EMAIL_PASSWORD=your-password
PORT=3001
```

### Step 3: Start Email Server

Open a **new terminal** and run:

```bash
npm run server
```

You should see:
```
✅ Email server running on http://localhost:3001
📧 Contact form endpoint: http://localhost:3001/api/contact
```

### Step 4: Start Frontend (Vite)

In **another terminal** (keep server running), run:

```bash
npx vite --port 5174
```

### Step 5: Test!

1. Go to http://localhost:5174/contact
2. Fill out the form
3. Click "Send Message"
4. Check your inbox at **info@latexinfotech.com**! 📧

---

## 🚀 How It Works

```
User fills contact form
         ↓
Frontend (React) sends data to http://localhost:3001/api/contact
         ↓
Backend (server.js) receives data
         ↓
Nodemailer connects to Gmail/Outlook SMTP
         ↓
Email sent to info@latexinfotech.com
         ↓
Success response back to frontend
```

**No third-party services involved!** Just your email provider's SMTP server.

---

## 📁 Project Structure

```
latex-infotech/
├── server.js              ← Your email server (Node.js + Express + Nodemailer)
├── .env                   ← Your email credentials (DO NOT COMMIT!)
├── .env.example           ← Template for .env
├── src/
│   └── pages/
│       └── Contact.jsx    ← Contact form (calls localhost:3001)
└── package.json
```

---

## 🛠️ Troubleshooting

### Error: "Failed to send message"

**Check these:**

1. ✅ Is the email server running? (`npm run server`)
2. ✅ Did you create `.env` file from `.env.example`?
3. ✅ Are your email credentials correct in `.env`?
4. ✅ For Gmail: Did you use an **App Password** (not regular password)?
5. ✅ Is 2-Step Verification enabled on Gmail?

### Gmail: "Invalid login credentials"

- Make sure you're using an **App Password**, not your Gmail password
- Ensure 2-Step Verification is enabled

### "Connection refused" or "Cannot POST /api/contact"

- Make sure the server is running on port 3001
- Check the terminal where you ran `npm run server`

### "CORS error"

- The server already has CORS enabled (`app.use(cors())`)
- Make sure you're running both frontend (port 5174) and backend (port 3001)

---

## 🔐 Security Notes

### ⚠️ IMPORTANT: `.env` File Security

**NEVER commit your `.env` file to Git!**

It's already in `.gitignore`, but double-check:

```bash
# Check if .env is ignored
git status
# Should NOT show .env file
```

If it shows `.env`, add it to `.gitignore`:
```
# .gitignore
.env
```

### Production Deployment

For production (Vercel/Netlify), you have two options:

**Option 1: Keep using this server**
- Deploy server to a separate hosting (Heroku, Railway, Render, etc.)
- Update Contact.jsx to point to your production server URL
- Add environment variables to your hosting platform

**Option 2: Switch to Vercel Serverless Functions**
- Use the original `/api/contact.js` file I created
- Works automatically on Vercel without running a separate server

---

## 📊 Email Features

### What's Included in the Email:

✅ Professional HTML formatting with your brand colors  
✅ Sender's name, email, phone, and message  
✅ Reply-To header (you can reply directly to the customer)  
✅ Clickable email and phone links  
✅ Responsive design  
✅ Company footer with branding

### Sample Email Preview:

```
📧 Subject: New Contact Form Submission from John Doe

┌─────────────────────────────────┐
│  New Contact Form Submission    │
│  From Latex Infotech Website    │
└─────────────────────────────────┘

👤 Name: John Doe
📧 Email: john@example.com (clickable)
📱 Phone: +1234567890 (clickable)
💬 Message:
    Hi, I'm interested in your services...

────────────────────────────────────
This email was sent from latexinfotech.com
© 2026 Latex Infotech. All rights reserved.
```

---

## 🎯 Next Steps

### For Development:

Run both servers together:

**Terminal 1:** `npm run server` (email server)  
**Terminal 2:** `npx vite --port 5174` (vite frontend)

Or use concurrently (if installed):
```bash
npm run dev:all
```

### For Production:

1. Deploy server to a Node.js hosting platform
2. Update Contact.jsx API endpoint to production URL
3. Add environment variables to hosting platform
4. Deploy frontend to Vercel

---

## 📝 Summary

| Feature | Status |
|---------|--------|
| Third-Party Services | ❌ None! |
| Email Provider | ✅ Your choice (Gmail/Outlook/Custom) |
| Monthly Cost | ✅ Free |
| Email Limits | ✅ None (depends on your email provider) |
| Setup Time | ✅ 5 minutes |
| Full Control | ✅ Yes |
| Works Locally | ✅ Yes |
| Production Ready | ✅ Yes |

**Emails sent to:** info@latexinfotech.com  
**No third-party services required!** 🎉

---

## 💡 Tips

- Test locally first before deploying
- Use Gmail App Passwords for security
- Keep `.env` file private
- Consider custom domain email for professional look
- Monitor server logs for debugging

**Questions?** Check the code in `server.js` - it's well-commented!
