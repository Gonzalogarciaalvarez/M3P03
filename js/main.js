//Pediremos la nota del usuario

const nota = prompt ("Que nota has sacado? Incluye los decimales de la nota");

  //Hacemos una consecucion de if/else para ir acotando los valores de la nota en distintas categorias

if (nota >= 10){
    const nota = prompt ("La nota que has introducido no es valida, vuelve a intentarlo")
    i=i-1
} else if (nota >= 9){
    alert ('Tu nota es un sobresaliente')
} else if (nota >= 7){
    alert ('Tu nota es notable')
} else if (nota >= 6){
    alert ('Tu nota es un bien')
} else if (nota >= 5){
    alert ('Tu nota es suficiente')
} else if (nota >= 3){
    alert ('Tu nota es insuficiente')
} else if (nota >= 0){
    alert ('Tu nota es muy deficiente')
}
