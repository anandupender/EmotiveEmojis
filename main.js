function changeEmoji(newEmoji){
	console.log(newEmoji);
	var style = "";
	if(newEmoji === 'happy'){
		style = "url('images/happy.png'), auto";
	}
	else if (newEmoji === 'meh'){
		style = "url('images/meh.png'), auto";
	} else if (newEmoji === 'mad'){
		style = "url('images/madCursor.png'), auto";
	}

	document.getElementById("photos").style.cursor = style;
	document.getElementsByTagName('input');
	console.log("made it");

	var elms = document.getElementsByTagName("input");

	for (var i = 0; i < elms.length; i++){
	    elms[i].onmouseover = function(){
	     	this.style.cursor = style;
	    	console.log("hereerer", style);
	    }
	}
}

var magicNum = 11; //(total images + 1)

function removeImage(photo){
	console.log("asdfasdfasdf", photo);
	photo.remove();
	console.log(document.getElementById("photos").childNodes.length);
	if(document.getElementById("photos").childNodes.length === magicNum){
		//document.getElementById('body').style.backgroundImage = "url('images/CoLabLogo.jpg')";
		// var container = document.createElement("div");
		// div.innerHTML = "Thanks for Playing";
		// div.style.height = "100px";
		// document.getElementById("photos").appendChild(div);
		var div = document.createElement("div");
		div.innerHTML = "Thanks for Playing";
		div.style.height = "200px";
		div.style.textAlign = "center";
		div.style.margin = "50px";
		document.getElementById("photos").appendChild(div);
	}
}