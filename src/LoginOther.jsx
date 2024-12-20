import './LoginOther.css'

function LoginOther(){
    return (
        <div id="login-other-container">
            <div id="brand-link-container">
                <a href="" className="signin-brand-link">Sign in with Google</a>
                <a href="" className="signin-brand-link">Sign in with Apple</a>
            </div>
            <p id="other-link">Have an account? <a href="">Sign In</a></p>
        </div>
    )
}

export default LoginOther