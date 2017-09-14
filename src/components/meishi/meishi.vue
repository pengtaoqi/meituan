<template>
	<div class="meishi">
		<div class="header">
			<span><router-link to="/"><i class="icon iconfont bei1">&#xe606;</i></router-link></span>
			<p><input type="text" placeholder="请输入商家名、品类或者商圈"/><i class="icon iconfont">&#xe651;</i></p>
			<span>地图</span>
		</div>
		<ul class="slec">
			<li>首选<i class="icon iconfont bei2">&#xe607;</i></li>
			<li>附近<i class="icon iconfont bei2">&#xe607;</i></li>
			<li>智能排序<i class="icon iconfont bei2">&#xe607;</i></li>
			<li>筛选<i class="icon iconfont bei2">&#xe607;</i></li>
			<li class="list-ul">
				<ul>
					<li class="allfood" @click="allfood">全部</li>
					<li class="huo" @click="huo">火锅</li>
					<li class="diy" @click="diy">自助餐</li>
				</ul>
			</li>
		</ul>
		<div id="mask"></div>
		<div class="sew" style="height:auto;width:100%;margin-top:1.6rem">
		<div class="fav-list" v-for="item in getall">
  			<dl class="list-detail">
  				<dt><img :src="item.imgsrca"></dt>
  				<dd class="de-list">
  					<dl>
  						<dd class="list-name">{{item.name}}</dd>
  						<dd class="place-name">
  						<div><span><i class="icon iconfont bei2">&#xe636;</i><i class="icon iconfont bei2">&#xe636;</i><i class="icon iconfont bei2">&#xe636;</i><i class="icon iconfont bei2">&#xe636;</i><i class="icon iconfont bei2">&#xe636;</i></span><span>￥93/人</span></div><div class="place-name-div">{{item.place}} 1.1km</div>
  						</dd>
  						<dd class="last-dd"><span>{{item.tag}}</span><span class="last-dd-span" style="color:#f90;padding-left:0.1rem" v-for="list in item.cmd">{{list}}</span><span style="color:#f90">羊肉好</span></dd>
  					</dl>
  				</dd>
  			</dl>
  			<dl class="tuan"><dd class="tuan-a"></dd><dd><span class="tuan-fir">团</span> <span>{{item.one}}</span></dd></dl>
  		</div>
  		</div>
	</div>
</template>
<script>
import store from "./../../store"
import $ from "jquery"
	export default{
		computed:{
			getall() {
				return this.$store.state.allList
			}	
		},
		methods:{
			huo () {
				store.commit("setShowList",this.getall);
				$(".list-ul").css("display","none")
				$("#mask").css("display","none")
			},
			allfood () {
				store.commit("setShowList1",this.getall);
				$(".list-ul").css("display","none")
				$("#mask").css("display","none")
			},
			diy () {
				store.commit("setShowList2",this.getall);
				$(".list-ul").css("display","none")
				$("#mask").css("display","none")
			}
		}
	};
	$(document).on("click",".slec li:first",function(){
			if($(".list-ul").css("display")=="none"){
				$(".list-ul").css("display","block")
				$("#mask").css("display","block")
			}else{
				$(".list-ul").css("display","none")
				$("#mask").css("display","none")
			}
	});
	$(document).on("click","#mask",function(){
				$("#mask").css("display","none");
				$(".list-ul").css("display","none")
	})

</script>
<style lang="stylus">
	#mask
		position fixed
		left 0
		right 0
		top 0
		bottom 0
		display none
		background #888
		opacity 0.5
		z-index 2
	.fav-list
		background #fff
		padding-bottom 0.1rem
		border-bottom 1px solid #eee
		.tuan
			display flex
			top 1.6rem
			margin-top 0.2rem
			font-size 0.2rem
			.tuan-a
				width 1.8rem
			.tuan-fir
				background rgb(108,186,178)
				color #fff
		.list-detail
			width 100%
			display flex
			dt
				height 1.6rem
				align-items center
				img 
					width 1.4rem
					margin-top 0.16rem
					margin-left 0.2rem
			.de-list
				flex-grow 1
				margin 0.2rem 0 0 0.2rem
				height auto
				font-size 0.3rem
				position relative
				padding-bottom 0.2rem
				border-bottom 1px solid #eee
				.last-dd
					position relative
					top 0.2rem
					font-size 0.2rem
					margin-top -0.15rem
					.last-dd-span
						padding-left 0.3rem
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
					display flex
					justify-content space-between
					font-size 0.23rem
					i
						font-size 0.2rem
						padding-top 0.03rem
					.place-name-div
						margin-right 0.1rem
						font-size 0.2rem

	.slec
		height 0.6rem
		display flex
		font-size 0.26rem
		color #666
		position fixed
		top 0.88rem
		width 100%
		background #fff
		list-style none
		z-index 2222
		border-bottom 1px solid #eee
		justify-content space-around
		.list-ul
			position absolute
			display none
			background #fff
			z-index 3333
			color #000
			top 0.6rem
			width 100%
			text-indent 0.5rem
			ul
				list-style none
				li:nth-child(1)
					border-top 1px solid #eee
				li
					height 0.6rem
					line-height 0.6rem
					border-bottom 1px solid #cfcfcf
		li
			height 0.6rem
			background #fff
			line-height 0.6rem
			position relative
			.bei2
				position absolute
				top 0.13rem
				right -0.5rem
				color #888
	.header
		position fixed
		z-index 11
		top 0
		background #fff
		left 0
		right 0
		display flex
		align-items center
		height 0.7rem
		justify-content space-between
		font-size 0.3rem
		padding 0 3%
		padding-bottom 0.15rem
		border-bottom 1px solid #eee
		span
			.bei1
				font-size 0.4rem
				font-weight 100
		p
			width 75%
			position relative
			height 0.5rem
			i 
				position absolute
				left 0.1rem
				top 0.1rem
			input
				outline 0
				border 0
				background #efefef
				height 0.5rem
				width 100%
				margin 0 auto
				font-size 0.24rem
				text-align center 
				border-radius 0.6rem
</style>
