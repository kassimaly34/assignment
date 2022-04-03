const Signin = () => {
    const showPassword = () => {
        let revealPass = document.getElementById("password");
        if (revealPass.type === "password") {
          revealPass.type = "text";
        } else {
          revealPass.type = "password";
        }
      };
      const handleFormClose = () => {
        let closeForm = document.getElementById("close");
        closeForm.addEventListener("click", () => {
          document.getElementById("myForm").style.display = "none";
        });
      };
   
      let handleSubmit=(e)=>{
          e.preventDefault()


            let handleSubmit=e.target
            let fd=new FormData(handleSubmit)

            for(let key of fd.keys()){
                console.log(key,fd.get(key))
            }

          const postFormData=(url)=>{
            return new Promise((resolve,reject)=>{
                let xhr=new XMLHttpRequest();
                xhr.addEventListener('readystatechange',()=>{
                    if(xhr.readyState===4 && xhr.status===200){
                        const data=JSON.parse(xhr.responseText)
                        resolve(data);
                    }
                    else if(xhr.readyState===4){
                      reject(`${xhr.status} Error`)
                    }
                })
                xhr.open('GET',url)
                xhr.send()
            })
        }
        postFormData('https://reqres.in/api/users').then(data=>{
         console.log("Received data:",data)
       })
       .catch(error=>{
         console.log("Problem posting data:",error)
       })
      }

    return (
        <div>
         <form className="signInForm" id="myForm" onSubmit={handleSubmit}>
                <h2 id="close" onClick={handleFormClose}>
                +
                </h2>
                <input type="text" placeholder="username" name="username"/>
                <input type="email" placeholder="email" name="email" required/>
                <input id="password" type="password" name="password" placeholder="password" />
                <input onClick={showPassword} type="checkbox" />
                <label> show password</label>
                <button>login</button>
      </form>
        </div>
    );
}
 
export default Signin;