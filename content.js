// Send a message to the background page to show page icon
chrome.runtime.sendMessage('show page action');

// Add event listener to incomming messages
chrome.runtime.onMessage.addListener(messageHandler);

// Toggle the menu when a message is received
function messageHandler(message, sender, sendResponse) {
	$('#menu').toggle();
	// Respond with the current state of menu
	sendResponse(($('#menu').is(":visible")) ? 'visible' : 'hidden');
}

// Toggle off the menu initially
$('#menu').toggle();
