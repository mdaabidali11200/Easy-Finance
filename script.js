 var istatus = Document.querySelector("h5")

 var addFriend = document.querySelector("#add")

 addFriend.addEventListener("click", function(){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
 })