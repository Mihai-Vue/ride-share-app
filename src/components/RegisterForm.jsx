function RegisterForm() {

    let url = ""
    return(
        <form>
            <p>Let's start with your phone number - we'll text you a code to verify your phone.</p>
            <input type={"tel"} placeholder={"Mobile Phone Number"}/>
            <p>By clicking “Next,” you agree to Lyft's <a href={url}>Terms of Service</a> and
                acknowledge you have read our <a href={url}>Privacy Policy</a>.</p>
            <button>Next</button>
            <p>Already applied or already a driver? <a href={url}>Log in</a></p>
        </form>
    );
}
export default RegisterForm;
