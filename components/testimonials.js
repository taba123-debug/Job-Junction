import React from "react";
// import { cn } from "@/lib/utils";

const testimonialData = [
  {
    id: 1,
    quote: "The attention to detail and precision in their work exceeded our expectations. A truly remarkable experience.",
    author: "Sarah Johnson",
    position: "CEO, TechVision"
  },
  {
    id: 2,
    quote: "Their innovative approach transformed our business. We've seen a 40% increase in customer engagement since implementation.",
    author: "Michael Chen",
    position: "Marketing Director, Innovate Inc"
  },
  {
    id: 3,
    quote: "Working with this team was seamless from start to finish. The results speak for themselves - simply outstanding.",
    author: "Emily Rodriguez",
    position: "Product Manager, NextWave"
  },
  {
    id: 4,
    quote: "Their design sensibility and technical expertise created a perfect balance of aesthetics and functionality.",
    author: "David Thompson",
    position: "Design Lead, Creative Solutions"
  }
];

const TestimonialCard = ({ quote, author, position }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 h-full flex flex-col justify-between transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
      <div className="mb-6">
        
        <p className="text-sky-900 text-lg leading-relaxed">{quote}</p>
      </div>
      <div>
        <h4 className="font-semibold text-sky-900">{author}</h4>
        <p className="text-sky-700 text-sm">{position}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="inline-block px-4 py-1.5 bg-sky-50 text-sky-800 rounded-full text-4xl font-bold  mb-6 pt-3">Feed Back</h2>
          <p className="text-sky-700 max-w-2xl mx-auto">Discover what our clients have to say about their experience working with us.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialData.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
