async function loadLinks() {
  const container = document.getElementById("linksContainer");
  if (!container) return;

  try {
    const res = await fetch("./assets/data/links.json");
    const links = await res.json();

    container.innerHTML = "";

    links.forEach((item) => {
      const a = document.createElement("a");
      a.className = "link-card";
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";

      a.innerHTML = `
        <div class="link-card-title">${item.title}</div>
        <div class="link-card-desc">${item.description ?? ""}</div>
      `;

      container.appendChild(a);
    });
  } catch (err) {
    container.innerHTML = `<p class="subtitle">Failed to load links.</p>`;
    console.error(err);
  }
}

loadLinks();
