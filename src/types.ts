export interface Book {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  sampleLink?: string;
  uzumLink?: string;
  reviews: string[];
}

export interface Author {
  name: string;
  role: string;
  degrees: string[];
  photo?: string;
  certificateImage: string;
}

export interface CourseDetail {
  startDate: string;
  teachers: string[];
  schedule: {
    days: string;
    topics: string;
  }[];
  price: string;
  duration: string;
  benefit: string;
  murojaat: string;
  phone: string;
}
