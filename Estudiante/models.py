from django.db import models
# Create your models here.
class Estudiante (models.Model):
    Carnet= models.CharField (max_length=20, unique=True)
    Nombres= models.CharField (max_length=50)
    Apellidos= models.CharField (max_length=50)
    CUI= models.CharField (max_length=13, unique=True)
    Telefono= models.CharField (max_length=15)
    Correo= models.EmailField (unique=True)
    Genero= models.CharField (max_length=10, choices= [('M', 'Masculino'),('F', 'Femenino')],default='M')
    Estado_Civil= models.CharField (max_length=10,choices=[('S', 'Soltero'),('C', 'Casado'),('D', 'Divorciado'),('V', 'Viudo')],default='S')
    Fecha_Nacimiento= models.DateField()
    
    def _str_(self):
        return f"{self.Carnet} - {self.Nombres} {self.Apellidos}"
    
    
        
