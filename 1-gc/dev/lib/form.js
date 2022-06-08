var api_url = 'https://api.101xp.com/',
    auth_url = 'https://auth.101xp.com/',
    ads_url = 'https://api-stat.101xp.com/ads',
    checkMail_url = 'https://101xp.com/session/emailexists',
    stat_url = 'https://api-stat.101xp.com/lpstat',
    game_url = '//icarus.101xp.com/download',
    game_id = '9111813AB199A',
    project_id = 275,
    advert_id = '',
    advert_event = 0,
    ad_platform = Cookies.get('platform'),
    ad_source = Cookies.get('ad_source'),
    ad_campaign = Cookies.get('campaign'),ad_canal = Cookies.get('canal'),
    client_id = '5B1EB814FEC8E',
    MetricOptions = '',
    page_id = 782,
    ref_url = location.search.substring(1),
    allOk = 'Cпасибо, все правильно';
var startTimer = new Date().getTime();
var regularPatern =  /[^a-zA-Z0-9.@_-]+/gi;

var ad_platform = Cookies.get('platform');

switch (ad_platform) {
    case 'ad1':

        paramsAd = '{"utm_term":"' + Cookies.get('ad1_cid') + '","utm_content":"' + Cookies.get('ad_source') + '","utm_source":"zn"}';
        advert_event = 1;

        break;paramsAd

    case 'ad101xp':

        paramsAd = '{"utm_campaign":"' + ad_campaign + '","utm_source":"ad101xp"}';

        break;

    case 'kadam':




        break;

    case 'admitad':

        paramsAd = '{"subid":"' + Cookies.get('subid') + '","pid":"' + Cookies.get('ad_source') + '"}';
        advert_id = 'a2e0279122';
        advert_event = 1;

        break;

    case 'adart':

        advert_id = 'SPFx';

        break;

    case 'rmbn':

        advert_id = '26011926';

        break;

    case 'cityads':

        paramsAd = '{"prx":"' + Cookies.get('ca_prx') + '","click_id":"' + Cookies.get('ca_cid') + '","aip":"' + Cookies.get('ad_source') + '","ref":"ca"}';
        advert_event = 1;

        break;

    case 'adverstar':

        advert_event = 1;

        break;

    case 'advmaker':

        paramsAd = '{"ams2s":"' + Cookies.get('ams2s') + '","id":"' + Cookies.get('ad_source') + '"}';

        break;

    case 'adcash':

        paramsAd = '{"cid":"' + Cookies.get('ac_cid') + '","subid":"' + Cookies.get('ad_source') + '","ref_name":"adc"}';

        break;

    case 'ad2game':

        paramsAd = '{"p":"' + Cookies.get('platform') + '","sub_id":"' + Cookies.get('ad2game_subid') + '","click_id":"' + Cookies.get('ad2game') + '"}';
        advert_event = 1;

        break;

    case 'pollto':

        paramsAd = '{"utm_content":"' + Cookies.get('pt_cid') + '","utm_source":"pollto"}';

        advert_event = 1;

        break;

    case 'wasd':

        paramsAd = '{"utm_campaign":"' + ad_campaign + '","utm_content":"' + Cookies.get('ad_source') + '","utm_source":"mediareach"}';
        advert_event = 1;

        break;

    case 'coinsup':

        paramsAd = '{"utm_content":"' + Cookies.get('cup_cid') + '","utm_source":"coinsup"}';
        advert_event = 1;

        break;

    case 'mediaget':

        paramsAd = '{"subid":"' + Cookies.get('mediaget_cid') + '","ref_name":"admitlead"}';
        advert_event = 1;

        break;

    case 'mobo':

        paramsAd = '{"clickid":"' + Cookies.get('mobo_cid') + '","utm_source":"mobo"}';
        advert_event = 1;

        break;

    case 'aaads':

        paramsAd = '{"utm_content":"' + Cookies.get('aaa_cid') + '","utm_term":"' + Cookies.get('ad_source') + '","utm_source":"aaads"}';
        advert_event = 1;

        break;

    case 'himba':

        paramsAd = '{"utm_content":"' + Cookies.get('himba_cid') + '","utm_source":"himba"}';
        advert_event = 1;

        break;

    default:

        advert_id = '1';
}



