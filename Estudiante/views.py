from django.shortcuts import render, redirect
from .forms import EstudianteForm

def estudiante_view(request):
    if request.method == 'POST':
        form = EstudianteForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success')  # Redirigir a una página de éxito
    else:
        form = EstudianteForm()
    return render(request, 'estudiante_form.html', {'form': form})
