from django.db import models

# Create your models here.

class Facultad (models.Model):
    Id_Facultad= models.CharField (max_length=20, unique=True)
    Nombre_Facultad= models.CharField (max_length=75)
    
    def _str_(self):
        return f"{self.Id_Facultad} - {self.Nombre_Facultad} " 