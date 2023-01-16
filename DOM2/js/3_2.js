//遍历指定父节点下的直接子节点
var tabs=[];
function getChildren(parent){
	console.log(tabs.join("")+"|-"+
		(parent.nodeType!=3?parent.nodeName:
		                   parent.nodeValue)
	);
	var childNodes=parent.childNodes;//元素树改为:children
	if(childNodes){
		tabs.push("\t");//开始遍历第一子节点时，加一个\t
		for(var i=0,len=childNodes.length;i<len;i++){
		//callee指当前正在调用的函数本身——递归
			arguments.callee(childNodes[i]);
		}
		tabs.pop();//遍历完最后一个子节点时，去一个\t
	}
}
/*function getChildren(parent){
	var start=parent;
	console.log(
		parent.nodeType!=3?parent.nodeName:
		                   parent.nodeValue
	);
	for(;;){
		if(parent.firstChild){
			parent=parent.firstChild;
			console.log(
				parent.nodeType!=3?parent.nodeName:
									parent.nodeValue
			);
		}else if(parent.nextSibling){
			parent=parent.nextSibling;
			console.log(
				parent.nodeType!=3?parent.nodeName:
									parent.nodeValue
			);
		}else{
			parent=parent.parentNode;
			if(parent==start){
				break;
			}else if(parent.nextSibling){
				parent=parent.nextSibling;
				console.log(
					parent.nodeType!=3?parent.nodeName:
									   parent.nodeValue
				);
			}
		}
	}
}*/
window.onload=function(){
	//getChildren(document.body);
	//Step1: 创建迭代器对象：
	var iterator=document.createNodeIterator(
	//var iterator=document.createTreeWalker(
		document.body,
		NodeFilter.SHOW_ALL,
		null,false
	);
/*  
	console.log(iterator.firstChild());                      //span
    console.log(iterator.nextSibling());//ul
	iterator.lastChild();
	iterator.previousSibling();
	console.log(iterator.firstChild());
*/
	//Step2: 使用循环推动迭代器移动到下一个
	var currNode=null;
	var prevNode=null;
	var tabs=[];
	while((currNode=iterator.nextNode())!=null){
		
		console.log(tabs.join("")+"|-"+
			(currNode.nodeType!=3?currNode.nodeName:
			                    currNode.nodeValue)
		);
		prevNode=currNode;
		//如果当前节点有子节点
		if(currNode.childNodes.length!=0){
			tabs.push("\t");//	压入一个\t
		}else{//否则
		//	下一个节点不是自己的兄弟
			var next=iterator.nextNode();
			if(next==null){
				break;
			}else if(next!=currNode.nextSibling){
				tabs.pop();//  弹出一个\t
			}
			iterator.previousNode();
		}
	}
}