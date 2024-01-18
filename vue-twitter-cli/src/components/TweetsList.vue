<template>
    <select v-model="sortBy">
        <option value="date">Sort by date</option>
        <option value="likes">Sort by likes</option>
    </select>
    <ul class="tweets__wrapper">
        <TweetItem 
        v-for="item in sorteredItems" 
        :key="item.id" 
        :item="item"
        />
    </ul>
</template>

<script>
import TweetItem from '@/components/TweetItem.vue';
import { ref, computed } from 'vue';

export default {
    components: {TweetItem: TweetItem},
    props: {
        items: {
            type: Array,
            required: true,
        }
    }, 
    setup({items}) {     // передаём items как props
        const sortBy = ref('date')

        const sorteredItems = computed(() => {
            return items.sort((a, b) => {
                if (a[sortBy.value] > b[sortBy.value]) return -1
                if (a[sortBy.value] < b[sortBy.value]) return 1
            })
        })

        return { sortBy, sorteredItems }
    }
}
</script>