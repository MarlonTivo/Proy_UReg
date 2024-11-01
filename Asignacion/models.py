from django.db import models

# Create your models here.
from Estudiante.models import Estudiante
from Sedes.models import Sedes
from Facultad.models import Facultad
from Carrera.models import Carrera

class Asignacion (models.Model):
    Id_Asignacion= models.CharField (max_length=20, unique=True)
    Carnet = models.ForeignKey(Estudiante, on_delete=models.CASCADE)
    Id_Sede= models.ForeignKey(Sedes, on_delete=models.CASCADE)
    Id_Facultad= models.ForeignKey (Facultad, on_delete=models.CASCADE)
    Id_Carrera= models.ForeignKey (Carrera, on_delete= models.CASCADE)
    Fecha= models.DateField()
    
    
    def _str_(self):
        return f"{self.Id_Asignacion} - {self.Carnet} - {self.Id_Sede} - {self.Id_Facultad} - {self.Id_Carrera} - {self.Fecha}"