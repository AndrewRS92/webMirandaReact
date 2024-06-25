import {useState} from "react"


const LoginForm = () => {
    
    const [user, setUSer] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit =(e)=>{
        e.preventDefault()
        if (user === "" || password ===""){
            setError(true)
            return
        }
    }
    
    
    return <section>
        <h1>Login</h1>

    <form
        onSubmit={handleSubmit}
    >
        <input type="text" 
        value={user}
        onChange={e=> setUSer(e.target.value)}
        />
        <input type="password"
        value={password}
        onChange={e=> setPassword(e.target.value)}
        />
        <button>Login</button>

    </form>
        
    </section>
}

export default LoginForm;