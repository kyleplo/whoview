function whoviewlog(log,data){console.log("WhoView: "+log);if(data){console.log({type:"Whoview log data",data:data})}};
whoviewlog("Ready!");
chrome.storage.local.get({private:false},function (items){if(items.private){document.getElementById("comment-form").style.display = "none";
document.getElementById("add-to").style.display = "none";whoviewlog("Private mode: Stuff removed")}});
var projectViews = document.getElementsByClassName("views")[0].innerHTML;
var commenters = document.getElementsByClassName("name");

var commentUsers = [];

var owner = document.getElementById("owner").innerHTML;
for(var i = 0;i < commenters.length;i++){

if(commentUsers.indexOf(commenters[i].innerText) === -1){commentUsers.push(commenters[i].innerText)}};
if(commentUsers.indexOf(owner) === -1){commentUsers.push(owner)};
whoviewlog("Sending data:",{"type":"project","views":projectViews,"commenters":commentUsers});
chrome.runtime.sendMessage({"type":"project","views":projectViews,"commenters":commentUsers});
whoviewlog("Data sent!!")