document.addEventListener("DOMContentLoaded", () => {
    const embedDiv = document.querySelector(".heygen-streaming-embed");
    const iframe = document.getElementById("heygen-streaming-iframe");
  
    // 🔍 Check if elements are selected
    if (!embedDiv || !iframe) {
      console.error("Embed element or iframe not found in the DOM.");
      return;
    }
    
    const host = "https://labs.heygen.com";
    const iframeUrl = `${host}/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJLYXR5YV9CbGFja19TdWl0X3B1YmxpYyIs%0D%0AInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzL2RhNWNiYTZi%0D%0AYzdiMzRjNWVhMTM5Zjc3ZGE5OGZkYzA0XzU1MzcwL3ByZXZpZXdfdGFsa18xLndlYnAiLCJuZWVk%0D%0AUmVtb3ZlQmFja2dyb3VuZCI6dHJ1ZSwia25vd2xlZGdlQmFzZUlkIjoiNDllYzE4ZTBlMTA4NDky%0D%0AZWE1ODY0MDc2ZWU3NmNiNDkiLCJ1c2VybmFtZSI6ImE4OWQ5ZWQ5NDdlOTQ5OWVhOGNlYzQ1ZjI2%0D%0AYjFmYTZhIn0%3D&inIFrame=1"`;
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
  
  