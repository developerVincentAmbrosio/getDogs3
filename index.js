function getDogPic (hound) {
  fetch(`https://dog.ceo/api/breed/${hound}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status != "success") {
        alert("Oops! we can't find that one. Please check the spelling or pick another breed.");
      } else {
        renderImageUrl(responseJson.message);  
      }
    });
}

function getDogPicListener() {
  $('form').submit(event => {
    event.preventDefault();
    const hound = $('.js-breed').val();
    getDogPic(hound);
  });
}

function renderImageUrl(url){
  $('.js-dog-pic-container').replaceWith(dogPicTemplate(url)).html();
}

function dogPicTemplate(imageUrl) {
  return `<img src="${imageUrl}" class="js-dog-pic-container">`;
}

$(function() {
  getDogPicListener();
});