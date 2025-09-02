// General

// Set prefered homepage
user_pref("browser.startup.homepage", "https://www.aliciabytes.com/");

// Don't close the browser window when you close the last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);
// Never show the bookmarks toolbar
user_pref("browser.toolbars.bookmarks.visibility", "never");
// Don't show a warning when opening about:config
user_pref("browser.aboutConfig.showWarning", false);


// Startup

// Restore session on startup
user_pref("browser.startup.page", 3);
// Use a blank new tab page
user_pref("browser.newtabpage.enabled", false);
// Disable sponsored content on Firefox Home
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
// Clear default topsites
user_pref("browser.newtabpage.activity-stream.default.sites", "");


// Telemetry

// Disable Firefox Home telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// Diable crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

// Disable health reports
user_pref("datareporting.healthreport.uploadEnabled", false);

// Disable more telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");


// Security

// Disable http background check request
user_pref("dom.security.https_only_mode_send_http_background_request", false);


// Privacy

// Enable container tabs
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);


// Miscellaneous

// Disable middle click on new tab button opening URLs or searches using clipboard
user_pref("browser.tabs.searchclipboardfor.middleclick", false);


// Downloads

// Always ask where to download
user_pref("browser.download.useDownloadDir", false);
// Don't open downloads panel on every download
user_pref("browser.download.alwaysOpenPanel", false);
