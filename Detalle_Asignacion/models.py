from django.db import models

# Create your models here.
from Asignacion.models import Asignacion
from Cursos.models import Cursos

class Detalle_Asignacion (models.Model):
    Id_Asignacion= models.ForeignKey (Asignacion, on_delete=models.CASCADE)
    Id_Curso= models.ForeignKey(Cursos, on_delete=models.CASCADE)
    Semestre= models.CharField (max_length=50)
      
    
    def _str_(self):
        return f"{self.Id_Asignacion} - {self.Id_Curso} - {self.Semestre}"