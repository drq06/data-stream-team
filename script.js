/* =========================
   SAVE CONTACT
========================= */

const saveContactButton =
    document.getElementById("saveContact");


saveContactButton.addEventListener("click", function () {

    const contact = `BEGIN:VCARD
VERSION:3.0
FN:Deya'a Faiz
N:Deya'a;Faiz;;;
ORG:DATA STREAM TEAM
TITLE:Software Engineer
TEL;TYPE=CELL:+962778283855
EMAIL;TYPE=INTERNET:dyadiaqa@gmail.com
URL:https://www.linkedin.com/in/deya-q-3b7445343
NOTE:Software Engineering
END:VCARD`;


    const blob = new Blob(
        [contact],
        {
            type: "text/vcard;charset=utf-8"
        }
    );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "Deyaa-Faiz-Data-Stream.vcf";


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);


    URL.revokeObjectURL(url);

});