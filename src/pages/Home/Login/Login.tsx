import './Login.css'
import logo from '../../../assets/logo.png'
import heroBg from '../../../assets/hero.jpg'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

type SignState = 'Sign In' | 'Sign Up'

const Login = () => {
  const [signState, setSignState] = useState<SignState>('Sign In')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Navigate to home after login/signup
    navigate('/')
  }

  return (
    <div className="login" style={{ backgroundImage: `url(${heroBg})` }}>
      <img src={logo} alt="Ghibli Logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={handleSubmit}>
          {signState === 'Sign Up' && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <button type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === 'Sign In' ? (
            <p>
              New to Ghibli?{' '}
              <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span onClick={() => setSignState('Sign In')}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
