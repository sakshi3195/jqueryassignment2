var editid;

$(function() {



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<SEARCH FUNC STARTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	$('#search').on('click',function(){
		//if()
		
		var pathInput = $('#id').val();
        var path = 'http://localhost:3000/profile/'+ pathInput; 
         
       console.log("sas") ; 
		$.ajax ({

			type: 'GET',
			url: path,
			success: function(item,index){
				console.log("ss");
				$('#profile1').append('<tr>'+'<td><input type="text" name="person1" id="name1" value="'+item.id+'"' + '</td>'+
					                           '<td><input type="text" name="person2" id="name2" value="'+item.Name+'"'+ '</td>'+
                                    '<td><input type="text" name="person3" id="name3" value="'+item.age+'"'+'"'+'</td>'+                                              
                                     '<td><input type="text" name="person4" id="name4" value="'+item.companyname+'"'+'"'+'</td>'+
                                        '<td><button type="delete" data-id="'+item.id+'"  class="remove">Delete</button>'+'</td>'+
                                                '<td><button type="edit" data-id="'+item.id+'" class="edit">Edit</button>'+'</td>'+
                                                '<td><button type="save" data-id="'+item.id+'" class="save"  >Save</button>'+'</td>'+
                                    '</tr>');  

									 	
									
				}

			});

     // $('#search').attr('disabled',true);	
	});
 //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<SEARCH ENDS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ADDITION OF RECORDS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//console.log("hahhaha");
$('#addition').on('click',function(){	
console.log("adding");
var addrecord={
	 Name:$('#name').val(),
	age:$('#age').val(),
	companyname:$('#company').val()
};
console.log("saaa");

$.ajax ({
			type: 'POST',
			url: 'http://localhost:3000/profile',
			
			data : addrecord,
			success: function(addrecord){
				
				$('#profile1').append('<tr>'+'<td><input type="text" name="person1" id="name1" value="'+addrecord.id+'"' + '</td>'+
					                           '<td><input type="text" name="person2" id="name2" value="'+addrecord.Name+'"'+ '</td>'+
                                    '<td><input type="text" name="person3" id="name3" value="'+addrecord.age+'"'+'"'+'</td>'+                                              
                                     '<td><input type="text" name="person4" id="name4" value="'+addrecord.companyname+'"'+'"'+'</td>'+
                                        '<td><button type="delete" data-id="'+addrecord.id+'"  class="remove">Delete</button>'+'</td>'+
                                                '<td><button type="edit" data-id="'+addrecord.id+'" class="edit">Edit</button>'+'</td>'+
                                                '<td><button type="save" data-id="'+addrecord.id+'" class="save" >Save</button>'+'</td>'+
                                    '</tr>'); 

                                    $('#name').val(" "); 
                                    $('#age') .val(" ") ;
                                     $('#company') .val(" ") ;                                            			
											
				}
			});
 //$('#addition').attr('disabled',true);	

}); 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ADD RECORDS ENDS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<DELETE RECORD STARTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$('#profile1').delegate('.remove','click',function() {
	console.log("ads");
	
	var del_id=$(this).attr('data-id');
	var del=$(this).closest('tr');

$.ajax({
        type:'DELETE',
        url:'http://localhost:3000/profile/'+ del_id,
         
        success:function(obj){        
            del.remove();        

}
});

});
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<DELETE ENDS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<EDIT STARTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
$('#profile1').delegate('.edit','click',function(){
	//$(#profile).show();
	
	

	 id1=$(this).attr('data-id');
	 var  tr=$(this).closest('tr');
	 tr.find('.edit').hide();
	 tr.find('.save').show();
	//$('.save').show();


});
//console.log("xsxsxx");
$('#profile1').delegate('.save','click',function(){
//console.log("haha");
	editid=$(this).attr('data-id');
         var  tr=$(this).closest('tr');
                  
           console.log(tr.find('.name2').val());

        var item = {
           "Name":(tr.find('.name2').val()),
	         "age":(tr.find('.name3').val()),
	         "companyname":(tr.find('.name4').val())
	       } ;
console.log(item);
      
       $.ajax({

        type:'PUT',
        url:'http://localhost:3000/profile/'+id1,
         data : item ,

        success:function(item){
        	
             console.log(item);
            $('#profile1').append('<tr class='+item.id+'>'+'<td class="fid"><input type="text" name="person1" class="name1" value="'+item.id+'"' + '</td>'+
					                           '<td class="fname"><input type="text" name="person2" class="name2" value="'+item.Name+'"'+ '</td>'+
                                    '<td class="fage"><input type="text" name="person3" id="name3" value="'+item.age+'"'+'"'+'</td>'+                                              
                                     '<td class="fcompanyname"><input type="text" name="person4" id="name4" value="'+item.companyname+'"'+'"'+'</td>'+
                                        '<td><button type="delete" data-id="'+item.id+'"  class="remove">Delete</button>'+'</td>'+
                                                '<td><button data-id="'+item.id+'" class="edit">Edit</button>'+'</td>'+
                                                '<td><button data-id="'+item.id+'" class="save" >Save</button>'+'</td>'+
                                    '</tr>' );                                             			
									//	});            //tr.remove();
$('.save').show();
}
});
	});
 //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<EDIT ENDS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SEARCH ALL STARTS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	//$('.save').hide();

$('#searchall').on('click',function(){
	
	console.log("sakshi");
	var path1='http://localhost:3000/profile?_start=0&_end=40'
$.ajax ({
			type: 'GET',
			url: path1,
			success: function(path1){
		    $.each(path1,function(i,item){
				
				$('#profile1').append('<tr class='+item.id+'>'+'<td class="fid"><input type="text" name="person1" class="name1" value="'+item.id+'"' + '</td>'+
					                           '<td class="fname"><input type="text" name="person2" class="name2" value="'+item.Name+'"'+ '</td>'+
                                    '<td class="fage"><input type="text" name="person3" class="name3" value="'+item.age+'"'+'"'+'</td>'+                                              
                                     '<td class="fcompanyname"><input type="text" name="person4" class="name4" value="'+item.companyname+'"'+'"'+'</td>'+
                                        '<td><button type="delete" data-id="'+item.id+'"  class="remove">Delete</button>'+'</td>'+
                                                '<td><button data-id="'+item.id+'" class="edit">Edit</button>'+'</td>'+
                                                '<td><button data-id="'+item.id+'" class="save" >Save</button>'+'</td>'+
                                    '</tr>' ); 
                                    $('.save').hide();                                            			
									//	});
				});
					//$('#search').prop('disabled',true);					
				}
			});
//$('#searchall').attr('disabled',true);
      console.log("team");
      	
});

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<SEARCHALL ENDS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<scroll window>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//console.log("dx");
var up=0;
    var down =40;
    $(window).scroll(function()
    {
    	console.log("sajss");
        if($(window).scrollTop() == $(document).height() - $(window).height())
        {
            $('div#loadmoreajaxloader').show();
            $.ajax({

               url: 'http://localhost:3000/profile?_start='+(up+40)+'&_end='+(down+40),
     
     success: function(html)
     {
         up = up+40;
         down = down+40;

       if(html)
         {
             $("#postswrapper").append(html);
             $(html).each(function(index,item)

           {

              $("#profile1").append('<tr>'+'<td><input type="text" name="person1" id="name1" value="'+item.id+'"' + '</td>'+
					                           '<td><input type="text" name="person2" id="name2" value="'+item.Name+'"'+ '</td>'+
                                    '<td><input type="text" name="person3" id="name3" value="'+item.age+'"'+'"'+'</td>'+                                              
                                     '<td><input type="text" name="person4" id="name4" value="'+item.companyname+'"'+'"'+'</td>'+
                                        '<td><button type="delete" data-id="'+item.id+'"  class="remove">Delete</button>'+'</td>'+
                                                '<td><button type="edit" data-id="'+item.id+'" class="edit">Edit</button>'+'</td>'+
                                                '<td><button type="save" data-id="'+item.id+'" class="save" >Save</button>'+'</td>'+
                                    '</tr>');

           });


           $('div#loadmoreajaxloader').hide();
         }else
         {
             $('div#loadmoreajaxloader').html('<center>records ends here</center>');
         }
     }
 });
        }
    });


});