$.extend({
    SendAds: function (api, args) {

        var stopTimer = new Date().getTime(),
        msTime = stopTimer - startTimer;
        var defaultArgsAd = {

            // id юзера на портале
            uid: 0,
            // название платформы
            platform: ad_platform,
            // id игры
            game: game_id,
            //  json строка с параметрами рекламы
            params: paramsAd,
            // id источника рекламы
            source: ad_source,
            // название рекламной кампании
            campaign: ad_campaign,
            // id рекламной сети для постбека
            // aid: advert_id,
            // отслеживать ли события для этого юзера
            events: advert_event, timer: msTime, ip: ip, xpguid: xpguid, platformguid: platformguid, canal: ad_canal, page_id: page_id

        };

        args = $.extend({}, defaultArgsAd, args);

        jqxhr = $.post(
            api,
            args,
            function (res) {
                checkStat(res);
                //console.log(res);
            },
            "json"
        );

        jqxhr.fail(checkStat);

        function checkStat(data){ MetricOptions = {type: 'tracker',element: 'checkStat',ref: data}; $.SendMetrics(stat_url, MetricOptions);
            
            if(typeof data === 'object') {
                if (data.status === 'success') {

                    VK.Retargeting.Event('icarus_reg');
                    yaCounter43202989.reachGoal('regactiv2');
                    ga('send', 'event', 'Ikarusreg', 'Ikarusactivreg', 'click');
                    //(window.Image ? (new Image()) : document.createElement('img')).src = location.protocol + '//vk.com/rtrg?r=gL*3sXnFSp7i53/vuJDE2pNMtQyknDpJsbXVlrZ0QMqx6dGNPq0ay1qd7nNtcl0j2vWycBQE0NGhwggFITzh0ojTiWLmnmXaUhn4AUmL56ALCp1MwDT9*xCfmCTJH8Zqhh*UyxErQWZgB7X5vrc1kRHW5w6NMEasBKE4fayY8UA-&pixel_id=1000085791';
                    //$('body').append('<iframe src="http://links.101xp.com/gi/cJ0/m/f10d20d6"></iframe>');


                    setTimeout(function () {
                        window.location.href = game_url;
                    },1000)
                } else {
                    window.location.href = game_url
                }
            } else {
                window.location.href = game_url
            }
        }


    },
    SendMetrics: function (api, args, ads) {

        if(ads != undefined && typeof ads == 'object') {
            $.SendEvent('analytics', ads.uid);
        }

        var defaultArgsMetric = {

            // что это за событие, возможны варианты load,click,signin
            type: 'load',
            // страница, на которой произошло событие
            page: page_id,
            // метки рекламной кампании
            ref: paramsAd,
            // id вебмастера в сетке
            webmaster: ad_source,
            // название рекламной кампании
            campaign: ad_campaign,
            // алиас рекламной сети
            platform: ad_platform,
            // на каком элементе зафиксировано, 0 - не указано, btn_1 - вход по токену, btn_2 - новая регистрация
            element: 0,
            // id пользователя: 0 - не указан
            user: 0,
            // ip пользователя
            ip: ip, xpguid: xpguid, platformguid: platformguid

        };

        args = $.extend({}, defaultArgsMetric, args);

        jqxhr = $.post(
            api,
            args,
            function (res) {
                // do nothing
            },
            "json"
        );

        jqxhr.always(function () {
            if (typeof ads == "object") {
                //document.getElementById('download').src = '/launcher_loader.php?client_id=' + client_id + '&xpguid=' + xpguid;

                //setTimeout(function () { // обернуто для более стабильной скачки лаунчера
                    $.SendAds(ads_url, ads);
                //}, 300);
            }
        });
    },
    SendEvent: function (type, uid) {
        var options = {
            type: type,
            project_id: project_id,
            user_id: uid || 0,
            // guid: xpguid
        };

        if(type == 'analytics') {
            var clientId = null;
            ga(function(tracker) {
                clientId = tracker.get('clientId');
            });
            options.ycid = yaCounter43202989.getClientID();
            options.gcid = clientId;
        }

        $.post('https://mws-monitoring.101xp.com/events', options, function() {});
    },
    TokenAuth: function (api, token, element) {
        $.get(
            api + 'account?access_token=' + token,
            function (res) {
                if (res.status === 'success') {
                    //console.log('TokenAuth',res.access);

                    MetricOptions = {
                        type: 'signin',
                        element: element,
                        user: res.account['id']
                    };

                    AdsOptions = {
                        uid: res.account['id']
                    };

                    $.SendMetrics(stat_url, MetricOptions, AdsOptions);
                    
                }
            }, 'json'
        ).fail(function () {
                $.removeCookie('auth_token');
                //  location.reload();
            });
    },
    TokenRefresh: function (api, token, client) {
        $.post(
            api + 'refresh',
            {client_id: client, refresh_token: token},
            function (res) {
                if (res.status === 'success') {
                    tokensObj = {'access_token': res.access['access_token'], 'refresh_token': res.access['refresh_token']};
                    Cookies.get('auth_token', res.access['access_token'], {expires: 1, domain: '.101xp.com', path: '/'});
                    Cookies.get('refresh_token', res.access['refresh_token'], {expires: 7, domain: '.101xp.com', path: '/'});
                    $.TokenAuth(api_url, res.access['access_token'], 'btn_1');
                    //console.log('refresh',res.access);
                } else {
                    $.removeCookie('refresh_token');
                    $('#loader').hide();
                }
            }, 'json'
        ).fail(function () {
                $.removeCookie('refresh_token');
                // location.reload();
            });
    },
    UserSignIn: function (api, fields) {
        $.post(
            api + 'signin',
            fields,
            function (res) {
                if (res.status === 'success') {

                    tokensObj = {
                        'access_token': res.access['access_token'],
                        'refresh_token': res.access['refresh_token']
                    };
                    //console.log(res.access);
                    Cookies.get('auth_token', res.access['access_token'], {expires: 1, domain: '.101xp.com', path: '/'});
                    Cookies.get('refresh_token', res.access['refresh_token'], {
                        expires: 7,
                        domain: '.101xp.com',
                        path: '/'
                    });

                    //       $.TokenAuth(api_url,Cookies.get('auth_token'),'btn_2');

                    MetricOptions = {
                        type: 'signin',
                        element: 'btn_2',
                        user: res.access['id']
                    };

                    AdsOptions = {
                        uid: res.access['id']
                    };

                    $.SendMetrics(stat_url, MetricOptions, AdsOptions);

                }
            }, 'json'
        );
    },
    UserSignUp: function (api, fields, infields) {
        $.post(
            api + 'signup',
            fields,
            function (res) {
                if (res.status === 'success') {
                    //console.log('signup',res);
                    if (res.access_token != undefined) {
                        tokensObj = {'access_token': res.access_token, 'refresh_token': res.refresh_token};
                    }
                        Cookies.get('auth_token', res.access_token, {expires: 1, domain: '.101xp.com', path: '/'});
                        Cookies.get('refresh_token', res.refresh_token, {expires: 7, domain: '.101xp.com', path: '/'});

                    
                        //$.TokenAuth(api_url, Cookies.get('auth_token'), 'btn_2');
                        $.UserSignIn(auth_url, infields);
                }
            }, 'json'
        ).fail(function (data) {

                var res = JSON.parse(data.responseText);
                if (res.error_code === 806) {

                    $('label[for=email]').text('Адрес занят').addClass("badchecked").removeClass("checked");

                    $('input[name=email]').addClass("badchecked").removeClass("checked");
                    $('input[name=email]').focus();
                }

            if (res.error_code === 805) {

                $('label[for=email]').text('Невалидный email').addClass("badchecked").removeClass("checked");

                $('input[name=email]').addClass("badchecked").removeClass("checked");
                $('input[name=email]').focus();
            }
            if (res.error_code === 20821) {

                $('label[for=password]').addClass("badchecked").removeClass("checked");
                $('input[type=password]').addClass("badchecked").removeClass("checked");
                alert('Пароль должен содержать от 7 символов, включая как минимум одну букву и одну цифру');

            }

            $('#spinner').hide();

        });

    }
});


