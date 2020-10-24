const company_code = document.getElementById("CompanyCode")
const signin = document.getElementById("login-form")
signin.addEventListener('submit',(e) => {  e.preventDefault()
  console.log("this")
  const code = company_code.value
  console.log(code)
  console.log(document.cookie)
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");

    // Loop through the array elements
    var userToken
    for(var i = 0; i < cookieArr.length; i++)
    {
        var cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if('jwt' == cookiePair[0].trim())
        {
            // Decode the cookie value and return
          userToken= cookiePair[1];
        console.log(userToken)
        break;
      }
  }



fetch('/join', {
    method: 'POST',
    headers: {
     'Authorization': 'Bearer ' + userToken,
      'Accept': 'application/json',
       'Content-Type': 'application/json'

   },

    body: JSON.stringify({'CompanyCode':code}),

})
.then(   (res)=>{
  // Sets the new location of the current window.
window.location = res.url;

// Sets the new href (URL) for the current window.
window.location.href = res.url;

// Assigns a new URL to the current window.
window.location.assign(res.url);

// Replaces the location of the current window with the new one.
window.location.replace(res.url);

// Sets the location of the current window itself.
self.location = res.url;

// Sets the location of the topmost window of the current window.
top.location = res.url;
} )
.then(data => { console.log(data) })
.catch(err => { console.log(err) })

})