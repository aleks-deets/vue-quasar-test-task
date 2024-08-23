import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
import random

app = FastAPI()

@app.get("/test")
def get_items():
  items = [
    {
      "id": 1,
      "name": "First"
    },
    {
      "id": 2,
      "name": "Second"
    },
    {
      "id": 3,
      "name": "Third"
    },
  ]
  #random.shuffle(items)
  return items
  #return {"data": "Hello, world"}

@app.get("/items")
def get_items():
  # Создаем двумерный массив случайных чисел
  rows = 5
  cols = 5
  items = [[random.randint(1, 100) for _ in range(cols)] for _ in range(rows)]
  return items

app.add_middleware(
  CORSMiddleware,
  allow_origins=[
    #"http://localhost:9000/",
    #"http://localhost:9000/#/",
    "http://localhost:5173"
  ],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

if __name__ == "__main__":
  uvicorn.run(app, host="0.0.0.0", port=8000)
