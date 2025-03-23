const ONE_MINUTE_IN_MILLISECONDS = 60 * 1000;

const formatDateTime = (date) => {
  const dateOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('en-US', dateOptions);

  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
  const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

  return `${formattedDate} &nbsp;&nbsp; ${formattedTime}`;
};

const updateDateTime = () => {
  const now = new Date();
  const dateEl = document.querySelector('.date');
  dateEl.innerHTML = formatDateTime(now);
};

document.addEventListener('DOMContentLoaded', () => {
  updateDateTime();
  setInterval(updateDateTime, ONE_MINUTE_IN_MILLISECONDS);
});
