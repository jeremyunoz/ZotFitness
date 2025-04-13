from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import boto3
import keyconfig as keys

app = FastAPI()

dynamodb = boto3.resource(
    "dynamodb",
    aws_access_key_id=keys.ACCESS_KEY_ID,
    aws_secret_access_key=keys.ACCESS_SECRET_KEY,
    region_name="us-west-1",
)

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return "Hello, Hom Page!"


@app.get("/getAllUserInfo")
def get_all_user_info():
    table = dynamodb.Table("ZotFitness-v2.1")
    resp = table.scan()
    items = resp["Items"]
    print(items)
    return {"items": items}
