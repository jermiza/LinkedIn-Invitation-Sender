async function autoScroll() {
  await new Promise((resolve, reject) => {
    var totalHeight = 0;
    var distance = 100;
    var timer = setInterval(() => {
      var scrollHeight = document.body.scrollHeight;
      window.scrollBy(0, distance);
      totalHeight += distance;

      if (totalHeight >= scrollHeight) {
        clearInterval(timer);
        resolve();
      }
    }, 100);
  });
}

async function sendInvitations() {
  await autoScroll();

  let connectButtons = document.querySelectorAll('.artdeco-button--secondary');
  for (let button of connectButtons) {
    button.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
    document.querySelector('.artdeco-button--primary').click();
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('Invitations sent successfully!');
}

sendInvitations();
