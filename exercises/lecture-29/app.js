
class AuthException extends Error {
    constructor(code, message) {
    
    const fullMessage = message ? `${code}: ${message}`: code;
    super(fullMessage);
    this.code = code;
    this.message = fullMessage;

    }
    
    toString() {
      return this.message;
    }
  }

  let isAuth = (auth)  => auth ?? false;

  const checkAuth = document.querySelector('.check-auth');
  
  let dialogBoxId = document.getElementById("dialogBox");


  function showDialog(e){
    dialogBoxId.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
      }
    });
    
    dialogBoxId.showModal();
  }
  
  function closeDialog(){
    dialogBoxId.close(); 
  }
  

  checkAuth.addEventListener('click', function() {
    try {
        if(!isAuth()) {
            throw new AuthException('FORBIDDEN', 'You don´t have access to this page');
        } else {
            window.open("sucess.html");
        }
    } catch(e) { 
        dialogBoxId.querySelector('.message').textContent = e;
        showDialog();
    }
  });