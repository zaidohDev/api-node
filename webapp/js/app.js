(function($) {
    $(document).ready(function(){
        const uri = 'http://localhost:3000/bills/'
        

        //list
        const listData = function(){
            $.get(uri, function(result){
                $('#list_table tbody').empty()    

                if(!result.length && !result.status){
                    return;
                }
                result.data.forEach(function (bill){
                    let tmpl = `<tr>
                                <td>${bill.title}</td>
                                <td>${bill.price}</td>
                                <td><button id="btn_delete" data-id='${bill._id}' type="button" class="btn btn-danger">delete</button></td>
                                </tr>`  
                    $('#list_table tbody').append(tmpl)
                })
                
            })
        }
        // create
        const createData = function(){
           let title = $('input[name="title"]').val()
           let price = $('input[name="price"]').val()
            
           if(!title || !price){
                alert("invalido", danger)   
            return
           }
           const context = {title: title, price: price}
           $.post(uri, context , function(result){
                
            // clear form
                $('input[name="title"]').val('')  
                $('input[name="price"]').val('')
            // list
            listData()
           })
        }

        const removeData = function(){
            let id = $(this).data('id')

            $.ajax({
                url:uri + id,
                type:'DELETE',
                success: function(result){
                    listData()
                }
            })
        }

        listData()
        $('#btn_create').on('click', createData)
        $('#list_table tbody').on('click', '#btn_delete', removeData)
    })
})(jQuery)