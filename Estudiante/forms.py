from django import forms
from .models import Estudiante

class EstudianteForm(forms.ModelForm):
    class Meta:
        model = Estudiante
        fields = [
            'Carnet',
            'Nombres',
            'Apellidos',
            'CUI',
            'Telefono',
            'Correo',
            'Genero',
            'Estado_Civil',
            'Fecha_Nacimiento',
        ]
        widgets = {
            'Fecha_Nacimiento': forms.DateInput(attrs={'type': 'date'}),
        }
