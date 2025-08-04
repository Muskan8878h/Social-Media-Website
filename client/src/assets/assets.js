import logo from './logo.svg'
import sample_cover from './sample_cover.jpg'
import sample_profile from './sample_profile.jpg'
import bgImage from './bgImage.png'
import group_users from './group_users.png'
import {Home, MessageCircle, Search, UserIcon, Users} from 'lucide-react'
import sponsored_img from './sponsored_img.jpg'
export const assets={
    logo,
    sample_cover,
    sample_profile,
    bgImage,
    group_users,
    sponsored_img
}
export const menuItemsData=[
    {to:'/', label:'Feed', Icon:Home},
    {to:'/messages',label:"Message", Icon:MessageCircle},
    {to:'connections', label:'Connections', Icon:Users},
    {to:'/discover', label:'Discover',Icon:Search},
    {to:'/profile', label:'Profile', Icon:UserIcon},
]

export const dummyUserData={
    "-id": "user_2zdfZib5lNr614LgkOnD8WG32",
    "email": "adimn@example.com",
    "full_name": "John Warren",
    "username": "John Warren",
    "bio": "Dream | Learner",
    "profie_picture": sample_profile,
    "cover_photo":sample_cover,
    "location": "New York, NY",
    "followers": ["user_2", "user_3"],
    "following": ["user_2", "user_3"],
    "connection": ["user_2", "user_3"],
    "posts":[],
    "is_verified":true,
    "createdAt": "2025-07-09T09:26:59.231Z",
    "updatedAt": "2025-07-21T06:56:50.017Z",
}


const dummyUser2Data = {
    ...dummyUserData,
    _id: "user_2",
    username: "Richard Hendricks",
    full_name: "Richard Hendricks",
    profile_picture: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
}

const dummyUser3Data = {
    ...dummyUserData,
    ...dummyUser2Data,
    _id: "user_3",
    username: "alexa_james",
    full_name: "Alexa james",
    profile_picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=2008fit=crop",
}

export const dummyStoriesData=[
    {dummyUser3Data},
    {
        "_id": "68833d466e4b42b685068860",
        "user": dummyUserData,
        "content":"This isn't the story I wanted to tell... n yet. But if you're reading this, know that something. interesting is in motion C The next post will make mosense *.",
        "media_url":"",
        "media_type":"text",
        "background_color":"#4f46e5",
        "createdAt": "2025-07-25T08:16:06.9582",
        "updatedAt": "2025-07-25T08:16:06.9582",
    },
    {
        "_id": "68833d466e4b42b685068860",
        "user": dummyUserData,
        "content":"This isn't the story I wanted to tell... n yet. But if you're reading this, know that something. interesting is in motion C The next post will make mosense *.",
        "media_url":"",
        "media_type":"text",
        "background_color":"#4f46e5",
        "createdAt": "2025-07-25T08:16:06.9582",
        "updatedAt": "2025-07-25T08:16:06.9582",
    },
    {
        "_id": "68833d466e4b42b685068860",
        "user": dummyUserData,
        "content":"This isn't the story I wanted to tell... n yet. But if you're reading this, know that something. interesting is in motion C The next post will make mosense *.",
        "media_url":"",
        "media_type":"text",
        "background_color":"#4f46e5",
        "createdAt": "2025-07-25T08:16:06.9582",
        "updatedAt": "2025-07-25T08:16:06.9582",
    },
    {
        "_id": "68833d466e4b42b685068860",
        "user": dummyUserData,
        "content":"This isn't the story I wanted to tell... n yet. But if you're reading this, know that something. interesting is in motion C The next post will make mosense *.",
        "media_url":"",
        "media_type":"text",
        "background_color":"#4f46e5",
        "createdAt": "2025-07-25T08:16:06.9582",
        "updatedAt": "2025-07-25T08:16:06.9582",
    }
]