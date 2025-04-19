# Emotion-Recog 😄😢😠 – AI Emotion Detection for Therapists

**Emotion-Recog** is an AI-powered web application designed to assist therapists by recognizing patient emotions in real-time through facial expression analysis. It features secure login for patients using credentials provided by their therapist, a custom-trained neural network model, and a clean React + FastAPI architecture. This tool helps therapists gain deeper insight into the emotional state of their patients, especially during virtual sessions.

---

## 💡 Features

- 🎥 Real-time facial emotion detection via webcam
- 🔐 **User authentication**
  - Patients log in using credentials shared by their therapist
- 🧠 **Custom-trained Neural Network**
  - Built with **TensorFlow**
  - Trained on the **FER2013** dataset from Kaggle
  - Detects: **Angry**, **Neutral**, **Happy**, **Sad**, **Surprise**
- 🗃️ **SQLite3** database for MVP
  - Lightweight and easy to deploy
- 🧩 Clean separation of frontend (React) and backend (FastAPI)
- 🤝 Ideal for supporting therapists in both in-person and telehealth sessions

---

## 🧠 Tech Stack

- **Frontend**: React, HTML, CSS, JavaScript  
- **Backend**: FastAPI (Python)  
- **Database**: SQLite3 (to be upgraded later)  
- **ML/AI**: 
  - Neural network built using **TensorFlow**
  - OpenCV for face detection  
- **Dataset**: **FER2013** (Kaggle Facial Expression Recognition Challenge)
- **Deployment**: [optional: Vercel/Render/Heroku/Docker]

---

## 📂 Dataset & Model

The emotion detection model was trained using the **FER2013** dataset available on Kaggle. The neural network was built with **TensorFlow** and trained to classify five key emotional states:

- 😠 Angry  
- 😐 Neutral  
- 😊 Happy  
- 😢 Sad  
- 😲 Surprise  

The trained model is integrated into the FastAPI backend for real-time inference.

---

## 🔐 Authentication Flow

- Therapists provide login credentials to their patients  
- Patients must log in to access the emotion recognition tool  
- Authentication is handled via FastAPI and data is stored in SQLite3

---

# 🛠️ Installation Guide for Emotion-Recog

Follow the steps below to clone and run the Emotion-Recog project locally.

---

## 📥 Clone the Repository

```bash
git clone https://github.com/Graffian/Emotion-Recog.git
cd Emotion-Recog


## 🧩 Setup Frontend


cd frontend
npm install
npm run dev

# ⚙️ Backend Setup – Emotion-Recog

To start the FastAPI backend server, run the following commands:


cd backend
uvicorn app:app --reload


