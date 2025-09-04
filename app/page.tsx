<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Spider Season Poet Weaver</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      overflow-x: hidden;
      position: relative;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    /* Night sky background */
    .night-sky {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #050a1c;
      overflow: hidden;
      z-index: -1;
    }

    /* Pixelation effect */
    .pixelation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhJREFUeNpiYGBgePz//38GRhABAgABBgBFTAbfCBNE2AAAAABJRU5ErkJggg==");
      background-repeat: repeat;
      opacity: 0.3;
    }

    /* Regular stars */
    .stars {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .star {
      position: absolute;
      background-color: #fff;
      border-radius: 50%;
      opacity: 0.7;
      animation: twinkle 4s infinite;
    }

    /* Spider constellation */
    .constellation {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 200px;
    }

    .constellation-star {
      position: absolute;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.4);
      animation: pulse 3s infinite;
    }

    .constellation-line {
      position: absolute;
      background-color: rgba(255, 255, 255, 0.2);
      transform-origin: 0 0;
    }

    /* Main content styles */
    .content {
      position: relative;
      z-index: 1;
      color: white;
      min-height: 100vh;
    }

    /* Chat interface styles based on your original code */
    .chat-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .message {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
      padding: 15px;
      border-radius: 10px;
    }

    .user-message {
      background-color: rgba(0, 0, 0, 0.6);
      margin-left: 50px;
    }

    .bot-message {
      background-color: rgba(50, 50, 100, 0.6);
      margin-right: 50px;
    }

    .input-container {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 20px;
      background: linear-gradient(to top, rgba(5, 10, 28, 0.9), rgba(5, 10, 28, 0.5), transparent);
    }

    .input-form {
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      position: relative;
    }

    .input-area {
      width: 100%;
      padding: 12px 50px 12px 15px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 25px;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      resize: none;
      font-size: 16px;
    }

    .send-button {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      background: #553a99;
      border: none;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Keyframe animations */
    @keyframes twinkle {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 0.3; }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.1); }
    }
  </style>
</head>
<body>
  <!-- Night sky background with spider constellation -->
  <div class="night-sky">
    <div class="pixelation"></div>
    <div class="stars" id="stars"></div>
    <div class="constellation">
      <!-- Spider body -->
      <div class="constellation-star" style="width: 12px; height: 12px; left: 100px; top: 100px;"></div>
      
      <!-- Spider head -->
      <div class="constellation-star" style="width: 8px; height: 8px; left: 100px; top: 70px;"></div>
      <div class="constellation-line" style="width: 30px; height: 2px; left: 100px; top: 100px; transform: rotate(-90deg);"></div>
      
      <!-- Legs pairs -->
      <!-- Front legs -->
      <div class="constellation-star" style="width: 6px; height: 6px; left: 130px; top: 60px;"></div>
      <div class="constellation-line" style="width: 40px; height: 1px; left: 100px; top: 70px; transform: rotate(-20deg);"></div>
      
      <div class="constellation-star" style="width: 6px; height: 6px; left: 70px; top: 60px;"></div>
      <div class="constellation-line" style="width: 40px; height: 1px; left: 100px; top: 70px; transform: rotate(200deg);"></div>
      
      <!-- Middle front legs -->
      <div class="constellation-star" style="width: 6px; height: 6px; left: 140px; top: 90px;"></div>
      <div class="constellation-line" style="width: 45px; height: 1px; left: 100px; top: 100px; transform: rotate(-15deg);"></div>
      
      <div class="constellation-star" style="width: 6px; height: 6px; left: 60px; top: 90px;"></div>
      <div class="constellation-line" style="width: 45px; height: 1px; left: 100px; top: 100px; transform: rotate(195deg);"></div>
      
      <!-- Middle back legs -->
      <div class="constellation-star" style="width: 6px; height: 6px; left: 140px; top: 120px;"></div>
      <div class="constellation-line" style="width: 45px; height: 1px; left: 100px; top: 100px; transform: rotate(25deg);"></div>
      
      <div class="constellation-star" style="width: 6px; height: 6px; left: 60px; top: 120px;"></div>
      <div class="constellation-line" style="width: 45px; height: 1px; left: 100px; top: 100px; transform: rotate(155deg);"></div>
      
      <!-- Back legs -->
      <div class="constellation-star" style="width: 6px; height: 6px; left: 130px; top: 150px;"></div>
      <div class="constellation-line" style="width: 40px; height: 1px; left: 100px; top: 100px; transform: rotate(40deg);"></div>
      
      <div class="constellation-star" style="width: 6px; height: 6px; left: 70px; top: 150px;"></div>
      <div class="constellation-line" style="width: 40px; height: 1px; left: 100px; top: 100px; transform: rotate(140deg);"></div>
      
      <!-- Abdomen -->
      <div class="constellation-star" style="width: 10px; height: 10px; left: 100px; top: 130px;"></div>
      <div class="constellation-line" style="width: 30px; height: 2px; left: 100px; top: 100px; transform: rotate(90deg);"></div>
    </div>
  </div>

  <!-- Content area -->
  <div class="content">
    <div class="chat-container" id="chat-container">
      <!-- Messages will be appended here via JavaScript -->
      <div class="message bot-message">
        <div>Hi, I'm spider season. I bend language to signal new forms in poem and verse.</div>
      </div>
    </div>

    <div class="input-container">
      <div class="input-form">
        <textarea class="input-area" placeholder="Send a message..." rows="1" id="message-input"></textarea>
        <button class="send-button" id="send-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <script>
    // Generate random stars
    const starsContainer = document.getElementById('stars');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random position
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 2 + 1;
      
      // Random delay for the twinkle animation
      const delay = Math.random() * 4;
      
      star.style.top = `${top}%`;
      star.style.left = `${left}%`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDelay = `${delay}s`;
      
      starsContainer.appendChild(star);
    }

    // Simple chat functionality for demo purposes
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatContainer = document.getElementById('chat-container');
    
    function addMessage(text, isUser) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
      messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
      messageDiv.innerText = text;
      chatContainer.appendChild(messageDiv);
      
      // Scroll to bottom
      window.scrollTo(0, document.body.scrollHeight);
    }
    
    sendButton.addEventListener('click', () => {
      const message = messageInput.value.trim();
      if (message) {
        addMessage(message, true);
        messageInput.value = '';
        
        // Simulate bot response (in a real app, this would be your API call)
        setTimeout(() => {
          addMessage("I'm a poetry chatbot with a spider constellation in the night sky. Can I spin you a verse or 8?", false);
        }, 1000);
      }
    });
    
    messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendButton.click();
      }
    });

    // Auto-resize textarea
    messageInput.addEventListener('input', () => {
      messageInput.style.height = 'auto';
      messageInput.style.height = messageInput.scrollHeight + 'px';
    });
  </script>
</body>
</html>
