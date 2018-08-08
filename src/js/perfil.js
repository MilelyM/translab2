let userFirebid = ''; 

window.onload = ()=>{
  firebase.auth().onAuthStateChanged((user)=>{ 

      userFirebid = user.uid; 
      correo.innerHTML = `${user.email}`;
     
  });   
};
