'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type SignState = 'Sign In' | 'Sign Up'

export default function LoginPage() {
  const [signState, setSignState] = useState<SignState>('Sign In')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: "url('/assets/hero.jpg')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/80 to-[#0a0a1e]/90 backdrop-blur-sm" />

      {/* Logo */}
      <Link href="/" className="relative z-10 mb-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logo.png"
          alt="Ghibli Logo"
          className="w-36 object-contain drop-shadow-[0_0_12px_rgba(91,140,255,0.4)] hover:scale-105 transition-transform"
        />
      </Link>

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
          {signState}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {signState === 'Sign Up' && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              className="w-full px-4 py-3.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#5b8cff] focus:ring-2 focus:ring-[#5b8cff]/20 transition-all"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="w-full px-4 py-3.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#5b8cff] focus:ring-2 focus:ring-[#5b8cff]/20 transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            className="w-full px-4 py-3.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#5b8cff] focus:ring-2 focus:ring-[#5b8cff]/20 transition-all"
          />

          <button
            type="submit"
            className="mt-2 w-full py-3.5 bg-gradient-to-r from-[#7c5cfc] to-[#5b8cff] text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-all shadow-[0_4px_20px_rgba(124,92,252,0.45)] hover:shadow-[0_6px_25px_rgba(124,92,252,0.6)] active:scale-[0.99]"
          >
            {signState}
          </button>

          <div className="flex items-center justify-between text-xs text-white/50 mt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input type="checkbox" className="rounded accent-[#5b8cff] cursor-pointer w-4 h-4" />
              Remember Me
            </label>
            <span className="hover:text-white cursor-pointer transition-colors">Need Help?</span>
          </div>
        </form>

        <div className="mt-6 text-xs text-white/40">
          {signState === 'Sign In' ? (
            <p>
              New to Ghibli?{' '}
              <span
                onClick={() => setSignState('Sign Up')}
                className="text-[#5b8cff] font-medium cursor-pointer hover:underline hover:text-[#7c5cfc] transition-colors ml-1"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span
                onClick={() => setSignState('Sign In')}
                className="text-[#5b8cff] font-medium cursor-pointer hover:underline hover:text-[#7c5cfc] transition-colors ml-1"
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
