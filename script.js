const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const palindromeChecker = () => {
const textRegex = /[^a-zA-Z0-9]/g
const inputTextnac = inputText.value.replace(textRegex, "");
const inputTextnacReverse = inputTextnac.split("").reverse().join("");

if(!inputText.value){
  return alert("Please input a value");
} else if (inputTextnac.toLowerCase() === inputTextnacReverse.toLowerCase()){
  result.textContent = `${inputText.value} is a palindrome`;
  result.style.color = "green"
} else {
  result.textContent = `${inputText.value} is not a palindrome`;
  result.style.color = "red"
}
return result.textContent;
}
checkButton.addEventListener("click", palindromeChecker) 

document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('background-img');
    const mainContent = document.body;

    let imageLoaded = false;

    function showContent() {
      mainContent.style.display = 'flex';
    }

    if (img.complete) {
      imageLoaded = true;
      showContent();
    } else {

      img.onload = function() {
        imageLoaded = true;
        showContent();
      };
    }

    // Fallback in case the image takes too long or fails to load
    setTimeout(function() {
      if (!imageLoaded) {
        showContent();
      }
    }, 3000);
  });