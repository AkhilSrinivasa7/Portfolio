import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-center px-6 pt-20 pb-12"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <div className="order-2 lg:order-1 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 glass px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-lime">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-lime opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-lime"></span>
              </span>
              Ch Srinivasa Shanmukha Akhil
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-tight font-display mb-6">
              <span className="text-white block animate-glitch" style={{ animationDuration: '3s' }}>I build systems that think.</span>
              <span className="text-outline text-outline-hover block italic mt-2">And experiences that feel.</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              Computer Science student building intelligent products at the intersection of AI, software, and design. I turn complex ideas into useful digital experiences.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5 relative">
              <a
                href="#projects"
                className="magnetic-hover group inline-flex items-center gap-2 rounded bg-brand-lime px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-brand-dark transition-all hover:bg-white"
              >
                VIEW MY WORK →
              </a>
              
              <a
                href="#contact"
                className="magnetic-hover inline-flex items-center gap-2 rounded border border-white/20 glass px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
              >
                CONTACT ME
              </a>
            </div>

            <div className="mt-16 flex items-center gap-6 text-sm text-white/50">
              <div className="group">
                <div className="font-display font-bold tracking-widest uppercase text-sm text-white group-hover:text-brand-lime transition-colors">DEVELOPER</div>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="group">
                <div className="font-display font-bold tracking-widest uppercase text-sm text-white group-hover:text-brand-lime transition-colors">AI / ML</div>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="group">
                <div className="font-display font-bold tracking-widest uppercase text-sm text-white group-hover:text-brand-lime transition-colors">DESIGNER</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end relative"
        >
          <div className="relative animate-float">
            {/* Glow behind image */}
            <div className="absolute -inset-10 rounded-full bg-brand-lime opacity-20 blur-[80px]" />
            
            <div className="relative overflow-hidden rounded-2xl glass p-2">
              <img
                src="/images/profile.jpg"
                alt="Srinivasa Shanmukha Akhil Ch"
                className="h-[400px] w-[300px] rounded-xl object-cover sm:h-[500px] sm:w-[380px] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="pointer-events-none absolute inset-2 rounded-xl border border-white/10" />
            </div>

            {/* Floating badges */}
            <div className="absolute -left-8 top-16 hidden rounded-full border border-white/10 bg-brand-dark/40 backdrop-blur-md px-5 py-2.5 shadow-2xl sm:block magnetic-hover">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-brand-lime shadow-[0_0_8px_#ccff00]" />
                <div className="font-bold text-white text-xs tracking-wider uppercase">AI Engineering</div>
              </div>
            </div>

            <div className="absolute -right-10 bottom-24 hidden rounded-full border border-white/10 bg-brand-dark/40 backdrop-blur-md px-5 py-2.5 shadow-2xl sm:block magnetic-hover">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                <div className="font-bold text-white text-xs tracking-wider uppercase">Product Design</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
