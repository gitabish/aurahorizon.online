"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Layers, 
  Rocket, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2,
  Sparkles
} from "lucide-react";
import MagneticButton from "./MagneticButton";
import { toast } from "sonner";

const steps = [
  {
    id: "type",
    title: "What are we building?",
    options: [
      { id: "web", label: "Web Development", icon: Code2, desc: "High-performance applications" },
      { id: "design", label: "Brand & UI Design", icon: Palette, desc: "Visual identity & interfaces" },
      { id: "3d", label: "3D & Immersive", icon: Layers, desc: "WebGL & interactive scenes" },
      { id: "full", label: "Full Digital Suite", icon: Rocket, desc: "The complete horizon package" },
    ]
  },
  {
    id: "budget",
    title: "What's the investment range?",
    options: [
      { id: "basic", label: "₹5k - ₹10k", desc: "Essential presence" },
      { id: "standard", label: "₹10k - ₹25k", desc: "Growth & performance" },
      { id: "premium", label: "₹25k - ₹50k", desc: "Market leadership" },
      { id: "custom", label: "₹50k+", desc: "Uncompromising quality" },
    ]
  },
  {
    id: "timeline",
    title: "When do we launch?",
    options: [
      { id: "urgent", label: "Within 1 month", desc: "High priority" },
      { id: "standard", label: "1-3 months", desc: "Optimal pace" },
      { id: "flexible", label: "3+ months", desc: "Strategic planning" },
    ]
  }
];

const ProjectPlanner = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (stepId: string, optionId: string) => {
    setSelections(prev => ({ ...prev, [stepId]: optionId }));
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Project plan received! We'll analyze your vision and reach out.");
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <section id="planner" className="relative py-32 overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-6 block">Strategy</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
              Plan Your <span className="text-gradient">Digital Legacy</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Answer a few questions to help us understand your vision.
            </p>
          </div>

          <div className="relative glass-premium rounded-[3rem] p-8 md:p-16 overflow-hidden">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
              <motion.div 
                className="h-full bg-gradient-aurora"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-12">
                    <h3 className="font-display text-2xl md:text-3xl font-bold">
                      {steps[currentStep].title}
                    </h3>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                      Step {currentStep + 1} of {steps.length}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-12">
                    {steps[currentStep].options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleSelect(steps[currentStep].id, option.id)}
                        className={`group relative p-8 rounded-3xl border text-left transition-all duration-500 ${
                          selections[steps[currentStep].id] === option.id
                            ? "bg-primary/10 border-primary shadow-glow-primary"
                            : "bg-white/5 border-white/10 hover:border-primary/50"
                        }`}
                      >
                        {option.icon && (
                          <option.icon className={`w-8 h-8 mb-6 transition-colors ${
                            selections[steps[currentStep].id] === option.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                          }`} />
                        )}
                        <div className="font-display font-bold text-xl mb-2">{option.label}</div>
                        <div className="text-sm text-muted-foreground">{option.desc}</div>
                        
                        {selections[steps[currentStep].id] === option.id && (
                          <motion.div 
                            layoutId="check"
                            className="absolute top-6 right-6 text-primary"
                          >
                            <CheckCircle2 className="w-6 h-6" />
                          </motion.div>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      disabled={currentStep === 0}
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors disabled:opacity-0"
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    
                    {currentStep === steps.length - 1 && selections[steps[currentStep].id] && (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                        <MagneticButton onClick={handleSubmit} className="h-14 px-10">
                          Finalize Plan <Sparkles className="ml-2 w-4 h-4" />
                        </MagneticButton>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-display text-4xl font-bold mb-6">Vision Captured</h3>
                  <p className="text-xl text-muted-foreground mb-12 max-w-md mx-auto">
                    We've received your project details. Our team is already analyzing the trajectory for your digital growth.
                  </p>
                  <MagneticButton onClick={() => setIsSubmitted(false)} variant="ghost">
                    Start Over
                  </MagneticButton>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPlanner;