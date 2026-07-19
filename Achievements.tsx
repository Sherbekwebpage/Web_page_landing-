import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, TrendingUp, Award, CheckCircle2, Eye, X, ZoomIn } from 'lucide-react';
import { ACHIEVEMENTS, getDirectDriveUrl } from '../data';

export default function Achievements() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="achievements" className="py-16 md:py-24 px-4 bg-brand-green/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-green tracking-tight">
            Erishilgan <span className="italic text-brand-gold">Yutuqlar</span>
          </h2>
          <p className="text-xs md:text-sm text-brand-green/70 mt-2 font-sans max-w-lg mx-auto leading-relaxed">
            Natijalarimiz quruq so'zlar emas, balki rasmiy dalillar bilan tasdiqlangan.
          </p>
        </div>

        {/* Bento Grid */}
        <ul className="grid md:grid-cols-3 gap-6 lg:gap-8" role="list">
          
          {ACHIEVEMENTS.map((item, idx) => {
            const IconComponent = idx === 0 ? Award : idx === 1 ? TrendingUp : CheckCircle2;
            const hasImages = 'images' in item && item.images && item.images.length > 0;
            
            return (
              <li key={item.id} className="h-full">
                <motion.article 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 md:p-8 rounded-3xl border border-brand-green/5 shadow-[0_8px_30px_rgb(15,43,31,0.03)] hover:shadow-[0_8px_30px_rgb(15,43,31,0.06)] hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-green/5 flex items-center justify-center mb-6 group-hover:bg-brand-green/10 transition-colors">
                      <IconComponent className="w-6 h-6 text-brand-gold" />
                    </div>
                    
                    <span className="text-xs text-brand-gold uppercase tracking-wider font-semibold font-mono">
                      {item.subtitle}
                    </span>
                    
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-green mt-2 mb-3 leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs md:text-sm text-brand-green/75 leading-relaxed font-sans font-normal mb-6">
                      {item.description}
                    </p>

                    {/* Render Sochi Olympiad Proof Images directly on the card */}
                    {hasImages && (
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {(item as any).images.map((imgUrl: string, imgIdx: number) => (
                          <div 
                            key={imgIdx} 
                            onClick={() => setLightboxImage(imgUrl)}
                            className="relative aspect-[3/4] rounded-xl overflow-hidden border border-brand-green/10 bg-brand-cream/40 cursor-zoom-in group/img shadow-sm hover:border-brand-gold transition-colors"
                          >
                            <img 
                              src={getDirectDriveUrl(imgUrl)} 
                              alt={`Diyorbek Karimov Sochi OIBO biologiya olimpiada natijasi rasm ${imgIdx + 1}`}
                              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-brand-green/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                              <ZoomIn className="w-5 h-5 text-brand-cream" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Link Button */}
                    <a 
                      href={item.telegramLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-brand-green/10 text-brand-green/80 bg-brand-cream/40 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-300"
                    >
                      <Send className="w-3.5 h-3.5 text-sky-500 fill-sky-500 group-hover:text-white group-hover:fill-white transition-colors" />
                      Manba va Isbot
                    </a>
                  </div>
                </motion.article>
              </li>
            );
          })}

        </ul>
      </div>

      {/* Lightbox / Modal for image preview */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-brand-green/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Yopish"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl max-h-[85vh] bg-white p-2 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img 
                src={getDirectDriveUrl(lightboxImage)} 
                alt="Milliy sertifikat yoki Olimpiada natijasi tasviri"
                className="max-w-full max-h-[80vh] object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
