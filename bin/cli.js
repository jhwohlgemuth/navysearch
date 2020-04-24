"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));require("dotenv").config();var meow=require("meow"),getStdin=require("get-stdin"),_require=require("figures"),cross=_require.cross,_require2=require("chalk"),bold=_require2.bold,cyan=_require2.cyan,_require3=require("tomo-cli"),format=_require3.format,_require4=require("./utils/common.js"),dict=_require4.dict,getCurrentYear=_require4.getCurrentYear,_require5=require("./utils/data.js"),_populate=_require5.populate,_update=_require5.update,getAction=function(a,b,c){var d=b.id,e=b.key,f=b.type,g=b.verbose,h=b.year,i=(0,_toConsumableArray2["default"])(new Set(h.split(","))).sort(),j=dict({populate:function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(){return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_populate(f,i,{id:d,key:e});case 2:case"end":return a.stop();}},a)}));return function populate(){return a.apply(this,arguments)}}(),update:function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(){var b;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_update(f,{id:d,key:e,verbose:g});case 2:b=a.sent,0<b.objectIDs.length&&process.stdout.write(format(b));case 4:case"end":return a.stop();}},a)}));return function update(){return a.apply(this,arguments)}}(),info:function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(){return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:/* eslint-disable no-console */console.log("\n  ".concat(bold("ID"),"  = "),d),console.log("  ".concat(bold("Key")," = "),e);case 2:case"end":return a.stop();}},a)}));return function info(){return a.apply(this,arguments)}}()/* eslint-enable no-console */});return j.has(a)?j.get(a):function noCommand(b){if("string"==typeof a){var d="\n".concat(bold.red(cross)," \"").concat(a,"\" is not a known command...Please read the help below.\n");process.stderr.write(d),c()}else process.stdout.write("STDIN: ".concat(b))}},help="\n    ".concat(bold.bgBlue.white(" Navy Search "),"\n      \n        ").concat(cyan("\"Search for those that ".concat(bold("serve"),"\"")),"\n\n    ").concat(bold.dim("Usage"),"\n\n        ./usn.exe [commands] [options]\n\n\n    ").concat(bold.dim("Commands"),"\n\n        populate, update, version\n\n"),options={help:help,flags:{help:{type:"boolean",default:!1,alias:"h"},version:{type:"boolean",default:!1,alias:"v"},verbose:{type:"boolean",default:!1,alias:"V"},type:{type:"string",default:"NAVADMIN",alias:"t"},year:{type:"string",default:getCurrentYear()+"",alias:"y"},id:{type:"string",default:process.env.ALGOLIA_APP_ID||bold.red("not set")},key:{type:"string",default:process.env.ALGOLIA_ADMIN_API_KEY||bold.red("not set")}}},_meow=meow(options),input=_meow.input,flags=_meow.flags,showHelp=_meow.showHelp;(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(){var b,c,d,e;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,getStdin();case 2:return b=a.sent,c=(0,_slicedToArray2["default"])(input,1),d=c[0],e=getAction(d,flags,showHelp),a.next=7,e(b);case 7:case"end":return a.stop();}},a)}))();