const walkthrough = [
    {
        id: 0,
        title: "Share Your Food",
        sub_title: "Share your food to the others to handle the food crisis and reuce the food waste",
    },
    {
        id: 1,
        title: "Create Campaign",
        sub_title: "Create your own campaign, and help the others",
    },
]

const home_tabs = [
    {
        id: 0,
        label: "Product"
    },
    {
        id: 1,
        label: "My Chart"
    },
    {
        id: 2,
        label: "Service"
    }
]

const dashboard_screens = {
    home: "Home",
    category: "Category",
    promo: "Promo",
    profile: "Profile",
}

const bottom_tabs = [
    {
        id: 0,
        label: dashboard_screens.home,
    },
    {
        id: 1,
        label: dashboard_screens.category,
    },
    {
        id: 2,
        label: dashboard_screens.promo,
    },
    {
        id: 3,
        label: dashboard_screens.profile,
    }
]

const scan_product_option = {
    qr: "QR",
    camera: "CAMERA"
}

export default {
    walkthrough,
    home_tabs,
    dashboard_screens,
    bottom_tabs,
    scan_product_option
}