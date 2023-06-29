type GeoLocation = {
  lat: string;
  lng: string;
};
type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation
};
type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
}
export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
  username: string;
}

