
window.onload = function() {	
	let country = document.getElementById("country").value;
    let lookupButton = document.getElementById("lookup");
	
	lookupButton.addEventListener("click", function() {
		let request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("result").innerHTML = request.responseText;
				}
			else {
				alert('There was a problem with the request.');
				}
		};
		request.open('GET', 'world.php?country=' + country, true);
		request.send();
	});
	
	
	
};