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
function getSafeFrameUsingMathRandom()
{
    a = Array(16);
    for (b = 0; b < a.length; b++) 
        a[b] = Math.floor(255 * Math.random());
    ////Convert the array to a hexadecimal string (similar to what is done in Uh())
    randomValue = "";
    for(b=0; b < a.length; b++)
        c = a[b], 15 >= c && (randomValue += "0"), randomValue += c.toString(16); 
    safeframeURL = "https://" + randomValue + ".safeframe.googlesyndication.com" + "/safeframe/1-0-40/html/container.html?n=1";
    return safeframeURL;
}
safeframeURL = getSafeFrameUsingMathRandom();
document.getElementById("math.random_Safeframe").href = safeframeURL;
document.getElementById("math.random_Safeframe").innerHTML = safeframeURL;
///Create a safeframe 
var tempFrame = document.createElement("IFRAME");
tempFrame.src = safeframeURL;
document.body.insertBefore(document.createElement("br"), document.getElementById("after_math.random"));
document.body.insertBefore(tempFrame, document.getElementById("after_math.random"));

///crypto.getRandomValues()
////Create the random number array (code from Th())
function getSafeFrameUsingCryptoRandom()
{
    var a;
    a = new Uint8Array(16), window.crypto.getRandomValues(a);
    ////Convert the array to a hexadecimal string (similar to what is done in Uh())
    randomValue = "";
    for(b=0; b < a.length; b++)
        c = a[b], 15 >= c && (randomValue += "0"), randomValue += c.toString(16); 
    safeframeURL = "https://" + randomValue + ".safeframe.googlesyndication.com" + "/safeframe/1-0-40/html/container.html?n=1";
    return safeframeURL;
}
safeframeURL = getSafeFrameUsingCryptoRandom();
document.getElementById("crypto.getRandomValues_Safeframe").href = safeframeURL;
document.getElementById("crypto.getRandomValues_Safeframe").innerHTML = safeframeURL;
///Create a safeframe 
document.body.appendChild(document.createElement("br"));
var tempFrame = document.createElement("IFRAME");
tempFrame.src = safeframeURL;
document.body.appendChild(tempFrame);


//Dynamically generate random values and Google SafeFrames based on user interaction
///Scrolling
var startTime = new Date;
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("hr"));
var currentHeading = document.createElement("h2");
currentHeading.innerHTML = "Dynamically Generated Random Values and Gogle SafeFrames Impacted by User Interaction";
document.body.appendChild(currentHeading);
/// Add the elements that will be used for this section
currentHeading = document.createElement("h3");
currentHeading.innerHTML = "Random Values Generated by Scrolling to This Section of the Web Page";
document.body.appendChild(currentHeading);
var currentTimeText = document.createElement("p");
currentTimeText.innerHTML = "Amount of time used to reach this section of the web page: ";
document.body.appendChild(currentTimeText);

//<h3 style="display: inline-block;">Math.random():</h3>
document.body.appendChild(document.createElement("br"));
currentHeading = document.createElement("h4");
currentHeading.innerHTML = "Math.random():";
currentHeading.style.display = "inline-block";
document.body.appendChild(currentHeading);
//<p id="math.random" style="display: inline-block;">0.1905386158139244</p>
var mathRandomTextForScrollingExample = document.createElement("p");
mathRandomTextForScrollingExample.style.display = "inline-block";
document.body.appendChild(mathRandomTextForScrollingExample);

//<h3 style="display: inline-block;">crypto.getRandomValues():</h3>
document.body.appendChild(document.createElement("br"));
currentHeading = document.createElement("h4");
currentHeading.innerHTML = "crypto.getRandomValues():";
currentHeading.style.display = "inline-block";
document.body.appendChild(currentHeading);
//<p id="crypto.getRandomValues" style="display: inline-block;">45</p>
var cryptoRandomTextForScrollingExample = document.createElement("p");
cryptoRandomTextForScrollingExample.style.display = "inline-block";
document.body.appendChild(cryptoRandomTextForScrollingExample);


