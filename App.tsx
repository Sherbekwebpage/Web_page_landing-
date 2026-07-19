import { motion } from 'motion/react';
import { BookOpen, GraduationCap, ArrowUpRight } from 'lucide-react';
import HeroSection from './components/HeroSection';
import Achievements from './components/Achievements';
import CourseInfo from './components/CourseInfo';
import BookCatalog from './components/BookCatalog';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import { CHANNEL_LOGO, getDirectDriveUrl } from './data';

export default function App() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Schema.org JSON-LD for Generative Engine Optimization (GEO/SEO)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://iqtidor-biologiya.uz/#organization",
        "name": "Iqtidor Biologiya",
        "url": "https://iqtidor-biologiya.uz",
        "logo": "https://drive.google.com/file/d/1tcNIHCjQAeD4K7V1Qqsw26_WN9NZx7zT/view?usp=drivesdk",
        "description": "Professional biologiya o'quv markazi va darsliklar nashriyoti",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+998942880393",
          "contactType": "customer service",
          "areaServed": "UZ",
          "availableLanguage": ["Uzbek", "Russian"]
        }
      },
      {
        "@type": "Person",
        "@id": "https://iqtidor-biologiya.uz/#person-sherbek",
        "name": "Sherbek Xolbo'tayev",
        "jobTitle": "Oliy toifali biologiya o'qituvchisi, darsliklar muallifi",
        "worksFor": {
          "@id": "https://iqtidor-biologiya.uz/#organization"
        },
        "award": "A+ darajali Biologiya Milliy Sertifikati sohibi, Respublika olimpiada g'oliblari ustozi"
      },
      {
        "@type": "Person",
        "@id": "https://iqtidor-biologiya.uz/#person-muqaddas",
        "name": "Muqaddas Xolbo'tayeva",
        "jobTitle": "Biologiya o'qituvchisi, PhD hammuallif",
        "worksFor": {
          "@id": "https://iqtidor-biologiya.uz/#organization"
        },
        "award": "100% lik biologiya milliy sertifikat sohibi"
      },
      {
        "@type": "Course",
        "@id": "https://iqtidor-biologiya.uz/#course-biology",
        "name": "Yangi Biologiya Online Kursi",
        "description": "Kuzgi sertifikat imtihonlariga eng kuchli va nufuzli ustozlar bilan birga tayyorlanish kursi",
        "provider": {
          "@id": "https://iqtidor-biologiya.uz/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "250000",
          "priceCurrency": "UZS",
          "category": "Education"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "startDate": "2026-06-01",
          "instructor": [
            {
              "@type": "Person",
              "name": "Sherbek Xolbo'tayev"
            },
            {
              "@type": "Person",
              "name": "Muqaddas Xolbo'tayeva"
            }
          ]
        }
      },
      {
        "@type": "Book",
        "@id": "https://iqtidor-biologiya.uz/#book-milliy",
        "name": "Iqtidor Biologiya Milliy Sertifikat Diagnostik Testlar To'plami",
        "author": {
          "@type": "Person",
          "name": "Sherbek Xolbo'tayev"
        },
        "description": "Milliy sertifikat imtihoni formatida tayyorlangan mutlaqo yangi to'plam. Tarkibi 30 ta variantdan iborat bo'lib, test savollari bilan birga 40+3 ko'rinishidagi amaliy hamda yozma ishlar tahlili mavjud.",
        "publisher": {
          "@id": "https://iqtidor-biologiya.uz/#organization"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://uzum.uz/ru/product/iqtidor-biologiya-millij-2944877",
          "priceCurrency": "UZS",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Book",
        "@id": "https://iqtidor-biologiya.uz/#book-masalalar",
        "name": "Iqtidor Biologiya Masalalar To'plami (3-Nashr)",
        "author": {
          "@type": "Person",
          "name": "Sherbek Xolbo'tayev"
        },
        "description": "Qayta to'ldirilgan va eng yangi yozma ish variantlari qo'shilgan mukammal masala kitobi. Tibbiyot oliygohlariga tayyorlanuvchilar va olimpiada ishtirokchilari uchun eng asosiy qo'llanma.",
        "publisher": {
          "@id": "https://iqtidor-biologiya.uz/#organization"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://uzum.uz/product/1937413?utm_source=sharing&utm_medium=product_page_android&utm_campaign=native",
          "priceCurrency": "UZS",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Book",
        "@id": "https://iqtidor-biologiya.uz/#book-mavzulashtirilgan",
        "name": "Mavzulashtirilgan Test Kitobi (5-11-sinflar uchun)",
        "author": {
          "@type": "Person",
          "name": "Sherbek Xolbo'tayev"
        },
        "description": "Maktab darsliklari asosida mavzulashtirilgan, o'quvchini noldan boshlab mukammal darajagacha olib chiquvchi testlar to'plami. Yangilangan muhrli nashr.",
        "publisher": {
          "@id": "https://iqtidor-biologiya.uz/#organization"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://uzum.uz/ru/product/iqtidor-biologiya-sherbek-kholbotaev-yangi-nashr-zheltyj---118-2733357",
          "priceCurrency": "UZS",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "Book",
        "@id": "https://iqtidor-biologiya.uz/#book-talant",
        "name": "Talant Biologiya Masalalar To'plami (Rus tilida)",
        "author": {
          "@type": "Person",
          "name": "Sherbek Xolbo'tayev"
        },
        "description": "Sherbek Xolbo'tayev muallifligidagi rus tilida chop etilgan mukammal masala kitobi (Sbornik zadach). Tibbiyot va olimpiada ishtirokchilari uchun maxsus nashr.",
        "publisher": {
          "@id": "https://iqtidor-biologiya.uz/#organization"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://uzum.uz/ru/product/talant-biologiya-sbornik-zadach-sherbek-kholbotaev-3025314",
          "priceCurrency": "UZS",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-green selection:bg-brand-gold/30 selection:text-brand-green overflow-x-hidden">
      
      {/* JSON-LD Script Injected for AI / Search engines */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} 
      />

      {/* Premium Header/Navbar */}
      <header className="border-b border-brand-green/5 bg-brand-cream/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer animate-fade-in" onClick={() => scrollToId('hero-section')}>
            <div className="w-11 h-11 rounded-xl bg-brand-green flex items-center justify-center border border-brand-gold/30 overflow-hidden shadow-inner">
              <img 
                src={getDirectDriveUrl(CHANNEL_LOGO)} 
                alt="Iqtidor Biologiya Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('header-logo-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div id="header-logo-fallback" className="hidden text-brand-gold font-serif font-bold text-lg">IB</div>
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-tight block text-brand-green leading-none">IQTIDOR</span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-gold">Biologiya</span>
            </div>
          </div>

          {/* Nav links (Desktop only) */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-brand-green/80">
            <button 
              onClick={() => scrollToId('hero-section')} 
              className="hover:text-brand-gold transition-colors focus:outline-none"
            >
              Mualliflar
            </button>
            <button 
              onClick={() => scrollToId('achievements')} 
              className="hover:text-brand-gold transition-colors focus:outline-none"
            >
              Yutuqlar
            </button>
            <button 
              onClick={() => scrollToId('course-info')} 
              className="hover:text-brand-gold transition-colors focus:outline-none"
            >
              Onlayn Kurs
            </button>
            <button 
              onClick={() => scrollToId('catalog')} 
              className="hover:text-brand-gold transition-colors focus:outline-none"
            >
              Kitoblar
            </button>
            <button 
              onClick={() => scrollToId('faq')} 
              className="hover:text-brand-gold transition-colors focus:outline-none"
            >
              FAQ
            </button>
          </nav>

          {/* Quick contact CTA */}
          <div>
            <button 
              onClick={() => scrollToId('contact')} 
              className="bg-brand-green hover:bg-brand-green/95 text-brand-cream hover:text-brand-gold font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center gap-1 border border-brand-gold/20 shadow-sm hover:scale-[1.03] transition-all duration-300"
            >
              Bog'lanish
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Single-View Sections layout with generous spacing */}
      <main>
        {/* BLOK 1: Hero Section and Authors */}
        <HeroSection />

        {/* BLOK 2: Achievements (Social Proof) */}
        <Achievements />

        {/* BLOK 3: New Biology Online Course details */}
        <CourseInfo />

        {/* BLOK 4: Books catalog, horizontal reviews, CTA buttons */}
        <BookCatalog />

        {/* BLOK 5: FAQ section for AI / GEO SEO */}
        <FAQ />

        {/* BLOK 6: Contact Footer */}
        <ContactForm />
      </main>

    </div>
  );
}
