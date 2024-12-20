import './LoginForm.css'

function LoginForm(){
    return (
        <div id="form-container">
            <h2 id="title">Get Started Now</h2>
            <form>
                <div className="input-container"><label className="label">Name</label><br></br><input type="name" className="input" placeholder="Enter your name"/></div>
                <div className="input-container"><label className="label">Email</label><br></br><input type="email" className="input" placeholder="Enter your email" /></div>
                <div className="input-container"><label className="label">Password</label><br></br><input type="password" className="input"  placeholder="Password"/></div>
                <div id="checkbox-container"><input type="checkbox" id="checkbox" /><p id="checkbox-text"> I agree to the <a href="" id="checkbox-link"> terms & policy</a></p></div>
                <button id="signup-btn">Sign up</button>
            </form>
        </div>
    )
}

export default LoginForm