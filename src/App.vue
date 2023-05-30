<script setup>
import OverviewIcon from "./icons/overview.svg";

import ShoppingBagIcon from "./icons/shopping-bag.svg";
import GraphIcon from "./icons/graph.svg";
import Calendaricon from "./icons/calendar.svg";
import WalletIcon from "./icons/wallet.svg";
import Fileicon from "./icons/file.svg";
import ChatIcon from "./icons/chat.svg";
import GroupChatIcon from "./icons/group-chat.svg";
import SetingsIcon from "./icons/settings.svg";
import LogoutIcon from "./icons/logout.svg";

import LayerIcon from "./icons/layers.svg";
import DraftIcon from "./icons/draft.svg";
import InvisibleIcon from "./icons/invisible.svg";
import RejeitedIcon from "./icons/rejected.svg";
import MailIcon from "./icons/mail.svg";
import PlusIcon from "./icons/plus.svg";
import FilterIcon from "./icons/filter.svg";
import FigmaIcon from "./icons/figma.svg";
import SketchIcon from "./icons/sketch.svg";
import AIIcon from "./icons/ai.svg";

const sidebar = [
    [
        { name: "Overview", icon: OverviewIcon },
        { name: "Products", icon: ShoppingBagIcon },
        { name: "Analytics", icon: GraphIcon },
        { name: "Schedule", icon: Calendaricon },
        { name: "Payout", icon: WalletIcon },
        { name: "Statemnts", icon: Fileicon },
    ],
    [
        { name: "Help", icon: ChatIcon },
        { name: "Community", icon: GroupChatIcon },
        { name: "Setings", icon: SetingsIcon },
        { name: "Logout", icon: LogoutIcon },
    ],
];

const status = [
    [
        { name: "Published", icon: LayerIcon },
        { name: "Draft", icon: DraftIcon },
        { name: "Hidden", icon: InvisibleIcon },
        { name: "Rejeited", icon: RejeitedIcon },
        { name: "Under Review", icon: MailIcon },
    ],
];

const products = [
    {
        name: "Organic lading page",
        category: "Web design",
        imageUrl: "/img/organic-landing-page.png",
        price: 20,
        dwonloaded: 793,
        rating: 4.9,
        platformicons: [FigmaIcon, SketchIcon],
        createdAt: "12/01/22",
    },
    {
        name: "Traffic lading page",
        category: "Web design",
        imageUrl: "/img/trafic-landing-page.png",
        price: 24,
        downloaded: 34,
        rating: 4.4,
        platformicons: [FigmaIcon, AIIcon],
        createdAt: "10/10/22",
    },
    {
        name: "POS Dashboard",
        category: "Web design",
        imageUrl: "/img/pos-dashboard.png",
        price: 16,
        downloaded: 896,
        rating: 4.6,
        platformicons: [FigmaIcon, SketchIcon],
        createdAt: "01/01/22",
    },
    {
        name: "Gallery page",
        category: "Web design",
        imageUrl: "/img/gallery-landing-page.png",
        price: 38,
        downloaded: 194,
        rating: 4.6,
        platformicons: [FigmaIcon, SketchIcon],
        createdAt: "04/01/22",
    },
    {
        name: "WFH Lading page",
        category: "Web design",
        imageUrl: "/img/wfh-landing-page.png",
        price: 22,
        downloaded: 404,
        rating: 4.3,
        platformicons: [FigmaIcon, SketchIcon],
        createdAt: "12/12/21",
    },
];
</script>
<template>
    <div class="flex max-h-screen w-full bg-gray-50 font-sans text-gray-900">
        <aside class="w-60 border-r border-gray-200 px-10 py-6">
            <img src="/img/logo.png" alt="" class="w-28" />
            <ul v-for="group in sidebar" class="flex flex-col gap-y-6 pt-20">
                <li v-for="item in group">
                    <a
                        href="#"
                        class="group flex items-center gap-x-6 py-2 text-gray-500 hover:text-indigo-600"
                    >
                        <span
                            class="absolute left-0 h-8 w-1.5 -translate-x-full scale-y-0 rounded-r-full bg-indigo-600 transition-transform ease-out group-hover:translate-x-0 group-hover:scale-y-100"
                        />
                        <component
                            :is="item.icon"
                            class="h-6 w-6 fill-current"
                        />
                        <span>{{ item.name }}</span>
                    </a>
                </li>
            </ul>
        </aside>

        <main class="flex-1">
            <div class="flex items-center justify-between px-10 py-7">
                <div>
                    <h1
                        class="text-2xl font-semibold leading-relaxed text-gray-800"
                    >
                        Products
                    </h1>
                    <p class="text-sm font-medium text-gray-500">
                        Let's grow to your business! Create your product and
                        upload here
                    </p>
                </div>
                <button
                    class="inline-flex items-center gap-x-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                >
                    <PlusIcon class="h-6 w-6 fill-current" />
                    <span class="text-sm font-semibold tracking-wide"
                        >Create Item</span
                    >
                </button>
            </div>
            <ul
                v-for="group in status"
                class="flex items-center gap-x-20 border-y border-gray-200 px-4"
            >
                <li v-for="item in group">
                    <button
                        class="group relative flex items-center gap-x-2 px-6 py-6 text-gray-500 hover:text-indigo-600"
                    >
                        <component
                            :is="item.icon"
                            class="h-6 w-6 fill-current"
                        />
                        <span class="font-medium">
                            {{ item.name }}
                            <span
                                class="absolute bottom-0 left-3 z-40 h-0.5 w-full scale-x-0 rounded bg-indigo-400 transition-transform ease-in-out group-hover:scale-x-100"
                            />
                        </span>
                    </button>
                </li>
            </ul>

            <table class="w-full">
                <tr>
                    <td>Product Name</td>
                    <td>Pricing</td>
                    <td>Downloaded</td>
                    <td>Rating</td>
                    <td>Plataforms</td>
                    <td>
                        <FilterIcon class="h-6 w-6 fill-current" />
                    </td>
                </tr>
            </table>
            <tbody>
                <tr v-for="product in products">
                    <td>
                        <img :src="product.imageUrl" alt="" />
                        <span>{{ product.name }}</span>
                    </td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.downloaded }}</td>
                    <td>{{ product.rating }}</td>
                    <td>Plataforms</td>
                    <td>{{ product.createdAt }}</td>
                </tr>
            </tbody>
        </main>
    </div>
</template>
