# Generated by Django 5.1.2 on 2024-10-22 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Facultad',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Id_Facultad', models.CharField(max_length=20, unique=True)),
                ('Nombre_Facultad', models.CharField(max_length=75)),
            ],
        ),
    ]
