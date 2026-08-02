import { useState } from 'react'
import SEO from '../components/ui/SEO'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react'

type Vibe = 'natural' | 'bright' | 'subtle' | 'glowup'
type Goal = 'whiter' | 'straighter' | 'smoother' | 'gaps' | 'fullness' | 'confidence'

interface FormData {
  vibe: Vibe | null
  goals: Goal[]
  name: string
  phone: string
  email: string
  contact: string
}

const vibes: { id: Vibe; label: string; sub: string; emoji: string }[] = [
  { id: 'natural', label: 'Natural soft', sub: 'Beautiful and understated', emoji: '🌸' },
  { id: 'bright', label: 'Bright glam', sub: 'Bold, radiant, show-stopping', emoji: '✨' },
  { id: 'subtle', label: 'Subtle refine', sub: 'Just a little more polished', emoji: '🪷' },
  { id: 'glowup', label: 'Full glow-up', sub: 'Complete transformation', emoji: '💫' },
]

const goalOptions: { id: Goal; label: string }[] = [
  { id: 'whiter', label: 'Whiter teeth' },
  { id: 'straighter', label: 'Straighter alignment' },
  { id: 'smoother', label: 'Smoother edges' },
  { id: 'gaps', label: 'Close gaps' },
  { id: 'fullness', label: 'Youthful fullness' },
  { id: 'confidence', label: 'More confidence' },
]

const TOTAL_STEPS = 4

