/******************************

脚本功能：Darkroom：照片和视频编辑器+解锁
下载地址：https://is.gd/0wh86w
软件版本：6.0.8
脚本作者：彭于晏💞
更新时间：2022-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/2910623/Quantumult-X/main/pyy/ycdz/darkroom.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var _0xc108=['\x77\x6f\x70\x78\x77\x72\x50\x44\x71\x63\x4f\x6e\x41\x79\x7a\x44\x74\x47\x37\x43\x76\x53\x6b\x6e\x77\x37\x66\x44\x6e\x63\x4f\x7a\x77\x36\x78\x70\x77\x36\x66\x44\x75\x56\x49\x3d','\x4a\x30\x41\x53\x43\x7a\x48\x43\x75\x6e\x6e\x44\x70\x69\x76\x44\x6a\x6a\x4e\x45\x77\x36\x44\x44\x6a\x42\x77\x36\x42\x6a\x44\x43\x68\x63\x4b\x6e','\x51\x7a\x63\x68\x61\x56\x70\x43\x43\x56\x50\x43\x75\x63\x4f\x63\x77\x35\x2f\x44\x72\x38\x4f\x35\x77\x35\x6e\x44\x73\x38\x4f\x7a\x42\x63\x4b\x45\x77\x71\x67\x68','\x65\x78\x74\x4e\x77\x36\x6a\x44\x74\x38\x4f\x64\x77\x72\x78\x6e\x61\x79\x4a\x54\x58\x73\x4f\x69\x77\x71\x74\x4d\x77\x70\x67\x43\x4a\x38\x4b\x6e\x62\x44\x62\x44\x6d\x6a\x6b\x71','\x64\x38\x4b\x49\x77\x71\x58\x43\x68\x52\x33\x44\x70\x46\x45\x6c\x77\x35\x4d\x65\x77\x37\x39\x75\x46\x63\x4f\x58\x77\x6f\x39\x37\x47\x73\x4f\x62\x77\x71\x7a\x43\x72\x77\x3d\x3d','\x77\x36\x78\x33\x56\x73\x4b\x51\x4a\x38\x4b\x6d\x77\x35\x51\x3d','\x61\x55\x37\x44\x67\x43\x68\x64\x48\x51\x3d\x3d','\x5a\x55\x37\x44\x6c\x6a\x77\x3d','\x77\x72\x4a\x4c\x77\x35\x4a\x74\x77\x70\x76\x43\x6c\x63\x4b\x6d\x65\x4d\x4b\x53\x77\x37\x7a\x44\x73\x78\x50\x43\x6f\x68\x2f\x43\x69\x47\x64\x7a\x54\x38\x4f\x78\x4a\x51\x3d\x3d','\x5a\x6c\x48\x44\x67\x69\x6c\x46','\x77\x36\x34\x67\x47\x58\x37\x44\x6b\x43\x34\x52\x59\x38\x4b\x50\x63\x69\x6e\x44\x73\x77\x4c\x43\x6e\x41\x4e\x30\x41\x73\x4f\x4d\x41\x78\x77\x3d','\x65\x57\x70\x34\x55\x73\x4b\x55','\x4d\x63\x4f\x64\x77\x36\x54\x44\x67\x77\x3d\x3d','\x4d\x53\x7a\x43\x70\x38\x4f\x76\x61\x7a\x48\x43\x75\x63\x4f\x36\x77\x71\x51\x3d','\x77\x72\x48\x43\x75\x52\x50\x43\x74\x51\x62\x44\x72\x38\x4b\x34\x47\x56\x73\x53\x77\x35\x6c\x78\x77\x72\x6f\x64\x62\x73\x4b\x6f\x65\x4d\x4b\x73\x77\x35\x62\x43\x76\x51\x3d\x3d','\x77\x37\x6e\x44\x6a\x4d\x4b\x38\x46\x4d\x4b\x57\x77\x35\x73\x49\x4c\x43\x4a\x39\x59\x4d\x4f\x53\x4d\x63\x4f\x44\x42\x4d\x4f\x49\x51\x69\x42\x66\x52\x77\x3d\x3d','\x77\x35\x64\x77\x43\x38\x4f\x55\x77\x71\x73\x3d','\x77\x72\x48\x43\x75\x52\x50\x43\x74\x51\x62\x44\x72\x38\x4b\x34\x47\x56\x73\x53\x77\x35\x6c\x78\x77\x72\x6f\x64\x62\x73\x4b\x6c\x65\x4d\x4b\x75\x77\x35\x48\x43\x76\x51\x3d\x3d','\x43\x63\x4f\x43\x4c\x4d\x4f\x56\x77\x71\x6c\x70\x62\x38\x4f\x56\x46\x55\x76\x44\x71\x63\x4f\x71\x50\x67\x48\x43\x74\x53\x41\x75\x62\x6b\x72\x44\x73\x41\x3d\x3d'];(function(_0x137124,_0xc108d4){var _0x32f9ab=function(_0x1db881){while(--_0x1db881){_0x137124['push'](_0x137124['shift']());}};var _0x2d21e7=function(){var _0x5847d7={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x56a275,_0x502cc8,_0x42af72,_0x449a4d){_0x449a4d=_0x449a4d||{};var _0x5ca207=_0x502cc8+'='+_0x42af72;var _0x4b7df4=0x0;for(var _0x4d37cf=0x0,_0x284a74=_0x56a275['length'];_0x4d37cf<_0x284a74;_0x4d37cf++){var _0x30bea9=_0x56a275[_0x4d37cf];_0x5ca207+=';\x20'+_0x30bea9;var _0x3ef4f6=_0x56a275[_0x30bea9];_0x56a275['push'](_0x3ef4f6);_0x284a74=_0x56a275['length'];if(_0x3ef4f6!==!![]){_0x5ca207+='='+_0x3ef4f6;}}_0x449a4d['cookie']=_0x5ca207;},'removeCookie':function(){return'dev';},'getCookie':function(_0x56ef39,_0x298e9e){_0x56ef39=_0x56ef39||function(_0x52e326){return _0x52e326;};var _0x485492=_0x56ef39(new RegExp('(?:^|;\x20)'+_0x298e9e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x2392b8=function(_0x40a4a7,_0x5a56ed){_0x40a4a7(++_0x5a56ed);};_0x2392b8(_0x32f9ab,_0xc108d4);return _0x485492?decodeURIComponent(_0x485492[0x1]):undefined;}};var _0x192bf3=function(){var _0x512d10=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x512d10['test'](_0x5847d7['removeCookie']['toString']());};_0x5847d7['updateCookie']=_0x192bf3;var _0x56a90c='';var _0x5a9469=_0x5847d7['updateCookie']();if(!_0x5a9469){_0x5847d7['setCookie'](['*'],'counter',0x1);}else if(_0x5a9469){_0x56a90c=_0x5847d7['getCookie'](null,'counter');}else{_0x5847d7['removeCookie']();}};_0x2d21e7();}(_0xc108,0xb5));var _0x32f9=function(_0x137124,_0xc108d4){_0x137124=_0x137124-0x0;var _0x32f9ab=_0xc108[_0x137124];if(_0x32f9['aMKfVW']===undefined){(function(){var _0x5847d7;try{var _0x56a90c=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x5847d7=_0x56a90c();}catch(_0x5a9469){_0x5847d7=window;}var _0x192bf3='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5847d7['atob']||(_0x5847d7['atob']=function(_0x56a275){var _0x502cc8=String(_0x56a275)['replace'](/=+$/,'');var _0x42af72='';for(var _0x449a4d=0x0,_0x5ca207,_0x4b7df4,_0x4d37cf=0x0;_0x4b7df4=_0x502cc8['charAt'](_0x4d37cf++);~_0x4b7df4&&(_0x5ca207=_0x449a4d%0x4?_0x5ca207*0x40+_0x4b7df4:_0x4b7df4,_0x449a4d++%0x4)?_0x42af72+=String['fromCharCode'](0xff&_0x5ca207>>(-0x2*_0x449a4d&0x6)):0x0){_0x4b7df4=_0x192bf3['indexOf'](_0x4b7df4);}return _0x42af72;});}());var _0x1db881=function(_0x284a74,_0x30bea9){var _0x3ef4f6=[],_0x56ef39=0x0,_0x298e9e,_0x485492='',_0x2392b8='';_0x284a74=atob(_0x284a74);for(var _0x40a4a7=0x0,_0x5a56ed=_0x284a74['length'];_0x40a4a7<_0x5a56ed;_0x40a4a7++){_0x2392b8+='%'+('00'+_0x284a74['charCodeAt'](_0x40a4a7)['toString'](0x10))['slice'](-0x2);}_0x284a74=decodeURIComponent(_0x2392b8);var _0x52e326;for(_0x52e326=0x0;_0x52e326<0x100;_0x52e326++){_0x3ef4f6[_0x52e326]=_0x52e326;}for(_0x52e326=0x0;_0x52e326<0x100;_0x52e326++){_0x56ef39=(_0x56ef39+_0x3ef4f6[_0x52e326]+_0x30bea9['charCodeAt'](_0x52e326%_0x30bea9['length']))%0x100;_0x298e9e=_0x3ef4f6[_0x52e326];_0x3ef4f6[_0x52e326]=_0x3ef4f6[_0x56ef39];_0x3ef4f6[_0x56ef39]=_0x298e9e;}_0x52e326=0x0;_0x56ef39=0x0;for(var _0x512d10=0x0;_0x512d10<_0x284a74['length'];_0x512d10++){_0x52e326=(_0x52e326+0x1)%0x100;_0x56ef39=(_0x56ef39+_0x3ef4f6[_0x52e326])%0x100;_0x298e9e=_0x3ef4f6[_0x52e326];_0x3ef4f6[_0x52e326]=_0x3ef4f6[_0x56ef39];_0x3ef4f6[_0x56ef39]=_0x298e9e;_0x485492+=String['fromCharCode'](_0x284a74['charCodeAt'](_0x512d10)^_0x3ef4f6[(_0x3ef4f6[_0x52e326]+_0x3ef4f6[_0x56ef39])%0x100]);}return _0x485492;};_0x32f9['yLjXXI']=_0x1db881;_0x32f9['TiwmlQ']={};_0x32f9['aMKfVW']=!![];}var _0x2d21e7=_0x32f9['TiwmlQ'][_0x137124];if(_0x2d21e7===undefined){if(_0x32f9['SUFUNR']===undefined){var _0x344b89=function(_0x568a92){this['SsDrxc']=_0x568a92;this['iRySZI']=[0x1,0x0,0x0];this['qrNVpF']=function(){return'newState';};this['gdlekc']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['uUqBXQ']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x344b89['prototype']['lpFiGe']=function(){var _0xb1cd0a=new RegExp(this['gdlekc']+this['uUqBXQ']);var _0xb94f8=_0xb1cd0a['test'](this['qrNVpF']['toString']())?--this['iRySZI'][0x1]:--this['iRySZI'][0x0];return this['okdHys'](_0xb94f8);};_0x344b89['prototype']['okdHys']=function(_0xe56b00){if(!Boolean(~_0xe56b00)){return _0xe56b00;}return this['opCiUb'](this['SsDrxc']);};_0x344b89['prototype']['opCiUb']=function(_0x4dae4d){for(var _0x24e6d6=0x0,_0x17f6b6=this['iRySZI']['length'];_0x24e6d6<_0x17f6b6;_0x24e6d6++){this['iRySZI']['push'](Math['round'](Math['random']()));_0x17f6b6=this['iRySZI']['length'];}return _0x4dae4d(this['iRySZI'][0x0]);};new _0x344b89(_0x32f9)['lpFiGe']();_0x32f9['SUFUNR']=!![];}_0x32f9ab=_0x32f9['yLjXXI'](_0x32f9ab,_0xc108d4);_0x32f9['TiwmlQ'][_0x137124]=_0x32f9ab;}else{_0x32f9ab=_0x2d21e7;}return _0x32f9ab;};var _0x1b13a1=function(){var _0x5b5786=!![];return function(_0x2cf9de,_0x2bedff){var _0x346330=_0x5b5786?function(){if(_0x2bedff){var _0x3799f9=_0x2bedff[_0x32f9('\x30\x78\x31\x32','\x5a\x74\x40\x21')](_0x2cf9de,arguments);_0x2bedff=null;return _0x3799f9;}}:function(){};_0x5b5786=![];return _0x346330;};}();var _0x56c8fa=_0x1b13a1(this,function(){var _0x5aab33=function(){var _0x512acd=_0x5aab33['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']('\x72\x65\x74\x75\x72\x6e\x20\x2f\x22\x20\x2b\x20\x74\x68\x69\x73\x20\x2b\x20\x22\x2f')()[_0x32f9('\x30\x78\x65','\x65\x66\x78\x67')](_0x32f9('\x30\x78\x63','\x7a\x48\x47\x4a'));return!_0x512acd[_0x32f9('\x30\x78\x32','\x79\x36\x37\x7a')](_0x56c8fa);};return _0x5aab33();});_0x56c8fa();var _0x210b27=JSON[_0x32f9('\x30\x78\x31','\x67\x74\x78\x4e')]($response[_0x32f9('\x30\x78\x31\x30','\x5a\x74\x40\x21')]);_0x210b27={'\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65\x5f\x6d\x73':0x183a0d2ce98,'\x72\x65\x71\x75\x65\x73\x74\x5f\x64\x61\x74\x65':_0x32f9('\x30\x78\x38','\x47\x59\x24\x38'),'\x73\x75\x62\x73\x63\x72\x69\x62\x65\x72':{'\x6e\x6f\x6e\x5f\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73':{},'\x66\x69\x72\x73\x74\x5f\x73\x65\x65\x6e':_0x32f9('\x30\x78\x34','\x79\x64\x5e\x57'),'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x5f\x76\x65\x72\x73\x69\x6f\x6e':_0x32f9('\x30\x78\x36','\x53\x4b\x74\x59'),'\x6f\x74\x68\x65\x72\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x73':{},'\x6d\x61\x6e\x61\x67\x65\x6d\x65\x6e\x74\x5f\x75\x72\x6c':null,'\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73':{'\x63\x6f\x2e\x62\x65\x72\x67\x65\x6e\x2e\x44\x61\x72\x6b\x72\x6f\x6f\x6d\x2e\x70\x72\x6f\x64\x75\x63\x74\x2e\x79\x65\x61\x72\x2e\x65\x76\x65\x72\x79\x74\x68\x69\x6e\x67':{'\x69\x73\x5f\x73\x61\x6e\x64\x62\x6f\x78':![],'\x6f\x77\x6e\x65\x72\x73\x68\x69\x70\x5f\x74\x79\x70\x65':'\x50\x55\x52\x43\x48\x41\x53\x45\x44','\x62\x69\x6c\x6c\x69\x6e\x67\x5f\x69\x73\x73\x75\x65\x73\x5f\x64\x65\x74\x65\x63\x74\x65\x64\x5f\x61\x74':null,'\x70\x65\x72\x69\x6f\x64\x5f\x74\x79\x70\x65':_0x32f9('\x30\x78\x66','\x5a\x74\x40\x21'),'\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':_0x32f9('\x30\x78\x39','\x38\x48\x42\x21'),'\x67\x72\x61\x63\x65\x5f\x70\x65\x72\x69\x6f\x64\x5f\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':null,'\x75\x6e\x73\x75\x62\x73\x63\x72\x69\x62\x65\x5f\x64\x65\x74\x65\x63\x74\x65\x64\x5f\x61\x74':null,'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0x32f9('\x30\x78\x64','\x79\x36\x37\x7a'),'\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0x32f9('\x30\x78\x35','\x36\x46\x44\x26'),'\x73\x74\x6f\x72\x65':'\x61\x70\x70\x5f\x73\x74\x6f\x72\x65'}},'\x65\x6e\x74\x69\x74\x6c\x65\x6d\x65\x6e\x74\x73':{'\x63\x6f\x2e\x62\x65\x72\x67\x65\x6e\x2e\x44\x61\x72\x6b\x72\x6f\x6f\x6d\x2e\x65\x6e\x74\x69\x74\x6c\x65\x6d\x65\x6e\x74\x2e\x61\x6c\x6c\x54\x6f\x6f\x6c\x73\x41\x6e\x64\x46\x69\x6c\x74\x65\x72\x73':{'\x67\x72\x61\x63\x65\x5f\x70\x65\x72\x69\x6f\x64\x5f\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':null,'\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0x32f9('\x30\x78\x61','\x5a\x25\x6b\x26'),'\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64\x65\x6e\x74\x69\x66\x69\x65\x72':'\x63\x6f\x2e\x62\x65\x72\x67\x65\x6e\x2e\x44\x61\x72\x6b\x72\x6f\x6f\x6d\x2e\x70\x72\x6f\x64\x75\x63\x74\x2e\x79\x65\x61\x72\x2e\x65\x76\x65\x72\x79\x74\x68\x69\x6e\x67','\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':_0x32f9('\x30\x78\x62','\x38\x29\x4a\x21')},'\x63\x6f\x2e\x62\x65\x72\x67\x65\x6e\x2e\x44\x61\x72\x6b\x72\x6f\x6f\x6d\x2e\x65\x6e\x74\x69\x74\x6c\x65\x6d\x65\x6e\x74\x2e\x73\x65\x6c\x65\x63\x74\x69\x76\x65\x41\x64\x6a\x75\x73\x74\x6d\x65\x6e\x74\x73':{'\x67\x72\x61\x63\x65\x5f\x70\x65\x72\x69\x6f\x64\x5f\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':null,'\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0x32f9('\x30\x78\x30','\x64\x32\x61\x71'),'\x70\x72\x6f\x64\x75\x63\x74\x5f\x69\x64\x65\x6e\x74\x69\x66\x69\x65\x72':'\x63\x6f\x2e\x62\x65\x72\x67\x65\x6e\x2e\x44\x61\x72\x6b\x72\x6f\x6f\x6d\x2e\x70\x72\x6f\x64\x75\x63\x74\x2e\x79\x65\x61\x72\x2e\x65\x76\x65\x72\x79\x74\x68\x69\x6e\x67','\x65\x78\x70\x69\x72\x65\x73\x5f\x64\x61\x74\x65':'\x32\x30\x32\x39\x2d\x30\x37\x2d\x31\x35\x54\x30\x35\x3a\x31\x34\x3a\x31\x36\x5a'}},'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x70\x75\x72\x63\x68\x61\x73\x65\x5f\x64\x61\x74\x65':_0x32f9('\x30\x78\x37','\x79\x64\x5e\x57'),'\x6f\x72\x69\x67\x69\x6e\x61\x6c\x5f\x61\x70\x70\x5f\x75\x73\x65\x72\x5f\x69\x64':'\x24\x52\x43\x41\x6e\x6f\x6e\x79\x6d\x6f\x75\x73\x49\x44\x3a\x66\x38\x61\x38\x62\x61\x61\x61\x30\x33\x31\x33\x34\x38\x34\x63\x39\x31\x35\x30\x63\x64\x62\x34\x35\x36\x31\x61\x33\x39\x38\x31','\x6c\x61\x73\x74\x5f\x73\x65\x65\x6e':_0x32f9('\x30\x78\x31\x31','\x6f\x4b\x39\x43')}};$done({'\x62\x6f\x64\x79':JSON[_0x32f9('\x30\x78\x33','\x66\x63\x26\x28')](_0x210b27)});
