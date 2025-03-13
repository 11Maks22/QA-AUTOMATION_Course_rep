export interface Results {
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
    results: User[];
}

// Interface for Name
export interface Name {
    title: string;
    first: string;
    last: string;
}

// Interface for Street
export interface Street {
    number: number;
    name: string;
}

// Interface for Coordinates
export interface Coordinates {
    latitude: string;
    longitude: string;
}

// Interface for Timezone
export interface Timezone {
    offset: string;
    description: string;
}

// Interface for Location
export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
}

// Interface for Login
export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

// Interface for Date of Birth
export interface DateOfBirth {
    date: string;
    age: number;
}

// Interface for Registration
export interface Registration {
    date: string;
    age: number;
}

// Interface for User ID
export interface UserId {
    name: string;
    value: string | null;
}

// Interface for Picture
export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface Picture {
    Superlarge: string;
}

// Master Interface for User Results
export interface User {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DateOfBirth;
    registered: Registration;
    phone: string;
    cell: string;
    id: UserId;
    picture: Picture;
}

// Master Interface for API Response
// export interface Results {
//     results: User[];
// }

export async function getJson(): Promise<Results> {
    const response = await fetch('https://randomuser.me/api/');
    const json = await response.json() as Results;
    return json;
}

(async () => {
    const data = await getJson();
    console.log(data.results[0]);
    console.log(data.results[0].login.username);
})();


// {
//     "results": [
//       {
//         "gender": "male",
//         "name": {
//           "title": "Mr",
//           "first": "Emre",
//           "last": "Ertepınar"
//         },
//         "location": {
//           "street": {
//             "number": 8174,
//             "name": "Anafartalar Cd"
//           },
//           "city": "Diyarbakır",
//           "state": "Sivas",
//           "country": "Turkey",
//           "postcode": 50873,
//           "coordinates": {
//             "latitude": "72.5373",
//             "longitude": "-154.3575"
//           },
//           "timezone": {
//             "offset": "-8:00",
//             "description": "Pacific Time (US & Canada)"
//           }
//         },
//         "email": "emre.ertepinar@example.com",
//         "login": {
//           "uuid": "562d14b7-8c53-4922-bd79-6a666f66905f",
//           "username": "heavymouse471",
//           "password": "stephanie",
//           "salt": "FXwlKjhn",
//           "md5": "b5561338f638fcc77c8dba03a673a904",
//           "sha1": "9bae869299bdb0c16dd844538ea4500cba122e87",
//           "sha256": "7861306ca3b51a46128d00f925d3ef0451ae68632829278cdf6a969c308ab7d4"
//         },
//         "dob": {
//           "date": "1983-01-26T07:27:34.791Z",
//           "age": 42
//         },
//         "registered": {
//           "date": "2010-04-17T00:19:16.388Z",
//           "age": 14
//         },
//         "phone": "(494)-460-3964",
//         "cell": "(502)-396-3734",
//         "id": {
//           "name": "",
//           "value": null
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/42.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/42.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/42.jpg"
//         },
//         "nat": "TR"
//       }
//     ],
//     "info": {
//       "seed": "0ca11a89043f546b",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//       }
// }
