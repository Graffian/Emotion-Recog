import os
import cv2 as cv
import numpy as np
import asyncio
import tensorflow as tf
import keras
from model.load_model import model

predictions = ["angry" , "disgust" , "fear" , "happy" , "neutral" , "sad" , "surprise"]

def predict():
    img_path = os.listdir("./uploads")[0]
    path = f"uploads/{img_path}"
    coloured_img = cv.imread(path , cv.IMREAD_GRAYSCALE)
    coloured_img = np.array(coloured_img)
    resized_img = cv.resize(coloured_img , dsize=[48,48])
    resized_img = np.array(resized_img , dtype=int)
    resized_img = np.expand_dims(np.expand_dims(resized_img , axis=-1) , axis=0)
    prediction = np.argmax(model.predict(resized_img))
    return predictions[prediction]



    
    
