const stories = [
  {
    id: "open-weight",
    title: "Open-weight AI companies are becoming Silicon Valley’s hottest acquisition targets",
    summary:
      "Reported deal activity around Hugging Face is putting a spotlight on the strategic value of open models, distribution, and inference infrastructure.",
    source: "TechCrunch",
    sourceClass: "source-techcrunch",
    initials: "TC",
    date: "Aug 28",
    category: "business",
    url: "https://techcrunch.com/2026/08/28/open-weight-ai-companies-are-the-valleys-hottest-acquisition-targets/",
    angle:
      "The next AI land grab may be less about training the biggest model — and more about owning the ecosystem where models are shared, tuned, and deployed.",
    hook: "The most valuable layer in AI may not be the model.",
    hashtags: "#ArtificialIntelligence #OpenSource #AI"
  },
  {
    id: "self-improving",
    title: "Anthropic research offers an early look at self-improving AI",
    summary:
      "Automated research systems improved performance across ten alignment benchmarks without reducing overall model performance.",
    source: "TechCrunch",
    sourceClass: "source-techcrunch",
    initials: "TC",
    date: "Aug 28",
    category: "research",
    url: "https://techcrunch.com/2026/08/28/an-anthropic-researcher-just-gave-us-a-peek-at-self-improving-ai/",
    angle:
      "AI helping improve AI is moving from a theoretical idea toward a practical research workflow — with major implications for speed, oversight, and safety.",
    hook: "AI systems are starting to help improve other AI systems.",
    hashtags: "#AIResearch #AISafety #MachineLearning"
  },
  {
    id: "hardware-standard",
    title: "Anthropic previews a shared standard for AI-controlled hardware",
    summary:
      "The Model Hardware Standard aims to let agents safely operate scientific and manufacturing equipment, from microscopes to robotic arms.",
    source: "Anthropic",
    sourceClass: "source-anthropic",
    initials: "AN",
    date: "Aug 27",
    category: "research",
    url: "https://www.anthropic.com/news/model-hardware-standard-research-preview",
    angle:
      "Agentic AI is moving beyond browsers and code editors. A common hardware layer could make physical-world automation more portable and trustworthy.",
    hook: "AI agents are moving from software into the physical world.",
    hashtags: "#AgenticAI #Robotics #Innovation"
  },
  {
    id: "cyber-letter",
    title: "AI leaders unite around a collective response to cyber threats",
    summary:
      "More than 100 companies, including OpenAI, Anthropic, Google, and Microsoft, signed a call for stronger collaboration on AI-enabled cyber defense.",
    source: "TechCrunch",
    sourceClass: "source-techcrunch",
    initials: "TC",
    date: "Aug 27",
    category: "policy",
    url: "https://techcrunch.com/2026/08/27/openai-anthropic-google-and-100-other-companies-call-for-action-to-defend-against-rogue-ai/",
    angle:
      "Competitors agreeing on a shared threat assessment is itself a signal: AI security is becoming an ecosystem problem, not a problem any one company can solve.",
    hook: "AI’s biggest rivals agree on at least one thing: cyber defense cannot wait.",
    hashtags: "#Cybersecurity #AI #ResponsibleAI"
  },
  {
    id: "defenders-window",
    title: "OpenAI says organizations have a narrowing window to upgrade cyber defense",
    summary:
      "OpenAI outlined steps organizations can take as increasingly capable AI changes the speed and scale of the cybersecurity landscape.",
    source: "OpenAI",
    sourceClass: "source-openai",
    initials: "OA",
    date: "Aug 17",
    category: "policy",
    url: "https://openai.com/index/the-defenders-window/",
    angle:
      "The practical takeaway for leaders is straightforward: AI readiness now includes identity, software supply chains, incident response, and faster defensive automation.",
    hook: "The AI conversation is quickly becoming a cybersecurity conversation.",
    hashtags: "#AICybersecurity #Leadership #Technology"
  },
  {
    id: "gpt-56",
    title: "GPT-5.6 pushes the frontier on capability and cost efficiency",
    summary:
      "OpenAI’s latest flagship model focuses on stronger performance per dollar, deeper reasoning, and more capability for difficult professional work.",
    source: "OpenAI",
    sourceClass: "source-openai",
    initials: "OA",
    date: "Jul 9",
    category: "models",
    url: "https://openai.com/index/gpt-5-6/",
    angle:
      "As frontier intelligence gets cheaper, the competitive advantage shifts from simply accessing a model to redesigning workflows around what it can do.",
    hook: "Cheaper intelligence changes what is worth automating.",
    hashtags: "#GPT56 #GenerativeAI #FutureOfWork"
  }
];

