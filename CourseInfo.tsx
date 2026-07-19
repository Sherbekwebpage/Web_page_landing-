import { motion } from 'motion/react';
import { Calendar, UserCheck, Clock, CreditCard, Send, PhoneCall, CheckCircle, FileCheck } from 'lucide-react';
import { COURSE_INFO, getDirectDriveUrl, MAIN_AUTHOR, CO_AUTHOR } from '../data';

export default function CourseInfo() {
  return (
    <section id="course-info" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-gold">Mukammal Onlayn Ta'lim</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-green tracking-tight mt-1">
            Yangi Biologiya <span className="italic text-brand-gold">Online Kursi</span>
          </h2>
          <p className="text-xs md:text-sm text-brand-green/70 mt-2 font-sans max-w-lg mx-auto">
            Kuzgi sertifikat imtihonlariga eng kuchli va nufuzli ustozlar bilan birga tayyorlaning.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Course Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header badges */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-brand-cream/40 p-4 rounded-2xl border border-brand-green/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/5 flex items-center justify-center text-brand-green">
                  <Calendar className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-xs text-brand-green/60 font-sans uppercase font-semibold tracking-wider">Boshlanish Sanasi</h4>
                  <p className="font-serif text-base font-bold text-brand-green"><strong>{COURSE_INFO.startDate}</strong></p>
                </div>
              </div>

              <div className="bg-brand-cream/40 p-4 rounded-2xl border border-brand-green/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/5 flex items-center justify-center text-brand-green">
                  <CreditCard className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-xs text-brand-green/60 font-sans uppercase font-semibold tracking-wider">Kurs Narxi</h4>
                  <p className="font-serif text-base font-bold text-brand-green"><strong>{COURSE_INFO.price}</strong></p>
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div className="bg-brand-green text-white p-6 md:p-8 rounded-3xl border border-brand-green/10 shadow-sm">
              <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2 text-brand-cream">
                <Clock className="w-5 h-5 text-brand-gold" />
                Mashg'ulotlar Grafigi (Haftada 6 kun)
              </h3>
              
              <div className="space-y-4">
                {COURSE_INFO.schedule.map((sched, idx) => (
                  <div key={idx} className="flex gap-4 pb-4 border-b border-brand-cream/10 last:border-0 last:pb-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm text-brand-cream">{sched.days}</h4>
                      <p className="text-xs text-brand-cream/70 font-sans mt-0.5">{sched.topics}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Video Analysis */}
              <div className="mt-6 bg-white/5 rounded-2xl p-4 border border-white/10">
                <p className="text-xs text-brand-cream/90 font-sans leading-relaxed">
                  <span className="font-semibold text-brand-gold">Tahlil jarayoni:</span> Har bir test va masala tahlili ertasi kuni jonli videochatda o'tkaziladi hamda video yozuvlari saqlab qolinadi.
                </p>
              </div>
            </div>

            {/* Course Features / Benefits */}
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-brand-green">Ustozlar va mualliflar:</h4>
                  <ul className="list-disc list-inside text-xs text-brand-green/80 mt-1 space-y-1 pl-1">
                    {COURSE_INFO.teachers.map((teacher, idx) => (
                      <li key={idx} className="font-sans">{teacher}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-brand-green">Kuzgi imtihongacha tayyorgarlik:</h4>
                  <p className="text-xs text-brand-green/80 font-sans">{COURSE_INFO.duration}</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-brand-green">Imtiyoz va saqlash kafolati:</h4>
                  <p className="text-xs text-brand-green/80 font-sans">{COURSE_INFO.benefit}</p>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={`https://t.me/SHERBEK_XOLBUTAYEV?text=YANGI%20kursga`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-brand-gold hover:bg-brand-gold/90 text-brand-green font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-sm hover:scale-[1.03] transition-all duration-300"
              >
                <Send className="w-4 h-4 fill-brand-green text-brand-green" />
                Telegram orqali kursga yozilish
              </a>
              
              <a 
                href={`tel:${COURSE_INFO.phone}`}
                className="bg-white hover:bg-brand-cream text-brand-green font-semibold py-4 px-6 rounded-2xl border border-brand-green/20 flex items-center justify-center gap-2 hover:scale-[1.03] transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4 text-brand-green" />
                {COURSE_INFO.phone}
              </a>
            </div>

          </div>

          {/* Right Column: Displaying national certificates of both teachers */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-cream/50 p-6 rounded-3xl border border-brand-green/5 space-y-6">
              <div className="flex items-center gap-2 border-b border-brand-green/10 pb-3">
                <FileCheck className="w-5 h-5 text-brand-gold" />
                <h3 className="font-serif text-lg font-bold text-brand-green">Rasmiy Milliy Sertifikatlar</h3>
              </div>
              
              <p className="text-xs text-brand-green/70 font-sans leading-relaxed">
                Ustozlarimizning chuqur tajribasi va bilim darajasi Davlat Test Markazi tomonidan berilgan biologiya fanining eng yuqori darajali sertifikatlari bilan tasdiqlangan.
              </p>

              {/* Sherbek Certificate Image Card */}
              <div className="space-y-2">
                <span className="text-xs font-serif font-bold text-brand-green block">Sherbek Xolbo'tayev (A+ daraja)</span>
                <div className="bg-white p-2 rounded-2xl border border-brand-green/10 overflow-hidden shadow-sm hover:border-brand-gold transition-colors aspect-[4/3] relative group">
                  <img 
                    src={getDirectDriveUrl(MAIN_AUTHOR.certificateImage)} 
                    alt="Sherbek Xolbo'tayev Milliy Sertifikat"
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = document.getElementById('course-cert-1-fallback');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div id="course-cert-1-fallback" className="hidden absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-brand-green/5">
                    <UserCheck className="w-10 h-10 text-brand-gold mb-1" />
                    <span className="text-xs font-medium text-brand-green">Biologiya Milliy Sertifikati A+</span>
                  </div>
                </div>
              </div>

              {/* Muqaddas Certificate Image Card */}
              <div className="space-y-2">
                <span className="text-xs font-serif font-bold text-brand-green block">Muqaddas Xolbo'tayeva (100% lik natija)</span>
                <div className="bg-white p-2 rounded-2xl border border-brand-green/10 overflow-hidden shadow-sm hover:border-brand-gold transition-colors aspect-[4/3] relative group">
                  <img 
                    src={getDirectDriveUrl(CO_AUTHOR.certificateImage)} 
                    alt="Muqaddas Xolbo'tayeva Milliy Sertifikat"
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = document.getElementById('course-cert-2-fallback');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div id="course-cert-2-fallback" className="hidden absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-brand-green/5">
                    <UserCheck className="w-10 h-10 text-brand-gold mb-1" />
                    <span className="text-xs font-medium text-brand-green">Biologiya Milliy Sertifikati 100%</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
