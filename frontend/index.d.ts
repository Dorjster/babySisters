type ProfileType = {
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
    wage: number;
    rating: number;
    driver_license: boolean;
    car: boolean;
    smoker: boolean;
    year_of_experience: number;
        // Other properties...
  };
  passport_id?: string;
  review?: string[];
  otp?: string;
  info_id: string;
};
