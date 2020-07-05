<template>
  <div>
    <div class="background">
        <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div>
    <div class="content">
        <div class="content_left">
            <p class="border_common"></p>
            <p class="border_top"></p>
            <div class="content_left_scroll">
                <div class="first_one">
                    <router-link to="/closepage" tag="p">1、vue页面关闭与刷新事件</router-link>
                </div>
                <div>
                    <p>2、去重</p>
                </div>
                <div>
                    <p>3、排序</p>
                </div>
                <div>
                    <p>4、对象</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div class="last_one"></div>
            </div>
            <p class="border_bottom"></p>
            <p class="border_common"></p>
        </div>
         <div class="content_right">
            <p class="border_common"></p>
            <p class="border_top"></p>
            <div class="content_right_scroll">
                <div style="border-top:1px dotted #ccc">
                    <router-link to="/closepage" tag="p">1、vue页面关闭与刷新事件</router-link>
                </div>
                <div>
                    <p>2、去重</p>
                </div>
                <div>
                    <p>3、排序</p>
                </div>
                <div>
                    <p>4、对象</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div class="last_one"></div>
            </div>
            <p class="border_bottom"></p>
            <p class="border_common"></p>
        </div>
    </div>
 </div>
</template>

<script>
export default {
    data(){
        return {
            imgSrc:require('../assets/book.jpg')
        }
    }
}
</script>

<style>
.background{
    width:100%;  
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
}
.content{
    width: 1280px;
    position: absolute;
    left: 300px;
    top: 210px;
}
.content_left{
    float: left;
}
.content_right{
    float: right;
}
.content_left_scroll,.content_right_scroll{
   overflow: auto;
   height: 547px;
}
.content_left_scroll>div,.content_right_scroll>div{
    width: 500px;
    height: 18px;
    cursor: pointer;
    padding: 10px 0;
    border-top: 1px solid #ccc;
}
.border_common{
    width: 500px;
    height: 2px;
    background: #ccc;
}
.border_top{
    width: 500px;
    height: 1px;
    background: #ccc;
    margin: 2px 0 1px 0;
}
.border_bottom{
    width: 500px;
    height: 1px;
    background: #ccc;
    margin: 1px 0 2px 0;
}
.first_one{
    border-top: 1px dashed #ccc;
}
.last_one{
    border-bottom: 1px dashed #ccc;
}

</style>