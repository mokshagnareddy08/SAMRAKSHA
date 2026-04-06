# 🛡️ Samraksha – Elderly Care & Family Support Platform

## 📌 Overview

**Samraksha** is a modern web application designed to support elderly individuals and their families through real-time monitoring, caregiver coordination, SOS alerts, and AI-powered health chat assistance.

The platform enables families to stay connected with patients, track caregiver activities, and respond quickly during emergencies.

---

##  Key Features

###  Authentication

* Secure login & signup
* Role-based access (Family / Caregiver)

###  Family Dashboard

* Monitor patients
* Track caregivers
* View alerts
* Access SOS updates

###  Caregiver Dashboard

* Task management
* Patient tracking
* Profile management

###  SOS System

* Emergency trigger functionality
* Supabase Edge Function to send SOS email notifications

###  Health Chat

* AI-powered health assistant
* Implemented using Supabase Edge Function (`health-chat`)

###  Live Tracking Map

* Real-time location tracking component

###  Alerts System

* Centralized alert monitoring page

---

##  Tech Stack

### Frontend

*  Vite
*  React
*  TypeScript
*  Tailwind CSS
*  shadcn/ui components

### Backend / Services

*  Supabase (Auth + Database)
*  Supabase Edge Functions

  * `health-chat`
  * `send-sos-email`

### Testing

*  Vitest
*  Playwright

---

## 📂 Project Structure

```
samraksha-project/
│
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── landing/
│   │   └── ui/
│   ├── pages/
│   │   ├── Auth.tsx
│   │   ├── FamilyDashboard.tsx
│   │   ├── CaregiverDashboard.tsx
│   │   ├── SOSPage.tsx
│   │   ├── HealthChatPage.tsx
│   │   └── AlertsPage.tsx
│   ├── integrations/
│   │   └── supabase/
│   └── hooks/
│
├── supabase/
│   ├── functions/
│   │   ├── health-chat/
│   │   └── send-sos-email/
│
├── public/
├── index.html
├── vite.config.ts
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/samraksha.git
cd samraksha
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file and add:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 4️⃣ Run Development Server

```bash
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

##  Running Tests

### Unit Tests

```bash
npm run test
```

### Playwright Tests

```bash
npx playwright test
```

---

##  Supabase Edge Functions

This project includes two edge functions:

* `health-chat` – Handles AI health-related queries
* `send-sos-email` – Sends emergency notifications

To deploy functions:

```bash
supabase functions deploy health-chat
supabase functions deploy send-sos-email
```

---

##  Future Enhancements

*  Mobile Application
*  Advanced Analytics Dashboard
*  Improved AI Health Recommendations
*  GPS-based Real-Time Tracking Enhancements
*  Doctor Integration Portal

---

## 📄 License

MIT License

---

##  Developed By

MOKSHAGNA REDDY ENEGULA   
SAHITHI RAKONDA   
AASHRITHA CHAPARALA

---

