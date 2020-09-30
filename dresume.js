function getJson(file,callback){
	var xhr_req = new XMLHttpRequest();
	xhr_req.overrideMimeType("application/json");
 	xhr_req.open("GET",file,true);
 	xhr_req.onreadystatechange = function(){
 		if(xhr_req.readyState===4 && xhr_req.status===200)
 		{
 			callback(xhr_req.responseText);

 		}
 	}
xhr_req.send();
}

//passing date to function
getJson("resumedata.json",function(text){
	var d = JSON.parse(text);
	console.log(d);
	t_details(d.details);
})

var main = document.querySelector(".parent-div");
var child = document.createElement("div");
child.classList.add("child");
var h1 = document.createElement("h1");
h1.textContent = "Shaik Shaheen";
child.appendChild(h1);
main.appendChild(child);


function t_details(SDC){
	var n = document.createElement("h1");
	n.textContent=SDC.name;
	n.setAttribute("id","name");
	child.appendChild(n);
    var ul= document.createElement("ul");
    for (var i = 0; i < SDC.content.length; i++) {
    	var li = document.createElement("li");
    	li.textContent = SDC.content[i];
    	ul.appendChild(li);
    }

    child.appendChild(ul);

    var n = document.createElement("h1");
	n.textContent=SDC.name1;
	n.setAttribute("id","name1");
	child.appendChild(n);
    var ul= document.createElement("ul");
    for (var i = 0; i < SDC.strengths.length; i++) {
    	var li = document.createElement("li");
    	li.textContent = SDC.strengths[i];
    	ul.appendChild(li);
    }

    child.appendChild(ul);
    var n = document.createElement("h1");
	n.textContent=SDC.name2;
	n.setAttribute("id","name2");
	child.appendChild(n);
    var ul= document.createElement("ul");
    for (var i = 0; i < SDC.languages.length; i++) {
    	var li = document.createElement("li");
    	li.textContent = SDC.languages[i];
    	ul.appendChild(li);
    }

    child.appendChild(ul);

    var n = document.createElement("h1");
	n.textContent=SDC.name3;
	n.setAttribute("id","name3");
	child.appendChild(n);
    var ul= document.createElement("ul");
    for (var i = 0; i < SDC.hobbies.length; i++) {
    	var li = document.createElement("li");
    	li.textContent = SDC.hobbies[i];
    	ul.appendChild(li);
    }

    child.appendChild(ul);


    var n = document.createElement("h1");
	n.textContent=SDC.name4;
	n.setAttribute("id","name4");
	child.appendChild(n);
    var p = document.createElement("p");
    p.textContent=SDC.paragraph;
    p.setAttribute("id","paragraph");
   	child.appendChild(p);

}