/******************************

脚本功能：vision-个人OKR目标+解锁订阅
下载地址：https://is.gd/X7S0eg
软件版本：3.3.13
脚本作者：彭于晏💞
更新时间：2022-10-02
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/2910623/Quantumult-X/main/pyy/ycdz/vision.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var _0x7964=['\x53\x55\x54\x43\x70\x73\x4f\x6a\x77\x70\x62\x43\x67\x45\x38\x59\x77\x36\x51\x43\x45\x78\x33\x43\x72\x38\x4f\x58\x57\x6a\x41\x4f\x53\x54\x54\x43\x72\x67\x3d\x3d','\x51\x4d\x4f\x55\x77\x72\x6a\x44\x75\x38\x4f\x32','\x77\x37\x50\x43\x71\x56\x6c\x68\x77\x71\x59\x3d','\x77\x36\x4c\x44\x6c\x47\x4c\x43\x73\x6c\x6b\x52\x59\x73\x4f\x47\x42\x48\x64\x65\x59\x6c\x78\x5a\x77\x71\x31\x57\x4e\x58\x6e\x44\x74\x73\x4f\x42','\x77\x36\x73\x38\x77\x34\x41\x34','\x4e\x6e\x45\x35\x77\x36\x52\x76\x66\x78\x76\x44\x69\x48\x50\x43\x72\x42\x6e\x43\x76\x63\x4f\x61\x77\x71\x41\x37\x45\x63\x4f\x4e\x59\x38\x4b\x74\x50\x41\x3d\x3d','\x77\x71\x48\x44\x75\x73\x4b\x32\x77\x6f\x41\x4f','\x50\x6d\x59\x4d\x77\x35\x6e\x44\x74\x41\x51\x37\x41\x6b\x31\x6b\x44\x63\x4f\x56\x77\x6f\x54\x43\x6a\x4d\x4b\x76\x77\x37\x62\x44\x75\x38\x4f\x4c\x42\x73\x4b\x6d','\x77\x71\x31\x6d\x66\x38\x4b\x54\x77\x34\x34\x70\x43\x63\x4b\x64\x52\x6d\x68\x44\x4f\x78\x39\x70','\x65\x73\x4b\x64\x77\x35\x54\x43\x69\x48\x6b\x6b\x52\x57\x76\x44\x6e\x73\x4f\x50\x4a\x78\x72\x43\x73\x63\x4b\x31\x77\x70\x4e\x32\x65\x73\x4b\x53\x77\x72\x50\x43\x76\x51\x3d\x3d','\x77\x36\x52\x71\x77\x6f\x6a\x44\x67\x53\x48\x43\x72\x69\x64\x66\x77\x35\x6f\x3d','\x77\x34\x33\x43\x6f\x63\x4f\x75\x77\x36\x70\x32\x52\x31\x4a\x4f\x5a\x51\x3d\x3d','\x64\x58\x4e\x31\x57\x43\x74\x2f\x51\x63\x4f\x6f\x77\x6f\x54\x44\x69\x38\x4b\x31\x62\x6c\x58\x43\x6e\x57\x6b\x38\x77\x71\x51\x6f\x49\x56\x4c\x43\x70\x38\x4f\x41\x45\x4d\x4f\x63','\x77\x70\x76\x44\x6c\x73\x4b\x78\x48\x6d\x6a\x43\x6a\x63\x4f\x30\x77\x70\x68\x58\x77\x70\x4c\x44\x74\x6c\x33\x44\x6a\x63\x4b\x58\x77\x37\x68\x68\x77\x35\x38\x49\x62\x41\x34\x3d','\x77\x72\x68\x67\x59\x63\x4b\x38\x77\x70\x59\x38\x4d\x77\x3d\x3d','\x77\x72\x70\x69\x77\x70\x30\x3d','\x4d\x45\x6c\x63\x57\x78\x41\x54\x77\x70\x41\x6f\x77\x36\x6f\x3d','\x77\x35\x44\x44\x6f\x55\x58\x43\x76\x7a\x42\x51\x61\x73\x4f\x39\x61\x4d\x4f\x77\x58\x6c\x4c\x44\x69\x73\x4b\x59\x77\x35\x56\x6d\x77\x35\x30\x53\x51\x6b\x30\x3d','\x41\x63\x4f\x68\x52\x73\x4f\x46\x54\x30\x73\x33\x77\x72\x68\x65\x77\x70\x46\x78\x77\x34\x4e\x51\x77\x37\x70\x6a\x77\x36\x68\x4e\x77\x71\x4c\x43\x74\x57\x55\x3d','\x4e\x31\x68\x64\x52\x67\x3d\x3d'];(function(_0x562c7c,_0x796471){var _0x22cce9=function(_0x10db54){while(--_0x10db54){_0x562c7c['push'](_0x562c7c['shift']());}};var _0x5c0122=function(){var _0x451b50={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5afa21,_0x23b8b9,_0x294bed,_0x9c16be){_0x9c16be=_0x9c16be||{};var _0x5dc139=_0x23b8b9+'='+_0x294bed;var _0x8e6733=0x0;for(var _0x307428=0x0,_0x98153c=_0x5afa21['length'];_0x307428<_0x98153c;_0x307428++){var _0x37f3eb=_0x5afa21[_0x307428];_0x5dc139+=';\x20'+_0x37f3eb;var _0x457080=_0x5afa21[_0x37f3eb];_0x5afa21['push'](_0x457080);_0x98153c=_0x5afa21['length'];if(_0x457080!==!![]){_0x5dc139+='='+_0x457080;}}_0x9c16be['cookie']=_0x5dc139;},'removeCookie':function(){return'dev';},'getCookie':function(_0xa607ae,_0x43d5a7){_0xa607ae=_0xa607ae||function(_0x495a3a){return _0x495a3a;};var _0x439814=_0xa607ae(new RegExp('(?:^|;\x20)'+_0x43d5a7['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x261511=function(_0x367cc0,_0x29d172){_0x367cc0(++_0x29d172);};_0x261511(_0x22cce9,_0x796471);return _0x439814?decodeURIComponent(_0x439814[0x1]):undefined;}};var _0x2e813c=function(){var _0x1cae73=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1cae73['test'](_0x451b50['removeCookie']['toString']());};_0x451b50['updateCookie']=_0x2e813c;var _0x4c1cd0='';var _0x50b0e4=_0x451b50['updateCookie']();if(!_0x50b0e4){_0x451b50['setCookie'](['*'],'counter',0x1);}else if(_0x50b0e4){_0x4c1cd0=_0x451b50['getCookie'](null,'counter');}else{_0x451b50['removeCookie']();}};_0x5c0122();}(_0x7964,0x1ce));var _0x22cc=function(_0x562c7c,_0x796471){_0x562c7c=_0x562c7c-0x0;var _0x22cce9=_0x7964[_0x562c7c];if(_0x22cc['wBwGUF']===undefined){(function(){var _0x451b50;try{var _0x4c1cd0=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x451b50=_0x4c1cd0();}catch(_0x50b0e4){_0x451b50=window;}var _0x2e813c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x451b50['atob']||(_0x451b50['atob']=function(_0x5afa21){var _0x23b8b9=String(_0x5afa21)['replace'](/=+$/,'');var _0x294bed='';for(var _0x9c16be=0x0,_0x5dc139,_0x8e6733,_0x307428=0x0;_0x8e6733=_0x23b8b9['charAt'](_0x307428++);~_0x8e6733&&(_0x5dc139=_0x9c16be%0x4?_0x5dc139*0x40+_0x8e6733:_0x8e6733,_0x9c16be++%0x4)?_0x294bed+=String['fromCharCode'](0xff&_0x5dc139>>(-0x2*_0x9c16be&0x6)):0x0){_0x8e6733=_0x2e813c['indexOf'](_0x8e6733);}return _0x294bed;});}());var _0x10db54=function(_0x98153c,_0x37f3eb){var _0x457080=[],_0xa607ae=0x0,_0x43d5a7,_0x439814='',_0x261511='';_0x98153c=atob(_0x98153c);for(var _0x367cc0=0x0,_0x29d172=_0x98153c['length'];_0x367cc0<_0x29d172;_0x367cc0++){_0x261511+='%'+('00'+_0x98153c['charCodeAt'](_0x367cc0)['toString'](0x10))['slice'](-0x2);}_0x98153c=decodeURIComponent(_0x261511);var _0x495a3a;for(_0x495a3a=0x0;_0x495a3a<0x100;_0x495a3a++){_0x457080[_0x495a3a]=_0x495a3a;}for(_0x495a3a=0x0;_0x495a3a<0x100;_0x495a3a++){_0xa607ae=(_0xa607ae+_0x457080[_0x495a3a]+_0x37f3eb['charCodeAt'](_0x495a3a%_0x37f3eb['length']))%0x100;_0x43d5a7=_0x457080[_0x495a3a];_0x457080[_0x495a3a]=_0x457080[_0xa607ae];_0x457080[_0xa607ae]=_0x43d5a7;}_0x495a3a=0x0;_0xa607ae=0x0;for(var _0x1cae73=0x0;_0x1cae73<_0x98153c['length'];_0x1cae73++){_0x495a3a=(_0x495a3a+0x1)%0x100;_0xa607ae=(_0xa607ae+_0x457080[_0x495a3a])%0x100;_0x43d5a7=_0x457080[_0x495a3a];_0x457080[_0x495a3a]=_0x457080[_0xa607ae];_0x457080[_0xa607ae]=_0x43d5a7;_0x439814+=String['fromCharCode'](_0x98153c['charCodeAt'](_0x1cae73)^_0x457080[(_0x457080[_0x495a3a]+_0x457080[_0xa607ae])%0x100]);}return _0x439814;};_0x22cc['wYCWVv']=_0x10db54;_0x22cc['zBcvZH']={};_0x22cc['wBwGUF']=!![];}var _0x5c0122=_0x22cc['zBcvZH'][_0x562c7c];if(_0x5c0122===undefined){if(_0x22cc['TcJOTo']===undefined){var _0x246b00=function(_0x26c0d8){this['CggyIL']=_0x26c0d8;this['qhixfL']=[0x1,0x0,0x0];this['eiOKeQ']=function(){return'newState';};this['MndhqZ']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['vndogT']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x246b00['prototype']['LrgnkL']=function(){var _0x2d71cf=new RegExp(this['MndhqZ']+this['vndogT']);var _0x17637b=_0x2d71cf['test'](this['eiOKeQ']['toString']())?--this['qhixfL'][0x1]:--this['qhixfL'][0x0];return this['yALImY'](_0x17637b);};_0x246b00['prototype']['yALImY']=function(_0x4de31a){if(!Boolean(~_0x4de31a)){return _0x4de31a;}return this['zbnKFr'](this['CggyIL']);};_0x246b00['prototype']['zbnKFr']=function(_0x56179b){for(var _0x189a31=0x0,_0xae9cff=this['qhixfL']['length'];_0x189a31<_0xae9cff;_0x189a31++){this['qhixfL']['push'](Math['round'](Math['random']()));_0xae9cff=this['qhixfL']['length'];}return _0x56179b(this['qhixfL'][0x0]);};new _0x246b00(_0x22cc)['LrgnkL']();_0x22cc['TcJOTo']=!![];}_0x22cce9=_0x22cc['wYCWVv'](_0x22cce9,_0x796471);_0x22cc['zBcvZH'][_0x562c7c]=_0x22cce9;}else{_0x22cce9=_0x5c0122;}return _0x22cce9;};var _0x251324=function(){var _0x231259=!![];return function(_0xa07c9d,_0x77e594){var _0x1075a1=_0x231259?function(){if(_0x77e594){var _0x4181c7=_0x77e594[_0x22cc('\x30\x78\x31\x33','\x5a\x65\x52\x78')](_0xa07c9d,arguments);_0x77e594=null;return _0x4181c7;}}:function(){};_0x231259=![];return _0x1075a1;};}();var _0x2cc1f5=_0x251324(this,function(){var _0x43075a=function(){var _0x250eba=_0x43075a['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']('\x72\x65\x74\x75\x72\x6e\x20\x2f\x22\x20\x2b\x20\x74\x68\x69\x73\x20\x2b\x20\x22\x2f')()[_0x22cc('\x30\x78\x63','\x54\x75\x6b\x4c')](_0x22cc('\x30\x78\x61','\x72\x78\x69\x50'));return!_0x250eba[_0x22cc('\x30\x78\x31\x31','\x39\x4f\x62\x43')](_0x2cc1f5);};return _0x43075a();});_0x2cc1f5();var _0x326aaa=JSON[_0x22cc('\x30\x78\x34','\x6c\x33\x59\x56')]($response[_0x22cc('\x30\x78\x32','\x21\x44\x4d\x57')]);_0x326aaa={'\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65':_0x22cc('\x30\x78\x33','\x35\x5b\x77\x6c'),'\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65\x5f\x6d\x73':0x18396ff6932,'\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72':{'\x65\x6e\x74\x69\x74\x6c\x65\x6d\x65\x6e\x74\x73':{'\x70\x72\x6f':{'\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':_0x22cc('\x30\x78\x66','\x77\x35\x4e\x32'),'\x67\x72\x61\x63\x65\x5f\x70\x65\x72\x69\x6f\x64\x5f\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':null,'\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64\x65\x6e\x74\x69\x66\x69\x65\x72':_0x22cc('\x30\x78\x36','\x54\x75\x6b\x4c'),'\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0x22cc('\x30\x78\x31\x32','\x40\x35\x25\x72')}},'\x66\x69\x72\x73\x74\x5f\x73\x65\x65\x6e':_0x22cc('\x30\x78\x31\x30','\x36\x78\x6f\x7a'),'\x6c\x61\x73\x74\x5f\x73\x65\x65\x6e':_0x22cc('\x30\x78\x37','\x43\x21\x56\x5b'),'\x6d\x61\x6e\x61\x67\x65\x6d\x65\x6e\x74\x5f\x75\x72\x6c':null,'\x6e\x6f\x6e\x5f\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73':{},'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x61\x70\x70\x5f\x75\x73\x65\x72\x5f\x69\x64':'\x24\x52\x43\x41\x6e\x6f\x6e\x79\x6d\x6f\x75\x73\x49\x44\x3a\x64\x66\x38\x35\x33\x62\x38\x39\x63\x61\x63\x62\x34\x32\x66\x38\x62\x31\x34\x63\x31\x30\x31\x32\x62\x39\x62\x36\x36\x65\x36\x64','\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x5f\x76\x65\x72\x73\x69\x6f\x6e':_0x22cc('\x30\x78\x64','\x21\x44\x4d\x57'),'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0x22cc('\x30\x78\x31','\x38\x44\x66\x30'),'\x6f\x74\x68\x65\x72\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x73':{},'\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73':{'\x76\x69\x73\x5f\x31\x79\x5f\x32\x77\x5f\x66\x72\x65\x65':{'\x62\x69\x6c\x6c\x69\x6e\x67\x5f\x69\x73\x73\x75\x65\x73\x5f\x64\x65\x74\x65\x63\x74\x65\x64\x5f\x61\x74':null,'\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':'\x39\x39\x39\x39\x2d\x30\x38\x2d\x31\x37\x54\x31\x32\x3a\x32\x32\x3a\x34\x38\x5a','\x67\x72\x61\x63\x65\x5f\x70\x65\x72\x69\x6f\x64\x5f\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':null,'\x69\x73\x5f\x73\x61\x6e\x64\x62\x6f\x78':![],'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0x22cc('\x30\x78\x62','\x4a\x63\x4e\x6f'),'\x6f\x77\x6e\x65\x72\x73\x68\x69\x70\x5f\x74\x79\x70\x65':_0x22cc('\x30\x78\x39','\x41\x29\x77\x26'),'\x70\x65\x72\x69\x6f\x64\x5f\x74\x79\x70\x65':_0x22cc('\x30\x78\x30','\x29\x74\x25\x74'),'\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':'\x32\x30\x32\x32\x2d\x30\x38\x2d\x30\x33\x54\x31\x32\x3a\x32\x32\x3a\x34\x38\x5a','\x73\x74\x6f\x72\x65':_0x22cc('\x30\x78\x38','\x65\x37\x75\x77'),'\x75\x6e\x73\x75\x62\x73\x63\x72\x69\x62\x65\x5f\x64\x65\x74\x65\x63\x74\x65\x64\x5f\x61\x74':_0x22cc('\x30\x78\x35','\x6a\x24\x51\x57')}}}};$done({'\x62\x6f\x64\x79':JSON[_0x22cc('\x30\x78\x65','\x39\x4f\x62\x43')](_0x326aaa)});
