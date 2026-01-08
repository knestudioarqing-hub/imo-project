export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  specs: {
    beds: number;
    baths: number;
    sqft: string;
  };
  tag: string;
}

export interface NavItem {
  label: string;
  href: string;
}
