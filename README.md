# LinkedIn Connection Automation

## autoScroll Function

**Description:** Scrolls down the page in increments until the entire page content is loaded.

**Usage:** Ensures all elements on the page are available for interaction before sending invitations.

```javascript
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
```

## sendInvitations Function

**Description:** Automates the process of sending connection invitations on LinkedIn.

**Usage:** Finds and clicks on connect buttons, waits for a brief interval, and confirms the connection request.

```javascript
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
```

## Execution

**Description:** Initiates the automation process by calling `sendInvitations`.

**Usage:** Executes the automation sequence upon loading the LinkedIn page.

```javascript
sendInvitations();
```

## How to Use
 ### Open browser console, paste script and hit enter

 ```javascript
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
```
## Notes

- This script is designed for educational purposes and should be used responsibly and in accordance with LinkedIn's terms of service.
- Adjust intervals (`setTimeout` values) based on your network conditions and LinkedIn's responsiveness to avoid being rate-limited or flagged for suspicious activity.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---
