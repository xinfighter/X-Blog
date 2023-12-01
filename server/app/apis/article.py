from fastapi import APIRouter, Depends, HTTPException, Query, status

from app.models import Article
from app.dependencies import token_verify
from app.schemas import ArticleOut, ArticleCreate, ArticleUpdate, ArticleListOut

article_router = APIRouter(prefix='/api/v1/article', tags=['Article'], dependencies=[Depends(token_verify)])


@article_router.get('/', response_model=ArticleListOut)
async def get_articles(page: int = Query(1, ge=1), size: int = Query(100, ge=1)):
    items = await Article.all().offset((page - 1) * size).limit(size).select_related('author')
    return {'total': len(items), 'items': items}


@article_router.get('/{article_id}/', response_model=ArticleOut)
async def get_article(article_id: int):
    try:
        res = await Article.get(pk=article_id)
        await res.fetch_related('author')
        return res
    except:
        raise HTTPException(status_code=404, detail='Article not found')


@article_router.post('/', response_model=ArticleOut)
async def create_article(data: ArticleCreate):
    res =  await Article.create(**data.model_dump(exclude_unset=True))
    await res.fetch_related('author')
    return res


@article_router.put('/{article_id}', response_model=ArticleOut)
async def update_article(article_id: int, data: ArticleUpdate):
    await Article.filter(pk=article_id).update(**data.model_dump(exclude_unset=True))
    res= await Article.get(pk=article_id)
    await res.fetch_related('author')
    return res



@article_router.delete('/{article_id}/', status_code=status.HTTP_204_NO_CONTENT)
async def delete_article(article_id: int):
    delete_count = await Article.filter(pk=article_id).delete()
    if not delete_count:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Article not found')
