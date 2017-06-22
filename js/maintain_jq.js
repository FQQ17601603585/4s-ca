;(function($){ 
	     var  time = setTimeout(function(){
	     	     $("input[type='checkbox']").click(function(){
	     	         var  len = $("input:checkbox:checked").length;
	     	         $("#geshu").show();
	     	         $("#geshu").html(len);
	     	         

                 zongjia1();
                 
                 
	            })    
	             var zongjia1 = function(){
						var sum = 0;
						var  zong = 0;
						var  cha = 0;
						$('.chx_1').each(function(){
							if($(this).is(":checked")){
								sum += parseInt($(this).parent().find(".newPrice").html());
								zong += parseInt($(this).parent().find(".oldPrice").html());
								cha += parseInt(zong-sum);
							}
							
						})
						$('#zongjia').html(sum);
						$("#old").html(zong);
						$("#cha").html("省￥"+cha);
					}
	             
	             
	             
	            
	           $("#tab a").click(function(){
		  	  
			  	   $(this).addClass("maOn").parent().siblings().find("a").removeClass("maOn");
	//		  	  alert("dawdqw");
	              $('#zongjia').html("0");
						$("#old").html("0");
						$("#cha").html("省￥0");
		  	     $("#geshu").html("0");
		     })
	            
	            
	              $("#next").mousedown(function(event){
		            event.stopPropagation();
		  });
	            
	     },300)
	    
	  
		  
		  
		        
})(jQuery)
