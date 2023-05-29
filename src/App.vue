<script setup>
import OverviewIcon from "./icons/OverviewIcon";
import ShoppingIcon from "./icons/ShoppingIcon";
import GraphIcon from "./icons/GraphIcon";
import Calendaricon from "./icons/Calendaricon";
import WalletIcon from "./icons/WalletIcon";
import Fileicon from "./icons/Fileicon";
import ChatIcon from "./icons/ChatIcon";
import GroupChatIcon from "./icons/GroupChatIcon";
import SetingsIcon from "./icons/SetingsIcon";
import LogoutIcon from "./icons/LogoutIcon";

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
                    <a href="#" class="hover:text-gray-600">
                        <component
                            :is="item.icon"
                            class="h-4 w-6 fill-current"
                        />
                        {{ item.name }}</a
                    >
                </li>
            </ul>
        </aside>
    </div>
</template>
