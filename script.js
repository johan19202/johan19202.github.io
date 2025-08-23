let academico = [];

function mostrarAcademico() {
  const ul = document.getElementById("lista-academico");
  ul.innerHTML = "";
  academico.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = () => editarAcademico(index);
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => {
      academico.splice(index, 1);
      mostrarAcademico();
    };
    li.append(btnEditar, btnEliminar);
    ul.appendChild(li);
  });
}

document.getElementById("btn-agregar-academico").onclick = () => {
  const valor = document.getElementById("input-academico").value.trim();
  if (valor !== "") {
    academico.push(valor);
    document.getElementById("input-academico").value = "";
    mostrarAcademico();
  }
};

function editarAcademico(index) {
  const nuevo = prompt("Editar estudio:", academico[index]);
  if (nuevo !== null) {
    academico[index] = nuevo;
    mostrarAcademico();
  }
}

// Repetir lógica similar para laboral y habilidades
