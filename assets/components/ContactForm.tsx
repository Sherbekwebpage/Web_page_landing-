import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, User, MessageSquare, ArrowUp, Mail, MapPin, Printer } from 'lucide-react';
import { CHANNEL_LOGO, getDirectDriveUrl } from '../data';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [purpose, setPurpose] = useState('');

  // Handle phone input formatting (+998 xx xxx xx xx)
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Ensure it always starts with +998
    if (!value.startsWith('+998')) {
      value = '+998 ';
    }
    
    // Auto insert spaces or filter characters
    setNameAndFormatPhone(value);
  };

  const setNameAndFormatPhone = (val: string) => {
    // Only keep digits and leading plus
    const cleanValue = val.replace(/[^\d+]/g, '');
    
    // Build formatted string
    let formatted = '+998 ';
    const rest = cleanValue.substring(4); // digits after +998

    if (rest.length > 0) {
      formatted += rest.substring(0, 2); // state code
    }
    if (rest.length > 2) {
      formatted += ' ' + rest.substring(2, 5); // 3-digit prefix
    }
    if (rest.length > 5) {
      formatted += ' ' + rest.substring(5, 7); // 2-digit mid
    }
    if (rest.length > 7) {
      formatted += ' ' + rest.substring(7, 9); // 2-digit end
    }

    setPhone(formatted.trim());
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.length < 9 || !purpose.trim()) {
      alert("Iltimos barcha maydonlarni to'g'ri to'ldiring.");
      return;
    }

    // URL encode the message exactly as specified in TZ
    const message = `Ism: ${name}\nTelefon: ${phone}\nMaqsad: ${purpose}`;
    const encodedMessage = encodeURIComponent(message);
    const telegramUrl = `https://t.me/SHERBEK_XOLBUTAYEV?text=${encodedMessage}`;

    // Open user's Telegram app or web
    window.open(telegramUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0F2B1F] text-brand-cream pt-20 pb-10 px-4 border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main contact grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start pb-16 border-b border-white/10">
          
          {/* Info Area (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-brand-gold/30 overflow-hidden shadow-inner">
                <img 
                  src={getDirectDriveUrl(CHANNEL_LOGO)} 
                  alt="Iqtidor Biologiya Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight block text-white leading-none">IQTIDOR</span>
                <span className="text-[11px] tracking-widest uppercase font-bold text-brand-gold">Biologiya</span>
              </div>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Biz bilan <span className="italic text-brand-gold">Bog'laning</span>
            </h2>
            
            <p className="text-xs md:text-sm text-brand-cream/70 font-sans leading-relaxed max-w-sm">
              Kitoblarni ulgurji (optom) sotib olish, onlayn darslarga yozilish yoki boshqa savollar bo'yicha biz bilan tezkor bog'laning.
            </p>

            {/* Structured details */}
            <div className="space-y-4 pt-4 text-xs font-sans text-brand-cream/95">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-gold shrink-0">
                  <Printer className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase text-white/50 tracking-wider">Nashriyot uyi</h4>
                  <p className="font-semibold text-brand-cream">SPECTRUM NASHRIYOTI, Jizzax shahri</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-gold shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase text-white/50 tracking-wider">Asosiy aloqa telefoni</h4>
                  <p className="font-semibold text-brand-cream hover:text-brand-gold transition-colors">
                    <a href="tel:+998942880393">+998 (94) 288-03-93</a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-gold shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase text-white/50 tracking-wider">Sotuv bo'limi raqamlari</h4>
                  <p className="font-semibold text-brand-cream">
                    +998 (94) 288-03-93; &nbsp;+998 (93) 855-37-77
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase text-white/50 tracking-wider">Manzil</h4>
                  <p className="font-semibold text-brand-cream">O'zbekiston, Jizzax viloyati</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area (Col 7) */}
          <div className="lg:col-span-7 bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 shadow-lg relative overflow-hidden">
            <h3 className="font-serif text-xl font-bold mb-6 text-white">Xabar yuborish</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Field 1: Name */}
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs text-brand-cream/70 font-medium flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-brand-gold" />
                  Ism familiya
                </label>
                <input 
                  type="text" 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Misol: Sherali Rahmonov"
                  required
                  className="w-full bg-white/10 focus:bg-white/15 focus:outline-none focus:ring-1 focus:ring-brand-gold rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 border border-white/10 transition-all font-sans"
                />
              </div>

              {/* Field 2: Phone */}
              <div className="space-y-1">
                <label htmlFor="phone" className="text-xs text-brand-cream/70 font-medium flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  Telefon raqam
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+998 94 288 03 93"
                  required
                  className="w-full bg-white/10 focus:bg-white/15 focus:outline-none focus:ring-1 focus:ring-brand-gold rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 border border-white/10 transition-all font-sans"
                />
              </div>

              {/* Field 3: Purpose */}
              <div className="space-y-1">
                <label htmlFor="purpose" className="text-xs text-brand-cream/70 font-medium flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-brand-gold" />
                  Nima maqsadda yozmoqdasiz?
                </label>
                <textarea 
                  id="purpose"
                  rows={4}
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="Xabaringiz mazmuni, xarid qilmoqchi bo'lgan kitoblaringiz yoki kurs bo'yicha savollaringiz..."
                  required
                  className="w-full bg-white/10 focus:bg-white/15 focus:outline-none focus:ring-1 focus:ring-brand-gold rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 border border-white/10 transition-all font-sans resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button 
                type="submit"
                className="w-full bg-[#D1A43A] hover:bg-[#D1A43A]/90 hover:scale-[1.01] active:scale-[0.99] text-brand-green font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all duration-300 uppercase tracking-wider text-xs"
              >
                <Send className="w-4 h-4 fill-brand-green text-brand-green" />
                Xabarni Telegram orqali yuborish
              </button>

              <p className="text-[10px] text-center text-brand-cream/40 font-sans mt-2">
                * Tugma bosilganda avtomatik ravishda ma'lumotlar bilan tayyorlangan Telegram ochiladi.
              </p>

            </form>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-cream/50 font-sans">
          <p>© {new Date().getFullYear()} Iqtidor Biologiya. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-brand-gold transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
