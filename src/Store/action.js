import firebaseApp from './../config/firebase/firebase'

 function signupUser(data){
     return(dispatch)  => {
      firebaseApp.auth().createUserWithEmailAndPassword(data.email,data.password)
       .then ((user) => {
           console.log(user.user.uid)
           console.log(data)
        // firebaseApp.firestore().collection('users').add(data)
        // .then((res)=>{
        //     alert()
        //     console.log(res)
        //        dispatch({
        //         type:"SIGNUPUSER"
        //     })
        //    })
        //    .catch((error)=>{
        //     console.log(error)
        //    })
firebaseApp.auth().currentUser.sendEmailVerification().then((res)=>{
    alert()
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})
        
       })
 
       .catch((error)=>{
           console.log(error)
       })
    }
}




function signupRes(data){
    return(dispatch)=>{
        firebaseApp.auth().createUserWithEmailAndPassword(data.email,data.password)
        .then ((user) => {
           
            console.log(data)
        //  firebaseApp.firestore().collection('users').add(data)
        //  .then((res)=>{
        //      alert()
        //      console.log(res)
        //         dispatch({
        //          type:"SIGNUPRES"
        //      })
        //     })
        //     .catch((error)=>{
        //      console.log(error)
        //     })
        firebaseApp.auth().currentUser.sendEmailVerification().then((res)=>{
            alert()
            console.log(res)
            console.log(user)
        })
        .catch((error)=>{
            console.log(error)
        })
         
        })
  
        .catch((error)=>{
            console.log(error)
        })
    }
}

function Login(){
    return(dispatch)=>{

    }
}

export {
    signupUser,
    signupRes,
    Login
}