//<h3 style="display: inline-block;">Safeframe URL using Math.random():</h3>
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));
currentHeading = document.createElement("h4");
currentHeading.innerHTML = "Safeframe URL using Math.random():";
currentHeading.style.display = "inline-block";
document.body.appendChild(currentHeading);
//<a id="math.random_Safeframe" style="display: inline-block;" href="https://d63db3ade6b55448a66f865cea5f6779.safeframe.googlesyndication.com/safeframe/1-0-40/html/container.html?n=1">https://d63db3ade6b55448a66f865cea5f6779.safeframe.googlesyndication.com/safeframe/1-0-40/html/container.html?n=1</a>
var mathRandomLinkForScrollingExample = document.createElement("a");
mathRandomLinkForScrollingExample.style.display = "inline-block";
document.body.appendChild(mathRandomLinkForScrollingExample);
//<iframe src="https://d63db3ade6b55448a66f865cea5f6779.safeframe.googlesyndication.com/safeframe/1-0-40/html/container.html?n=1"></iframe>
document.body.appendChild(document.createElement("br"));
var mathRandomIframeForScrollingExample = document.createElement("iframe");
document.body.appendChild(mathRandomIframeForScrollingExample);

//<h3 style="display: inline-block;">Safeframe URL using crypto.getRandomValues():</h3>
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));
currentHeading = document.createElement("h4");
currentHeading.innerHTML = "Safeframe URL using crypto.getRandomValues():";
currentHeading.style.display = "inline-block";
document.body.appendChild(currentHeading);
//<a id="crypto.getRandomValues_Safeframe" style="display: inline-block;" href="https://09468ac23b4f1d16458c3b2b6357e1fa.safeframe.googlesyndication.com/safeframe/1-0-40/html/container.html?n=1">https://09468ac23b4f1d16458c3b2b6357e1fa.safeframe.googlesyndication.com/safeframe/1-0-40/html/container.html?n=1</a>
var cryptoRandomLinkForScrollingExample = document.createElement("a");
cryptoRandomLinkForScrollingExample.style.display = "inline-block";
document.body.appendChild(cryptoRandomLinkForScrollingExample);
//<iframe src="https://09468ac23b4f1d16458c3b2b6357e1fa.safeframe.googlesyndication.com/safeframe/1-0-40/html/container.html?n=1"></iframe>
document.body.appendChild(document.createElement("br"));
var cryptoRandomIframeForScrollingExample = document.createElement("iframe");
document.body.appendChild(cryptoRandomIframeForScrollingExample);


//Modified example code from: https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
function isElementInViewport (el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}

function onVisibilityChange(el, callback) {
    var oldVisible;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != oldVisible) {
            oldVisible = visible;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}

var handler = onVisibilityChange(currentTimeText, function() {
    if(parseInt(cryptoRandomTextForScrollingExample.innerHTML) > 0)
        return;
    
    var stopTime = new Date;
    var duration = (stopTime.getTime() - startTime.getTime()); //The time is in ms

    //Update all of the values for this section
    currentTimeText.innerHTML = currentTimeText.innerHTML + duration.toString() + "ms";
    
    mathRandomTextForScrollingExample.innerHTML = Math.random();
   
    a = new Uint8Array(1), window.crypto.getRandomValues(a);
    cryptoRandomTextForScrollingExample.innerHTML = a[0];
    
    safeframeURL = getSafeFrameUsingMathRandom();
    mathRandomLinkForScrollingExample.href = safeframeURL;
    mathRandomLinkForScrollingExample.innerHTML = safeframeURL;
    mathRandomIframeForScrollingExample.src = safeframeURL;
    
    safeframeURL = getSafeFrameUsingCryptoRandom();
    cryptoRandomLinkForScrollingExample.href = safeframeURL;
    cryptoRandomLinkForScrollingExample.innerHTML = safeframeURL;
    cryptoRandomIframeForScrollingExample.src = safeframeURL;
});

if (window.addEventListener) {
    //addEventListener('DOMContentLoaded', handler, false);
    //addEventListener('load', handler, false);
    addEventListener('scroll', handler, false);
    //addEventListener('resize', handler, false);
}
