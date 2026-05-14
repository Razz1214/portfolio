# Raj's Portfolio - Local Setup Guide

## 📥 HOW TO DOWNLOAD THIS PROJECT
To download this entire project as a ZIP file from Firebase Studio:
1. Look at the **File Explorer** on the left side of your screen.
2. Find the root folder (the top-most folder in the list).
3. **Right-click** on that folder.
4. Select **Download**.

---

## 🚀 Local Setup Instructions
Once you have the ZIP file on your computer:

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18 or later)
- [npm](https://www.npmjs.com/)

### Getting Started
1. **Extract the ZIP**: Unzip the downloaded file into a folder on your computer.
2. **Open in VS Code**: Open that folder in Visual Studio Code.
3. **Install Dependencies**:
   Open your terminal in VS Code (`Ctrl + ` or `Cmd + `) and run:
   ```bash
   npm install
   ```
4. **Environment Variables**:
   Create a `.env.local` file in the root directory and add your Gemini API key:
   ```
   GOOGLE_GENAI_API_KEY=your_api_key_here
   ```
5. **Run the Development Server**:
   ```bash
   npm run dev
   ```
6. **View the App**:
   Go to [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
- `src/app`: Next.js App Router pages and layouts.
- `src/components`: UI components (ShadCN).
- `src/lib`: Data files and utility functions.
- `src/ai`: Genkit AI flows and configuration.
