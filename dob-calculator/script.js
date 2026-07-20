const dobInput = document.getElementById("dob");
const result = document.getElementById("result");

let timer;

function calculateAge() {
  const value = dobInput.value.trim();

  if (!value) {
    result.innerText = "Enter DOB like 2000-05-10";
    return;
  }

  // Safe local date
  const [y, m, d] = value.split("-");
  const birthDate = new Date(y, m - 1, d);

  if (isNaN(birthDate.getTime())) {
    result.innerText = "Wrong format! Use YYYY-MM-DD";
    return;
  }

  clearInterval(timer);

  function update() {
    const now = new Date();
    let diff = now - birthDate;

    let sec = Math.floor(diff / 1000);
    let min = Math.floor(sec / 60);
    let hr = Math.floor(min / 60);
    let day = Math.floor(hr / 24);

    let year = Math.floor(day / 365.25);
    day %= 365.25;

    let month = Math.floor(day / 30.44);
    day = Math.floor(day % 30.44);

    hr %= 24;
    min %= 60;
    sec %= 60;

    result.innerHTML =
      `Your age is:<br>
      ${year} Years, ${month} Months, ${day} Days<br>
      ${hr} Hours, ${min} Minutes, ${sec} Seconds`;
  }

  update();
  timer = setInterval(update, 1000);
}
