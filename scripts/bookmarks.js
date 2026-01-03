console.log("Bookmarks JS loaded successfully!");
// Choose first bookmark
const firstBookmark = document.querySelector(".quiz__card-bookmark");
// add EventListener
firstBookmark.addEventListener("click", () => {
  //toggle css class "active"
  firstBookmark.classList.toggle("quiz__card-bookmark--active");

  // checking if active or not
  if (firstBookmark.classList.contains("quiz__card-bookmark--active")) {
    console.log("Bookmark activated!");
  } else {
    console.log("Bookmark deactivated");
  }
});
