<template>
	<div style="position:relative" class="header" v-show="getf">
		<div class="sear">
			<router-link to="/map">北京<i class="icon iconfont bei">&#xe62d;</i></router-link>
			<router-link to="/search" class="inp"><input type="text" /></router-link>
			<router-link to="">扫码</router-link>
		</div>
		<swiper :options="swiperOption" ref="mySwiper" class="sw">
		    <swiper-slide class="fan"><img src="static/images/banner1.jpg" /></swiper-slide>
		    <swiper-slide class="fan"><img src="static/images/banner2.jpg" /></swiper-slide>
  		</swiper>
  		<div class="swiper-pagination"></div>
  		<div class="nav-sec">  			
  			<dl>
	  			<router-link to="/meishi">
	  				<dt style="background:gold"> <i class="icon iconfont">&#xe605;</i></dt>
	  				<dd>美食</dd>
	  			</router-link>
  			</dl>  			
  			<dl>
  				<router-link to="/meishi">
	  				<dt style="background:red"><i class="icon iconfont">&#xe604;</i></dt>
	  				<dd>电影/演出</dd>
  				</router-link>
  			</dl>
  			<dl>
  				<router-link to="/meishi">
	  				<dt style="background:#4B0082"><i class="icon iconfont">&#xe63d;</i></dt>
	  				<dd>酒店住宿</dd>
  				</router-link>
  			</dl>
  			<dl>
  				<router-link to="/meishi">
	  				<dt style="background:green"><i class="icon iconfont">&#xe629;</i></dt>
	  				<dd>休闲娱乐</dd>
  				</router-link>
  			</dl>
  			<dl>
  				<router-link to="/meishi">
	  				<dt style="background:#20b2aa"> <i class="icon iconfont">&#xe648;</i></dt>
	  				<dd>外卖</dd>
  				</router-link>
  			</dl>
  			<dl>
  				<router-link to="/meishi">
	  				<dt style="background:blue"> <i class="icon iconfont">&#xe62e;</i></dt>
	  				<dd>机票/火车票</dd>
  				</router-link>
  			</dl>
  			<dl>
  				<router-link to="/meishi">
	  				<dt style="background:#da70d6"><i class="icon iconfont">&#xe614;</i></dt>
	  				<dd>KTV</dd>
  				</router-link>
  			</dl>
  			<dl>
  				<router-link to="/meishi">
	  				<dt style="background:#00fa9a"><i class="icon iconfont">&#xe643;</i></dt>
	  				<dd>周边游</dd>
  				</router-link>
  			</dl>
  			<dl>
  				<router-link to="/meishi">
	  				<dt style="background:#f08080"><i class="icon iconfont">&#xe628;</i></dt>
	  				<dd>丽人/美发</dd>
  				</router-link>
  			</dl>
  			<dl>
  				<router-link to="/meishi">
	  				<dt style="background:#ff0"> <i class="icon iconfont">&#xe612;</i></dt>
	  				<dd>美团旅行</dd>
  				</router-link>
  			</dl>
  		</div>
  		<div class="banner"></div>
  		<div class="fav-list">
  			<p class="text-fav">猜你喜欢</p>
  			<dl class="list-detail" v-for="item in getinfo" @click="show(item)">
  				<dt><img :src="item.image"></dt>
  				<dd class="de-list">
  					<dl>
  						<dd class="list-name">{{item.name}}</dd>
  						<dd class="place-name">{{item.detail}}}</dd>
  						<dd class="last-dd"><span  class="last-dd-prc">{{item.price}}</span><span class="last-dd-prc-1">元</span><span class="last-dd-door">门市价：{{item.doorprice}}元</span><p>{{item.lineright}}</p></dd>
  					</dl>
  				</dd>
  			</dl>
  		</div>
  		<v-bottom></v-bottom>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import bottom from './../bottom/bottom.vue'
