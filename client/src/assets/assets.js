import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Nihath",
    "email": "user.greatstack@gmail.com",
    // "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "image": "data:image/jpeg;base64,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",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

// Hotel Dummy Data
export const hotelDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Mohamed Nihath",
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "New York",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Rooms Dummy Data
export const roomsDummyData = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f76452197ac559e4089b8e",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 299,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:25:22.593Z",
        "updatedAt": "2025-04-10T06:25:22.593Z",
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 249,
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:24:06.285Z",
        "updatedAt": "2025-04-10T06:24:06.285Z",
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b7a",
        "hotel": hotelDummyData,
        "roomType": "Single Bed",
        "pricePerNight": 199,
        "amenities": ["Free WiFi", "Room Service", "Pool Access"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    }
]



// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/