const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // récupérer la valeur du champs du formulaire
  const message = document.getElementById('message').value;
  
  // validation des champs
  if (!message) {
    alert('Veuillez remplir le  champs meesage du formulaire.');
    return;
  }
   else{
    
    alert('Merci pour votre interet à notre association nous vous reviendrons sous peu A BIENTOT !');
    form.submit();
    
  }
  form.reset();
});
