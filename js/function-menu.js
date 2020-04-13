$(document).ready(function(){
    $("#tipo-usuario").click(function() {
        $("#conteudo").empty()
        $("#conteudo").load("src/tipo_usuarios/visao/list-tipo-usuario.html")
    })
})