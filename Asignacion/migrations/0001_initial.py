# Generated by Django 5.1.2 on 2024-10-29 04:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Carrera', '0001_initial'),
        ('Estudiante', '0002_estudiante_estado_civil_estudiante_genero'),
        ('Facultad', '0001_initial'),
        ('Sedes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Asignacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Id_Asignacion', models.CharField(max_length=20, unique=True)),
                ('Fecha', models.DateField()),
                ('Carnet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Estudiante.estudiante')),
                ('Id_Carrera', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Carrera.carrera')),
                ('Id_Facultad', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Facultad.facultad')),
                ('Id_Sede', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Sedes.sedes')),
            ],
        ),
    ]
