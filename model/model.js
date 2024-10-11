export function getContent(pageFile) {
    console.log("model connected");
    console.log(pageFile);


    $.get(`pages/${pageFile}.html`, (data) => {
        $("#app").html(data);
        console.log(data);
    }).fail(() => {
        console.log(`no HTML page found in 'pages'`)
    })

}