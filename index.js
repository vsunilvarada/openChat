// Client-side JavaScript
    const socket = io();
    // Handling chat message submission
    document.getElementById('chat-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const messageInput = document.getElementById('input-message');
      const message = messageInput.value.trim();
      if (message !== '') {
        socket.emit('chat message', message); // Send the message to the server
        messageInput.value = '';
      }
    });

    // Handling received chat messages
    socket.on('chat message', (message) => {
      const msg = document.createElement('div');
      msg.innerHTML = `<span> ${message} </span> <br>`;
      document.getElementById('messages').appendChild(msg);
    });