//Travis Reid

function protectWebpage(srcForIframe, srcType, adUnitPath="/6355419/Travel/Europe", checkStatus=false, serverSideScriptPath="getStatusCode.php")
{
    //Check if Google Publisher Tag file has been loaded
    //*
    var gptURL = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
    var allResources = performance.getEntries().filter( (e) => e.entryType === "resource" ).map( (e) => e.name );
    if (allResources.indexOf(gptURL) === -1)
    {
        var gptScript = document.createElement("script");
        gptScript.setAttribute("async", "");
        gptScript.setAttribute("src", gptURL);
        document.getElementsByTagName("head")[0].appendChild(gptScript);
    }
    //*/
    
    // Create the example ad div and load the ad
    window.googletag = window.googletag || {cmd: []};
    var adDiv = document.createElement("div");
    adDiv.id = "example-ad";
    adDiv.setAttribute("style", "width: 728px; height: 90px;");
    document.body.appendChild(adDiv);
    setupObserver(srcForIframe, srcType, adDiv, checkStatus, serverSideScriptPath);

    googletag.cmd.push(function() {
        googletag.pubads().setForceSafeFrame(true);
        const targetSlot = googletag
        .defineSlot(
            adUnitPath, [728, 90], adDiv.id)
        .addService(googletag.pubads());
        googletag.pubads().disableInitialLoad();
        
        //*          
        googletag.pubads().addEventListener("slotOnload", (event) => {
            if(event.slot === targetSlot)
            {   
                adDiv.setAttribute("safeframeLoaded", "true");
            }
        });
        //*/
        
        googletag.enableServices();
        
        setTimeout(() => {
            googletag.pubads().refresh();
        }, 1000);
    });
    var adDivScript = document.createElement("script");
    adDiv.appendChild(adDivScript);
    adDivScript.innerHTML = "googletag.cmd.push(function() {googletag.display(" + "'example-ad'" + ");});";
}


function hideAdDiv(adDiv)
{
    adDiv.style.display = "none";
}

function loadWebPage(srcForIframe, srcType="srcdoc")
{
    webPageFrame = document.createElement("iframe");
    if(srcType === "src")
        webPageFrame.src = srcForIframe;
    else
        webPageFrame.srcdoc = srcForIframe;
    document.body.appendChild(webPageFrame);
    webPageFrame.style.position = "fixed";
    webPageFrame.style.inset = 0;
    webPageFrame.style.margin = 0;
    webPageFrame.style.padding = 0;
    webPageFrame.style.width = "100%";
    webPageFrame.style.height = "100%";
    webPageFrame.style.border = "none";
    webPageFrame.style.overflow = "hidden";
    
    var clonedFrame = webPageFrame.cloneNode(true);
    setTimeout(() => {
        document.body.appendChild(clonedFrame);
        webPageFrame.remove();
    }, 5000);
}


/*
    This was initially created to avoid the ad removal error that was ocurring for iframes that did not contain ads, but it did not fix the issue.
 
    I had to clone the iframe that contained the final web page content and then load the content after the expected time for the original frame to be removed by the browser.
*/
function checkSafeframe(adDiv)
{
    //Check to see if the safeframe loaded with a duration more than 0
    /// The safeframe URL shoud be different each time the web page is loaded so the duration should be more than 0
    var willLoadWebpage = false;
    var re = performance.getEntriesByType("resource");
    var safeframeURL = adDiv.children[0].children[0].src;
    for(var i = 0; i < re.length; i++)
    {
        var entry = re[i];
        console.log("Duration: " + entry.duration + " | Name: " + entry.name);
        if(entry.name === safeframeURL && entry.duration > 0)
        {
            willLoadWebpage = true;
            break;
        }   
    }
    
    //Check the status code of the safeframe
    var checkStatus = adDiv.getAttribute("checkStatus");
    var serverSideScriptPath = adDiv.getAttribute("serverSideScriptPath");
    if (checkStatus === "true" && willLoadWebpage === true)
    {
        var statusCode = 404;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", serverSideScriptPath);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("safeframeURL=" + safeframeURL);
        xhr.onload = function() {
            if(xhr.status == 200)
            {
                statusCode = xhr.responseText;
                if (statusCode < 400)
                {
                    console.log("successfully loaded example ad");
                    console.log("Status code: "+ statusCode + " | URL: " +  safeframeURL);
                    willLoadWebpage = true;
                }
                else
                {
                    console.log("failed to load example ad");
                    willLoadWebpage = false;
                }
            }
            else
            {
                console.log("failed to load example ad");
                willLoadWebpage = false;
            }
        }
    }
    
    if(willLoadWebpage)
    {
        var srcForIframe = atob(adDiv.getAttribute("srcForIframe"));
        var srcType = adDiv.getAttribute("srcType");

        hideAdDiv(adDiv);
        loadWebPage(srcForIframe, srcType);
    }
}

//This function will be called after the safeframeLoaded attribute has been set
function waitForSafeframe(mutations)
{
    ///Check if the attribute associated with the ad's slotOnload function has been set to true
    var attributeName = "safeframeLoaded";
    attributeName = attributeName.toLowerCase();
    for(var mutationIndex = 0; mutationIndex < mutations.length; mutationIndex++)
    {
        var currentMutation = mutations[mutationIndex];
        if(currentMutation.type === "attributes" && currentMutation.attributeName.toLowerCase() === attributeName && currentMutation.target.getAttribute(attributeName) === "true") 
        {
            checkSafeframe(currentMutation.target);
            break;
        }
    }
}

//Function used to start the observer that will check if the safeframe has loaded
function setupObserver(srcForIframe, srcType, adDiv, checkStatus, serverSideScriptPath)
{
    adDiv.setAttribute("checkStatus", checkStatus);
    adDiv.setAttribute("serverSideScriptPath", serverSideScriptPath);
    adDiv.setAttribute("srcForIframe", btoa(srcForIframe));
    adDiv.setAttribute("srcType", srcType);
    var observer = new MutationObserver(waitForSafeframe);
    var options = {attributes: true, attributeOldValue: true};
    observer.observe(adDiv, options);
}
