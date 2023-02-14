
document.addEventListener("DOMContentLoaded", function() {
    let BotonAleja = document.getElementById("boton-Aleja");
    BotonAleja.addEventListener("click", toggleSections);
  
    let sectionSeleccionarAleja = document.getElementById("Seleccionar-aleja");
    let sectionSiguienteCorazon = document.getElementById("Siguiente-corazon");
    sectionSiguienteCorazon.style.display = "none";
  
    function toggleSections() {
      if (sectionSeleccionarAleja.style.display === "block") {
        sectionSeleccionarAleja.style.display = "none";
        sectionSiguienteCorazon.style.display = "block";
      } else {
        sectionSeleccionarAleja.style.display = "none";
        sectionSiguienteCorazon.style.display = "block";
      }
      alert(" Tengo que cobrar mis 8k picos y 400 besos no te me hagas la loquita ")
    }
  });
  
  