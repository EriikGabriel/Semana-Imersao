$(document).ready(function() {

    $('#table-tipo_usuario').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        // Nesta próximas duas linhas será limpo os campos das classes selecionadas para posteiormente elas serem preenchidas de acordo com a necessidade
        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('<h4 class="text-danger">Vosualizar Tipo de Usuário</h4>')

        let idtipo_usuario = `idtipo_usuario=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            async: true,
            data: idtipo_usuario,
            url: 'src/tipo_usuario/modelo/view-tipo_usuario.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/tipo_usuario/visao/form-tipo-usuario.html', function() {
                        $('#nome').val(dado.dados.nome)
                        $('#nome').attr('readonly', 'true')

                        $('#tipo').empty()

                        var tipo

                        if (dado.dados.tipo == "A") {
                            tipo = "Administrador"
                        } else {
                            tipo = "Leitor"
                        }

                        $('#tipo').append(`<option value="">${tipo}</option>`)
                        $('#tipo').attr('readonly', 'true')
                    })

                    $('#modal-tipo-usuario').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'SysBlog', // Título da janela SweetAler
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // Tipo de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})