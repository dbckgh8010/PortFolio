$(function() {
    setTimeout(function() {
        $('.section1').hide();
    }, 3000);

    var tl = gsap.timeline({repeat: 0});

    tl.to(".list1", {opacity: 1, delay: 3});
    tl.to(".list2", {opacity: 1, delay: 1});
    tl.to(".list3", {opacity: 1, delay: 1});

    setInterval(
        function() {
            var dateInfo = new  Date();
            var hour = dateInfo.getHours();
            var min = dateInfo.getMinutes();
            var sec = dateInfo.getSeconds();
            var year = dateInfo.getFullYear();
            var month = dateInfo.getMonth() + 1;
            var date = dateInfo.getDate();
            var daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
            var dayOfweek = daysOfWeek[dateInfo.getDay()];

            $(".day").html(year + "년&nbsp;" + month + "월&nbsp;" + date + "일&nbsp;" + dayOfweek + "요일");
            $(".time").html(hour + "시" + min + "분" + sec + "초");
        }, 1000);
})