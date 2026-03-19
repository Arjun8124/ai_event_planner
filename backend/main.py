from fastapi import FastAPI, Depends
from typing import Annotated

from pydantic import BaseModel, Field
from sqlalchemy.orm import Session
from starlette import status
from fastapi.middleware.cors import CORSMiddleware
from database import SessionLocal, engine
from llm_api import get_response
from models import Request
import models

models.Base.metadata.create_all(bind=engine)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


class QueryParams(BaseModel):
    query: str = Field(min_length=1, max_length=500)


class ResponseParam(BaseModel):
    id: int
    query: str
    response: dict

    class config:
        orm_mode = True


@app.get("/", status_code=status.HTTP_200_OK)
async def root():
    return {"message": "Api is running"}


@app.get("/history", response_model=list[ResponseParam], status_code=status.HTTP_200_OK)
async def history(db: db_dependency):
    return db.query(Request).order_by(Request.created_at.desc()).all()


@app.post(
    "/generate", response_model=ResponseParam, status_code=status.HTTP_201_CREATED
)
async def generate(db: db_dependency, payload: QueryParams):
    response = get_response(payload.query)
    new_request = Request(query=payload.query, response=response)
    db.add(new_request)
    db.commit()
    db.refresh(new_request)
    return new_request


@app.delete("/history/{id_param}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_history(db: db_dependency, id_param: int):
    db.query(Request).filter(Request.id == id_param).delete()
    db.commit()
