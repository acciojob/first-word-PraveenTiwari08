function firstWord(s) {
  // your code here
	for(let i = 0 ; i < s.length ; i++){
		if(s[i] === ""){
			break;
		}
		return s[i];
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
