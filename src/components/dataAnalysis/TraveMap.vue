<template>
    <div class="trave-view">
        <div id="main"></div>
    </div>
</template>

<script>
import geoJson from '@/assets/data.json'
import { travel } from "@/api/api";
export default {
    data() {
        return {
            
        }
    },
    created() {
        travel().then(res=>{
            if(res.data.status === 200){
                let {points,linesData} = res.data.data
                this.draw(points,linesData)
            }
        })
    },
    methods:{
        draw(points,linesData){
            let myChart = this.$echarts.init(document.getElementById('main'))
            //注册可用地图，必须包括geo组件 或者map图表地图类型的时候才能使用
            this.$echarts.registerMap('china',geoJson)

            console.log(geoJson);
            let option = {
                backgroundColor:'rgb(95,188,222)',
                zoom:1.2,
                itemStyle:{
                    normal:{
                        backgroundColor:'rgb(0,119,255)',
                        borderWidth:1,
                        areaColor:{
                            type:'radial',
                            x:0.7,
                            y:0.7,
                            r:0.8,
                            colorStops:[
                                {
                                    offset:0,
                                    color:'rgb(0,255,191)' //0%处的颜色
                                },
                                {
                                    offset:1,
                                    color:'rgb(9,199,152)' //100%处的颜色
                                }
                            ],
                            globalCoord:true
                        },
                        
                    }
                },
                geo:{
                    map:'china',
                    aspectScale:0.75, //地图长宽比
                    zoom:1.2, //地图缩放比
                    regions:[{
                        name:'南海诸岛',
                    }]
                },
                series:[
                    {//配置地图相关参数绘制地图
                        type:'map',
                        label:{
                            normal:{
                                show:true,
                                textStyle:{
                                    color:"#9da3e1"
                                }
                            },
                            emphasis:{
                                textStyle:{
                                    color:"#000000"
                                }
                            }
                        },
                        zoom:1.2,
                        map:'china',
                        itemStyle:{
                            normal:{
                                areaColor:{
                                    type:'radial',
                                    x:0.7,
                                    y:0.7,
                                    r:0.8,
                                    colorStops:[
                                        {
                                            offset:0,
                                            color:'#312f82' //0%处的颜色
                                        },
                                        {
                                            offset:1,
                                            color:'#5761cb' //100%处的颜色
                                        }
                                    ],
                                    globalCoord:true
                                },
                                shadowColor:'rgb(58,115,192)',
                                shadowOffsetX:1,
                                shadowOffsetY:2,
                            },
                            emphasis:{
                                areaColor:'rgb(125,223,249)',
                                borderWidth:0.1
                            }
                        },
                    },
                    //关于地图中散点的配置
                    {
                        type:'effectScatter', //散点图
                        coordinateSystem:'geo',
                        showEffectOn:'render',
                        symbolSize:10,//散点大小
                        zlevel:1,
                        data:points,
                        rippleEffect:{ //涟漪特效相关配置
                            period:15,
                            scale:4,
                            brushType:'fill',
                        }
                    },
                    //关于地图中线路动画效果设置
                    {
                        type:'lines',
                        zlevel:2,
                        effect:{
                            show:true,
                            period:4,
                            symbol:'arrow',
                            symbolSize:7,
                            trailLength:0.4,
                        },
                        lineStyle:{
                            normal:{
                                width:3,
                                opacity:0.1,
                                curveness:0.3,
                            }
                        },
                        data:linesData
                    },
                ]
            }
            myChart.setOption(option)
        }
    }
}
</script>

<style scoped lang="less">
    .trave-view{
        width: 100%;
        #main{
            width: 100%;
            height: 600px;
        }
    }
</style>