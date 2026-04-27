// API raw response type
export type ApiUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  address?: {
    city?: string;
  };
};

export type ApiResponse = {
  users: ApiUser[];
};

// UI model (used in table)
export type DummyUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  city?: string;
};

// Mapper (API → UI clean format)
export const mapUsers = (users: ApiUser[]): DummyUser[] => {
  return users.map((u) => ({
    id: u.id,
    firstName: u.firstName,
    lastName: u.lastName,
    email: u.email,
    phone: u.phone,
    age: u.age,
    city: u.address?.city,
  }));
};
