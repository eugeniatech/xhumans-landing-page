document.addEventListener("DOMContentLoaded", () => {
    const embedDiv = document.querySelector(".heygen-streaming-embed");
    const iframe = document.getElementById("heygen-streaming-iframe");
  
    // 🔍 Check if elements are selected
    if (!embedDiv || !iframe) {
      console.error("Embed element or iframe not found in the DOM.");
      return;
    }
  
    const host = "https://labs.heygen.com";
    const iframeUrl = `${host}/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJNYXJpYW5uZV9SZWRfU3VpdF9wdWJsaWMi%0D%0ALCJwcmV2aWV3SW1nIjoiaHR0cHM6Ly9maWxlczIuaGV5Z2VuLmFpL2F2YXRhci92My80Y2IyMWU5%0D%0AZTE0NWY0N2JlODMxZTU2OGNmMWQ4Y2VhMl81NTM5MC9wcmV2aWV3X3RhcmdldC53ZWJwIiwibmVl%0D%0AZFJlbW92ZUJhY2tncm91bmQiOnRydWUsImtub3dsZWRnZUJhc2VJZCI6IjYxNTU1ZmM3ZWZjMTRm%0D%0AM2JiYTI3Yjc0NTliMWQ1Y2ExIiwidXNlcm5hbWUiOiJhODlkOWVkOTQ3ZTk0OTllYThjZWM0NWYy%0D%0ANmIxZmE2YSJ9&inIFrame=1"`;
    iframe.src = iframeUrl;
  
    let isVisible = false;
    let isInitialized = false;
  
    window.addEventListener("message", (event) => {
      if (event.origin === host && event.data?.type === "streaming-embed") {
        switch (event.data.action) {
          case "init":
            isInitialized = true;
            embedDiv.classList.add("show");
            break;
          case "show":
            isVisible = true;
            embedDiv.classList.add("expand");
            break;
          case "hide":
            isVisible = false;
            embedDiv.classList.remove("expand");
            break;
        }
      }
    });
  });
  
  