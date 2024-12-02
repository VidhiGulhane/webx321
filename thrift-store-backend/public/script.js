// // search logic 
// document.getElementById('search-icon').addEventListener('click', function() {
//     this.classList.toggle('active');
    
//     const searchInput = document.getElementById('search-input');
//     searchInput.classList.toggle('active');
    
//     // Console the search input element
//     console.log('Search Input Element:', searchInput);
    
//     if (searchInput.classList.contains('active')) {
//         searchInput.focus();
//     }
// });

// // document.getElementById('termsForm').addEventListener('submit', function(e) {
// //     const agreeTerms = document.getElementById('agreeTerms');
// //     if (!agreeTerms.checked) {
// //         e.preventDefault(); // Prevent the form from submitting
// //         alert('Please agree to the terms and conditions before submitting.');
// //     }
// // });s
// Toggle Chatbot visibility
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
}

// Close Chatbot
document.getElementById('chatbot-close-btn').addEventListener('click', function() {
    document.getElementById('chatbot-container').style.display = 'none';
});

// Send Message
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatLog = document.getElementById('chat-log');
    
    if (userInput.value.trim() !== "") {
        addUserMessage(userInput.value);
        addBotMessage(getBotResponse(userInput.value));
        userInput.value = "";
    }
}

// Detect Enter Key Press
function detectEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Add User Message to Chat Log
function addUserMessage(message) {
    const chatLog = document.getElementById('chat-log');
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('user-message');
    userMessageDiv.innerHTML = `<p>${message}</p>`;
    chatLog.appendChild(userMessageDiv);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
}

// Add Bot Message to Chat Log
function addBotMessage(message) {
    const chatLog = document.getElementById('chat-log');
    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('bot-message');
    botMessageDiv.innerHTML = `<p>${message}</p>`;
    chatLog.appendChild(botMessageDiv);
    chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
}

// Get Bot Response
function getBotResponse(message) {
    const responses = {
        "hello": "Hi there! How can I assist you with?",
        "how does swapping work?": "You can list your items for swap, and if someone is interested, you can exchange items directly with them and earn through it .",
        "how do I sell?": "To sell, simply upload the details of your item, set a price, and wait for buyers to reach out.",
        "do you have any discounts?": "We often run promotions! Check our 'Offers' section for current discounts."
    };

    const lowerCaseMessage = message.toLowerCase();
    return responses[lowerCaseMessage] || "Sorry, I didn't understand that. Can you try asking in a different way?";
}
