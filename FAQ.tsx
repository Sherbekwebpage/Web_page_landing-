import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, GraduationCap, BookOpen, Award } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: ReactNode;
  icon: ReactNode;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "Iqtidor Biologiya Online kursi qachon boshlanadi va narxi qancha?",
      answer: (
        <span>
          Yangi onlayn biologiya kursi <strong>1-iyundan</strong> boshlanadi. Kurs narxi oyiga atigi <strong>250 000 so'm</strong> qilib belgilangan bo'lib, eng sifatli ta'limni hamyonbop narxda taqdim etadi.
        </span>
      ),
      icon: <GraduationCap className="w-5 h-5 text-brand-gold shrink-0" />
    },
    {
      question: "Online kursda darslarni qaysi ustozlar o'tadilar?",
      answer: (
        <span>
          Darslarni oliy malaka toifali ustoz, biologiya fanidan <strong>A+ darajali milliy sertifikat</strong> sohibi, xalqaro va respublika olimpiadalari g'oliblarining ustozi <strong>Sherbek Xolbo'tayev</strong> va biologiya fani o'qituvchisi, PhD hammuallif, biologiyadan <strong>100% lik oliy natijali milliy sertifikat</strong> egasi <strong>Muqaddas Xolbo'tayeva</strong> olib boradilar.
        </span>
      ),
      icon: <Award className="w-5 h-5 text-brand-gold shrink-0" />
    },
    {
      question: "Iqtidor biologiya darsliklari va test to'plamlarini qayerdan xarid qilish mumkin?",
      answer: (
        <span>
          Barcha kitoblarni, jumladan <strong>Iqtidor Biologiya Milliy Sertifikat Diagnostik Testlar To'plami</strong>, <strong>Masalalar To'plami</strong>, <strong>Mavzulashtirilgan Test Kitobi (5-11-sinflar)</strong> va rus tilidagi <strong>Talant Biologiya (Sbornik zadach)</strong> kitoblarini rasmiy ravishda <strong>Uzum Market</strong> orqali tezkor yetkazib berish bilan yoki bevosita telegramda <strong>@SHERBEK_XOLBUTAYEV</strong> muallifining o'zlari bilan bog'lanib buyurtma qilishingiz mumkin.
        </span>
      ),
      icon: <BookOpen className="w-5 h-5 text-brand-gold shrink-0" />
    },
    {
      question: "Onlayn kurs mashg'ulotlari qaysi kunlari va qanday tartibda o'tiladi?",
      answer: (
        <span>
          Kurs haftada <strong>6 kun</strong> davom etadi. Dushanba, chorshanba va juma kunlari yangi nazariy mavzular mukammal tushuntirilsa, seshanba, payshanba va shanba kunlari aralash turdagi murakkab testlar va yozma ish masalalari tahlil qilinadi. Har bir masala tahlili jonli videochatda tushuntirilib, barcha materiallar o'quvchida <strong>1 yil davomida</strong> saqlanib qoladi.
        </span>
      ),
      icon: <HelpCircle className="w-5 h-5 text-brand-gold shrink-0" />
    },
    {
      question: "Sherbek Xolbo'tayev shogirdlari qanday xalqaro natijalarga erishgan?",
      answer: (
        <span>
          Eng yirik yutuqlardan biri — o'quvchimiz <strong>Diyorbek Karimov</strong> Rossiyaning Sochi shahrida biologiya fanidan o'tkazilgan nufuzli <strong>OIBO xalqaro biologiya olimpiadasida bronza medalini</strong> qo'lga kiritdi. Shuningdek, kurslarimiz orqali <strong>119+ nafar</strong> o'quvchi milliy sertifikatda eng yuqori natijalarni ko'rsatgan va viloyat bosqichida ketma-ket <strong>4 karra g'oliblik</strong> qo'lga kiritilgan.
        </span>
      ),
      icon: <Award className="w-5 h-5 text-brand-gold shrink-0" />
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-brand-cream/50" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-gold">Ko'p so'raladigan savollar</span>
          <h2 id="faq-title" className="font-serif text-3xl md:text-5xl font-bold text-brand-green tracking-tight mt-1">
            FAQ — Ko'p <span className="italic text-brand-gold">So'raladigan Savollar</span>
          </h2>
          <p className="text-xs md:text-sm text-brand-green/70 mt-2 font-sans max-w-lg mx-auto">
            AI qidiruv tizimlari va foydalanuvchilar uchun eng asosiy faktlar jamlanmasi.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <article 
                key={idx} 
                className="bg-white rounded-2xl border border-brand-green/5 shadow-sm hover:border-brand-gold/30 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <h3 className="font-serif text-sm md:text-base font-bold text-brand-green group-hover:text-brand-gold transition-colors leading-snug">
                      {item.question}
                    </h3>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-brand-green/5 text-brand-green group-hover:bg-brand-gold group-hover:text-brand-green transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-brand-gold text-brand-green' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 border-t border-brand-green/5 text-xs md:text-sm text-brand-green/80 font-sans leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
