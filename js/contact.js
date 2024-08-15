
$("#submit-form").submit((e)=>{

    let isValid = true
    const name = document.getElementById('fname').value.trim();
    const nameError = document.getElementById('nameError');
    if (/^[A-Za-z]{2,}/.test(name)) {
        nameError.textContent = '';
        
    } else {
        
        nameError.textContent = 'Name with at least two letters is required';
        isValid = false;
        return isValid
       
    }

    // Email validation
    const email = document.getElementById('lname').value.trim();
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
        return isValid
    }if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
        return isValid
    }
    
    // Message validation
    const message = document.getElementById('subject').value.trim();
    const messageError = document.getElementById('messageError');
    if (message === '') {
        messageError.textContent = 'Message is required.';
        isValid = false;
        return isValid
    }
    if(isValid === true)
    {
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwsrS1pYajrx430c6dc_BQ0tH1VQ6V1DRdvT2Vl2Ufm-7nCrQtsFMfVb5ReaPH2oewNvQ/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            //window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
}
})
    