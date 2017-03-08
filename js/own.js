/**
 * Created by Administrator on 2016/11/14.
 */
function getDialog(id){
    document.getElementById(id).style.display="block";
}

function load(){

    var chart;
    var legend;
    var charDate = [{status: "到", value: 20},{status: "jia", value: 8},{status: "kuang", value: 3}];
      //AmCharts.ready(function() {
        // ��ͼ
        chart = new AmCharts.AmPieChart();
        chart.dataProvider = charDate;
        chart.titleField = "status";
        chart.valueField = "value";
        chart.outlineColor = "";
        chart.outlineAlpha = 0.8;
        chart.outlineThickness = 2;
        // 3D
        chart.depth3D = 20;
        chart.angle = 30;
        // ͼ��д��
        chart.write("chartdiv");
//                alert("load()");

    //});
}

function cancel(id){
    document.getElementById(id).style.display="none";
}
