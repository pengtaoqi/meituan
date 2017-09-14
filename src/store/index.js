import Vue from 'vue'
import Vuex from 'vuex'
import $ from "jquery"
Vue.use(Vuex)
const store=new Vuex.Store({
	state:{
		all:{},
		allPic:{},
		isshow:false,
		allList:[]
	},
	getters:{
		getAll:state => state.all,
		getAllPic:state => state.allPic
	},
	mutations:{
		set_All(state, obj) {
			state.all = obj
		},
		set_AllPic(state, obj) {
			state.allPic = obj
		},
		//设置是否显示详情列表
		setIsshow (state) {
			state.isshow=true
		},
		setHide (state) {
			state.isshow=false
		},
		setShowList (state,obj) {
			state.allList=[];
			$.each(obj,function(index,item){
				if(item.tag.indexOf("火锅")!=-1) state.allList.push(item)
			})
		},
		setShowList1 (state,obj) {
			state.allList=[];
			$.each(obj,function(index,item){
				state.allList.push(item)
			})
		},
		setShowList2 (state,obj) {
			state.allList=[];
			$.each(obj,function(index,item){
				if(item.tag.indexOf("自助餐")!=-1) state.allList.push(item)
			})
		},
		setAllFood (state,obj) {
			state.allList=obj
		}
	},
	actions:{
		setAll ({commit}, obj) {
			commit('set_All', obj)
		},
		setAllPic ({commit}, obj) {
			commit('set_AllPic', obj)
		}
	}
})
export default store