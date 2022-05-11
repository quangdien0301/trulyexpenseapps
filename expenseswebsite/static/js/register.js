console.log("XIn chao registyer")

const usernameField = document.querySelector('#usernameField')
const feebackArea = document.querySelector('.invalid-feeback')
const emailField = document.querySelector('#emailField')
const feedbackEmail = document.querySelector('.email-feeback')


emailField.addEventListener('keyup', (e)=>{
    console.log(" Check email")
    const emailVal = e.target.value;
    console.log(emailVal)
    emailField.classList.remove('is-invalid');
    feedbackEmail.style.display = 'none';
    if (emailVal.length > 0){
        fetch("/authentication/validate-email", {
            body: JSON.stringify({email: emailVal}),
            method: "POST",
        }).then(res=>res.json()).then(data=>{
            console.log('data', data)
            if (data.email_error){
                emailField.classList.add('is-invalid');
                feedbackEmail.style.display = 'block';
                feedbackEmail.innerHTML=`<p>${data.email_error }</p>`
            }
        })

    }
})


usernameField.addEventListener('keyup', (e)=>{
    // console.log('up key')
    const usernameVal = e.target.value;
    usernameField.classList.remove('is-invalid');
    feebackArea.style.display = 'none';
    if (usernameVal.length > 0){
        fetch("/authentication/validate-username", {
            body: JSON.stringify({username: usernameVal}),
            method: "POST",
        }).then(res=>res.json()).then(data=>{
            console.log('data', data)
            if (data.username_error){
                usernameField.classList.add('is-invalid');
                feebackArea.style.display = 'block';
                feebackArea.innerHTML=`<p>${data.username_error }</p>`
            }
        })

    }
})


