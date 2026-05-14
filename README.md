# Raj's Portfolio - Local Setup Guide

This project was built using Next.js 15, Tailwind CSS, and ShadCN UI. To run this project locally on your machine in VS Code, follow these instructions.

## Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

1. **Download the Source**: Right-click the root folder in the Firebase Studio file explorer and select **Download**.
2. **Open in VS Code**: Extract the zip and open the project folder in VS Code.
3. **Install Dependencies**:
   Open your terminal in VS Code and run:
   ```bash
   npm install
   ```
4. **Environment Variables**:
   Create a `.env.local` file in the root directory for any API keys (like Google Gemini).
5. **Run the Development Server**:
   ```bash
   npm run dev
   ```
6. **View the App**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: UI components (ShadCN).
- `src/lib`: Data files and utility functions.
- `src/firebase`: Firebase configuration and hooks.

## Firebase Integration

If you want to use the Firebase backend features (Firestore, Auth) locally:
1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Add a **Web App** to your project to get your `firebaseConfig` object.
3. Update `src/firebase/config.ts` with your new credentials.
4. Enable **Firestore** and **Authentication** in the Firebase console if you plan to use those services.
