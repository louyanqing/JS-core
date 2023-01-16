function toggle(obj){
	var ul=obj.parentNode.parentNode;
	lis = ul.children;
	var allSpan=[];
	for (var i=0;i<lis.length; i++)
	{
		if (lis[i].firstElementChild!=obj)
		{
			allSpan.push(lis[i].firstElementChild);
		}
	}

	console.log(allSpan);
	for (var i = 0;i < allSpan.length ;i++ )
	{
		if (allSpan[i].className == "open")
		{
			allSpan[i].nextElementSibling.className="hide";
			allSpan[i].className="closed";
		}
	}
	
	var uls=obj.nextElementSibling;
 
	if(obj.className=="open"){
		uls.className="hide";
		obj.className="closed";
	}else{
		uls.className="show";
		obj.className="open";
	}
}