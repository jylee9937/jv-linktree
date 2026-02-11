export interface ProfileData {
  name: string;
  bio: string;
  avatar: string;
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: string;
}

export interface MapConfig {
  address: string;
  lat: number;
  lng: number;
  zoom: number;
}

export interface AppData {
  profile: ProfileData;
  links: LinkItem[];
  map: MapConfig;
}
