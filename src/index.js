const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  
  document.querySelector(".btn-primary").addEventListener("click", function(event) {
    fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(json => infoCard(json["results"][0]))
  })

  function infoCard(user) {
    // Fill in name
    document.getElementById("fullname").innerText = user.name.title + " " + user.name.first + " " + user.name.last 

    // Repeat the same scheme for all other fields.....
  }
  
});
