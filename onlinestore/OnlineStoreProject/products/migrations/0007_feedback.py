# Generated by Django 4.1.5 on 2023-03-29 08:47

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_alter_product_tags'),
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('author', models.CharField(max_length=50)),
                ('content', models.TextField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False, unique=True)),
            ],
        ),
    ]
