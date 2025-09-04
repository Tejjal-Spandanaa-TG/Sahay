Sahay — AI Wellness Companion (Prototype)

## 📖 About

**Sahay** is a confidential, AI-powered wellness companion designed for Indian youth. This prototype demonstrates the **core features** with a simple React frontend and a Python Flask backend. It includes Firestore integration snippets and is ready for deployment on **Google Cloud Run** + **Firebase Hosting**.

---

## ⚙️ Requirements

* Node.js (v16 or higher)
* Python 3.9+
* Google Cloud account with **Firestore** & **Vertex AI** enabled
* Firebase CLI (optional, for hosting frontend)

---

## 🚀 Setup & Run

### 1. Frontend (React)

```bash
cd frontend
npm init -y
npm install react react-dom
# Add your own index.html + index.js if needed
npm start
```

This starts a local React dev server on `http://localhost:3000`.

---

### 2. Backend (Flask API)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # (or venv\Scripts\activate on Windows)
pip install flask google-cloud-firestore
python app.py
```

API runs at `http://127.0.0.1:5000/chat`
Example request:

```bash
curl -X POST http://127.0.0.1:5000/chat \
     -H "Content-Type: application/json" \
     -d '{"message": "I feel stressed"}'
```

---

### 3. Firestore Setup

* Enable **Firestore** in Google Cloud.
* Add service account JSON key to your backend folder.
* Set environment variable:

```bash
export GOOGLE_APPLICATION_CREDENTIALS="path/to/key.json"
```

---

## 🌐 Deployment

### Frontend

Deploy to **Firebase Hosting**, **Vercel**, or **Netlify**.

Example (Firebase):

```bash
firebase init hosting
firebase deploy
```

### Backend

Deploy on **Google Cloud Run**:

```bash
gcloud builds submit --tag gcr.io/[PROJECT-ID]/sahay-backend
gcloud run deploy sahay-backend --image gcr.io/[PROJECT-ID]/sahay-backend --platform managed
```

---

## ✅ Current Features in v0

* Simple **chat window** with hardcoded empathetic responses.
* **Mindfulness exercises** placeholder list (can extend).
* **Resource hub** placeholder list.
* Firestore integration snippet for saving messages.

---

## 🛠️ Next Steps

* Connect backend to **Vertex AI Gemini API** for real empathetic chat.
* Add **Text-to-Speech** for mindfulness modules.
* Build **anonymous community forum** with AI moderation.
* Expand **multi-language support** (English, Hinglish, regional).
