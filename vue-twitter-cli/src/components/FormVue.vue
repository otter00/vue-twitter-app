<template>
    <form @submit.prevent="onSubmit">
        <textarea v-model="body" required placeholder="Tweet here"></textarea>
        <button class="btn btnTweet" type="submit">Tweet it</button>
    </form>
</template>

<script>
import { ref } from 'vue';

export default {
  // возможность описывать emits
  emits: ['onSubmit'],
  // emit содержится в контексте, чтобы к нему обратиться, нужно обратиться сначала
  // к контексту context.emit
  // либо использовать деструктуризацию
  // первым параметром setup всегда идут prop, либо _, если не используем их
  setup(_, { emit }) {
    const body = ref('')

    const onSubmit = () => {
      emit('onSubmit', {
        id: Math.round(Math.random() * 10),
        avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${Date.now()}`,
        body: body.value,
        likes: 3,
        date: new Date(Date.now()).toLocaleString(),
      })
      body.value = ''
    }
    return {body, onSubmit}
  }
}

// export default {
//     data () {
//         return {
//             body: '',
//         }
//     },
//     methods: {
//         onSubmit() {
//           this.$emit('onSubmit', {
//         id: Math.round(Math.random() * 10),
//         avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${Date.now()}`,
//         body: this.body,
//         likes: 3,
//         date: new Date(Date.now()).toLocaleString(),
//       })
//       // reset
//       this.body = "";
//     },
//   }
//     }
</script>