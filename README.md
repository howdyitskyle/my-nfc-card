# My NFC Card
Generic Profile Page with QR Code for use with a Digital Business Card

## Overview
This repository contains the source code of an HTML page, styled using basic CSS, that serves as a profile page. It includes essential information about the user and provides contact details in a form of a QR Code which can be scanned to get these details easily without needing to manually look at the page. 

## Features
- **About Me**: A brief introduction about the user, highlighting their skills, interests, and passion for what they do.
- **Skills**: List of key technical skills that users are proficient in.
- **Links**: Links to external websites like personal website, LinkedIn profile, and GitHub repository.
- **Contact Info**: Phone number and email address which can be directly contacted through the QR Code.
- **QR Code for Contact Information**: A dynamic QR code that encodes user's contact information (email, phone) in a standard VCard format. This provides a convenient way of sharing one's contact details with others.

## How to Use 
1. Clone the repository onto your local machine using `git clone https://github.com/howdyitskyle/my-nfc-card.git`.
2. Open the `index.html` file in any web browser to view the portfolio page.
3. Modify the HTML, CSS, or JavaScript files according to your needs.
4. To update the QR Code with your contact information, edit the corresponding line(s) in `js/script.js` file.

```
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
```

5. To update the filename of the vCard attached to the download button, edit the corresponding line(s) in `js/script.js`

```
element.setAttribute('download', 'contact.vcf');
```

## Dependencies 
- [qrcode.js](https://github.com/davidshimjs/qrcodejs): A simple JavaScript library for generating QR codes in a variety of formats. *included in the js directory*

Please ensure you have the above dependencies installed and referenced correctly before using this project. Also, remember to replace placeholders with your actual data when using it. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

## License
This code is released under the MIT license. See `LICENSE` for more information.

Lastly, always ensure that your QR Codes work across different devices and browsers to provide a consistent user experience. The compatibility of this code with certain browsers or devices may vary depending on their specific implementation.
