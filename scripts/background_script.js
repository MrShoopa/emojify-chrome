
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "id": "emoji wap",
        "title": "Emoji Swap",
        "contexts": ["selection"]
    });
});

chrome.browserAction.onClicked.addListener(tab => {
    // Send a message to the active tab
    // alert('I speak bc u clicked')

    swapTextWithEmoji(tab, emojiReplacements)

    chrome.tabs.executeScript(tab.id, { code: "document.title = '🅱'" });
    chrome.browserAction.setBadgeBackgroundColor({ color: "#FFC0CB" })
});


//  --- Objects for injecting properties to swapping function   ---

emojiReplacements = {
    b: '🅱',
    horse: '🐴'
}