document.addEventListener("DOMContentLoaded", () => {
  const embedDiv = document.querySelector(".heygen-streaming-embed");
  const iframe = document.getElementById("heygen-streaming-iframe");

  // 🔍 Check if elements are selected
  if (!embedDiv || !iframe) {
    console.error("Embed element or iframe not found in the DOM.");
    return;
  }

  const host = "https://labs.heygen.com";
  // const iframeUrl = `${host}/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiI1ZTIyZGY3OTllNjQ0OTAxODRkZDUyMWI4ZGMwNGM4MCIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzLzVlMjJkZjc5OWU2NDQ5MDE4NGRkNTIxYjhkYzA0YzgwL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0LndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6IjEyNTViMmQxNTg0MzRlZjliZjY5OGVhOTFiZWY0NDdlIiwidXNlcm5hbWUiOiJhODlkOWVkOTQ3ZTk0OTllYThjZWM0NWYyNmIxZmE2YSJ9&inIFrame=1`;
  // const iframeUrl = `${host}/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiI1ZTIyZGY3OTllNjQ0OTAxODRkZDUyMWI4%0D%0AZGMwNGM4MCIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0ALzVlMjJkZjc5OWU2NDQ5MDE4NGRkNTIxYjhkYzA0YzgwL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6IjU4%0D%0AYzMyOTY2ZjE2MDRkM2JiYTA4OTcwZGVjOGU4YjlhIiwidXNlcm5hbWUiOiJhODlkOWVkOTQ3ZTk0%0D%0AOTllYThjZWM0NWYyNmIxZmE2YSJ9&inIFrame=1`;
  const iframeUrl = `${host}/guest/streaming-embed?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJlNDA0ZjQ2NDE4MmE0NTBjOGU4ZjE1MTVj%0D%0AZTM4NDJhMCIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3Yz%0D%0AL2U0MDRmNDY0MTgyYTQ1MGM4ZThmMTUxNWNlMzg0MmEwL2Z1bGwvMi4yL3ByZXZpZXdfdGFyZ2V0%0D%0ALndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6IjU4%0D%0AYzMyOTY2ZjE2MDRkM2JiYTA4OTcwZGVjOGU4YjlhIiwidXNlcm5hbWUiOiJhODlkOWVkOTQ3ZTk0%0D%0AOTllYThjZWM0NWYyNmIxZmE2YSJ9&inIFrame=1`;
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

