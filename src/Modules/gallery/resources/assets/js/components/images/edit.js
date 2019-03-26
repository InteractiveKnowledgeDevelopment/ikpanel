"use strict";
/*
 *  Copyright (C) Interactive Knowledge Development, Inc - All Rights Reserved
 *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  * Proprietary and confidential
 *  * Written by Roberto Ferro <roberto.ferro@ikdev.eu>, March 2019
 *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var modern_gui_1 = require("@ikpanel/modern-gui");
var form_utils_1 = require("@ikpanel/form_utils");
$(function () {
    var body = $('body');
    $('#content').ckeditor(function () {
    }, {
        language: 'it',
        height: 200
    });
    body.on('click', '.action-save', function () {
        var action = $(this).data('action');
        $.ajax({
            type: 'POST',
            cache: false,
            contentType: false,
            processData: false,
            url: admin_panel_url + "/mod/gallery/image/edit",
            data: form_utils_1.default.getInputFormDataJson(),
            beforeSend: function () {
                modern_gui_1.default.loading(true, 'Modifica immagine in corso');
            },
            success: function () {
                switch (action) {
                    case 'close':
                        location.href = admin_panel_url + "/mod/gallery/images/new";
                        break;
                    default:
                        location.reload();
                        break;
                } // switch
            },
            error: function (xhr) {
                form_utils_1.default.sendNotifications(xhr);
            },
            complete: function () {
                modern_gui_1.default.loading(false);
            }
        });
    });
    body.on('click', '#deleteArticles', function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, modern_gui_1.default.confirm('Sei sicuro di voler eliminare questa immagine?')];
                    case 1:
                        if (_a.sent()) {
                            $.ajax({
                                type: 'DELETE',
                                url: admin_panel_url + "/mod/gallery/images/delete/" + $(this).data('id'),
                                beforeSend: function () {
                                    modern_gui_1.default.loading(true, 'Eliminazione immagine in corso...');
                                },
                                success: function () {
                                    location.href = admin_panel_url + "/mod/gallery/images/show";
                                },
                                complete: function () {
                                    modern_gui_1.default.loading(false);
                                }
                            });
                        } // if
                        return [2 /*return*/];
                }
            });
        });
    });
    var fileReader = new FileReader();
    $('#pic').on('change', function (e) {
        // @ts-ignore
        fileReader.readAsDataURL(e.target.files[0]);
    });
    fileReader.onload = function (e) {
        var mainPic = $('#pic-preview'), mainPicWidth = mainPic.width();
        // @ts-ignore
        mainPic.prop('src', e.target.result);
        mainPic.height(mainPicWidth);
    };
});
