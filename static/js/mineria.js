document.addEventListener("DOMContentLoaded", () => {
    const embedDiv = document.querySelector(".heygen-streaming-embed");
    const iframe = document.getElementById("heygen-streaming-iframe");
  
    // 🔍 Check if elements are selected
    if (!embedDiv || !iframe) {
      console.error("Embed element or iframe not found in the DOM.");
      return;
    }
  
    const host = "https://labs.heygen.com";
    const iframeUrl = `${host}/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJHcmFoYW1fQ2hhaXJfU2l0dGluZ19wdWJs%0D%0AaWMiLCJwcmV2aWV3SW1nIjoiaHR0cHM6Ly9maWxlczIuaGV5Z2VuLmFpL2F2YXRhci92My8yMTQ2%0D%0AZTJjOGMwNzA0NWMwYjM1OTg2ODNkNDQ3M2ZkZF81NTM0MC9wcmV2aWV3X3RhcmdldC53ZWJwIiwi%0D%0AbmVlZFJlbW92ZUJhY2tncm91bmQiOmZhbHNlLCJrbm93bGVkZ2VCYXNlSWQiOiIzMjRlMzU5N2Qx%0D%0AYmM0MTJmOTNhOTIwZWYwNDE0MWI5NCIsInVzZXJuYW1lIjoiYTg5ZDllZDk0N2U5NDk5ZWE4Y2Vj%0D%0ANDVmMjZiMWZhNmEifQ%3D%3D&inIFrame=1"`;
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
  
  