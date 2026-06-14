import Link from "next/link";

export default function ClientLoginPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px] pointer-events-none"></div>
      <div className="glass-panel p-8 max-w-md w-full space-y-6 rounded-2xl border border-white/10 relative z-10">
        <div className="badge-accent">Client Portal Access</div>
        <h1 className="font-display text-3xl font-black tracking-tight">Client Login</h1>
        <p className="text-sm text-muted leading-relaxed">
          Access your project status, support tickets, file sharing, and Stripe invoices. Currently under construction for Phase 2.
        </p>
        <div className="space-y-3 w-full">
          <input type="email" className="input-dark text-sm" placeholder="client@company.com" disabled />
          <input type="password" className="input-dark text-sm" placeholder="••••••••" disabled />
          <button className="btn-glass w-full text-xs font-semibold py-2.5 opacity-50 cursor-not-allowed">
            Authenticate (Disabled)
          </button>
        </div>
        <Link href="/" className="btn-glass py-2 px-6 text-sm inline-block rounded-lg transition-all w-full">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
