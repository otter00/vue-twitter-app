<template>
    <ul class="tweets__wrapper">
        <TweetItem 
        v-for="item in items" 
        :key="item.id" 
        :item="item"
        />
    </ul>
</template>

<script>
import TweetItem from '@/components/TweetItem.vue';

export default {
    components: {TweetItem: TweetItem},
    props: {
        items: {
            type: Array,
            required: true,
        }
    }
}
</script>