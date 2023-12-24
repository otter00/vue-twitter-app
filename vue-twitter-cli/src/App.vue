<template>
  <div class="wrapper">
    <!-- header -->
    <div class="wrapper-content">
      <div class="view">
      <div class="container">
        <FormVue @onSubmit="handleSubmit" />
        <TweetsList :items="items"/>
      </div>
    </div>
    </div>
    <!-- footer -->
  </div>
</template>

<script>
import TweetsList from '@/components/TweetsList';
import FormVue from '@/components/FormVue'

export default {
  components: {TweetsList: TweetsList, FormVue: FormVue},

  data() {
    return {
      items: [
        {
          id: 1,
          avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=John`,
          body: "hello Vue3",
          likes: 54,
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          id: 2,
          avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=Jane`,
          body: "this is VTwitter App",
          likes: 22,
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  methods: {
    handleSubmit (item) {
      console.log(item)
      this.items.push(item)
    }
  },
}
</script>