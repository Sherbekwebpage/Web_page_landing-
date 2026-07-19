import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, BookOpen, GraduationCap, RotateCw, FileCheck, Eye, X } from 'lucide-react';
import { MAIN_AUTHOR, CO_AUTHOR, getDirectDriveUrl } from '../data';

export default function HeroSection() {
  const [sherbekFlipped, setSherbekFlipped] = useState(false);
  const [muqaddasFlipped, setMuqaddasFlipped] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="hero-section" className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      {/* Title block with Playfair Display and Inter */}
      <div className="text-center mb-16 md:mb-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-green/20 bg-brand-green/5 text-xs font-medium tracking-wider uppercase text-brand-green mb-4"
        >
          <Award className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
          O'zbekiston Bo'ylab Biologiya Ta'limi Standarti
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-brand-green tracking-tight leading-tight max-w-4xl mx-auto"
        >
          Iqtidor <span className="italic text-brand-gold">Biologiya</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base text-brand-green/70 max-w-2xl mx-auto mt-4 font-sans tracking-wide leading-relaxed"
        >
          Oliy malaka toifali ustozlar tomonidan yaratilgan, milliy sertifikat va tibbiyot oliygohlariga kirish imtihonlari uchun mukammal darsliklar hamda onlayn o'quv kursi.
        </motion.p>
      </div>

      {/* Grid of Authors */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Sherbek Xolbo'tayev (Main Author) */}
        <motion.article 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center bg-white p-6 md:p-8 rounded-3xl border border-brand-green/5 shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="self-start text-[10px] tracking-widest uppercase font-semibold text-brand-gold mb-3">Asosiy Muallif</span>
          
          {/* Card container with flip mechanism */}
          <div className="relative w-full aspect-[4/5] max-w-[340px] cursor-pointer group select-none perspective"
               onClick={() => setSherbekFlipped(!sherbekFlipped)}
          >
            <motion.div 
              className="w-full h-full relative duration-700 preserve-3d"
              animate={{ rotateY: sherbekFlipped ? 180 : 0 }}
            >
              {/* Front Side: Photo */}
              <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-brand-green/5 border border-brand-green/10">
                <img 
                  src={getDirectDriveUrl(MAIN_AUTHOR.photo || '')} 
                  alt={MAIN_AUTHOR.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    // Fallback visual in case Google Drive gets blocked
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('sherbek-fallback');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                  referrerPolicy="no-referrer"
                />
                
                {/* Fallback Vector Illustration of Sherbek */}
                <div id="sherbek-fallback" className="hidden w-full h-full flex-col items-center justify-center p-8 bg-gradient-to-br from-brand-green to-brand-green/80 text-white text-center">
                  <GraduationCap className="w-16 h-16 text-brand-gold mb-4" />
                  <h3 className="font-serif text-xl font-bold mb-2">{MAIN_AUTHOR.name}</h3>
                  <p className="text-xs text-white/70 max-w-xs">{MAIN_AUTHOR.role}</p>
                </div>

                {/* Overlaid prompt to flip */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-green/90 via-brand-green/60 to-transparent p-4 text-center">
                  <p className="text-white text-xs font-medium flex items-center justify-center gap-1.5 drop-shadow-md">
                    <RotateCw className="w-3.5 h-3.5 text-brand-gold animate-spin-slow" />
                    <strong>Milliy sertifikatni</strong> ko'rish uchun bosing
                  </p>
                </div>
              </div>

              {/* Back Side: National Certificate */}
              <div className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)] rounded-2xl overflow-hidden bg-white border-2 border-brand-gold/40 flex flex-col">
                <div className="bg-brand-green text-white p-3 text-center flex items-center justify-center gap-2">
                  <FileCheck className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs font-serif tracking-wider font-semibold">Sherbek Xolbo'tayev — Milliy Sertifikat</span>
                </div>
                <div className="flex-1 bg-brand-cream/40 p-2 flex items-center justify-center overflow-hidden relative group/cert">
                  <img 
                    src={getDirectDriveUrl(MAIN_AUTHOR.certificateImage)} 
                    alt="Sherbek Xolbo'tayev Biologiya Milliy Sertifikati"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = document.getElementById('sherbek-cert-fallback');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="absolute inset-0 bg-brand-green/30 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxImage(MAIN_AUTHOR.certificateImage);
                      }}
                      className="bg-brand-green text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-brand-gold/30 shadow-md hover:bg-brand-gold hover:text-brand-green hover:scale-105 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Kattaroq ko'rish
                    </button>
                  </div>
                  <div id="sherbek-cert-fallback" className="hidden text-center p-6 text-brand-green">
                    <Award className="w-12 h-12 text-brand-gold mx-auto mb-2" />
                    <p className="text-sm font-semibold"><strong>A+ darajali</strong> Biologiya milliy sertifikat sohibi</p>
                    <p className="text-xs text-brand-green/60 mt-1">Oliy natija tasdiqlangan</p>
                  </div>
                </div>
                <div className="bg-brand-green/5 p-3 text-center border-t border-brand-green/10">
                  <p className="text-brand-green text-[10px] uppercase tracking-wider font-medium">Orqaga qaytish uchun yana bosing</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-6 text-center w-full">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-green">{MAIN_AUTHOR.name}</h3>
            <p className="text-xs text-brand-green/70 max-w-sm mx-auto mt-2 font-sans font-medium">{MAIN_AUTHOR.role}</p>
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {MAIN_AUTHOR.degrees.map((degree, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 rounded-full text-xs font-medium bg-brand-green text-brand-cream border border-brand-gold/30 hover:border-brand-gold transition-colors"
                >
                  {degree}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

        {/* Muqaddas Xolbo'tayeva (Co-Author) */}
        <motion.article 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center bg-white p-6 md:p-8 rounded-3xl border border-brand-green/5 shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="self-start text-[10px] tracking-widest uppercase font-semibold text-brand-gold mb-3">Hammuallif</span>
          
          {/* Card container with flip mechanism */}
          <div className="relative w-full aspect-[4/5] max-w-[340px] cursor-pointer group select-none perspective"
               onClick={() => setMuqaddasFlipped(!muqaddasFlipped)}
          >
            <motion.div 
              className="w-full h-full relative duration-700 preserve-3d"
              animate={{ rotateY: muqaddasFlipped ? 180 : 0 }}
            >
              {/* Front Side: Creative Academic Profile */}
              <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-gradient-to-br from-brand-green to-brand-green/95 border border-brand-green/10 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-between items-start">
                  <GraduationCap className="w-10 h-10 text-brand-gold" />
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase bg-brand-gold/20 text-brand-gold border border-brand-gold/30 font-semibold">
                    PhD
                  </span>
                </div>
                
                <div className="text-center my-auto flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-brand-cream/10 border border-brand-gold/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-10 h-10 text-brand-gold" />
                  </div>
                  <h4 className="font-serif text-xl font-bold tracking-tight text-brand-cream">{CO_AUTHOR.name}</h4>
                  <p className="text-xs text-brand-cream/70 mt-1 max-w-xs">{CO_AUTHOR.role}</p>
                </div>

                <div className="bg-brand-cream/5 border border-brand-cream/10 rounded-xl p-3 text-center">
                  <p className="text-brand-cream/90 text-xs font-medium flex items-center justify-center gap-1.5">
                    <RotateCw className="w-3.5 h-3.5 text-brand-gold animate-spin-slow" />
                    <strong>Milliy sertifikatni</strong> ko'rish uchun bosing
                  </p>
                </div>
              </div>

              {/* Back Side: National Certificate */}
              <div className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)] rounded-2xl overflow-hidden bg-white border-2 border-brand-gold/40 flex flex-col">
                <div className="bg-brand-green text-white p-3 text-center flex items-center justify-center gap-2">
                  <FileCheck className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs font-serif tracking-wider font-semibold">M. Xolbo'tayeva — Milliy Sertifikat</span>
                </div>
                <div className="flex-1 bg-brand-cream/40 p-2 flex items-center justify-center overflow-hidden relative group/cert-co">
                  <img 
                    src={getDirectDriveUrl(CO_AUTHOR.certificateImage)} 
                    alt="Muqaddas Xolbo'tayeva Biologiya Milliy Sertifikati"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = document.getElementById('muqaddas-cert-fallback');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="absolute inset-0 bg-brand-green/30 opacity-0 group-hover/cert-co:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxImage(CO_AUTHOR.certificateImage);
                      }}
                      className="bg-brand-green text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-brand-gold/30 shadow-md hover:bg-brand-gold hover:text-brand-green hover:scale-105 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Kattaroq ko'rish
                    </button>
                  </div>
                  <div id="muqaddas-cert-fallback" className="hidden text-center p-6 text-brand-green">
                    <Award className="w-12 h-12 text-brand-gold mx-auto mb-2" />
                    <p className="text-sm font-semibold"><strong>100% lik</strong> biologiya milliy sertifikat egasi</p>
                    <p className="text-xs text-brand-green/60 mt-1">Oliy natija tasdiqlangan</p>
                  </div>
                </div>
                <div className="bg-brand-green/5 p-3 text-center border-t border-brand-green/10">
                  <p className="text-brand-green text-[10px] uppercase tracking-wider font-medium">Orqaga qaytish uchun yana bosing</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-6 text-center w-full">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-green">{CO_AUTHOR.name}</h3>
            <p className="text-xs text-brand-green/70 max-w-sm mx-auto mt-2 font-sans font-medium">{CO_AUTHOR.role}</p>
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {CO_AUTHOR.degrees.map((degree, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 rounded-full text-xs font-medium bg-brand-green text-brand-cream border border-brand-gold/30 hover:border-brand-gold transition-colors"
                >
                  {degree}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

      </div>

      {/* Full-screen Certificate Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-brand-green/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
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
              className="relative max-w-3xl max-h-[90vh] bg-white p-2 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img 
                src={getDirectDriveUrl(lightboxImage)} 
                alt="Milliy Sertifikat Tasviri"
                className="max-w-full max-h-[85vh] object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
