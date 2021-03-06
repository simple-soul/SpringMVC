document.documentElement.style.overflow='hidden';

//获取用户名
var name = $.cookie("kangyuan_name");
var level = $.cookie("kangyuan_lv");


if(level == 0)
{
    $('#staff').hide();
    $('#user').hide();
    $('#address').hide();
    $('#map').hide();
    $('#order').hide();
    $('#compile').hide();
}
else
{
    $('#myOrder').hide();
}

$('.user-panel-logged-in-text').find('span').text(name);
$('.tpl-header-navbar-welcome').find('a').find('span').text(name);

//修改密码
$('#submit').click(function ()
{
    var pass = $.trim($('#password').val());
    var dou_pass = $.trim($('#double_password').val());
    var alert_pass = $('#alert_pass');

    alert_pass.hide();

    if (pass !== null && dou_pass !== null)
    {
        if (pass === dou_pass)
        {
            var str = md5(pass);
            $.ajax({
                url: '/staff/changePass',
                type: 'post',
                data: "pass=" + str,
                success: function (data)
                {
                    console.log(data.response);
                    if (data.status === 200)
                    {
                        if (data.response.result === true)
                        {
                            $.cookie('kangyuan_pass', str);
                            location.reload();
                        }
                        else
                        {
                            alert_pass.find('p').text("修改密码失败!");
                            alert_pass.show();
                        }
                    }
                    else if (json.status === 500)
                    {
                        alert_pass.find('p').text("服务器错误!");
                        alert_pass.show();
                    }
                    else
                    {
                        alert_pass.find('p').text("未知错误!");
                        alert_pass.show();
                    }
                },
                error: function (e)
                {
                    console.log(e);
                }
            })
        }
        else
        {
            alert_pass.find('p').text("两次密码不同!");
            alert_pass.show();
        }
    }
    else
    {
        alert_pass.find('p').text("密码不能为空哦!");
        alert_pass.show();
    }
});

var titles = $('.sidebar-nav').find('a');

function noSelected()
{
    titles.attr("class", "");
}

var frame = $('#myFrame');

//切换界面
$('#index').click(function ()
{
    noSelected();
    $('#index').attr("class", "active");
    frame.attr("src", "/index2");
});
$('#staff').click(function ()
{
    noSelected();
    $('#staff').attr("class", "active");
    frame.attr("src", "/staff");
});
$('#user').click(function ()
{
    noSelected();
    $('#user').attr("class", "active");
    frame.attr("src", "/user");
});
$('#address').click(function ()
{
    noSelected();
    $('#address').attr("class", "active");
    frame.attr("src", "/address");
});
$('#activity').click(function ()
{
    noSelected();
    $('#activity').attr("class", "active");
    frame.attr("src", "/activity");
});
$('#goods').click(function ()
{
    noSelected();
    $('#goods').attr("class", "active");
    frame.attr("src", "/goods");
});
$('#order').click(function ()
{
    noSelected();
    $('#order').attr("class", "active");
    frame.attr("src", "/order");
});
$('#compile').click(function ()
{
    noSelected();
    $('#compile').attr("class", "active");
    frame.attr("src", "/compile");
});
$('#myOrder').click(function ()
{
    noSelected();
    $('#myOrder').attr("class", "active");
    frame.attr("src", "/myOrder");
});

