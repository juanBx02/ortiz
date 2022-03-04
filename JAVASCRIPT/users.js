var url_api = 'https://jsonplaceholder.typicode.com/users';

$(document).ready(function(){
    listarUsuarios();
});

function listarUsuarios(){
    $.ajax({
        url: url_api,
        type: 'GET',
        dataType: 'JSON',
        success:function(response){
            console.log(response)
            var user = response;
            var valor = '';
            for(var controlador = 0 ; controlador < user.length ; controlador++){
                valor += '<tr>'+
                '<th>'+user[controlador].id+'</th>'+
                '<th>'+user[controlador].name+'</th>'+
                '<th>'+user[controlador].username+'</th>'+
                '<th>'+user[controlador].phone+'</th>'+
                '<th>'+user[controlador].email+'</th>'+
                '<th>'+user[controlador].website+'</th>'+
            '</tr>';
            }
            $('#body-table').html(valor);
        }
    });
}