function notify(message) {
  const notificationDiv = document.getElementById('notification');
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';
  notificationDiv.addEventListener('click', hideNotification);

  function hideNotification({target}) {
    target.style.display = 'none';
  }
}