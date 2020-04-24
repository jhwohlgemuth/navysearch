"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(Object(source),!0).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}var _require=require("util"),promisify=_require.promisify,log=require("npmlog"),chalk=require("chalk"),ora=require("ora"),Xray=require("x-ray"),algoliasearch=require("algoliasearch"),axios=require("axios")["default"],_require2=require("ramda"),difference=_require2.difference,_require3=require("./common.js"),MAX_MESSAGE_TEXT_LENGTH=_require3.MAX_MESSAGE_TEXT_LENGTH,createMessageId=_require3.createMessageId,createNpcPageUrl=_require3.createNpcPageUrl,createYearsString=_require3.createYearsString,getCurrentYear=_require3.getCurrentYear,parseMessageId=_require3.parseMessageId,parseMessageUri=_require3.parseMessageUri,partitionByKeyLength=_require3.partitionByKeyLength,bold=chalk.bold,cyan=chalk.cyan,green=chalk.green,scrapeMessageItems=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(type,year){var x,url,_yield$axios$get,data,parsedHtml;return _regenerator["default"].wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:return x=new Xray,url=createNpcPageUrl({type:type,year:year}),_context.next=4,axios.get(url);case 4:return _yield$axios$get=_context.sent,data=_yield$axios$get.data,_context.next=8,promisify(x(data,"a",[{href:"@href"}]));case 8:return parsedHtml=_context.sent,_context.abrupt("return",parsedHtml.map(function(_ref2){var href=_ref2.href;return href}).filter(function(str){return /[.]txt$/.test(str)}).map(parseMessageUri).filter(function(_ref3){var code=_ref3.code,num=_ref3.num;return[code,num].every(function(_ref4){var length=_ref4.length;return 0<length})}));case 10:case"end":return _context.stop();}},_callee)}));return function(){return _ref.apply(this,arguments)}}(),getItem=function(_ref5){var code=_ref5.code,num=_ref5.num,type=_ref5.type,year=_ref5.year,url=_ref5.url,attributes={code:code,num:num,type:type,url:url,year:year},id=createMessageId(attributes);return axios.get(url).then(function(_ref6){var text=_ref6.data;return _objectSpread({},attributes,{id:id,text:text,objectID:id})})["catch"](function(){return _objectSpread({},attributes,{id:id,objectID:id})})},getItems=/*#__PURE__*/function(){var _ref7=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(type,years){var startMessage,doneMessage,get,items,continueOperation;return _regenerator["default"].wrap(function(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return startMessage=function(items){var _items=(0,_slicedToArray2["default"])(items,1),type=_items[0].type,yearsString=createYearsString(years),message="Fetching ".concat(bold(type)," data for ").concat(bold(yearsString)," (").concat(items.length," items)\n\n");return cyan(message)},doneMessage=function(items){var completed=items.filter(function(_ref8){var text=_ref8.text;return"undefined"!=typeof text});return"".concat(green("COMPLETE")," ~ ").concat(bold(completed.length)," of ").concat(bold(items.length)," items processed\n")},get=function(data){return Promise.all(data.map(getItem))},_context4.next=5,Promise.all(years.map(function(year){return scrapeMessageItems(type,year)}));case 5:return items=_context4.sent.flat(1/0),continueOperation=/*#__PURE__*/function(){var _ref9=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(){var spinner,data,retry,secondAttempt,thirdAttempt,fourthAttempt,results;return _regenerator["default"].wrap(function(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return spinner=ora(startMessage(items)).start(),_context3.next=3,get(items);case 3:return data=_context3.sent,retry=/*#__PURE__*/function(){var _ref10=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(data){var failed;return _regenerator["default"].wrap(function(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return failed=data.filter(function(_ref11){var text=_ref11.text;return"undefined"==typeof text}),spinner.text=cyan("Trying to fetch data for ".concat(bold(failed.length)," of ").concat(items.length," items")),_context2.abrupt("return",0===failed.length?Promise.resolve([]):get(failed));case 3:case"end":return _context2.stop();}},_callee2)}));return function(){return _ref10.apply(this,arguments)}}(),_context3.next=7,retry(data);case 7:return secondAttempt=_context3.sent,_context3.next=10,retry(secondAttempt);case 10:return thirdAttempt=_context3.sent,_context3.next=13,retry(thirdAttempt);case 13:return fourthAttempt=_context3.sent,results=[].concat((0,_toConsumableArray2["default"])(data),(0,_toConsumableArray2["default"])(secondAttempt),(0,_toConsumableArray2["default"])(thirdAttempt),(0,_toConsumableArray2["default"])(fourthAttempt)).filter(function(_ref12){var text=_ref12.text;return"undefined"!=typeof text}),spinner.succeed(doneMessage(results)),_context3.abrupt("return",results);case 17:case"end":return _context3.stop();}},_callee3)}));return function(){return _ref9.apply(this,arguments)}}(),_context4.abrupt("return",0<items.length?continueOperation():[]);case 8:case"end":return _context4.stop();}},_callee4)}));return function(){return _ref7.apply(this,arguments)}}(),getSavedItems=/*#__PURE__*/function(){var _ref14=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(_ref13){var id,key,_ref13$name,name,client,index,_yield$index$search,hits;return _regenerator["default"].wrap(function(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:return id=_ref13.id,key=_ref13.key,_ref13$name=_ref13.name,name=void 0===_ref13$name?"message":_ref13$name,client=algoliasearch(id,key),index=client.initIndex(name),_context5.next=5,index.setSettings({paginationLimitedTo:1e9});case 5:return _context5.next=7,index.search("",{hitsPerPage:1e9});case 7:return _yield$index$search=_context5.sent,hits=_yield$index$search.hits,_context5.abrupt("return",hits);case 10:case"end":return _context5.stop();}},_callee5)}));return function(){return _ref14.apply(this,arguments)}}(),saveItems=/*#__PURE__*/function(){var _ref16=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(items,_ref15){var id,key,_ref15$name,name,SUFFIX_LENGTH,spinner,client,index,chunk,itemsToUpload,results;return _regenerator["default"].wrap(function(_context6){for(;;)switch(_context6.prev=_context6.next){case 0:return id=_ref15.id,key=_ref15.key,_ref15$name=_ref15.name,name=void 0===_ref15$name?"message":_ref15$name,SUFFIX_LENGTH=5,spinner=ora("Connecting to Algolia").start(),client=algoliasearch(id,key),index=client.initIndex(name),_context6.prev=5,spinner.text="Saving ".concat(items.length," items..."),chunk=function(value){return partitionByKeyLength("text",MAX_MESSAGE_TEXT_LENGTH,value)},itemsToUpload=items.flatMap(chunk).map(function(item,index){return _objectSpread({},item,{objectID:"".concat(item.objectID,"_").concat((index+"").padStart(SUFFIX_LENGTH,"0"))})}),_context6.next=11,index.saveObjects(itemsToUpload);case 11:return results=_context6.sent,spinner.succeed("Successfully saved ".concat(items.length," (").concat(itemsToUpload.length," total) items!\n")),_context6.abrupt("return",results);case 16:_context6.prev=16,_context6.t0=_context6["catch"](5),spinner.fail("Failed to save ".concat(items.length," items")),log.error(_context6.t0);case 20:case"end":return _context6.stop();}},_callee6,null,[[5,16]])}));return function(){return _ref16.apply(this,arguments)}}(),populate=/*#__PURE__*/function(){var _ref18=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee7(type,years,_ref17){var id,key,name,items,results;return _regenerator["default"].wrap(function(_context7){for(;;)switch(_context7.prev=_context7.next){case 0:return id=_ref17.id,key=_ref17.key,name=_ref17.name,_context7.next=3,getItems(type,years);case 3:return items=_context7.sent,_context7.next=6,saveItems(items,{id:id,key:key,name:name});case 6:return results=_context7.sent,_context7.abrupt("return",results);case 8:case"end":return _context7.stop();}},_callee7)}));return function(){return _ref18.apply(this,arguments)}}(),update=/*#__PURE__*/function(){var _ref20=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee8(type,_ref19){var id,key,name,_ref19$verbose,verbose,_yield$Promise$all,_yield$Promise$all2,scraped,saved,left,right,updated,items,noItems;return _regenerator["default"].wrap(function(_context8){for(;;)switch(_context8.prev=_context8.next){case 0:return id=_ref19.id,key=_ref19.key,name=_ref19.name,_ref19$verbose=_ref19.verbose,verbose=void 0===_ref19$verbose||_ref19$verbose,_context8.next=3,Promise.all([getItems(type,[getCurrentYear()],{verbose:verbose}),getSavedItems({id:id,key:key,name:name})]);case 3:return _yield$Promise$all=_context8.sent,_yield$Promise$all2=(0,_slicedToArray2["default"])(_yield$Promise$all,2),scraped=_yield$Promise$all2[0],saved=_yield$Promise$all2[1],left=scraped.map(function(_ref21){var id=_ref21.id;return id}),right=(0,_toConsumableArray2["default"])(new Set(saved.map(function(_ref22){var id=_ref22.id;return id}))),updated=difference(left,right).sort().map(parseMessageId),_context8.next=12,Promise.all(updated.map(getItem));case 12:if(items=_context8.sent,noItems=0===items.length,noItems&&process.stdout.write("".concat(bold("No records to update"),"\n\n")),!noItems){_context8.next=19;break}_context8.t0={objectIDs:[]},_context8.next=22;break;case 19:return _context8.next=21,saveItems(items,{id:id,key:key,name:name});case 21:_context8.t0=_context8.sent;case 22:return _context8.abrupt("return",_context8.t0);case 23:case"end":return _context8.stop();}},_callee8)}));return function(){return _ref20.apply(this,arguments)}}();module.exports={getItem:getItem,getItems:getItems,getSavedItems:getSavedItems,populate:populate,saveItems:saveItems,scrapeMessageItems:scrapeMessageItems,update:update};