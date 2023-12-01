from datetime import datetime
from pydantic import BaseModel, computed_field, Field

from app.utils import datetime_format


class Author(BaseModel):
    username: str


class ArticleOut(BaseModel):
    id: int
    title: str
    author: Author = Field(exclude=True)
    describe: str
    content: str
    created: datetime
    updated: datetime

    @computed_field
    @property
    def author_name(self) -> str:
        return self.author.username

    class Config:
        json_encoders = {
            datetime: datetime_format
        }


class ArticleListOut(BaseModel):
    total: int = 0
    items: list[ArticleOut] = []

    @computed_field
    @property
    def count(self) -> int:
        return len(self.items)


class ArticleCreate(BaseModel):
    title: str
    describe: str
    content: str
    author_id: int


class ArticleUpdate(BaseModel):
    title: str | None = None
    describe: str | None = None
    content: str | None = None
