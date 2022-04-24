// Sidebar Imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignoutAlt,
    UilUsdSquare,
    // UilMoneyWithdrawl,
} from "@iconscout/react-unicons";

import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
// sidebar data
// creating an empty array, and in this array we will push the menu items(declare) in the sidebar
export const SidebarData = [{
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilPackage,
        heading: "Products",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    },

];

// for cards data
export const CardsData = [{
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value: "25, 970",
        png: UilUsdSquare,
        series: [{
                name: "Sales",
                data: [31, 40, 28, 61, 42, 109, 100],
            },

        ],
    },

    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value: "25, 970",
        png: UilUsdSquare,
        series: [{
                name: "Revenue",
                data: [31, 40, 28, 61, 42, 109, 100],
            },

        ],
    },

    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #F9D59B"
        },
        barValue: 70,
        value: "25, 970",
        png: UilClipboardAlt,
        series: [{
                name: "Expenses",
                data: [31, 40, 28, 61, 42, 109, 100],
            },

        ],
    },
];

// recent updates data

export const UpdatesData = [{
        img: img1,
        name: "John Doe",
        noti: "has ordered Apple smart watch 2500mh battery",
        time: "2 min ago",
    },
    {
        img: img2,
        name: "Anish Mandal",
        noti: "has received Apple smart watch 2500mh battery",
        time: "10 min ago",
    },
    {
        img: img3,
        name: "Anil Mandal",
        noti: "has ordered Macbook Pro mini laptop with i5 processor",
        time: "10 seconds ago",
    },

];