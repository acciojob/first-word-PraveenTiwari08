function firstWord(s) {
  // your code here
	 str = ""
	for(let i = 0 ; i < s.length ; i++){
		if(s[i] === ""){
			break;
		}
		 str += s[i];
	}
	return str;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
