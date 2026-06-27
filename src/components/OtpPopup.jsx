import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function OtpPopup() {
  const [show, setShow] = useState(false)
  const [step, setStep] = useState('form')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const API = import.meta.env.VITE_API_URL

useEffect(() => {
  const user = localStorage.getItem('cc_user')

  if (user) {
    try {
      const parsed = JSON.parse(user)
      if (parsed && parsed.email) {
        return
      }
    } catch (err) {
      localStorage.removeItem('cc_user')
    }
  }

  const timer = setTimeout(() => setShow(true), 10000)
  return () => clearTimeout(timer)
}, [])

  const handleSendOtp = async () => {
    setError('')
    if (!name || !email) {
      setError('Name and email are required')
      return
    }
    setLoading(true)
    try {
      const res = await fetch(`${API}/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })
      const data = await res.json()
      if (data.success) {
        setStep('otp')
      } else {
        setError(data.message)
      }
    } catch (err) {
      setError('Something went wrong, try again')
    }
    setLoading(false)
  }

  const handleVerifyOtp = async () => {
    setError('')
    if (!otp) {
      setError('Please enter OTP')
      return
    }
    setLoading(true)
    try {
      const res = await fetch(`${API}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      })
      const data = await res.json()
      if (data.success) {
        localStorage.setItem('cc_user', JSON.stringify(data.user))
        setStep('success')
        setTimeout(() => setShow(false), 2000)
      } else {
        setError(data.message)
      }
    } catch (err) {
      setError('Something went wrong, try again')
    }
    setLoading(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
            onClick={() => setShow(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md mx-4 rounded-2xl p-8"
              style={{ background: '#fff' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShow(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
                aria-label="Close popup"
              >
                ✕
              </button>

              <div className="text-center mb-6">
                <img
                  src="/assets/images/main-logo.webp"
                  alt="CharityCare Logo"
                  className="h-10 mx-auto mb-3 bg-[#2C3A3F] p-2 rounded-lg"
                />
                <p className="section-subtitle">Join Our Community</p>
              </div>

              {step === 'form' && (
                <div>
                  <h2 className="section-title text-center" style={{ fontSize: 24 }}>
                    Get Exclusive Updates
                  </h2>
                  <p className="section-text text-center mb-6" style={{ fontSize: 14 }}>
                    Join thousands of supporters making a difference.
                  </p>
                  {error && (
                    <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
                  )}
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-4 py-3 mb-3 border border-gray-200 rounded-lg outline-none focus:border-[#2faf90] font-[Lora]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 mb-4 border border-gray-200 rounded-lg outline-none focus:border-[#2faf90] font-[Lora]"
                  />
                  <button
                    onClick={handleSendOtp}
                    disabled={loading}
                    className="btn-custom w-full text-center"
                    style={{ borderRadius: 8 }}
                  >
                    {loading ? 'Sending OTP...' : 'Send OTP'}
                  </button>
                </div>
              )}

              {step === 'otp' && (
                <div>
                  <h2 className="section-title text-center" style={{ fontSize: 24 }}>
                    Enter OTP
                  </h2>
                  <p className="section-text text-center mb-6" style={{ fontSize: 14 }}>
                    OTP sent to <strong>{email}</strong>. Valid for 10 minutes.
                  </p>
                  {error && (
                    <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
                  )}
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={e => setOtp(e.target.value)}
                    maxLength={6}
                    className="w-full px-4 py-3 mb-4 border border-gray-200 rounded-lg outline-none focus:border-[#2faf90] font-[Lora] text-center text-2xl tracking-widest"
                  />
                  <button
                    onClick={handleVerifyOtp}
                    disabled={loading}
                    className="btn-custom w-full text-center"
                    style={{ borderRadius: 8 }}
                  >
                    {loading ? 'Verifying...' : 'Verify OTP'}
                  </button>
                  <button
                    onClick={() => setStep('form')}
                    className="w-full text-center mt-3 text-sm text-gray-400 hover:text-[#2faf90]"
                  >
                    ← Back
                  </button>
                </div>
              )}

              {step === 'success' && (
                <div className="text-center py-6">
                  <div className="text-5xl mb-4">🎉</div>
                  <h2 className="section-title" style={{ fontSize: 24 }}>
                    Welcome, {name}!
                  </h2>
                  <p className="section-text" style={{ fontSize: 14 }}>
                    You're now part of the CharityCare community.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}