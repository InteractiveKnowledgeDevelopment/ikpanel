!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}([,,function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=new(n(4).default);i.table="#blogCategoryTable",i.searchFilter="#search-filter",i.statusFilter="#status-filter",i.filterUrlPrefix="mod/blog/categories",i.itemInTable=-1,i.resultContainer="#blogCategoryTable",i.saveOrder=!0,i.sort=!0,i.actionButtonRestore=".action-restore",i.actionButtonDelete=".action-delete",i.actionDeleteMessage="Sto eliminando la categoria...",i.actionDeleteQuestion="Sei sicuro di voler eliminare la categoria selezionata?",i.actionRestoreMessage="Sto ripristinando la categoria...",i.actionRestoreQuestion="Sei sicuro di voler ripristinare la categoria selezionata?",i.init()},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}l((i=i.apply(e,t||[])).next())})},r=this&&this.__generator||function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),s=n(6),a=function(){function e(){this.table=null,this.statusFilter=null,this.searchFilter=null,this.filterUrlPrefix=null,this.itemInTable=null,this.itemInTableInput=null,this.resultContainer=null,this.saveOrder=!1,this.sort=!0,this.stateSave=!1,this.actionButtonDelete=null,this.actionButtonRestore=null,this.actionDeleteMessage=null,this.actionDeleteQuestion=null,this.actionRestoreMessage=null,this.actionRestoreQuestion=null}return e.prototype.init=function(){var e=this,t=$(this.statusFilter),n=$(this.searchFilter),a=$(this.resultContainer),l=$(this.table),u=$("body");if(e.saveOrder)var c=l.find("tbody").sortable({items:"> tr",cursor:"move",opacity:.8,handle:".handle",helper:function(e,t){var n=t.children(),i=t.clone();return i.children().each(function(e){$(this).width(n.eq(e).width()),$(this).width(n.eq(e).width())}),i},update:function(t,n){var i=c.sortable("toArray",{attribute:"data-id"}),r=l.DataTable().page.info().start,o=[];for(var s in i){var a={};a.id=Number(i[s]),a.order=Number(s)+Number(r)+1,o.push(a)}$.ajax({type:"PUT",contentType:"application/json",url:admin_panel_url+"/"+e.filterUrlPrefix+"/update-order",data:JSON.stringify({items:o}),success:function(e){},error:function(e){sendNotifications(e)},beforeSend:function(){},complete:function(){}})}});var f=l.DataTable(e.getDataTableSettings());t.select2(),n.triggerHandler("focus"),$("[data-toggle=tip]").tooltip({container:"body",placement:"left"}),null!==e.itemInTableInput&&new s.default("#item-per-page-skills","ipp-skills").on("change",function(e){f.page.len(e).draw()}),u.on("keyup",e.searchFilter,function(){var t=String(n.val());f.search(t).draw(),e.saveOrder&&(t.length>0?f.column(0).visible(!1):f.column(0).visible(!0),f.columns.adjust().draw())}),u.on("change",this.statusFilter,function(){var n=String(t.val());$.ajax({type:"GET",url:admin_panel_url+"/"+e.filterUrlPrefix+"/filter/"+n,success:function(t){a.html(t),(f=l.DataTable(e.getDataTableSettings())).search(n),$("[data-toggle=tip]").tooltip({container:"body",placement:"left"})},error:function(e){sendNotifications(e)},beforeSend:function(){f.clear(),f.destroy(),o.default.loading(!0)},complete:function(){o.default.loading(!1)}})}),u.on("click",this.actionButtonDelete,function(){return i(this,void 0,void 0,function(){var t;return r(this,function(n){switch(n.label){case 0:return t=$(this).data("id"),[4,o.default.confirm(e.actionDeleteQuestion)];case 1:return n.sent()&&$.ajax({type:"DELETE",contentType:"application/json",url:admin_panel_url+"/"+e.filterUrlPrefix+"/delete/"+t,success:function(){location.reload()},error:function(e){sendNotifications(e)},beforeSend:function(){o.default.loading(!0,e.actionDeleteMessage)},complete:function(){o.default.loading(!1)}}),[2]}})})}),u.on("click",this.actionButtonRestore,function(){return i(this,void 0,void 0,function(){var t;return r(this,function(n){switch(n.label){case 0:return t=$(this).data("id"),[4,o.default.confirm(e.actionRestoreQuestion)];case 1:return n.sent()&&$.ajax({type:"PUT",contentType:"application/json",url:admin_panel_url+"/"+e.filterUrlPrefix+"/restore/"+t,success:function(){location.reload()},error:function(e){sendNotifications(e)},beforeSend:function(){o.default.loading(!0,e.actionRestoreMessage)},complete:function(){o.default.loading(!1)}}),[2]}})})})},e.prototype.getDataTableSettings=function(){return{sDom:"<'table-responsive't><'row'<p i>>",sPaginationType:"bootstrap",destroy:!0,scrollCollapse:!0,ordering:this.sort,stateSave:this.stateSave,oLanguage:{sLengthMenu:"_MENU_ ",sInfo:"Stai visualizzando da <b>_START_ a _END_</b> su _TOTAL_ risultati",sInfoFiltered:"(filtrato da _MAX_ elementi)",sEmptyTable:"Nessun dato disponibile.",sInfoEmpty:"Nessun dato disponibile.",sZeroRecords:"Nessun dato da mostrare."},iDisplayLength:this.itemInTable}},e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.alert=function(e){var t=this;return new Promise(function(n){t.modernGUI.malert.message.html(e),t.modernGUI.malert.ok.off().on("click",function(){t.modernGUI.malert.gui.modal("hide"),n()}),t.modernGUI.malert.gui.modal("show")})},e.confirm=function(e){var t=this;return new Promise(function(n){t.modernGUI.mconfirm.message.html(e),t.modernGUI.mconfirm.ok.off().on("click",function(){t.modernGUI.mconfirm.gui.modal("hide"),n(!0)}),t.modernGUI.mconfirm.cancel.off().on("click",function(){t.modernGUI.mconfirm.gui.modal("hide"),n(!1)}),t.modernGUI.mconfirm.gui.modal("show")})},e.prompt=function(e){var t=this;return new Promise(function(n){t.modernGUI.mprompt.message.html(e),t.modernGUI.mprompt.ok.off().on("click",function(){t.modernGUI.mprompt.gui.modal("hide"),n({result:!0,text:t.modernGUI.mprompt.input.val().toString()}),t.modernGUI.mprompt.input.val("")}),t.modernGUI.mprompt.cancel.off().on("click",function(){t.modernGUI.mprompt.gui.modal("hide"),n({result:!1,text:t.modernGUI.mprompt.input.val().toString()}),t.modernGUI.mprompt.input.val("")}),t.modernGUI.mprompt.input.off().on("keyup",function(e){13===e.keyCode&&(t.modernGUI.mprompt.gui.modal("hide"),n({result:!0,text:t.modernGUI.mprompt.input.val().toString()}),t.modernGUI.mprompt.input.val(""))}),t.modernGUI.mprompt.gui.on("shown.bs.modal",function(){t.modernGUI.mprompt.input.focus()}),t.modernGUI.mprompt.gui.modal("show")})},e.loading=function(e,t){void 0===e&&(e=!0),void 0===t&&(t="Caricamento dei dati in corso...");var n=this;setTimeout(function(){e?(n.modernGUI.mloading.message.html(t),n.modernGUI.mloading.gui.modal("show")):n.modernGUI.mloading.gui.modal("hide")},e?0:500)},e.modernGUI={mloading:{gui:$("#mloading-gui"),message:$("#mloading-message")},malert:{gui:$("#malert-gui"),message:$("#malert-message"),ok:$("#malert-ok")},mconfirm:{gui:$("#mconfirm-gui"),message:$("#mconfirm-message"),ok:$("#mconfirm-ok"),cancel:$("#mconfirm-cancel")},mprompt:{gui:$("#mprompt-gui"),message:$("#mprompt-message"),input:$("#mprompt-input"),ok:$("#mprompt-ok"),cancel:$("#mprompt-cancel")}},e}();t.default=i},function(e,t,n){"use strict";var i,r=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,n,i){void 0===i&&(i=[10,25,50,100]);var r=e.call(this)||this;return r.saveInCookie=!0,r.container=t,r.range=i,r.range.push(-1),r.itemID=n,r.init(),r}return r(t,e),t.prototype.getValue=function(){return Number($("#"+this.itemID).val())},t.prototype.setValue=function(e){$("#"+this.itemID).val(e).trigger("change.select2")},t.prototype.setFromCookie=function(){var e=$("#"+this.itemID),t=this.itemID+"-cookie";void 0!==Cookies.get(t)&&e.find('option[value="'+Cookies.get(t)+'"]').prop("selected",!0).trigger("change.select2")},t.prototype.init=function(){var e=this;$(this.container).html(e.makeHTML()),e.parseElement(),e.setCookie(),$("#"+e.itemID).on("change",function(){e.emit("change",e.getValue())})},t.prototype.makeHTML=function(){var e=document.createElement("div"),t=document.createElement("label"),n=document.createTextNode("Elementi da visualizzare"),i=document.createElement("select");e.classList.add("form-group","form-group-default","form-group-default-select2"),e.style.cssText=$(this.container).data("style-container");var r=$(this.container).data("input-size");switch(r){case"lg":i.classList.add("input-lg");break;case"md":i.classList.add("input-md");break;case"xs":case"xxs":i.classList.add("input-sm")}for(var o in i.id=this.itemID,!1!==$(this.container).data("input-fullwidth")&&i.classList.add("full-width"),i.setAttribute("autocomplete","off"),t.setAttribute("for",this.itemID),t.appendChild(n),this.range){var s=document.createElement("option"),a=null,l=String(this.range[o]);a=-1!==Number(l)?document.createTextNode(l):document.createTextNode("Tutti"),s.value=l,s.appendChild(a),i.appendChild(s)}return e.appendChild(t),e.appendChild(i),"xxs"==r?i.outerHTML:e.outerHTML},t.prototype.parseElement=function(){$("#"+this.itemID).select2({width:$(this.container).data("input-width")})},t.prototype.setCookie=function(){var e=this,t=$("#"+e.itemID),n=e.itemID+"-cookie";e.saveInCookie&&(void 0===Cookies.get(n)&&Cookies.set(n,t.val()),t.find('option[value="'+Cookies.get(n)+'"]').prop("selected",!0).trigger("change"),t.on("change",function(){e.saveInCookie&&Cookies.set(n,t.val())}))},t}(n(7).EventEmitter);t.default=o},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function r(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,s,a,l,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||r(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var c=new Error('Uncaught, unspecified "error" event. ('+t+")");throw c.context=t,c}if(o(n=this._events[e]))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(r(n))for(a=Array.prototype.slice.call(arguments,1),s=(u=n.slice()).length,l=0;l<s;l++)u[l].apply(this,a);return!0},n.prototype.addListener=function(e,t){var s;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?r(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,r(this._events[e])&&!this._events[e].warned&&(s=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&s>0&&this._events[e].length>s&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){if(!i(t))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},n.prototype.removeListener=function(e,t){var n,o,s,a;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(s=(n=this._events[e]).length,o=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(r(n)){for(a=s;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){o=a;break}if(o<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(i(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}}]);