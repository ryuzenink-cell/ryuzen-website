async function loadProjects() {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  try {
    const res = await fetch("./assets/data/projects.json");
    const projects = await res.json();

    container.innerHTML = "";

    projects.forEach((p) => {
      const card = document.createElement("div");
      card.className = "project-card";

      const tagsHtml = (p.tags || [])
        .map((t) => `<span class="tag">${t}</span>`)
        .join("");

      const liveBtn = p.liveUrl
        ? `<a class="btn primary" href="${p.liveUrl}" target="_blank" rel="noopener noreferrer">Live</a>`
        : "";

      const repoBtn = p.repoUrl
        ? `<a class="btn" href="${p.repoUrl}" target="_blank" rel="noopener noreferrer">Repository</a>`
        : "";

      card.innerHTML = `
        <div class="project-top">
          <h3>${p.title}</h3>
          <span class="badge">${p.status ?? "Project"}</span>
        </div>

        <p class="subtitle">${p.description ?? ""}</p>

        <div class="tags">${tagsHtml}</div>

        <div class="project-actions">
          ${repoBtn}
          ${liveBtn}
        </div>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    container.innerHTML = `<p class="subtitle">Failed to load projects.</p>`;
    console.error(err);
  }
}


document.getElementById("btnRefreshProjects")?.addEventListener("click", loadProjects);

loadProjects();

async function loadProjects() {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  try {
    const res = await fetch("./assets/data/projects.json");
    const projects = await res.json();

    container.innerHTML = "";

    projects.forEach((p) => {
      const card = document.createElement("div");
      card.className = "project-card";

      const tagsHtml = (p.tags || [])
        .map((t) => `<span class="tag">${t}</span>`)
        .join("");

      const liveBtn = p.liveUrl
        ? `<a class="btn primary" href="${p.liveUrl}" target="_blank" rel="noopener noreferrer">Live</a>`
        : "";

      const repoBtn = p.repoUrl
        ? `<a class="btn" href="${p.repoUrl}" target="_blank" rel="noopener noreferrer">Repository</a>`
        : "";

      card.innerHTML = `
        <div class="project-top">
          <h3>${p.title}</h3>
          <span class="badge">${p.status ?? "Project"}</span>
        </div>

        <p class="subtitle">${p.description ?? ""}</p>

        <div class="tags">${tagsHtml}</div>

        <div class="project-actions">
          ${repoBtn}
          ${liveBtn}
        </div>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    container.innerHTML = `<p class="subtitle">Failed to load projects.</p>`;
    console.error(err);
  }
}

document.getElementById("btnRefreshProjects")?.addEventListener("click", loadProjects);

loadProjects();
