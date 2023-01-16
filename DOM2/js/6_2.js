function calc(btn){//btn指当前被点中的按钮对象
	//调整数量
	var td=btn.parentNode;
	console.log(td);
	var span=td.getElementsByTagName("span")[0];
	console.log(span);
	var n=parseInt(span.innerHTML);
	n+=btn.innerHTML=='+'?1:
		             n==1?0:
		                 -1;
	span.innerHTML=n;

	//计算小计
	var tr=td.parentNode;
	var tds=tr.getElementsByTagName("td");
	console.log(tds);
	//console.log(tds.lenght);//unsefined
	var price=parseFloat(tds[1].innerHTML.slice(1));
	var subTotal=price*n;
	tds[3].innerHTML="&yen;"+subTotal.toFixed(2);

	//计算总价:
//id为data的元素下的tbody下的作为父节点下第4个子元素的td
	var subTds=document.querySelectorAll(
		"#data tbody td:first-child+td+td+td"
	);
	for(var i=0,sum=0;i<subTds.length;i++){
		sum+=parseFloat(subTds[i].innerHTML.slice(1))
	}
//id为data的元素下的tfoot下的作为父节点下第2个子元素的td
	document.querySelector(
		"#data tfoot td:first-child+td"
	).innerHTML="&yen;"+sum.toFixed(2);
}