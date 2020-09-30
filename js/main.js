const name = document.getElementById("username").value;
const number = document.getElementById("number").value;

const word_array = [
    '百尺竿頭，再來一首',
    '老師就在燈火闌珊處',
    '有些熱愛值得義無反顧',
    '我都聽見了',
    '一杯奶茶解決不了的問題，就再來一杯吧',
    '如果一杯奶茶解決不了的問題，妳可以考慮解決妳自己',
    '做得好！要不要來份炭烤雞排',
    '單憑一個人是無法達成條件的',
    '我揮揮衣袖不帶走一片雲彩',
    '輕輕的我走了，正如我輕輕的來',
    '幸福是把靈魂安放在適當的位子',
    '唯有那些異想天開的人，才能完成不可能的事',
    '一口吃不成胖子，但胖子卻是一口一口吃來的',
    '腦洞：小洞不補，大洞吃苦',
    '外表的美只能取悅於人的眼睛，而內在的美卻能感染人的靈魂'
];

// 按下按鈕後到下一個頁面
$("#record").click(function () {
    $('html, body').animate({
        scrollTop:$("#second").offset().top},{duration: 1000, easing:'swing'});
    return false;
})

// 生成指定範圍隨機數
function getRandom(start, end) {
    var length = end - start;
    var num = parseInt(Math.random() * (length) + start);
    return num;
}
// console.log(getRandom(1,15));

// 太陽月亮交替
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if (scrollVal >= 1020) {
            $('.moon').fadeOut(500);
            $(".sun").css("opacity",1);
            $('.sun').fadeIn(500);
        } else {
            $(".sun").css("opacity",0);
            $('.sun').fadeOut(500);
            $('.moon').fadeIn(500);
        }
    });
});