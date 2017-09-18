document.getElementById("private").addEventListener("change",updatePrivate);
if(location.pathname === "/options-v2.html"){document.getElementById("comment").addEventListener("blur",updateComment);};
chrome.storage.local.get({private:false,comment:""},function (items){document.getElementById("private").checked = items.private;document.getElementById("comment").value = items.comment});
function updatePrivate(event){
chrome.storage.local.set({private:event.target.checked});
chrome.contextMenus.update("private", {checked:event.target.checked})}
function updateComment(event){
chrome.storage.local.set({comment:event.target.value});}
if(location.pathname === "/whoview.html"){function getQueryParam(q){
var params = location.search.split("&");
params[0] = params[0].slice(1);
var result = [];
for(var i = 0;i < params.length;i++){
if(params[i].split("=")[0] === q){
result.push(params[i].split("=")[1])}};
return result;}
document.getElementById("s3").href += "#" + getQueryParam("id");
document.getElementById("ph").href += "#" + getQueryParam("id");
setTimeout(function (){chrome.storage.local.get({commenters:[],views:0},function (res){
console.log("Got users!",res);
document.getElementById("non-whoview").innerHTML = res.views - res.commenters.length;
document.getElementById("content").removeAttribute("hidden");
document.getElementById("loading").setAttribute("hidden","hidden");
for(var i = 0;i < res.commenters.length;i++){
document.getElementById("users").innerHTML += "<li><a href='https://scratch.mit.edu/users/" + res.commenters[i] + "' target='_blank'>" + res.commenters[i] + "</a></li>"
}})},3000)}
