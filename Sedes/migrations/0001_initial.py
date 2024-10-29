# Generated by Django 5.1.2 on 2024-10-29 02:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sedes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Id_Sede', models.CharField(max_length=20, unique=True)),
                ('Nombre_Sede', models.CharField(max_length=75)),
                ('Coordinador', models.CharField(max_length=50)),
                ('Departamento', models.CharField(max_length=75)),
                ('Municipio', models.CharField(max_length=50)),
                ('Direcccion', models.CharField(max_length=75)),
            ],
        ),
    ]
