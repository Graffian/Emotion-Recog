from pydantic import BaseModel
from string import punctuation


class Item(BaseModel):
    uri : str
    
class credentials(BaseModel):
    email:str
    password:str

class info(BaseModel):
    email:str
    password:str

special_characters = list(punctuation[i] for i in range(0,len(punctuation)))


    
    