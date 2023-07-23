//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the dropdown list and the button
  const colorSelect = document.getElementById("colorSelect");
  const removeButton = document.querySelector('input[type="button"]');

  // Add a click event listener to the button
  removeButton.addEventListener("click", function () {
    // Get the selected index of the dropdown list
    const selectedIndex = colorSelect.selectedIndex;

    // Check if any option is selected
    if (selectedIndex !== -1) {
      // Remove the selected option from the dropdown list
      colorSelect.remove(selectedIndex);
    }
  });
});