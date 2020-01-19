const list_items= document.querySelectorAll('.listitems');
const lists = document.querySelectorAll('.list1');

let draggedItem = null;

for (let b =0; b <list_items.length; b++){
	const item = list_items[b];

	//Listens for a drag event and turns The draggable item invisible, while it's on the list.
	item.addEventListener('dragstart', function(){
		draggedItem= item;

		setTimeout (function () {
		item.style.display ='none';	
		}, 0.1)
	});

	//Listens for the end of the drag event and converts the draggable 
	//item back to null since it's been dropped on the list.

	item.addEventListener('dragend', function(){
		setTimeout(function() {
			draggedItem.style.display = 'block';

			draggedItem = null;

		}, 0.1);
	})

	for (let i =0; i < lists.length; i++){
		const list = lists[i];

		// Listens for a dragover event by the draggable item. i.e. when the draggable item
		// is moved over a list, Empty or not 
		list.addEventListener('dragover', function(eListener){
			eListener.preventDefault();
		});

		list.addEventListener('dragenter', function(eListener){
			eListener.preventDefault();
			this.style.backgroundColor = 'rgba (0, 0, 0, 0.22)';
		});


		list.addEventListener('dragleave', function(eListener){
			this.style.backgroundColor = 'rgba (0, 0, 0, 0.11)';
			});


		list.addEventListener('drop', function(eListener){
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.11)';
		});

	}
} 
