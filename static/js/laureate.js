document.addEventListener("DOMContentLoaded", () => {
    const embedDiv = document.querySelector(".heygen-streaming-embed");
    const iframe = document.getElementById("heygen-streaming-iframe");
  
    // 🔍 Check if elements are selected
    if (!embedDiv || !iframe) {
      console.error("Embed element or iframe not found in the DOM.");
      return;
    }
  
    const host = "https://labs.heygen.com";
    const iframeUrl = `${host}/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiI1ZjdmOTc1ZWQ0ZWE0MDY1YWI1YWI4MzQ0%0D%0AZjJlOGYxOCIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0ALzVmN2Y5NzVlZDRlYTQwNjVhYjVhYjgzNDRmMmU4ZjE4L2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6ImE5%0D%0AZGQ4ZTU4NWYzMzQ0MjVhMmU4Njg5ZTY3ZDBjY2EwIiwidXNlcm5hbWUiOiJhODlkOWVkOTQ3ZTk0%0D%0AOTllYThjZWM0NWYyNmIxZmE2YSJ9&inIFrame=1`;
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
  
  