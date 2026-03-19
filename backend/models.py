from sqlalchemy import Column, Integer, String, JSON, TIMESTAMP
from sqlalchemy.dialects.postgresql import JSONB
from database import Base
from sqlalchemy.sql import func


class Request(Base):
    __tablename__ = "request"

    id = Column(Integer, primary_key=True, index=True)
    query = Column(String, nullable=False)
    response = Column(JSONB, nullable=False)
    created_at = Column(
        TIMESTAMP(timezone=True), server_default=func.now(), nullable=False
    )
