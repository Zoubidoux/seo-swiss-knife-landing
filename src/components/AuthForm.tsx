import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Mail, Lock, Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'

// ── Google icon SVG ──────────────────────────────────────────────────────────
function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

interface AuthFormProps {
  onSuccess?: () => void
  redirectPath?: string
}

type Tab = 'login' | 'register'

export function AuthForm({ onSuccess, redirectPath }: AuthFormProps) {
  const { signIn, signUp } = useAuth()
  const [tab, setTab] = useState<Tab>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true)
    setError(null)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectPath ? `${window.location.origin}${redirectPath}` : `${window.location.origin}/account`,
        queryParams: { access_type: 'offline', prompt: 'consent' },
      },
    })
    if (error) {
      setError(error.message)
      setGoogleLoading(false)
    }
  }

  const handleAppleSignIn = async () => {
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: {
        redirectTo: redirectPath ? `${window.location.origin}${redirectPath}` : `${window.location.origin}/account`,
      },
    })
    if (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setLoading(true)
    
    try {
      if (tab === 'login') {
        const { error } = await signIn(email, password)
        if (error) throw new Error(error)
        onSuccess?.()
      } else {
        const { error } = await signUp(email, password)
        if (error) throw new Error(error)
        setSuccess('Account created! Check your email to confirm.')
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-[24px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#FFF9E6] rounded-2xl flex items-center justify-center mx-auto mb-4">
             <span className="text-2xl">🔒</span>
          </div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight uppercase mb-2">
            Search Toolbox<span className="text-indigo-600">.</span>
          </h1>
          <p className="text-gray-400 text-sm font-medium">
             Sign in to unlock the AI SEO Assistant.
          </p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={handleGoogleSignIn}
            disabled={googleLoading || loading}
            className="flex items-center justify-center gap-2 h-14 rounded-xl font-bold text-xs transition-all bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 disabled:opacity-50"
          >
            {googleLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <GoogleIcon />}
            Google
          </button>
          <button
            onClick={handleAppleSignIn}
            disabled={googleLoading || loading}
            className="flex items-center justify-center gap-2 h-14 rounded-xl font-bold text-xs transition-all bg-black text-white hover:bg-gray-900 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987s2.355.987 3.96.948c1.653-.026 2.686-1.48 3.692-2.948 1.166-1.69 1.639-3.328 1.665-3.415-.038-.013-3.182-1.221-3.22-4.832-.038-3.003 2.454-4.446 2.568-4.512-1.404-2.058-3.559-2.292-4.326-2.355-1.898-.155-3.53 1.002-4.464 1.002v-.004zm-.524-1.81c.822-1 1.366-2.392 1.214-3.771-1.176.052-2.593.793-3.441 1.791-.758.887-1.417 2.311-1.234 3.655 1.3.104 2.64-.675 3.461-1.675z"/>
              </svg>
            )}
            Apple
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">or</span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>

        {/* Tabs */}
        <div className="flex p-1 bg-gray-100 rounded-xl mb-6">
          {(['login', 'register'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => { setTab(t); setError(null); setSuccess(null) }}
              className={`flex-1 py-3 text-xs font-black uppercase tracking-widest transition-all rounded-lg ${
                tab === t ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {t === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email" required value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-indigo-500 focus:bg-white transition-all text-gray-900 placeholder:text-gray-400"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="password" required minLength={6} value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:border-indigo-500 focus:bg-white transition-all text-gray-900 placeholder:text-gray-400"
            />
          </div>

          {error && (
            <div className="text-xs font-bold text-red-500 bg-red-50 p-4 rounded-xl border border-red-100 animate-in fade-in slide-in-from-top-1">
              {error}
            </div>
          )}
          {success && (
            <div className="text-xs font-bold text-green-600 bg-green-50 p-4 rounded-xl border border-green-100 animate-in fade-in slide-in-from-top-1">
              {success}
            </div>
          )}

          <Button
            type="submit" disabled={loading}
            className="w-full h-14 font-black text-xs uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg hover:shadow-indigo-200 bg-[#6366F1] text-white hover:bg-[#5558e3] border-none"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : tab === 'login' ? 'Sign In' : 'Create Account'}
          </Button>
        </form>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-100">
        <p className="text-center text-[10px] text-gray-400 font-medium leading-relaxed">
          By signing in, you agree to our <br />
          <Link to="/terms" className="text-indigo-600 hover:underline">Terms of Use</Link> and <Link to="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</Link>.
        </p>
        <p className="text-center text-[10px] text-gray-400 font-medium mt-4 flex items-center justify-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> 
           Same account as your Chrome extension
        </p>
      </div>
    </div>
  )
}
