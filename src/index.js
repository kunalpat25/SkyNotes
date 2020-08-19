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

        var url = window.location.href ;
        var baseLink = url.replace('index.html','');
        console.log(baseLink);
        var noteLink = baseLink + "note.txt";
        console.log(noteLink);
        var titleLink = baseLink + "title.txt";
        console.log(titleLink);
        
        function readTitle()  
        {  
             var txtFile = new XMLHttpRequest();  
             txtFile.open("GET", titleLink, true);  
             txtFile.onreadystatechange = function()   
             {  
                  if (txtFile.readyState === 4)   
                  {  
                       // Makes sure the document is ready to parse.  
                       if (txtFile.status === 200)   
                       {  
                            // Makes sure it's found the file.  
                            document.getElementById("titlePara").innerHTML = txtFile.responseText; 
                       }  
                  }  
             }  
             txtFile.send(null)  ;
             readNote();
        }  
        
        function readNote()  
        {  
             var txtFile1 = new XMLHttpRequest();  
             txtFile1.open("GET", noteLink, true);  
             txtFile1.onreadystatechange = function()   
             {  
                  if (txtFile1.readyState === 4)   
                  {  
                       // Makes sure the document is ready to parse.  
                       if (txtFile1.status === 200)   
                       {  
                            // Makes sure it's found the file.  
                            console.log("Note : "+txtFile1.reponseText);
                            document.getElementById("notePara").innerHTML = txtFile1.responseText; 
                            
                       }  
                  }  
             }  
             txtFile1.send(null)  ;
        }  
        window.onload = function(){
           readTitle();
        
        }
        </script>
        
        <center>
        <div style="background-color: aquamarine; padding-top:10px; padding-bottom: 10px;">
    <h1>Sky Notes</h1>
    <h2>Create | View | Share</h2>
</div>
</center>
<hr> <br> <br>  
        <center>
        <div style="width: 700px;">
        <h2>Your Note</h2> <br>
        <span style="font-size: 150%;" >Title :</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 140%;" id="titlePara"></span>
        <br><br>
        <span style="font-size: 150%;">Note :</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 140%;" id="notePara"></span>
        </div>
        </center>
        </body>
    </html>
    `

    //Establish the index file in the directory
    const noteFolder = 
    {
        "index.html" : new File([pageContent], "index.html", { type: "text/html"}),
        "title.txt" : new File([title], "title.txt", {type: "text/plain"}),
        "note.txt" : new File([note], "note.txt", {type: "text/plain"}),
        // "title" : title,
        // "note" : note,
    }

    //Upload the note folder as a directory
    try {
        (async () => {
            const { skylink } = await client.uploadDirectory(noteFolder, "noteFolder");
            let directLink = "/"+skylink+"/";
            document.getElementById("noteLink").href=directLink;
            document.getElementById("noteLink").text= "Share or copy this note's link";
            console.log(`Upload successful, skylink: ${skylink}`);
        })();
    } catch (error) {
        alert(error);
    }
}