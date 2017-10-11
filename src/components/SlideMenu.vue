<template>
  <section>

    <div class="toggle-button-wrapper"  v-tap="{ methods : onTap }">
      <div class="toggle-button">
        <span :class="[isOpen ? 'toggle-button-cross' :'']"></span>
        <span :class="[isOpen ? 'toggle-button-cross' :'']"></span>
      </div>
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
  export default {
    props: [
      "menus",
    ],
    data() {
      return {
        isOpen: false
      }
    },
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
    color: #fff;
    width: 50px;
    height: 24px;
    background: red;
  }

  .toggle-button {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .toggle-button span {
    display: block;
    width: 50px;
    height: 2px;
    background-color: #fff;
    position: absolute;
  }

  .toggle-button:first-child {
    -webkit-animation: nav_bar_top02 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s forwards;
    animation: nav_bar_top02 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s forwards;
    top: 4px;
  }

  .toggle-button span:nth-child(2) {
    -webkit-animation: nav_bar_bottom02 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s forwards;
    animation: nav_bar_bottom02 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s forwards;
    bottom: 9px;
  }

  .toggle-button-cross {
    /*-webkit-animation: nav_bar_bottom 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s forwards;*/
    /*animation: nav_bar_bottom 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s forwards;*/
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
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
    -webkit-transform: translateX(17px);
    transform: translateX(17px);
    -webkit-transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s;
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s;

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
