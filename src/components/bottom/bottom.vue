<template>
	<div class="bottom">
		<router-link to="/">
			<dl>
				<dt><i class="icon iconfont bei1">&#xe66f;</i></dt>
				<dd>首页</dd>
			</dl>
		</router-link>
		<router-link to="/near">
			<dl>
				<dt><i class="icon iconfont bei1">&#xe603;</i></dt>
				<dd>附近</dd>
			</dl>
		</router-link>
		<router-link to="/shopping">
			<dl>
				<dt><i class="icon iconfont bei1">&#xe602;</i></dt>
				<dd>逛一逛</dd>
			</dl>
		</router-link>
		<router-link to="/order">
			<dl>
				<dt><i class="icon iconfont bei1">&#xe601;</i></dt>
				<dd>订单</dd>
			</dl>
		</router-link>
		<router-link to="/mylist">
			<dl>
				<dt><i class="icon iconfont bei1">&#xe61d;</i></dt>
				<dd>我的</dd>
			</dl>
		</router-link>
	</div>
</template>
<script>
	export default{
		data () {
			return {
			
			}
		}
	}
</script>
<style lang="stylus">
	.bottom
			position fixed
			width 100%
			height 0.9rem
			bottom 0rem
			background #FFF
			border-top 1px solid #ccc
			align-items center
			font-size 0.2rem
			display flex
			justify-content space-around
			dl
				text-align center
				.bei1
					font-size 0.38rem
					color #000


</style>