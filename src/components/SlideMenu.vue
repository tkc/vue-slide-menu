<template>
  <section>
    <div class="toggle-button-wrapper" v-tap="{ methods : onTap }">
      <div id="panel-btn">
        <span id="panel-btn-icon" :class="[isOpen ? 'close' :'']"></span>
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
    width: 40px;
    height: 40px;
  }
  #panel-btn{
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 20px 0 10px;
    border-radius: 50%;
    background: #fff;
  }
  #panel-btn:hover{
    background: #fafafa;
  }
  #panel-btn-icon{
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14px;
    height: 2px;
    margin: -1px 0 0 -7px;
    background: #2196F3;
    transition: .2s;
  }
  #panel-btn-icon:before, #panel-btn-icon:after{
    display: block;
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 14px;
    height: 2px;
    background: #2196F3;
    transition: .3s;
  }
  #panel-btn-icon:before{
    margin-top: -6px;
  }
  #panel-btn-icon:after{
    margin-top: 4px;
  }
  #panel-btn .close{
    background: transparent;
  }
  #panel-btn .close:before, #panel-btn .close:after{
    margin-top: 0;
  }
  #panel-btn .close:before{
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  #panel-btn .close:after{
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
/*
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
    -webkit-animation: cross 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s forwards;
    animation: cross 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s forwards;
    top: 4px;
  }

  .toggle-button span:nth-child(2) {
    animation-name: crossBack;
    animation-duration: 0.7s;
    -webkit-animation: cross 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s forwards;
    animation: cross 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s forwards;
    bottom: 9px;
  }

  .toggle-button-cross {
    animation-name: cross;
    animation-duration: 0.7s;
    animation: anime1 5s ease -2s infinite alternate;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  @keyframes cross {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }

  @keyframes crossBack {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
*/
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
