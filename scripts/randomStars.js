for (var i = 0; i < 40; i++) {
    Left = Math.floor(Math.random() * 100);
    Top = Math.floor(Math.random() * 100) + 5;
    $("#area").append("<div class='square-stars' + id=" + i + "></div>");
    $("#" + i).css({
        "position": "absolute",
            "top": Top + "%",
            "left": Left + "%",
    });
};