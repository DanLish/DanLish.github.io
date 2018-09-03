var task;

$('#addnew').click(function(){ 
	task = prompt('Что нужно сделать?');
	$(this).after('<br/><br/> <input type="checkbox" id="colorbox"><label for="colorbox"><div class="task">' + task + '</div></label>'); 
});

$('.createnew').click(function(){ 
	location.reload(); 
});

$('.delete').click(function(){ 
	$('input:checked + label > div').remove();
});