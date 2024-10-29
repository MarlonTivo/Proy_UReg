from django.db import models

# Create your models here.
class Sedes (models.Model):
    Id_Sede= models.CharField (max_length=20, unique=True)
    Nombre_Sede= models.CharField (max_length=75)
    Coordinador= models.CharField (max_length=50)
    Departamento= models.CharField (max_length=75)
    Municipio= models.CharField (max_length=50)
    Direcccion= models.CharField (max_length=75)
    
    def _str_(self):
        return f"{self.Id_Sede} - {self.Nombre_Sede} - {self.Coordinador} - {self.Departamento} - {self.Municipio} - {self.Direcccion}"