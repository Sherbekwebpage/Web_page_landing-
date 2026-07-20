import { Author, Book, CourseDetail } from './types';

export function getDirectDriveUrl(url: string): string {
  if (!url) return '';
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    // Standard lh3 service for direct image viewing with bypass
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  return url;
}

export const MAIN_AUTHOR: Author = {
  name: "Sherbek Xolbo'tayev Mamatmurod o'g'li",
  role: "Jizzax davlat pedagogika universiteti akademik litseyi biologiya fani o'qituvchisi",
  degrees: [
    "OLIY malaka toifasi",
    "A+ darajali Biologiya milliy sertifikat sohibi",
    "BMBA malaka kursi sertifikati egasi"
  ],
  photo: "https://drive.google.com/file/d/18-8XTVx46DCBbgAl53AtLVAV6yzdzrSb/view?usp=drivesdk",
  certificateImage: "https://drive.google.com/file/d/14yL9SvWUadj_cLc_WyXryhkFN1Rzu_KQ/view?usp=drivesdk"
};

export const CO_AUTHOR: Author = {
  name: "Muqaddas Xolbo'tayeva Mamatmurodovna",
  role: "Jizzax davlat pedagogika universiteti katta o'qituvchisi",
  degrees: [
    "Biologiya fanlari falsafa doktori (PhD)",
    "OLIY toifali ustoz",
    "\"Shuhrat\" medali sohibasi",
    "100% lik biologiya milliy sertifikat egasi"
  ],
  // Wait, no photo is listed for Muqaddas, only her certificate! Let's handle it gracefully by showing a beautiful vector/placeholder or her certificate directly.
  certificateImage: "https://drive.google.com/file/d/1Ot5y3wYHr5-vRoDFySOB6ZRJDfo2G-Ym/view?usp=drivesdk"
};

export const CHANNEL_LOGO = "https://drive.google.com/file/d/1tcNIHCjQAeD4K7V1Qqsw26_WN9NZx7zT/view?usp=drivesdk";

export const ACHIEVEMENTS = [
  {
    id: "sochi-olympiad",
    title: "Xalqaro OIBO Bronza Medali",
    subtitle: "Xalqaro Olimpiada G'alabasi",
    description: "Shogirdimiz Diyorbek Karimov Rossiyaning Sochi shahrida o'tkazilgan biologiya fanidan OIBO xalqaro olimpiadasida bronza medalni qo'lga kiritdi.",
    telegramLink: "https://t.me/Olimpbiologiya/8704", // Default fallback channel link
    images: [
      "https://drive.google.com/file/d/1Qiw6RBHZsOn7WzAahYF6kDn7HpiWj1h4/view?usp=drivesdk",
      "https://drive.google.com/file/d/1ypdCMNj3kNH_5k3it40mBApobFVW3f81/view?usp=drivesdk"
    ]
  },
  {
    id: "results",
    title: "119+ Natija",
    subtitle: "Onlayn kurs natijalari (2025-yil)",
    description: "Milliy sertifikat imtihonlarida 100% lik natija ko'rsatgan o'quvchilar soni 119 tadan ortiq.",
    telegramLink: "https://t.me/Olimpbiologiya/7673"
  },
  {
    id: "olympiad",
    title: "4 Karra G'oliblik",
    subtitle: "Viloyat Bosqichi",
    description: "Ustozning o'quvchilari ketma-ket 4-marta viloyatda g'olib bo'lib, Respublika bosqichiga yo'llanma olishgan.",
    telegramLink: "https://t.me/Olimpbiologiya/8704"
  }
];

export const COURSE_INFO: CourseDetail = {
  startDate: "1-iyun",
  teachers: [
    "Sherbek Xolbo'tayev (Iqtidor kitoblari muallifi, A+ daraja, Oliy toifali)",
    "Muqaddas Xolbo'tayeva (A daraja, Oliy toifali, katta tajribaga ega ustoz)"
  ],
  schedule: [
    {
      days: "Dushanba, chorshanba, juma",
      topics: "Mavzulashtirilgan test va masalalar tahlili"
    },
    {
      days: "Seshanba, payshanba, shanba",
      topics: "Aralash turdagi testlar va savollar"
    }
  ],
  price: "250 000 so'm / oyiga",
  duration: "Kuzgi imtihongacha (imtiyozli sertifikat sanalariga qarab o'zgarishi mumkin)",
  benefit: "Kursni oxirigacha tamomlagan o'quvchilarda barcha o'quv materiallari 1 yil davomida saqlanib qoladi.",
  murojaat: "@SHERBEK_XOLBUTAYEV",
  phone: "+998942880393"
};

