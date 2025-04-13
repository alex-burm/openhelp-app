<script>
import { USER_MESSAGE_DIRECTION, USER_MESSAGE_STATUSES } from "@public/constants";
import { useConnectionStore } from '@public/stores/ConnectionStore'

export default {
    computed: {
        USER_MESSAGE_DIRECTION() {
            return USER_MESSAGE_DIRECTION
        },
        USER_MESSAGE_STATUSES() {
            return USER_MESSAGE_STATUSES
        },
        initials() {
            if (!this.item.name) {
                return '?'
            }

            return this.item.name
                .split(' ')
                .map(part => part[0]?.toUpperCase())
                .join('')
        }
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
        validator(value) {
            return (
                typeof value.id === 'string' &&
                typeof value.name === 'string' &&
                typeof value.text === 'string' &&
                typeof value.time === 'string' &&
                typeof value.direction === 'string' &&
                typeof value.status === 'string' &&
                typeof value.showAvatar === 'boolean'
            )
        }
    },
    methods: {
        resend() {
            const connection = useConnectionStore()
            connection.resend(this.item)
        }
    }
};
</script>

<template>
    <li :class="['message', USER_MESSAGE_DIRECTION.INCOMING === item.direction ? '' : 'message--outgoing']">
        <div class="item">
            <div class="item__status">
                <div class="avatar">
                    <template v-if="item.showAvatar">
                        <i :class="[USER_MESSAGE_DIRECTION.INCOMING === item.direction ?  'icon-profile-customer' : 'icon-profile-agent']"></i>
                        <span class="avatar__name">{{ USER_MESSAGE_DIRECTION.OUTGOING === item.direction ? 'ME' : initials }}</span>
                    </template>
                </div>
                <template v-if="USER_MESSAGE_STATUSES.WAITING === item.status">
                    <div class="loader">
                        <span class="loader__circle"></span>
                    </div>
                </template>
                <template v-if="USER_MESSAGE_STATUSES.FAILED === item.status">
                    <a href="javascript:void(0)" class="btn__primary" @click.prevent="resend">
                        <i class="icon-send-again"></i>
                    </a>
                </template>
            </div>
            <div class="item__box">
                <div class="item__inner">
                    <span class="item__text">{{ item.text }}</span>
                    <span class="item__time">
                        <template v-if="item.status === USER_MESSAGE_STATUSES.WAITING">
                            Sending...
                        </template>
                        <template v-else>
                            {{ item.time }}
                            <template v-if="USER_MESSAGE_STATUSES.FAILED === item.status">
                                • <span class="item__send-failed">Failed to send</span>
                            </template>
                        </template>
                    </span>
                </div>
            </div>
        </div>
    </li>
</template>
