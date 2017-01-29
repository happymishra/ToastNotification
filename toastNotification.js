var createToastNotification;
(function(){
	createToastNotification = function(toastNotificationElementId, toastMessage, notificationType, timer){
		var element = document.getElementById(toastNotificationElementId);
		element.style.display = 'block';
		
		element.innerHTML = '';
		if (element.hasChildNodes()){
			element.removeChild();
		}
		var toastDiv = createElement('div', toastMessage, {
			'id':'toast-div-id',
			'class' : 'toast-div'
		});

		var bgColor = 'green';
		switch(notificationType){
			case 'error': 
						bgColor = 'red';
						break;
			case 'warning': 
						bgColor = 'yellow';
		}

		toastDiv.style.animationDuration = timer;
		toastDiv.style.backgroundColor  = bgColor;
		element.append(toastDiv);

		setTimeout(function(){
			element.style.display = 'none';
		}, timer)
	}

	function createElement(element,content, attrs){
		var newElement = document.createElement(element);
		if (content){
			var t = document.createTextNode(content);
			newElement.appendChild(t);
		}
		setAttributes(newElement, attrs);
		return newElement
	}

	function setAttributes(element, attrs){
		for(var key in attrs){
			element.setAttribute(key, attrs[key]);
		}
	}
})()