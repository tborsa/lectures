
$(document).ready(()=>{

  console.log("i am external");
  
  let boxelements = $('#create');
  console.log(boxelements);
  
  let pets = [
    {
      name: 'Dingo',
      type: 'dog',
      age: 1
    },
    {
      name: 'Kongo',
      type: 'snake',
      age: 3
    },
    {
      name: 'Meowngo',
      type: 'cat',
      age: 2
    },
    {
      name: 'Bongo',
      type: 'dog',
      age: 2
    }
  ]

  $('#create').click((event)=>{
    // let box = document.createElement("div");
    for (let pet of pets ) {
      let box = $(`<div class="tweet">${pet.name}</div>`);
      let header = $(`<header> age: ${pet.age}, type: ${pet.type}</header>`);
      header.addClass('test');
      box.append(header);
      $('.container').append(box);
    }

    // document.getElementsByClassName('container')[0].appendChild(box);
  });

  $('.box').on('mouseover', function() {
    console.log('herere');
    $(this).css("background-color", 'pink');
  });

})
