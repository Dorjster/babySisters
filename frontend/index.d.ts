export type ProfileType = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  address?: string;
  about?: string;
  gender?: boolean;
  image?: string;
  verification?: boolean;
  info_id: {
    driver_license?: boolean;
    has_children?: boolean;
    location?: string;
    education?: string;
    car?: boolean;
    smoker?: boolean;
    language?: string[];
    skills?: string[];
    year_of_experience?: number;
    character?: string[];
    rating?: number;
    available_time?: object[];
    wage?: number;
  };
  passport_id?: string;
  review?: string[];
  otp?: string;
  role: string;
};

export type ParentType = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  address?: string;
  job_description?: string;
  wage?: number;
  available_time?: object[];
  image: string;
  number_of_children: string[];
  age_of_children: string[];
  verification?: boolean;
  otp?: string;
  role: string;
};
