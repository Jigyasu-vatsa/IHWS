function OnClickMenu() {
  document.getElementById("OnClickShow").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.MlmDrpBtn')) {
    var dropdowns = document.getElementsByClassName("MlmDrpDwnCntnt");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
