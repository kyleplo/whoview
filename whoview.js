function whoviewlog(log,data){console.log("WhoView: "+log);if(data){console.log({type:"Whoview log data",data:data})}};
function postComment(comment){document.forms["main-post-form"].elements.content.innerHTML = comment;document.forms["main-post-form"].getElementsByTagName("a")[0].click()}
whoviewlog("Ready!");
document.forms["main-post-form"].elements.content.setAttribute("placeholder","Leave a comment to appear in WhoView");
chrome.storage.local.get({private:false,comment:""},function (items){if(items.comment.length > 0 && !items.private){setTimeout(function (){postComment(items.comment + " Visit https://scratch.mit.edu/projects/174950057/ to install WhoView.")},5000)};if(items.private){document.getElementById("comment-form").style.display = "none";
document.getElementById("add-to").style.display = "none";whoviewlog("Private mode: Stuff removed")}});
var projectViews = document.getElementsByClassName("views")[0].innerHTML;
var commenters = document.getElementsByClassName("name");

var commentUsers = [];

var owner = document.getElementById("owner").innerHTML;
var you = document.getElementsByClassName("user-name")[0].innerText;
for(var i = 0;i < commenters.length;i++){

if(commentUsers.indexOf(commenters[i].innerText) === -1){commentUsers.push(commenters[i].innerText)}};
if(commentUsers.indexOf(owner) === -1){commentUsers.push(owner)};
if(commentUsers.indexOf(you) === -1){commentUsers.push(you)};
whoviewlog("Sending data:",{"type":"project","views":projectViews,"commenters":commentUsers});
chrome.runtime.sendMessage({"type":"project","views":projectViews,"commenters":commentUsers});
whoviewlog("Data sent!!");
document.getElementById("comments-enabled-box").innerHTML += " to not recieve WhoView notifications for this project.";
