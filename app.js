document.querySelector("video").playbackRate = 2;

const form = document.querySelector(".decor");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  send();
});

window.alert = function (mess, timeout = null) {
  const alert = document.createElement("div");
  const alertButton = document.createElement("button");
  alertButton.innerText = "✔";
  alert.classList.add("alert");
  alert.innerHTML = `<span style="padding:10px">${mess}</span>`;
  alert.appendChild(alertButton);
  alert.setAttribute(
    "style",
    `
    background:white;
  display:flex;
  flex-direction:row;
  justify-content:center;
  flex-direction:row;
  align-items:center;
  position: fixed;
  width:100%;
  font-size:4vh;
  top: 2vh;
  color:black;
  padding: 5px; 
  border-radius: 10px;
  `
  );
  alertButton.setAttribute(
    "style",
    ` background:white;
        display:flex;
        font-size:5vh;
        align-items:center;
        color:#7FFF00;
        border-radius:60px;
        padding: 0;
        margin:0;
    `
  );

  alertButton.addEventListener("click", (e) => {
    alert.remove();
  });

  if (timeout != null) {
    setTimeout(() => {
      alert.remove();
    }, Number(timeout));
  }
  document.body.appendChild(alert);
};

function send() {
  const para = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  const serviceID = "service_zqj7cp8";
  const tempID = "template_lmuyngf";

  emailjs
    .send(serviceID, tempID, para)
    .then((res) => {
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").value = "";
      console.log(res);
      alert("Message Sent", 1000);
    })
    .catch((err) => {
      console.log(err);
      alert("Error", 1000);
    });
}
