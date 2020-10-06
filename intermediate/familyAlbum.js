var jsonData = JSON.parse(images);
// load the json data into the var called jsonData


//create a div with id i, and class img-container for each image, the div includes an image, of which the src is loaded from the variable
//that we previously parsed.

//after creating the divs with the images, we select the id of the created image, and append the text as a span to it
for(var i=0;i<jsonData.length;i++)
{
    $(".container").append(`<div id="${i}" class="img-container"><img id="img${i}"src='${jsonData[i].image}'></div>`);
    $(`#${i}`).append(`<br><span>Relation: ${jsonData[i].relation}</span>`);
    $(`#${i}`).append(`<br><span>Name: ${jsonData[i].name}</span>`);
}



// we loop every relation attribute, and check if its equal to different values. If it is, we add a border to said image, selecting it usind the
// id that re previously assigned to said image.
// for(var i=0;i<jsonData.length;i++)
// {
//     if(jsonData[i].relation == 'father')
//     {
//         $(`#img${i}`).css("border", "blue 2px solid");
//     } 
//     else if(jsonData[i].relation == 'grandpa')
//     {
//         $(`#img${i}`).css("border", "yellow 2px solid");
//     } 
//     else if(jsonData[i].relation == 'dog')
//     {
//         $(`#img${i}`).css("border", "red 2px solid");
//     } 
//     else if(jsonData[i].relation == 'sister')
//     {
//         $(`#img${i}`).css("border", "green 2px solid");
//     } 
    
// }
