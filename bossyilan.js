let showbossbutton = 1;
let bosses = 0;

$(document).ready(function() {
    $('#sumboss').on('click', function() {
        var x = document.getElementsByClassName("bossbutton");
        if(showbossbutton == 1){
        	for (i = 0; i < x.length; i++) {
        		x[i].style.display = "flex";
        		showbossbutton = 2;
        	}
        }else if(showbossbutton == 2){
        	for (i = 0; i < x.length; i++) {
        		x[i].style.display = "none";
        		showbossbutton = 1;
        	}
        }
    })
})

function reset(){
	for(var i=1 ; i<=3 ; i++){
		document.getElementById("bossmap"+i).style.display = "none";
		document.getElementById("bossmap"+i).src = "";
		document.getElementById("mapmessage"+i).style.color = "white";
		document.getElementById("mapmessage"+i).style.textDecoration = "";
	}
}

function exitmessage(){
	document.getElementById("bossmessages").style.display = "none";
	reset();
}

function map(e){
	var mapimg = document.getElementById("bossmap"+e);
	var currentMap = document.querySelector('.mapimage.show');

	document.getElementById("mapmessage"+e).style.color = "red";
	document.getElementById("mapmessage"+e).style.textDecoration = "underline";
	mapimg.src = "tupian/map"+bosses+"-"+e+".png";
	mapimg.style.display = "flex";
	
	if (currentMap) {
	        currentMap.classList.remove('show');
	        currentMap.classList.add('hide');
	 
	        currentMap.addEventListener('animationend', function () {
	            currentMap.style.display = 'none';
	            currentMap.classList.remove('hide');

	        }, { once: true }); 
	    }
	        mapimg.src = "tupian/map" + bosses + "-" + e + ".png";
	        mapimg.style.display = 'flex';
	        mapimg.classList.add('show');

	    for (var i = 1; i <= 3; i++) {
	        if (i !== e) {
	            document.getElementById("mapmessage" + i).style.color = "white";
	            document.getElementById("mapmessage" + i).style.textDecoration = "";
	        }
	    }
}

function boss(e){
	bosses = e;
	reset();
	resetboss();

	document.getElementById("mapmessage1").textContent = document.getElementById("maptext"+bosses+"-1").innerHTML;
	document.getElementById("mapmessage2").textContent = document.getElementById("maptext"+bosses+"-2").innerHTML;
	document.getElementById("mapmessage3").textContent = document.getElementById("maptext"+bosses+"-3").innerHTML;
	document.getElementById("mapmessage1").style.color = "red";
	document.getElementById("mapmessage1").style.textDecoration = "underline";
	
	document.getElementById("bossmessages").style.display = "flex";
	
	document.getElementById("bossimg").src = "tupian/boss"+bosses+".png";
	document.getElementById("bossimg").style.display = "flex";

	    var bossMap1 = document.getElementById("bossmap1");
	    bossMap1.src = "tupian/map" + e + "-1.png";
	    bossMap1.style.display = 'flex';
	    if (!bossMap1.classList.contains('show')) {
	        bossMap1.classList.add('show');
	    }
	 
	    var otherMapImages = document.querySelectorAll('.mapimage:not(#bossmap1)');
	    otherMapImages.forEach(function (img) {
	        if (img.style.display !== 'none') {
	            img.classList.remove('show');
	            img.classList.add('hide');
	 
	            img.addEventListener('animationend', function () {
	                img.style.display = 'none';
	                img.classList.remove('hide');
	            }, { once: true })
	        }
	    })
		
	const lianjie = document.getElementById("boss0"+bosses).innerHTML;
	document.getElementById("bossmessage").href = lianjie;
}

function resetboss() {
    document.getElementById("bossmessages").style.display = 'none';
    var mapImages = document.querySelectorAll('.mapimage');
    mapImages.forEach(function (img) {
        img.style.display = 'none';
        img.classList.remove('show', 'hide');
    })
 
    var mapMessages = document.querySelectorAll('.maptext');
    mapMessages.forEach(function (msg) {
        msg.style.color = 'white';
        msg.style.textDecoration = '';
    })
}