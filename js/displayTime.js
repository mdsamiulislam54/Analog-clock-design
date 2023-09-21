function displayTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();



  let hhh = 30 * hh + mm / 2;
  let m = 6 * mm;
  let s = 6 * ss;

  hr.style.transform = 'rotate(${hRotation}deg)';
  hr.style.transform = 'rotate(${mRotation}deg)';
  hr.style.transform = 'rotate(${sRotation}deg)';
}
