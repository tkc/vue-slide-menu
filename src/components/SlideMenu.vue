<template>
  <section>
    <div class="toggle-button-wrapper" v-tap="{ methods : onTap }">
      <panel_btn
        :is_open="isOpen"
      ></panel_btn>
    </div>
    <div class="slider-menu" :class="[isOpen ? 'openMenu' :'']">
      <nav>
        <ul class="menu-list">
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
        </ul>
      </nav>
      <nav>
        <ul class="menu-list">
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
          <li><a href="/">Title</a></li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>

  import PanelBtn from "./PanelBtn.vue"

  export default {
    props: [
      "menus",
    ],
    components: {
      'panel_btn': PanelBtn,
    },
    data() {
      return {
        isOpen: false
      }
    },
    computed: {},
    methods: {
      onTap() {
        this.isOpen = !this.isOpen;
      },
    }
  }
</script>

<style scoped>
  .toggle-button-wrapper {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 9999;
    width: 40px;
    height: 40px;
  }

  .slider-menu {
    z-index: 99;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: #998d86;
    padding-top: 65px;
    width: 285px;
    text-align: left;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    -webkit-transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s;
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s;
  }

  .openMenu {
    animation-name: fadeIn;
    animation-duration: 0.7s;
    -webkit-transform: translateX(17px);
    transform: translateX(17px);
    -webkit-transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s;
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .menu-list {

  }

  .menu-list li {
    list-style-type: none;
    padding: 10px 0px;
  }

  .menu-list li a {
    color: #fff;
  }

</style>
