'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;

  function countup() {
    const d = new Date(Date.now() - startTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getSeconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`;

    setTimeout(() => {
      countup();
    }, 10);
  }

 start.addEventListener('click', () => {
   startTime = Date.now();
   countup();
 });
}