<template>
  <div id="panel-btn">
    <span id="panel-btn-icon" :class="[is_open ? 'close' :'']"></span>
  </div>
</template>

<script>
  export default {
    props: [
      "is_open",
    ],
    methods: {}
  }
</script>

<style scoped>

  #panel-btn {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    /*on hover background white */
    /*background: #fff;*/
  }

  #panel-btn:hover {
    /*on hover background white */
    background: #fafafa;
  }

  #panel-btn-icon {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 28px;
    height: 4px;
    margin: -2px 0 0 -14px;
    background: #000;
    transition: .2s;
  }

  #panel-btn-icon:before, #panel-btn-icon:after {
    display: block;
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 28px;
    height: 4px;
    background: #000;
    transition: .3s;
  }

  #panel-btn-icon:before {
    margin-top: -12px;
  }

  #panel-btn-icon:after {
    margin-top: 8px;
  }

  #panel-btn .close {
    background: transparent;
  }

  #panel-btn .close:before, #panel-btn .close:after {
    margin-top: 0;
  }

  #panel-btn .close:before {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  #panel-btn .close:after {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  @media only screen and (max-width: 414px) {
    #panel-btn-icon {
      width: 14px;
      height: 2px;
      margin: -1px 0 0 -7px;
    }

    #panel-btn-icon:before, #panel-btn-icon:after {
      width: 14px;
      height: 2px;
    }

    #panel-btn-icon:before {
      margin-top: -6px;
    }

    #panel-btn-icon:after {
      margin-top: 4px;
    }

  }
</style>
