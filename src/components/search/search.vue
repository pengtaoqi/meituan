<template>
<transition name="fade">
<div v-show="hideSea">
	<ul>
		<li><i class="icon iconfont" @click="run">&#xe600;</i></li>
		<li class="inp1"><i class="icon iconfont">&#xe632;</i><input type="text" /></li>
		<li class="sea">搜索</li>
	</ul>
</div>
</transition>
</template>
<script>
	export default{
		data () {
			return {
				hideSea:true
			}
		},
		methods:{
			run () {
				window.location="./"
			}
		}
	}
</script>
<style>
	.fade-enter-active, .fade-leave-active {
  		transition: all 0.1s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  		opacity: 0;
  		transform:translateY(100px);
	}
</style>
<style lang="stylus">
	div
		z-index 9999
		ul
			list-style none
			display flex
			font-size 0.32rem
			height 0.6rem
			justify-content space-around
			align-items center
			line-height 0.6rem
			.sea
				font-size 0.32rem
			li
				position relative
				top 0
				height 0.6rem
				text-align center
			.inp1
				flex 0.9
				input
					height 0.5rem
					width 95%
					margin-left 0.05rem
					text-indent 0.42rem
					background #eee
					border none
					outline 0
				i
					position absolute
					top 0.02rem
					left 0.25rem
					font-size 0.3rem

		
</style>