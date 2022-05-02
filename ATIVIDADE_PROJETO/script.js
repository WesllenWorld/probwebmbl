const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://the-cocktail-db.p.rapidapi.com/random.php");
xhr.setRequestHeader("X-RapidAPI-Host", "the-cocktail-db.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "SIGN-UP-FOR-KEY");

xhr.send(data);