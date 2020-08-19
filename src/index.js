import { SkynetClient} from 'skynet-js';

const client = new SkynetClient();

window.saveNote = function(title,note)
{

    //Establish the page content
    const pageContent = `    <!doctype html>
    <html>
        <head>
            <meta charset=utf-8>
            <title>Your SkyNote</title>
        </head>
        <body>
<script>
window.onload = function(){
    var title = title;
    var note = note;

   document.getElementById("titlePara").innerHTML = title;
   document.getElementById("notePara").innerHTML = note;
}
</script>
        <center>
        <h2>Your Note</h2>
        Title:<p id="titlePara"></p>
        Note:<p id="notePara"></p>
        </center>
        </body>
    </html>`

    //Establish the index file in the directory
    const noteFolder = 
    {
        "index.html" : new File([pageContent], "index.html", { type: "text/html"}),
        "title" : title,
        "note" : note,
    }

    //Upload the note folder as a directory
    try {
        (async () => {
            const { skylink } = await client.uploadDirectory(noteFolder, "noteFolder");
            let directLink = "/"+skylink+"/";
            document.getElementById("noteLink").href=directLink;
            document.getElementById("noteLink").text=skyLink;
        })();
    } catch (error) {
        alert(error);
    }
}