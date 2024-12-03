export interface Clinic {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  appointmentUrl?: string;
  hours: {
    [key: string]: string;
  };
  services: string[];
  image: string;
  location: {
    lat: number;
    lng: number;
  };
  emergency?: {
    available24Hours: boolean;
    emergencyPhone?: string;
    emergencyServices: string[];
    outOfHoursInfo?: string;
  };
}

export const clinics: Clinic[] = [
  {
    id: "1",
    name: "British Veterinary Centre",
    address: "Villa 313, Khalifa City A, Abu Dhabi",
    phone: "+971 2 556 2024",
    email: "info@britvet.com",
    website: "https://britvet.com",
    appointmentUrl: "https://britvet.com/book-appointment",
    hours: {
      Monday: "8:00 AM - 8:00 PM",
      Tuesday: "8:00 AM - 8:00 PM",
      Wednesday: "8:00 AM - 8:00 PM",
      Thursday: "8:00 AM - 8:00 PM",
      Friday: "2:00 PM - 8:00 PM",
      Saturday: "8:00 AM - 8:00 PM",
      Sunday: "8:00 AM - 8:00 PM"
    },
    services: [
      "General Checkups",
      "Surgery",
      "Dental Care",
      "Vaccinations",
      "Emergency Care",
      "Pet Boarding",
      "Laboratory Services",
      "Ultrasound"
    ],
    emergency: {
      available24Hours: true,
      emergencyPhone: "+971 50 123 4567",
      emergencyServices: [
        "Critical Care",
        "Emergency Surgery",
        "Trauma Care",
        "Poison Control"
      ]
    },
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80",
    location: {
      lat: 24.4229,
      lng: 54.5733
    }
  },
  {
    id: "2",
    name: "German Veterinary Clinic",
    address: "Villa 27, Khalifa City A, Abu Dhabi",
    phone: "+971 2 556 2024",
    email: "info@germanvet.ae",
    website: "https://germanvet.ae",
    appointmentUrl: "https://germanvet.ae/contact-us/",
    hours: {
      Monday: "9:00 AM - 9:00 PM",
      Tuesday: "9:00 AM - 9:00 PM",
      Wednesday: "9:00 AM - 9:00 PM",
      Thursday: "9:00 AM - 9:00 PM",
      Friday: "4:00 PM - 9:00 PM",
      Saturday: "9:00 AM - 9:00 PM",
      Sunday: "9:00 AM - 9:00 PM"
    },
    services: ["Pet Surgery", "Internal Medicine", "Dermatology", "Pet Boarding", "Grooming"],
    emergency: {
      available24Hours: true,
      emergencyServices: ["Emergency Surgery", "Critical Care", "Intensive Care"],
      outOfHoursInfo: "24/7 emergency service available"
    },
    image: "https://images.unsplash.com/photo-1584486483122-af7d49cf2992?auto=format&fit=crop&w=800&q=80",
    location: {
      lat: 24.4229,
      lng: 54.5733
    }
  },
  {
    id: "3",
    name: "American Veterinary Clinic",
    address: "Mushrif Area, Abu Dhabi",
    phone: "+971 2 446 1166",
    email: "info@avc.ae",
    website: "https://americanvet.ae",
    appointmentUrl: "https://americanvet.ae/book-appointment",
    hours: {
      Monday: "8:00 AM - 8:00 PM",
      Tuesday: "8:00 AM - 8:00 PM",
      Wednesday: "8:00 AM - 8:00 PM",
      Thursday: "8:00 AM - 8:00 PM",
      Friday: "2:00 PM - 8:00 PM",
      Saturday: "8:00 AM - 8:00 PM",
      Sunday: "8:00 AM - 8:00 PM"
    },
    services: ["General Medicine", "Surgery", "Dental Care", "Pet Grooming", "Emergency Services"],
    emergency: {
      available24Hours: false,
      emergencyPhone: "+971 50 987 6543",
      emergencyServices: ["Emergency Surgery", "Critical Care"],
      outOfHoursInfo: "Emergency services available until 11:00 PM"
    },
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80",
    location: {
      lat: 24.4486,
      lng: 54.3788
    }
  },
  {
    id: "4",
    name: "Pet Friends Group",
    address: "Al Wahda Mall Extension, Abu Dhabi",
    phone: "+971 2 443 4393",
    email: "info@petfriendsgroup.com",
    website: "https://petfriendsgroup.com",
    appointmentUrl: "https://petfriendsgroup.com/book-appointment",
    hours: {
      Monday: "10:00 AM - 10:00 PM",
      Tuesday: "10:00 AM - 10:00 PM",
      Wednesday: "10:00 AM - 10:00 PM",
      Thursday: "10:00 AM - 10:00 PM",
      Friday: "2:00 PM - 10:00 PM",
      Saturday: "10:00 AM - 10:00 PM",
      Sunday: "10:00 AM - 10:00 PM"
    },
    services: [
      "General Checkups",
      "Vaccinations",
      "Surgery",
      "Dental Care",
      "Pet Grooming",
      "Pet Hotel",
      "Emergency Care",
      "Exotic Pet Medicine",
      "Bird Medicine"
    ],
    emergency: {
      available24Hours: false,
      emergencyPhone: "+971 50 555 1234",
      emergencyServices: ["Emergency Care", "Critical Care"],
      outOfHoursInfo: "Emergency services available until midnight"
    },
    image: "https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?auto=format&fit=crop&w=800&q=80",
    location: {
      lat: 24.4697,
      lng: 54.3765
    }
  },
  {
    id: "5",
    name: "Royal Veterinary Centre",
    address: "Khalifa City A, Abu Dhabi",
    phone: "+971 2 556 2320",
    email: "info@royalvet.ae",
    website: "",
    appointmentUrl: "",
    hours: {
      Monday: "8:00 AM - 8:00 PM",
      Tuesday: "8:00 AM - 8:00 PM",
      Wednesday: "8:00 AM - 8:00 PM",
      Thursday: "8:00 AM - 8:00 PM",
      Friday: "2:00 PM - 8:00 PM",
      Saturday: "8:00 AM - 8:00 PM",
      Sunday: "8:00 AM - 8:00 PM"
    },
    services: ["General Medicine", "Surgery", "Vaccinations", "Pet Boarding"],
    image: "https://images.unsplash.com/photo-1583336663277-620dc1996580?auto=format&fit=crop&w=800&q=80",
    location: {
      lat: 24.4229,
      lng: 54.5733
    }
  },
  {
    id: "6",
    name: "Swiss Veterinary Clinic",
    address: "Al Salam Street, Abu Dhabi",
    phone: "+971 2 676 7666",
    email: "info@swissveterinaryclinic.com",
    website: "https://swissveterinaryclinic.com",
    appointmentUrl: "https://swissveterinaryclinic.com/book-appointment",
    hours: {
      Monday: "8:00 AM - 8:00 PM",
      Tuesday: "8:00 AM - 8:00 PM",
      Wednesday: "8:00 AM - 8:00 PM",
      Thursday: "8:00 AM - 8:00 PM",
      Friday: "2:00 PM - 8:00 PM",
      Saturday: "8:00 AM - 8:00 PM",
      Sunday: "8:00 AM - 8:00 PM"
    },
    services: [
      "General Medicine",
      "Surgery",
      "Dental Care",
      "Vaccinations",
      "Emergency Care",
      "Pet Boarding",
      "Grooming",
      "Laboratory Services",
      "Ultrasound",
      "Digital X-Ray"
    ],
    emergency: {
      available24Hours: true,
      emergencyPhone: "+971 50 123 7890",
      emergencyServices: [
        "Emergency Surgery",
        "Critical Care",
        "Trauma Care",
        "Intensive Care Unit"
      ]
    },
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80",
    location: {
      lat: 24.4858,
      lng: 54.3773
    }
  },
  {
    id: "7",
    name: "Australian Veterinary Hospital",
    address: "Reem Island, Abu Dhabi",
    phone: "+971 2 666 5999",
    email: "info@australianvet.com",
    website: "http://australianvet.com",
    appointmentUrl: "http://australianvet.com/book-appointment",
    hours: {
      Monday: "8:00 AM - 8:00 PM",
      Tuesday: "8:00 AM - 8:00 PM",
      Wednesday: "8:00 AM - 8:00 PM",
      Thursday: "8:00 AM - 8:00 PM",
      Friday: "2:00 PM - 8:00 PM",
      Saturday: "8:00 AM - 8:00 PM",
      Sunday: "8:00 AM - 8:00 PM"
    },
    services: [
      "General Medicine",
      "Surgery",
      "Dental Care",
      "Vaccinations",
      "Emergency Care",
      "Pet Boarding",
      "Exotic Pet Care",
      "Laboratory Services",
      "Ultrasound"
    ],
    emergency: {
      available24Hours: true,
      emergencyPhone: "+971 50 666 5999",
      emergencyServices: [
        "Emergency Surgery",
        "Critical Care",
        "Trauma Care",
        "24/7 Emergency Response"
      ],
      outOfHoursInfo: "24/7 emergency service available"
    },
    image: "https://images.unsplash.com/photo-1584486188544-dc2e1417aff1?auto=format&fit=crop&w=800&q=80",
    location: {
      lat: 24.4979,
      lng: 54.3953
    }
  }
];