export type AuthResponse = {
  token: string;
};

export type Profile = {
  id: string;
  login: string;
  name: string;
  avatar: string;
};

export type NewsItem = {
  id: string;
  title: string;
  image: string;
  content: string;
};
