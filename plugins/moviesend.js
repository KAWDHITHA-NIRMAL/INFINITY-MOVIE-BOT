const _0x33027f=_0xd447;function _0x1ca8(){const _0x50e76d=['6700keZXpD','\x20)\x0a\x0a>\x20ɪɴꜰɪɴɪᴛʏ\x20ᴍᴏᴠɪᴇ\x20ʙᴏᴛ','moviesend','184VncMCs','/movie/sinhalasub/movie?url=','1683703MYqyXa','startsWith','sendMessage','3HxINHX','9qHPwGw','5679048Nrvtuy','result','/u/','*Can\x27t\x20download\x20your\x20movie.*','title','506FKyWwi','3896835aHyUFs','94771709545','\x20&\x20','movie\x20send\x20to\x20grp\x20jid','../lib/functions','https://sinhalasub.lk/','data','includes','split','../command','/api/file/','link','replace','390564GMtOIG','dl_links','/movie/sinhalasub/search?text=','\x20(\x20','24xOtOtC','849696TRauaM','.mp4','pixeldrain.com','../config','video/mp4','BLOCK_JID','error','6149870IxJYQo','SD\x20480p'];_0x1ca8=function(){return _0x50e76d;};return _0x1ca8();}function _0xd447(_0x5a83db,_0x5576f4){const _0x1ca8e0=_0x1ca8();return _0xd447=function(_0xd447af,_0x408e29){_0xd447af=_0xd447af-0x16d;let _0x11e44d=_0x1ca8e0[_0xd447af];return _0x11e44d;},_0xd447(_0x5a83db,_0x5576f4);}(function(_0x56fb2d,_0xe0e6b1){const _0x144a84=_0xd447,_0x421f60=_0x56fb2d();while(!![]){try{const _0x3938cd=-parseInt(_0x144a84(0x195))/0x1*(-parseInt(_0x144a84(0x184))/0x2)+-parseInt(_0x144a84(0x172))/0x3+-parseInt(_0x144a84(0x190))/0x4*(parseInt(_0x144a84(0x18d))/0x5)+parseInt(_0x144a84(0x197))/0x6+-parseInt(_0x144a84(0x192))/0x7*(-parseInt(_0x144a84(0x183))/0x8)+parseInt(_0x144a84(0x196))/0x9*(parseInt(_0x144a84(0x18b))/0xa)+-parseInt(_0x144a84(0x171))/0xb*(parseInt(_0x144a84(0x17f))/0xc);if(_0x3938cd===_0xe0e6b1)break;else _0x421f60['push'](_0x421f60['shift']());}catch(_0x31c556){_0x421f60['push'](_0x421f60['shift']());}}}(_0x1ca8,0xaade7));const {fetchJson}=require(_0x33027f(0x176)),config=require(_0x33027f(0x187)),{cmd,commands}=require(_0x33027f(0x17b)),apilink='https://www.dark-yasiya-api.site',id=config['MV_SEND_JID'];cmd({'pattern':_0x33027f(0x18f),'desc':_0x33027f(0x175),'category':'movie','filename':__filename},async(_0x5e3413,_0x2280c2,_0x3f6055,{from:_0x2120e6,quoted:_0x33542c,body:_0x48a06b,isCmd:_0x136538,command:_0x3224eb,args:_0x2a82da,q:_0x54e9e6,isGroup:_0x392a9f,sender:_0xa9a893,senderNumber:_0x485c80,botNumber2:_0x1966a8,botNumber:_0x551e78,pushname:_0x41d2e1,isMe:_0x26228a,isOwner:_0x35a853,groupMetadata:_0x289d04,groupName:_0x8d445b,participants:_0x84561f,groupAdmins:_0x39b6fb,isBotAdmins:_0x48169d,isAdmins:_0x5c492b,reply:_0x12d522})=>{const _0x2ff1f4=_0x33027f;try{const _0x424c4d=config[_0x2ff1f4(0x189)];if(_0x424c4d[_0x2ff1f4(0x179)](_0x2120e6))return;const _0x4edbfa=['94701814946',_0x2ff1f4(0x173),'94741545187'];if(!_0x4edbfa['includes'](_0x485c80))return _0x12d522('*_You\x20don\x27t\x20have\x20access\x20to\x20send\x20movies._*');if(!_0x54e9e6||!_0x54e9e6[_0x2ff1f4(0x193)](_0x2ff1f4(0x177)))return _0x12d522('*_Please\x20give\x20me\x20a\x20movie\x20name\x20or\x20sinhalasub.lk\x20url._*');const _0x15e3b8=_0x54e9e6[_0x2ff1f4(0x17a)](_0x2ff1f4(0x174)),_0x40608a=_0x15e3b8[0x0],_0x1573bd=_0x2ff1f4(0x18c),_0xfb70bc=_0x15e3b8[0x1];if(_0x40608a[_0x2ff1f4(0x193)](_0x2ff1f4(0x177))){let _0x3a1ab2=await fetchJson(apilink+'/movie/sinhalasub/movie?url='+_0x40608a);}else{let _0x12ca4c=await fetchJson(apilink+_0x2ff1f4(0x181)+_0x40608a),_0x50955c=await fetchJson(apilink+_0x2ff1f4(0x191)+_0x12ca4c['result']['data'][0x0]['link']);}const _0x11b803=mv[_0x2ff1f4(0x16d)][_0x2ff1f4(0x178)][_0x2ff1f4(0x180)]['filter'](_0x4e7a76=>_0x4e7a76['quality']===_0x1573bd&&_0x4e7a76['link']['includes'](_0x2ff1f4(0x186)));if(_0x11b803['length']===0x0)return _0x12d522(_0x2ff1f4(0x16f));const _0xa4a12f=_0x11b803[0x0][_0x2ff1f4(0x17d)][_0x2ff1f4(0x17e)](_0x2ff1f4(0x16e),_0x2ff1f4(0x17c)),_0x5e9897=mv['result']['data'][_0x2ff1f4(0x170)]+_0x2ff1f4(0x182)+_0x1573bd+_0x2ff1f4(0x18e);!_0xfb70bc?await _0x5e3413['sendMessage'](id,{'document':{'url':_0xa4a12f},'mimetype':_0x2ff1f4(0x188),'fileName':mv[_0x2ff1f4(0x16d)][_0x2ff1f4(0x178)]['title']+_0x2ff1f4(0x185),'caption':_0x5e9897}):await _0x5e3413[_0x2ff1f4(0x194)](_0xfb70bc,{'document':{'url':_0xa4a12f},'mimetype':_0x2ff1f4(0x188),'fileName':mv[_0x2ff1f4(0x16d)][_0x2ff1f4(0x178)]['title']+_0x2ff1f4(0x185),'caption':_0x5e9897});}catch(_0x1067c7){console[_0x2ff1f4(0x18a)](_0x1067c7),_0x12d522(''+_0x1067c7);}});
