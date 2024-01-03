// your code here

// let buttonEle=dcoument.getElementById("")


document.getElementById('urlForm').addEventListener('submit', function(event) {
      event.preventDefault();

      // Get values from form
      var nameValue = document.getElementById('name').value;
      var yearValue = document.getElementById('year').value;

      // Construct the query string
      var queryString = '?name=' + encodeURIComponent(nameValue) + '&year=' + encodeURIComponent(yearValue);

      // Update the h3 element with the new URL
      document.getElementById('url').textContent = 'URL: https://localhost:8080/' + queryString;
    });
	
	
