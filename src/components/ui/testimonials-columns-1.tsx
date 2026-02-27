import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  text: string;
  name: string;
  context: string;
  initials: string;
}

const FiveStars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
    ))}
  </div>
);

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ y: "-50%" }}
        transition={{
          duration: props.duration || 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, context, initials }, i) => (
              <div
                key={`${index}-${i}`}
                className="rounded-[6px] bg-card p-7 ring-1 ring-slate-200/50 shadow-none hover:ring-slate-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <FiveStars />
                  <Quote size={20} className="text-primary/15" />
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-foreground">
                  {text}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border/30 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-xs font-semibold text-primary-foreground">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{name}</p>
                    <p className="text-xs text-muted-foreground">{context}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
