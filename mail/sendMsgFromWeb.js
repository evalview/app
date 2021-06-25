const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const { name, email, message } = e.target;

  const msgBody = JSON.stringify({
    senderName: name.value,
    senderEmail: email.value,
    message: message.value
  });

  await Email.send({
    Host: "smtp.elasticemail.com",
    Username: "inchapter@gmail.com",
    Password: "D2BD2A64384C4AAA9D02377C4B18015ABB20",
    To: 'chuong.tang@aol.com',
    From: "inchapter@gmail.com",
    Subject: "Message from Eval-view site",
    Body: msgBody,
  })
    .then(() => {
      alert("Thanks for contacting us. Your message has been successfully sent🚀")
    });
})