import store from './../../store'
import $ from 'jquery'
	export default{
		data() {
		      return {
			        swiperOption: {
			          notNextTick: true,
			          autoplay: 3000,			 
			          setWrapperSize :true,
			          autoHeight: true,
			          pagination : '.swiper-pagination',
			          paginationClickable :true,
			          pagination : '.swiper-pagination'			         
			        }
		        }
		},
	  computed:{
	    getinfo () {
	      return this.$store.state.all.list
	    },
	    getf(){
	    	return !this.$store.state.isshow
	    }
	  },
	  methods:{
	  	show(data){
	  		store.dispatch('setAllPic',data);
	  		store.commit('setIsshow');
	  		$(document).scrollTop(0);
	  	}
	  },
		components: {
		    swiper,
		    swiperSlide,
    		'v-bottom':bottom
  		}
	}
</script>
<style>
	.header{
		width:100%;
		overflow:hidden;
		background:#efefef;
	}
	.sw{
		width:100%;
	}
	.fan{
		 float:left;
	}
	.fan img{
		height:auto;
		width:100%;
		height:2.5rem;
	}
	.swiper-pagination{
		position:absolute;
		display:flex;
		z-index:22;
		top:2.2rem;
		left:2.6rem;
	}
	.swiper-pagination span{
	  	width:0.18rem;
	  	display:block;
	 	height:0.18rem;
	  	background:#fff;
	  	border-radius:0.18rem;
	  	margin-left:0.2rem;
	}
	.swiper-pagination-bullet-active{
		background:#ff0000 !important;
	}
</style>
<style lang="stylus">
	.banner
		width 100%
		height 1.8rem
		margin-top 0.13rem
		background url('../../../static/images/banner3.jpg')
		background-size 100%
	.fav-list
		margin-top 0.2rem
		background #fff
		margin-bottom 3rem
		.text-fav
			width 85%
			text-align center
			font-size 0.25rem
			height 0.5rem
			line-height 0.5rem
			border-bottom 1px solid #efefef
			margin 0 auto
		.list-detail
			width 100%
			display flex
			border-bottom 1px solid #eee
			dt
				height 1.8rem
				align-items center
				img 
					width 1.6rem
					margin-top 0.16rem
					margin-left 0.2rem
			.de-list
				flex-grow 1
				margin 0.16rem 0 0 0.2rem
				height 1.8rem
				font-size 0.3rem
				.last-dd
					position relative
					top 0.2rem
					font-size 0.26rem
					.last-dd-prc
						color #06ceae
						font-size 0.38rem
					.last-dd-prc-1
						color #06ceae
						font-size 0.30rem
					.last-dd-door
						font-size 0.28rem
						color #666
						padding-left 0.1rem
					p
						position absolute
						color #666
						right 0.2rem
						top 0.08rem
						font-size 0.24rem
				.list-name
					color #333
				.place-name
					color #999
					font-size 0.23rem
	.sear
		width 100%
		position fixed
		top 0
		height 0.4rem
		display flex
		z-index 55
		margin-top 0.15rem
		justify-content space-around 
		align-items flex-start
		a
			text-decoration none
			font-size 0.28rem
			color #333
			display block
			height 0.45rem
			line-height 0.45rem
			margin-top 0.01rem
			.bei
				font-size 0.2rem
			input
				padding 0 0.5rem
				border none
				height 0.40rem
				border-radius 0.40rem
	.nav-sec
		font-size 0.20rem
		display flex
		flex-wrap wrap
		background #fff
		justify-content space-around
		width 100%
		margin-top -4%
		dl
			width 20%
			padding 3% 0
			dt
				width 0.8rem
				height 0.8rem
				line-height 0.8rem
				border-radius 0.8rem
				margin 0 auto
				text-align center
				margin-bottom 0.1rem
				i
					font-size 0.5rem
					color #fff
			dd
				text-align center
				width 100%



		
</style>