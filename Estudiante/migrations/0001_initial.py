# Generated by Django 5.1.2 on 2024-10-21 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Estudiante',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Carnet', models.CharField(max_length=20, unique=True)),
                ('Nombres', models.CharField(max_length=50)),
                ('Apellidos', models.CharField(max_length=50)),
                ('CUI', models.CharField(max_length=13, unique=True)),
                ('Telefono', models.CharField(max_length=15)),
                ('Correo', models.EmailField(max_length=254, unique=True)),
                ('Fecha_Nacimiento', models.DateField()),
            ],
        ),
    ]
