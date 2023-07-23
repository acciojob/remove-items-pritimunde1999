//your JS code here. If required.

const removeButton = document.querySelector('input[type="button"]');

const selectColor = document.getElementById("colorSelect");


removeButton.addEventListener("click",()=>{
	const idx = selectColor.seletedIndex;

	if(idx !== -1)
	{
		selectColor.remove(idx);
	}
});