export const BOOKS: Book[] = [
  {
    id: "book-1",
    title: "Iqtidor Biologiya Milliy Sertifikat Diagnostik Testlar To'plami",
    description: "Milliy sertifikat imtihoni formatida tayyorlangan mutlaqo yangi to'plam. Tarkibi 30 ta variantdan iborat bo'lib, test savollari bilan birga 40+3 ko'rinishidagi amaliy hamda yozma ishlar tahlili mavjud. O'zbekiston bo'ylab barcha tuman markazlariga yetkaziladi.",
    coverImage: "https://drive.google.com/file/d/1Sx4_cGVHWfG-l4Tg5WcBIg5MlUZa0Ikj/view?usp=drivesdk",
    uzumLink: "https://uzum.uz/ru/product/iqtidor-biologiya-millij-2944877",
    reviews: [
      "Haqiqiy milliy sertifikat darajasidagi savollar. Juda foydali to'plam!",
      "Yozma ish variantlari va tahlillari o'z ustida ishlaydiganlar uchun ajoyib.",
      "O'g'lim uchun oldim, masalalar yechilishi juda batafsil ko'rsatilgan ekan."
    ]
  },
  {
    id: "book-2",
    title: "Iqtidor Biologiya Masalalar To'plami (3-Nashr)",
    description: "Qayta to'ldirilgan va eng yangi yozma ish variantlari qo'shilgan mukammal masala kitobi. Tibbiyot oliygohlariga tayyorlanuvchilar va olimpiada ishtirokchilari uchun eng asosiy qo'llanma.",
    coverImage: "https://drive.google.com/file/d/1LzCbFhOOjLw5DviCIQ8lq284A_PNolH2/view?usp=drivesdk",
    sampleLink: "https://t.me/Olimpbiologiya/7992",
    uzumLink: "https://uzum.uz/product/1937413?utm_source=sharing&utm_medium=product_page_android&utm_campaign=native",
    reviews: [
      "Shahnoza: \"Haqiqatan ham zoʻr kitob ekan. Tibbiyotga tayyorlanadiganlar albatta olinglar!\"",
      "Boboyor: \"Masala yechish usullari mukammal ishlab chiqilgan. Sherbek ustozga hamda yetkazib bergan Uzum Marketga rahmat 😊\"",
      "Anonim xaridor: \"Eng yaxshi sarmoya — ta'lim uchun kiritilgan sarmoyadir!\"",
      "Nomsiz xaridor: \"Kitob zo'r, ustozsiz ham mustaqil tayyorlansa bo'ladi. Olimpiadaga tayyorlanish uchun eng zo'r qo'llanma.\" (Kamchiligi: varag'i biroz nozik)."
    ]
  },
  {
    id: "book-3",
    title: "Mavzulashtirilgan Test Kitobi (5-11-sinflar uchun)",
    description: "Maktab darsliklari asosida mavzulashtirilgan, o'quvchini noldan boshlab mukammal darajagacha olib chiquvchi testlar to'plami. Yangilangan muhrli nashr.",
    coverImage: "https://drive.google.com/file/d/1JS8Dwr0Hf2GQ1DwfTUekQEQqcA0CIS1u/view?usp=drivesdk",
    uzumLink: "https://uzum.uz/ru/product/iqtidor-biologiya-sherbek-kholbotaev-yangi-nashr-zheltyj---118-2733357",
    reviews: [
      "Madina: \"Savollari takrorlanmas va ajoyib.\" (Izoh: keyingi safar barcha darslar yoritilishini so'rayman).",
      "Dilshod: \"A'lo darajada. O'qiydiganlar olishi o'zi uchun juda foydali.\"",
      "Maftuna: \"Mavzulashtirilganligi ajoyib. Biologiyani noldan oʻrganishga juda zoʻr.\""
    ]
  },
  {
    id: "book-4",
    title: "Talant Biologiya Masalalar To'plami (Rus tilida)",
    description: "Sherbek Xolbo'tayev muallifligidagi rus tilida chop etilgan mukammal masala kitobi (Sbornik zadach). Tibbiyot va olimpiada ishtirokchilari uchun maxsus nashr.",
    coverImage: "https://drive.google.com/file/d/1YmWZ2XX8YIy0NKS_MaGpZf5Fus-6OzHL/view?usp=drivesdk", // New Cover image "Talablar kitobi"
    uzumLink: "https://uzum.uz/ru/product/talant-biologiya-sbornik-zadach-sherbek-kholbotaev-3025314",
    reviews: [
      "Xaridor: \"Отличный сборник задач по биологии на русском языке! Очень помогает при подготовке.\"",
      "Учитель: \"Качественные задачи разного уровня сложности. Рекомендую всем выпускникам.\""
    ]
  }
];
