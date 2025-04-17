from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from utils import Item
from utils import credentials , info
from utils import special_characters
import base64
import time
import os
from password_strength import PasswordPolicy
import sqlite3

connection = sqlite3.connect("users.db")
cursor = connection.cursor()

app = FastAPI()




policy = PasswordPolicy.from_names(
    length = 8,
    special = 1,
    numbers = 1,
    uppercase = 1,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins="http://localhost:5173",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/")
async def get_image(item:Item):
    base_64 = item.uri
    print(base_64)
    base_64 = base_64.split("base64,")[1]
    base_64 = base64.b64decode(base_64)
    with open(f"uploads/image-{time.time()}.webp" , "wb") as f:
        f.write(base_64)
        
@app.post("/api/signup")
async def signup(cred:credentials):
    if len(policy.test(cred.password)) == 0  :
        print(cred)
        cursor.execute("INSERT INTO users (email , password) VALUES (?,?)",(cred.email , cred.password))
        print(cursor.fetchall())
        connection.commit()
        return {"message" : "Successful"}
    else:
        return {"message" : "Password must contain uppercase letter , special character or number"}
    
    
@app.post("/api/login")
async def login(cred:info):
    print(cred)
    rows = cursor.execute("SELECT email,password FROM users WHERE email = ? AND password = ? ",(cred.email , cred.password))
    if len(rows.fetchall()) > 0 :
        return {"msg" : "Success"}
    else :
        return {"msg" : "Acc does not exist sign in to continue"}
