"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SleepDataAsync = exports.SleepData = void 0;
var SleepData = ["p_timestamp,p_datetime,p_level,p_seconds", "1640542920000,2021-12-26T18:22:00.000Z,wake,360", "1640543280000,2021-12-26T18:28:00.000Z,deep,3480", "1640546760000,2021-12-26T19:26:00.000Z,light,630", "1640547390000,2021-12-26T19:36:30.000Z,deep,540", "1640547930000,2021-12-26T19:45:30.000Z,light,2580", "1640550510000,2021-12-26T20:28:30.000Z,wake,30", "1640550540000,2021-12-26T20:29:00.000Z,light,1410", "1640551950000,2021-12-26T20:52:30.000Z,deep,1200", "1640553150000,2021-12-26T21:12:30.000Z,light,150", "1640553300000,2021-12-26T21:15:00.000Z,rem,510", "1640553810000,2021-12-26T21:23:30.000Z,light,900", "1640554710000,2021-12-26T21:38:30.000Z,wake,30", "1640554740000,2021-12-26T21:39:00.000Z,light,1440", "1640556180000,2021-12-26T22:03:00.000Z,rem,300", "1640556480000,2021-12-26T22:08:00.000Z,light,870", "1640557350000,2021-12-26T22:22:30.000Z,rem,720", "1640558070000,2021-12-26T22:34:30.000Z,wake,240", "1640558310000,2021-12-26T22:38:30.000Z,light,1290", "1640559600000,2021-12-26T23:00:00.000Z,deep,300", "1640559900000,2021-12-26T23:05:00.000Z,rem,2460", "1640562360000,2021-12-26T23:46:00.000Z,light,180", "1640562540000,2021-12-26T23:49:00.000Z,wake,90", "1640562630000,2021-12-26T23:50:30.000Z,light,3060", "1640565690000,2021-12-27T00:41:30.000Z,rem,900", "1640566590000,2021-12-27T00:56:30.000Z,light,690", "1640567280000,2021-12-27T01:08:00.000Z,wake,60", "1640567340000,2021-12-27T01:09:00.000Z,light,210", "1640567550000,2021-12-27T01:12:30.000Z,rem,270", "1640567820000,2021-12-27T01:17:00.000Z,light,30", "1640567850000,2021-12-27T01:17:30.000Z,wake,210", "1640568060000,2021-12-27T01:21:00.000Z,light,120", "1640568180000,2021-12-27T01:23:00.000Z,wake,120", "1640568300000,2021-12-27T01:25:00.000Z,light,720", "1640569020000,2021-12-27T01:37:00.000Z,rem,660", "1640569680000,2021-12-27T01:48:00.000Z,wake,30", "1640569710000,2021-12-27T01:48:30.000Z,rem,630", "1640570340000,2021-12-27T01:59:00.000Z,light,210", "1640570550000,2021-12-27T02:02:30.000Z,wake,90", "1640570640000,2021-12-27T02:04:00.000Z,light,30", "1640570670000,2021-12-27T02:04:30.000Z,rem,270", "1640570940000,2021-12-27T02:09:00.000Z,light,60", "1640571000000,2021-12-27T02:10:00.000Z,wake,0"];
exports.SleepData = SleepData;
var SleepDataAsync = ["p_timestamp,p_datetime,p_level,p_seconds,user,day,period", "1640803620000,2021-12-29T18:47:00.000Z,wake,270,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640803890000,2021-12-29T18:51:30.000Z,light,30,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640803920000,2021-12-29T18:52:00.000Z,deep,3420,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640807340000,2021-12-29T19:49:00.000Z,light,480,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640807820000,2021-12-29T19:57:00.000Z,deep,360,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640808180000,2021-12-29T20:03:00.000Z,light,150,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640808330000,2021-12-29T20:05:30.000Z,wake,30,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640808360000,2021-12-29T20:06:00.000Z,light,2490,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640810850000,2021-12-29T20:47:30.000Z,deep,840,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640811690000,2021-12-29T21:01:30.000Z,light,1440,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640813130000,2021-12-29T21:25:30.000Z,wake,30,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640813160000,2021-12-29T21:26:00.000Z,light,1080,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640814240000,2021-12-29T21:44:00.000Z,rem,300,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640814540000,2021-12-29T21:49:00.000Z,light,60,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640814600000,2021-12-29T21:50:00.000Z,wake,30,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640814630000,2021-12-29T21:50:30.000Z,light,3000,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640817630000,2021-12-29T22:40:30.000Z,rem,1200,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640818830000,2021-12-29T23:00:30.000Z,light,120,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640818950000,2021-12-29T23:02:30.000Z,wake,60,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640819010000,2021-12-29T23:03:30.000Z,light,1140,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640820150000,2021-12-29T23:22:30.000Z,rem,300,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640820450000,2021-12-29T23:27:30.000Z,light,600,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640821050000,2021-12-29T23:37:30.000Z,wake,150,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640821200000,2021-12-29T23:40:00.000Z,light,3000,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640824200000,2021-12-30T00:30:00.000Z,wake,1560,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640825760000,2021-12-30T00:56:00.000Z,light,180,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640825940000,2021-12-30T00:59:00.000Z,wake,270,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640826210000,2021-12-30T01:03:30.000Z,light,150,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640826360000,2021-12-30T01:06:00.000Z,wake,270,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640826630000,2021-12-30T01:10:30.000Z,light,120,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640826750000,2021-12-30T01:12:30.000Z,wake,90,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640826840000,2021-12-30T01:14:00.000Z,light,120,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640826960000,2021-12-30T01:16:00.000Z,wake,360,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640827320000,2021-12-30T01:22:00.000Z,light,330,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640827650000,2021-12-30T01:27:30.000Z,wake,90,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640827740000,2021-12-30T01:29:00.000Z,light,120,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640827860000,2021-12-30T01:31:00.000Z,wake,960,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640828820000,2021-12-30T01:47:00.000Z,light,420,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640829240000,2021-12-30T01:54:00.000Z,wake,870,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640830110000,2021-12-30T02:08:30.000Z,light,870,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640830980000,2021-12-30T02:23:00.000Z,rem,360,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640831340000,2021-12-30T02:29:00.000Z,light,510,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640831850000,2021-12-30T02:37:30.000Z,wake,60,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640831910000,2021-12-30T02:38:30.000Z,light,780,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640832690000,2021-12-30T02:51:30.000Z,rem,930,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640833620000,2021-12-30T03:07:00.000Z,wake,30,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640833650000,2021-12-30T03:07:30.000Z,rem,750,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640834400000,2021-12-30T03:20:00.000Z,light,90,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640834490000,2021-12-30T03:21:30.000Z,wake,60,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640834550000,2021-12-30T03:22:30.000Z,light,3240,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640837790000,2021-12-30T04:16:30.000Z,wake,0,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,0", "1640803620000,2021-12-29T18:47:00.000Z,wake,270,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640803890000,2021-12-29T18:51:30.000Z,light,30,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640803920000,2021-12-29T18:52:00.000Z,deep,3420,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640807340000,2021-12-29T19:49:00.000Z,light,480,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640807820000,2021-12-29T19:57:00.000Z,deep,360,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640808180000,2021-12-29T20:03:00.000Z,light,150,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640808330000,2021-12-29T20:05:30.000Z,wake,30,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640808360000,2021-12-29T20:06:00.000Z,light,2490,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640810850000,2021-12-29T20:47:30.000Z,deep,840,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640811690000,2021-12-29T21:01:30.000Z,light,1440,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640813130000,2021-12-29T21:25:30.000Z,wake,30,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640813160000,2021-12-29T21:26:00.000Z,light,1080,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640814240000,2021-12-29T21:44:00.000Z,rem,300,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640814540000,2021-12-29T21:49:00.000Z,light,60,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640814600000,2021-12-29T21:50:00.000Z,wake,30,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640814630000,2021-12-29T21:50:30.000Z,light,3000,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640817630000,2021-12-29T22:40:30.000Z,rem,1200,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640818830000,2021-12-29T23:00:30.000Z,light,120,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640818950000,2021-12-29T23:02:30.000Z,wake,60,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640819010000,2021-12-29T23:03:30.000Z,light,1140,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640820150000,2021-12-29T23:22:30.000Z,rem,300,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640820450000,2021-12-29T23:27:30.000Z,light,600,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640821050000,2021-12-29T23:37:30.000Z,wake,150,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640821200000,2021-12-29T23:40:00.000Z,light,3000,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640824200000,2021-12-30T00:30:00.000Z,wake,1560,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640825760000,2021-12-30T00:56:00.000Z,light,180,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640825940000,2021-12-30T00:59:00.000Z,wake,270,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640826210000,2021-12-30T01:03:30.000Z,light,150,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640826360000,2021-12-30T01:06:00.000Z,wake,270,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640826630000,2021-12-30T01:10:30.000Z,light,120,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640826750000,2021-12-30T01:12:30.000Z,wake,90,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640826840000,2021-12-30T01:14:00.000Z,light,120,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640826960000,2021-12-30T01:16:00.000Z,wake,360,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640827320000,2021-12-30T01:22:00.000Z,light,330,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640827650000,2021-12-30T01:27:30.000Z,wake,90,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640827740000,2021-12-30T01:29:00.000Z,light,120,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640827860000,2021-12-30T01:31:00.000Z,wake,960,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640828820000,2021-12-30T01:47:00.000Z,light,420,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640829240000,2021-12-30T01:54:00.000Z,wake,870,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640830110000,2021-12-30T02:08:30.000Z,light,870,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640830980000,2021-12-30T02:23:00.000Z,rem,360,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640831340000,2021-12-30T02:29:00.000Z,light,510,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640831850000,2021-12-30T02:37:30.000Z,wake,60,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640831910000,2021-12-30T02:38:30.000Z,light,780,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640832690000,2021-12-30T02:51:30.000Z,rem,930,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640833620000,2021-12-30T03:07:00.000Z,wake,30,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640833650000,2021-12-30T03:07:30.000Z,rem,750,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640834400000,2021-12-30T03:20:00.000Z,light,90,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640834490000,2021-12-30T03:21:30.000Z,wake,60,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640834550000,2021-12-30T03:22:30.000Z,light,3240,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1", "1640837790000,2021-12-30T04:16:30.000Z,wake,0,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-30,1"];
exports.SleepDataAsync = SleepDataAsync;