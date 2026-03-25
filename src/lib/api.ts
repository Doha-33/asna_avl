const BASE_URL = "https://fletobackend.onrender.com";

export async function fetchApi(endpoint: string, timeout = 30000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      signal: controller.signal
    });
    clearTimeout(id);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    clearTimeout(id);
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

export interface Settings {
  _id: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  youtube: string;
  aboutUsAr: string;
  aboutUsEn: string;
  phoneNumber: string;
}

export async function fetchSettings(): Promise<Settings | null> {
  return fetchApi("/api/settings/69b2085ce91f34256c8fa88e");
}

export interface Post {
  _id: string;
  titleAr: string;
  titleEn: string;
  category: string;
  status: string;
  contentAr: string;
  contentEn: string;
  image: string;
  userId: {
    _id: string;
    nameEn: string;
    nameAr: string;
    image: string;
  };
  slug: string;
  createdAt: string;
}

export interface Portfolio {
  _id: string;
  companyName: string;
  logo: string;
  desc: string;
  contractDate: string;
}

export interface Offer {
  _id: string;
  image: string;
  offerName: string;
  desc: string;
  link: string;
}

export interface Client {
  _id: string;
  clientName: string;
  logo: string;
}

export interface FAQ {
  _id: string;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
}

export interface MainCategory {
  _id: string;
  nameAr: string;
  nameEn: string;
  createdAt: string;
  updatedAt: string;
}

export interface SubCategory {
  _id: string;
  fatherId: string;
  nameAr: string;
  nameEn: string;
  createdAt: string;
  updatedAt: string;
}

export interface NestedCategory {
  _id: string;
  nameAr: string;
  nameEn: string;
  subCategoryId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  _id: string;
  category: string; // main category id
  subCategory: string; // sub category id
  subSubCategory: string; // nested category id
  name: string;
  promoTitle: string;
  subTitle: string;
  brand: string;
  price: number;
  network?: string; // ["4G", "2G"]
  sound?: string; // ["With Mike", "Without Mike"]
  interference?: string; // ["Not jam-resistant", "jam-resistant"]
  power?: string; // ["Supports electricity", "No Supports electricity"]
  installation?: string; // ["No technician needed", "technician needed"]
  costPrice: number;
  discountPrice: number;
  weight: number;
  requiresShipping: boolean;
  sku: string;
  trackQuantity: boolean;
  maxQuantityPerCustomer: number;
  channels: string[];
  description: string;
  media: string[];
  imageUrl: string;
  seoTitle?: string;
  seoUrl?: string;
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
}
