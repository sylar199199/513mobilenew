<template>
  <section>
    <Header />
    <router-view/>
    <Footer />
  </section>
</template>

<script>
import Header from '../components/header/index'
import Footer from '../components/footer/index'

export default {
  components: {
    Header,
    Footer,
  }
}
</script>
