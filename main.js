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
	    // elms[i].onmouseout = function(){
	    //   this.className='ui-state-default'
	    // }
	}
}

function removeImage(photo){
	console.log("asdfasdfasdf", photo);
	photo.src = "";
}