from django.db import models

# Create your models here.
from Facultad.models import Facultad
from Carrera.models import Carrera
from Cursos.models import Cursos

class Pensum(models.Model):
    Id_Facultad = models.ForeignKey(Facultad, on_delete=models.CASCADE)
    Id_Carrera = models.ForeignKey(Carrera, on_delete=models.CASCADE)
    Id_Cursos = models.ForeignKey(Cursos, on_delete=models.CASCADE)
    Semestre= models.CharField (max_length=50)
    

    def __str__(self):
        return f"{self.Id_Facultad} - {self.Id_Carrera}- {self.Id_Cursos}- {self.Semestre}"