const state = {
  activeView: "briefing",
  activeFilter: "all",
  activeJobFilter: "all",
  search: "",
  saved: new Set(JSON.parse(localStorage.getItem("signal-saved") || "[]")),
  currentStory: stories[0],
  platform: "linkedin",
  tone: "insightful",
  jobs: [],
  jobsLoaded: false
};

const resumeProfile = {
  skills: {
    "Java": 11,
    "Spring Boot": 13,
    "Python": 11,
    "JavaScript": 6,
    "TypeScript": 7,
    "React": 9,
    "Angular": 8,
    "REST API": 8,
    "Microservices": 11,
    "PostgreSQL": 9,
    "MySQL": 6,
    "Redis": 8,
    "AWS": 9,
    "Docker": 8,
    "Kubernetes": 9,
    "Jenkins": 6,
    "CI/CD": 7,
    "Ansible": 7,
    "TensorFlow": 7,
    "Machine Learning": 8,
    "NLP": 7,
    "LangChain": 6,
    "FastAPI": 8,
    "Flask": 7,
    "Distributed Systems": 9
  },
  titleSignals: [
    "software engineer",
    "backend engineer",
    "full stack",
    "full-stack",
    "product engineer",
    "platform engineer",
    "cloud engineer",
    "ai engineer",
    "machine learning engineer"
  ],
  excludedTitles: [
    "qa ",
    "tester",
    "salesforce",
    "android",
    "ios ",
    "manager",
    "director",
    "principal",
    "architect",
    "solutions engineer",
    "sales engineer"
  ]
};

const newsGrid = document.querySelector("#news-grid");
const emptyState = document.querySelector("#empty-state");
const savedCount = document.querySelector("#saved-count");
const drawer = document.querySelector("#post-drawer");
const drawerBackdrop = document.querySelector("#drawer-backdrop");
const postEditor = document.querySelector("#post-editor");
const characterCount = document.querySelector("#character-count");
const copyButton = document.querySelector("#copy-button");
const drawerStory = document.querySelector("#drawer-story");
const toast = document.querySelector("#toast");
const spotlight = document.querySelector("#spotlight");
const briefingView = document.querySelector("#briefing-view");
const jobsView = document.querySelector("#jobs-view");
const dsaView = document.querySelector("#dsa-view");
const jobList = document.querySelector("#job-list");
const jobEmpty = document.querySelector("#job-empty");
const jobCount = document.querySelector("#job-count");
const jobsUpdated = document.querySelector("#jobs-updated");
const searchInput = document.querySelector("#search-input");

