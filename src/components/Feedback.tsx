import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { toast } from "sonner";

const feedbackSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message too long"),
});

const Feedback = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = feedbackSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const { name, email, message } = result.data;
    const subject = encodeURIComponent(`New feedback from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    // Open user's email client to send the feedback to Aurahorizon
    window.location.href = `mailto:helloaurahorizon@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Thank you! Your email client has opened to send your feedback.");
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="feedback" className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-border bg-card/50 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Feedback
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Share Your <span className="text-gradient">Feedback & Queries</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Your thoughts matter to us. Drop a message — we'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 max-w-xl glass rounded-3xl p-8 sm:p-10 space-y-5"
        >
          <div>
            <label htmlFor="fb-name" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Name
            </label>
            <input
              id="fb-name"
              type="text"
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="fb-email" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Email
            </label>
            <input
              id="fb-email"
              type="email"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="fb-message" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              id="fb-message"
              rows={5}
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-foreground outline-none transition-colors focus:border-primary resize-none"
              placeholder="Tell us what's on your mind..."
            />
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={submitting}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-aurora px-7 py-3.5 font-medium text-sm text-primary-foreground shadow-glow-soft transition-shadow hover:shadow-glow-primary disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Submit Feedback"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Feedback;
