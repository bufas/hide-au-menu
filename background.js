// Register event listeners
chrome.runtime.onMessage.addListener(messageHandler);
chrome.pageAction.onClicked.addListener(clickHandler);

// Show the page icon when a message is received
function messageHandler(message, sender, sendResponse) {
	chrome.pageAction.show(sender.tab.id);
}

// Send a message to the content page when the icon is clicked
function clickHandler(tab) {
	chrome.tabs.sendMessage(tab.id, 'unused message text', function(response) {
		chrome.pageAction.setIcon({
			'tabId': tab.id,
			'path': (response == 'visible') ? 'images/minusicon38.png' : 'images/plusicon38.png'
		});
	});
}