const saveContactButton = document.getElementById("saveContact");

saveContactButton.addEventListener("click", function () {

    const contact = `BEGIN:VCARD
VERSION:3.0
FN:Ahmad Khdair
N:Khdair;Ahmad;;;
ORG:DATA STREAM TEAM
TITLE:Software Engineer
TEL;TYPE=CELL:+962798797174
NOTE:Software Engineering
URL:https://www.instagram.com/ahmad_a_khdair
END:VCARD`;

    const blob = new Blob(
        [contact],
        {
            type: "text/vcard;charset=utf-8"
        }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "Ahmad-Khdair-Data-Stream.vcf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
});