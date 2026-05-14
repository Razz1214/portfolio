# Raj's Portfolio - Local Setup Guide

This project was built using Next.js 15, Tailwind CSS, and ShadCN UI. To run this project locally on your machine in VS Code, follow these instructions.

## Prerequisites

- [Node.js](https://nodejs.org/) (Version 18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

1. **Download the Source**: If you haven't already, download the project files from the Firebase Studio explorer.
2. **Open in VS Code**: Open the project folder in VS Code.
3. **Install Dependencies**:
   Open your terminal in VS Code and run:
   ```bash
   npm install
   ```
4. **Environment Variables**:
   Check if you need to set up any environment variables (like API keys) in a `.env.local` file.
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

If you want to use the Firebase backend features (Firestore, Auth) locally, you will need to:
1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Add a Web App to get your configuration.
3. Update `src/firebase/config.ts` with your new credentials.
