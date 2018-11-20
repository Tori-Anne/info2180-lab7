
window.onload = function() {	
	let country = document.getElementById("country").value;
    let lookupButton = document.getElementById("lookup");
	let allCheckBox = document.getElementById("all");
	
	lookupButton.addEventListener("click", function() {
		let request = new XMLHttpRequest();
		let URL = '';
		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("result").innerHTML = request.responseText;
				}
			else {
				alert('There was a problem with the request.');
				}
		};
		
		if (allCheckBox.checked == true) {
			URL = 'world.php?all=true';
		}
		else {
			URL = 'world.php?country=' + country;
		}			
			
		request.open('GET', URL, true);
		request.send();
	});
	
	
	
};