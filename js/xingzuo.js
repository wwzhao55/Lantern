function PostData(action){
    $.ajax({
        type:'POST',
        url:'record.php',
        data:{
            openid: $('#openid').val(),
            action:action
        },
        success:function(result){
            console.log(result);
        },
        dataType:"json"

    });
}

function xingzuodata(pram){
    switch(pram){
        case 1:
            return "2";
            break;
        case 2:
            return "3";
            break;
        case 3:
            return "4";
            break;
        case 4:
            return "5";
            break;
        case 5:
            return "6";
            break;
        case 6:
            return "7";
            break;
        case 7:
            return "8";
            break;
        case 8:
            return "9";
            break;
        case 9:
            return "10";
            break;
        case 10:
            return "11";
            break;
        case 11:
            return "12";
            break;
        case 12:
            return "13";
            break;
    }
}
function toggleEl(xingzuo){
    console.log(xingzuo);
    if (xingzuo == "Star") {
        //幸运星17
        PostData(17);
        $('#phone').show();
    } else if (xingzuo == "Rules") {
        //查看规则15
        PostData(15);
        $('#see-rule').show();
    } else if (xingzuo == "Reward") {
        //查看奖励14
        PostData(14);
        $.ajax({
            type: 'POST',
            url: 'reward.php',
            data: {
                openid:userId
            },
            success: function(data){
                if (data.status == 'success') {
                    if (data.reward == 'no') {
                        $('#newbee').show();
                    } else {
                        if(data.reward == 0){
                            $('#invite').show();
                        }else{
                            window.location.href = 'https://'+domain+'/reward.php?cash='+data.reward+"&openid="+userId;
                        }
                    }
                }
            } ,
            dataType: 'json'
        });
    } else {
        //点击星座2-13
        PostData(xingzuodata(parseInt(xingzuo)));
        $('.xingzuo-image').attr('src','');
        $('.xingzuo-image').attr('src','images/plane/'+xingzuo+'.png');
        var xingzuo_array = {
            '1':'鼠',
            '2':'牛',
            '3':'虎',
            '4':'兔',
            '5':'龙',
            '6':'蛇',
            '7':'马',
            '8':'羊',
            '9':'猴',
            '10':'鸡',
            '11':'狗',
            '12':'猪',
        }
        $('#future-button-text').attr('to-href',xingzuo);
        var xingzuo_name = xingzuo_array[xingzuo];
        $('.xingzuo-title').html(xingzuo_name) ;
        setTimeout(function(){
            toggle();
        }, 400);
    }
}

function toggle(){
    $('#myElementId').toggle();
}

function translate(pram){
    switch(pram){
        case 1:
            return "21";
            break;
        case 2:
            return "22";
            break;
        case 3:
            return "23";
            break;
        case 4:
            return "24";
            break;
        case 5:
            return "25";
            break;
        case 6:
            return "26";
            break;
        case 7:
            return "27";
            break;
        case 8:
            return "28";
            break;
        case 9:
            return "29";
            break;
        case 10:
            return "30";
            break;
        case 11:
            return "31";
            break;
        case 12:
            return "32";
            break;
    }
}
function IntoNumber(pram){
    switch(pram){
        case 1:
            return "33";
            break;
        case 2:
            return "34";
            break;
        case 3:
            return "35";
            break;
        case 4:
            return "36";
            break;
        case 5:
            return "37";
            break;
        case 6:
            return "38";
            break;
        case 7:
            return "39";
            break;
        case 8:
            return "40";
            break;
        case 9:
            return "41";
            break;
        case 10:
            return "42";
            break;
        case 11:
            return "43";
            break;
        case 12:
            return "44";
            break;
    }
}

