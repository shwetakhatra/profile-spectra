export interface Profile {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: {
      street: any; 
      city: string;
      state: string;
      country: string;
      postcode: number;
      coordinates: any; 
      timezone: any;
    };
    email: string;
    login: {
      uuid: string;
      username: string;
      password: string;
      salt: string;
      md5: string;
      sha1: string;
      sha256: string;
    };
    dob: {
      date: string;
      age: number;
    };
    registered: {
      date: string;
      age: number;
    };
    phone: string;
    cell: string;
    id: {
      name: string;
      value: string;
    };
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nat: string;
}