var jsonData = JSON.parse(images);
// load the json data into the var called jsonData


//create a div with id i, and class img-container for each image, the div includes an image, of which the src is loaded from the variable
//that we previously parsed.

//after creating the divs with the images, we select the id of the created image, and append the text as a span to it
for(var i=0;i<jsonData.length;i++)
{
    $(".container").append(`<div id="${i}" class="img-container"><img id="img${i}"src='${jsonData[i].image}'></div>`);
   // $(`#${i}`).append(`<br><span>Relation: ${jsonData[i].relation}</span>`);
  //  $(`#${i}`).append(`<br><span>Name: ${jsonData[i].name}</span>`);
}

for (let i =0; i < team.length; i++) {
    let head = document.createElement("div");
    nose.appendChild(head);
    head.setAttribute("id", "teamcard"+i);
    head.innerHTML = ` <img id="img${[i]}" src='${team[i].image}'` +
    "<br>" +
    "<p>" +
    team[i].name +
    "</p>" +
    "<p>"
    +
    "</p>"
    +
    "<div id=moreInfo" +
    i +
    ">" +
    "</div>"
}

/* ------------------------------------------------------------------------------------------*/

/*Expand function for teamcards making them bigger and adding additional information  (hobby + age) */
function expand(x) {
    document.getElementById("moreInfo" + x).innerHTML = ` <a class="pagelink" href="${team[x].page}"> Page </a>`+
      `<p>Hobby: ` + team[x].hobby + `</p><p>Age ${team[x].age}`;
    document.getElementById("teamcard" + x).style.width = "60%";
  }
  /* Close Function for clearing the content which comes from the expand function and resizing to 30% */
  function close(y) {
    document.getElementById("moreInfo" + y).innerHTML = "";
    document.getElementById("teamcard" + y).style.width = "35%";
  }
  /* creating variable for if statement */
  let test = 2;
  
  /* Loop for adding eventlistener to every div and if/else statement for expand/close indication  */
  for (let i = 0; i < team.length; i++) {
    document.getElementById("teamcard" + i).addEventListener(
      "click",function () {
        if (test % 2 == 0) {
          expand(i);
          test++; /* adds +1 to the test value = uneven*/
        } else {
          close(i); /*makes var test even again  */
          test++;
        }
      },
      false
    );
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
