from django.db import models

# Create your models here.
class Carrera (models.Model):
    Id_Carrera= models.CharField (max_length=20, unique=True)
    Nombre_Carrera= models.CharField (max_length=75)
    
    def _str_(self):
        return f"{self.Id_Carrera} - {self.Nombre_Carrera} "