document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("chat-form");
    const userInput = document.getElementById("user-input");
    const messages = document.getElementById("messages");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const message = userInput.value;
        console.log("User message:", message);  // Debug: log the user message
        addMessage("User", message);

        try {
            const response = await fetch("/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: message })
            });

            const data = await response.json();
            console.log("Server response:", data);  // Debug: log the server response
            if (data.response) {
                addMessage("AI", data.response);
            } else if (data.error) {
                addMessage("Error", data.error);
            }
        } catch (error) {
            console.error("Fetch error:", error);  // Debug: log any fetch errors
            addMessage("Error", "An error occurred while communicating with the server.");
        }

        userInput.value = "";
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight;
    }
});

