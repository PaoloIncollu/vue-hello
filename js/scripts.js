
const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        image: 'https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fll22z8mea106b4vjdjy7.jpeg'
      }
    }
  }).mount('#app')