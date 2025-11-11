//  Your VCard Data
var vcardData = `BEGIN:VCARD\n`+
                `VERSION:3.0\n` +
                `N:Forrest Gump\n` +
                `FN:Forrest Gump\n` +
                `ORG:Bubba Gump Shrimp Co.\n` +
                `TITLE:Shrimp Man\n` +
                `TEL;TYPE=WORK,VOICE:(111) 555-1212\n` +
                `ADR;TYPE=WORK:;;100 Waters Edge;Baytown;LA;30314;United States of America\n` +
                `EMAIL;TYPE=PREF,INTERNET:forrestgump@example.com\n` +
                `END:VCARD`;

// Generate QR Code
var qrcode = new QRCode(document.getElementById("qrcode"), {
  text: vcardData,
  width: 128,
  height: 128,
  colorDark : "#000",
  colorLight : "#fff",
});

// Add event listener to download button
document.getElementById('downloadBtn').addEventListener('click', function() {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(vcardData));
      element.setAttribute('download', 'contact.vcf');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
});

// Variable Year for the Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
