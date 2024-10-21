# Generated by Django 5.1.2 on 2024-10-21 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Estudiante', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='estudiante',
            name='Estado_Civil',
            field=models.CharField(choices=[('S', 'Soltero'), ('C', 'Casado'), ('D', 'Divorciado'), ('V', 'Viudo')], default='S', max_length=10),
        ),
        migrations.AddField(
            model_name='estudiante',
            name='Genero',
            field=models.CharField(choices=[('M', 'Masculino'), ('F', 'Femenino')], default='M', max_length=10),
        ),
    ]
