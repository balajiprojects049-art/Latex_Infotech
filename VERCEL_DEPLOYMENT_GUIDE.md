# 🚀 Deployment Guide: Vercel

Your project is now fully configured for Vercel! Here is how to deploy it.

## ✅ Pre-Deployment Checklist (We already did these!)
- [x] Created `api/contact.js` (Serverless Function for email)
- [x] Updated Frontend to use relative URL (`/api/contact`)
- [x] Configured `vercel.json` for routing
- [x] Added `.env` to `.gitignore` (Security)
- [x] Configured `vite.config.js` proxy (for local testing)

---

## 📦 Step 1: Push to GitHub

1.  Open your terminal or VS Code Source Control.
2.  Run these commands:
    ```bash
    git add .
    git commit -m "Setup email backend for Vercel deployment"
    git push
    ```

---

## ☁️ Step 2: Deploy on Vercel

1.  Go to [Vercel.com](https://vercel.com) and Log in.
2.  Click **"Add New..."** -> **"Project"**.
3.  Select your GitHub repository (`latex-infotech` or whatever you named it).
4.  **Configuration:**
    *   **Framework Preset:** Vite (should detect auto)
    *   **Root Directory:** `./` (default)
    *   **Build Command:** `npm run build` (default)
    *   **Output Directory:** `dist` (default)

5.  **⚠️ IMPORTANT: Environment Variables**
    You MUST add your email credentials here for the form to work!

    Click **"Environment Variables"** section and add:

    | Name | Value |
    | :--- | :--- |
    | `EMAIL_USER` | `Latexinfotech@gmail.com` (or your gmail) |
    | `EMAIL_PASSWORD` | `vzbt jbsy nwlj dgra` (your App Password) |
    | `SMTP_HOST` | `smtp.gmail.com` |
    | `SMTP_PORT` | `587` |

6.  Click **"Deploy"**.

---

## 🧪 Step 3: Verify & Test

Once deployed:
1.  Visit your Vercel URL (e.g., `https://latex-infotech.vercel.app`).
2.  Go to the **Contact Page**.
3.  Send a test message.
4.  Check the `info@latexinfotech.com` inbox.

---

## 💻 Local Development (Still Works!)

Because we set up a proxy in `vite.config.js`, you can still work locally exactly like before:

1.  **Terminal 1:** `npm run server` (Local Backend)
2.  **Terminal 2:** `npx vite` (Frontend)

The frontend will automatically route `/api/contact` to your local server when running locally, and to Vercel's functions when deployed!
