# Generated by Django 5.1.2 on 2024-10-29 04:15

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Asignacion', '0001_initial'),
        ('Cursos', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Detalle_Asignacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Semestre', models.CharField(max_length=50)),
                ('Id_Asignacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Asignacion.asignacion')),
                ('Id_Curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Cursos.cursos')),
            ],
        ),
    ]
