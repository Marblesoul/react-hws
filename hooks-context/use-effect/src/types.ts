export type UserPreview = {
  id: number;
  name: string;
};

export type UserDetails = UserPreview & {
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
};

export type DetailsProps = {
  info: UserPreview | null;
};