export default function DreamSmile() {
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState<FormData>({
    vibe: null,
    goals: [],
    name: '',
    phone: '',
    email: '',
    contact: 'whatsapp',
  })

  const progress = (step / TOTAL_STEPS) * 100

  const toggleGoal = (goal: Goal) => {
    setForm((f) => ({
      ...f,
      goals: f.goals.includes(goal) ? f.goals.filter((g) => g !== goal) : [...f.goals, goal],
    }))
  }

  const canNext = () => {
    if (step === 1) return form.vibe !== null
    if (step === 2) return form.goals.length > 0
    if (step === 3) return true
    if (step === 4) return form.name && form.phone
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDone(true)
  }

  if (done) {
    return (
      <div className="min-h-screen bg-pearl pt-24 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full text-center bg-blush rounded-4xl p-12 border border-border shadow-rose-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-rose/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 size={40} className="text-rose" />
          </motion.div>
          <h2 className="font-display italic text-4xl text-ink mb-4">
            Your plan is being prepared with care.
          </h2>
          <p className="font-body text-base text-ink-soft leading-relaxed mb-3">
            Thank you, {form.name}! We've received your dream smile brief.
          </p>
          <p className="font-body text-sm text-ink-soft leading-relaxed mb-8">
            Our team will reach out within 24 hours to discuss your personalised smile plan. We can't wait to meet you.
          </p>
          <div className="bg-rose/10 border border-rose/20 rounded-3xl p-5 text-left">
            <p className="font-body text-sm text-rose-deep font-medium mb-2">Your dream smile brief:</p>
            <p className="font-body text-sm text-ink-soft">
              <strong>Vibe:</strong> {vibes.find((v) => v.id === form.vibe)?.label}
            </p>
            <p className="font-body text-sm text-ink-soft">
              <strong>Goals:</strong> {form.goals.map((g) => goalOptions.find((o) => o.id === g)?.label).join(', ')}
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <>
      <SEO
        title="Dream Smile Planner — The Toothgram Dental Clinic"
        description="Design your dream smile in 4 soft steps. Tell us your vibe, goals, and contact details — and we'll prepare your personalised smile plan for free."
      />

      <div className="min-h-screen bg-pearl pt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-rose/10 border border-rose/20 rounded-full px-4 py-2 mb-5">
              <Sparkles size={14} className="text-rose" />
              <span className="font-body text-xs text-rose-deep">Free · No commitment</span>
            </div>
            <h1 className="font-display italic text-4xl md:text-5xl text-ink mb-3">
              Design your dream smile
            </h1>
            <p className="font-body text-base text-ink-soft">
              Step {step} of {TOTAL_STEPS} — {['Your vibe', 'What you\'d love', 'A little more', 'Meet you'][step - 1]}
            </p>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 bg-blush-deep rounded-full mb-10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-rose to-copper rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Step content */}
          <div className="bg-blush rounded-4xl p-8 border border-border shadow-rose min-h-[340px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl text-ink mb-2">Tell us what you dream of</h2>
                  <p className="font-body text-sm text-ink-soft mb-7">What kind of smile transformation speaks to you?</p>
                  <div className="grid grid-cols-2 gap-3">
                    {vibes.map((vibe) => (
                      <button
                        key={vibe.id}
                        onClick={() => setForm((f) => ({ ...f, vibe: vibe.id }))}
                        className={`rounded-3xl p-5 text-left border transition-all duration-200 ${
                          form.vibe === vibe.id
                            ? 'bg-rose text-pearl border-rose shadow-copper'
                            : 'bg-pearl border-border hover:border-rose hover:bg-blush-deep'
                        }`}
                      >
                        <span className="text-2xl block mb-2">{vibe.emoji}</span>
                        <p className={`font-body text-sm font-medium ${form.vibe === vibe.id ? 'text-pearl' : 'text-ink'}`}>
                          {vibe.label}
                        </p>
                        <p className={`font-body text-xs mt-0.5 ${form.vibe === vibe.id ? 'text-pearl/75' : 'text-ink-faint'}`}>
                          {vibe.sub}
                        </p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl text-ink mb-2">What would you love?</h2>
                  <p className="font-body text-sm text-ink-soft mb-7">Select all that resonate. You can pick as many as you'd like.</p>
                  <div className="flex flex-wrap gap-2.5">
                    {goalOptions.map((goal) => (
                      <button
                        key={goal.id}
                        onClick={() => toggleGoal(goal.id)}
                        className={`font-body text-sm px-5 py-2.5 rounded-full border transition-all duration-200 ${
                          form.goals.includes(goal.id)
                            ? 'bg-rose text-pearl border-rose shadow-copper'
                            : 'bg-pearl border-border text-ink hover:border-rose hover:bg-blush'
                        }`}
                      >
                        {goal.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl text-ink mb-2">Almost there!</h2>
                  <p className="font-body text-sm text-ink-soft mb-7">
                    Here's a summary of your dream smile brief. Our specialist will review this before your consultation.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-pearl rounded-2xl p-5 border border-border">
                      <p className="font-body text-xs tracking-[0.15em] uppercase text-copper mb-1">Your vibe</p>
                      <p className="font-body text-base font-medium text-ink">
                        {vibes.find((v) => v.id === form.vibe)?.emoji} {vibes.find((v) => v.id === form.vibe)?.label}
                      </p>
                    </div>
                    <div className="bg-pearl rounded-2xl p-5 border border-border">
                      <p className="font-body text-xs tracking-[0.15em] uppercase text-copper mb-2">Your goals</p>
                      <div className="flex flex-wrap gap-2">
                        {form.goals.map((g) => (
                          <span key={g} className="font-body text-xs bg-rose/10 text-rose-deep px-3 py-1 rounded-full border border-rose/20">
                            {goalOptions.find((o) => o.id === g)?.label}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-rose/10 border border-rose/20 rounded-2xl p-4">
                      <p className="font-body text-sm text-rose-deep">
                        ✓ Your personalised smile plan will be prepared and reviewed before your visit — completely free.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-display text-2xl text-ink mb-2">Let's meet you</h2>
                  <p className="font-body text-sm text-ink-soft mb-7">We'll use this to send your personalised smile plan.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your first name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full bg-pearl border border-border rounded-2xl px-5 py-3.5 font-body text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-rose transition-colors"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full bg-pearl border border-border rounded-2xl px-5 py-3.5 font-body text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-rose transition-colors"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email address (optional)"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full bg-pearl border border-border rounded-2xl px-5 py-3.5 font-body text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-rose transition-colors"
                    />
                    <div>
                      <p className="font-body text-xs text-ink-faint mb-2">How should we reach out?</p>
                      <div className="flex gap-2">
                        {['whatsapp', 'call', 'email'].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, contact: opt }))}
                            className={`flex-1 font-body text-xs py-2.5 rounded-full border capitalize transition-all ${
                              form.contact === opt
                                ? 'bg-rose text-pearl border-rose'
                                : 'bg-pearl border-border text-ink-soft hover:border-rose'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            {step > 1 ? (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="inline-flex items-center gap-2 font-body text-sm text-ink-soft hover:text-ink transition-colors"
              >
                <ArrowLeft size={16} /> Back
              </button>
            ) : (
              <div />
            )}
            {step < TOTAL_STEPS ? (
              <button
                onClick={() => canNext() && setStep((s) => s + 1)}
                disabled={!canNext()}
                className="inline-flex items-center gap-2 bg-rose text-pearl font-body font-medium px-8 py-3.5 rounded-full shadow-copper hover:bg-rose-deep transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canNext()}
                className="inline-flex items-center gap-2 bg-rose text-pearl font-body font-medium px-8 py-3.5 rounded-full shadow-copper hover:bg-rose-deep transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Sparkles size={16} /> Send my plan request
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
