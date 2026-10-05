const saveContactButton = document.getElementById("saveContact");

saveContactButton.addEventListener("click", function () {

    const contact = `BEGIN:VCARD
VERSION:3.0
FN:Yanal AL-Dbass
N:AL-Dbass;Yanal;;;
ORG:DATA STREAM TEAM
TITLE:Software Engineer
TEL;TYPE=CELL:+962775810678
URL:https://www.instagram.com/yanalaldbass
NOTE:Software Engineering
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

    link.download = "Yanal-AL-Dbass-Data-Stream.vcf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

});