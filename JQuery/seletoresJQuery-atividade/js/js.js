// https://translate.google.com/translate?hl=pt-BR&sl=en&u=https://www.w3schools.com/jquery/jquery_ref_selectors.asp&prev=search&pto=aue

$(document).ready(function () {

  // 1- Tag h2 verde
  $("h2").css("background-color", "green"); 

  //2- pai da classe button vermelho
  $(".buttons").parent().css("background-color", "red") 

  // 3- filhos da classe module azul
  $(".module").children().css("background-color", "blue");

  // 4- item da lista de índice 2 da classe module utilizando a função eq() verde
  $(".module").find("li").eq(2).css("background-color", "green") 
  
  //5- 1° da lista myList amarelo
  $("#myList li").first().css("background-color", "yellow") 

  // 6- ultimo da lista slideshow preto
  $("#slideshow li").last().css("background-color", "#000") 
  
  // 7- se 1° filho de Search é um form, alert correto, se nao alert incorreto
  
  if ($("#search").find(0).is("form")) {
  
    alert("O elemento form é filho de Search!");
} else {
    alert("O elemento form não é filho de Search!");
}
  
  // 8- todas ul, exceto id slideshow, azul
  $("ul").not("#slideshow").css("background-color", "blue") 
  
  // 9- li com p rosa
  $("li").has("p").css("background-color", "pink") 
  
  // 10- alterar conteudo classe myListItem para “Este é um novo item de lista”
  $("#myListItem").html("Este é um novo item de lista") 
  

  // 11- próximo elemento após o elemento de classe selected cinza
  $(".selected").next().css("background-color", "gray") 


  // // 12- elemento anterior ao elemento de classe input_text cinza
  $(".input_text").prev().css("background-color", "gray") 
  


  // // 13- irmãos id listItem_2 verde
  $("#listItem_2").siblings().css("background-color", "green") 
  

  // // 14- Todos src amarelo
  $("[src]").css("background-color", "yellow") 


  // // 15- id header e  id nav =>  classe selected (Utilizando um seletor que contenha esse caminho)
  console.log($("#header #nav .selected") )


  // // 16- select  atributo type=”text”
  console.log($("[type='text']"))

  // // 17- selecionar todos value
  console.log($("[value]") )

  // // 18- type diferente de submit vermelho
  $("input[type != 'submit']").css("background-color", "red") 


  // // 19- href que inicia com blog  verde
  $("[href^='blog']").css("background-color", "green") 

  // // 20- value que termina com a vermelho
  $("[value$='a']").css("background-color", "red")
  
  // // 21- href HTML cinza
  $("[href*='html']").css("background-color", "gray") 


})

  
  

  
 

  
  

 
  
  
  