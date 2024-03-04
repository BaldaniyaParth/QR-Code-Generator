function generateQRCode() {
    let website = document.getElementById("website").value;
    if (website) {
        document.getElementById("scan").style.display = "block"
        
        let qrcodeContainer = document.getElementById("qrcode");
        qrcodeContainer.innerHTML = "";
        new QRCode(qrcodeContainer, website);

        document.getElementById("qrcode-container").style.display = "block";

        
    } else {
        alert("Please enter a valid URL");
    }
}

