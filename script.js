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