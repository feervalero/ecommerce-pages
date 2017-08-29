var xmlDoc;
function loadXMLDoc(dname) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else {
        xhttp = new ActiveXObject("Microsoft.XMLDOM");
    }

    xhttp.open("GET", dname);
    xhttp.send();
    return xhttp.responseXML;
}
function loadJSON(callback) {   

	if (window.XMLHttpRequest) {
        xobj = new XMLHttpRequest();
    }
    else {
        xobj = new ActiveXObject("Microsoft.XMLDOM");
    }
	xobj.open('GET', 'CATALOGXML.xml', true); // Replace 'my_data' with the path to your file
	xobj.onreadystatechange = function () {
	      if (xobj.readyState == 4 && xobj.status == "200") {
	        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
	        callback(xobj.responseText);
	      }
	};
	xobj.send();
	return xobj.responseXML;  
}
function init() {
	loadJSON(function(r){
		var parser = new DOMParser();
		xmlDoc = parser.parseFromString(r,"text/xml");
		var mcs = xmlDoc.getElementsByTagName("menuItem");
		var menuBar = document.getElementById("menuBar");
		menuBar.innerHTML="";
		for (var i = 0; i < mcs.length; i++) {
			if(mcs[i].attributes['parent'].value.toString()=="root"){
				var span = document.createElement("a");
				var li = document.createElement("li");
				
				span.setAttribute("parent",mcs[i].attributes["parent"].value);
				span.setAttribute("id",mcs[i].attributes["id"].value);
				span.setAttribute("collapsed","1");
				span.setAttribute("onClick","openMenu('"+mcs[i].attributes["parent"].value+"','"+mcs[i].attributes["id"].value+"','"+mcs[i].attributes["displayName"].value+"')");
				span.innerHTML=mcs[i].attributes["displayName"].value.toString();
				li.appendChild(span);

				li.setAttribute("parent",mcs[i].attributes["parent"].value);
				li.setAttribute("id",mcs[i].attributes["id"].value);
				li.setAttribute("collapsed","1");
				
				menuBar.appendChild(li);
			}
		}
	});
}
function openMenu(a,b,de){
	/*delete menu category*/
	var del = document.getElementById(b);
	if(del.attributes["collapsed"].value=="1"){
		var parent = document.getElementById(b).parentElement;
		var ul = document.createElement("ul");
		del.appendChild(ul);
		var submenuitems = xmlDoc.getElementsByTagName("menuItem");
		for(var o=0 ;o<submenuitems.length;o++){
			var item = submenuitems[o];
			if(item.attributes["parent"].value==b){
				var span = document.createElement("a");
				var li = document.createElement("li");

					span.setAttribute("parent",item.attributes["parent"].value);
					span.setAttribute("id",item.attributes["id"].value);
					span.setAttribute("collapsed","1");
					span.setAttribute("onClick","openMenu('"+item.attributes["parent"].value+"','"+item.attributes["id"].value+"','"+item.attributes["displayName"].value+"')");
					span.innerHTML=item.attributes["displayName"].value.toString();

					li.appendChild(span);
					li.setAttribute("parent",item.attributes["parent"].value);
					li.setAttribute("id",item.attributes["id"].value);
					li.setAttribute("collapsed","1");
					
					
					ul.appendChild(li);
			}
		}
		del.setAttribute("collapsed","0");
	}
	else{
		var span = document.createElement("a");
		span.setAttribute("parent",a);
		span.setAttribute("id",b);
		span.setAttribute("onClick","openMenu('"+a+"','"+b+"','"+de+"')");
		del.innerHTML="";
		span.innerHTML=de;
		del.appendChild(span);
		del.setAttribute("collapsed","1");
	}

}