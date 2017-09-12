function numabbr(x,l){
var neg = x < 0;
var l = l || 4;
if(neg){x = x * -1};
var res = x;
if(x >= 1000000000000 && l <= 12){res = Math.floor(x / 1000000000000) + "tri";if(neg){res = "-" + res};return res;};
if(x >= 100000000000 && l <= 11){res = Math.floor(x / 100000000000) + "hbi";if(neg){res = "-" + res};return res;};
if(x >= 10000000000 && l <= 10){res = Math.floor(x / 10000000000) + "tbi";if(neg){res = "-" + res};return res;};
if(x >= 1000000000 && l <= 9){res = Math.floor(x / 1000000000) + "bil";if(neg){res = "-" + res};return res;};
if(x >= 100000000 && l <= 8){res = Math.floor(x / 100000000) + "hmi";if(neg){res = "-" + res};return res;};
if(x >= 10000000 && l <= 7){res = Math.floor(x / 10000000) + "tmi";if(neg){res = "-" + res};return res;};
if(x >= 1000000 && l <= 6){res = Math.floor(x / 1000000) + "mil";if(neg){res = "-" + res};return res;};
if(x >= 100000 && l <= 5){res = Math.floor(x / 100000) + "hth";if(neg){res = "-" + res};return res;};
if(x >= 10000 && l <= 4){res = Math.floor(x / 10000) + "tth";if(neg){res = "-" + res};return res;};
if(x >= 1000 && l <= 3){res = Math.floor(x / 1000) + "tho";if(neg){res = "-" + res};return res;};
if(x >= 100 && l <= 2){res = Math.floor(x / 100) + "hun";if(neg){res = "-" + res};return res;};
if(x >= 10 && l <= 1){res = Math.floor(x / 10) + "ten";if(neg){res = "-" + res};return res;};
if(x >= 1 && l <= 0){res = Math.floor(x / 1) + "ten";if(neg){res = "-" + res};return res;};
if(neg){res = "-" + res};return res}
chrome.browserAction.setIcon({path:"whoview-19.png"})
chrome.contextMenus.create({id: "private",title: "Private Mode",contexts: ["browser_action"],type: "checkbox"});
chrome.contextMenus.onClicked.addListener(function (info,tab){
if(info.menuItemId === "private"){chrome.storage.local.set({private:info.checked})}});
chrome.runtime.onMessage.addListener(function (message,sender){console.log("Got message!!");
if(message.type === "project"){chrome.browserAction.setBadgeText({text:numabbr(message.views),tabId:sender.tab.id});
chrome.browserAction.setBadgeBackgroundColor({color:"#00a2e8",tabId:sender.tab.id});chrome.storage.local.set({"commenters":message.commenters,"views":message.views});console.log("Commenters stored");};
});
chrome.tabs.onUpdated.addListener(function (tabId,info,tab){if(tab.url.startsWith("https://scratch.mit.edu/projects/")){chrome.browserAction.setPopup({popup:"whoview.html?type=project&user=unknown&id=" + tab.url.slice(33),tabId:tabId})}else{chrome.browserAction.setBadgeText({text:"",tabId:tabId});chrome.browserAction.setPopup({popup:"options.html",tabId:tabId});console.warn("No longer a scratch project")}})