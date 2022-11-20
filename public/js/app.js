filterSelection("all")
function filterSelection(filter) {
  let card = document.getElementsByClassName("card-holder");
  if (filter == "all") filter = "";
  for (let i = 0; i < card.length; i++) {
    removeFilter(card[i], "show");
    if (card[i].className.indexOf(filter) > -1) addFilter(card[i], "show");
  }
}

function addFilter(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeFilter(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btns = document.getElementsByClassName("btn")
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace(" active", "")
    this.className += " active"
  });
}

function searchCountry() {
    // Declare variables
    let input, filter, countryName, txtValue
    input = document.getElementById('countryInput')
    filter = input.value.toUpperCase()
    let countries = document.getElementsByClassName('card')
  
    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < countries.length; i++) {
      countryName = countries[i].getElementsByClassName("card-title")[0];
      txtValue = countryName.textContent || countryName.innerText
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        countries[i].parentNode.style.display = "flex"
      } else {
        countries[i].parentNode.style.display = "none"
      }
    }
  }