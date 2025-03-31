<script>
import { USER_MESSAGE_TYPES } from "@public/constants/UserMessageTypes";

export default {
    computed: {
        USER_MESSAGE_TYPES() {
            return USER_MESSAGE_TYPES
        }
    },
    props: {
        showAvatar: Boolean,
        name: String,
        text: String,
        time: String,
        type: String
    }
};
</script>

<template>
    <li :class="['user', type === USER_MESSAGE_TYPES.INCOMING ? '' : 'user--self']">
        <div class="item">
            <template v-if="showAvatar">
                <div class="item__left">
                    <div class="avatar">
                        <i :class="[type === USER_MESSAGE_TYPES.INCOMING ?  'icon-profile-customer' : 'icon-profile-agent']"></i>
                        <span class="avatar__name">{{ type === USER_MESSAGE_TYPES.OUTGOING ? 'ME' : name }}</span>
                    </div>
                </div>
            </template>
            <div class="item__box">
                <div class="item__inner">
                    <span class="item__heading">{{ text }}</span>
                    <span class="item__text">{{ time }}</span>
                </div>
            </div>
        </div>
    </li>
</template>
