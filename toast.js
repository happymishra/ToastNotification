var options = {
	timer:4000,
	message: "This is toast notificaton",
	elementId : 'toast-message-div',
	notificatonType: 'error',
	class:'toast-div'
}

function showToast(){
	toast.show(options);
}