function createNewsCard(story) {
  const saved = state.saved.has(story.id);
  return `
    <article class="news-card" data-id="${story.id}">
      <div class="story-meta">
        <span class="source-badge ${story.sourceClass}">${story.initials}</span>
        <span>${story.source}</span>
        <i></i>
        <span>${story.date}</span>
        <span class="card-topic">${story.category}</span>
      </div>
      <h3>${story.title}</h3>
      <p>${story.summary}</p>
      <div class="card-actions">
        <button class="primary-button create-post" data-id="${story.id}">
          Create post
          <svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        <a class="source-link" href="${story.url}" target="_blank" rel="noreferrer">Source ↗</a>
        <button class="bookmark-button ${saved ? "saved" : ""}" data-id="${story.id}" aria-label="${saved ? "Unsave" : "Save"} story">
          <svg viewBox="0 0 24 24"><path d="M6.5 5.5A1.5 1.5 0 0 1 8 4h8a1.5 1.5 0 0 1 1.5 1.5V20L12 16.5 6.5 20V5.5Z"/></svg>
        </button>
      </div>
    </article>
  `;
}

function filteredStories() {
  const query = state.search.toLowerCase().trim();
  return stories.filter((story) => {
    const categoryMatch =
      state.activeFilter === "all"
        ? true
        : state.activeFilter === "saved"
          ? state.saved.has(story.id)
          : story.category === state.activeFilter;
    const searchMatch =
      !query ||
      `${story.title} ${story.summary} ${story.source} ${story.category}`
        .toLowerCase()
        .includes(query);
    return categoryMatch && searchMatch;
  });
}

function renderStories() {
  const visibleStories = filteredStories();
  newsGrid.innerHTML = visibleStories.map(createNewsCard).join("");
  emptyState.classList.toggle("hidden", visibleStories.length > 0);
  spotlight.classList.toggle(
    "hidden",
    state.activeFilter === "saved" || Boolean(state.search)
  );
  savedCount.textContent = state.saved.size;
  syncSpotlightBookmark();
}

function syncSpotlightBookmark() {
  const button = spotlight.querySelector(".bookmark-button");
  const saved = state.saved.has("open-weight");
  button.classList.toggle("saved", saved);
  button.setAttribute("aria-label", `${saved ? "Unsave" : "Save"} story`);
}

function saveStory(id) {
  if (state.saved.has(id)) {
    state.saved.delete(id);
  } else {
    state.saved.add(id);
  }
  localStorage.setItem("signal-saved", JSON.stringify([...state.saved]));
  renderStories();
}

function postDraft(story, platform, tone) {
  const linkedin = {
    insightful: `${story.hook}

${story.summary}

What stands out to me: ${story.angle}

The organizations that get the most value from this shift won’t just follow the news. They’ll ask what it changes about their products, teams, and decisions.

What’s your take?

${story.hashtags}`,
    bold: `${story.hook}

This is a bigger shift than it looks.

${story.angle}

The winners in the next phase of AI won’t be the teams that talk about transformation. They’ll be the ones rebuilding real workflows while everyone else is still debating the hype.

${story.hashtags}`,
    concise: `${story.hook}

${story.angle}

My takeaway: access to powerful AI is becoming table stakes. How thoughtfully we apply it is where the advantage begins.

${story.hashtags}`
  };

  const x = {
    insightful: `${story.hook}

${story.angle}

The advantage is shifting from access to execution.

${story.hashtags.split(" ").slice(0, 2).join(" ")}`,
    bold: `${story.hook}

${story.angle}

This is the signal. Everything else is noise.`,
    concise: `${story.hook}

${story.angle}

${story.hashtags.split(" ")[0]}`
  };

  return platform === "linkedin" ? linkedin[tone] : x[tone];
}

function openDrawer(id) {
  const story = stories.find((item) => item.id === id);
  if (!story) return;
  state.currentStory = story;
  drawerStory.innerHTML = `<span>Based on this story</span><p>${story.title}</p>`;
  updateDraft();
  drawer.classList.add("open");
  drawerBackdrop.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  window.setTimeout(() => postEditor.focus(), 280);
}

