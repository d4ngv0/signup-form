import LoginForm  from './LoginForm.jsx'
import Seperate from './Seperate.jsx'
import LoginOther from './LoginOther.jsx'
import './MainSection.css'

function MainSection(){
    return (
        <main>
            <LoginForm />
            <Seperate />
            <LoginOther />
        </main>
    )
}

export default MainSection