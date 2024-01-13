function generateQRCode() {
    let siteqr =
    document.getElementById("siteqr").value;
    if(siteqr) {
        let qrcodeContainer =
        document.getElementById("qrcode");
        qrcodeContainer.innerHTML = "";

        new QRCode(qrcodeContainer, siteqr);

        document.getElementById("qrcode-container").style.display =
        "block";
    } else {
        alert("Please enter a valid URL");
    }
}
console.log("generateQRCode")