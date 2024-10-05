import { createSSRApp } from 'vue'; // Import the createSSRApp function from Vue

// Create the Vue application
const app = createSSRApp({
  data: () => ({ count: 1 }), // Reactive data
  template: `<button @click="count++">{{ count }}</button>` // Template with a button
});

// Mount the app to the #app element in the HTML
app.mount('#app');
