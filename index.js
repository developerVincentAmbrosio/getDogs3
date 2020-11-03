function getDogPic (breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status === "success") {
        renderImageUrl(responseJson.message);
      } else {
        $('.js-dog-pic-container').empty();
        alert("Oops! we can't find that one. Please check the spelling or pick another breed.");
      }
    })
    .catch(error => alert("Oops! we can't find that one. Please check the spelling or pick another breed."));
  }

function getDogPicListener() {
  $('form').submit(event => {
    event.preventDefault();
    const breed = $('.js-breed').val();
    getDogPic(breed);
  });
}

function renderImageUrl(url){
  $('.js-dog-pic-container').empty().append(dogPicTemplate(url));
}

function dogPicTemplate(imageUrl) {
  return `<img src="${imageUrl}"/>`;
}

$(function() {
  getDogPicListener();
});