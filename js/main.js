const menuBtn = document.getElementsByClassName('menu-btn')[0]
const menuItems = document.getElementsByClassName('menu-items')[0]
const menuItem = document.getElementsByClassName('menu-items')[0]
// main toggle
menuBtn.addEventListener("click", () => {
  toggle();
});

//toggle on item click if open

menuItem.forEach(item => {
 item.addEvevnListener("click", () => {
  if (menuBtn.ClassList.contains("open"))
    toggle();
 })
})

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}