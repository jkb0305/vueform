<template>
  <div>
    <header>
        <button type="button" class="back-btn"></button>
        <h1 class="header-title">제목이에요</h1>
        <button type="button" class="setting-btn"></button>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header{
    position:relative;
    display:flex;
    .back-btn, .setting-btn{
        background-size:24px auto;
        background-repeat:no-repeat;
        background-position:center;
        width:24px;
        height:24px;
    }
    .back-btn{
        background-image:url('../../assets/styles/images/ico_arrow_back.png');
    }
    .setting-btn{
        background-image:url('../../assets/styles/images/icon_setting.png');
    }
}
</style>