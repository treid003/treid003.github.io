function protectWebpage(srcForIframe, srcType, checkStatus=false, adUnitPath="/6355419/Travel/Europe", serverSideScriptPath="getStatusCode.php")
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
    //document.getElementsByTagName("head")[0].appendChild(adDiv);
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
                var willLoadWebpage = true
                //Check the status code of the safeframe
                if (checkStatus === true)
                {
                    var safeframeURL = adDiv.children[0].children[0].src;
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
                    hideAdDiv(adDiv);
                    loadWebPage(srcForIframe, srcType);
                }
                //return willLoadWebpage;
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
}
