import joblib
import os

model_path = os.path.join(os.path.dirname(__file__), "emotion_model.joblib")

model = joblib.load(model_path)

