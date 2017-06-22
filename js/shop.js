;(function($){
$.ajax({
	type:"get",
	dataType:"json",
	url:"../data/shop.json",
	async:true,
	success:function(e){
		var str=''
		for(var i in e.date){
			str+='<p><span>'+e.date[i].time+'</span><span>'+e.date[i].price+'</span><span><a href="#" class="ok">'+e.date[i].schedule+'</a></span></p>'
		}
		$('#destine').html(str);
	}
});	
	
	
	
	
})(jQuery)
