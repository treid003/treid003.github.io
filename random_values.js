//Generate Random Numbers
///Math.random()
document.getElementById("math.random").innerHTML = Math.random();

///crypto.getRandomValues()
a = new Uint8Array(1), window.crypto.getRandomValues(a);
document.getElementById("crypto.getRandomValues").innerHTML = a[0];

// Generate safeframe URL 
///Reference: https://securepubads.g.doubleclick.net/gpt/pubads_impl_2023010901.js?cb=31071543
////Archived Version: https://web.archive.org/web/20230113005605/https://securepubads.g.doubleclick.net/gpt/pubads_impl_2023010901.js?cb=31071543

///Math.random()
////Create the random number array (code from Th())
var a;
a = Array(16);
for (b = 0; b < a.length; b++) 
    a[b] = Math.floor(255 * Math.random());
////Convert the array to a hexadecimal string (similar to what is done in Uh())
randomValue = "";
for(b=0; b < a.length; b++)
    c = a[b], 15 >= c && (randomValue += "0"), randomValue += c.toString(16); 
safeframeURL = "https://" + randomValue + ".safeframe.googlesyndication.com" + "/safeframe/1-0-40/html/container.html?n=1";
document.getElementById("math.random_Safeframe").href = safeframeURL;
document.getElementById("math.random_Safeframe").innerHTML = safeframeURL;
///Create a safeframe 
var tempFrame = document.createElement("IFRAME");
tempFrame.src = safeframeURL;
document.body.insertBefore(document.createElement("br"), document.getElementById("after_math.random"));
document.body.insertBefore(tempFrame, document.getElementById("after_math.random"));

///crypto.getRandomValues()
////Create the random number array (code from Th())
var a;
a = new Uint8Array(16), window.crypto.getRandomValues(a);
////Convert the array to a hexadecimal string (similar to what is done in Uh())
randomValue = "";
for(b=0; b < a.length; b++)
    c = a[b], 15 >= c && (randomValue += "0"), randomValue += c.toString(16); 
safeframeURL = "https://" + randomValue + ".safeframe.googlesyndication.com" + "/safeframe/1-0-40/html/container.html?n=1";
document.getElementById("crypto.getRandomValues_Safeframe").href = safeframeURL;
document.getElementById("crypto.getRandomValues_Safeframe").innerHTML = safeframeURL;
///Create a safeframe 
document.body.appendChild(document.createElement("br"));
var tempFrame = document.createElement("IFRAME");
tempFrame.src = safeframeURL;
document.body.appendChild(tempFrame);
