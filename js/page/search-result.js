document.addEventListener('click', function (event) {
  var isClickInside =
    searchResult.contains(event.target) || searchInput.contains(event.target);

  // Check if the click is not happening inside the search input or search result div
  if (!isClickInside) {
    // Hide the search result section when clicked outside
    searchResult.style.display = 'none';
  }
});

searchInput.addEventListener('focus', function () {
  searchResult.style.display = 'block';
});
