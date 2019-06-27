function copyTxt(copyText){
	var aux = document.createElement('input');
    	aux.setAttribute('value', copyText);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand('copy');

        document.body.removeChild(aux);
        console.info(copyText+'\n Copiado al portapapeles...');
}

var comits=new Array();

clear; for(item of document.getElementsByClassName('commit-author-link js-user-link') )
{ 
	if(item.text !== undefined && item.text==='Julio Vinachi')
	{ 
		var txt = item.parentElement.parentElement.firstElementChild.text;
		var fecha = item.parentElement.lastElementChild.getAttribute('data-original-title');


		if(comits.length==0){
			comits.push({
					"txt":txt,
					"fecha":fecha
					});
		}

		var existe=false;
		for(var ctr=0; ctr < comits.length; ctr++)
		{ 
			if( txt === comits[ctr].txt ) 
			{
				existe=true;
			}
		}
		if(!existe){
			comits.push({
				"txt":txt,
				"fecha":fecha
				});
		}
	} 
}



var txt='';
for(var ctr=0; ctr < comits.length; ctr++)
{ 
	if( ctr==0 ) 
	{
		txt+='\r\n\r\n'+comits[ctr].fecha+'\r\n';
	}else if( comits[ctr-1].fecha!=null &&  comits[ctr].fecha!=null && comits[ctr].fecha.split(',')[0]!=comits[ctr-1].fecha.split(',')[0] ){
		txt+='\r\n\r\n'+comits[ctr].fecha+'\r\n';
	}
		txt+=comits[ctr].txt+'\r\n';
}
console.log(txt);
copyTxt(txt);