if (document.documentElement.attachEvent)  document.documentElement.attachEvent('onmousedown', function () {
    event.srcElement.hideFocus = true
});
$(document).ready(function () {

    $.SendMetrics(stat_url);

    if (typeof Cookies.get('social_login') != 'undefined') {

        $.removeCookie('social_login', {domain: '.101xp.com', path: '/'});
        $.TokenAuth(api_url, Cookies.get('auth_token'), 'btn_2');

    }

    if (typeof Cookies.get('social_email') != 'undefined') {

        $.removeCookie('social_email', {domain: '.101xp.com', path: '/'});
        $.removeCookie('provider_token', {domain: '.101xp.com', path: '/'});
        alert('Регистрация через выбранную социальную сеть временно недоступна.\nПожалуйста, выберите другой способ.');

    }

    $('.social_login').click(function (e) {
        e.preventDefault();

        var windowSrc = auth_url + 'socialauth/connect/' + $(this).data('provider') + '?client_id=' + game_id + '&redirect=' + location.protocol  + '//' + location.hostname + location.pathname;

        location.href = windowSrc;

    });

    $('input').on('blur', function () {
        $(this).next().removeClass('focused');
    }).on('focus', function () {
        $(this).next().addClass('focused');
    });



    $(document).click(function () {
        if ($('#email').val() == '') {
            $('#email').removeClass("error").focus();
            $('#label_text').hide();
        } else if ($('#email').val() != '' && $('#email').hasClass("error")) {
            $('#email').focus();
        }
    });


    // validate signup form on keyup and submit
    var validator = $("#profileForm").validate({
        debug: true,
        rules: {
            password: {
                required: true,
                minlength: 7,
                alphanumeric: true
            },
            email: {
                required: true,
                email: true

            }
        },
        messages: {
            password: {
                required: "Пароль должен содержать не менее 7-ми<br>латинских букв и цифр",
                minlength: "Пароль должен содержать не менее 7-ми<br>латинских букв и цифр",
                rangelength: "Пароль должен содержать не менее 7-ми<br>латинских букв и цифр",
                alphanumeric: "Пароль содержит недопустимые символы"
            },
            email: {
                required: "Требуется для входа в игру",
                minlength: "Введен неверный email",
                email: "Введен неверный email",
                remote: "Адрес занят"
            }
        },
        submitHandler: function () {
            validator.checkForm();

            $(document).find('label').each(function (j, element) {
                if ($(element).text() == allOk) $(element).addClass("checked").removeClass("badchecked"); else $(element).addClass("badchecked").removeClass("checked");
            });
            if (!$.trim($form.find(':input[name=email]').val()).length) $('label[for=email]').removeClass("badchecked").removeClass("checked");
            if ($('label[for=email]').text() == allOk) {

                MetricOptions = {
                    type: 'click',
                    element: 'btn_2'
                };

                $.SendMetrics(stat_url, MetricOptions);

                // var email = $form.find(':input[name="email"]').val();
                //     password = $form.find(':input[name="password"]').val(),
                //     fields_signin = {client_id: client_id, username: email, password: password};
                //
                // $form.find(':input[name="username"]').val(email);
                // $form.find(':input[name="password_confirm"]').val(password);
                //
                // var fields_signup = $($form).serializeArray();
                //
                // $.UserSignUp(auth_url, fields_signup, fields_signin);
                // $('#spinner').show();
            }

        },
        success: function (label) {
            label.html(allOk).addClass("checked");
        }


    });

    $('#show_form_btn').click(function() {
        $('#custom_modal_overlay').fadeIn(400, function () {
            $('#landing').css('display', 'block').animate({opacity: 1}, 200);
        });
    });

    $('#custom_modal_close').click(function () {
        $('#landing').animate({opacity: 0}, 200, function () {
            $(this).css('display', 'none');
            $('#custom_modal_overlay').fadeOut(400);
        });
    });

    
    if(navigator.userAgent.indexOf('.NET') > 0 || navigator.appName.indexOf('Microsoft Internet Explorer') > 0) {
        var doc = document.documentElement;
        doc.setAttribute('data-useragent', 'ie');
    }

    $(".wrap_submit_btn .blocked_btn").click(function () {
        $("#profileForm .bg_input input").removeClass("animate");
        $(this).width(); // для повторного запуска анимации
        $("#profileForm .bg_input input:not(.valid)").addClass("animate");
    });

    // VK.Retargeting.Add(24040870);
});


