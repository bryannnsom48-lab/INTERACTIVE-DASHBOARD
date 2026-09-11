let isSidebarOpen = false;
const menuButton = document.querySelector("#menu-button");
const sidebar = document.querySelector("#sidebar");

function renderSidebar() {
  sidebar.classList.toggle("translate-x-0", isSidebarOpen);
  sidebar.classList.toggle("-translate-x-full", !isSidebarOpen);
  menuButton.setAttribute("aria-expanded", String(isSidebarOpen));
}

function toggleSidebar() {
  isSidebarOpen = !isSidebarOpen;
  renderSidebar();
}

function closeSidebar() {
  isSidebarOpen = false;
  
  renderSidebar();
}

const sidebarNavButtons = document.querySelectorAll(".sidebar-nav-button");

sidebarNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveTab(button.dataset.tab);
    closeSidebar();
  });
});

menuButton.addEventListener("click", toggleSidebar);





let activeTab = "overview";
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");


// below, first array is for classes that exist only when the tab is active while the second is 
// for classes that exist when the tab is inactive (Initially, only the Overview tab is active)

const TAB_ACTIVE_CLASSES = ["border-slate-900", "text-slate-900"];
const TAB_INACTIVE_CLASSES = ["border-transparent", "text-slate-500"];

function renderTabs() {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === activeTab;
    button.classList.toggle(TAB_ACTIVE_CLASSES[0], isActive);
    button.classList.toggle(TAB_ACTIVE_CLASSES[1], isActive);
    button.classList.toggle(TAB_INACTIVE_CLASSES[0], !isActive);
    button.classList.toggle(TAB_INACTIVE_CLASSES[1], !isActive);
    
    button.setAttribute("aria-selected", String(isActive));
  });

  // Below, if the panel name does not match (overview) then it assigns the hidden 
  // attribute the div also note that initially, only overview panel is not hidden
  
  tabPanels.forEach((panel) => {
    panel.hidden = panel.dataset.panel !== activeTab;
  });
}

function setActiveTab(tabName) {
  activeTab = tabName;
  renderTabs();
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});



let isNotificationsOpen = false;

const notificationsWrapper = document.querySelector("#notifications-wrapper");
const notificationsButton = document.querySelector("#notifications-button");
const notificationsDropdown = document.querySelector("#notifications-dropdown");

function renderNotifications() {
  notificationsDropdown.hidden = !isNotificationsOpen;
  notificationsButton.setAttribute("aria-expanded", String(isNotificationsOpen));
}

function toggleNotifications() {
  isNotificationsOpen = !isNotificationsOpen;
  renderNotifications();
}

function closeNotifications() {
  isNotificationsOpen = false;
  renderNotifications();
}

notificationsButton.addEventListener("click", toggleNotifications);

// Closes the notifications card whenever a click happens outside the dropdown entirely
document.addEventListener("click", (event) => {
  if (isNotificationsOpen && !notificationsWrapper.contains(event.target)) {
    closeNotifications();
  }
});



let isModalOpen = false;

const addTaskButton = document.querySelector("#add-task-button");
const modalBackdrop = document.querySelector("#modal-backdrop");
const modalSaveButton = document.querySelector("#modal-save-button");
const modalCloseButton = document.querySelector("#modal-close-button");
const modalCancelButton = document.querySelector("#modal-cancel-button");

function renderModal() {
  modalBackdrop.classList.toggle("hidden", !isModalOpen);
  modalBackdrop.classList.toggle("flex", isModalOpen);
}

function openModal() {
  isModalOpen = true;
  renderModal();
  modalCloseButton.focus();
}

function closeModal() {
  isModalOpen = false;
  renderModal();
  addTaskButton.focus();
}

addTaskButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);
modalCancelButton.addEventListener("click", closeModal);
modalSaveButton.addEventListener("click", closeModal);


modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isModalOpen) closeModal();
});



const activities = [
  { text: "Completed Mathematics assignment" },
  { text: "Read 20 pages of a book" },
  { text: "Completed JavaScript practice" },
  { text: "Worked on Pulse dashboard" },
];

let searchQuery = "";

const activityListEl = document.querySelector("#activity-list");
const searchInput = document.querySelector("#search");

// Builds the list from data instead of static HTML — this is a
// fullfilment of the "dynamic content" requirement.
function renderActivityList() {
  activities.forEach((activity) => {
    const item = document.createElement("li");
    item.textContent = activity.text;
    item.className = "p-3 bg-white border rounded-lg";
    item.dataset.activityText = activity.text.toLowerCase();
    activityListEl.appendChild(item);
  });
}

// Filters by toggling `hidden` on items already in the DOM — nothing
// is ever removed, so clearing the search restores everything.
function renderSearchResults() {
  const items = activityListEl.querySelectorAll("li");
  items.forEach((item) => {
    const matches = item.dataset.activityText.includes(searchQuery.toLowerCase());
    item.hidden = !matches;
  });
}

function handleSearchInput(event) {
  searchQuery = event.target.value;
  renderSearchResults();
}

searchInput.addEventListener("input", handleSearchInput);


// INITIAL RENDER — sync every part of the UI to its state on load
renderSidebar();
renderTabs();
renderNotifications();
renderModal();
renderActivityList();