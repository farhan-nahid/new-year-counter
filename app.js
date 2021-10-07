setInterval(() => {
  const year = new Date().getFullYear() + 1;
  const nextYear = new Date(`jan 01, ${year} 00:00:00`).getTime();
  const currentDate = new Date().getTime();
  const remaining = nextYear - currentDate;
  // calculate days , hours , mins, secs,
  const days = Math.floor(remaining / (1000 * 24 * 60 * 60));
  const hours = Math.floor(
    (remaining % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((remaining % (1000 * 60)) / 1000);
  document.getElementById("counter__container").innerText =
    days + " day : " + hours + " hour : " + mins + " min : " + secs + " sec";
}, 1000);
