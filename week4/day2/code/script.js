

$(document).ready(() =>{
  
  console.log('this is from script js');
  document.getElementById('test').style.color = 'purple';

  $('h2').click((event) => {
    console.log(event);
    $('ul li').css('font-size', '40px');
  });

  $('h2').hover((event) => {
    console.log('i was hovered');
  });

  $('h2').on('mouseover', (event) => {
    console.log('i was hovered with on');
  });

  const pets = [
    {name: 'slither', type: 'snake', age: 1}
  ];

  $('button').on('click', (event) => {
    let pet = pets[0];
    const newPet = $('<li></li>');
    newPet.html(`
      <strong>name:</strong> 
      ${pet.name}, 
      type: ${pet.type}, 
      age: ${pet.age}
    `);
    // newPet.append('name: ');
    // newPet.append(pet.name);
    // newPet.append(' type: ');
    // newPet.append(pet.type);
    // newPet.append(' age: ');
    // newPet.append(pet.age);
    // newPet.addClass('pet');

    $('ul').append(newPet);
  });
  
  console.log($('ul li'));

});

