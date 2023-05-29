<script setup>
import OverviewIcon from "./icons/overview.svg";
import ShoppingIcon from "./icons/shopping-bag.svg";
import GraphIcon from "./icons/graph.svg";
import Calendaricon from "./icons/calendar.svg";
import WalletIcon from "./icons/wallet.svg";
import FileIcon from "./icons/file.svg";
import ChatIcon from "./icons/chat.svg";
import GroupChatIcon from "./icons/group-chat.svg";
import SetingsIcon from "./icons/settings.svg";
import LogoutIcon from "./icons/logout.svg";

const sidebar = [
    [
        { name: "Overview", icon: "OverviewIcon" },
        { name: "Products", icon: "ShoppingIcon" },
        { name: "Analytics", icon: "GraphIcon" },
        { name: "Schedule", icon: "Calendaricon" },
        { name: "Payout", icon: "WalletIcon" },
        { name: "Statemnts", icon: "Fileicon" },
    ],
    [
        { name: "Help", icon: "ChatIcon" },
        { name: "Community", icon: "GroupChatIcon" },
        { name: "Setings", icon: "SetingsIcon" },
        { name: "Logout", icon: "LogoutIcon" },
    ],
];
</script>
<template>
    <div class="max-h-screen w-full bg-gray-50 font-sans text-gray-900">
        <aside class="w-60 border-r border-gray-200 px-10 py-6">
            <img src="/img/logo.png" alt="" class="w-28" />
            <ul v-for="group in sidebar" class="flex flex-col gap-y-6 pt-20">
                <li v-for="item in group" class="text-gray-400">
                    <img :src="item.icon" alt="" />
                    <a href="#" class="hover:text-gray-600">{{ item.name }}</a>
                </li>
            </ul>
        </aside>
    </div>
</template>
