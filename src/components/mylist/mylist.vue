<template>
	<transition name="fade">
		<div class="mylist" v-show="getpic">
			<dl class="header">
				<dd class="dd1" @click="hide"><i class="icon iconfont">&#xe606;</i></dd>
				<dd class="dd2">团购详情</dd>
				<dd class="dd1"><i class="icon iconfont">&#xe65c;</i></dd>
				<dd class="dd1" style="padding-top:0.18rem"><i class="icon iconfont" style="font-size:0.4rem;">&#xe62a;</i></dd>
			</dl>
			<div class="pic">
				<p class="pic-p"><img :src="getall.imgsrc"/></p>
				<div class="opc"></div>
				<div class="text">
					<p>{{getall.name}}</p>
					<span>{{getall.yao}}</span>
				</div>
			</div>
			<div class="price">
				<span>
				<span style="color:#06c1ae;">￥</span><span style="color:#06c1ae;font-size:0.48rem">{{getall.price}}</span></span><span style="font-size:0.23rem">最高门市价: ￥{{getall.doorprice}}</span><span class="rush">立即抢购</span>
			</div>
			<ul class="prom">
				<li><i class="icon iconfont">&#xe647;</i>随时退</li>
				<li><i class="icon iconfont">&#xe647;</i>已售8</li>
				<li><i class="icon iconfont">&#xe647;</i>过期自动退</li>
			</ul>
			<div class="cmd">
				<div><span><i class="icon iconfont">&#xe65c;</i></span><span><i class="icon iconfont">&#xe65c;</i></span><span><i class="icon iconfont">&#xe65c;</i></span><span><i class="icon iconfont">&#xe65c;</i></span><span><i class="icon iconfont">&#xe65c;</i></span></div>
				<div>暂无评价</div>
			</div>
			<div class="know">
				<p>购买须知</p>
				<ul>
					<li>
						<div>有效期:</div>
						<span>2017.5.12至2017.11.11(周末和法定假日通用)</span>
					</li>
					<li>
						<div>使用时间:</div>
						<span>10:00-22:00</span>
					</li>
					<li>
						<div>使用规则:</div>
						<ul>
							<li>无需预约，消费高峰可能需要等位</li>
							<li>每张美团券建议6到8个人使用</li>
							<li>店内无包间</li>
							<li>仅限堂食，不提供餐前外带，餐毕未吃完提供免费打包</li>
							<li>团购用户不可同时享受商家其它优惠</li>
							<li>提供免费wifi</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</transition>
</template>
<script>
import store from '../../store'
	export default{
		computed:{
			getpic () {
				return this.$store.state.isshow;
			},
			getall () {
				return this.$store.state.allPic
			}
		},
		methods:{
			hide () {
				store.commit("setHide");
			}
		}
	}
</script>
<style lang="stylus">
	.mylist
		position absolute
		z-index 555
		top 0
		left 0
		right 0
		background #fff
		.know
			font-size 0.3rem
			color #999
			text-indent 0.2rem
			p
				height 0.8rem
				line-height 0.8rem
				text-indent 0.2rem
				border-bottom 1px solid #eee
			ul
				font-size 0.25rem
				text-indent 0.2rem
				color #666
				li
					ul
						list-style-type normal
						li
							height 0.45rem
							line-height 0.45rem
					div
						color #f90
						text-indent 0.2rem
						height 0.5rem
						line-height 0.5rem
					span
						display block
						height 0.5rem
						line-height 0.5rem
		.cmd
			display flex
			justify-content space-between
			font-size 0.28rem
			color #999
			height 0.7rem
			line-height 0.7rem
			border-top 0.2rem solid #efefef
			border-bottom 0.2rem solid #efefef
			padding 0 0.2rem
		.prom
			display flex
			list-style none
			flex-wrap wrap
			padding-left 8%
			font-size 0.26rem
			li
				width 50%
				height 0.6rem
				line-height 0.6rem
				i
					font-size 0.36rem
			li:nth-child(1),li:nth-child(3)
				color #6bbd00
		.price
			height 1.1rem
			font-size 0.3rem
			color #999
			display flex
			align-items center
			justify-content space-around
			border-bottom 1px solid #ccc
			.rush
				width 2.1rem
				height 0.7rem
				background #f90
				color #fff
				text-align center
				line-height 0.7rem
				border-radius 0.06rem
		.pic
			height 3.8rem
			position relative
			.pic-p
				height 3.8rem
				overflow hidden
				img
					max-width 100%
			.opc
				position absolute
				bottom 0
				width 100%
				background #000
				opacity 0.5
				height 1.1rem
			.text
				color #fff
				position absolute
				bottom 0
				height 1rem
				left 0.2rem
				p
					font-size 0.36rem
					padding-bottom 0.12rem
				span 
					font-size 0.25rem
					display block
		.header
			height 0.85rem
			background #06c1ae
			display flex
			font-size 0.37rem
			align-items center
			color #fff
			justify-content space-around
			i
				font-size 0.55rem
			.dd2
				flex-basis 70%
				text-align center
		&.fade-enter-to,&.fade-leave
			transition: all 0.1s
		&.fade-enter,&.fade-leave-to
			transform:translate(0,20%)
			opacity: 0
</style>