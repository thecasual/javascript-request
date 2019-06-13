function sendpost(token) {
	var url = "example.com";
	var param = "param=test&param2=test2&submit=&CSRFToken=" + token; 
	var req = new XMLHttpRequest();
	req.open("POST",url,true);
	req.withCredentials = 'true';
	req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	req.send(param);
}

