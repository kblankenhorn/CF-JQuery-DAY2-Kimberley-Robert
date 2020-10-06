var jsonData = JSON.parse(images);
// load the json data into the var called jsonData


//create a div with id i, and class img-container for each image, the div includes an image, of which the src is loaded from the variable
//that we previously parsed.

//after creating the divs with the images, we select the id of the created image, and append the text as a span to it
for(var i=0;i<jsonData.length;i++)
{
    $(".container").append(`<div serri="${i}" class="img-container"><img src='${jsonData[i].image}'><p></p></div>`);

}

$(".img-container").on("click",function(){
    var index = $(this).attr("serri");
    console.log(index);
    $(this).find("p").html(jsonData[index].name + "<br>"+jsonData[index].relation + "<br>" + jsonData[index].hobby);
    
})


// for (let i =0; i < images.length; i++) {
//     let head = document.createElement("div");
//     nose.appendChild(head);
//     // head.setAttribute("id", "teamcard"+i);
//     .container.innerHTML = ` <img id="img${[i]}" src='${images[i].image}'` +
//     "<br>" +
//     "<p>" +
//     images[i].name +
//     "</p>" +
//     "<p>"
//     +
//     "</p>"
//     +
//     "<div id=moreInfo" +
//     i +
//     ">" +
//     "</div>"
// }

/* ------------------------------------------------------------------------------------------*/

/*Expand function for teamcards making them bigger and adding additional information  (hobby + age) */
// function expand(x) {
//     document.getElementById("moreInfo" + x).innerHTML = ` <a class="pagelink" href="${team[x].page}"> Page </a>`+
//       `<p>Hobby: ` + team[x].hobby + `</p><p>Age ${team[x].age}`;
//     document.getElementById("teamcard" + x).style.width = "60%";
//   }
//   /* Close Function for clearing the content which comes from the expand function and resizing to 30% */
//   function close(y) {
//     document.getElementById("moreInfo" + y).innerHTML = "";
//     document.getElementById("teamcard" + y).style.width = "35%";
//   }
//    creating variable for if statement 
//   let test = 2;
  
//   /* Loop for adding eventlistener to every div and if/else statement for expand/close indication  */
//   for (let i = 0; i < team.length; i++) {
//     document.getElementById("teamcard" + i).addEventListener(
//       "click",function () {
//         if (test % 2 == 0) {
//           expand(i);
//           test++; /* adds +1 to the test value = uneven*/
//         } else {
//           close(i); /*makes var test even again  */
//           test++;
//         }
//       },
//       false
//     );
//   }

