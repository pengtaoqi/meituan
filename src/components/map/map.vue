<template>
	<div class="map">
		<div class="prv" v-for="item in showMap">
				<div class="prolist"  @click="show">{{item.provinceName}}</div>
			<div class="dd" v-for="city in item.citys">
				{{city.citysName}}
			</div>	
		</div>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				provinces:[],
				citys:[],
				pro:[]
			}
		},
		computed:{
			showMap () {
				return this.$store.state.provinces
			}
		},
		created(){
			axios.get('static/data.json').then((res)=>{
				this.provinces=res.data.provinces;
			})
		}
	}
</script>
<style>
	.map{
		background:#fff;
	}
	.prv{
		height:auto;
		font-size:0.3rem;
		line-height:0.6rem;
	}
	.prolist{
		height:0.6rem;
		background:#eee;
		border-bottom:1px solid #ccc;
		text-indent:0.3rem;
	}
	.dd{
		height:0.6rem;
		border-bottom:1px solid #ccc;
		margin-left:0.3rem;
	}
</style>