var hungry = prompt('Are you hungry?');
var element = document.getElementsByTagName('P')[0];

if (hungry == "Yes" || hungry == "y" || hungry == "Y") {
  element.innerHTML = "Eat something."
} else {
  element.innerHTML = "Go to work."
}