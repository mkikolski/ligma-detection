const FILE_LOADED_NOTIFICATION = {"icon": "fa-circle-check", "message": "File loaded successfully", "type": "success"};
const FILE_REJECTED_NOTIFICATION = {"icon": "fa-circle-exclamation", "message": "File rejected", "type": "error"};
const ANALYSIS_STARTED_NOTIFICATION = {"icon": "fa-circle-info", "message": "Analysis started", "type": "info"};
const ANALYSIS_RESULT_NOTIFICATION = {"icon": "fa-circle-check", "message": "Analysis complete", "type": "success"};
const ANALYSIS_EXCEPTION_NOTIFICATION = {"icon": "fa-circle-exclamation", "message": "Analysis failed", "type": "error"};

const type2color = (type) => {
    const dict = {"success": "#2aa198",
    "error": "#cb4b16",
    "info": "#b58900"};
    return dict[type];
}

const invokeNotifier = (notification) => {
    if (!notification) return;
    const { icon, message, type } = notification;
    if (!icon || !message || !type) return;
    const notifier = document.getElementById('notifier');
    if (!notifier) return;
    notifier.classList.remove("hidden");
    notifier.style.visibility = "visible";
    notifier.style.opacity = 1;
    notifier.style.display = "block";
    document.getElementById("notifier").innerHTML = `<div><i class="fa ${icon}" style="color: ${type2color(type)};"></i> ${message}</div>`;
    console.log(notifier.innerHTML)
    setTimeout(() => {
        notifier.classList.add("hidden");
    }, 5000);
}