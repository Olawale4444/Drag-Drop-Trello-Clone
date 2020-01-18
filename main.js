const list_items= document.querySelectorAll('.listitems');
const list = document.querySelectorAll('.list');

var draggedItem = null;

for (let b =0; b <list_items.length; b++){
	const item = list_items[b];

	item.addEventListener('dragstart', function(){
		console.log('Dragstart Alert');
		draggedItem= item;

		setTimeout (function () {
		item.style.display ='none';	
		}, 0)
		
	});

	item.addEventListener('dragend', function(){

		console.log('Dragend Alert');
		draggedItem = null;
	})

	for (let i =0; i<list.length; i++){
		const list = list[i];
	}
} 