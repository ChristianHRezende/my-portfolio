interface Experience {
  companyName: string;
  positionName: string;
  description: string;
  imageUrl?: string;
  iconName?: string;
  initialDate: Date;
  isCurrentJob?: boolean;
  finalDate: Date;
}

export type { Experience };
