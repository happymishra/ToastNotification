toast = {};
toast.options = {};

toast.show = function(options){
	toast.options = options;
	toast.createToastNotification(options.elementId, options.message, options.notificatonType, options.timer)
}


toast.createToastNotification = function(toastNotificationElementId, toastMessage, notificationType, timer){
	var element = document.getElementById(toastNotificationElementId);
	element.style.display = 'block';

	element.innerHTML = '';
	if (element.hasChildNodes()){
		element.removeChild();
	}
	var toastDiv = toast.createElement('div', toastMessage, {
		'id':'toast-div-id',
		'class' : toast.options.class
	});
                               
	var bgColor = 'green';
	switch(notificationType){
		case 'error': 
					bgColor = 'red';
					break;
		case 'warning': 
					bgColor = 'yellow';
		default:
					bgColor = 'green';
	}

	toastDiv.style.animationDuration = timer / 1000 + "s";
	toastDiv.style.backgroundColor  = bgColor;
	element.append(toastDiv);

	setTimeout(function(){
		element.style.display = 'none';
	}, timer)
}

toast.createElement = function (element,content, attrs){
	var newElement = document.createElement(element);
	if (content){
		var t = document.createTextNode(content);
		newElement.appendChild(t);
	}
	toast.setAttributes(newElement, attrs);
	return newElement
}

toast.setAttributes = function (element, attrs){
	for(var key in attrs){
		element.setAttribute(key, attrs[key]);
	}
}