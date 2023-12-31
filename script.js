function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "Passwordhere") {
    window.location.href = "special.html";
  } else {
    alert("Incorrect password. Try again.");
  }
}

function closeSpecialModal() {
  document.getElementById("special-modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var specialButton = document.getElementById("special-button");

  specialButton.onclick = function () {
    document.getElementById("special-modal").style.display = "block";
  };
});

function openPdf() {
  var password = document.getElementById("password").value;
  if (password === "mishiwishi") {
    var pdfViewer = document.getElementById("pdfViewer");
    pdfViewer.innerHTML = '<iframe src="abc/welcome.pdf" width="100%" height="600px" style="border: none;"></iframe>';
    closeSpecialModal();
  } else {
    alert("Incorrect password. Try again.");
  }
}
