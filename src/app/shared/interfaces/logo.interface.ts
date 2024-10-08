export interface LogoResponse {
  results: Logo[];
}

export interface Logo {
  user: User;
  seed: string;
  version: string;
}

export interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
  registered: string;
  dob: string;
  phone: string;
  cell: string;
  SSN: string;
  picture: string;
}

export interface Location {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}
