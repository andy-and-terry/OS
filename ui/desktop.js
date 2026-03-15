export function loadDesktop() {
    console.log("Loading desktop...");
    const desktopApps = document.getElementById('desktop-apps');

    const app1Icon = createDesktopIcon("App 1", "app1");
    const app2Icon = createDesktopIcon("App 2", "app2");

    desktopApps.appendChild(app1Icon);
    desktopApps.appendChild(app2Icon);
}

// Helper function to create a desktop icon
function createDesktopIcon(appName, appId) {
    const appIcon = document.createElement('div');
    appIcon.className = "desktop-icon";
    appIcon.innerText = appName;
    appIcon.addEventListener('click', () => {
        console.log(`${appName} clicked`);
        openApp(appId);
    });
    return appIcon;
}

// Open a mock app (just log for now)
function openApp(appId) {
    console.log(`Opening ${appId}...`);
}
