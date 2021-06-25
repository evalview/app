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
    Host: "smtp.gmail.com",
    Username: "sender@email_address.com",
    Password: "Enter your password",
    To: 'receiver@email_address.com',
    From: "sender@email_address.com",
    Subject: "Message from Eval-view site",
    Body: msgBody,
  })
    .then(() => {
      alert("Thanks for contacting us. Your message has been successfully sent🚀")
    });
})