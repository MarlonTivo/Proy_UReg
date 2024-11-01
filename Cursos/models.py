from django.db import models

# Create your models here.
class Cursos (models.Model):
    Id_Curso= models.CharField (max_length=20, unique=True)
    Nombre_Curso= models.CharField (max_length=50)
    
    def _str_(self):
        return f"{self.Id_Curso} - {self.Nombre_Curso} " 
    