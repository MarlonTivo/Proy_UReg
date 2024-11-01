from django.db import models
class Catedraticos (models.Model):
    Carnet = models.CharField(max_length=20, unique=True)
    Nombres = models.CharField(max_length=50)
    Apellidos= models.CharField(max_length=50)
    CUI= models.CharField(max_length=13, unique=True)
    Telefono = models.CharField(max_length=15)
    Correo = models.EmailField(unique=True)
    Genero = models.CharField(max_length=10, choices= [('M','Masculino'),('F','Femenino')],default='M')
    Fecha_Nacimiento = models.DateField()
    Profesion = models.CharField(max_length=50)
    No_Colegiado = models.CharField(max_length=10, unique=True)
    
    def __str__(self):
        return f"{self.Carnet} - {self.Nombres} - {self.Apellidos} - {self.CUI} - {self.Telefono} - {self.Email} - {self.Genero} - {self.Fecha_Nacimiento} - {self.Profesion} - {self.No_Colegiado}" 




# Create your models here.
