"use client";

import { motion } from "framer-motion";

interface WaslHeroFormProps {
  title: string;
  subtitle: string;
  formTitle: string;
  form: {
    name: string;
    company: string;
    email: string;
    phone: string;
    vehicles: string;
    submit: string;
    disclaimer: string;
  };
  isAr: boolean;
}

export function WaslHeroForm({ title, subtitle, formTitle, form, isAr }: WaslHeroFormProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 max-w-4xl mx-auto"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-[40px] p-8 md:p-12 text-primary shadow-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 leading-tight">
            {formTitle}
          </h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold block">{form.name}</label>
                <input type="text" placeholder={isAr ? "أحمد عدنان" : "Ahmed Adnan"} className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold block">{form.company}</label>
                <input type="text" placeholder={isAr ? "اسم شركتك" : "Your Company Name"} className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold block">{form.email}</label>
                <input type="email" placeholder="ahmed@example.com" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold block">{form.phone}</label>
                <div className="flex gap-2">
                  <div className="bg-gray-50 border border-gray-100 px-4 py-4 rounded-xl flex items-center gap-2 shrink-0">
                    <span className="text-sm font-bold">+966</span>
                  </div>
                  <input type="tel" placeholder={isAr ? "أدخل رقم هاتف" : "Enter phone number"} className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent outline-none transition-all" />
                </div>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold block">{form.vehicles}</label>
                <input type="number" placeholder={isAr ? "عدد المركبات في وصل" : "Number of vehicles in WASL"} className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent outline-none transition-all" />
              </div>
            </div>
            <button className="accent-button w-full text-xl py-5 mt-4">
              {form.submit}
            </button>
            <p className="text-center text-xs text-gray-400">
              {form.disclaimer}
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