$(function(){

    PostData(1);
    var to_href;
    var textmessage;
    $('#back-index').click(function(){
        toggle();
    });
    $('.see_reward').click(function(){
        $.ajax({
            type: 'POST',
            url: 'reward.php',
            data: {
                openid:userId
            },
            success: function(data){
                if (data.status == 'success') {
                    if (data.reward == 'no') {
                        $('#newbee').show();
                    } else {
                        if(data.reward == 0){
                            $('#invite').show();
                        }else{
                            window.location.href = 'https://'+domain+'/reward.php?cash='+data.reward+"&openid="+userId;
                        }
                    }
                }
            } ,
            dataType: 'json'
        });
    })
    $('.xingzuo-image').click(function(){
         $('#future-button-text').click();
    })
    // 点击生肖解析21-32
    $('#future-button-text').click(function() {
        $('.dots').remove();
        $('.Zodiac_form #special_li').remove();
        $('.Zodiac_fate #special_Zodiac').remove();
        $('.Zodiac_form .unslider-arrow01').remove();
        $('.Zodiac_fate .unslider-arrow02').remove();
        $('.Zodiac_fate .unslider-arrow03').remove();
        var to_href = $(this).attr('to-href');
        if(to_href == 2 || to_href == 5 || to_href == 7 || to_href ==3 ||to_href == 12 ||to_href == 10){
            var ele = '<li id="special_li" style="width:580px;min-height:430px;">'+
                            '<div id="tab_6" class="content-style" style="top:0;">'+
                                '<div class="tab_title title1" style="margin-bottom:20px;"">属<span class="Zodiac_Name"></span>的人2017年的运程</div>'+
                                '<div class="list-block">'+
                                    '<span class="list_content"></span>'+
                                '</div>'+
                            '</div> '+
                        '</li>';
            $('.Zodiac_form ul').append(ele);
        }
        if(1){
            var list = '<li style="width:580px;min-height:430px;" id="special_Zodiac">'+
                            '<div id="tab_5" class="content-style" style="top:0;">'+
                                '<div class="tab_title title1">属<span class="Zodiac_Name"></span>的人2017年的运程</div>'+
                                '<div class="list-block">'+
                                    '<span class="list_title" style="margin:0;"></span>'+
                                    '<span class="list_content">'+
                                        '<span class="manage"></span>'+
                                    '</span>'+
                                '</div>'+
                            '</div>'+
                        '</li>';
            $('.Zodiac_fate ul').append(list);
        }
        var href_1 = '<a href="javascript:void(0);" class="unslider-arrow01 prev"><img class="arrow" id="al" src="images/arrowl.png" alt="prev" width="46" height="47"></a>';
        var href_2 = '<a href="javascript:void(0);" class="unslider-arrow01 next"><img class="arrow" id="ar" src="images/arrowr.png" alt="next" width="46" height="47"></a>';
        $('.Zodiac_form').append(href_1);
        $('.Zodiac_form').append(href_2);

        $('.btn_left').css('background-color','#756f7c');
        $('.btn_right').css('background-color','#e87651');
        $('#myElementId').hide();
        $('#xingzuo-content').show();
        $('.Zodiac_fate').hide();//隐藏生肖运势
        $('.Zodiac_form').show();//显示生肖由来

        var unslider01 = $('.Zodiac_form').unslider({
            dots: true,
            speed: 1000,
            delay: false,
            autoplay:false,
        }),

        data01 = unslider01.data('unslider');
        data01.move(0, function() {});

        $('.unslider-arrow01').click(function() {
            var fn = this.className.split(' ')[1];
            data01[fn]();
        });
        
        PostData(translate(parseInt(to_href)));//21-32
        var content = {
            '1': {
                'all-fate': {
                    'first':[
                        '<p>属鼠的朋友，偏财运比不上事业和工</p>'
                    ],
                    'second':[
                        '<p>作运。切记钱财不外露，否则会有破损。今年是个正财年，工作赚钱才是今年的重心。高风险投资一定要非常小心，如没有特别把握，就不要以身犯险，否则可能血本无归。</p>',
                        '<p><p>'
                    ]
                },
                'manage': {
                    'first': [
                        '<p>由于今年财运欠佳，本着“以钱生钱”的原则，具有固定收益的低风险投资组合更适合您。可尝试投资一贯平台的固定期限类主打产品“周周盈”。这是一款低风险、高收益、每周五11点定时发布的理财产品，1000元起</p>',
                    ],
                    'second': [
                        '<p>投，年化收益率最高可达4.9%。除此之外，若您想保留一部分资金零存活用，还可以尝试随存随取的活期类产品“小金贯”，1000元起投，使您的每一分钱都得到最大收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    ],
                    'third':[
                        '<p>更多的幸运就藏在许愿孔明灯里，点</p>'
                    ],
                    'forth':[
                        '<p>击“寻找幸运”在星空中寻找到属于您的幸运孔明灯吧。</p>'
                    ]
                },
                'feature':[
                    '<p>性柔和、为人坦成、单纯、具有敏锐的直观、能力强、性子急，经济、财运佳</p>',
                ]
            },
            '2': {
                'all-fate': {
                    'first':[
                        '<p></p>'
                    ],
                    'second':[
                        '<p>属牛的朋友正值财星主运，但因太岁临财，所以财运起伏较大。由于正财星缘故，收入主要来源于工作，如果在工作中表现突出，财运必然很大进步。另外，长线投资也是今年的生财之道。2017年属牛是三合太岁，所以容易消耗金钱，不宜从事合作投资、</p>',
                        '<p>短线炒卖及风险加大的投机活动，借贷或担保也不宜今年进行。</p>'
                    ]
                },
                'manage': {
                    'first': [
                        '<p>由于今年财运起伏较大，所以理财需谨慎低调，具有固定收益的低风险投资组合更适合您。可尝试投资一贯平台的固定期限类主打产品“周周盈”。这是一款低风险、高收益、每周五11点定时发布的理财产品，1000元起</p>',
                    ],
                    'second': [
                        '<p>投，年化收益率最高可达4.9%。除此之外，若您想保留一部分资金零存活用，还可以尝试随存随取的活期类产品“小金贯”，1000元起投，使您的每一分钱都得到最大收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    ],
                    'third':[
                        '<p>更多的幸运就藏在许愿孔明灯里，点</p>'
                    ],
                    'forth':[
                        '<p>击“寻找幸运”在星空中寻找到属于您的幸运孔明灯吧。</p>'
                    ]
                },
                'feature':[
                    '<p>沉默寡言，为人正直、纯朴，不愿伪装，具有勤劳、努力、坚毅的习惯，思考力强，坚持己见，有老大气概，做事精细，晚年将大展鸿图。</p>',
                ]
            },
            '3': {
                'all-fate': {
                    'first':[
                        '<p></p>'
                    ],
                    'second':[
                        '<p>属虎的人今年财运正旺。财星临命，伤官星生助正财星，不仅在工作中稳稳赚钱，同时还可凭借自己的专长和技能，赚取更多财富。伤官星主财之年会产生投机心里，投资之前要好好权衡利弊。钱财是慢慢积累的，切记财不入急门。今年收入不错，是少有</p>',
                        '<p>的入财生肖，但要注意节流以保证钱财的积累。</p>'
                    ]
                },
                'manage': {
                    'first': [
                        '<p>属虎财运正旺，可在今年多管齐下，采取多种理财组合，以最大化2017年的收益。财星临命的老虎，一定对基金产品早有涉猎，一贯平台上的基金产品与股票对比收益相对稳健，且有进取型、稳健型和保守型三类产品供</p>',
                    ],
                    'second': [
                        '<p>您选择，可以通过一贯APP密切关注。除此之外，每周五11点定时发布的固定期限类理财主打产品“周周盈”及明星产品“小金贯”，都是1000元起投，低风险高收益，安全可靠，使您的每一分钱都得到最大收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    ],
                    'third':[
                        '<p></p>'
                    ],
                    'forth':[
                        '<p>更多的幸运就藏在许愿孔明灯里，点击“寻找幸运”在星空中寻找到属于您的幸运孔明灯吧。</p>'
                    ]
                },
                'feature':[
                    '<p>富于正义感，讲道理，男性外刚而内柔，女性则外柔内刚；具有组织才能，富于发明、开拓精神，热心公益。</p>',
                ]
            },
            '4': {
                'all-fate': {
                    'first':[
                        '<p></p>'
                    ],
                    'second':[
                        '<p>属兔的朋友今年会收获名望，在金钱方面只能踏实做事儿，赚取辛苦钱。虽然亲历亲为有所收获，但还是要小心因为钱财失去朋友，今年不适合与别人合伙投资；但经商人士可以把重心放在开发海外市场，顺应市场变化进行创新，研究竞争对手动态，以站在市场前列。</p>',
                        '<p></p>'
                    ]
                },
                'manage': {
                    'first': [
                        '<p>今年兔子财政开支大增，适宜量入为出，定要警惕赤字和亏空，所以具有固定收益的低风险投资组合最适合您。可尝试投资一贯平台的固定期限类主打产品“周周盈”。这是一款低风险、高收益、每周五11点定时发布的</p>',
                    ],
                    'second': [
                        '<p>理财产品，1000元起投，年化收益率最高可达4.9%。除此之外，若您想保留一部分资金零存活用，还可以尝试随存随取的“小金贯”，1000元起投，使您的每一分钱都得到最大收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    ],
                    'third':[
                        '<p></p>'
                    ],
                    'forth':[
                        '<p>更多的幸运就藏在许愿孔明灯里，点击“寻找幸运”在星空中寻找到属于您的幸运孔明灯吧。</p>'
                    ]
                },
                'feature':[
                    '<p>为人乐观，快活，不愿过拘束的生活，为追求理想而前进，时尚前卫，凡有新流行，都会选择走在前端，理财观念也较为前卫。</p>',
                ]
            },
            '5': {
                'all-fate': {
                    'first':[
                        '<p></p>'
                    ],
                    'second':[
                        '<p>属龙的朋友今年是“您不求财财求您”的好年景。财星带贵人，事业上获贵人及伙伴支持，事业全速前进，官星会帮助您，比以往更容易产生收益。当心股票市场阴晴不定，不可投机，不要因冒进而被套牢，借钱投机更不可取。但是今年如果学习投资</p>',
                        '<p>理财，会有不凡的收获，多管齐下理财是您获得财富的最佳方式。</p>'
                    ]
                },
                'manage': {
                    'first': [
                        '<p>今年财运大旺，但财政支出也大幅增加，所以投资理财仍需小心谨慎、兼听则明。与股票的高风险相比，一贯平台上的基金产品收益相对稳健，适合正财运稳定的您，且有进取型、稳健型和保守型三类产品供您选择，可</p>',
                    ],
                    'second': [
                        '<p>以通过一贯APP密切关注。除此之外，每周五11点定时发布的固定期限类理财主打产品“周周盈”及明星产品“小金贯”，都是1000元起投，低风险高收益，安全可靠，使您的每一分钱都得到最大收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    ],
                    'third':[
                        '<p></p>'
                    ],
                    'forth':[
                        '<p></p>',
                        '<p>更多的幸运就藏在许愿孔明灯里，点击“寻找幸运”在星空中寻找到属于您的幸运孔明灯吧。</p>'
                    ]
                },
                'feature':[
                    '<p>品格高尚，刚毅，富于热情，进取心强，属聪明才智型；但缺乏思虑的耐心，做事常半途而废，表面冷漠，其实内心富有侠骨义气，处处为他人着想。</p>',
                ]
            },
            '6': {
                'all-fate': {
                    'first':[
                        '<p>您的努力在哪里，回报就在哪里。</p>'
                    ],
                    'second':[
                        '<p>2017年正财运突破不大，不要寄希望于工作上带来突破性收益，但正值食神生财年，偏财运亨通，年底拿个可观的大红包还是很有希望的。而且投资获利也显得比其他属相容易很多。多结交朋友，扩大交际范围会帮助您生意兴隆财源滚滚。</p>',
                        '<p></p>'
                    ]
                },
                'manage': {
                    'first': [
                        '<p>2017年属蛇者思路亨通，行“偏财”，多意外收入，故适宜加强投资理财等相关知识，积极积累财富。适宜大举出动的您，可适当涉猎一贯平台的基金类产品，有进取型、稳健型和保守型三类产品供您选择，请通过一贯</p>',
                    ],
                    'second': [
                        '<p>APP密切关注。除此之外，每周五11点定时发布的固定期限类理财主打产品“周周盈”及明星产品“小金贯”，都是1000元起投，低风险高收益，安全可靠，使您的每一分钱都得到最大收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    ],
                    'third':[
                        '<p></p>'
                    ],
                    'forth':[
                        '<p>更多的幸运就藏在许愿孔明灯里，点击“寻找幸运”在星空中寻找到属于您的幸运孔明灯吧。</p>'
                    ]
                },
                'feature':[
                    '<p>具有周密的思考力，立定志愿后必勇往无前；表面坦诚，智商高，品味好，是个艺术天才。</p>',
                ]
            },
            '7': {
                'all-fate': {
                    'first':[
                        '<p></p>'
                    ],
                    'second':[
                        '<p>属马的朋友2017年正财和偏财运都不错，经商的人会随着新客户的增多从而收入增加，投资的朋友，赚钱也比较容易。所谓和气生财，不要跟别人争执，若因财失义，反添烦恼。投资方面，如果道听途说或贸然跟他人合伙投资不知道的产品将有损失，但只</p>',
                        '<p>要了解好产品可以放心入手，可靠的基金和理财对资金的增长都有帮助。</p>'
                    ]
                },
                'manage': {
                    'first': [
                        '<p>今年马儿收入理想、财富充裕，适合入主投资、理财和创业。除了事业上的新发展以外，“禄神”运大旺的您适宜通过进取型投资产品获得财富。一贯平台还提供进取型、稳健型和保守型等三类基金产品，请通过一贯APP</p>',
                        '<p></p>'
                    ],
                    'second': [
                        '<p>密切关注。除此之外，每周五11点定时发布的固定期限类理财主打产品“周周盈”及明星产品“小金贯”，都是1000元起投，低风险高收益，安全可靠，使您的每一分钱都得到最大收益。（了解“一贯”平台，点击屏幕右上角。</p>',
                    ],
                    'third':[
                        '<p></p>'
                    ],
                    'forth':[
                        '<p>更多的幸运就藏在许愿孔明灯里，点击“寻找幸运”在星空中寻找到属于您的幸运孔明灯吧。</p>'
                    ]
                },
                'feature':[
                    '<p>为人豪爽，活泼，直接，推断力强，头脑灵活，机智，迅速，对任何事都很坦率，正直，并且善于口才，对待善恶事物的态度差异明显，是个急性子。</p>',
                ]
            },
            '8': {
                'all-fate': {
                    'first':[
                        '<p>属羊的朋友今年各种星宿和贵人都进</p>'
                    ],
                    'second':[
                        '<p>入财运和事业宫，所以事业有很大进步，工作表现好，受到上司提携，升职加薪就是水到渠成的事情。只要努力工作，确定目标，自然收入稳定，回报丰厚。只是在投资方面要小心分析，只有选择良好的投资产品才能收入稳定。</p>',
                        '<p></p>'
                    ]
                },
                'manage': {
                    'first': [
                        '<p>羊儿今年做事得心应手，如有神助，除了因工作表现带来的正财之外，偏财运也是惊人的好。您的偏财运今年来自于“暗禄”，即年初投资理财，长期储备不易察觉，年底时可获意外之喜，无后顾之忧，轻松度过各种危机</p>',

                    ],
                    'second': [
                        '<p>一贯平台上的稳健型、保守型和进取型基金产品，都是您可留意的目标，请通过一贯APP密切关注。除此之外，每周五11点定时发布的固定期限类理财主打产品“周周盈”及明星产品“小金贯”，都是1000元起投，低风险高收益，安全可靠，使您的每一分</p>',
                        '<p></p>'
                    ],
                    'third':[
                        '<p></p>'
                    ],
                    'forth':[
                        '<p>钱都得到最大收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                        '<p>更多的幸运就藏在许愿孔明灯里，点击“寻找幸运”在星空中寻找到属于您的幸运孔明灯吧。</p>'
                    ]
                },
                'feature':[
                    '<p>柔和而稳重，有深厚的人情味，是重仁义的好人，具有细腻的思考力，有毅力，表面柔和而内心却坚持己见。</p>', 
                ]
            },
            '9': {
                'all-fate': {
                    'first':[
                        '<p></p>'
                    ],
                    'second':[
                        '<p>属猴的朋友进入鸡年后人缘兴旺、社交活跃，事业发展势如破竹，努力工作会赢得丰厚成果。工作所得即预示正财星旺，正财旺则偏财弱，所以切不可存在投机心理，把握鸡年盛运，一定能赚取丰厚收获。今年属猴人士在商界容易大展拳脚，求利易于求名。</p>',
                        '<p></p>'
                    ]
                },
                'manage': {
                    'first': [
                        '<p>属猴者今年收入稳定、财富充裕、发展顺畅、升职加薪。猴子在今年会因为财运亨通而大展拳脚，但仍要保持低调，切忌冒进。建议不要贪恋股票带来的不稳定收益，可多留心稳健型基金。一贯平台上的基金产品种类丰</p>',
                    ],
                    'second': [
                        '<p>富，有进取型、稳健型和保守型三类产品供您选择，请通过一贯APP密切关注。除此之外，每周五11点定时发布的固定期限类理财主打产品“周周盈”及明星产品“小金贯”，都是1000元起投，低风险高收益，安全可靠，使您的每一分钱都得到最大收益。（了</p>',
                    ],
                    'third':[
                        '<p></p>'
                    ],
                    'forth':[
                        '<p>解“一贯”平台，点击屏幕右上角。）</p>',
                        '<p>更多的幸运就藏在许愿孔明灯里，点击“寻找幸运”在星空中寻找到属于您的幸运孔明灯吧。</p>'
                    ]
                },
                'feature':[
                    '<p>幽默、机智、活泼，所以多方面的才能常超越众人，人缘好，处事敏捷，自信心强，手脚灵活，善于模仿，开放，性格宽厚。</p>',
                ]
            },
            '10': {
                'all-fate': {
                    'first':[
                        '<p>今年是属鸡朋友的本命年，正值太</p>'
                    ],
                    'second':[
                        '<p>岁，不过不必担心，今年主财禄丰厚源源不绝。事业上将获贵人提携，升职加薪，创业者亦可大展拳脚，有部下和拍档鼎力相助，工作上的付出都会从财运上得以体现。投资方面，不要与他人合伙或与同行竞争而产生钱财消耗，但是合理选择理财产品还是</p>',
                        '<p>会为您的主财运添砖加瓦。</p>'
                    ]
                },
                'manage': {
                    'first': [
                        '<p>今年是属鸡人的进取之年，除了事业可创新气象之外，投资亦回报丰厚，可尝试投资一贯平台的固定期限类主打产品“周周盈”，这是一款低风险、高收益、每周五11点定时发布的理财产品，1000元起投，年化收益率最高</p>',
                    ],
                    'second': [
                        '<p>可达4.9%。除此之外，若您想保留一部分资金零存活用，还可以尝试随存随取的活期类产品“小金贯”，1000元起投，使您的每一分钱都得到最大收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    ],
                    'third':[
                        '<p>更多的幸运就藏在许愿孔明灯里，点</p>'
                    ],
                    'forth':[
                        '<p>击“寻找幸运”在星空中寻找到属于您的幸运孔明灯吧。</p>'
                    ]
                },
                'feature':[
                    '<p>性柔和、为人坦成、单纯、具有敏锐的直观、能力强、性子急，经济、财运佳。</p>',
                ]
            },
            '11': {
                'all-fate': {
                    'first':[
                        '<p>属狗的朋友今年行财运，工作表现出</p>'
                    ],
                    'second':[
                        '<p>众，地位稳固提升，在工作收入之外，投资方面稳扎稳打，也会有不错的收益。从商人士和创业一族，更是可以从投资中获得不错的收益。如果觉得这并不把握可以购买些稳健的理财产品，也会使您的整体收入稳步增长。</p>',
                        '<p></p>'
                    ]
                },
                'manage': {
                    'first': [
                        '<p>属狗者今年适宜等待机会降临，切忌三心二意左右逢源。理财方面不宜涉水股票，因为形势容易受大环境影响，没有主导权。在等待运气降临的同时，您还可多加关注一贯平台上的保守型、稳健型和进取型三类基金产</p>',
                    ],
                    'second': [
                        '<p>品。除此之外，每周五11点定时发布的固定期限类理财主打产品“周周盈”及明星产品“小金贯”，都是1000元起投，低风险高收益，安全可靠，使您的每一分钱都得到最大收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    ],
                    'third':[
                        '<p>更多的幸运就藏在许愿孔明灯里，点</p>'
                    ],
                    'forth':[
                        '<p>击“寻找幸运”在星空中寻找到属于您的幸运孔明灯吧。</p>'
                    ]
                },
                'feature':[
                    '<p>为人正直，守规矩，有责任感，对上司、长辈敬重、工作认真，自我观念强，耿直，防卫意识强。</p>',
                ]
            },
            '12': {
                'all-fate': {
                    'first':[
                        '<p>属猪的朋友今年财运稳定，收入理</p>'
                    ],
                    'second':[
                        '<p>想，由于天乙贵人进入人财帛宫，创业中的属猪者豪情万丈，发展充满万种可能；专业领域人士如金融、医疗、律师等从业者，将在本行业内大展身手，不仅发展前景好，回报亦较高。投资方面，切记提高警惕，谨慎投资，不适合高风险投资，如短线股</p>',
                        '<p>票，但选择稳健的理财产品，会使您的整体收入稳中有升。</p>'
                    ]
                },
                'manage': {
                    'first': [
                        '<p>属猪的您今年适宜韬光养晦，在投资方面不可高举高打，凡出手前必先理性分析，多方比较。与股票相比，保守和稳健型理财产品更适合今年的您，您可在一贯平台上查看周周盈，这是一款低风险、高收益、每周五11</p>',
                    ],
                    'second': [
                        '<p>点定时发布的理财产品，1000元起投，年化收益率最高可达4.9%。除此之外，您可以将闲散资金放置在的明星产品“小金贯”中，1000元起投，安全可靠，随存随取，支持多家银行卡在线投资，使您的每一分钱都得到最大收益。（了解“一贯”平台，点击屏</p>',
                    ],
                    'third':[
                        '<p></p>'
                    ],
                    'forth':[
                        '<p>幕右上角。）</p>',
                        '<p>更多的幸运就藏在许愿孔明灯里，点击“寻找幸运”在星空中寻找到属于您的幸运孔明灯吧。</p>'
                    ]
                },
                'feature':[
                    '<p>性格温和，不善争斗，信奉义理，律己甚严，经济头脑发达，具有逻辑性强，理性，独断力强。</p>',
                ]
            },
        };
        var Zodiac_array = {
            '1':'鼠',
            '2':'牛',
            '3':'虎',
            '4':'兔',
            '5':'龙',
            '6':'蛇',
            '7':'马',
            '8':'羊',
            '9':'猴',
            '10':'鸡',
            '11':'狗',
            '12':'猪',
        }
        var Zodiac_name = Zodiac_array[to_href];
        $('.Chinese_Zodiac').attr('src','images/points/'+to_href+'.png');

        $('.Zodiac_Name').html(Zodiac_name);
        var result = content[to_href];

        var feature = result['feature'];
        var all_fate_1 = result['all-fate']['first'];
        var all_fate_2 = result['all-fate']['second'];
        var manage_1 = result['manage']['first'];
        var manage_2 = result['manage']['second'];
        var manage_3 = result['manage']['third'];
        var manage_4 = result['manage']['forth'];
        //初始化
        $('#tab_1 .feature p').remove();
        $('#tab_1 .fate_1 p').remove();
        $('#tab_2 .list_content p').remove();
        $('#tab_3 .list_content p').remove();
        $('#tab_4 .manage_2 p').remove();
        $('#tab_4 .manage_3 p').remove();
        $('#tab_5 .manage p').remove();
        $('#tab_6 .list_content p').remove();

        feature.forEach(function (list) {
            $('#tab_1 .feature').append(list);
        });
        all_fate_1.forEach(function (fate) {//财富运势
            $('#tab_1 .fate_1').append(fate);
        });
        $('#tab_6 .list_content').append(all_fate_2[1]);
        //all_fate_2.forEach(function (fate) {//财富运势
            $('#tab_2 .list_content').append(all_fate_2[0]);
        //});
        manage_1.forEach(function (list) {//理财建议1
            $('#tab_3 .list_content').append(list);
        });
        manage_2.forEach(function (list) {//理财建议2
            $('#tab_4 .manage_2').append(list);
        });
        manage_3.forEach(function (list) {//理财建议2
            $('#tab_4 .manage_3').append(list);
        });
        manage_4.forEach(function (list) {//理财建议2
            $('#tab_5 .manage').append(list);
        });
    });

    //点击生肖由来和运势
    $('.btn_left').click(function(){
        $('.dots').remove();
        $('.Zodiac_form .unslider-arrow01').remove();
        $('.Zodiac_form .unslider-arrow03').remove();
        var href_1 = '<a href="javascript:void(0);" class="unslider-arrow03 prev"><img class="arrow" id="al" src="images/arrowl.png" alt="prev" width="46" height="47"></a>';
        var href_2 = '<a href="javascript:void(0);" class="unslider-arrow03 next"><img class="arrow" id="ar" src="images/arrowr.png" alt="next" width="46" height="47"></a>';
        $('.Zodiac_form').append(href_1);
        $('.Zodiac_form').append(href_2);

        var unslider03 = $('.Zodiac_form').unslider({
                dots: true,
                speed: 1000,
                delay: false,
                autoplay:false,
        }),
        data03 = unslider03.data('unslider');
        data03.move(0, function() {});
        $('.unslider-arrow03').click(function() {
            var fn = this.className.split(' ')[1];
            data03[fn]();
        });
        $(this).css('background-color','#756f7c');
        $('.btn_right').css('background-color','#e87651');
        $('.Zodiac_fate').hide();//隐藏生肖运势
        $('.Zodiac_form').show();//显示生肖由来      
    });
    $('.btn_right').click(function(){
        $('.dots').remove();
        $('.Zodiac_fate .unslider-arrow02').remove();
        var href_1 = '<a href="javascript:void(0);" class="unslider-arrow02 prev"><img class="arrow" id="al2" src="images/arrowl.png" alt="prev" width="46" height="47"></a>';
        var href_2 = '<a href="javascript:void(0);" class="unslider-arrow02 next"><img class="arrow" id="ar2" src="images/arrowr.png" alt="next" width="46" height="47"></a>';
        $('.Zodiac_fate').append(href_1);
        $('.Zodiac_fate').append(href_2);

        var unslider02 = $('.Zodiac_fate').unslider({
                dots: true,
                speed: 1000,
                delay: false,
                autoplay:false,
        }),
        data02 = unslider02.data('unslider');
        data02.move(0, function() {});
        $('.unslider-arrow02').click(function() {
            var fn = this.className.split(' ')[1];
            data02[fn]();
        });
        $(this).css('background-color','#756f7c');
        $('.btn_left').css('background-color','#e87651');
        $('.Zodiac_form').hide();//隐藏生肖由来
        $('.Zodiac_fate').show();//显示生肖运势
    });
    //点击查看更多33-44
    $('#view').click(function(){
        $('#xingzuo-content').hide();
        $('#future').show();
        PostData(IntoNumber(parseInt(to_href)));
    })
    $('#sure').click(function(){
        var myreg = /^(((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17([0,1,3]|[6-8]))|(18[0-9]))+\d{8})$/;
        var phone_num=$("#mobile").val();
        if(!myreg.test(phone_num))
        {
            alert('请输入有效的手机号码！');
        }else if (phone_num.length==0) {
            alert('不能为空');
        }else{
            $('.input_tip').hide();
         //   $(this).hide();
         //   $('#get-luck').show();
            $('#ensure').show();
        }
    })
    //查看幸运18


    //去注册19
    $('#go-register').click(function(){
        PostData(19);
        window.location.href='https://'+goreg_url+'/shareRegister.html?uid='+shared_mobile+'&acttype=2014';
    })
    $('.window_close').click(function(){
        $('.new_window').hide();
    })
    //去推荐20分享
    $('.invite-btn').click(function(){
        PostData(20);
    })
    $('.app_detail').click(function(){
        $('.background-cover').show();
        $('.app_window').show();
    })
    $('.app_close').click(function(){
        $('.background-cover').hide();
        $('.app_window').hide();
    })
    // $('.background-cover').click(function(){
    //     $(this).hide();
    //     $('.app_window').hide();
    // })

    $('.future-to-index').click(function(){
        PostData(17);
        $('.background-cover').hide();
        $('.app_window').hide();
        $('#future').hide();
        $('#xingzuo-content').hide();
    })
})
function ensurenum() {
    $('#ensure').hide();
    $('#sure').hide();
    getluck();
  //  $('#get-luck').show();
}
function cancelnum() {
    $('#ensure').hide();
}

var getluck = function () {
    var mobile = $('#mobile').val();
    $.ajax({
        type: 'GET',
        url: reg_url+'/P2BPlat/WXHFR900.do?mobile='+mobile,
        success: function (data) {
            if (data.cd) {
                is_new = parseInt(data.cd.newhandFlag);
            } else {
                is_new = 1;
            }
            getluck2();
        },
        dataType: 'json'
    });
};

function getluck2() {
    PostData(18);
    var mobile = $('#mobile').val();
    var openid = $('#openid').val();
    $.ajax({
        type: 'POST',
        url: 'luck.php',
        data: {
            mobile:mobile,
            openid:openid,
            is_new:is_new
        },
        success: function(data){
            var random = data.data;
            reward = random;
            has_get_reward = 'yes';
            if (is_new == 0) {
                $('#phone').hide();
                $('#invite').show();
            }else{
                switch (random) {
                    case 0:
                        $('#phone').hide();
                        $('#invite').show();
                        break;
                    case 1:
                        $('.experience-money').html(30);
                        $('#phone').hide();
                        $("#my-experience").show();
                        break;
                    case 2:
                        $('.experience-money').html(60);
                        $('.use_condition').html('可无条件提现(相当于20000元本金投资"小金贯"的3日收益)');
                        $('.receive_condition').html('领奖条件：现在就注册“一贯”账户，首次投资“一贯”任意一款产品不低于1000元且留存超过7个自然日，即可获得60元京东E卡或等值奖金。');
                        $('#phone').hide();
                        $("#my-experience").show();
                        break;
                    case 3:
                        $('.experience-money').html(90);
                        $('.use_condition').html('可无条件提现(相当于30000元本金投资"小金贯"的3日收益)');
                        $('.receive_condition').html('领奖条件：现在就注册“一贯”账户，首次投资“一贯”任意一款产品不低于1000元且留存超过7个自然日，即可获得90元京东E卡或等值奖金。');
                        $('#phone').hide();
                        $("#my-experience").show();
                        break;
                    case -7:
                        $('.new_window').show();
                        //window.location.href='/reward';
                        break;
                    default:
                        $('#error-info').html(data.message).show();
                        break;
                }
            }
        } ,
        dataType: 'json'
    });
}
var removeLoading = function() {
    if (!load1 || !load2) return;
    var e = document.getElementById('loading');
    e.style.display = "none";
    $('img').css('background-color', 'transparent');
    document.getElementById('tutorial').style.display = "block";
    setTimeout(function () {
        document.getElementById('tutorial').style.display = "none";
    }, 2000);
    for(var i=1;i<13;i++){
        $.ajax({
            type: 'GET',
            url: 'images/plane/'+i+'.png',
            success: function(data){}
        });
    }
    $.ajax({
            type: 'GET',
            url: 'images/analyise.png',
            success: function(data){}
    });
};

var musicStatus = true;
var toggleMusic = function() {
    var ele = document.getElementById('bg_audio');
    if (ele.paused) {
        ele.play();
    } else {
        ele.pause();
    }
}
    

