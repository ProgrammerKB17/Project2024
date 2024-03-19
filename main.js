function SendMail() {
  var params = {
      email : document.getElementById("email").value
  }
  emailjs.send("service_p8r0mq9","template_47rkllk",params).then(function (res){
      alert("Success! "+ res.status);
  })
}