function closeDrawer() {
  drawer.classList.remove("open");
  drawerBackdrop.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function updateDraft() {
  postEditor.value = postDraft(
    state.currentStory,
    state.platform,
    state.tone
  );
  updateCharacterCount();
  copyButton.querySelector("span").textContent =
    `Copy ${state.platform === "linkedin" ? "LinkedIn" : "X"} post`;
}

function updateCharacterCount() {
  const count = postEditor.value.length;
  const limit = state.platform === "x" ? 280 : 3000;
  characterCount.textContent = `${count} / ${limit} characters`;
  characterCount.style.color = count > limit ? "#d94220" : "";
}

function showToast(message) {
  toast.querySelector("p").textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function stripHtml(value = "") {
  const node = document.createElement("div");
  node.innerHTML = value;
  return node.textContent || "";
}

function hoursAgo(dateString) {
  const hours = Math.max(0, (Date.now() - new Date(dateString).getTime()) / 36e5);
  if (hours < 1) return "Just posted";
  return `${Math.floor(hours)}h ago`;
}

function companyInitials(name = "") {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function scoreJob(job) {
  const title = (job.jobTitle || "").toLowerCase();
  const text = `${job.jobTitle || ""} ${stripHtml(job.jobDescription || "")} ${job.jobExcerpt || ""}`.toLowerCase();

  if (resumeProfile.excludedTitles.some((term) => title.includes(term))) return null;
  if (!resumeProfile.titleSignals.some((term) => title.includes(term))) return null;

  const matchedSkills = Object.entries(resumeProfile.skills)
    .filter(([skill]) => text.includes(skill.toLowerCase()))
    .sort((a, b) => b[1] - a[1]);

  const skillScore = matchedSkills.reduce((total, [, weight]) => total + weight, 0);
  const titleScore = title.includes("software engineer") ? 18
    : title.includes("backend") || title.includes("full stack") || title.includes("full-stack") ? 20
    : title.includes("ai engineer") || title.includes("machine learning") ? 17
    : 14;
  const isSenior = /\bsenior\b|\bstaff\b|\blead\b/.test(title)
    || (job.jobLevel || "").toLowerCase().includes("senior");
  const seniorPenalty = isSenior ? 13 : 0;
  const score = Math.min(96, Math.max(58, 54 + Math.round(skillScore * 0.72) + titleScore - seniorPenalty));

  if (matchedSkills.length < 2 || score < 68) return null;

  return {
    ...job,
    score,
    matchedSkills: matchedSkills.slice(0, 5).map(([skill]) => skill),
    seniority: isSenior ? "stretch" : "mid"
  };
}

function createJobCard(job) {
  const logo = job.companyLogo
    ? `<img src="${job.companyLogo}" alt="" loading="lazy" onerror="this.remove();this.parentElement.textContent='${companyInitials(job.companyName)}'">`
    : companyInitials(job.companyName);
  return `
    <article class="job-card">
      <div class="company-logo">${logo}</div>
      <div class="job-main">
        <div class="job-topline">
          <span class="job-company">${job.companyName}</span>
          <span class="new-badge">${hoursAgo(job.pubDate)}</span>
        </div>
        <h3>${job.jobTitle}</h3>
        <div class="job-meta">
          <span>
            <svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            ${job.jobGeo || "Remote"}
          </span>
          <span>
            <svg viewBox="0 0 24 24"><path d="M8 7V5.8A1.8 1.8 0 0 1 9.8 4h4.4A1.8 1.8 0 0 1 16 5.8V7M5.5 7h13A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-9A1.5 1.5 0 0 1 5.5 7Z"/></svg>
            ${(job.jobType || ["Full-Time"]).join(" · ")}
          </span>
          <span>${job.seniority === "stretch" ? "Stretch role" : "Experience aligned"}</span>
        </div>
        <div class="match-reasons">
          ${job.matchedSkills.map((skill) => `<span>${skill}</span>`).join("")}
        </div>
      </div>
      <div class="job-actions">
        <div class="match-score" title="${job.score}% resume match">
          <div class="score-ring" style="--score:${job.score}%"></div>
          <strong>${job.score}%</strong>
          <span>resume match</span>
        </div>
        <a class="apply-button" href="${job.url}" target="_blank" rel="noreferrer">
          View job
          <svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </div>
    </article>
  `;
}

function filteredJobs() {
  const query = state.search.toLowerCase().trim();
  return state.jobs.filter((job) => {
    const filterMatch = state.activeJobFilter === "all"
      || (state.activeJobFilter === "best" && job.score >= 85)
      || (state.activeJobFilter === "mid" && job.seniority === "mid");
    const searchMatch = !query
      || `${job.jobTitle} ${job.companyName} ${job.jobGeo} ${job.matchedSkills.join(" ")}`
        .toLowerCase()
        .includes(query);
    return filterMatch && searchMatch;
  });
}

function renderJobs() {
  const visibleJobs = filteredJobs();
  jobList.innerHTML = visibleJobs.map(createJobCard).join("");
  jobList.classList.toggle("hidden", visibleJobs.length === 0);
  jobEmpty.classList.toggle("hidden", visibleJobs.length > 0 || !state.jobsLoaded);
  jobCount.textContent = visibleJobs.length;
}

async function loadJobs() {
  const refreshButton = document.querySelector("#refresh-jobs");
  refreshButton.classList.add("loading");
  jobEmpty.classList.add("hidden");
  jobList.classList.remove("hidden");
  jobList.innerHTML = `<div class="job-loading"><span></span><p>Scanning fresh roles against your resume…</p></div>`;

  try {
    const response = await fetch("https://jobicy.com/api/v2/remote-jobs?count=50&industry=engineering");
    if (!response.ok) throw new Error("Job feed unavailable");
    const data = await response.json();
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    state.jobs = (data.jobs || [])
      .filter((job) => {
        const age = now - new Date(job.pubDate).getTime();
        return age >= -5 * 60 * 1000 && age <= oneDay;
      })
      .map(scoreJob)
      .filter(Boolean)
      .sort((a, b) => b.score - a.score || new Date(b.pubDate) - new Date(a.pubDate));
    jobsUpdated.textContent = `Live feed checked ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
  } catch (error) {
    state.jobs = [];
    jobsUpdated.textContent = "Couldn’t reach the live feed · Try refresh";
  } finally {
    state.jobsLoaded = true;
    refreshButton.classList.remove("loading");
    renderJobs();
  }
}

function setView(view) {
  state.activeView = view;
  const isJobs = view === "jobs";
  const isDsa = view === "dsa";
  jobsView.classList.toggle("hidden", !isJobs);
  dsaView.classList.toggle("hidden", !isDsa);
  briefingView.classList.toggle("hidden", isJobs || isDsa);
  searchInput.value = "";
  state.search = "";
  searchInput.placeholder = isJobs
    ? "Search your matched jobs"
    : isDsa
      ? "Search DSA questions"
      : "Search today’s AI news";
  searchInput.setAttribute("aria-label", isJobs ? "Search matched jobs" : isDsa ? "Search DSA questions" : "Search news");
  document.querySelector(".last-updated").innerHTML = isJobs
    ? `<i></i> Live job feed`
    : isDsa
      ? `<i></i> Interview mode`
      : `<i></i> Updated Aug 29`;
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (isJobs && !state.jobsLoaded) loadJobs();
  if (isDsa && window.initializeDsa) window.initializeDsa();
  if (!isJobs && !isDsa) renderStories();
}

async function copyPost() {
  try {
    await navigator.clipboard.writeText(postEditor.value);
    showToast("Post copied to clipboard");
  } catch {
    postEditor.select();
    document.execCommand("copy");
    showToast("Post copied to clipboard");
  }
}

document.addEventListener("click", (event) => {
  const createButton = event.target.closest(".create-post");
  const bookmarkButton = event.target.closest(".bookmark-button");
  const filterButton = event.target.closest(".filter-pill");
  const platformButton = event.target.closest(".platform-tab");
  const toneButton = event.target.closest(".tone-button");
  const navItem = event.target.closest(".nav-item");
  const jobFilter = event.target.closest(".job-filter");

  if (createButton) openDrawer(createButton.dataset.id);
  if (bookmarkButton) saveStory(bookmarkButton.dataset.id);

  if (filterButton) {
    document.querySelectorAll(".filter-pill").forEach((button) => button.classList.remove("active"));
    filterButton.classList.add("active");
    state.activeFilter = filterButton.dataset.filter;
    renderStories();
  }

  if (platformButton) {
    document.querySelectorAll(".platform-tab").forEach((button) => button.classList.remove("active"));
    platformButton.classList.add("active");
    state.platform = platformButton.dataset.platform;
    updateDraft();
  }

  if (toneButton) {
    document.querySelectorAll(".tone-button").forEach((button) => button.classList.remove("active"));
    toneButton.classList.add("active");
    state.tone = toneButton.dataset.tone;
    updateDraft();
  }

  if (jobFilter) {
    document.querySelectorAll(".job-filter").forEach((button) => button.classList.remove("active"));
    jobFilter.classList.add("active");
    state.activeJobFilter = jobFilter.dataset.jobFilter;
    renderJobs();
  }

  if (navItem) {
    document.querySelectorAll(".nav-item").forEach((button) => button.classList.remove("active"));
    navItem.classList.add("active");
    const view = navItem.dataset.view;
    state.activeFilter = view === "saved" ? "saved" : "all";
    document.querySelectorAll(".filter-pill").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === "all");
    });
    document.querySelector(".sidebar").classList.remove("open");
    setView(view === "jobs" ? "jobs" : view === "dsa" ? "dsa" : "briefing");
  }
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  if (state.activeView === "jobs") renderJobs();
  else if (state.activeView === "dsa" && window.filterDsaQuestions) window.filterDsaQuestions(state.search);
  else renderStories();
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.target.value = "";
    state.search = "";
    if (state.activeView === "jobs") renderJobs();
    else if (state.activeView === "dsa" && window.filterDsaQuestions) window.filterDsaQuestions("");
    else renderStories();
    event.target.blur();
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.querySelector("#search-input").focus();
  }
  if (event.key === "Escape" && drawer.classList.contains("open")) {
    closeDrawer();
  }
});

document.querySelector("#close-drawer").addEventListener("click", closeDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);
postEditor.addEventListener("input", updateCharacterCount);
copyButton.addEventListener("click", copyPost);

document.querySelector("#regenerate-button").addEventListener("click", () => {
  updateDraft();
  showToast("Fresh draft generated");
});

document.querySelector("#theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("signal-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

function setSidebarCollapsed(collapsed) {
  document.body.classList.toggle("sidebar-collapsed", collapsed);
  document.querySelector(".sidebar").classList.toggle("open", !collapsed && window.innerWidth <= 800);
  localStorage.setItem("signal-sidebar-collapsed", collapsed ? "true" : "false");
}

document.querySelector("#mobile-menu").addEventListener("click", () => {
  if (window.innerWidth <= 800) {
    document.querySelector(".sidebar").classList.toggle("open");
    return;
  }
  setSidebarCollapsed(!document.body.classList.contains("sidebar-collapsed"));
});

document.querySelector("#sidebar-close").addEventListener("click", () => {
  if (window.innerWidth <= 800) document.querySelector(".sidebar").classList.remove("open");
  else setSidebarCollapsed(true);
});

document.querySelector("#refresh-jobs").addEventListener("click", loadJobs);

if (localStorage.getItem("signal-theme") === "dark") {
  document.body.classList.add("dark");
}

if (localStorage.getItem("signal-sidebar-collapsed") === "true" && window.innerWidth > 800) {
  document.body.classList.add("sidebar-collapsed");
}

renderStories();
