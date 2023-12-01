from tortoise import models, fields
from tortoise.contrib.mysql.indexes import FullTextIndex


class Article(models.Model):
    id = fields.BigIntField(pk=True)
    author = fields.ForeignKeyField('models.User', related_name='articles', on_delete=fields.SET_NULL, null=True)
    title = fields.CharField(max_length=20)
    describe = fields.CharField(max_length=100, default='')
    content = fields.TextField(null=True, default='')
    created = fields.DatetimeField(auto_now_add=True)
    updated = fields.DatetimeField(auto_now=True)

    class Meta:
        indexes = [
            FullTextIndex(fields=('content',), parser_name='ngram')
        ]
