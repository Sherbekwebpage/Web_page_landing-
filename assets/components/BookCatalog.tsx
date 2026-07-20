import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, ShoppingBag, MessageCircle, ChevronLeft, ChevronRight, Star, FileText } from 'lucide-react';
import { BOOKS, getDirectDriveUrl } from '../data';

// Custom SVG icon for Uzum Market (highly recognizable design)
function UzumIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 120 120" 
      className={className}
      fill="currentColor"
    >
      {/* Uzum signature grape/berry icon shape */}
      <path d="M60 15C35.14 15 15 35.14 15 60s20.14 45 45 45 45-20.14 45-45S84.86 15 60 15zm0 14c17.12 0 31 13.88 31 31s-13.88 31-31 31-31-13.88-31-31 13.88-31 31-31zm-10 16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm20 0c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-10 14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm20 0c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
    </svg>
  );
}

// Subcomponent for the horizontal review slider/carousel
function ReviewSlider({ reviews }: { reviews: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Maximum 3 reviews to be displayed, as requested
  const visibleReviews = reviews.slice(0, 3);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % visibleReviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + visibleReviews.length) % visibleReviews.length);
  };

  if (!visibleReviews.length) return null;

  return (
    <div className="bg-brand-cream/40 rounded-2xl p-4 border border-brand-green/5 relative mt-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
          ))}
        </div>
        <span className="text-[10px] uppercase tracking-wider font-mono text-brand-green/50">Xaridorlar fikri</span>
      </div>

      <div className="min-h-[75px] flex items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.p 
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-xs text-brand-green/90 italic font-sans leading-relaxed"
          >
            {visibleReviews[currentIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Slider Indicators */}
      {visibleReviews.length > 1 && (
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-brand-green/5">
          <button 
            onClick={handlePrev}
            className="p-1 rounded-full hover:bg-brand-green/10 text-brand-green transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex gap-1.5">
            {visibleReviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-brand-gold w-3' : 'bg-brand-green/20'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="p-1 rounded-full hover:bg-brand-green/10 text-brand-green transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function BookCatalog() {
  return (
    <section id="catalog" className="py-16 md:py-24 px-4 bg-brand-cream/25">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-gold">O'quv qo'llanmalari</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-green tracking-tight">
            IQTIDOR Kitoblari <span className="italic text-brand-gold">Katalogi</span>
          </h2>
          <p className="text-xs md:text-sm text-brand-green/70 mt-2 font-sans max-w-lg mx-auto">
            Biologiyadan milliy sertifikat va kirish imtihonlariga mustaqil tayyorlanish uchun professional to'plamlar.
          </p>
        </div>

        {/* Catalog grid */}
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {BOOKS.map((book, idx) => (
            <li key={book.id} className="flex flex-col h-full">
              <motion.article 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-brand-green/5 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all duration-300 h-full"
              >
                {/* Cover Image Area */}
                <div className="bg-brand-cream/30 p-6 flex items-center justify-center relative group overflow-hidden aspect-[3/4]">
                  <img 
                    src={getDirectDriveUrl(book.coverImage)} 
                    alt={book.title}
                    className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback visually clean cover in case Google Drive fails
                      e.currentTarget.style.display = 'none';
                      const fallback = document.getElementById(`book-cover-fallback-${book.id}`);
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  
                  {/* Fallback clean visual with premium book design */}
                  <div id={`book-cover-fallback-${book.id}`} className="hidden absolute inset-0 bg-brand-green p-6 text-white flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-mono tracking-widest bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded border border-brand-gold/30">
                        IQTIDOR
                      </span>
                      <FileText className="w-5 h-5 text-brand-gold" />
                    </div>
                    
                    <div className="my-auto text-center">
                      <h4 className="font-serif text-lg font-bold text-brand-cream line-clamp-3 leading-snug">{book.title}</h4>
                      <p className="text-[10px] text-brand-cream/60 mt-2">Darslik & Qo'llanma</p>
                    </div>

                    <div className="text-[9px] uppercase tracking-wider text-center text-brand-gold/80 font-semibold border-t border-white/10 pt-2">
                      Spectrum Nashriyoti
                    </div>
                  </div>

                  {/* Ribbon badge */}
                  {book.id === 'book-4' && (
                    <span className="absolute top-4 right-4 bg-brand-gold text-brand-green text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm animate-pulse">
                      Yangi
                    </span>
                  )}
                </div>

                {/* Text content area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-brand-green tracking-tight leading-snug min-h-[50px] line-clamp-2">
                      {book.title}
                    </h3>
                    
                    <p className="text-xs text-brand-green/75 mt-2 line-clamp-3 leading-relaxed font-sans font-normal">
                      {book.description}
                    </p>

                    {/* Sample file preview if present */}
                    {book.sampleLink && (
                      <a 
                        href={book.sampleLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-brand-green hover:text-brand-gold transition-colors underline decoration-brand-gold underline-offset-4"
                      >
                        <Send className="w-3 h-3 text-sky-500 fill-sky-500" />
                        Kitobdan Namuna Yuklab Olish
                      </a>
                    )}
                  </div>

                  {/* Review Swipe Slider */}
                  <ReviewSlider reviews={book.reviews} />

                  {/* CTA Buttons - Two buttons stacked as per wireframe specs */}
                  <div className="mt-6 space-y-2.5">
                    
                    {/* Button 1: Uzum Market (Gold/Yellow brand match CTA) */}
                    <a 
                      href={book.uzumLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#D1A43A] hover:bg-[#D1A43A]/90 hover:scale-[1.03] text-brand-green font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all duration-300"
                      title="Uzum Market orqali xarid qilish"
                    >
                      <UzumIcon className="w-5 h-5 text-brand-green" />
                      <span className="text-xs tracking-wider uppercase font-sans font-semibold">Uzum Market</span>
                    </a>

                    {/* Button 2: Telegram Contact with Author (White/Green Border secondary button) */}
                    <a 
                      href="https://t.me/SHERBEK_XOLBUTAYEV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white hover:bg-brand-cream border border-brand-green/20 text-brand-green font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.03] transition-all duration-300 text-xs"
                    >
                      <MessageCircle className="w-4 h-4 text-[#22C55E]" />
                      Ustoz bilan bog'lanish
                    </a>

                  </div>
                </div>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
