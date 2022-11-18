const {hash} = window.location;
const message = atob(hash.replace('#', '')); // so atob is a builtin function that decodes a base64 encoded string into a string. So we are decoding the hash and then replacing the # with nothing. So we are getting the hash and then decoding it.
  if(message) {
    document.querySelectorAll(".card-panel")[0].classList.add("hide");
    document.querySelector("#show-message").classList.remove("hide");
    document.querySelector("#message").innerHTML = message;
  }

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault(); // preventing the form to submit.
    const input = document.querySelector('#user-input');
    const encrypted = btoa(input.value); // encrypting the input value to be 64base encoding character. btoa is a built in function from javascript.
    const linkInput = document.querySelector( "#link-input");
    linkInput.value = `${window.location}#${encrypted}`; // window.location is the current url of our webpages/website.
    linkInput.select(); // if we click on the input, it will select the text inside the input automatically. without having to click on the input and then press ctrl + a.

      // this logic if an user have a number in the message, it will tell an error message. because or message can't contain any number!    
      if(input.value.match(/\d/g)) {
        console.log(`Maaf ada nomor di pesan anda, Kami Tidak Menerima Pesan dengan Nomor! ${input.value.match(/\d/g)} `);
        input.value = '';
      } 
      else if(input.value === '') {
        console.log("Maaf pesan anda kosong, silahkan isi pesan anda");
        linkInput.value = '';
      }
      else if(input.value.length <= 4 || input.value.length >= 120) {
        console.log("Maaf pesan anda terlalu pendek! , kami hanya menerima pesan dengan panjang maksimal 120 karakter dan minimal 5 kata");
        input.value = '';
        linkInput.value = ''; 
     } else {
        //showing and hiding the inputLink Elements
        document.querySelectorAll(".card-panel")[1].classList.remove("hide");
        document.querySelectorAll(".card-panel")[0].classList.add("hide");
      }    
})