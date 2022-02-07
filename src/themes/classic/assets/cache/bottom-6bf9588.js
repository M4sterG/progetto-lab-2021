/*! For license information please see core.js.LICENSE.txt */
!function(){"use strict";var e={26:function(e,t,n){var r=i(n(339)),o=i(n(825));function i(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(document).ready((function(){var e;e={country:".js-country",address:".js-address-form"},(0,r.default)("body").on("change",e.country,(function(){var t={id_country:(0,r.default)(e.country).val(),id_address:(0,r.default)("".concat(e.address," form")).data("id-address")},n=(0,r.default)("".concat(e.address," form")).data("refresh-url"),i="".concat(e.address," input");r.default.post(n,t).then((function(t){var n=[];(0,r.default)(i).each((function(){n[(0,r.default)(this).prop("name")]=(0,r.default)(this).val()})),(0,r.default)(e.address).replaceWith(t.address_form),(0,r.default)(i).each((function(){(0,r.default)(this).val(n[(0,r.default)(this).prop("name")])})),o.default.emit("updatedAddressForm",{target:(0,r.default)(e.address),resp:t})})).fail((function(e){o.default.emit("handleError",{eventType:"updateAddressForm",resp:e})}))}))}))},999:function(e,t,n){var r=a(n(339)),o=a(n(825)),i=n(988);function a(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(document).ready((function(){o.default.on("updateCart",(function(e){o.default.cart=e.resp.cart;var t=(0,r.default)(".js-cart").data("refresh-url");if(t){var n={};e&&e.reason&&(n={id_product_attribute:e.reason.idProductAttribute,id_product:e.reason.idProduct}),r.default.post(t,n).then((function(e){(0,r.default)(o.default.selectors.cart.detailedTotals).replaceWith(e.cart_detailed_totals),(0,r.default)(o.default.selectors.cart.summaryItemsSubtotal).replaceWith(e.cart_summary_items_subtotal),(0,r.default)(o.default.selectors.cart.summarySubTotalsContainer).replaceWith(e.cart_summary_subtotals_container),(0,r.default)(o.default.selectors.cart.summaryProducts).replaceWith(e.cart_summary_products),(0,r.default)(o.default.selectors.cart.summaryTotals).replaceWith(e.cart_summary_totals),(0,r.default)(o.default.selectors.cart.detailedActions).replaceWith(e.cart_detailed_actions),(0,r.default)(o.default.selectors.cart.voucher).replaceWith(e.cart_voucher),(0,r.default)(o.default.selectors.cart.overview).replaceWith(e.cart_detailed),(0,r.default)(o.default.selectors.cart.summaryTop).replaceWith(e.cart_summary_top),(0,r.default)(o.default.selectors.cart.productCustomizationId).val(0),(0,r.default)(o.default.selectors.cart.lineProductQuantity).each((function(e,t){var n=(0,r.default)(t);n.attr("value",n.val())})),(0,r.default)(o.default.selectors.checkout.cartPaymentStepRefresh).length&&(0,i.refreshCheckoutPage)(),o.default.emit("updatedCart",{eventType:"updateCart",resp:e})})).fail((function(e){o.default.emit("handleError",{eventType:"updateCart",resp:e})}))}}));var e=(0,r.default)("body");e.on("click",'[data-button-action="add-to-cart"]',(function(e){e.preventDefault();var t=(0,r.default)(e.currentTarget.form),n="".concat(t.serialize(),"&add=1&action=update"),i=t.attr("action"),a=(0,r.default)(e.currentTarget);a.prop("disabled",!0);var s,u=function(e){e.parents(o.default.selectors.product.addToCart).first().find(o.default.selectors.product.minimalQuantity).addClass("error"),e.parent().find("label").addClass("error")},c=t.find("input[min]");s=!0,c.each((function(e,t){var n=(0,r.default)(t),o=parseInt(n.attr("min"),10);o&&n.val()<o&&(u(n),s=!1)})),s?r.default.post(i,n,null,"json").then((function(e){o.default.emit("updateCart",{reason:{idProduct:e.id_product,idProductAttribute:e.id_product_attribute,idCustomization:e.id_customization,linkAction:"add-to-cart",cart:e.cart},resp:e})})).fail((function(e){o.default.emit("handleError",{eventType:"addProductToCart",resp:e})})).always((function(){setTimeout((function(){a.prop("disabled",!1)}),1e3)})):u(c)})),e.on("submit",'[data-link-action="add-voucher"]',(function(e){e.preventDefault();var t=(0,r.default)(e.currentTarget),n=t.attr("action");0===t.find("[name=action]").length&&t.append((0,r.default)("<input>",{type:"hidden",name:"ajax",value:1})),0===t.find("[name=action]").length&&t.append((0,r.default)("<input>",{type:"hidden",name:"action",value:"update"})),r.default.post(n,t.serialize(),null,"json").then((function(t){t.hasError?(0,r.default)(".js-error").show().find(".js-error-text").text(t.errors[0]):o.default.emit("updateCart",{reason:e.target.dataset,resp:t})})).fail((function(e){o.default.emit("handleError",{eventType:"updateCart",resp:e})}))}))}))},673:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){(0,r.default)(o.default.selectors.checkout.editAddresses).on("click",(function(e){e.stopPropagation(),(0,r.default)(o.default.selectors.checkout.addressesStep).trigger("click"),o.default.emit("editAddress")})),(0,r.default)(o.default.selectors.checkout.deliveryAddressRadios).on("click",(function(){(0,r.default)(o.default.selectors.checkout.addressItem).removeClass("selected"),(0,r.default)(o.default.selectors.checkout.addressItemChecked).addClass("selected");var e=(0,r.default)(o.default.selectors.checkout.addressError).prop("id").split("-").pop(),t=(0,r.default)(o.default.selectors.checkout.notValidAddresses).val(),n=this.name.split("_").pop(),i=(0,r.default)("".concat(o.default.selectors.checkout.addressError,"[name=alert-").concat(n,"]"));c(!1,e,n),""!==t&&null===s&&t.split(",").indexOf(this.value)>=0?(i.show(),c(!0,this.value,n),(0,r.default)(o.default.selectors.checkout.addressError).prop("id","id-failure-address-".concat(this.value))):i.hide();var a=(0,r.default)("".concat(o.default.selectors.checkout.addressError,":visible"));l(a.length<=0)}))};var r=a(n(339)),o=a(n(825)),i=n(988);function a(e){return e&&e.__esModule?e:{default:e}}var s=(0,i.psGetRequestParameter)("editAddress"),u=(0,i.psGetRequestParameter)("use_same_address");(0,r.default)(window).on("load",(function(){var e=(0,r.default)("".concat(o.default.selectors.checkout.addressError,":visible"));if(0===parseInt(u,10)&&(0,r.default)(o.default.selectors.checkout.invoiceAddresses).trigger("click"),(null!==s||(0,r.default)("".concat(o.default.selectors.checkout.addressForm,":visible")).length>1)&&e.hide(),e.length>0){var t=(0,r.default)(o.default.selectors.checkout.addressError).prop("id").split("-").pop();e.each((function(){c(!0,t,(0,r.default)(this).attr("name").split("-").pop())}))}e=(0,r.default)("".concat(o.default.selectors.checkout.addressError,":visible")),l(e.length<=0)}));var c=function(e,t,n){var o=(0,r.default)("#id-address-".concat(n,"-address-").concat(t," a.edit-address")),i=["text-info","address-item-invalid"];(0,r.default)("#".concat(n,"-addresses a.edit-address")).removeClass(i),o.toggleClass(i,e)},l=function(e){(0,r.default)("button[name=confirm-addresses]").prop("disabled",!e)}},107:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(0,r.default)("body"),t=o.default.selectors.checkout.deliveryFormSelector,n=o.default.selectors.checkout.summarySelector,a=o.default.selectors.checkout.deliveryStepSelector,s=o.default.selectors.checkout.editDeliveryButtonSelector;e.on("change","".concat(t," input"),(function(e){var a=(0,r.default)(t),s=a.serialize(),u=(0,r.default)(e.currentTarget).parents(o.default.selectors.checkout.deliveryOption);r.default.post(a.data("url-update"),s).then((function(e){(0,r.default)(n).replaceWith(e.preview),(0,r.default)(o.default.selectors.checkout.cartPaymentStepRefresh).length&&(0,i.refreshCheckoutPage)(),o.default.emit("updatedDeliveryForm",{dataForm:a.serializeArray(),deliveryOption:u,resp:e})})).fail((function(e){o.default.trigger("handleError",{eventType:"updateDeliveryOptions",resp:e})}))})),e.on("click",s,(function(e){e.stopPropagation(),(0,r.default)(a).trigger("click"),o.default.emit("editDelivery")}))};var r=a(n(339)),o=a(n(825)),i=n(988);function a(e){return e&&e.__esModule?e:{default:e}}},870:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=new s;return e.init(),e};var r=i(n(339)),o=i(n(825));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.confirmationSelector=o.default.selectors.checkout.confirmationSelector,this.conditionsSelector=o.default.selectors.checkout.conditionsSelector,this.conditionAlertSelector=o.default.selectors.checkout.conditionAlertSelector,this.additionalInformatonSelector=o.default.selectors.checkout.additionalInformatonSelector,this.optionsForm=o.default.selectors.checkout.optionsForm,this.termsCheckboxSelector=o.default.selectors.checkout.termsCheckboxSelector}var t,n;return t=e,(n=[{key:"init",value:function(){var e=(0,r.default)("body");e.on("change","".concat(this.conditionsSelector,' input[type="checkbox"]'),r.default.proxy(this.toggleOrderButton,this)),e.on("change",'input[name="payment-option"]',r.default.proxy(this.toggleOrderButton,this)),e.on("click","".concat(this.confirmationSelector," button"),r.default.proxy(this.confirm,this)),this.collapseOptions()}},{key:"collapseOptions",value:function(){(0,r.default)("".concat(this.additionalInformatonSelector,", ").concat(this.optionsForm)).hide()}},{key:"getSelectedOption",value:function(){return(0,r.default)('input[name="payment-option"]:checked').attr("id")}},{key:"haveTermsBeenAccepted",value:function(){return(0,r.default)(this.termsCheckboxSelector).prop("checked")}},{key:"hideConfirmation",value:function(){(0,r.default)(this.confirmationSelector).hide()}},{key:"showConfirmation",value:function(){(0,r.default)(this.confirmationSelector).show()}},{key:"toggleOrderButton",value:function(){var e=!0;(0,r.default)("".concat(this.conditionsSelector,' input[type="checkbox"]')).each((function(t,n){n.checked||(e=!1)})),o.default.emit("termsUpdated",{isChecked:e}),this.collapseOptions();var t=this.getSelectedOption();if(t||(e=!1),(0,r.default)("#".concat(t,"-additional-information")).show(),(0,r.default)("#pay-with-".concat(t,"-form")).show(),(0,r.default)(o.default.selectors.checkout.paymentBinary).hide(),(0,r.default)("#".concat(t)).hasClass("binary")){var n=this.getPaymentOptionSelector(t);this.hideConfirmation(),(0,r.default)(n).show(),document.querySelectorAll("".concat(n," button, ").concat(n," input")).forEach((function(t){e?t.removeAttribute("disabled"):t.setAttribute("disabled",!e)})),e?(0,r.default)(n).removeClass("disabled"):(0,r.default)(n).addClass("disabled")}else this.showConfirmation(),(0,r.default)("".concat(this.confirmationSelector," button")).toggleClass("disabled",!e),(0,r.default)("".concat(this.confirmationSelector," button")).attr("disabled",!e),e?(0,r.default)(this.conditionAlertSelector).hide():(0,r.default)(this.conditionAlertSelector).show()}},{key:"getPaymentOptionSelector",value:function(e){var t=(0,r.default)("#".concat(e)).data("module-name");return".js-payment-".concat(t)}},{key:"showNativeFormErrors",value:function(){(0,r.default)("input[name=payment-option], ".concat(this.termsCheckboxSelector)).each((function(){this.reportValidity()}))}},{key:"confirm",value:function(){var e=this.getSelectedOption(),t=this.haveTermsBeenAccepted();void 0!==e&&!1!==t?((0,r.default)("".concat(this.confirmationSelector," button")).addClass("disabled"),(0,r.default)("#pay-with-".concat(e,"-form form")).submit()):this.showNativeFormErrors()}}])&&a(t.prototype,n),e}()},597:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(339)),o=i(n(825));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}var c=o.default.selectors.checkout.currentStep,l=".".concat(c),d=function(){function e(){a(this,e),this.$steps=(0,r.default)(o.default.selectors.checkout.step),this.$steps.off("click"),this.$clickableSteps=(0,r.default)(l).prevAll().andSelf(),this.$clickableSteps.addClass("-clickable")}return u(e,[{key:"getClickableSteps",value:function(){return this.$clickableSteps}},{key:"makeCurrent",value:function(e){this.$steps.removeClass("-current"),this.$steps.removeClass(c),e.makeCurrent()}}],[{key:"getClickedStep",value:function(e){return new f((0,r.default)(e.target).closest(o.default.selectors.checkout.step))}}]),e}();t.default=d;var f=function(){function e(t){a(this,e),this.$step=t}return u(e,[{key:"isUnreachable",value:function(){return this.$step.hasClass("-unreachable")}},{key:"makeCurrent",value:function(){this.$step.addClass("-current"),this.$step.addClass(c)}},{key:"hasContinueButton",value:function(){return(0,r.default)("button.continue",this.$step).length>0}},{key:"disableAllAfter",value:function(){var e=this.$step.nextAll();e.addClass("-unreachable").removeClass("-complete"),(0,r.default)(o.default.selectors.checkout.stepTitle,e).addClass("not-allowed")}},{key:"enableAllBefore",value:function(){var e=this.$step.nextAll("".concat(o.default.selectors.checkout.step,".-clickable"));e.removeClass("-unreachable").addClass("-complete"),(0,r.default)(o.default.selectors.checkout.stepTitle,e).removeClass("not-allowed")}}]),e}()},982:function(e,t,n){var r=c(n(339)),o=c(n(825)),i=c(n(673)),a=c(n(107)),s=c(n(870)),u=c(n(597));function c(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(document).ready((function(){var e,t;1===(0,r.default)("#checkout").length&&((0,i.default)(),(0,a.default)(),(0,s.default)(),(e=new u.default).getClickableSteps().on("click",(function(t){var n=u.default.getClickedStep(t);n.isUnreachable()||(e.makeCurrent(n),n.hasContinueButton()?n.disableAllAfter():n.enableAllBefore()),o.default.emit("changedCheckoutStep",{event:t})})),t=o.default.selectors.checkout.form,(0,r.default)(t).submit((function(e){!0===(0,r.default)(this).data("disabled")&&e.preventDefault(),(0,r.default)(this).data("disabled",!0),(0,r.default)('button[type="submit"]',this).addClass("disabled")})))}))},988:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.psShowHide=function(){(0,o.default)(".ps-shown-by-js").show(),(0,o.default)(".ps-hidden-by-js").hide()},t.psGetRequestParameter=i,t.refreshCheckoutPage=function(){var e=i();if(e.updatedTransaction)window.location.reload();else{e.updatedTransaction=1;var t=Object.entries(e).map((function(e){return e.join("=")})).join("&");window.location.href="".concat(window.location.pathname,"?").concat(t)}};var r,o=(r=n(339))&&r.__esModule?r:{default:r};function i(e){var t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(e,n,r){t[n]=void 0!==r?r:""})),void 0!==e?t[e]?t[e]:null:t}},247:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(339)),o=i(n(204));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=(0,r.default)(e);r.default.each(t,(function(e,t){if(!t.checkValidity()){var n=t.value.split("@");o.default.toASCII(n[0])===n[0]&&(t.value=o.default.toASCII(t.value))}}))}},432:function(e,t,n){var r=i(n(339)),o=i(n(825));function i(e){return e&&e.__esModule?e:{default:e}}var a=null;function s(e){o.default.emit("updateProductList",e),window.history.pushState(e,document.title,e.current_url)}function u(e,t){return"abort"!==t}function c(e){a===e&&(a=null)}(0,r.default)(document).ready((function(){o.default.on("updateFacets",(function(e){!function(e){a&&a.abort();var t=e.indexOf("?")>=0?"&":"?",n="".concat(e+t,"from-xhr");a=r.default.ajax({url:n,dataType:"json",success:s,error:u,complete:c})}(e)}))}))},90:function(e,t,n){var r=i(n(339)),o=i(n(825));function i(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(document).ready((function(){(0,r.default)("body").on("click",o.default.selectors.listing.quickview,(function(e){o.default.emit("clickQuickView",{dataset:(0,r.default)(e.target).closest(o.default.selectors.product.miniature).data()}),e.preventDefault()}))}))},52:function(e,t,n){var r,o=(r=n(339))&&r.__esModule?r:{default:r};void 0===o.default.migrateMute&&(o.default.migrateMute=!window.prestashop.debug)},226:function(e,t,n){var r=a(n(339)),o=a(n(825)),i=n(988);function a(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=null,l=null,d=!1,f=[],p=!1;function h(e){var t,n,o;t=(0,r.default)(".quickview #product-availability, .page-product:not(.modal-open) .row #product-availability, .page-product:not(.modal-open) .product-container #product-availability"),n=e,o=(0,r.default)('<div class="alert alert-danger ajax-error" role="alert">'.concat(n,"</div>")),t.replaceWith(o)}function v(e){var t=(0,r.default)(e.$targetParent.find(e.targetSelector));if(!(t.length<=0)){var n=e.$addToCartSnippet.find(e.targetSelector);n.length>0?t.replaceWith(n[0].outerHTML):t.html("")}}(0,r.default)(document).ready((function(){var e=(0,r.default)(o.default.selectors.product.actions);(0,r.default)("body").on("change touchspin.on.startspin","".concat(o.default.selectors.product.variants," *[name]"),(function(e){p=!0,o.default.emit("updateProduct",{eventType:"updatedProductCombination",event:e,resp:{},reason:{productUrl:o.default.urls.pages.product||""}})})),(0,r.default)(e.find("form:first").serializeArray()).each((function(e,t){var n=t.value,r=t.name;f.push({value:n,name:r})})),window.addEventListener("popstate",(function(e){if(d=!0,!(!e.state||e.state&&e.state.form&&0===e.state.form.length)||p){var t=(0,r.default)(o.default.selectors.product.actions).find("form:first");e.state&&e.state.form?e.state.form.forEach((function(e){t.find('[name="'.concat(e.name,'"]')).val(e.value)})):f.forEach((function(e){t.find('[name="'.concat(e.name,'"]')).val(e.value)})),o.default.emit("updateProduct",{eventType:"updatedProductCombination",event:e,resp:{},reason:{productUrl:o.default.urls.pages.product||""}})}})),(0,r.default)("body").on("click",o.default.selectors.product.refresh,(function(e,t){e.preventDefault();var n="updatedProductCombination";void 0!==t&&t.eventType&&(n=t.eventType),o.default.emit("updateProduct",{eventType:n,event:e,resp:{},reason:{productUrl:o.default.urls.pages.product||""}})})),o.default.on("updateProduct",(function(e){var t=e.eventType,n=e.event;(function(){var e=r.default.Deferred(),t=(0,r.default)(o.default.selectors.product.actions),n=(0,r.default)(o.default.selectors.quantityWanted);if(null!==o.default&&null!==o.default.urls&&null!==o.default.urls.pages&&""!==o.default.urls.pages.product&&null!==o.default.urls.pages.product)return e.resolve(o.default.urls.pages.product),e.promise();var i={};return(0,r.default)(t.find("form:first").serializeArray()).each((function(e,t){i[t.name]=t.value})),r.default.ajax({url:t.find("form:first").attr("action"),method:"POST",data:s({ajax:1,action:"productrefresh",quantity_wanted:n.val()},i),dataType:"json",success:function(t){var n=t.productUrl;o.default.page.canonical=n,e.resolve(n)},error:function(t,n,r){e.reject({jqXHR:t,textStatus:n,errorThrown:r})}}),e.promise()})().done((function(e){return function(e,t,n){var a,s=(0,r.default)(o.default.selectors.product.actions),u=s.find(o.default.selectors.quantityWanted),d=s.find("form:first"),f=d.serialize(),p=(0,i.psGetRequestParameter)("preview");if("function"==typeof Event?a=new Event("updateRating"):(a=document.createEvent("Event")).initEvent("updateRating",!0,!0),p=null!==p?"&preview=".concat(p):"",null!==n){if(!e||"keyup"!==e.type||u.val()!==u.data("old-value")){u.data("old-value",u.val()),l&&clearTimeout(l);var m=30;"updatedProductQuantity"===t&&(m=750),l=setTimeout((function(){""!==f&&(c=r.default.ajax({url:n+(-1===n.indexOf("?")?"?":"&")+f+p,method:"POST",data:{quickview:(0,r.default)(".modal.quickview.in").length,ajax:1,action:"refresh",quantity_wanted:"updatedProductCombination"===t?u.attr("min"):u.val()},dataType:"json",beforeSend:function(){null!==c&&c.abort()},error:function(e,t){"abort"!==t&&0===(0,r.default)("section#main > .ajax-error").length&&h()},success:function(e){var n=(0,r.default)("<div>").append(e.product_cover_thumbnails);(0,r.default)(o.default.selectors.product.imageContainer).html()!==n.find(o.default.selectors.product.imageContainer).html()&&(0,r.default)(o.default.selectors.product.imageContainer).replaceWith(e.product_cover_thumbnails),(0,r.default)(o.default.selectors.product.prices).first().replaceWith(e.product_prices),(0,r.default)(o.default.selectors.product.customization).first().replaceWith(e.product_customization),(0,r.default)(o.default.selectors.product.inputCustomization).val(0),(0,r.default)(o.default.selectors.product.variantsUpdate).first().replaceWith(e.product_variants),(0,r.default)(o.default.selectors.product.discounts).first().replaceWith(e.product_discounts),(0,r.default)(o.default.selectors.product.additionalInfos).first().replaceWith(e.product_additional_info),(0,r.default)(o.default.selectors.product.details).replaceWith(e.product_details),(0,r.default)(o.default.selectors.product.flags).first().replaceWith(e.product_flags),function(e){var t=null;(0,r.default)(e.product_add_to_cart).each((function(e,n){return!(0,r.default)(n).hasClass("product-add-to-cart")||(t=(0,r.default)(n),!1)})),null===t&&h();var n=(0,r.default)(o.default.selectors.product.addToCart);v({$addToCartSnippet:t,$targetParent:n,targetSelector:".add"}),v({$addToCartSnippet:t,$targetParent:n,targetSelector:"#product-availability"}),v({$addToCartSnippet:t,$targetParent:n,targetSelector:".product-minimal-quantity"})}(e);var i=parseInt(e.product_minimal_quantity,10);document.dispatchEvent(a),isNaN(i)||"updatedProductQuantity"===t||(u.attr("min",i),u.val(i)),o.default.emit("updatedProduct",e,d.serializeArray())},complete:function(){c=null,l=null}}))}),m)}}else h()}(n,t,e)})).fail((function(){0===(0,r.default)("section#main > .ajax-error").length&&h()}))})),o.default.on("updatedProduct",(function(e,t){if(e.product_url&&e.id_product_attribute&&!(0,r.default)(".modal.quickview").length){var n=document.title;e.product_title&&(n=e.product_title,(0,r.default)(document).attr("title",n)),d||window.history.pushState({id_product_attribute:e.id_product_attribute,form:t},n,e.product_url),d=!1}})),o.default.on("updateCart",(function(e){e&&e.reason&&"add-to-cart"===e.reason.linkAction&&(0,r.default)("#quantity_wanted").val(1)})),o.default.on("showErrorNextToAddtoCartButton",(function(e){e&&e.errorMessage&&h(e.errorMessage)}))}))},965:function(e,t,n){var r=i(n(825)),o=i(n(339));function i(e){return e&&e.__esModule?e:{default:e}}r.default.selectors={quantityWanted:"#quantity_wanted",product:{imageContainer:".quickview .images-container, .page-product:not(.modal-open) .row .images-container, .page-product:not(.modal-open) .product-container .images-container, .quickview .js-images-container, .page-product:not(.modal-open) .row .js-images-container, .page-product:not(.modal-open) .product-container .js-images-container",container:".product-container, .js-product-container",availability:"#product-availability, .js-product-availability",actions:".product-actions, .js-product-actions",variants:".product-variants, .js-product-variants",refresh:".product-refresh, .js-product-refresh",miniature:".js-product-miniature",minimalQuantity:".product-minimal-quantity, .js-product-minimal-quantity",addToCart:".quickview .product-add-to-cart, .page-product:not(.modal-open) .row .product-add-to-cart, .page-product:not(.modal-open) .product-container .product-add-to-cart, .quickview .js-product-add-to-cart, .page-product:not(.modal-open) .row .js-product-add-to-cart, .page-product:not(.modal-open) .product-container .js-product-add-to-cart",prices:".quickview .product-prices, .page-product:not(.modal-open) .row .product-prices, .page-product:not(.modal-open) .product-container .product-prices, .quickview .js-product-prices, .page-product:not(.modal-open) .row .js-product-prices, .page-product:not(.modal-open) .product-container .js-product-prices",inputCustomization:'.product-actions input[name="id_customization"], .js-product-actions .js-product-customization-id',customization:".quickview .product-customization, .page-product:not(.modal-open) .row .product-customization, .page-product:not(.modal-open) .product-container .product-customization, .quickview .js-product-customization, .page-product:not(.modal-open) .row .js-product-customization, .page-product:not(.modal-open) .product-container .js-product-customization",variantsUpdate:".quickview .product-variants, .page-product:not(.modal-open) .row .product-variants, .page-product:not(.modal-open) .product-container .product-variants, .quickview .js-product-variants, .page-product:not(.modal-open) .row .js-product-variants, .page-product:not(.modal-open) .js-product-container .js-product-variants",discounts:".quickview .product-discounts, .page-product:not(.modal-open) .row .product-discounts, .page-product:not(.modal-open) .product-container .product-discounts, .quickview .js-product-discounts, .page-product:not(.modal-open) .row .js-product-discounts, .page-product:not(.modal-open) .product-container .js-product-discounts",additionalInfos:".quickview .product-additional-info, .page-product:not(.modal-open) .row .product-additional-info, .page-product:not(.modal-open) .product-container .product-additional-info, .quickview .js-product-additional-info, .page-product:not(.modal-open) .row .js-product-additional-info, .page-product:not(.modal-open) .js-product-container .js-product-additional-info",details:".quickview #product-details, #product-details, .quickview .js-product-details, .js-product-details",flags:".quickview .product-flags, .page-product:not(.modal-open) .row .product-flags, .page-product:not(.modal-open) .product-container .product-flags, .quickview .js-product-flags, .page-product:not(.modal-open) .row .js-product-flags, .page-product:not(.modal-open) .js-product-container .js-product-flags"},listing:{quickview:".quick-view, .js-quick-view"},checkout:{form:".checkout-step form",currentStep:"js-current-step",step:".checkout-step",stepTitle:".step-title, .js-step-title",confirmationSelector:"#payment-confirmation button, .js-payment-confirmation",conditionsSelector:'#conditions-to-approve input[type="checkbox"], .js-conditions-to-approve',conditionAlertSelector:".js-alert-payment-conditions",additionalInformatonSelector:".js-additional-information",optionsForm:".js-payment-option-form",termsCheckboxSelector:'#conditions-to-approve input[name="conditions_to_approve[terms-and-conditions]"], .js-conditions-to-approve input[name="conditions_to_approve[terms-and-conditions]"]',paymentBinary:".payment-binary, .js-payment-binary",deliveryFormSelector:"#js-delivery",summarySelector:"#js-checkout-summary",deliveryStepSelector:"#checkout-delivery-step",editDeliveryButtonSelector:".js-edit-delivery",deliveryOption:".delivery-option, .js-delivery-option",cartPaymentStepRefresh:".js-cart-payment-step-refresh",editAddresses:".js-edit-addresses",deliveryAddressRadios:"#delivery-addresses input[type=radio], #invoice-addresses input[type=radio], .js-address-selector input[type=radio]",addressItem:".address-item, .js-address-item",addressesStep:"#checkout-addresses-step",addressItemChecked:".address-item:has(input[type=radio]:checked), .js-address-item:has(input[type=radio]:checked)",addressError:".js-address-error",notValidAddresses:"#not-valid-addresses, .js-not-valid-addresses",invoiceAddresses:"#invoice-addresses, .js-address-selector",addressForm:".js-address-form"},cart:{detailedTotals:".cart-detailed-totals, .js-cart-detailed-totals",summaryItemsSubtotal:".cart-summary-items-subtotal, .js-cart-summary-items-subtotal",summarySubTotalsContainer:".cart-summary-subtotals-container, .js-cart-summary-subtotals-container",summaryTotals:".cart-summary-totals, .js-cart-summary-totals",summaryProducts:".cart-summary-products, .js-cart-summary-products",detailedActions:".cart-detailed-actions, .js-cart-detailed-actions",voucher:".cart-voucher, .js-cart-voucher",overview:".cart-overview",summaryTop:".cart-summary-top, .js-cart-summary-top",productCustomizationId:"#product_customization_id, .js-product-customization-id",lineProductQuantity:".js-cart-line-product-quantity"}},(0,o.default)(document).ready((function(){r.default.emit("selectorsInit")}))},827:function(e,t,n){var r,o,i;o=[n(339)],void 0===(i="function"==typeof(r=function(e){var t=e.fn.init;e.fn.init=function(e){var n=Array.prototype.slice.call(arguments);"string"==typeof e&&"#"===e&&(console.warn("jQuery('#') is not a valid selector"),n[0]=[]);var r=t.apply(this,arguments);return r.selector="string"==typeof e?e:"",r},e.fn.init.prototype=e.fn,void 0!==e.fn.live&&e.isFunction(e.fn.live)||e.fn.extend({live:function(t,n,r){return this.selector&&e(document).on(t,this.selector,n,r),console.warn("jQuery.live() has been removed since jquery v1.9, please use jQuery.on() instead."),this}})})?r.apply(t,o):r)||(e.exports=i)},291:function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n,r="object"===("undefined"==typeof Reflect?"undefined":t(Reflect))?Reflect:null,o=r&&"function"==typeof r.apply?r.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};n=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,e.exports.once=function(e,t){return new Promise((function(n,r){function o(n){e.removeListener(t,i),r(n)}function i(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}m(e,t,i,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&m(e,"error",t,{once:!0})}(e,o)}))},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var s=10;function u(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+t(e))}function c(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function l(e,t,n,r){var o,i,a,s;if(u(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),a=i[t]),void 0===a)a=i[t]=n,++e._eventsCount;else if("function"==typeof a?a=i[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(o=c(e))>0&&a.length>o&&!a.warned){a.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=a.length,s=l,console&&console.warn&&console.warn(s)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=d.bind(r);return o.listener=n,r.wrapFn=o,o}function p(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):v(o,o.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function m(e,n,r,o){if("function"==typeof e.on)o.once?e.once(n,r):e.on(n,r);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+t(e));e.addEventListener(n,(function t(i){o.once&&e.removeEventListener(n,t),r(i)}))}}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return c(this)},a.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var u=i[e];if(void 0===u)return!1;if("function"==typeof u)o(u,this,t);else{var c=u.length,l=v(u,c);for(n=0;n<c;++n)o(l[n],this,t)}return!0},a.prototype.addListener=function(e,t){return l(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return l(this,e,t,!0)},a.prototype.once=function(e,t){return u(t),this.on(e,f(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,f(this,e,t)),this},a.prototype.removeListener=function(e,t){var n,r,o,i,a;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){a=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},a.prototype.listeners=function(e){return p(this,e,!0)},a.prototype.rawListeners=function(e){return p(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},a.prototype.listenerCount=h,a.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},882:function(e,t,n){var r,o;function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r=[n(339)],void 0===(o=function(e){return function(e,t){function n(t){return function(e,t){for(var n=/^(\d+)\.(\d+)\.(\d+)/,r=n.exec(e)||[],o=n.exec(t)||[],i=1;i<=3;i++){if(+r[i]>+o[i])return 1;if(+r[i]<+o[i])return-1}return 0}(e.fn.jquery,t)>=0}e.migrateVersion="3.1.0",t.console&&t.console.log&&(e&&n("3.0.0")||t.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),e.migrateWarnings&&t.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),t.console.log("JQMIGRATE: Migrate is installed"+(e.migrateMute?"":" with logging active")+", version "+e.migrateVersion));var r={};function o(n){var o=t.console;r[n]||(r[n]=!0,e.migrateWarnings.push(n),o&&o.warn&&!e.migrateMute&&(o.warn("JQMIGRATE: "+n),e.migrateTrace&&o.trace&&o.trace()))}function a(e,t,n,r){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return o(r),n},set:function(e){o(r),n=e}})}function s(e,t,n,r){e[t]=function(){return o(r),n.apply(this,arguments)}}e.migrateWarnings=[],void 0===e.migrateTrace&&(e.migrateTrace=!0),e.migrateReset=function(){r={},e.migrateWarnings.length=0},"BackCompat"===t.document.compatMode&&o("jQuery is not compatible with Quirks Mode");var u,c=e.fn.init,l=e.isNumeric,d=e.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,p=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;for(u in e.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(o("jQuery( '#' ) is not a valid selector"),t[0]=[]),c.apply(this,t)},e.fn.init.prototype=e.fn,e.find=function(e){var n=Array.prototype.slice.call(arguments);if("string"==typeof e&&f.test(e))try{t.document.querySelector(e)}catch(r){e=e.replace(p,(function(e,t,n,r){return"["+t+n+'"'+r+'"]'}));try{t.document.querySelector(e),o("Attribute selector with '#' must be quoted: "+n[0]),n[0]=e}catch(e){o("Attribute selector with '#' was not fixed: "+n[0])}}return d.apply(this,n)},d)Object.prototype.hasOwnProperty.call(d,u)&&(e.find[u]=d[u]);e.fn.size=function(){return o("jQuery.fn.size() is deprecated and removed; use the .length property"),this.length},e.parseJSON=function(){return o("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},e.isNumeric=function(t){var n,r,i=l(t),a=(r=(n=t)&&n.toString(),!e.isArray(n)&&r-parseFloat(r)+1>=0);return i!==a&&o("jQuery.isNumeric() should not be called on constructed objects"),a},n("3.3.0")&&s(e,"isWindow",(function(e){return null!=e&&e===e.window}),"jQuery.isWindow() is deprecated"),s(e,"holdReady",e.holdReady,"jQuery.holdReady is deprecated"),s(e,"unique",e.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),a(e.expr,"filters",e.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),a(e.expr,":",e.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),n("3.2.0")&&s(e,"nodeName",e.nodeName,"jQuery.nodeName is deprecated");var h=e.ajax;e.ajax=function(){var e=h.apply(this,arguments);return e.promise&&(s(e,"success",e.done,"jQXHR.success is deprecated and removed"),s(e,"error",e.fail,"jQXHR.error is deprecated and removed"),s(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e};var v=e.fn.removeAttr,m=e.fn.toggleClass,y=/\S+/g;e.fn.removeAttr=function(t){var n=this;return e.each(t.match(y),(function(t,r){e.expr.match.bool.test(r)&&(o("jQuery.fn.removeAttr no longer sets boolean properties: "+r),n.prop(r,!1))})),v.apply(this,arguments)},e.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?m.apply(this,arguments):(o("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each((function(){var n=this.getAttribute&&this.getAttribute("class")||"";n&&e.data(this,"__className__",n),this.setAttribute&&this.setAttribute("class",n||!1===t?"":e.data(this,"__className__")||"")})))};var g=!1;e.swap&&e.each(["height","width","reliableMarginRight"],(function(t,n){var r=e.cssHooks[n]&&e.cssHooks[n].get;r&&(e.cssHooks[n].get=function(){var e;return g=!0,e=r.apply(this,arguments),g=!1,e})})),e.swap=function(e,t,n,r){var i,a,s={};for(a in g||o("jQuery.swap() is undocumented and deprecated"),t)s[a]=e.style[a],e.style[a]=t[a];for(a in i=n.apply(e,r||[]),t)e.style[a]=s[a];return i};var b=e.data;e.data=function(t,n,r){var a;if(n&&"object"===i(n)&&2===arguments.length){a=e.hasData(t)&&b.call(this,t);var s={};for(var u in n)u!==e.camelCase(u)?(o("jQuery.data() always sets/gets camelCased names: "+u),a[u]=n[u]):s[u]=n[u];return b.call(this,t,s),n}return n&&"string"==typeof n&&n!==e.camelCase(n)&&(a=e.hasData(t)&&b.call(this,t))&&n in a?(o("jQuery.data() always sets/gets camelCased names: "+n),arguments.length>2&&(a[n]=r),a[n]):b.apply(this,arguments)};var x=e.Tween.prototype.run,w=function(e){return e};e.Tween.prototype.run=function(){e.easing[this.easing].length>1&&(o("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),e.easing[this.easing]=w),x.apply(this,arguments)};var k=e.fx.interval||13,C="jQuery.fx.interval is deprecated";t.requestAnimationFrame&&Object.defineProperty(e.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return t.document.hidden||o(C),k},set:function(e){o(C),k=e}});var j=e.fn.load,T=e.event.add,S=e.event.fix;e.event.props=[],e.event.fixHooks={},a(e.event.props,"concat",e.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),e.event.fix=function(t){var n,r=t.type,i=this.fixHooks[r],a=e.event.props;if(a.length)for(o("jQuery.event.props are deprecated and removed: "+a.join());a.length;)e.event.addProp(a.pop());if(i&&!i._migrated_&&(i._migrated_=!0,o("jQuery.event.fixHooks are deprecated and removed: "+r),(a=i.props)&&a.length))for(;a.length;)e.event.addProp(a.pop());return n=S.call(this,t),i&&i.filter?i.filter(n,t):n},e.event.add=function(e,n){return e===t&&"load"===n&&"complete"===t.document.readyState&&o("jQuery(window).on('load'...) called after load event occurred"),T.apply(this,arguments)},e.each(["load","unload","error"],(function(t,n){e.fn[n]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===n&&"string"==typeof e[0]?j.apply(this,e):(o("jQuery.fn."+n+"() is deprecated"),e.splice(0,0,n),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}})),e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(t,n){e.fn[n]=function(e,t){return o("jQuery.fn."+n+"() event shorthand is deprecated"),arguments.length>0?this.on(n,null,e,t):this.trigger(n)}})),e((function(){e(t.document).triggerHandler("ready")})),e.event.special.ready={setup:function(){this===t.document&&o("'ready' event is deprecated")}},e.fn.extend({bind:function(e,t,n){return o("jQuery.fn.bind() is deprecated"),this.on(e,null,t,n)},unbind:function(e,t){return o("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,n,r){return o("jQuery.fn.delegate() is deprecated"),this.on(t,e,n,r)},undelegate:function(e,t,n){return o("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return o("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});var A=e.fn.offset;e.fn.offset=function(){var n,r=this[0],i={top:0,left:0};return r&&r.nodeType?(n=(r.ownerDocument||t.document).documentElement,e.contains(n,r)?A.apply(this,arguments):(o("jQuery.fn.offset() requires an element connected to a document"),i)):(o("jQuery.fn.offset() requires a valid DOM element"),i)};var E=e.param;e.param=function(t,n){var r=e.ajaxSettings&&e.ajaxSettings.traditional;return void 0===n&&r&&(o("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),n=r),E.call(this,t,n)};var _=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return o("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),_.apply(this,arguments)};var N=e.Deferred,q=[["resolve","done",e.Callbacks("once memory"),e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory"),e.Callbacks("memory")]];return e.Deferred=function(t){var n=N(),r=n.promise();return n.pipe=r.pipe=function(){var t=arguments;return o("deferred.pipe() is deprecated"),e.Deferred((function(o){e.each(q,(function(i,a){var s=e.isFunction(t[i])&&t[i];n[a[1]]((function(){var t=s&&s.apply(this,arguments);t&&e.isFunction(t.promise)?t.promise().done(o.resolve).fail(o.reject).progress(o.notify):o[a[0]+"With"](this===r?o.promise():this,s?[t]:arguments)}))})),t=null})).promise()},t&&t.call(n,n),n},e.Deferred.exceptionHook=N.exceptionHook,e}(e,window)}.apply(t,r))||(e.exports=o)},165:function(e,t,n){var r,o;r=[n(339)],void 0===(o=function(e){return function(e){function t(e){void 0===e&&(e=window.navigator.userAgent),e=e.toLowerCase();var t=/(edge)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(chrome)[ \/]([\w.]+)/.exec(e)||/(iemobile)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[],n=/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[],r={},o={browser:t[5]||t[3]||t[1]||"",version:t[2]||t[4]||"0",versionNumber:t[4]||t[2]||"0",platform:n[0]||""};if(o.browser&&(r[o.browser]=!0,r.version=o.version,r.versionNumber=parseInt(o.versionNumber,10)),o.platform&&(r[o.platform]=!0),(r.android||r.bb||r.blackberry||r.ipad||r.iphone||r.ipod||r.kindle||r.playbook||r.silk||r["windows phone"])&&(r.mobile=!0),(r.cros||r.mac||r.linux||r.win)&&(r.desktop=!0),(r.chrome||r.opr||r.safari)&&(r.webkit=!0),r.rv||r.iemobile){var i="msie";o.browser=i,r[i]=!0}if(r.edge){delete r.edge;var a="msedge";o.browser=a,r.msedge=!0}if(r.safari&&r.blackberry){var s="blackberry";o.browser=s,r.blackberry=!0}if(r.safari&&r.playbook){var u="playbook";o.browser=u,r.playbook=!0}if(r.bb){var c="blackberry";o.browser=c,r[c]=!0}if(r.opr){var l="opera";o.browser=l,r.opera=!0}if(r.safari&&r.android){var d="android";o.browser=d,r.android=!0}if(r.safari&&r.kindle){var f="kindle";o.browser=f,r.kindle=!0}if(r.safari&&r.silk){var p="silk";o.browser=p,r.silk=!0}return r.name=o.browser,r.platform=o.platform,r}return window.jQBrowser=t(window.navigator.userAgent),window.jQBrowser.uaMatch=t,e&&(e.browser=window.jQBrowser),window.jQBrowser}(e)}.apply(t,r))||(e.exports=o)},339:function(e,t,n){var r,o,i;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e=n.nmd(e),o="undefined"!=typeof window?window:void 0,i=function(n,o){var i=[],s=Object.getPrototypeOf,u=i.slice,c=i.flat?function(e){return i.flat.call(e)}:function(e){return i.concat.apply([],e)},l=i.push,d=i.indexOf,f={},p=f.toString,h=f.hasOwnProperty,v=h.toString,m=v.call(Object),y={},g=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},b=function(e){return null!=e&&e===e.window},x=n.document,w={type:!0,src:!0,nonce:!0,noModule:!0};function k(e,t,n){var r,o,i=(n=n||x).createElement("script");if(i.text=e,t)for(r in w)(o=t[r]||t.getAttribute&&t.getAttribute(r))&&i.setAttribute(r,o);n.head.appendChild(i).parentNode.removeChild(i)}function C(e){return null==e?e+"":"object"===a(e)||"function"==typeof e?f[p.call(e)]||"object":a(e)}var j="3.5.1",T=function e(t,n){return new e.fn.init(t,n)};function S(e){var t=!!e&&"length"in e&&e.length,n=C(e);return!g(e)&&!b(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}T.fn=T.prototype={jquery:j,constructor:T,length:0,toArray:function(){return u.call(this)},get:function(e){return null==e?u.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=T.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return T.each(this,e)},map:function(e){return this.pushStack(T.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(u.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(T.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:i.sort,splice:i.splice},T.extend=T.fn.extend=function(){var e,t,n,r,o,i,s=arguments[0]||{},u=1,c=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[u]||{},u++),"object"===a(s)||g(s)||(s={}),u===c&&(s=this,u--);u<c;u++)if(null!=(e=arguments[u]))for(t in e)r=e[t],"__proto__"!==t&&s!==r&&(l&&r&&(T.isPlainObject(r)||(o=Array.isArray(r)))?(n=s[t],i=o&&!Array.isArray(n)?[]:o||T.isPlainObject(n)?n:{},o=!1,s[t]=T.extend(l,i,r)):void 0!==r&&(s[t]=r));return s},T.extend({expando:"jQuery"+(j+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==p.call(e)||(t=s(e))&&("function"!=typeof(n=h.call(t,"constructor")&&t.constructor)||v.call(n)!==m))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){k(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(S(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(S(Object(e))?T.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:d.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,o=e.length;r<n;r++)e[o++]=t[r];return e.length=o,e},grep:function(e,t,n){for(var r=[],o=0,i=e.length,a=!n;o<i;o++)!t(e[o],o)!==a&&r.push(e[o]);return r},map:function(e,t,n){var r,o,i=0,a=[];if(S(e))for(r=e.length;i<r;i++)null!=(o=t(e[i],i,n))&&a.push(o);else for(i in e)null!=(o=t(e[i],i,n))&&a.push(o);return c(a)},guid:1,support:y}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=i[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){f["[object "+t+"]"]=t.toLowerCase()}));var A=function(e){var t,n,r,o,i,a,s,u,c,l,d,f,p,h,v,m,y,g,b,x="sizzle"+1*new Date,w=e.document,k=0,C=0,j=ue(),T=ue(),S=ue(),A=ue(),E=function(e,t){return e===t&&(d=!0),0},_={}.hasOwnProperty,N=[],q=N.pop,D=N.push,L=N.push,O=N.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",H="[\\x20\\t\\r\\n\\f]",R="(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",I="\\[[\\x20\\t\\r\\n\\f]*("+R+")(?:"+H+"*([*^$|!~]?=)"+H+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+H+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",F=new RegExp(H+"+","g"),$=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),Q=new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),B=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),z=new RegExp(H+"|>"),U=new RegExp(W),X=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},G=/HTML$/i,J=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,oe=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},ie=function(){f()},ae=xe((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{L.apply(N=O.call(w.childNodes),w.childNodes),N[w.childNodes.length].nodeType}catch(e){L={apply:N.length?function(e,t){D.apply(e,O.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function se(e,t,r,o){var i,s,c,l,d,h,y,g=t&&t.ownerDocument,w=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return r;if(!o&&(f(t),t=t||p,v)){if(11!==w&&(d=Z.exec(e)))if(i=d[1]){if(9===w){if(!(c=t.getElementById(i)))return r;if(c.id===i)return r.push(c),r}else if(g&&(c=g.getElementById(i))&&b(t,c)&&c.id===i)return r.push(c),r}else{if(d[2])return L.apply(r,t.getElementsByTagName(e)),r;if((i=d[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(i)),r}if(n.qsa&&!A[e+" "]&&(!m||!m.test(e))&&(1!==w||"object"!==t.nodeName.toLowerCase())){if(y=e,g=t,1===w&&(z.test(e)||B.test(e))){for((g=ee.test(e)&&ye(t.parentNode)||t)===t&&n.scope||((l=t.getAttribute("id"))?l=l.replace(re,oe):t.setAttribute("id",l=x)),s=(h=a(e)).length;s--;)h[s]=(l?"#"+l:":scope")+" "+be(h[s]);y=h.join(",")}try{return L.apply(r,g.querySelectorAll(y)),r}catch(t){A(e,!0)}finally{l===x&&t.removeAttribute("id")}}}return u(e.replace($,"$1"),t,r,o)}function ue(){var e=[];return function t(n,o){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=o}}function ce(e){return e[x]=!0,e}function le(e){var t=p.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function de(e,t){for(var n=e.split("|"),o=n.length;o--;)r.attrHandle[n[o]]=t}function fe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function pe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function he(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ve(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ae(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function me(e){return ce((function(t){return t=+t,ce((function(n,r){for(var o,i=e([],n.length,t),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))}))}))}function ye(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!G.test(t||n&&n.nodeName||"HTML")},f=se.setDocument=function(e){var t,o,a=e?e.ownerDocument||e:w;return a!=p&&9===a.nodeType&&a.documentElement?(h=(p=a).documentElement,v=!i(p),w!=p&&(o=p.defaultView)&&o.top!==o&&(o.addEventListener?o.addEventListener("unload",ie,!1):o.attachEvent&&o.attachEvent("onunload",ie)),n.scope=le((function(e){return h.appendChild(e).appendChild(p.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.attributes=le((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=le((function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=K.test(p.getElementsByClassName),n.getById=le((function(e){return h.appendChild(e).id=x,!p.getElementsByName||!p.getElementsByName(x).length})),n.getById?(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&v){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&v){var n,r,o,i=t.getElementById(e);if(i){if((n=i.getAttributeNode("id"))&&n.value===e)return[i];for(o=t.getElementsByName(e),r=0;i=o[r++];)if((n=i.getAttributeNode("id"))&&n.value===e)return[i]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&v)return t.getElementsByClassName(e)},y=[],m=[],(n.qsa=K.test(p.querySelectorAll))&&(le((function(e){var t;h.appendChild(e).innerHTML="<a id='"+x+"'></a><select id='"+x+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|"+M+")"),e.querySelectorAll("[id~="+x+"-]").length||m.push("~="),(t=p.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+x+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),le((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")}))),(n.matchesSelector=K.test(g=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&le((function(e){n.disconnectedMatch=g.call(e,"*"),g.call(e,"[s!='']:x"),y.push("!=",W)})),m=m.length&&new RegExp(m.join("|")),y=y.length&&new RegExp(y.join("|")),t=K.test(h.compareDocumentPosition),b=t||K.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},E=t?function(e,t){if(e===t)return d=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e==p||e.ownerDocument==w&&b(w,e)?-1:t==p||t.ownerDocument==w&&b(w,t)?1:l?P(l,e)-P(l,t):0:4&r?-1:1)}:function(e,t){if(e===t)return d=!0,0;var n,r=0,o=e.parentNode,i=t.parentNode,a=[e],s=[t];if(!o||!i)return e==p?-1:t==p?1:o?-1:i?1:l?P(l,e)-P(l,t):0;if(o===i)return fe(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?fe(a[r],s[r]):a[r]==w?-1:s[r]==w?1:0},p):p},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(f(e),n.matchesSelector&&v&&!A[t+" "]&&(!y||!y.test(t))&&(!m||!m.test(t)))try{var r=g.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){A(t,!0)}return se(t,p,null,[e]).length>0},se.contains=function(e,t){return(e.ownerDocument||e)!=p&&f(e),b(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=p&&f(e);var o=r.attrHandle[t.toLowerCase()],i=o&&_.call(r.attrHandle,t.toLowerCase())?o(e,t,!v):void 0;return void 0!==i?i:n.attributes||!v?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},se.escape=function(e){return(e+"").replace(re,oe)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,r=[],o=0,i=0;if(d=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(E),d){for(;t=e[i++];)t===e[i]&&(o=r.push(i));for(;o--;)e.splice(r[o],1)}return l=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=o(t);return n},(r=se.selectors={cacheLength:50,createPseudo:ce,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&U.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=j[e+" "];return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"("+H+"|$)"))&&j(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var o=se.attr(r,e);return null==o?"!="===t:!t||(o+="","="===t?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o.replace(F," ")+" ").indexOf(n)>-1:"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,u){var c,l,d,f,p,h,v=i!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),g=!u&&!s,b=!1;if(m){if(i){for(;v;){for(f=t;f=f[v];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=v="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&g){for(b=(p=(c=(l=(d=(f=m)[x]||(f[x]={}))[f.uniqueID]||(d[f.uniqueID]={}))[e]||[])[0]===k&&c[1])&&c[2],f=p&&m.childNodes[p];f=++p&&f&&f[v]||(b=p=0)||h.pop();)if(1===f.nodeType&&++b&&f===t){l[e]=[k,p,b];break}}else if(g&&(b=p=(c=(l=(d=(f=t)[x]||(f[x]={}))[f.uniqueID]||(d[f.uniqueID]={}))[e]||[])[0]===k&&c[1]),!1===b)for(;(f=++p&&f&&f[v]||(b=p=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++b||(g&&((l=(d=f[x]||(f[x]={}))[f.uniqueID]||(d[f.uniqueID]={}))[e]=[k,b]),f!==t)););return(b-=o)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,t){var n,o=r.pseudos[e]||r.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return o[x]?o(t):o.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ce((function(e,n){for(var r,i=o(e,t),a=i.length;a--;)e[r=P(e,i[a])]=!(n[r]=i[a])})):function(e){return o(e,0,n)}):o}},pseudos:{not:ce((function(e){var t=[],n=[],r=s(e.replace($,"$1"));return r[x]?ce((function(e,t,n,o){for(var i,a=r(e,null,o,[]),s=e.length;s--;)(i=a[s])&&(e[s]=!(t[s]=i))})):function(e,o,i){return t[0]=e,r(t,null,i,n),t[0]=null,!n.pop()}})),has:ce((function(e){return function(t){return se(e,t).length>0}})),contains:ce((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||o(t)).indexOf(e)>-1}})),lang:ce((function(e){return X.test(e||"")||se.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=v?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ve(!1),disabled:ve(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return J.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:me((function(){return[0]})),last:me((function(e,t){return[t-1]})),eq:me((function(e,t,n){return[n<0?n+t:n]})),even:me((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:me((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:me((function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e})),gt:me((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e}))}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=pe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=he(t);function ge(){}function be(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function xe(e,t,n){var r=t.dir,o=t.next,i=o||r,a=n&&"parentNode"===i,s=C++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,o);return!1}:function(t,n,u){var c,l,d,f=[k,s];if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(l=(d=t[x]||(t[x]={}))[t.uniqueID]||(d[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[r]||t;else{if((c=l[i])&&c[0]===k&&c[1]===s)return f[2]=c[2];if(l[i]=f,f[2]=e(t,n,u))return!0}return!1}}function we(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function ke(e,t,n,r,o){for(var i,a=[],s=0,u=e.length,c=null!=t;s<u;s++)(i=e[s])&&(n&&!n(i,r,o)||(a.push(i),c&&t.push(s)));return a}function Ce(e,t,n,r,o,i){return r&&!r[x]&&(r=Ce(r)),o&&!o[x]&&(o=Ce(o,i)),ce((function(i,a,s,u){var c,l,d,f=[],p=[],h=a.length,v=i||function(e,t,n){for(var r=0,o=t.length;r<o;r++)se(e,t[r],n);return n}(t||"*",s.nodeType?[s]:s,[]),m=!e||!i&&t?v:ke(v,f,e,s,u),y=n?o||(i?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r)for(c=ke(y,p),r(c,[],s,u),l=c.length;l--;)(d=c[l])&&(y[p[l]]=!(m[p[l]]=d));if(i){if(o||e){if(o){for(c=[],l=y.length;l--;)(d=y[l])&&c.push(m[l]=d);o(null,y=[],c,u)}for(l=y.length;l--;)(d=y[l])&&(c=o?P(i,d):f[l])>-1&&(i[c]=!(a[c]=d))}}else y=ke(y===a?y.splice(h,y.length):y),o?o(null,a,y,u):L.apply(a,y)}))}function je(e){for(var t,n,o,i=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,l=xe((function(e){return e===t}),s,!0),d=xe((function(e){return P(t,e)>-1}),s,!0),f=[function(e,n,r){var o=!a&&(r||n!==c)||((t=n).nodeType?l(e,n,r):d(e,n,r));return t=null,o}];u<i;u++)if(n=r.relative[e[u].type])f=[xe(we(f),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[x]){for(o=++u;o<i&&!r.relative[e[o].type];o++);return Ce(u>1&&we(f),u>1&&be(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace($,"$1"),n,u<o&&je(e.slice(u,o)),o<i&&je(e=e.slice(o)),o<i&&be(e))}f.push(n)}return we(f)}return ge.prototype=r.filters=r.pseudos,r.setFilters=new ge,a=se.tokenize=function(e,t){var n,o,i,a,s,u,c,l=T[e+" "];if(l)return t?0:l.slice(0);for(s=e,u=[],c=r.preFilter;s;){for(a in n&&!(o=Q.exec(s))||(o&&(s=s.slice(o[0].length)||s),u.push(i=[])),n=!1,(o=B.exec(s))&&(n=o.shift(),i.push({value:n,type:o[0].replace($," ")}),s=s.slice(n.length)),r.filter)!(o=V[a].exec(s))||c[a]&&!(o=c[a](o))||(n=o.shift(),i.push({value:n,type:a,matches:o}),s=s.slice(n.length));if(!n)break}return t?s.length:s?se.error(e):T(e,u).slice(0)},s=se.compile=function(e,t){var n,o=[],i=[],s=S[e+" "];if(!s){for(t||(t=a(e)),n=t.length;n--;)(s=je(t[n]))[x]?o.push(s):i.push(s);(s=S(e,function(e,t){var n=t.length>0,o=e.length>0,i=function(i,a,s,u,l){var d,h,m,y=0,g="0",b=i&&[],x=[],w=c,C=i||o&&r.find.TAG("*",l),j=k+=null==w?1:Math.random()||.1,T=C.length;for(l&&(c=a==p||a||l);g!==T&&null!=(d=C[g]);g++){if(o&&d){for(h=0,a||d.ownerDocument==p||(f(d),s=!v);m=e[h++];)if(m(d,a||p,s)){u.push(d);break}l&&(k=j)}n&&((d=!m&&d)&&y--,i&&b.push(d))}if(y+=g,n&&g!==y){for(h=0;m=t[h++];)m(b,x,a,s);if(i){if(y>0)for(;g--;)b[g]||x[g]||(x[g]=q.call(u));x=ke(x)}L.apply(u,x),l&&!i&&x.length>0&&y+t.length>1&&se.uniqueSort(u)}return l&&(k=j,c=w),b};return n?ce(i):i}(i,o))).selector=e}return s},u=se.select=function(e,t,n,o){var i,u,c,l,d,f="function"==typeof e&&e,p=!o&&a(e=f.selector||e);if(n=n||[],1===p.length){if((u=p[0]=p[0].slice(0)).length>2&&"ID"===(c=u[0]).type&&9===t.nodeType&&v&&r.relative[u[1].type]){if(!(t=(r.find.ID(c.matches[0].replace(te,ne),t)||[])[0]))return n;f&&(t=t.parentNode),e=e.slice(u.shift().value.length)}for(i=V.needsContext.test(e)?0:u.length;i--&&(c=u[i],!r.relative[l=c.type]);)if((d=r.find[l])&&(o=d(c.matches[0].replace(te,ne),ee.test(u[0].type)&&ye(t.parentNode)||t))){if(u.splice(i,1),!(e=o.length&&be(u)))return L.apply(n,o),n;break}}return(f||s(e,p))(o,t,!v,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},n.sortStable=x.split("").sort(E).join("")===x,n.detectDuplicates=!!d,f(),n.sortDetached=le((function(e){return 1&e.compareDocumentPosition(p.createElement("fieldset"))})),le((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||de("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&le((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||de("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),le((function(e){return null==e.getAttribute("disabled")}))||de(M,(function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null})),se}(n);T.find=A,(T.expr=A.selectors)[":"]=T.expr.pseudos,T.uniqueSort=T.unique=A.uniqueSort,T.text=A.getText,T.isXMLDoc=A.isXML,T.contains=A.contains,T.escapeSelector=A.escape;var E=function(e,t,n){for(var r=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&T(e).is(n))break;r.push(e)}return r},_=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=T.expr.match.needsContext;function q(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function L(e,t,n){return g(t)?T.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?T.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?T.grep(e,(function(e){return d.call(t,e)>-1!==n})):T.filter(t,e,n)}T.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?T.find.matchesSelector(r,e)?[r]:[]:T.find.matches(e,T.grep(t,(function(e){return 1===e.nodeType})))},T.fn.extend({find:function(e){var t,n,r=this.length,o=this;if("string"!=typeof e)return this.pushStack(T(e).filter((function(){for(t=0;t<r;t++)if(T.contains(o[t],this))return!0})));for(n=this.pushStack([]),t=0;t<r;t++)T.find(e,o[t],n);return r>1?T.uniqueSort(n):n},filter:function(e){return this.pushStack(L(this,e||[],!1))},not:function(e){return this.pushStack(L(this,e||[],!0))},is:function(e){return!!L(this,"string"==typeof e&&N.test(e)?T(e):e||[],!1).length}});var O,P=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init=function(e,t,n){var r,o;if(!e)return this;if(n=n||O,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:P.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof T?t[0]:t,T.merge(this,T.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:x,!0)),D.test(r[1])&&T.isPlainObject(t))for(r in t)g(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(o=x.getElementById(r[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(T):T.makeArray(e,this)}).prototype=T.fn,O=T(x);var M=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function R(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}T.fn.extend({has:function(e){var t=T(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(T.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,o=this.length,i=[],a="string"!=typeof e&&T(e);if(!N.test(e))for(;r<o;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&T.find.matchesSelector(n,e))){i.push(n);break}return this.pushStack(i.length>1?T.uniqueSort(i):i)},index:function(e){return e?"string"==typeof e?d.call(T(e),this[0]):d.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),T.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return E(e,"parentNode")},parentsUntil:function(e,t,n){return E(e,"parentNode",n)},next:function(e){return R(e,"nextSibling")},prev:function(e){return R(e,"previousSibling")},nextAll:function(e){return E(e,"nextSibling")},prevAll:function(e){return E(e,"previousSibling")},nextUntil:function(e,t,n){return E(e,"nextSibling",n)},prevUntil:function(e,t,n){return E(e,"previousSibling",n)},siblings:function(e){return _((e.parentNode||{}).firstChild,e)},children:function(e){return _(e.firstChild)},contents:function(e){return null!=e.contentDocument&&s(e.contentDocument)?e.contentDocument:(q(e,"template")&&(e=e.content||e),T.merge([],e.childNodes))}},(function(e,t){T.fn[e]=function(n,r){var o=T.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(o=T.filter(r,o)),this.length>1&&(H[e]||T.uniqueSort(o),M.test(e)&&o.reverse()),this.pushStack(o)}}));var I=/[^\x20\t\r\n\f]+/g;function W(e){return e}function F(e){throw e}function $(e,t,n,r){var o;try{e&&g(o=e.promise)?o.call(e).done(t).fail(n):e&&g(o=e.then)?o.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}T.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return T.each(e.match(I)||[],(function(e,n){t[n]=!0})),t}(e):T.extend({},e);var t,n,r,o,i=[],a=[],s=-1,u=function(){for(o=o||e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<i.length;)!1===i[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=i.length,n=!1);e.memory||(n=!1),t=!1,o&&(i=n?[]:"")},c={add:function(){return i&&(n&&!t&&(s=i.length-1,a.push(n)),function t(n){T.each(n,(function(n,r){g(r)?e.unique&&c.has(r)||i.push(r):r&&r.length&&"string"!==C(r)&&t(r)}))}(arguments),n&&!t&&u()),this},remove:function(){return T.each(arguments,(function(e,t){for(var n;(n=T.inArray(t,i,n))>-1;)i.splice(n,1),n<=s&&s--})),this},has:function(e){return e?T.inArray(e,i)>-1:i.length>0},empty:function(){return i&&(i=[]),this},disable:function(){return o=a=[],i=n="",this},disabled:function(){return!i},lock:function(){return o=a=[],n||t||(i=n=""),this},locked:function(){return!!o},fireWith:function(e,n){return o||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},T.extend({Deferred:function(e){var t=[["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],r="pending",o={state:function(){return r},always:function(){return i.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},pipe:function(){var e=arguments;return T.Deferred((function(n){T.each(t,(function(t,r){var o=g(e[r[4]])&&e[r[4]];i[r[1]]((function(){var e=o&&o.apply(this,arguments);e&&g(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,o?[e]:arguments)}))})),e=null})).promise()},then:function(e,r,o){var i=0;function s(e,t,r,o){return function(){var u=this,c=arguments,l=function(){var n,l;if(!(e<i)){if((n=r.apply(u,c))===t.promise())throw new TypeError("Thenable self-resolution");l=n&&("object"===a(n)||"function"==typeof n)&&n.then,g(l)?o?l.call(n,s(i,t,W,o),s(i,t,F,o)):(i++,l.call(n,s(i,t,W,o),s(i,t,F,o),s(i,t,W,t.notifyWith))):(r!==W&&(u=void 0,c=[n]),(o||t.resolveWith)(u,c))}},d=o?l:function(){try{l()}catch(n){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(n,d.stackTrace),e+1>=i&&(r!==F&&(u=void 0,c=[n]),t.rejectWith(u,c))}};e?d():(T.Deferred.getStackHook&&(d.stackTrace=T.Deferred.getStackHook()),n.setTimeout(d))}}return T.Deferred((function(n){t[0][3].add(s(0,n,g(o)?o:W,n.notifyWith)),t[1][3].add(s(0,n,g(e)?e:W)),t[2][3].add(s(0,n,g(r)?r:F))})).promise()},promise:function(e){return null!=e?T.extend(e,o):o}},i={};return T.each(t,(function(e,n){var a=n[2],s=n[5];o[n[1]]=a.add,s&&a.add((function(){r=s}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),a.add(n[3].fire),i[n[0]]=function(){return i[n[0]+"With"](this===i?void 0:this,arguments),this},i[n[0]+"With"]=a.fireWith})),o.promise(i),e&&e.call(i,i),i},when:function(e){var t=arguments.length,n=t,r=Array(n),o=u.call(arguments),i=T.Deferred(),a=function(e){return function(n){r[e]=this,o[e]=arguments.length>1?u.call(arguments):n,--t||i.resolveWith(r,o)}};if(t<=1&&($(e,i.done(a(n)).resolve,i.reject,!t),"pending"===i.state()||g(o[n]&&o[n].then)))return i.then();for(;n--;)$(o[n],a(n),i.reject);return i.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&Q.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},T.readyException=function(e){n.setTimeout((function(){throw e}))};var B=T.Deferred();function z(){x.removeEventListener("DOMContentLoaded",z),n.removeEventListener("load",z),T.ready()}T.fn.ready=function(e){return B.then(e).catch((function(e){T.readyException(e)})),this},T.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--T.readyWait:T.isReady)||(T.isReady=!0,!0!==e&&--T.readyWait>0||B.resolveWith(x,[T]))}}),T.ready.then=B.then,"complete"===x.readyState||"loading"!==x.readyState&&!x.documentElement.doScroll?n.setTimeout(T.ready):(x.addEventListener("DOMContentLoaded",z),n.addEventListener("load",z));var U=function e(t,n,r,o,i,a,s){var u=0,c=t.length,l=null==r;if("object"===C(r))for(u in i=!0,r)e(t,n,u,r[u],!0,a,s);else if(void 0!==o&&(i=!0,g(o)||(s=!0),l&&(s?(n.call(t,o),n=null):(l=n,n=function(e,t,n){return l.call(T(e),n)})),n))for(;u<c;u++)n(t[u],r,s?o:o.call(t[u],u,n(t[u],r)));return i?t:l?n.call(t):c?n(t[0],r):a},X=/^-ms-/,V=/-([a-z])/g;function G(e,t){return t.toUpperCase()}function J(e){return e.replace(X,"ms-").replace(V,G)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function K(){this.expando=T.expando+K.uid++}K.uid=1,K.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,o=this.cache(e);if("string"==typeof t)o[J(t)]=n;else for(r in t)o[J(r)]=t[r];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][J(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(J):(t=J(t))in r?[t]:t.match(I)||[]).length;for(;n--;)delete r[t[n]]}(void 0===t||T.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!T.isEmptyObject(t)}};var Z=new K,ee=new K,te=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ne=/[A-Z]/g;function re(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ne,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:te.test(e)?JSON.parse(e):e)}(n)}catch(e){}ee.set(e,t,n)}else n=void 0;return n}T.extend({hasData:function(e){return ee.hasData(e)||Z.hasData(e)},data:function(e,t,n){return ee.access(e,t,n)},removeData:function(e,t){ee.remove(e,t)},_data:function(e,t,n){return Z.access(e,t,n)},_removeData:function(e,t){Z.remove(e,t)}}),T.fn.extend({data:function(e,t){var n,r,o,i=this[0],s=i&&i.attributes;if(void 0===e){if(this.length&&(o=ee.get(i),1===i.nodeType&&!Z.get(i,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(r=s[n].name).indexOf("data-")&&(r=J(r.slice(5)),re(i,r,o[r]));Z.set(i,"hasDataAttrs",!0)}return o}return"object"===a(e)?this.each((function(){ee.set(this,e)})):U(this,(function(t){var n;if(i&&void 0===t)return void 0!==(n=ee.get(i,e))||void 0!==(n=re(i,e))?n:void 0;this.each((function(){ee.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){ee.remove(this,e)}))}}),T.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Z.get(e,t),n&&(!r||Array.isArray(n)?r=Z.access(e,t,T.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){var n=T.queue(e,t=t||"fx"),r=n.length,o=n.shift(),i=T._queueHooks(e,t);"inprogress"===o&&(o=n.shift(),r--),o&&("fx"===t&&n.unshift("inprogress"),delete i.stop,o.call(e,(function(){T.dequeue(e,t)}),i)),!r&&i&&i.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Z.get(e,n)||Z.access(e,n,{empty:T.Callbacks("once memory").add((function(){Z.remove(e,[t+"queue",n])}))})}}),T.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?T.queue(this[0],e):void 0===t?this:this.each((function(){var n=T.queue(this,e,t);T._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&T.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){T.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,o=T.Deferred(),i=this,a=this.length,s=function(){--r||o.resolveWith(i,[i])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Z.get(i[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),o.promise(t)}});var oe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+oe+")([a-z%]*)$","i"),ae=["Top","Right","Bottom","Left"],se=x.documentElement,ue=function(e){return T.contains(e.ownerDocument,e)},ce={composed:!0};se.getRootNode&&(ue=function(e){return T.contains(e.ownerDocument,e)||e.getRootNode(ce)===e.ownerDocument});var le=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ue(e)&&"none"===T.css(e,"display")};function de(e,t,n,r){var o,i,a=20,s=r?function(){return r.cur()}:function(){return T.css(e,t,"")},u=s(),c=n&&n[3]||(T.cssNumber[t]?"":"px"),l=e.nodeType&&(T.cssNumber[t]||"px"!==c&&+u)&&ie.exec(T.css(e,t));if(l&&l[3]!==c){for(u/=2,c=c||l[3],l=+u||1;a--;)T.style(e,t,l+c),(1-i)*(1-(i=s()/u||.5))<=0&&(a=0),l/=i;T.style(e,t,(l*=2)+c),n=n||[]}return n&&(l=+l||+u||0,o=n[1]?l+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=l,r.end=o)),o}var fe={};function pe(e){var t,n=e.ownerDocument,r=e.nodeName,o=fe[r];return o||(t=n.body.appendChild(n.createElement(r)),o=T.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),fe[r]=o,o)}function he(e,t){for(var n,r,o=[],i=0,a=e.length;i<a;i++)(r=e[i]).style&&(n=r.style.display,t?("none"===n&&(o[i]=Z.get(r,"display")||null,o[i]||(r.style.display="")),""===r.style.display&&le(r)&&(o[i]=pe(r))):"none"!==n&&(o[i]="none",Z.set(r,"display",n)));for(i=0;i<a;i++)null!=o[i]&&(e[i].style.display=o[i]);return e}T.fn.extend({show:function(){return he(this,!0)},hide:function(){return he(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){le(this)?T(this).show():T(this).hide()}))}});var ve,me,ye=/^(?:checkbox|radio)$/i,ge=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,be=/^$|^module$|\/(?:java|ecma)script/i;ve=x.createDocumentFragment().appendChild(x.createElement("div")),(me=x.createElement("input")).setAttribute("type","radio"),me.setAttribute("checked","checked"),me.setAttribute("name","t"),ve.appendChild(me),y.checkClone=ve.cloneNode(!0).cloneNode(!0).lastChild.checked,ve.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ve.cloneNode(!0).lastChild.defaultValue,ve.innerHTML="<option></option>",y.option=!!ve.lastChild;var xe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function we(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&q(e,t)?T.merge([e],n):n}function ke(e,t){for(var n=0,r=e.length;n<r;n++)Z.set(e[n],"globalEval",!t||Z.get(t[n],"globalEval"))}xe.tbody=xe.tfoot=xe.colgroup=xe.caption=xe.thead,xe.th=xe.td,y.option||(xe.optgroup=xe.option=[1,"<select multiple='multiple'>","</select>"]);var Ce=/<|&#?\w+;/;function je(e,t,n,r,o){for(var i,a,s,u,c,l,d=t.createDocumentFragment(),f=[],p=0,h=e.length;p<h;p++)if((i=e[p])||0===i)if("object"===C(i))T.merge(f,i.nodeType?[i]:i);else if(Ce.test(i)){for(a=a||d.appendChild(t.createElement("div")),s=(ge.exec(i)||["",""])[1].toLowerCase(),u=xe[s]||xe._default,a.innerHTML=u[1]+T.htmlPrefilter(i)+u[2],l=u[0];l--;)a=a.lastChild;T.merge(f,a.childNodes),(a=d.firstChild).textContent=""}else f.push(t.createTextNode(i));for(d.textContent="",p=0;i=f[p++];)if(r&&T.inArray(i,r)>-1)o&&o.push(i);else if(c=ue(i),a=we(d.appendChild(i),"script"),c&&ke(a),n)for(l=0;i=a[l++];)be.test(i.type||"")&&n.push(i);return d}var Te=/^key/,Se=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ae=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function _e(){return!1}function Ne(e,t){return e===function(){try{return x.activeElement}catch(e){}}()==("focus"===t)}function qe(e,t,n,r,o,i){var s,u;if("object"===a(t)){for(u in"string"!=typeof n&&(r=r||n,n=void 0),t)qe(e,u,n,r,t[u],i);return e}if(null==r&&null==o?(o=n,r=n=void 0):null==o&&("string"==typeof n?(o=r,r=void 0):(o=r,r=n,n=void 0)),!1===o)o=_e;else if(!o)return e;return 1===i&&(s=o,(o=function(e){return T().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=T.guid++)),e.each((function(){T.event.add(this,t,o,r,n)}))}function De(e,t,n){n?(Z.set(e,t,!1),T.event.add(e,t,{namespace:!1,handler:function(e){var r,o,i=Z.get(this,t);if(1&e.isTrigger&&this[t]){if(i.length)(T.event.special[t]||{}).delegateType&&e.stopPropagation();else if(i=u.call(arguments),Z.set(this,t,i),r=n(this,t),this[t](),i!==(o=Z.get(this,t))||r?Z.set(this,t,!1):o={},i!==o)return e.stopImmediatePropagation(),e.preventDefault(),o.value}else i.length&&(Z.set(this,t,{value:T.event.trigger(T.extend(i[0],T.Event.prototype),i.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Z.get(e,t)&&T.event.add(e,t,Ee)}T.event={global:{},add:function(e,t,n,r,o){var i,a,s,u,c,l,d,f,p,h,v,m=Z.get(e);if(Y(e))for(n.handler&&(n=(i=n).handler,o=i.selector),o&&T.find.matchesSelector(se,o),n.guid||(n.guid=T.guid++),(u=m.events)||(u=m.events=Object.create(null)),(a=m.handle)||(a=m.handle=function(t){return T.event.triggered!==t.type?T.event.dispatch.apply(e,arguments):void 0}),c=(t=(t||"").match(I)||[""]).length;c--;)p=v=(s=Ae.exec(t[c])||[])[1],h=(s[2]||"").split(".").sort(),p&&(d=T.event.special[p]||{},p=(o?d.delegateType:d.bindType)||p,d=T.event.special[p]||{},l=T.extend({type:p,origType:v,data:r,handler:n,guid:n.guid,selector:o,needsContext:o&&T.expr.match.needsContext.test(o),namespace:h.join(".")},i),(f=u[p])||((f=u[p]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(p,a)),d.add&&(d.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),o?f.splice(f.delegateCount++,0,l):f.push(l),T.event.global[p]=!0)},remove:function(e,t,n,r,o){var i,a,s,u,c,l,d,f,p,h,v,m=Z.hasData(e)&&Z.get(e);if(m&&(u=m.events)){for(c=(t=(t||"").match(I)||[""]).length;c--;)if(p=v=(s=Ae.exec(t[c])||[])[1],h=(s[2]||"").split(".").sort(),p){for(d=T.event.special[p]||{},f=u[p=(r?d.delegateType:d.bindType)||p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=i=f.length;i--;)l=f[i],!o&&v!==l.origType||n&&n.guid!==l.guid||s&&!s.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(f.splice(i,1),l.selector&&f.delegateCount--,d.remove&&d.remove.call(e,l));a&&!f.length&&(d.teardown&&!1!==d.teardown.call(e,h,m.handle)||T.removeEvent(e,p,m.handle),delete u[p])}else for(p in u)T.event.remove(e,p+t[c],n,r,!0);T.isEmptyObject(u)&&Z.remove(e,"handle events")}},dispatch:function(e){var t,n,r,o,i,a,s=new Array(arguments.length),u=T.event.fix(e),c=(Z.get(this,"events")||Object.create(null))[u.type]||[],l=T.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,u)){for(a=T.event.handlers.call(this,u,c),t=0;(o=a[t++])&&!u.isPropagationStopped();)for(u.currentTarget=o.elem,n=0;(i=o.handlers[n++])&&!u.isImmediatePropagationStopped();)u.rnamespace&&!1!==i.namespace&&!u.rnamespace.test(i.namespace)||(u.handleObj=i,u.data=i.data,void 0!==(r=((T.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,o,i,a,s=[],u=t.delegateCount,c=e.target;if(u&&c.nodeType&&!("click"===e.type&&e.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(i=[],a={},n=0;n<u;n++)void 0===a[o=(r=t[n]).selector+" "]&&(a[o]=r.needsContext?T(o,this).index(c)>-1:T.find(o,this,null,[c]).length),a[o]&&i.push(r);i.length&&s.push({elem:c,handlers:i})}return c=this,u<t.length&&s.push({elem:c,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(T.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[T.expando]?e:new T.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return ye.test(t.type)&&t.click&&q(t,"input")&&De(t,"click",Ee),!1},trigger:function(e){var t=this||e;return ye.test(t.type)&&t.click&&q(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return ye.test(t.type)&&t.click&&q(t,"input")&&Z.get(t,"click")||q(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},T.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},(T.Event=function(e,t){if(!(this instanceof T.Event))return new T.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:_e,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&T.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[T.expando]=!0}).prototype={constructor:T.Event,isDefaultPrevented:_e,isPropagationStopped:_e,isImmediatePropagationStopped:_e,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Se.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},(function(e,t){T.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}})),T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){T.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,o=e.relatedTarget,i=e.handleObj;return o&&(o===r||T.contains(r,o))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}})),T.fn.extend({on:function(e,t,n,r){return qe(this,e,t,n,r)},one:function(e,t,n,r){return qe(this,e,t,n,r,1)},off:function(e,t,n){var r,o;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,T(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"===a(e)){for(o in e)this.off(o,t,e[o]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=_e),this.each((function(){T.event.remove(this,e,n,t)}))}});var Le=/<script|<style|<link/i,Oe=/checked\s*(?:[^=]|=\s*.checked.)/i,Pe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Me(e,t){return q(e,"table")&&q(11!==t.nodeType?t:t.firstChild,"tr")&&T(e).children("tbody")[0]||e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Ie(e,t){var n,r,o,i,a,s;if(1===t.nodeType){if(Z.hasData(e)&&(s=Z.get(e).events))for(o in Z.remove(t,"handle events"),s)for(n=0,r=s[o].length;n<r;n++)T.event.add(t,o,s[o][n]);ee.hasData(e)&&(i=ee.access(e),a=T.extend({},i),ee.set(t,a))}}function We(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ye.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Fe(e,t,n,r){t=c(t);var o,i,a,s,u,l,d=0,f=e.length,p=f-1,h=t[0],v=g(h);if(v||f>1&&"string"==typeof h&&!y.checkClone&&Oe.test(h))return e.each((function(o){var i=e.eq(o);v&&(t[0]=h.call(this,o,i.html())),Fe(i,t,n,r)}));if(f&&(i=(o=je(t,e[0].ownerDocument,!1,e,r)).firstChild,1===o.childNodes.length&&(o=i),i||r)){for(s=(a=T.map(we(o,"script"),He)).length;d<f;d++)u=o,d!==p&&(u=T.clone(u,!0,!0),s&&T.merge(a,we(u,"script"))),n.call(e[d],u,d);if(s)for(l=a[a.length-1].ownerDocument,T.map(a,Re),d=0;d<s;d++)u=a[d],be.test(u.type||"")&&!Z.access(u,"globalEval")&&T.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?T._evalUrl&&!u.noModule&&T._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):k(u.textContent.replace(Pe,""),u,l))}return e}function $e(e,t,n){for(var r,o=t?T.filter(t,e):e,i=0;null!=(r=o[i]);i++)n||1!==r.nodeType||T.cleanData(we(r)),r.parentNode&&(n&&ue(r)&&ke(we(r,"script")),r.parentNode.removeChild(r));return e}T.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,o,i,a,s=e.cloneNode(!0),u=ue(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||T.isXMLDoc(e)))for(a=we(s),r=0,o=(i=we(e)).length;r<o;r++)We(i[r],a[r]);if(t)if(n)for(i=i||we(e),a=a||we(s),r=0,o=i.length;r<o;r++)Ie(i[r],a[r]);else Ie(e,s);return(a=we(s,"script")).length>0&&ke(a,!u&&we(e,"script")),s},cleanData:function(e){for(var t,n,r,o=T.event.special,i=0;void 0!==(n=e[i]);i++)if(Y(n)){if(t=n[Z.expando]){if(t.events)for(r in t.events)o[r]?T.event.remove(n,r):T.removeEvent(n,r,t.handle);n[Z.expando]=void 0}n[ee.expando]&&(n[ee.expando]=void 0)}}}),T.fn.extend({detach:function(e){return $e(this,e,!0)},remove:function(e){return $e(this,e)},text:function(e){return U(this,(function(e){return void 0===e?T.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Fe(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Me(this,e).appendChild(e)}))},prepend:function(){return Fe(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Me(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return Fe(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Fe(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(T.cleanData(we(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return T.clone(this,e,t)}))},html:function(e){return U(this,(function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Le.test(e)&&!xe[(ge.exec(e)||["",""])[1].toLowerCase()]){e=T.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(T.cleanData(we(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return Fe(this,arguments,(function(t){var n=this.parentNode;T.inArray(this,e)<0&&(T.cleanData(we(this)),n&&n.replaceChild(t,this))}),e)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){T.fn[e]=function(e){for(var n,r=[],o=T(e),i=o.length-1,a=0;a<=i;a++)n=a===i?this:this.clone(!0),T(o[a])[t](n),l.apply(r,n.get());return this.pushStack(r)}}));var Qe=new RegExp("^("+oe+")(?!px)[a-z%]+$","i"),Be=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)},ze=function(e,t,n){var r,o,i={};for(o in t)i[o]=e.style[o],e.style[o]=t[o];for(o in r=n.call(e),t)e.style[o]=i[o];return r},Ue=new RegExp(ae.join("|"),"i");function Xe(e,t,n){var r,o,i,a,s=e.style;return(n=n||Be(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ue(e)||(a=T.style(e,t)),!y.pixelBoxStyles()&&Qe.test(a)&&Ue.test(t)&&(r=s.width,o=s.minWidth,i=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=o,s.maxWidth=i)),void 0!==a?a+"":a}function Ve(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",se.appendChild(c).appendChild(l);var e=n.getComputedStyle(l);r="1%"!==e.top,u=12===t(e.marginLeft),l.style.right="60%",a=36===t(e.right),o=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),se.removeChild(c),l=null}}function t(e){return Math.round(parseFloat(e))}var r,o,i,a,s,u,c=x.createElement("div"),l=x.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,T.extend(y,{boxSizingReliable:function(){return e(),o},pixelBoxStyles:function(){return e(),a},pixelPosition:function(){return e(),r},reliableMarginLeft:function(){return e(),u},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,r,o;return null==s&&(e=x.createElement("table"),t=x.createElement("tr"),r=x.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",r.style.height="9px",se.appendChild(e).appendChild(t).appendChild(r),o=n.getComputedStyle(t),s=parseInt(o.height)>3,se.removeChild(e)),s}}))}();var Ge=["Webkit","Moz","ms"],Je=x.createElement("div").style,Ye={};function Ke(e){return T.cssProps[e]||Ye[e]||(e in Je?e:Ye[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;n--;)if((e=Ge[n]+t)in Je)return e}(e)||e)}var Ze=/^(none|table(?!-c[ea]).+)/,et=/^--/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function ot(e,t,n,r,o,i){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=T.css(e,n+ae[a],!0,o)),r?("content"===n&&(u-=T.css(e,"padding"+ae[a],!0,o)),"margin"!==n&&(u-=T.css(e,"border"+ae[a]+"Width",!0,o))):(u+=T.css(e,"padding"+ae[a],!0,o),"padding"!==n?u+=T.css(e,"border"+ae[a]+"Width",!0,o):s+=T.css(e,"border"+ae[a]+"Width",!0,o));return!r&&i>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-i-u-s-.5))||0),u}function it(e,t,n){var r=Be(e),o=(!y.boxSizingReliable()||n)&&"border-box"===T.css(e,"boxSizing",!1,r),i=o,a=Xe(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Qe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&o||!y.reliableTrDimensions()&&q(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===T.css(e,"display",!1,r))&&e.getClientRects().length&&(o="border-box"===T.css(e,"boxSizing",!1,r),(i=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+ot(e,t,n||(o?"border":"content"),i,r,a)+"px"}function at(e,t,n,r,o){return new at.prototype.init(e,t,n,r,o)}T.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Xe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,i,s,u=J(t),c=et.test(t),l=e.style;if(c||(t=Ke(u)),s=T.cssHooks[t]||T.cssHooks[u],void 0===n)return s&&"get"in s&&void 0!==(o=s.get(e,!1,r))?o:l[t];"string"===(i=a(n))&&(o=ie.exec(n))&&o[1]&&(n=de(e,t,o),i="number"),null!=n&&n==n&&("number"!==i||c||(n+=o&&o[3]||(T.cssNumber[u]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(c?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var o,i,a,s=J(t);return et.test(t)||(t=Ke(s)),(a=T.cssHooks[t]||T.cssHooks[s])&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=Xe(e,t,r)),"normal"===o&&t in nt&&(o=nt[t]),""===n||n?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o}}),T.each(["height","width"],(function(e,t){T.cssHooks[t]={get:function(e,n,r){if(n)return!Ze.test(T.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?it(e,t,r):ze(e,tt,(function(){return it(e,t,r)}))},set:function(e,n,r){var o,i=Be(e),a=!y.scrollboxSize()&&"absolute"===i.position,s=(a||r)&&"border-box"===T.css(e,"boxSizing",!1,i),u=r?ot(e,t,r,s,i):0;return s&&a&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(i[t])-ot(e,t,"border",!1,i)-.5)),u&&(o=ie.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=T.css(e,t)),rt(0,n,u)}}})),T.cssHooks.marginLeft=Ve(y.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Xe(e,"marginLeft"))||e.getBoundingClientRect().left-ze(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),T.each({margin:"",padding:"",border:"Width"},(function(e,t){T.cssHooks[e+t]={expand:function(n){for(var r=0,o={},i="string"==typeof n?n.split(" "):[n];r<4;r++)o[e+ae[r]+t]=i[r]||i[r-2]||i[0];return o}},"margin"!==e&&(T.cssHooks[e+t].set=rt)})),T.fn.extend({css:function(e,t){return U(this,(function(e,t,n){var r,o,i={},a=0;if(Array.isArray(t)){for(r=Be(e),o=t.length;a<o;a++)i[t[a]]=T.css(e,t[a],!1,r);return i}return void 0!==n?T.style(e,t,n):T.css(e,t)}),e,t,arguments.length>1)}}),T.Tween=at,at.prototype={constructor:at,init:function(e,t,n,r,o,i){this.elem=e,this.prop=n,this.easing=o||T.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=i||(T.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}},at.prototype.init.prototype=at.prototype,at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=T.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){T.fx.step[e.prop]?T.fx.step[e.prop](e):1!==e.elem.nodeType||!T.cssHooks[e.prop]&&null==e.elem.style[Ke(e.prop)]?e.elem[e.prop]=e.now:T.style(e.elem,e.prop,e.now+e.unit)}}},at.propHooks.scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},T.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},(T.fx=at.prototype.init).step={};var st,ut,ct=/^(?:toggle|show|hide)$/,lt=/queueHooks$/;function dt(){ut&&(!1===x.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(dt):n.setTimeout(dt,T.fx.interval),T.fx.tick())}function ft(){return n.setTimeout((function(){st=void 0})),st=Date.now()}function pt(e,t){var n,r=0,o={height:e};for(t=t?1:0;r<4;r+=2-t)o["margin"+(n=ae[r])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function ht(e,t,n){for(var r,o=(vt.tweeners[t]||[]).concat(vt.tweeners["*"]),i=0,a=o.length;i<a;i++)if(r=o[i].call(n,t,e))return r}function vt(e,t,n){var r,o,i=0,a=vt.prefilters.length,s=T.Deferred().always((function(){delete u.elem})),u=function(){if(o)return!1;for(var t=st||ft(),n=Math.max(0,c.startTime+c.duration-t),r=1-(n/c.duration||0),i=0,a=c.tweens.length;i<a;i++)c.tweens[i].run(r);return s.notifyWith(e,[c,r,n]),r<1&&a?n:(a||s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c]),!1)},c=s.promise({elem:e,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},n),originalProperties:t,originalOptions:n,startTime:st||ft(),duration:n.duration,tweens:[],createTween:function(t,n){var r=T.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(r),r},stop:function(t){var n=0,r=t?c.tweens.length:0;if(o)return this;for(o=!0;n<r;n++)c.tweens[n].run(1);return t?(s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c,t])):s.rejectWith(e,[c,t]),this}}),l=c.props;for(function(e,t){var n,r,o,i,a;for(n in e)if(o=t[r=J(n)],i=e[n],Array.isArray(i)&&(o=i[1],i=e[n]=i[0]),n!==r&&(e[r]=i,delete e[n]),(a=T.cssHooks[r])&&"expand"in a)for(n in i=a.expand(i),delete e[r],i)n in e||(e[n]=i[n],t[n]=o);else t[r]=o}(l,c.opts.specialEasing);i<a;i++)if(r=vt.prefilters[i].call(c,e,l,c.opts))return g(r.stop)&&(T._queueHooks(c.elem,c.opts.queue).stop=r.stop.bind(r)),r;return T.map(l,ht,c),g(c.opts.start)&&c.opts.start.call(e,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),T.fx.timer(T.extend(u,{elem:e,anim:c,queue:c.opts.queue})),c}T.Animation=T.extend(vt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return de(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(I);for(var n,r=0,o=e.length;r<o;r++)n=e[r],vt.tweeners[n]=vt.tweeners[n]||[],vt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,o,i,a,s,u,c,l,d="width"in t||"height"in t,f=this,p={},h=e.style,v=e.nodeType&&le(e),m=Z.get(e,"fxshow");for(r in n.queue||(null==(a=T._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,f.always((function(){f.always((function(){a.unqueued--,T.queue(e,"fx").length||a.empty.fire()}))}))),t)if(o=t[r],ct.test(o)){if(delete t[r],i=i||"toggle"===o,o===(v?"hide":"show")){if("show"!==o||!m||void 0===m[r])continue;v=!0}p[r]=m&&m[r]||T.style(e,r)}if((u=!T.isEmptyObject(t))||!T.isEmptyObject(p))for(r in d&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(c=m&&m.display)&&(c=Z.get(e,"display")),"none"===(l=T.css(e,"display"))&&(c?l=c:(he([e],!0),c=e.style.display||c,l=T.css(e,"display"),he([e]))),("inline"===l||"inline-block"===l&&null!=c)&&"none"===T.css(e,"float")&&(u||(f.done((function(){h.display=c})),null==c&&(l=h.display,c="none"===l?"":l)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",f.always((function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}))),u=!1,p)u||(m?"hidden"in m&&(v=m.hidden):m=Z.access(e,"fxshow",{display:c}),i&&(m.hidden=!v),v&&he([e],!0),f.done((function(){for(r in v||he([e]),Z.remove(e,"fxshow"),p)T.style(e,r,p[r])}))),u=ht(v?m[r]:0,r,f),r in m||(m[r]=u.start,v&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?vt.prefilters.unshift(e):vt.prefilters.push(e)}}),T.speed=function(e,t,n){var r=e&&"object"===a(e)?T.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return T.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in T.fx.speeds?r.duration=T.fx.speeds[r.duration]:r.duration=T.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&T.dequeue(this,r.queue)},r},T.fn.extend({fadeTo:function(e,t,n,r){return this.filter(le).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var o=T.isEmptyObject(e),i=T.speed(t,n,r),a=function(){var t=vt(this,T.extend({},e),i);(o||Z.get(this,"finish"))&&t.stop(!0)};return a.finish=a,o||!1===i.queue?this.each(a):this.queue(i.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,o=null!=e&&e+"queueHooks",i=T.timers,a=Z.get(this);if(o)a[o]&&a[o].stop&&r(a[o]);else for(o in a)a[o]&&a[o].stop&&lt.test(o)&&r(a[o]);for(o=i.length;o--;)i[o].elem!==this||null!=e&&i[o].queue!==e||(i[o].anim.stop(n),t=!1,i.splice(o,1));!t&&n||T.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=Z.get(this),r=n[e+"queue"],o=n[e+"queueHooks"],i=T.timers,a=r?r.length:0;for(n.finish=!0,T.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=i.length;t--;)i[t].elem===this&&i[t].queue===e&&(i[t].anim.stop(!0),i.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish}))}}),T.each(["toggle","show","hide"],(function(e,t){var n=T.fn[t];T.fn[t]=function(e,r,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(pt(t,!0),e,r,o)}})),T.each({slideDown:pt("show"),slideUp:pt("hide"),slideToggle:pt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){T.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),T.timers=[],T.fx.tick=function(){var e,t=0,n=T.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||T.fx.stop(),st=void 0},T.fx.timer=function(e){T.timers.push(e),T.fx.start()},T.fx.interval=13,T.fx.start=function(){ut||(ut=!0,dt())},T.fx.stop=function(){ut=null},T.fx.speeds={slow:600,fast:200,_default:400},T.fn.delay=function(e,t){return e=T.fx&&T.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,r){var o=n.setTimeout(t,e);r.stop=function(){n.clearTimeout(o)}}))},function(){var e=x.createElement("input"),t=x.createElement("select").appendChild(x.createElement("option"));e.type="checkbox",y.checkOn=""!==e.value,y.optSelected=t.selected,(e=x.createElement("input")).value="t",e.type="radio",y.radioValue="t"===e.value}();var mt,yt=T.expr.attrHandle;T.fn.extend({attr:function(e,t){return U(this,T.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){T.removeAttr(this,e)}))}}),T.extend({attr:function(e,t,n){var r,o,i=e.nodeType;if(3!==i&&8!==i&&2!==i)return void 0===e.getAttribute?T.prop(e,t,n):(1===i&&T.isXMLDoc(e)||(o=T.attrHooks[t.toLowerCase()]||(T.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void T.removeAttr(e,t):o&&"set"in o&&void 0!==(r=o.set(e,n,t))?r:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(r=o.get(e,t))?r:null==(r=T.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&q(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,o=t&&t.match(I);if(o&&1===e.nodeType)for(;n=o[r++];)e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?T.removeAttr(e,n):e.setAttribute(n,n),n}},T.each(T.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=yt[t]||T.find.attr;yt[t]=function(e,t,r){var o,i,a=t.toLowerCase();return r||(i=yt[a],yt[a]=o,o=null!=n(e,t,r)?a:null,yt[a]=i),o}}));var gt=/^(?:input|select|textarea|button)$/i,bt=/^(?:a|area)$/i;function xt(e){return(e.match(I)||[]).join(" ")}function wt(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(I)||[]}T.fn.extend({prop:function(e,t){return U(this,T.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[T.propFix[e]||e]}))}}),T.extend({prop:function(e,t,n){var r,o,i=e.nodeType;if(3!==i&&8!==i&&2!==i)return 1===i&&T.isXMLDoc(e)||(t=T.propFix[t]||t,o=T.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(r=o.set(e,n,t))?r:e[t]=n:o&&"get"in o&&null!==(r=o.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=T.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||bt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),y.optSelected||(T.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){T.propFix[this.toLowerCase()]=this})),T.fn.extend({addClass:function(e){var t,n,r,o,i,a,s,u=0;if(g(e))return this.each((function(t){T(this).addClass(e.call(this,t,wt(this)))}));if((t=kt(e)).length)for(;n=this[u++];)if(o=wt(n),r=1===n.nodeType&&" "+xt(o)+" "){for(a=0;i=t[a++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");o!==(s=xt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,o,i,a,s,u=0;if(g(e))return this.each((function(t){T(this).removeClass(e.call(this,t,wt(this)))}));if(!arguments.length)return this.attr("class","");if((t=kt(e)).length)for(;n=this[u++];)if(o=wt(n),r=1===n.nodeType&&" "+xt(o)+" "){for(a=0;i=t[a++];)for(;r.indexOf(" "+i+" ")>-1;)r=r.replace(" "+i+" "," ");o!==(s=xt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=a(e),r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each((function(n){T(this).toggleClass(e.call(this,n,wt(this),t),t)})):this.each((function(){var t,o,i,a;if(r)for(o=0,i=T(this),a=kt(e);t=a[o++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||((t=wt(this))&&Z.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Z.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+xt(wt(n))+" ").indexOf(t)>-1)return!0;return!1}});var Ct=/\r/g;T.fn.extend({val:function(e){var t,n,r,o=this[0];return arguments.length?(r=g(e),this.each((function(n){var o;1===this.nodeType&&(null==(o=r?e.call(this,n,T(this).val()):e)?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=T.map(o,(function(e){return null==e?"":e+""}))),(t=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))}))):o?(t=T.valHooks[o.type]||T.valHooks[o.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:"string"==typeof(n=o.value)?n.replace(Ct,""):null==n?"":n:void 0}}),T.extend({valHooks:{option:{get:function(e){var t=T.find.attr(e,"value");return null!=t?t:xt(T.text(e))}},select:{get:function(e){var t,n,r,o=e.options,i=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?i+1:o.length;for(r=i<0?u:a?i:0;r<u;r++)if(((n=o[r]).selected||r===i)&&!n.disabled&&(!n.parentNode.disabled||!q(n.parentNode,"optgroup"))){if(t=T(n).val(),a)return t;s.push(t)}return s},set:function(e,t){for(var n,r,o=e.options,i=T.makeArray(t),a=o.length;a--;)((r=o[a]).selected=T.inArray(T.valHooks.option.get(r),i)>-1)&&(n=!0);return n||(e.selectedIndex=-1),i}}}}),T.each(["radio","checkbox"],(function(){T.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=T.inArray(T(e).val(),t)>-1}},y.checkOn||(T.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),y.focusin="onfocusin"in n;var jt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};T.extend(T.event,{trigger:function(e,t,r,o){var i,s,u,c,l,d,f,p,v=[r||x],m=h.call(e,"type")?e.type:e,y=h.call(e,"namespace")?e.namespace.split("."):[];if(s=p=u=r=r||x,3!==r.nodeType&&8!==r.nodeType&&!jt.test(m+T.event.triggered)&&(m.indexOf(".")>-1&&(y=m.split("."),m=y.shift(),y.sort()),l=m.indexOf(":")<0&&"on"+m,(e=e[T.expando]?e:new T.Event(m,"object"===a(e)&&e)).isTrigger=o?2:3,e.namespace=y.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=null==t?[e]:T.makeArray(t,[e]),f=T.event.special[m]||{},o||!f.trigger||!1!==f.trigger.apply(r,t))){if(!o&&!f.noBubble&&!b(r)){for(c=f.delegateType||m,jt.test(c+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(r.ownerDocument||x)&&v.push(u.defaultView||u.parentWindow||n)}for(i=0;(s=v[i++])&&!e.isPropagationStopped();)p=s,e.type=i>1?c:f.bindType||m,(d=(Z.get(s,"events")||Object.create(null))[e.type]&&Z.get(s,"handle"))&&d.apply(s,t),(d=l&&s[l])&&d.apply&&Y(s)&&(e.result=d.apply(s,t),!1===e.result&&e.preventDefault());return e.type=m,o||e.isDefaultPrevented()||f._default&&!1!==f._default.apply(v.pop(),t)||!Y(r)||l&&g(r[m])&&!b(r)&&((u=r[l])&&(r[l]=null),T.event.triggered=m,e.isPropagationStopped()&&p.addEventListener(m,Tt),r[m](),e.isPropagationStopped()&&p.removeEventListener(m,Tt),T.event.triggered=void 0,u&&(r[l]=u)),e.result}},simulate:function(e,t,n){var r=T.extend(new T.Event,n,{type:e,isSimulated:!0});T.event.trigger(r,null,t)}}),T.fn.extend({trigger:function(e,t){return this.each((function(){T.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return T.event.trigger(e,t,n,!0)}}),y.focusin||T.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){T.event.simulate(t,e.target,T.event.fix(e))};T.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,o=Z.access(r,t);o||r.addEventListener(e,n,!0),Z.access(r,t,(o||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,o=Z.access(r,t)-1;o?Z.access(r,t,o):(r.removeEventListener(e,n,!0),Z.remove(r,t))}}}));var St=n.location,At={guid:Date.now()},Et=/\?/;T.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||T.error("Invalid XML: "+e),t};var _t=/\[\]$/,Nt=/\r?\n/g,qt=/^(?:submit|button|image|reset|file)$/i,Dt=/^(?:input|select|textarea|keygen)/i;function Lt(e,t,n,r){var o;if(Array.isArray(t))T.each(t,(function(t,o){n||_t.test(e)?r(e,o):Lt(e+"["+("object"===a(o)&&null!=o?t:"")+"]",o,n,r)}));else if(n||"object"!==C(t))r(e,t);else for(o in t)Lt(e+"["+o+"]",t[o],n,r)}T.param=function(e,t){var n,r=[],o=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,(function(){o(this.name,this.value)}));else for(n in e)Lt(n,e[n],t,o);return r.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=T.prop(this,"elements");return e?T.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!T(this).is(":disabled")&&Dt.test(this.nodeName)&&!qt.test(e)&&(this.checked||!ye.test(e))})).map((function(e,t){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,(function(e){return{name:t.name,value:e.replace(Nt,"\r\n")}})):{name:t.name,value:n.replace(Nt,"\r\n")}})).get()}});var Ot=/%20/g,Pt=/#.*$/,Mt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,It=/^\/\//,Wt={},Ft={},$t="*/".concat("*"),Qt=x.createElement("a");function Bt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,o=0,i=t.toLowerCase().match(I)||[];if(g(n))for(;r=i[o++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function zt(e,t,n,r){var o={},i=e===Ft;function a(s){var u;return o[s]=!0,T.each(e[s]||[],(function(e,s){var c=s(t,n,r);return"string"!=typeof c||i||o[c]?i?!(u=c):void 0:(t.dataTypes.unshift(c),a(c),!1)})),u}return a(t.dataTypes[0])||!o["*"]&&a("*")}function Ut(e,t){var n,r,o=T.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:r||(r={}))[n]=t[n]);return r&&T.extend(!0,e,r),e}Qt.href=St.href,T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:St.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ut(Ut(e,T.ajaxSettings),t):Ut(T.ajaxSettings,e)},ajaxPrefilter:Bt(Wt),ajaxTransport:Bt(Ft),ajax:function(e,t){"object"===a(e)&&(t=e,e=void 0);var r,o,i,s,u,c,l,d,f,p,h=T.ajaxSetup({},t=t||{}),v=h.context||h,m=h.context&&(v.nodeType||v.jquery)?T(v):T.event,y=T.Deferred(),g=T.Callbacks("once memory"),b=h.statusCode||{},w={},k={},C="canceled",j={readyState:0,getResponseHeader:function(e){var t;if(l){if(!s)for(s={};t=Ht.exec(i);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return l?i:null},setRequestHeader:function(e,t){return null==l&&(e=k[e.toLowerCase()]=k[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==l&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(l)j.always(e[j.status]);else for(t in e)b[t]=[b[t],e[t]];return this},abort:function(e){var t=e||C;return r&&r.abort(t),S(0,t),this}};if(y.promise(j),h.url=((e||h.url||St.href)+"").replace(It,St.protocol+"//"),h.type=t.method||t.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(I)||[""],null==h.crossDomain){c=x.createElement("a");try{c.href=h.url,c.href=c.href,h.crossDomain=Qt.protocol+"//"+Qt.host!=c.protocol+"//"+c.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=T.param(h.data,h.traditional)),zt(Wt,h,t,j),l)return j;for(f in(d=T.event&&h.global)&&0==T.active++&&T.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Rt.test(h.type),o=h.url.replace(Pt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Ot,"+")):(p=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(Et.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Mt,"$1"),p=(Et.test(o)?"&":"?")+"_="+At.guid+++p),h.url=o+p),h.ifModified&&(T.lastModified[o]&&j.setRequestHeader("If-Modified-Since",T.lastModified[o]),T.etag[o]&&j.setRequestHeader("If-None-Match",T.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||t.contentType)&&j.setRequestHeader("Content-Type",h.contentType),j.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]),h.headers)j.setRequestHeader(f,h.headers[f]);if(h.beforeSend&&(!1===h.beforeSend.call(v,j,h)||l))return j.abort();if(C="abort",g.add(h.complete),j.done(h.success),j.fail(h.error),r=zt(Ft,h,t,j)){if(j.readyState=1,d&&m.trigger("ajaxSend",[j,h]),l)return j;h.async&&h.timeout>0&&(u=n.setTimeout((function(){j.abort("timeout")}),h.timeout));try{l=!1,r.send(w,S)}catch(e){if(l)throw e;S(-1,e)}}else S(-1,"No Transport");function S(e,t,a,s){var c,f,p,x,w,k=t;l||(l=!0,u&&n.clearTimeout(u),r=void 0,i=s||"",j.readyState=e>0?4:0,c=e>=200&&e<300||304===e,a&&(x=function(e,t,n){for(var r,o,i,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(o in s)if(s[o]&&s[o].test(r)){u.unshift(o);break}if(u[0]in n)i=u[0];else{for(o in n){if(!u[0]||e.converters[o+" "+u[0]]){i=o;break}a||(a=o)}i=i||a}if(i)return i!==u[0]&&u.unshift(i),n[i]}(h,j,a)),!c&&T.inArray("script",h.dataTypes)>-1&&(h.converters["text script"]=function(){}),x=function(e,t,n,r){var o,i,a,s,u,c={},l=e.dataTypes.slice();if(l[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a];for(i=l.shift();i;)if(e.responseFields[i]&&(n[e.responseFields[i]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=i,i=l.shift())if("*"===i)i=u;else if("*"!==u&&u!==i){if(!(a=c[u+" "+i]||c["* "+i]))for(o in c)if((s=o.split(" "))[1]===i&&(a=c[u+" "+s[0]]||c["* "+s[0]])){!0===a?a=c[o]:!0!==c[o]&&(i=s[0],l.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+i}}}return{state:"success",data:t}}(h,x,j,c),c?(h.ifModified&&((w=j.getResponseHeader("Last-Modified"))&&(T.lastModified[o]=w),(w=j.getResponseHeader("etag"))&&(T.etag[o]=w)),204===e||"HEAD"===h.type?k="nocontent":304===e?k="notmodified":(k=x.state,f=x.data,c=!(p=x.error))):(p=k,!e&&k||(k="error",e<0&&(e=0))),j.status=e,j.statusText=(t||k)+"",c?y.resolveWith(v,[f,k,j]):y.rejectWith(v,[j,k,p]),j.statusCode(b),b=void 0,d&&m.trigger(c?"ajaxSuccess":"ajaxError",[j,h,c?f:p]),g.fireWith(v,[j,k]),d&&(m.trigger("ajaxComplete",[j,h]),--T.active||T.event.trigger("ajaxStop")))}return j},getJSON:function(e,t,n){return T.get(e,t,n,"json")},getScript:function(e,t){return T.get(e,void 0,t,"script")}}),T.each(["get","post"],(function(e,t){T[t]=function(e,n,r,o){return g(n)&&(o=o||r,r=n,n=void 0),T.ajax(T.extend({url:e,type:t,dataType:o,data:n,success:r},T.isPlainObject(e)&&e))}})),T.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),T._evalUrl=function(e,t,n){return T.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){T.globalEval(e,t,n)}})},T.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=T(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return g(e)?this.each((function(t){T(this).wrapInner(e.call(this,t))})):this.each((function(){var t=T(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=g(e);return this.each((function(n){T(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){T(this).replaceWith(this.childNodes)})),this}}),T.expr.pseudos.hidden=function(e){return!T.expr.pseudos.visible(e)},T.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var Xt={0:200,1223:204},Vt=T.ajaxSettings.xhr();y.cors=!!Vt&&"withCredentials"in Vt,y.ajax=Vt=!!Vt,T.ajaxTransport((function(e){var t,r;if(y.cors||Vt&&!e.crossDomain)return{send:function(o,i){var a,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a];for(a in e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),o)s.setRequestHeader(a,o[a]);t=function(e){return function(){t&&(t=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?i(0,"error"):i(s.status,s.statusText):i(Xt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=t(),r=s.onerror=s.ontimeout=t("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&n.setTimeout((function(){t&&r()}))},t=t("abort");try{s.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),T.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return T.globalEval(e),e}}}),T.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),T.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,o){t=T("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),x.head.appendChild(t[0])},abort:function(){n&&n()}}}));var Gt,Jt=[],Yt=/(=)\?(?=&|$)|\?\?/;T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Jt.pop()||T.expando+"_"+At.guid++;return this[e]=!0,e}}),T.ajaxPrefilter("json jsonp",(function(e,t,r){var o,i,a,s=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return o=e.jsonpCallback=g(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Yt,"$1"+o):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return a||T.error(o+" was not called"),a[0]},e.dataTypes[0]="json",i=n[o],n[o]=function(){a=arguments},r.always((function(){void 0===i?T(n).removeProp(o):n[o]=i,e[o]&&(e.jsonpCallback=t.jsonpCallback,Jt.push(o)),a&&g(i)&&i(a[0]),a=i=void 0})),"script"})),y.createHTMLDocument=((Gt=x.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Gt.childNodes.length),T.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=x.implementation.createHTMLDocument("")).createElement("base")).href=x.location.href,t.head.appendChild(r)):t=x),i=!n&&[],(o=D.exec(e))?[t.createElement(o[1])]:(o=je([e],t,i),i&&i.length&&T(i).remove(),T.merge([],o.childNodes)));var r,o,i},T.fn.load=function(e,t,n){var r,o,i,s=this,u=e.indexOf(" ");return u>-1&&(r=xt(e.slice(u)),e=e.slice(0,u)),g(t)?(n=t,t=void 0):t&&"object"===a(t)&&(o="POST"),s.length>0&&T.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done((function(e){i=arguments,s.html(r?T("<div>").append(T.parseHTML(e)).find(r):e)})).always(n&&function(e,t){s.each((function(){n.apply(this,i||[e.responseText,t,e])}))}),this},T.expr.pseudos.animated=function(e){return T.grep(T.timers,(function(t){return e===t.elem})).length},T.offset={setOffset:function(e,t,n){var r,o,i,a,s,u,c=T.css(e,"position"),l=T(e),d={};"static"===c&&(e.style.position="relative"),s=l.offset(),i=T.css(e,"top"),u=T.css(e,"left"),("absolute"===c||"fixed"===c)&&(i+u).indexOf("auto")>-1?(a=(r=l.position()).top,o=r.left):(a=parseFloat(i)||0,o=parseFloat(u)||0),g(t)&&(t=t.call(e,n,T.extend({},s))),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+o),"using"in t?t.using.call(e,d):("number"==typeof d.top&&(d.top+="px"),"number"==typeof d.left&&(d.left+="px"),l.css(d))}},T.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){T.offset.setOffset(this,e,t)}));var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],o={top:0,left:0};if("fixed"===T.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===T.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((o=T(e).offset()).top+=T.css(e,"borderTopWidth",!0),o.left+=T.css(e,"borderLeftWidth",!0))}return{top:t.top-o.top-T.css(r,"marginTop",!0),left:t.left-o.left-T.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===T.css(e,"position");)e=e.offsetParent;return e||se}))}}),T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;T.fn[e]=function(r){return U(this,(function(e,r,o){var i;if(b(e)?i=e:9===e.nodeType&&(i=e.defaultView),void 0===o)return i?i[t]:e[r];i?i.scrollTo(n?i.pageXOffset:o,n?o:i.pageYOffset):e[r]=o}),e,r,arguments.length)}})),T.each(["top","left"],(function(e,t){T.cssHooks[t]=Ve(y.pixelPosition,(function(e,n){if(n)return n=Xe(e,t),Qe.test(n)?T(e).position()[t]+"px":n}))})),T.each({Height:"height",Width:"width"},(function(e,t){T.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){T.fn[r]=function(o,i){var a=arguments.length&&(n||"boolean"!=typeof o),s=n||(!0===o||!0===i?"margin":"border");return U(this,(function(t,n,o){var i;return b(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===o?T.css(t,n,s):T.style(t,n,o,s)}),t,a?o:void 0,a)}}))})),T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){T.fn[t]=function(e){return this.on(t,e)}})),T.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){T.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}));var Kt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;T.proxy=function(e,t){var n,r,o;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=u.call(arguments,2),(o=function(){return e.apply(t||this,r.concat(u.call(arguments)))}).guid=e.guid=e.guid||T.guid++,o},T.holdReady=function(e){e?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=q,T.isFunction=g,T.isWindow=b,T.camelCase=J,T.type=C,T.now=Date.now,T.isNumeric=function(e){var t=T.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},T.trim=function(e){return null==e?"":(e+"").replace(Kt,"")},void 0===(r=function(){return T}.apply(t,[]))||(e.exports=r);var Zt=n.jQuery,en=n.$;return T.noConflict=function(e){return n.$===T&&(n.$=en),e&&n.jQuery===T&&(n.jQuery=Zt),T},void 0===o&&(n.jQuery=n.$=T),T},"object"===a(e)&&"object"===a(e.exports)?e.exports=o.document?i(o,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return i(e)}:i(o)},204:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.ucs2decode=f,t.default=t.toUnicode=t.toASCII=t.encode=t.decode=t.ucs2encode=void 0;var n=2147483647,r=36,o=/^xn--/,i=/[^\0-\x7E]/,a=/[\x2E\u3002\uFF0E\uFF61]/g,s={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},u=Math.floor,c=String.fromCharCode;function l(e){throw new RangeError(s[e])}function d(e,t){var n=e.split("@"),r="";n.length>1&&(r=n[0]+"@",e=n[1]);var o=function(e,t){for(var n=[],r=e.length;r--;)n[r]=t(e[r]);return n}((e=e.replace(a,".")).split("."),t).join(".");return r+o}function f(e){for(var t=[],n=0,r=e.length;n<r;){var o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){var i=e.charCodeAt(n++);56320==(64512&i)?t.push(((1023&o)<<10)+(1023&i)+65536):(t.push(o),n--)}else t.push(o)}return t}var p=function(e){return String.fromCodePoint.apply(String,function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(t=e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}());var t};t.ucs2encode=p;var h=function(e,t){return e+22+75*(e<26)-((0!=t)<<5)},v=function(e,t,n){var o=0;for(e=n?u(e/700):e>>1,e+=u(e/t);e>455;o+=r)e=u(e/35);return u(o+36*e/(e+38))},m=function(e){var t,o=[],i=e.length,a=0,s=128,c=72,d=e.lastIndexOf("-");d<0&&(d=0);for(var f=0;f<d;++f)e.charCodeAt(f)>=128&&l("not-basic"),o.push(e.charCodeAt(f));for(var p=d>0?d+1:0;p<i;){for(var h=a,m=1,y=r;;y+=r){p>=i&&l("invalid-input");var g=(t=e.charCodeAt(p++))-48<10?t-22:t-65<26?t-65:t-97<26?t-97:r;(g>=r||g>u((n-a)/m))&&l("overflow"),a+=g*m;var b=y<=c?1:y>=c+26?26:y-c;if(g<b)break;var x=r-b;m>u(n/x)&&l("overflow"),m*=x}var w=o.length+1;c=v(a-h,w,0==h),u(a/w)>n-s&&l("overflow"),s+=u(a/w),a%=w,o.splice(a++,0,s)}return String.fromCodePoint.apply(String,o)};t.decode=m;var y=function(e){var t=[],o=(e=f(e)).length,i=128,a=0,s=72,d=!0,p=!1,m=void 0;try{for(var y,g=e[Symbol.iterator]();!(d=(y=g.next()).done);d=!0){var b=y.value;b<128&&t.push(c(b))}}catch(e){p=!0,m=e}finally{try{d||null==g.return||g.return()}finally{if(p)throw m}}var x=t.length,w=x;for(x&&t.push("-");w<o;){var k=n,C=!0,j=!1,T=void 0;try{for(var S,A=e[Symbol.iterator]();!(C=(S=A.next()).done);C=!0){var E=S.value;E>=i&&E<k&&(k=E)}}catch(e){j=!0,T=e}finally{try{C||null==A.return||A.return()}finally{if(j)throw T}}var _=w+1;k-i>u((n-a)/_)&&l("overflow"),a+=(k-i)*_,i=k;var N=!0,q=!1,D=void 0;try{for(var L,O=e[Symbol.iterator]();!(N=(L=O.next()).done);N=!0){var P=L.value;if(P<i&&++a>n&&l("overflow"),P==i){for(var M=a,H=r;;H+=r){var R=H<=s?1:H>=s+26?26:H-s;if(M<R)break;var I=M-R,W=r-R;t.push(c(h(R+I%W,0))),M=u(I/W)}t.push(c(h(M,0))),s=v(a,_,w==x),a=0,++w}}}catch(e){q=!0,D=e}finally{try{N||null==O.return||O.return()}finally{if(q)throw D}}++a,++i}return t.join("")};t.encode=y;var g=function(e){return d(e,(function(e){return o.test(e)?m(e.slice(4).toLowerCase()):e}))};t.toUnicode=g;var b=function(e){return d(e,(function(e){return i.test(e)?"xn--"+y(e):e}))};t.toASCII=b;var x={version:"2.1.0",ucs2:{decode:f,encode:p},decode:m,encode:y,toASCII:b,toUnicode:g};t.default=x},825:function(e){e.exports=prestashop}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,n),i.loaded=!0,i.exports}n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e=a(n(339)),t=a(n(825)),r=a(n(291));n(52),n(882),n(165),n(827),n(965),n(999),n(982),n(432),n(90),n(226),n(26);var o=n(988),i=a(n(247));function a(e){return e&&e.__esModule?e:{default:e}}for(var s in r.default.prototype)t.default[s]=r.default.prototype[s];window.$=e.default,window.jQuery=e.default,(0,e.default)(document).ready((function(){(0,o.psShowHide)(),(0,i.default)('input[type="email"]')}))}()}();!function(){var n={46:function(){function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(s){function a(e,t){this.options=t,this.$elementFilestyle=[],this.$element=s(e)}var r=0;a.prototype={clear:function(){this.$element.val(""),this.$elementFilestyle.find(":text").val(""),this.$elementFilestyle.find(".badge").remove()},destroy:function(){this.$element.removeAttr("style").removeData("filestyle"),this.$elementFilestyle.remove()},disabled:function(e){if(!0===e)this.options.disabled||(this.$element.attr("disabled","true"),this.$elementFilestyle.find("label").attr("disabled","true"),this.options.disabled=!0);else{if(!1!==e)return this.options.disabled;this.options.disabled&&(this.$element.removeAttr("disabled"),this.$elementFilestyle.find("label").removeAttr("disabled"),this.options.disabled=!1)}},buttonBefore:function(e){if(!0===e)this.options.buttonBefore||(this.options.buttonBefore=!0,this.options.input&&(this.$elementFilestyle.remove(),this.constructor(),this.pushNameFiles()));else{if(!1!==e)return this.options.buttonBefore;this.options.buttonBefore&&(this.options.buttonBefore=!1,this.options.input&&(this.$elementFilestyle.remove(),this.constructor(),this.pushNameFiles()))}},icon:function(e){if(!0===e)this.options.icon||(this.options.icon=!0,this.$elementFilestyle.find("label").prepend(this.htmlIcon()));else{if(!1!==e)return this.options.icon;this.options.icon&&(this.options.icon=!1,this.$elementFilestyle.find(".icon-span-filestyle").remove())}},input:function(e){if(!0===e)this.options.input||(this.options.input=!0,this.options.buttonBefore?this.$elementFilestyle.append(this.htmlInput()):this.$elementFilestyle.prepend(this.htmlInput()),this.$elementFilestyle.find(".badge").remove(),this.pushNameFiles(),this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn"));else{if(!1!==e)return this.options.input;this.options.input&&(this.options.input=!1,this.$elementFilestyle.find(":text").remove(),0<(e=this.pushNameFiles()).length&&this.options.badge&&this.$elementFilestyle.find("label").append(' <span class="badge">'+e.length+"</span>"),this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn"))}},size:function(e){if(void 0===e)return this.options.size;var t=this.$elementFilestyle.find("label"),n=this.$elementFilestyle.find("input");t.removeClass("btn-lg btn-sm"),n.removeClass("input-lg input-sm"),"nr"!=e&&(t.addClass("btn-"+e),n.addClass("input-"+e))},placeholder:function(e){if(void 0===e)return this.options.placeholder;this.options.placeholder=e,this.$elementFilestyle.find("input").attr("placeholder",e)},buttonText:function(e){if(void 0===e)return this.options.buttonText;this.options.buttonText=e,this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText)},buttonName:function(e){if(void 0===e)return this.options.buttonName;this.options.buttonName=e,this.$elementFilestyle.find("label").attr({class:"btn "+this.options.buttonName})},iconName:function(e){if(void 0===e)return this.options.iconName;this.$elementFilestyle.find(".icon-span-filestyle").attr({class:"icon-span-filestyle "+this.options.iconName})},htmlIcon:function(){return this.options.icon?'<span class="icon-span-filestyle '+this.options.iconName+'"></span> ':""},htmlInput:function(){return this.options.input?'<input type="text" class="form-control '+("nr"==this.options.size?"":"input-"+this.options.size)+'" placeholder="'+this.options.placeholder+'" disabled> ':""},pushNameFiles:function(){var e="",t=[];void 0===this.$element[0].files?t[0]={name:this.$element[0]&&this.$element[0].value}:t=this.$element[0].files;for(var n=0;n<t.length;n++)e+=t[n].name.split("\\").pop()+", ";return""!==e?this.$elementFilestyle.find(":text").val(e.replace(/\, $/g,"")):this.$elementFilestyle.find(":text").val(""),t},constructor:function(){var e,t,n=this,i=n.$element.attr("id");""!==i&&i||(n.$element.attr({id:i="filestyle-"+r}),r++),t='<span class="group-span-filestyle '+(n.options.input?"input-group-btn":"")+'"><label for="'+i+'" class="btn '+n.options.buttonName+" "+("nr"==n.options.size?"":"btn-"+n.options.size)+'" '+(n.options.disabled?'disabled="true"':"")+">"+n.htmlIcon()+'<span class="buttonText">'+n.options.buttonText+"</span></label></span>",e=n.options.buttonBefore?t+n.htmlInput():n.htmlInput()+t,n.$elementFilestyle=s('<div class="bootstrap-filestyle input-group">'+e+"</div>"),n.$elementFilestyle.find(".group-span-filestyle").attr("tabindex","0").keypress(function(e){if(13===e.keyCode||32===e.charCode)return n.$elementFilestyle.find("label").click(),!1}),n.$element.css({position:"absolute",clip:"rect(0px 0px 0px 0px)"}).attr("tabindex","-1").after(n.$elementFilestyle),n.options.disabled&&n.$element.attr("disabled","true"),n.$element.change(function(){var e=n.pushNameFiles();0==n.options.input&&n.options.badge?0==n.$elementFilestyle.find(".badge").length?n.$elementFilestyle.find("label").append(' <span class="badge">'+e.length+"</span>"):0==e.length?n.$elementFilestyle.find(".badge").remove():n.$elementFilestyle.find(".badge").html(e.length):n.$elementFilestyle.find(".badge").remove()}),-1<window.navigator.userAgent.search(/firefox/i)&&n.$elementFilestyle.find("label").click(function(){return n.$element.click(),!1})}};var e=s.fn.filestyle;s.fn.filestyle=function(i,r){var o="",e=this.each(function(){var e,t,n;"file"===s(this).attr("type")&&(t=(e=s(this)).data("filestyle"),n=s.extend({},s.fn.filestyle.defaults,i,"object"===l(i)&&i),t||(e.data("filestyle",t=new a(this,n)),t.constructor()),"string"==typeof i&&(o=t[i](r)))});return void 0!==l(o)?o:e},s.fn.filestyle.defaults={buttonText:"Choose file",iconName:"glyphicon glyphicon-folder-open",buttonName:"btn-default",size:"nr",input:!0,badge:!0,icon:!0,buttonBefore:!1,disabled:!1,placeholder:""},s.fn.filestyle.noConflict=function(){return s.fn.filestyle=e,this},s(function(){s(".filestyle").each(function(){var e=s(this),t={input:"false"!==e.attr("data-input"),icon:"false"!==e.attr("data-icon"),buttonBefore:"true"===e.attr("data-buttonBefore"),disabled:"true"===e.attr("data-disabled"),size:e.attr("data-size"),buttonText:e.attr("data-buttonText"),buttonName:e.attr("data-buttonName"),iconName:e.attr("data-iconName"),badge:"false"!==e.attr("data-badge"),placeholder:e.attr("data-placeholder")};e.filestyle(t)})})}(window.jQuery)},356:function(){var g;(g=jQuery).fn.scrollbox=function(m){return(m=g.extend({linear:!1,startDelay:2,delay:3,step:5,speed:32,switchItems:1,direction:"vertical",distance:"auto",autoPlay:!0,onMouseOverPause:!0,paused:!1,queue:null,listElement:"ul",listItemElement:"li",infiniteLoop:!0,switchAmount:0,afterForward:null,afterBackward:null,triggerStackable:!1},m)).scrollOffset="vertical"===m.direction?"scrollTop":"scrollLeft",m.queue&&(m.queue=g("#"+m.queue)),this.each(function(){var i,r,e,o,t,n,s,a,l,c=g(this),u=null,f=null,d=!1,p=0,h=0;m.onMouseOverPause&&(c.bind("mouseover",function(){d=!0}),c.bind("mouseout",function(){d=!1})),i=c.children(m.listElement+":first-child"),!1===m.infiniteLoop&&0===m.switchAmount&&(m.switchAmount=i.children().length),n=function(){if(!d){var e,t=i.children(m.listItemElement+":first-child"),t="auto"!==m.distance?m.distance:"vertical"===m.direction?t.outerHeight(!0):t.outerWidth(!0),n=m.linear?Math.min(c[0][m.scrollOffset]+m.step,t):(n=Math.max(3,parseInt(.3*(t-c[0][m.scrollOffset]),10)),Math.min(c[0][m.scrollOffset]+n,t));if(t<=(c[0][m.scrollOffset]=n)){for(e=0;e<m.switchItems;e++)m.queue&&0<m.queue.find(m.listItemElement).length?(i.append(m.queue.find(m.listItemElement)[0]),i.children(m.listItemElement+":first-child").remove()):i.append(i.children(m.listItemElement+":first-child")),++p;c[0][m.scrollOffset]=0,clearInterval(u),u=null,g.isFunction(m.afterForward)&&m.afterForward.call(c,{switchCount:p,currentFirstChild:i.children(m.listItemElement+":first-child")}),m.triggerStackable&&0!==h?r():!1===m.infiniteLoop&&p>=m.switchAmount||m.autoPlay&&(f=setTimeout(o,1e3*m.delay))}}},s=function(){if(!d){var e,t,n;if(0===c[0][m.scrollOffset]){for(e=0;e<m.switchItems;e++)i.children(m.listItemElement+":last-child").insertBefore(i.children(m.listItemElement+":first-child"));t=i.children(m.listItemElement+":first-child"),t="auto"!==m.distance?m.distance:"vertical"===m.direction?t.height():t.width(),c[0][m.scrollOffset]=t}n=m.linear?Math.max(c[0][m.scrollOffset]-m.step,0):(n=Math.max(3,parseInt(.3*c[0][m.scrollOffset],10)),Math.max(c[0][m.scrollOffset]-n,0)),0===(c[0][m.scrollOffset]=n)&&(--p,clearInterval(u),u=null,g.isFunction(m.afterBackward)&&m.afterBackward.call(c,{switchCount:p,currentFirstChild:i.children(m.listItemElement+":first-child")}),m.triggerStackable&&0!==h?r():m.autoPlay&&(f=setTimeout(o,1e3*m.delay)))}},r=function(){0!==h&&(f=0<h?(h--,setTimeout(o,0)):(h++,setTimeout(e,0)))},o=function(){clearInterval(u),u=setInterval(n,m.speed)},e=function(){clearInterval(u),u=setInterval(s,m.speed)},a=function(){m.autoPlay=!0,d=!1,clearInterval(u),u=setInterval(n,m.speed)},l=function(){d=!0},t=function(e){m.delay=e||m.delay,clearTimeout(f),m.autoPlay&&(f=setTimeout(o,1e3*m.delay))},m.autoPlay&&(f=setTimeout(o,1e3*m.startDelay)),c.bind("resetClock",function(e){t(e)}),c.bind("forward",function(){m.triggerStackable?null!==u?h++:o():(clearTimeout(f),o())}),c.bind("backward",function(){m.triggerStackable?null!==u?h--:e():(clearTimeout(f),e())}),c.bind("pauseHover",function(){l()}),c.bind("forwardHover",function(){a()}),c.bind("speedUp",function(e,t){"undefined"===t&&(t=Math.max(1,parseInt(m.speed/2,10))),m.speed=t}),c.bind("speedDown",function(e,t){"undefined"===t&&(t=2*m.speed),m.speed=t}),c.bind("updateConfig",function(e,t){m=g.extend(m,t)})})}},650:function(){!function(x){"use strict";var _=0;function T(e,t){return x.map(e,function(e){return e+".touchspin_"+t})}x.fn.TouchSpin=function(b){if("destroy"!==b){var w={min:0,max:100,initval:"",replacementval:"",step:1,decimals:0,stepinterval:100,forcestepdivisibility:"round",stepintervaldelay:500,verticalbuttons:!1,verticalupclass:"glyphicon glyphicon-chevron-up",verticaldownclass:"glyphicon glyphicon-chevron-down",prefix:"",postfix:"",prefix_extraclass:"",postfix_extraclass:"",booster:!0,boostat:10,maxboostedstep:!1,mousewheel:!0,buttondown_class:"btn btn-default",buttonup_class:"btn btn-default",buttondown_txt:"-",buttonup_txt:"+"},S={min:"min",max:"max",initval:"init-val",replacementval:"replacement-val",step:"step",decimals:"decimals",stepinterval:"step-interval",verticalbuttons:"vertical-buttons",verticalupclass:"vertical-up-class",verticaldownclass:"vertical-down-class",forcestepdivisibility:"force-step-divisibility",stepintervaldelay:"step-interval-delay",prefix:"prefix",postfix:"postfix",prefix_extraclass:"prefix-extra-class",postfix_extraclass:"postfix-extra-class",booster:"booster",boostat:"boostat",maxboostedstep:"max-boosted-step",mousewheel:"mouse-wheel",buttondown_class:"button-down-class",buttonup_class:"button-up-class",buttondown_txt:"button-down-txt",buttonup_txt:"button-up-txt"};return this.each(function(){var a,l,n,i,e,t,r,o,c=x(this),s=c.data(),u=0,f=!1;function d(){var e,t,n=c.val();""!==n?0<a.decimals&&"."===n||(e=parseFloat(n),(t=e=isNaN(e)?""!==a.replacementval?a.replacementval:0:e).toString()!==n&&(t=e),e<a.min&&(t=a.min),t=function(e){switch(a.forcestepdivisibility){case"round":return(Math.round(e/a.step)*a.step).toFixed(a.decimals);case"floor":return(Math.floor(e/a.step)*a.step).toFixed(a.decimals);case"ceil":return(Math.ceil(e/a.step)*a.step).toFixed(a.decimals);default:return e}}(t=e>a.max?a.max:t),Number(n).toString()!==t.toString()&&(c.val(t),c.trigger("change"))):""!==a.replacementval&&(c.val(a.replacementval),c.trigger("change"))}function p(){if(a.booster){var e=Math.pow(2,Math.floor(u/a.boostat))*a.step;return a.maxboostedstep&&e>a.maxboostedstep&&(e=a.maxboostedstep,i=Math.round(i/e)*e),Math.max(a.step,e)}return a.step}function h(){d(),i=parseFloat(n.input.val());var e=i=isNaN(i)?0:i,t=p();(i+=t)>a.max&&(i=a.max,c.trigger("touchspin.on.max"),v()),n.input.val(Number(i).toFixed(a.decimals)),e!==i&&c.trigger("change")}function m(){d(),i=parseFloat(n.input.val());var e=i=isNaN(i)?0:i,t=p();(i-=t)<a.min&&(i=a.min,c.trigger("touchspin.on.min"),v()),n.input.val(i.toFixed(a.decimals)),e!==i&&c.trigger("change")}function g(){v(),u=0,f="down",c.trigger("touchspin.on.startspin"),c.trigger("touchspin.on.startdownspin"),r=setTimeout(function(){e=setInterval(function(){u++,m()},a.stepinterval)},a.stepintervaldelay)}function y(){v(),u=0,f="up",c.trigger("touchspin.on.startspin"),c.trigger("touchspin.on.startupspin"),o=setTimeout(function(){t=setInterval(function(){u++,h()},a.stepinterval)},a.stepintervaldelay)}function v(){switch(clearTimeout(r),clearTimeout(o),clearInterval(e),clearInterval(t),f){case"up":c.trigger("touchspin.on.stopupspin"),c.trigger("touchspin.on.stopspin");break;case"down":c.trigger("touchspin.on.stopdownspin"),c.trigger("touchspin.on.stopspin")}u=0,f=!1}c.data("alreadyinitialized")||(c.data("alreadyinitialized",!0),_+=1,c.data("spinnerid",_),c.is("input")&&(""!==(a=x.extend({},w,s,function(){var n={};return x.each(S,function(e,t){t="bts-"+t;c.is("[data-"+t+"]")&&(n[e]=c.data(t))}),n}(),b)).initval&&""===c.val()&&c.val(a.initval),d(),function(){var e=c.val(),t=c.parent();""!==e&&(e=Number(e).toFixed(a.decimals));c.data("initvalue",e).val(e),c.addClass("form-control"),t.hasClass("input-group")?function(e){e.addClass("bootstrap-touchspin");var t,n,i=c.prev(),r=c.next(),o='<span class="input-group-addon bootstrap-touchspin-prefix">'+a.prefix+"</span>",s='<span class="input-group-addon bootstrap-touchspin-postfix">'+a.postfix+"</span>";i.hasClass("input-group-btn")?(t='<button class="'+a.buttondown_class+' bootstrap-touchspin-down" type="button">'+a.buttondown_txt+"</button>",i.append(t)):(t='<span class="input-group-btn"><button class="'+a.buttondown_class+' bootstrap-touchspin-down" type="button">'+a.buttondown_txt+"</button></span>",x(t).insertBefore(c));r.hasClass("input-group-btn")?(n='<button class="'+a.buttonup_class+' bootstrap-touchspin-up" type="button">'+a.buttonup_txt+"</button>",r.prepend(n)):(n='<span class="input-group-btn"><button class="'+a.buttonup_class+' bootstrap-touchspin-up" type="button">'+a.buttonup_txt+"</button></span>",x(n).insertAfter(c));x(o).insertBefore(c),x(s).insertAfter(c),l=e}(t):function(){var e;e=a.verticalbuttons?'<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">'+a.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+a.postfix+'</span><span class="input-group-btn-vertical"><button class="'+a.buttondown_class+' bootstrap-touchspin-up" type="button"><i class="'+a.verticalupclass+'"></i></button><button class="'+a.buttonup_class+' bootstrap-touchspin-down" type="button"><i class="'+a.verticaldownclass+'"></i></button></span></div>':'<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="'+a.buttondown_class+' bootstrap-touchspin-down" type="button">'+a.buttondown_txt+'</button></span><span class="input-group-addon bootstrap-touchspin-prefix">'+a.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+a.postfix+'</span><span class="input-group-btn"><button class="'+a.buttonup_class+' bootstrap-touchspin-up" type="button">'+a.buttonup_txt+"</button></span></div>";l=x(e).insertBefore(c),x(".bootstrap-touchspin-prefix",l).after(c),c.hasClass("input-sm")?l.addClass("input-group-sm"):c.hasClass("input-lg")&&l.addClass("input-group-lg")}()}(),n={down:x(".bootstrap-touchspin-down",l),up:x(".bootstrap-touchspin-up",l),input:x("input",l),prefix:x(".bootstrap-touchspin-prefix",l).addClass(a.prefix_extraclass),postfix:x(".bootstrap-touchspin-postfix",l).addClass(a.postfix_extraclass)},function(){""===a.prefix&&n.prefix.hide();""===a.postfix&&n.postfix.hide()}(),c.on("keydown",function(e){var t=e.keyCode||e.which;38===t?("up"!==f&&(h(),y()),e.preventDefault()):40===t&&("down"!==f&&(m(),g()),e.preventDefault())}),c.on("keyup",function(e){e=e.keyCode||e.which;38!==e&&40!==e||v()}),c.on("blur",function(){d()}),n.down.on("keydown",function(e){var t=e.keyCode||e.which;32!==t&&13!==t||("down"!==f&&(m(),g()),e.preventDefault())}),n.down.on("keyup",function(e){e=e.keyCode||e.which;32!==e&&13!==e||v()}),n.up.on("keydown",function(e){var t=e.keyCode||e.which;32!==t&&13!==t||("up"!==f&&(h(),y()),e.preventDefault())}),n.up.on("keyup",function(e){e=e.keyCode||e.which;32!==e&&13!==e||v()}),n.down.on("mousedown.touchspin",function(e){n.down.off("touchstart.touchspin"),c.is(":disabled")||(m(),g(),e.preventDefault(),e.stopPropagation())}),n.down.on("touchstart.touchspin",function(e){n.down.off("mousedown.touchspin"),c.is(":disabled")||(m(),g(),e.preventDefault(),e.stopPropagation())}),n.up.on("mousedown.touchspin",function(e){n.up.off("touchstart.touchspin"),c.is(":disabled")||(h(),y(),e.preventDefault(),e.stopPropagation())}),n.up.on("touchstart.touchspin",function(e){n.up.off("mousedown.touchspin"),c.is(":disabled")||(h(),y(),e.preventDefault(),e.stopPropagation())}),n.up.on("mouseout touchleave touchend touchcancel",function(e){f&&(e.stopPropagation(),v())}),n.down.on("mouseout touchleave touchend touchcancel",function(e){f&&(e.stopPropagation(),v())}),n.down.on("mousemove touchmove",function(e){f&&(e.stopPropagation(),e.preventDefault())}),n.up.on("mousemove touchmove",function(e){f&&(e.stopPropagation(),e.preventDefault())}),x(document).on(T(["mouseup","touchend","touchcancel"],_).join(" "),function(e){f&&(e.preventDefault(),v())}),x(document).on(T(["mousemove","touchmove","scroll","scrollstart"],_).join(" "),function(e){f&&(e.preventDefault(),v())}),c.on("mousewheel DOMMouseScroll",function(e){var t;a.mousewheel&&c.is(":focus")&&(t=e.originalEvent.wheelDelta||-e.originalEvent.deltaY||-e.originalEvent.detail,e.stopPropagation(),e.preventDefault(),(t<0?m:h)())}),c.on("touchspin.uponce",function(){v(),h()}),c.on("touchspin.downonce",function(){v(),m()}),c.on("touchspin.startupspin",function(){y()}),c.on("touchspin.startdownspin",function(){g()}),c.on("touchspin.stopspin",function(){v()}),c.on("touchspin.updatesettings",function(e,t){!function(e){(function(e){a=x.extend({},a,e)})(e),d();e=n.input.val();""!==e&&(e=Number(n.input.val()),n.input.val(e.toFixed(a.decimals)))}(t)}),n.input.css("display","block")))})}this.each(function(){var e=x(this).data();x(document).off(T(["mouseup","touchend","touchcancel","mousemove","touchmove","scroll","scrollstart"],e.spinnerid).join(" "))})}}(jQuery)},249:function(){function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function e(e){var t=this,n=!1;return r(this).one(o.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||o.triggerTransitionEnd(t)},e),this}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r,t,n,o,S,x,_,g;!function(){var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),S="function"==typeof Symbol&&"symbol"==m(Symbol.iterator)?function(e){return m(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":m(e)},r=jQuery,t=!(x=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},o={TRANSITION_END:"bsTransitionEnd",getUID:function(e){for(;e+=~~(1e6*Math.random()),document.getElementById(e););return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");return t||(t=e.getAttribute("href")||"",t=/^#[a-z]/i.test(t)?t:null),t},reflow:function(e){new Function("bs","return bs")(e.offsetHeight)},triggerTransitionEnd:function(e){r(e).trigger(t.end)},supportsTransitionEnd:function(){return Boolean(t)},typeCheckConfig:function(e,t,n){for(var i in n)if(n.hasOwnProperty(i)){var r=n[i],o=t[i],s=o&&((a=o)[0]||a).nodeType?"element":(o=o,{}.toString.call(o).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a}},t=function(){if(window.QUnit)return!1;var e,t=document.createElement("bootstrap");for(e in n)if(void 0!==t.style[e])return{end:n[e]};return!1}(),r.fn.emulateTransitionEnd=e,o.supportsTransitionEnd()&&(r.event.special[o.TRANSITION_END]={bindType:t.end,delegateType:t.end,handle:function(e){if(r(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),_=o,function(i){var e="alert",r="bs.alert",t="."+r,n=i.fn[e],o={CLOSE:"close"+t,CLOSED:"closed"+t,CLICK_DATA_API:"click"+t+".data-api"},s="alert",a="fade",l="in",c=(u.prototype.close=function(e){e=e||this._element;e=this._getRootElement(e);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},u.prototype.dispose=function(){i.removeData(this._element,r),this._element=null},u.prototype._getRootElement=function(e){var t=_.getSelectorFromElement(e),n=!1;return n=(n=t?i(t)[0]:n)||i(e).closest("."+s)[0]},u.prototype._triggerCloseEvent=function(e){var t=i.Event(o.CLOSE);return i(e).trigger(t),t},u.prototype._removeElement=function(e){return i(e).removeClass(l),_.supportsTransitionEnd()&&i(e).hasClass(a)?void i(e).one(_.TRANSITION_END,i.proxy(this._destroyElement,this,e)).emulateTransitionEnd(150):void this._destroyElement(e)},u.prototype._destroyElement=function(e){i(e).detach().trigger(o.CLOSED).remove()},u._jQueryInterface=function(n){return this.each(function(){var e=i(this),t=e.data(r);t||(t=new u(this),e.data(r,t)),"close"===n&&t[n](this)})},u._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},x(u,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}}]),u);function u(e){w(this,u),this._element=e}i(document).on(o.CLICK_DATA_API,'[data-dismiss="alert"]',c._handleDismiss(new c)),i.fn[e]=c._jQueryInterface,i.fn[e].Constructor=c,i.fn[e].noConflict=function(){return i.fn[e]=n,c._jQueryInterface}}(jQuery),function(i){var e="button",n="bs.button",t="."+n,r=".data-api",o=i.fn[e],s="active",a="btn",l="focus",c='[data-toggle^="button"]',u='[data-toggle="buttons"]',f="input",d=".active",p=".btn",r={CLICK_DATA_API:"click"+t+r,FOCUS_BLUR_DATA_API:"focus"+t+r+" blur"+t+r},h=(m.prototype.toggle=function(){var e,t=!0,n=i(this._element).closest(u)[0];n?(e=i(this._element).find(f)[0])&&("radio"===e.type&&(e.checked&&i(this._element).hasClass(s)?t=!1:(n=i(n).find(d)[0])&&i(n).removeClass(s)),t&&(e.checked=!i(this._element).hasClass(s),i(this._element).trigger("change")),e.focus()):this._element.setAttribute("aria-pressed",!i(this._element).hasClass(s)),t&&i(this._element).toggleClass(s)},m.prototype.dispose=function(){i.removeData(this._element,n),this._element=null},m._jQueryInterface=function(t){return this.each(function(){var e=i(this).data(n);e||(e=new m(this),i(this).data(n,e)),"toggle"===t&&e[t]()})},x(m,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}}]),m);function m(e){w(this,m),this._element=e}i(document).on(r.CLICK_DATA_API,c,function(e){e.preventDefault();e=e.target;i(e).hasClass(a)||(e=i(e).closest(p)),h._jQueryInterface.call(i(e),"toggle")}).on(r.FOCUS_BLUR_DATA_API,c,function(e){var t=i(e.target).closest(p)[0];i(t).toggleClass(l,/^focus(in)?$/.test(e.type))}),i.fn[e]=h._jQueryInterface,i.fn[e].Constructor=h,i.fn[e].noConflict=function(){return i.fn[e]=o,h._jQueryInterface}}(jQuery),function(a){var t="carousel",r="bs.carousel",e="."+r,n=".data-api",i=a.fn[t],o={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},s={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},l="next",c="prev",u={SLIDE:"slide"+e,SLID:"slid"+e,KEYDOWN:"keydown"+e,MOUSEENTER:"mouseenter"+e,MOUSELEAVE:"mouseleave"+e,LOAD_DATA_API:"load"+e+n,CLICK_DATA_API:"click"+e+n},f="carousel",d="active",p="slide",h="right",m="left",g={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".next, .prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},y=(v.prototype.next=function(){this._isSliding||this._slide(l)},v.prototype.nextWhenVisible=function(){document.hidden||this.next()},v.prototype.prev=function(){this._isSliding||this._slide(c)},v.prototype.pause=function(e){e||(this._isPaused=!0),a(this._element).find(g.NEXT_PREV)[0]&&_.supportsTransitionEnd()&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},v.prototype.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval(a.proxy(document.visibilityState?this.nextWhenVisible:this.next,this),this._config.interval))},v.prototype.to=function(e){var t=this;this._activeElement=a(this._element).find(g.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)a(this._element).one(u.SLID,function(){return t.to(e)});else{if(n===e)return this.pause(),void this.cycle();this._slide(n<e?l:c,this._items[e])}},v.prototype.dispose=function(){a(this._element).off(e),a.removeData(this._element,r),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},v.prototype._getConfig=function(e){return e=a.extend({},o,e),_.typeCheckConfig(t,e,s),e},v.prototype._addEventListeners=function(){this._config.keyboard&&a(this._element).on(u.KEYDOWN,a.proxy(this._keydown,this)),"hover"!==this._config.pause||"ontouchstart"in document.documentElement||a(this._element).on(u.MOUSEENTER,a.proxy(this.pause,this)).on(u.MOUSELEAVE,a.proxy(this.cycle,this))},v.prototype._keydown=function(e){if(e.preventDefault(),!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}},v.prototype._getItemIndex=function(e){return this._items=a.makeArray(a(e).parent().find(g.ITEM)),this._items.indexOf(e)},v.prototype._getItemByDirection=function(e,t){var n=e===l,i=e===c,r=this._getItemIndex(t),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return t;e=(r+(e===c?-1:1))%this._items.length;return-1==e?this._items[this._items.length-1]:this._items[e]},v.prototype._triggerSlideEvent=function(e,t){t=a.Event(u.SLIDE,{relatedTarget:e,direction:t});return a(this._element).trigger(t),t},v.prototype._setActiveIndicatorElement=function(e){this._indicatorsElement&&(a(this._indicatorsElement).find(g.ACTIVE).removeClass(d),(e=this._indicatorsElement.children[this._getItemIndex(e)])&&a(e).addClass(d))},v.prototype._slide=function(e,t){var n,i=this,r=a(this._element).find(g.ACTIVE_ITEM)[0],o=t||r&&this._getItemByDirection(e,r),t=Boolean(this._interval),s=e===l?m:h;o&&a(o).hasClass(d)?this._isSliding=!1:!this._triggerSlideEvent(o,s).isDefaultPrevented()&&r&&o&&(this._isSliding=!0,t&&this.pause(),this._setActiveIndicatorElement(o),n=a.Event(u.SLID,{relatedTarget:o,direction:s}),_.supportsTransitionEnd()&&a(this._element).hasClass(p)?(a(o).addClass(e),_.reflow(o),a(r).addClass(s),a(o).addClass(s),a(r).one(_.TRANSITION_END,function(){a(o).removeClass(s).removeClass(e),a(o).addClass(d),a(r).removeClass(d).removeClass(e).removeClass(s),i._isSliding=!1,setTimeout(function(){return a(i._element).trigger(n)},0)}).emulateTransitionEnd(600)):(a(r).removeClass(d),a(o).addClass(d),this._isSliding=!1,a(this._element).trigger(n)),t&&this.cycle())},v._jQueryInterface=function(i){return this.each(function(){var e=a(this).data(r),t=a.extend({},o,a(this).data());"object"===(void 0===i?"undefined":S(i))&&a.extend(t,i);var n="string"==typeof i?i:t.slide;if(e||(e=new v(this,t),a(this).data(r,e)),"number"==typeof i)e.to(i);else if("string"==typeof n){if(void 0===e[n])throw new Error('No method named "'+n+'"');e[n]()}else t.interval&&(e.pause(),e.cycle())})},v._dataApiClickHandler=function(e){var t,n,i=_.getSelectorFromElement(this);!i||(t=a(i)[0])&&a(t).hasClass(f)&&(n=a.extend({},a(t).data(),a(this).data()),(i=this.getAttribute("data-slide-to"))&&(n.interval=!1),v._jQueryInterface.call(a(t),n),i&&a(t).data(r).to(i),e.preventDefault())},x(v,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}},{key:"Default",get:function(){return o}}]),v);function v(e,t){w(this,v),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this._config=this._getConfig(t),this._element=a(e)[0],this._indicatorsElement=a(this._element).find(g.INDICATORS)[0],this._addEventListeners()}a(document).on(u.CLICK_DATA_API,g.DATA_SLIDE,y._dataApiClickHandler),a(window).on(u.LOAD_DATA_API,function(){a(g.DATA_RIDE).each(function(){var e=a(this);y._jQueryInterface.call(e,e.data())})}),a.fn[t]=y._jQueryInterface,a.fn[t].Constructor=y,a.fn[t].noConflict=function(){return a.fn[t]=i,y._jQueryInterface}}(jQuery),function(o){var t="collapse",s="bs.collapse",e="."+s,n=o.fn[t],r={toggle:!0,parent:""},i={toggle:"boolean",parent:"string"},a={SHOW:"show"+e,SHOWN:"shown"+e,HIDE:"hide"+e,HIDDEN:"hidden"+e,CLICK_DATA_API:"click"+e+".data-api"},l="in",c="collapse",u="collapsing",f="collapsed",d="width",p="height",h=".card > .in, .card > .collapsing",e='[data-toggle="collapse"]',m=(g.prototype.toggle=function(){o(this._element).hasClass(l)?this.hide():this.show()},g.prototype.show=function(){var e,t,n,i,r=this;this._isTransitioning||o(this._element).hasClass(l)||(n=i=void 0,this._parent&&((i=o.makeArray(o(h))).length||(i=null)),i&&((n=o(i).data(s))&&n._isTransitioning)||(e=o.Event(a.SHOW),o(this._element).trigger(e),e.isDefaultPrevented()||(i&&(g._jQueryInterface.call(o(i),"hide"),n||o(i).data(s,null)),t=this._getDimension(),o(this._element).removeClass(c).addClass(u),this._element.style[t]=0,this._element.setAttribute("aria-expanded",!0),this._triggerArray.length&&o(this._triggerArray).removeClass(f).attr("aria-expanded",!0),this.setTransitioning(!0),n=function(){o(r._element).removeClass(u).addClass(c).addClass(l),r._element.style[t]="",r.setTransitioning(!1),o(r._element).trigger(a.SHOWN)},_.supportsTransitionEnd()?(i="scroll"+(t[0].toUpperCase()+t.slice(1)),o(this._element).one(_.TRANSITION_END,n).emulateTransitionEnd(600),this._element.style[t]=this._element[i]+"px"):n())))},g.prototype.hide=function(){var e=this;if(!this._isTransitioning&&o(this._element).hasClass(l)){var t=o.Event(a.HIDE);if(o(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element[n===d?"offsetWidth":"offsetHeight"]+"px",_.reflow(this._element),o(this._element).addClass(u).removeClass(c).removeClass(l),this._element.setAttribute("aria-expanded",!1),this._triggerArray.length&&o(this._triggerArray).addClass(f).attr("aria-expanded",!1),this.setTransitioning(!0);t=function(){e.setTransitioning(!1),o(e._element).removeClass(u).addClass(c).trigger(a.HIDDEN)};return this._element.style[n]="",_.supportsTransitionEnd()?void o(this._element).one(_.TRANSITION_END,t).emulateTransitionEnd(600):void t()}}},g.prototype.setTransitioning=function(e){this._isTransitioning=e},g.prototype.dispose=function(){o.removeData(this._element,s),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},g.prototype._getConfig=function(e){return(e=o.extend({},r,e)).toggle=Boolean(e.toggle),_.typeCheckConfig(t,e,i),e},g.prototype._getDimension=function(){return o(this._element).hasClass(d)?d:p},g.prototype._getParent=function(){var n=this,e=o(this._config.parent)[0],t='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return o(e).find(t).each(function(e,t){n._addAriaAndCollapsedClass(g._getTargetFromElement(t),[t])}),e},g.prototype._addAriaAndCollapsedClass=function(e,t){var n;e&&(n=o(e).hasClass(l),e.setAttribute("aria-expanded",n),t.length&&o(t).toggleClass(f,!n).attr("aria-expanded",n))},g._getTargetFromElement=function(e){e=_.getSelectorFromElement(e);return e?o(e)[0]:null},g._jQueryInterface=function(i){return this.each(function(){var e=o(this),t=e.data(s),n=o.extend({},r,e.data(),"object"===(void 0===i?"undefined":S(i))&&i);if(!t&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),t||(t=new g(this,n),e.data(s,t)),"string"==typeof i){if(void 0===t[i])throw new Error('No method named "'+i+'"');t[i]()}})},x(g,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}},{key:"Default",get:function(){return r}}]),g);function g(e,t){w(this,g),this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=o.makeArray(o('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]')),this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}o(document).on(a.CLICK_DATA_API,e,function(e){e.preventDefault();var t=m._getTargetFromElement(this),e=o(t).data(s)?"toggle":o(this).data();m._jQueryInterface.call(o(t),e)}),o.fn[t]=m._jQueryInterface,o.fn[t].Constructor=m,o.fn[t].noConflict=function(){return o.fn[t]=n,m._jQueryInterface}}(jQuery),function(a){var e="dropdown",n="bs.dropdown",t="."+n,i=".data-api",r=a.fn[e],l={HIDE:"hide"+t,HIDDEN:"hidden"+t,SHOW:"show"+t,SHOWN:"shown"+t,CLICK:"click"+t,CLICK_DATA_API:"click"+t+i,KEYDOWN_DATA_API:"keydown"+t+i},o="dropdown-backdrop",s="disabled",c="open",u=".dropdown-backdrop",f='[data-toggle="dropdown"]',d=".dropdown form",p='[role="menu"]',i='[role="listbox"]',h=".navbar-nav",m='[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a',g=(y.prototype.toggle=function(){if(this.disabled||a(this).hasClass(s))return!1;var e=y._getParentFromElement(this),t=a(e).hasClass(c);if(y._clearMenus(),t)return!1;"ontouchstart"in document.documentElement&&!a(e).closest(h).length&&((n=document.createElement("div")).className=o,a(n).insertBefore(this),a(n).on("click",y._clearMenus));var t={relatedTarget:this},n=a.Event(l.SHOW,t);return a(e).trigger(n),!n.isDefaultPrevented()&&(this.focus(),this.setAttribute("aria-expanded","true"),a(e).toggleClass(c),a(e).trigger(a.Event(l.SHOWN,t)),!1)},y.prototype.dispose=function(){a.removeData(this._element,n),a(this._element).off(t),this._element=null},y.prototype._addEventListeners=function(){a(this._element).on(l.CLICK,this.toggle)},y._jQueryInterface=function(t){return this.each(function(){var e=a(this).data(n);if(e||a(this).data(n,e=new y(this)),"string"==typeof t){if(void 0===e[t])throw new Error('No method named "'+t+'"');e[t].call(this)}})},y._clearMenus=function(e){if(!e||3!==e.which){var t=a(u)[0];t&&t.parentNode.removeChild(t);for(var n=a.makeArray(a(f)),i=0;i<n.length;i++){var r,o=y._getParentFromElement(n[i]),s={relatedTarget:n[i]};!a(o).hasClass(c)||e&&"click"===e.type&&/input|textarea/i.test(e.target.tagName)&&a.contains(o,e.target)||(r=a.Event(l.HIDE,s),a(o).trigger(r),r.isDefaultPrevented()||(n[i].setAttribute("aria-expanded","false"),a(o).removeClass(c).trigger(a.Event(l.HIDDEN,s))))}}},y._getParentFromElement=function(e){var t=void 0,n=_.getSelectorFromElement(e);return(t=n?a(n)[0]:t)||e.parentNode},y._dataApiKeydownHandler=function(e){if(/(38|40|27|32)/.test(e.which)&&!/input|textarea/i.test(e.target.tagName)&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!a(this).hasClass(s))){var t=y._getParentFromElement(this),n=a(t).hasClass(c);if(!n&&27!==e.which||n&&27===e.which)return 27===e.which&&(i=a(t).find(f)[0],a(i).trigger("focus")),void a(this).trigger("click");var i,t=a.makeArray(a(m));(t=t.filter(function(e){return e.offsetWidth||e.offsetHeight})).length&&(i=t.indexOf(e.target),38===e.which&&0<i&&i--,40===e.which&&i<t.length-1&&i++,t[i=i<0?0:i].focus())}},x(y,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}}]),y);function y(e){w(this,y),this._element=e,this._addEventListeners()}a(document).on(l.KEYDOWN_DATA_API,f,g._dataApiKeydownHandler).on(l.KEYDOWN_DATA_API,p,g._dataApiKeydownHandler).on(l.KEYDOWN_DATA_API,i,g._dataApiKeydownHandler).on(l.CLICK_DATA_API,g._clearMenus).on(l.CLICK_DATA_API,f,g.prototype.toggle).on(l.CLICK_DATA_API,d,function(e){e.stopPropagation()}),a.fn[e]=g._jQueryInterface,a.fn[e].Constructor=g,a.fn[e].noConflict=function(){return a.fn[e]=r,g._jQueryInterface}}(jQuery),function(o){var t="modal",s="bs.modal",e="."+s,n=o.fn[t],i={backdrop:!0,keyboard:!0,focus:!0,show:!0},r={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},a={HIDE:"hide"+e,HIDDEN:"hidden"+e,SHOW:"show"+e,SHOWN:"shown"+e,FOCUSIN:"focusin"+e,RESIZE:"resize"+e,CLICK_DISMISS:"click.dismiss"+e,KEYDOWN_DISMISS:"keydown.dismiss"+e,MOUSEUP_DISMISS:"mouseup.dismiss"+e,MOUSEDOWN_DISMISS:"mousedown.dismiss"+e,CLICK_DATA_API:"click"+e+".data-api"},l="modal-scrollbar-measure",c="modal-backdrop",u="modal-open",f="fade",d="in",p={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"},h=(m.prototype.toggle=function(e){return this._isShown?this.hide():this.show(e)},m.prototype.show=function(e){var t=this,n=o.Event(a.SHOW,{relatedTarget:e});o(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),o(document.body).addClass(u),this._setEscapeEvent(),this._setResizeEvent(),o(this._element).on(a.CLICK_DISMISS,p.DATA_DISMISS,o.proxy(this.hide,this)),o(this._dialog).on(a.MOUSEDOWN_DISMISS,function(){o(t._element).one(a.MOUSEUP_DISMISS,function(e){o(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)})}),this._showBackdrop(o.proxy(this._showElement,this,e)))},m.prototype.hide=function(e){e&&e.preventDefault();e=o.Event(a.HIDE);o(this._element).trigger(e),this._isShown&&!e.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),o(document).off(a.FOCUSIN),o(this._element).removeClass(d),o(this._element).off(a.CLICK_DISMISS),o(this._dialog).off(a.MOUSEDOWN_DISMISS),_.supportsTransitionEnd()&&o(this._element).hasClass(f)?o(this._element).one(_.TRANSITION_END,o.proxy(this._hideModal,this)).emulateTransitionEnd(300):this._hideModal())},m.prototype.dispose=function(){o.removeData(this._element,s),o(window).off(e),o(document).off(e),o(this._element).off(e),o(this._backdrop).off(e),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._originalBodyPadding=null,this._scrollbarWidth=null},m.prototype._getConfig=function(e){return e=o.extend({},i,e),_.typeCheckConfig(t,e,r),e},m.prototype._showElement=function(e){var t=this,n=_.supportsTransitionEnd()&&o(this._element).hasClass(f);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&_.reflow(this._element),o(this._element).addClass(d),this._config.focus&&this._enforceFocus();var i=o.Event(a.SHOWN,{relatedTarget:e}),e=function(){t._config.focus&&t._element.focus(),o(t._element).trigger(i)};n?o(this._dialog).one(_.TRANSITION_END,e).emulateTransitionEnd(300):e()},m.prototype._enforceFocus=function(){var t=this;o(document).off(a.FOCUSIN).on(a.FOCUSIN,function(e){document===e.target||t._element===e.target||o(t._element).has(e.target).length||t._element.focus()})},m.prototype._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?o(this._element).on(a.KEYDOWN_DISMISS,function(e){27===e.which&&t.hide()}):this._isShown||o(this._element).off(a.KEYDOWN_DISMISS)},m.prototype._setResizeEvent=function(){this._isShown?o(window).on(a.RESIZE,o.proxy(this._handleUpdate,this)):o(window).off(a.RESIZE)},m.prototype._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden","true"),this._showBackdrop(function(){o(document.body).removeClass(u),e._resetAdjustments(),e._resetScrollbar(),o(e._element).trigger(a.HIDDEN)})},m.prototype._removeBackdrop=function(){this._backdrop&&(o(this._backdrop).remove(),this._backdrop=null)},m.prototype._showBackdrop=function(e){var t,n=this,i=o(this._element).hasClass(f)?f:"";this._isShown&&this._config.backdrop?(t=_.supportsTransitionEnd()&&i,this._backdrop=document.createElement("div"),this._backdrop.className=c,i&&o(this._backdrop).addClass(i),o(this._backdrop).appendTo(document.body),o(this._element).on(a.CLICK_DISMISS,function(e){return n._ignoreBackdropClick?void(n._ignoreBackdropClick=!1):void(e.target===e.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide()))}),t&&_.reflow(this._backdrop),o(this._backdrop).addClass(d),e&&(t?o(this._backdrop).one(_.TRANSITION_END,e).emulateTransitionEnd(150):e())):!this._isShown&&this._backdrop?(o(this._backdrop).removeClass(d),t=function(){n._removeBackdrop(),e&&e()},_.supportsTransitionEnd()&&o(this._element).hasClass(f)?o(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(150):t()):e&&e()},m.prototype._handleUpdate=function(){this._adjustDialog()},m.prototype._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},m.prototype._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},m.prototype._checkScrollbar=function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},m.prototype._setScrollbar=function(){var e=parseInt(o(p.FIXED_CONTENT).css("padding-right")||0,10);this._originalBodyPadding=document.body.style.paddingRight||"",this._isBodyOverflowing&&(document.body.style.paddingRight=e+this._scrollbarWidth+"px")},m.prototype._resetScrollbar=function(){document.body.style.paddingRight=this._originalBodyPadding},m.prototype._getScrollbarWidth=function(){var e=document.createElement("div");e.className=l,document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t},m._jQueryInterface=function(n,i){return this.each(function(){var e=o(this).data(s),t=o.extend({},m.Default,o(this).data(),"object"===(void 0===n?"undefined":S(n))&&n);if(e||(e=new m(this,t),o(this).data(s,e)),"string"==typeof n){if(void 0===e[n])throw new Error('No method named "'+n+'"');e[n](i)}else t.show&&e.show(i)})},x(m,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}},{key:"Default",get:function(){return i}}]),m);function m(e,t){w(this,m),this._config=this._getConfig(t),this._element=e,this._dialog=o(e).find(p.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}o(document).on(a.CLICK_DATA_API,p.DATA_TOGGLE,function(e){var t=this,n=void 0,i=_.getSelectorFromElement(this);i&&(n=o(i)[0]);i=o(n).data(s)?"toggle":o.extend({},o(n).data(),o(this).data());"A"===this.tagName&&e.preventDefault();var r=o(n).one(a.SHOW,function(e){e.isDefaultPrevented()||r.one(a.HIDDEN,function(){o(t).is(":visible")&&t.focus()})});h._jQueryInterface.call(o(n),i,this)}),o.fn[t]=h._jQueryInterface,o.fn[t].Constructor=h,o.fn[t].noConflict=function(){return o.fn[t]=n,h._jQueryInterface}}(jQuery),function(r){var n="scrollspy",i="bs.scrollspy",e="."+i,t=r.fn[n],o={offset:10,method:"auto",target:""},s={offset:"number",method:"string",target:"(string|element)"},a={ACTIVATE:"activate"+e,SCROLL:"scroll"+e,LOAD_DATA_API:"load"+e+".data-api"},l="dropdown-item",c="active",u={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",LIST_ITEM:".list-item",LI:"li",LI_DROPDOWN:"li.dropdown",NAV_LINKS:".nav-link",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},f="offset",d="position",p=(h.prototype.refresh=function(){var t=this,e=this._scrollElement!==this._scrollElement.window?d:f,n="auto"===this._config.method?e:this._config.method,i=n===d?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),r.makeArray(r(this._selector)).map(function(e){var t=void 0,e=_.getSelectorFromElement(e);return(t=e?r(e)[0]:t)&&(t.offsetWidth||t.offsetHeight)?[r(t)[n]().top+i,e]:null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},h.prototype.dispose=function(){r.removeData(this._element,i),r(this._scrollElement).off(e),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},h.prototype._getConfig=function(e){var t;return"string"!=typeof(e=r.extend({},o,e)).target&&((t=r(e.target).attr("id"))||(t=_.getUID(n),r(e.target).attr("id",t)),e.target="#"+t),_.typeCheckConfig(n,e,s),e},h.prototype._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.scrollY:this._scrollElement.scrollTop},h.prototype._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},h.prototype._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._scrollElement.offsetHeight;if(this._scrollHeight!==t&&this.refresh(),n<=e&&(n=this._targets[this._targets.length-1],this._activeTarget!==n&&this._activate(n)),this._activeTarget&&e<this._offsets[0])return this._activeTarget=null,void this._clear();for(var i=this._offsets.length;i--;)this._activeTarget!==this._targets[i]&&e>=this._offsets[i]&&(void 0===this._offsets[i+1]||e<this._offsets[i+1])&&this._activate(this._targets[i])},h.prototype._activate=function(t){this._activeTarget=t,this._clear();var e=(e=this._selector.split(",")).map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'}),e=r(e.join(","));e.hasClass(l)?(e.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(c),e.addClass(c)):e.parents(u.LI).find(u.NAV_LINKS).addClass(c),r(this._scrollElement).trigger(a.ACTIVATE,{relatedTarget:t})},h.prototype._clear=function(){r(this._selector).filter(u.ACTIVE).removeClass(c)},h._jQueryInterface=function(n){return this.each(function(){var e=r(this).data(i),t="object"===(void 0===n?"undefined":S(n))&&n||null;if(e||(e=new h(this,t),r(this).data(i,e)),"string"==typeof n){if(void 0===e[n])throw new Error('No method named "'+n+'"');e[n]()}})},x(h,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}},{key:"Default",get:function(){return o}}]),h);function h(e,t){w(this,h),this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(t),this._selector=this._config.target+" "+u.NAV_LINKS+","+this._config.target+" "+u.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,r(this._scrollElement).on(a.SCROLL,r.proxy(this._process,this)),this.refresh(),this._process()}r(window).on(a.LOAD_DATA_API,function(){for(var e=r.makeArray(r(u.DATA_SPY)),t=e.length;t--;){var n=r(e[t]);p._jQueryInterface.call(n,n.data())}}),r.fn[n]=p._jQueryInterface,r.fn[n].Constructor=p,r.fn[n].noConflict=function(){return r.fn[n]=t,p._jQueryInterface}}(jQuery),function(a){var i="bs.tab",e="."+i,t=a.fn.tab,l={HIDE:"hide"+e,HIDDEN:"hidden"+e,SHOW:"show"+e,SHOWN:"shown"+e,CLICK_DATA_API:"click"+e+".data-api"},o="dropdown-menu",c="active",s="fade",u="in",f=".dropdown",d="ul:not(.dropdown-menu)",r="> .nav-item .fade, > .fade",p=".active",h="> .nav-item > .active, > .active",e='[data-toggle="tab"], [data-toggle="pill"]',m=".dropdown-toggle",g="> .dropdown-menu .active",n=(y.prototype.show=function(){var e,n,t,i,r,o,s=this;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&a(this._element).hasClass(c)||(n=e=void 0,o=a(this._element).closest(d)[0],t=_.getSelectorFromElement(this._element),o&&(n=(n=a.makeArray(a(o).find(p)))[n.length-1]),i=a.Event(l.HIDE,{relatedTarget:this._element}),r=a.Event(l.SHOW,{relatedTarget:n}),n&&a(n).trigger(i),a(this._element).trigger(r),r.isDefaultPrevented()||i.isDefaultPrevented()||(t&&(e=a(t)[0]),this._activate(this._element,o),o=function(){var e=a.Event(l.HIDDEN,{relatedTarget:s._element}),t=a.Event(l.SHOWN,{relatedTarget:n});a(n).trigger(e),a(s._element).trigger(t)},e?this._activate(e,e.parentNode,o):o()))},y.prototype.dispose=function(){a.removeClass(this._element,i),this._element=null},y.prototype._activate=function(e,t,n){var i=a(t).find(h)[0],t=n&&_.supportsTransitionEnd()&&(i&&a(i).hasClass(s)||Boolean(a(t).find(r)[0])),n=a.proxy(this._transitionComplete,this,e,i,t,n);i&&t?a(i).one(_.TRANSITION_END,n).emulateTransitionEnd(150):n(),i&&a(i).removeClass(u)},y.prototype._transitionComplete=function(e,t,n,i){var r;t&&(a(t).removeClass(c),(r=a(t).find(g)[0])&&a(r).removeClass(c),t.setAttribute("aria-expanded",!1)),a(e).addClass(c),e.setAttribute("aria-expanded",!0),n?(_.reflow(e),a(e).addClass(u)):a(e).removeClass(s),e.parentNode&&a(e.parentNode).hasClass(o)&&((n=a(e).closest(f)[0])&&a(n).find(m).addClass(c),e.setAttribute("aria-expanded",!0)),i&&i()},y._jQueryInterface=function(n){return this.each(function(){var e=a(this),t=e.data(i);if(t||(t=new y(this),e.data(i,t)),"string"==typeof n){if(void 0===t[n])throw new Error('No method named "'+n+'"');t[n]()}})},x(y,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}}]),y);function y(e){w(this,y),this._element=e}a(document).on(l.CLICK_DATA_API,e,function(e){e.preventDefault(),n._jQueryInterface.call(a(this),"show")}),a.fn.tab=n._jQueryInterface,a.fn.tab.Constructor=n,a.fn.tab.noConflict=function(){return a.fn.tab=t,n._jQueryInterface}}(jQuery),g=function(o){if(void 0===window.Tether)throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");var t="tooltip",i="bs.tooltip",e="."+i,n=o.fn[t],r={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:"0 0",constraints:[]},s={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"string",constraints:"array"},a={TOP:"bottom center",RIGHT:"middle left",BOTTOM:"top center",LEFT:"middle right"},l="in",c="out",u={HIDE:"hide"+e,HIDDEN:"hidden"+e,SHOW:"show"+e,SHOWN:"shown"+e,INSERTED:"inserted"+e,CLICK:"click"+e,FOCUSIN:"focusin"+e,FOCUSOUT:"focusout"+e,MOUSEENTER:"mouseenter"+e,MOUSELEAVE:"mouseleave"+e},f="fade",d="in",p=".tooltip-inner",h={element:!1,enabled:!1},m="hover",g="focus",y="manual",v=(b.prototype.enable=function(){this._isEnabled=!0},b.prototype.disable=function(){this._isEnabled=!1},b.prototype.toggleEnabled=function(){this._isEnabled=!this._isEnabled},b.prototype.toggle=function(e){var t,n;e?(t=this.constructor.DATA_KEY,(n=o(e.currentTarget).data(t))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),o(e.currentTarget).data(t,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)):o(this.getTipElement()).hasClass(d)?this._leave(null,this):this._enter(null,this)},b.prototype.dispose=function(){clearTimeout(this._timeout),this.cleanupTether(),o.removeData(this.element,this.constructor.DATA_KEY),o(this.element).off(this.constructor.EVENT_KEY),this.tip&&o(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._tether=null,this.element=null,this.config=null,this.tip=null},b.prototype.show=function(){var e,t=this,n=o.Event(this.constructor.Event.SHOW);this.isWithContent()&&this._isEnabled&&(o(this.element).trigger(n),e=o.contains(this.element.ownerDocument.documentElement,this.element),!n.isDefaultPrevented()&&e&&(n=this.getTipElement(),e=_.getUID(this.constructor.NAME),n.setAttribute("id",e),this.element.setAttribute("aria-describedby",e),this.setContent(),this.config.animation&&o(n).addClass(f),e="function"==typeof this.config.placement?this.config.placement.call(this,n,this.element):this.config.placement,e=this._getAttachment(e),o(n).data(this.constructor.DATA_KEY,this).appendTo(document.body),o(this.element).trigger(this.constructor.Event.INSERTED),this._tether=new Tether({attachment:e,element:n,target:this.element,classes:h,classPrefix:"bs-tether",offset:this.config.offset,constraints:this.config.constraints,addTargetClasses:!1}),_.reflow(n),this._tether.position(),o(n).addClass(d),n=function(){var e=t._hoverState;t._hoverState=null,o(t.element).trigger(t.constructor.Event.SHOWN),e===c&&t._leave(null,t)},_.supportsTransitionEnd()&&o(this.tip).hasClass(f)?o(this.tip).one(_.TRANSITION_END,n).emulateTransitionEnd(b._TRANSITION_DURATION):n()))},b.prototype.hide=function(e){function t(){n._hoverState!==l&&i.parentNode&&i.parentNode.removeChild(i),n.element.removeAttribute("aria-describedby"),o(n.element).trigger(n.constructor.Event.HIDDEN),n.cleanupTether(),e&&e()}var n=this,i=this.getTipElement(),r=o.Event(this.constructor.Event.HIDE);o(this.element).trigger(r),r.isDefaultPrevented()||(o(i).removeClass(d),_.supportsTransitionEnd()&&o(this.tip).hasClass(f)?o(i).one(_.TRANSITION_END,t).emulateTransitionEnd(150):t(),this._hoverState="")},b.prototype.isWithContent=function(){return Boolean(this.getTitle())},b.prototype.getTipElement=function(){return this.tip=this.tip||o(this.config.template)[0]},b.prototype.setContent=function(){var e=o(this.getTipElement());this.setElementContent(e.find(p),this.getTitle()),e.removeClass(f).removeClass(d),this.cleanupTether()},b.prototype.setElementContent=function(e,t){var n=this.config.html;"object"===(void 0===t?"undefined":S(t))&&(t.nodeType||t.jquery)?n?o(t).parent().is(e)||e.empty().append(t):e.text(o(t).text()):e[n?"html":"text"](t)},b.prototype.getTitle=function(){return this.element.getAttribute("data-original-title")||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},b.prototype.cleanupTether=function(){this._tether&&this._tether.destroy()},b.prototype._getAttachment=function(e){return a[e.toUpperCase()]},b.prototype._setListeners=function(){var n=this;this.config.trigger.split(" ").forEach(function(e){var t;"click"===e?o(n.element).on(n.constructor.Event.CLICK,n.config.selector,o.proxy(n.toggle,n)):e!==y&&(t=e===m?n.constructor.Event.MOUSEENTER:n.constructor.Event.FOCUSIN,e=e===m?n.constructor.Event.MOUSELEAVE:n.constructor.Event.FOCUSOUT,o(n.element).on(t,n.config.selector,o.proxy(n._enter,n)).on(e,n.config.selector,o.proxy(n._leave,n)))}),this.config.selector?this.config=o.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},b.prototype._fixTitle=function(){var e=S(this.element.getAttribute("data-original-title"));!this.element.getAttribute("title")&&"string"===e||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},b.prototype._enter=function(e,t){var n=this.constructor.DATA_KEY;return(t=t||o(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),o(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusin"===e.type?g:m]=!0),o(t.getTipElement()).hasClass(d)||t._hoverState===l?void(t._hoverState=l):(clearTimeout(t._timeout),t._hoverState=l,t.config.delay&&t.config.delay.show?void(t._timeout=setTimeout(function(){t._hoverState===l&&t.show()},t.config.delay.show)):void t.show())},b.prototype._leave=function(e,t){var n=this.constructor.DATA_KEY;if((t=t||o(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),o(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusout"===e.type?g:m]=!1),!t._isWithActiveTrigger())return clearTimeout(t._timeout),t._hoverState=c,t.config.delay&&t.config.delay.hide?void(t._timeout=setTimeout(function(){t._hoverState===c&&t.hide()},t.config.delay.hide)):void t.hide()},b.prototype._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},b.prototype._getConfig=function(e){return(e=o.extend({},this.constructor.Default,o(this.element).data(),e)).delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),_.typeCheckConfig(t,e,this.constructor.DefaultType),e},b.prototype._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},b._jQueryInterface=function(n){return this.each(function(){var e=o(this).data(i),t="object"===(void 0===n?"undefined":S(n))?n:null;if((e||!/dispose|hide/.test(n))&&(e||(e=new b(this,t),o(this).data(i,e)),"string"==typeof n)){if(void 0===e[n])throw new Error('No method named "'+n+'"');e[n]()}})},x(b,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}},{key:"Default",get:function(){return r}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return u}},{key:"EVENT_KEY",get:function(){return e}},{key:"DefaultType",get:function(){return s}}]),b);function b(e,t){w(this,b),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._tether=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}return o.fn[t]=v._jQueryInterface,o.fn[t].Constructor=v,o.fn[t].noConflict=function(){return o.fn[t]=n,v._jQueryInterface},v}(jQuery),function(i){var e,t="popover",r="bs.popover",n="."+r,o=i.fn[t],s=i.extend({},g.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),a=i.extend({},g.DefaultType,{content:"(string|element|function)"}),l="fade",c="in",u=".popover-title",f=".popover-content",d={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,INSERTED:"inserted"+n,CLICK:"click"+n,FOCUSIN:"focusin"+n,FOCUSOUT:"focusout"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n},p=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+m(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(h,e=g),h.prototype.isWithContent=function(){return this.getTitle()||this._getContent()},h.prototype.getTipElement=function(){return this.tip=this.tip||i(this.config.template)[0]},h.prototype.setContent=function(){var e=i(this.getTipElement());this.setElementContent(e.find(u),this.getTitle()),this.setElementContent(e.find(f),this._getContent()),e.removeClass(l).removeClass(c),this.cleanupTether()},h.prototype._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},h._jQueryInterface=function(n){return this.each(function(){var e=i(this).data(r),t="object"===(void 0===n?"undefined":S(n))?n:null;if((e||!/destroy|hide/.test(n))&&(e||(e=new h(this,t),i(this).data(r,e)),"string"==typeof n)){if(void 0===e[n])throw new Error('No method named "'+n+'"');e[n]()}})},x(h,null,[{key:"VERSION",get:function(){return"4.0.0-alpha.5"}},{key:"Default",get:function(){return s}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return r}},{key:"Event",get:function(){return d}},{key:"EVENT_KEY",get:function(){return n}},{key:"DefaultType",get:function(){return a}}]),h);function h(){return w(this,h),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=m(t)&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}i.fn[t]=p._jQueryInterface,i.fn[t].Constructor=p,i.fn[t].noConflict=function(){return i.fn[t]=o,p._jQueryInterface}}(jQuery)},291:function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function l(e){return"function"==typeof e}function c(e){return"object"===t(e)&&null!==e}function u(e){return void 0===e}((e.exports=i).EventEmitter=i).prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},i.prototype.emit=function(e){var t,n,i,r,o,s;if(this._events||(this._events={}),"error"===e&&(!this._events.error||c(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var a=new Error('Uncaught, unspecified "error" event. ('+t+")");throw a.context=t,a}if(u(n=this._events[e]))return!1;if(l(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:r=Array.prototype.slice.call(arguments,1),n.apply(this,r)}else if(c(n))for(r=Array.prototype.slice.call(arguments,1),i=(s=n.slice()).length,o=0;o<i;o++)s[o].apply(this,r);return!0},i.prototype.on=i.prototype.addListener=function(e,t){var n;if(!l(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,l(t.listener)?t.listener:t),this._events[e]?c(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,c(this._events[e])&&!this._events[e].warned&&(n=u(this._maxListeners)?i.defaultMaxListeners:this._maxListeners)&&0<n&&this._events[e].length>n&&(this._events[e].warned=!0,console.trace),this},i.prototype.once=function(e,t){if(!l(t))throw TypeError("listener must be a function");var n=!1;function i(){this.removeListener(e,i),n||(n=!0,t.apply(this,arguments))}return i.listener=t,this.on(e,i),this},i.prototype.removeListener=function(e,t){var n,i,r,o;if(!l(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=(n=this._events[e]).length,i=-1,n===t||l(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(c(n)){for(o=r;0<o--;)if(n[o]===t||n[o].listener&&n[o].listener===t){i=o;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},i.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(l(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},i.prototype.listeners=function(e){e=this._events&&this._events[e]?l(this._events[e])?[this._events[e]]:this._events[e].slice():[];return e},i.prototype.listenerCount=function(e){if(this._events){e=this._events[e];if(l(e))return 1;if(e)return e.length}return 0},i.listenerCount=function(e,t){return e.listenerCount(t)}},144:function(e,t){var n;function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n=function(){return function i(r,o,s){function a(n,e){if(!o[n]){if(!r[n]){if(0,l)return l(n,!0);var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}t=o[n]={exports:{}};r[n][0].call(t.exports,function(e){var t=r[n][1][e];return a(t||e)},t,t.exports,i,r,o,s)}return o[n].exports}for(var l=void 0,e=0;e<s.length;e++)a(s[e]);return a}({1:[function(e,t,n){t.exports=function(e){var t,n,i,r=-1;if(1<e.lines.length&&"flex-start"===e.style.alignContent)for(t=0;i=e.lines[++r];)i.crossStart=t,t+=i.cross;else if(1<e.lines.length&&"flex-end"===e.style.alignContent)for(t=e.flexStyle.crossSpace;i=e.lines[++r];)i.crossStart=t,t+=i.cross;else if(1<e.lines.length&&"center"===e.style.alignContent)for(t=e.flexStyle.crossSpace/2;i=e.lines[++r];)i.crossStart=t,t+=i.cross;else if(1<e.lines.length&&"space-between"===e.style.alignContent)for(n=e.flexStyle.crossSpace/(e.lines.length-1),t=0;i=e.lines[++r];)i.crossStart=t,t+=i.cross+n;else if(1<e.lines.length&&"space-around"===e.style.alignContent)for(t=(n=2*e.flexStyle.crossSpace/(2*e.lines.length))/2;i=e.lines[++r];)i.crossStart=t,t+=i.cross+n;else for(n=e.flexStyle.crossSpace/e.lines.length,t=e.flexStyle.crossInnerBefore;i=e.lines[++r];)i.crossStart=t,i.cross+=n,t+=i.cross}},{}],2:[function(e,t,n){t.exports=function(e){for(var t,n=-1;line=e.lines[++n];)for(t=-1;child=line.children[++t];){var i=child.style.alignSelf;"flex-start"===(i="auto"===i?e.style.alignItems:i)?child.flexStyle.crossStart=line.crossStart:"flex-end"===i?child.flexStyle.crossStart=line.crossStart+line.cross-child.flexStyle.crossOuter:"center"===i?child.flexStyle.crossStart=line.crossStart+(line.cross-child.flexStyle.crossOuter)/2:(child.flexStyle.crossStart=line.crossStart,child.flexStyle.crossOuter=line.cross,child.flexStyle.cross=child.flexStyle.crossOuter-child.flexStyle.crossBefore-child.flexStyle.crossAfter)}}},{}],3:[function(e,t,n){t.exports=function(e,t){var n="row"===t||"row-reverse"===t,i=e.mainAxis;i?n&&"inline"===i||!n&&"block"===i||(e.flexStyle={main:e.flexStyle.cross,cross:e.flexStyle.main,mainOffset:e.flexStyle.crossOffset,crossOffset:e.flexStyle.mainOffset,mainBefore:e.flexStyle.crossBefore,mainAfter:e.flexStyle.crossAfter,crossBefore:e.flexStyle.mainBefore,crossAfter:e.flexStyle.mainAfter,mainInnerBefore:e.flexStyle.crossInnerBefore,mainInnerAfter:e.flexStyle.crossInnerAfter,crossInnerBefore:e.flexStyle.mainInnerBefore,crossInnerAfter:e.flexStyle.mainInnerAfter,mainBorderBefore:e.flexStyle.crossBorderBefore,mainBorderAfter:e.flexStyle.crossBorderAfter,crossBorderBefore:e.flexStyle.mainBorderBefore,crossBorderAfter:e.flexStyle.mainBorderAfter}):(e.flexStyle=n?{main:e.style.width,cross:e.style.height,mainOffset:e.style.offsetWidth,crossOffset:e.style.offsetHeight,mainBefore:e.style.marginLeft,mainAfter:e.style.marginRight,crossBefore:e.style.marginTop,crossAfter:e.style.marginBottom,mainInnerBefore:e.style.paddingLeft,mainInnerAfter:e.style.paddingRight,crossInnerBefore:e.style.paddingTop,crossInnerAfter:e.style.paddingBottom,mainBorderBefore:e.style.borderLeftWidth,mainBorderAfter:e.style.borderRightWidth,crossBorderBefore:e.style.borderTopWidth,crossBorderAfter:e.style.borderBottomWidth}:{main:e.style.height,cross:e.style.width,mainOffset:e.style.offsetHeight,crossOffset:e.style.offsetWidth,mainBefore:e.style.marginTop,mainAfter:e.style.marginBottom,crossBefore:e.style.marginLeft,crossAfter:e.style.marginRight,mainInnerBefore:e.style.paddingTop,mainInnerAfter:e.style.paddingBottom,crossInnerBefore:e.style.paddingLeft,crossInnerAfter:e.style.paddingRight,mainBorderBefore:e.style.borderTopWidth,mainBorderAfter:e.style.borderBottomWidth,crossBorderBefore:e.style.borderLeftWidth,crossBorderAfter:e.style.borderRightWidth},"content-box"===e.style.boxSizing&&("number"==typeof e.flexStyle.main&&(e.flexStyle.main+=e.flexStyle.mainInnerBefore+e.flexStyle.mainInnerAfter+e.flexStyle.mainBorderBefore+e.flexStyle.mainBorderAfter),"number"==typeof e.flexStyle.cross&&(e.flexStyle.cross+=e.flexStyle.crossInnerBefore+e.flexStyle.crossInnerAfter+e.flexStyle.crossBorderBefore+e.flexStyle.crossBorderAfter))),e.mainAxis=n?"inline":"block",e.crossAxis=n?"block":"inline","number"==typeof e.style.flexBasis&&(e.flexStyle.main=e.style.flexBasis+e.flexStyle.mainInnerBefore+e.flexStyle.mainInnerAfter+e.flexStyle.mainBorderBefore+e.flexStyle.mainBorderAfter),e.flexStyle.mainOuter=e.flexStyle.main,e.flexStyle.crossOuter=e.flexStyle.cross,"auto"===e.flexStyle.mainOuter&&(e.flexStyle.mainOuter=e.flexStyle.mainOffset),"auto"===e.flexStyle.crossOuter&&(e.flexStyle.crossOuter=e.flexStyle.crossOffset),"number"==typeof e.flexStyle.mainBefore&&(e.flexStyle.mainOuter+=e.flexStyle.mainBefore),"number"==typeof e.flexStyle.mainAfter&&(e.flexStyle.mainOuter+=e.flexStyle.mainAfter),"number"==typeof e.flexStyle.crossBefore&&(e.flexStyle.crossOuter+=e.flexStyle.crossBefore),"number"==typeof e.flexStyle.crossAfter&&(e.flexStyle.crossOuter+=e.flexStyle.crossAfter)}},{}],4:[function(e,t,n){var r=e("../reduce");t.exports=function(n){var i;0<n.mainSpace&&(0<(i=r(n.children,function(e,t){return e+parseFloat(t.style.flexGrow)},0))&&(n.main=r(n.children,function(e,t){return"auto"===t.flexStyle.main?t.flexStyle.main=t.flexStyle.mainOffset+parseFloat(t.style.flexGrow)/i*n.mainSpace:t.flexStyle.main+=parseFloat(t.style.flexGrow)/i*n.mainSpace,t.flexStyle.mainOuter=t.flexStyle.main+t.flexStyle.mainBefore+t.flexStyle.mainAfter,e+t.flexStyle.mainOuter},0),n.mainSpace=0))}},{"../reduce":12}],5:[function(e,t,n){var r=e("../reduce");t.exports=function(n){var i;n.mainSpace<0&&(0<(i=r(n.children,function(e,t){return e+parseFloat(t.style.flexShrink)},0))&&(n.main=r(n.children,function(e,t){return t.flexStyle.main+=parseFloat(t.style.flexShrink)/i*n.mainSpace,t.flexStyle.mainOuter=t.flexStyle.main+t.flexStyle.mainBefore+t.flexStyle.mainAfter,e+t.flexStyle.mainOuter},0),n.mainSpace=0))}},{"../reduce":12}],6:[function(e,t,n){var r=e("../reduce");t.exports=function(e){var t;e.lines=[t={main:0,cross:0,children:[]}];for(var n,i=-1;n=e.children[++i];)"nowrap"===e.style.flexWrap||0===t.children.length||"auto"===e.flexStyle.main||e.flexStyle.main-e.flexStyle.mainInnerBefore-e.flexStyle.mainInnerAfter-e.flexStyle.mainBorderBefore-e.flexStyle.mainBorderAfter>=t.main+n.flexStyle.mainOuter?(t.main+=n.flexStyle.mainOuter,t.cross=Math.max(t.cross,n.flexStyle.crossOuter)):e.lines.push(t={main:n.flexStyle.mainOuter,cross:n.flexStyle.crossOuter,children:[]}),t.children.push(n);e.flexStyle.mainLines=r(e.lines,function(e,t){return Math.max(e,t.main)},0),e.flexStyle.crossLines=r(e.lines,function(e,t){return e+t.cross},0),"auto"===e.flexStyle.main&&(e.flexStyle.main=Math.max(e.flexStyle.mainOffset,e.flexStyle.mainLines+e.flexStyle.mainInnerBefore+e.flexStyle.mainInnerAfter+e.flexStyle.mainBorderBefore+e.flexStyle.mainBorderAfter)),"auto"===e.flexStyle.cross&&(e.flexStyle.cross=Math.max(e.flexStyle.crossOffset,e.flexStyle.crossLines+e.flexStyle.crossInnerBefore+e.flexStyle.crossInnerAfter+e.flexStyle.crossBorderBefore+e.flexStyle.crossBorderAfter)),e.flexStyle.crossSpace=e.flexStyle.cross-e.flexStyle.crossInnerBefore-e.flexStyle.crossInnerAfter-e.flexStyle.crossBorderBefore-e.flexStyle.crossBorderAfter-e.flexStyle.crossLines,e.flexStyle.mainOuter=e.flexStyle.main+e.flexStyle.mainBefore+e.flexStyle.mainAfter,e.flexStyle.crossOuter=e.flexStyle.cross+e.flexStyle.crossBefore+e.flexStyle.crossAfter}},{"../reduce":12}],7:[function(r,e,t){e.exports=function(e){for(var t,n,i=-1;t=e.children[++i];)r("./flex-direction")(t,e.style.flexDirection);for(r("./flex-direction")(e,e.style.flexDirection),r("./order")(e),r("./flexbox-lines")(e),r("./align-content")(e),i=-1;n=e.lines[++i];)n.mainSpace=e.flexStyle.main-e.flexStyle.mainInnerBefore-e.flexStyle.mainInnerAfter-e.flexStyle.mainBorderBefore-e.flexStyle.mainBorderAfter-n.main,r("./flex-grow")(n),r("./flex-shrink")(n),r("./margin-main")(n),r("./margin-cross")(n),r("./justify-content")(n,e.style.justifyContent,e);r("./align-items")(e)}},{"./align-content":1,"./align-items":2,"./flex-direction":3,"./flex-grow":4,"./flex-shrink":5,"./flexbox-lines":6,"./justify-content":8,"./margin-cross":9,"./margin-main":10,"./order":11}],8:[function(e,t,n){t.exports=function(e,t,n){var i,r,o,n=n.flexStyle.mainInnerBefore,s=-1;if("flex-end"===t)for(i=e.mainSpace,i+=n;o=e.children[++s];)o.flexStyle.mainStart=i,i+=o.flexStyle.mainOuter;else if("center"===t)for(i=e.mainSpace/2,i+=n;o=e.children[++s];)o.flexStyle.mainStart=i,i+=o.flexStyle.mainOuter;else if("space-between"===t)for(r=e.mainSpace/(e.children.length-1),i=0,i+=n;o=e.children[++s];)o.flexStyle.mainStart=i,i+=o.flexStyle.mainOuter+r;else if("space-around"===t)for(i=(r=2*e.mainSpace/(2*e.children.length))/2,i+=n;o=e.children[++s];)o.flexStyle.mainStart=i,i+=o.flexStyle.mainOuter+r;else for(i=0,i+=n;o=e.children[++s];)o.flexStyle.mainStart=i,i+=o.flexStyle.mainOuter}},{}],9:[function(e,t,n){t.exports=function(e){for(var t,n=-1;t=e.children[++n];){var i=0;"auto"===t.flexStyle.crossBefore&&++i,"auto"===t.flexStyle.crossAfter&&++i;var r=e.cross-t.flexStyle.crossOuter;"auto"===t.flexStyle.crossBefore&&(t.flexStyle.crossBefore=r/i),"auto"===t.flexStyle.crossAfter&&(t.flexStyle.crossAfter=r/i),"auto"===t.flexStyle.cross?t.flexStyle.crossOuter=t.flexStyle.crossOffset+t.flexStyle.crossBefore+t.flexStyle.crossAfter:t.flexStyle.crossOuter=t.flexStyle.cross+t.flexStyle.crossBefore+t.flexStyle.crossAfter}}},{}],10:[function(e,t,n){t.exports=function(e){for(var t,n=0,i=-1;t=e.children[++i];)"auto"===t.flexStyle.mainBefore&&++n,"auto"===t.flexStyle.mainAfter&&++n;if(0<n){for(i=-1;t=e.children[++i];)"auto"===t.flexStyle.mainBefore&&(t.flexStyle.mainBefore=e.mainSpace/n),"auto"===t.flexStyle.mainAfter&&(t.flexStyle.mainAfter=e.mainSpace/n),"auto"===t.flexStyle.main?t.flexStyle.mainOuter=t.flexStyle.mainOffset+t.flexStyle.mainBefore+t.flexStyle.mainAfter:t.flexStyle.mainOuter=t.flexStyle.main+t.flexStyle.mainBefore+t.flexStyle.mainAfter;e.mainSpace=0}}},{}],11:[function(e,t,n){var i=/^(column|row)-reverse$/;t.exports=function(e){e.children.sort(function(e,t){return e.style.order-t.style.order||e.index-t.index}),i.test(e.style.flexDirection)&&e.children.reverse()}},{}],12:[function(e,t,n){t.exports=function(e,t,n){for(var i=e.length,r=-1;++r<i;)r in e&&(n=t(n,e[r],r));return n}},{}],13:[function(e,t,n){var i=e("./read"),r=e("./write"),o=e("./readAll"),s=e("./writeAll");t.exports=function(e){s(o(e))},t.exports.read=i,t.exports.write=r,t.exports.readAll=o,t.exports.writeAll=s},{"./read":15,"./readAll":16,"./write":17,"./writeAll":18}],14:[function(e,t,n){t.exports=function(e,t){var n=String(e).match(r);if(!n)return e;var i=n[1];return"px"===(n=n[2])?+i:"cm"===n?.3937*i*96:"in"===n?96*i:"mm"===n?.3937*i*96/10:"pc"===n?12*i*96/72:"pt"===n?96*i/72:"rem"===n?16*i:function(e,t){o.style.cssText="border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:"+e+"!important",t.parentNode.insertBefore(o,t.nextSibling);e=o.offsetWidth;return t.parentNode.removeChild(o),e}(e,t)};var r=/^([-+]?\d*\.?\d+)(%|[a-z]+)$/,o=document.createElement("div")},{}],15:[function(e,t,n){t.exports=function(e){var t={alignContent:"stretch",alignItems:"stretch",alignSelf:"auto",borderBottomWidth:0,borderLeftWidth:0,borderRightWidth:0,borderTopWidth:0,boxSizing:"content-box",display:"inline",flexBasis:"auto",flexDirection:"row",flexGrow:0,flexShrink:1,flexWrap:"nowrap",justifyContent:"flex-start",height:"auto",marginTop:0,marginRight:0,marginLeft:0,marginBottom:0,paddingTop:0,paddingRight:0,paddingLeft:0,paddingBottom:0,maxHeight:"none",maxWidth:"none",minHeight:0,minWidth:0,order:0,position:"static",width:"auto"};if(e instanceof Element){var n,i=e.hasAttribute("data-style"),r=i?e.getAttribute("data-style"):e.getAttribute("style")||"";for(n in i||e.setAttribute("data-style",r),function(e,t){for(var n in e)n in t&&!/^(alignSelf|height|width)$/.test(n)&&(e[n]=t[n])}(t,window.getComputedStyle&&getComputedStyle(e)||{}),function(e,t){for(var n in e){var i;n in t?e[n]=t[n]:(i=n.replace(/[A-Z]/g,"-$&").toLowerCase())in t&&(e[n]=t[i])}"-js-display"in t&&(e.display=t["-js-display"])}(t,e.currentStyle||{}),function(e,t){for(var n;n=o.exec(t);){var i=n[1].toLowerCase().replace(/-[a-z]/g,function(e){return e.slice(1).toUpperCase()});e[i]=n[2]}}(t,r),t)t[n]=s(t[n],e);r=e.getBoundingClientRect();t.offsetHeight=r.height||e.offsetHeight,t.offsetWidth=r.width||e.offsetWidth}return{element:e,style:t}};var o=/([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g,s=e("./getComputedLength")},{"./getComputedLength":14}],16:[function(e,t,n){function u(e){var t=e instanceof Element,n=t&&e.getAttribute("data-style"),e=t&&e.currentStyle&&e.currentStyle["-js-display"];return i.test(n)||r.test(e)}t.exports=function(e){var t=[];return function e(t,n){for(var i,r=u(t),o=[],s=-1;i=t.childNodes[++s];){var a=3===i.nodeType&&!/^\s*$/.test(i.nodeValue);r&&a&&(l=i,(i=t.insertBefore(document.createElement("flex-item"),l)).appendChild(l));var l,a=i instanceof Element;a&&(l=e(i,n),r&&((a=i.style).display="inline-block",a.position="absolute",l.style=f(i).style,o.push(l)))}var c={element:t,children:o};return r&&(c.style=f(t).style,n.push(c)),c}(e,t),t};var f=e("../read"),i=/(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i,r=/^(inline-)?flex$/i},{"../read":15}],17:[function(e,t,n){function a(e){return"string"==typeof e?e:Math.max(e,0)+"px"}t.exports=function(e){l(e);var t=e.element.style,n="inline"===e.mainAxis?["main","cross"]:["cross","main"];t.boxSizing="content-box",t.display="block",t.position="relative",t.width=a(e.flexStyle[n[0]]-e.flexStyle[n[0]+"InnerBefore"]-e.flexStyle[n[0]+"InnerAfter"]-e.flexStyle[n[0]+"BorderBefore"]-e.flexStyle[n[0]+"BorderAfter"]),t.height=a(e.flexStyle[n[1]]-e.flexStyle[n[1]+"InnerBefore"]-e.flexStyle[n[1]+"InnerAfter"]-e.flexStyle[n[1]+"BorderBefore"]-e.flexStyle[n[1]+"BorderAfter"]);for(var i,r=-1;i=e.children[++r];){var o=i.element.style,s="inline"===i.mainAxis?["main","cross"]:["cross","main"];o.boxSizing="content-box",o.display="block",o.position="absolute","auto"!==i.flexStyle[s[0]]&&(o.width=a(i.flexStyle[s[0]]-i.flexStyle[s[0]+"InnerBefore"]-i.flexStyle[s[0]+"InnerAfter"]-i.flexStyle[s[0]+"BorderBefore"]-i.flexStyle[s[0]+"BorderAfter"])),"auto"!==i.flexStyle[s[1]]&&(o.height=a(i.flexStyle[s[1]]-i.flexStyle[s[1]+"InnerBefore"]-i.flexStyle[s[1]+"InnerAfter"]-i.flexStyle[s[1]+"BorderBefore"]-i.flexStyle[s[1]+"BorderAfter"])),o.top=a(i.flexStyle[s[1]+"Start"]),o.left=a(i.flexStyle[s[0]+"Start"]),o.marginTop=a(i.flexStyle[s[1]+"Before"]),o.marginRight=a(i.flexStyle[s[0]+"After"]),o.marginBottom=a(i.flexStyle[s[1]+"After"]),o.marginLeft=a(i.flexStyle[s[0]+"Before"])}};var l=e("../flexbox")},{"../flexbox":7}],18:[function(e,t,n){t.exports=function(e){for(var t,n=-1;t=e[++n];)i(t)};var i=e("../write")},{"../write":17}]},{},[13])(13)},"object"==i(t)?e.exports=n():void 0===(n="function"==typeof(n=n)?n.apply(t,[]):n)||(e.exports=n)},653:function(e,t,n){var i,r,o;function Ne(e){return(Ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o=function(ae){"use strict";function i(e,s){function t(e){if(!(!0===X.data(De+"_intouch")||0<ae(e.target).closest(s.excludedElements,X).length)){var t=e.originalEvent||e;if(!t.pointerType||"mouse"!=t.pointerType||0!=s.fallbackToMouseEvents){var n,i=t.touches,r=i?i[0]:t;return G=Ce,i?Z=i.length:!1!==s.preventDefaultEvents&&e.preventDefault(),Y=R=H=null,$=1,Q=U=z=q=W=0,(e={})[le]=O(le),e[ce]=O(ce),e[ue]=O(ue),e[fe]=O(fe),K=e,_(),E(0,r),!i||Z===s.fingers||s.fingers===_e||m()?(ee=N(),2==Z&&(E(1,i[1]),z=U=P(J[0].start,J[1].start)),(s.swipeStatus||s.pinchStatus)&&(n=c(t,G))):n=!1,!1===n?(c(t,G=ke),n):(s.hold&&(se=setTimeout(ae.proxy(function(){X.trigger("hold",[t.target]),s.hold&&(n=s.hold.call(X,t,t.target))},this),s.longTapThreshold)),C(!0),null)}}}function n(e){var t,n,i,r,o=e.originalEvent||e;G===Ae||G===ke||T()||(t=A((n=o.touches)?n[0]:o),te=N(),n&&(Z=n.length),s.hold&&clearTimeout(se),G=Ee,2==Z&&(0==z?(E(1,n[1]),z=U=P(J[0].start,J[1].start)):(A(n[1]),U=P(J[0].end,J[1].end),J[0].end,J[1].end,Y=$<1?pe:de),$=(U/z*1).toFixed(2),Q=Math.abs(z-U)),Z===s.fingers||s.fingers===_e||!n||m()?(H=D(t.start,t.end),function(e,t){if(!1!==s.preventDefaultEvents)if(s.allowPageScroll===he)e.preventDefault();else{var n=s.allowPageScroll===me;switch(t){case le:(s.swipeLeft&&n||!n&&s.allowPageScroll!=Se)&&e.preventDefault();break;case ce:(s.swipeRight&&n||!n&&s.allowPageScroll!=Se)&&e.preventDefault();break;case ue:(s.swipeUp&&n||!n&&s.allowPageScroll!=xe)&&e.preventDefault();break;case fe:(s.swipeDown&&n||!n&&s.allowPageScroll!=xe)&&e.preventDefault()}}}(e,R=D(t.last,t.end)),i=t.start,r=t.end,W=Math.round(Math.sqrt(Math.pow(r.x-i.x,2)+Math.pow(r.y-i.y,2))),q=I(),n=W,(e=H)!=he&&(n=Math.max(n,k(e)),K[e].distance=n),r=c(o,G),s.triggerOnTouchEnd&&!s.triggerOnTouchLeave||(i=!0,s.triggerOnTouchLeave&&(e={left:(n=(e=ae(e=this)).offset()).left,right:n.left+e.outerWidth(),top:n.top,bottom:n.top+e.outerHeight()},t=t.end,e=e,i=t.x>e.left&&t.x<e.right&&t.y>e.top&&t.y<e.bottom),!s.triggerOnTouchEnd&&i?G=l(Ee):s.triggerOnTouchLeave&&!i&&(G=l(Ae)),G!=ke&&G!=Ae||c(o,G))):c(o,G=ke),!1===r&&c(o,G=ke))}function i(e){var t,n=e.originalEvent||e,i=n.touches;if(i){if(i.length&&!T())return t=n,ne=N(),ie=t.touches.length+1,!0;if(i.length&&T())return!0}return T()&&(Z=ie),te=N(),q=I(),d()||!f()?c(n,G=ke):s.triggerOnTouchEnd||!1===s.triggerOnTouchEnd&&G===Ee?(!1!==s.preventDefaultEvents&&!1!==e.cancelable&&e.preventDefault(),c(n,G=Ae)):!s.triggerOnTouchEnd&&w()?u(n,G=Ae,ve):G===Ee&&c(n,G=ke),C(!1),null}function r(){U=z=ee=te=Z=0,_(),C(!($=1))}function o(e){e=e.originalEvent||e;s.triggerOnTouchLeave&&c(e,G=l(Ae))}function a(){X.off(B,t),X.off(M,r),X.off(F,n),X.off(L,i),V&&X.off(V,o),C(!1)}function l(e){var t=e,n=p(),i=f(),r=d();return!n||r?t=ke:!i||e!=Ee||s.triggerOnTouchEnd&&!s.triggerOnTouchLeave?!i&&e==Ae&&s.triggerOnTouchLeave&&(t=ke):t=Ae,t}function c(e,t){var n,i=e.touches;return(g()&&y()||y())&&(n=u(e,t,ge)),(h()&&m()||m())&&!1!==n&&(n=u(e,t,ye)),x()&&S()&&!1!==n?n=u(e,t,be):q>s.longTapThreshold&&W<Te&&s.longTap&&!1!==n?n=u(e,t,we):1!==Z&&Oe||!(isNaN(W)||W<s.threshold)||!w()||!1===n||(n=u(e,t,ve)),t===ke&&r(),t===Ae&&(i&&i.length||r()),n}function u(e,t,n){var i;if(n==ge){if(X.trigger("swipeStatus",[t,H||null,W||0,q||0,Z,J,R]),s.swipeStatus&&!1===(i=s.swipeStatus.call(X,e,t,H||null,W||0,q||0,Z,J,R)))return!1;if(t==Ae&&g()){if(clearTimeout(oe),clearTimeout(se),X.trigger("swipe",[H,W,q,Z,J,R]),s.swipe&&!1===(i=s.swipe.call(X,e,H,W,q,Z,J,R)))return!1;switch(H){case le:X.trigger("swipeLeft",[H,W,q,Z,J,R]),s.swipeLeft&&(i=s.swipeLeft.call(X,e,H,W,q,Z,J,R));break;case ce:X.trigger("swipeRight",[H,W,q,Z,J,R]),s.swipeRight&&(i=s.swipeRight.call(X,e,H,W,q,Z,J,R));break;case ue:X.trigger("swipeUp",[H,W,q,Z,J,R]),s.swipeUp&&(i=s.swipeUp.call(X,e,H,W,q,Z,J,R));break;case fe:X.trigger("swipeDown",[H,W,q,Z,J,R]),s.swipeDown&&(i=s.swipeDown.call(X,e,H,W,q,Z,J,R))}}}if(n==ye){if(X.trigger("pinchStatus",[t,Y||null,Q||0,q||0,Z,$,J]),s.pinchStatus&&!1===(i=s.pinchStatus.call(X,e,t,Y||null,Q||0,q||0,Z,$,J)))return!1;if(t==Ae&&h())switch(Y){case de:X.trigger("pinchIn",[Y||null,Q||0,q||0,Z,$,J]),s.pinchIn&&(i=s.pinchIn.call(X,e,Y||null,Q||0,q||0,Z,$,J));break;case pe:X.trigger("pinchOut",[Y||null,Q||0,q||0,Z,$,J]),s.pinchOut&&(i=s.pinchOut.call(X,e,Y||null,Q||0,q||0,Z,$,J))}}return n==ve?t!==ke&&t!==Ae||(clearTimeout(oe),clearTimeout(se),S()&&!x()?(re=N(),oe=setTimeout(ae.proxy(function(){re=null,X.trigger("tap",[e.target]),s.tap&&(i=s.tap.call(X,e,e.target))},this),s.doubleTapThreshold)):(re=null,X.trigger("tap",[e.target]),s.tap&&(i=s.tap.call(X,e,e.target)))):n==be?t!==ke&&t!==Ae||(clearTimeout(oe),clearTimeout(se),re=null,X.trigger("doubletap",[e.target]),s.doubleTap&&(i=s.doubleTap.call(X,e,e.target))):n==we&&(t!==ke&&t!==Ae||(clearTimeout(oe),re=null,X.trigger("longtap",[e.target]),s.longTap&&(i=s.longTap.call(X,e,e.target)))),i}function f(){var e=!0;return e=null!==s.threshold?W>=s.threshold:e}function d(){var e=!1;return e=null!==s.cancelThreshold&&null!==H?k(H)-W>=s.cancelThreshold:e}function p(){return!s.maxTimeThreshold||!(q>=s.maxTimeThreshold)}function h(){var e=v(),t=b(),n=null===s.pinchThreshold||Q>=s.pinchThreshold;return e&&t&&n}function m(){return s.pinchStatus||s.pinchIn||s.pinchOut}function g(){var e=p(),t=f(),n=v(),i=b();return!d()&&i&&n&&t&&e}function y(){return s.swipe||s.swipeStatus||s.swipeLeft||s.swipeRight||s.swipeUp||s.swipeDown}function v(){return Z===s.fingers||s.fingers===_e||!Oe}function b(){return 0!==J[0].end.x}function w(){return s.tap}function S(){return!!s.doubleTap}function x(){if(null==re)return!1;var e=N();return S()&&e-re<=s.doubleTapThreshold}function _(){ie=ne=0}function T(){var e=!1;return e=ne&&N()-ne<=s.fingerReleaseThreshold?!0:e}function C(e){X&&(!0===e?(X.on(F,n),X.on(L,i),V&&X.on(V,o)):(X.off(F,n,!1),X.off(L,i,!1),V&&X.off(V,o,!1)),X.data(De+"_intouch",!0===e))}function E(e,t){var n={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return n.start.x=n.last.x=n.end.x=t.pageX||t.clientX,n.start.y=n.last.y=n.end.y=t.pageY||t.clientY,J[e]=n}function A(e){var t=void 0!==e.identifier?e.identifier:0,n=J[t]||null;return(n=null===n?E(t,e):n).last.x=n.end.x,n.last.y=n.end.y,n.end.x=e.pageX||e.clientX,n.end.y=e.pageY||e.clientY,n}function k(e){return K[e]?K[e].distance:void 0}function O(e){return{direction:e,distance:0}}function I(){return te-ee}function P(e,t){var n=Math.abs(e.x-t.x),t=Math.abs(e.y-t.y);return Math.round(Math.sqrt(n*n+t*t))}function D(e,t){if(i=t,(n=e).x==i.x&&n.y==i.y)return he;var n,i,e=(i=t,e=(t=e).x-i.x,t=i.y-t.y,e=Math.atan2(t,e),e=(e=Math.round(180*e/Math.PI))<0?360-Math.abs(e):e);return e<=45&&0<=e||e<=360&&315<=e?le:135<=e&&e<=225?ce:45<e&&e<135?fe:ue}function N(){return(new Date).getTime()}var s=ae.extend({},s),j=Oe||Pe||!s.fallbackToMouseEvents,B=j?Pe?Ie?"MSPointerDown":"pointerdown":"touchstart":"mousedown",F=j?Pe?Ie?"MSPointerMove":"pointermove":"touchmove":"mousemove",L=j?Pe?Ie?"MSPointerUp":"pointerup":"touchend":"mouseup",V=!j||Pe?"mouseleave":null,M=Pe?Ie?"MSPointerCancel":"pointercancel":"touchcancel",W=0,H=null,R=null,q=0,z=0,U=0,$=1,Q=0,Y=0,K=null,X=ae(e),G="start",Z=0,J={},ee=0,te=0,ne=0,ie=0,re=0,oe=null,se=null;try{X.on(B,t),X.on(M,r)}catch(e){ae.error("events not supported "+B+","+M+" on jQuery.swipe")}this.enable=function(){return this.disable(),X.on(B,t),X.on(M,r),X},this.disable=function(){return a(),X},this.destroy=function(){a(),X.data(De,null),X=null},this.option=function(e,t){if("object"==Ne(e))s=ae.extend(s,e);else if(void 0!==s[e]){if(void 0===t)return s[e];s[e]=t}else{if(!e)return s;ae.error("Option "+e+" does not exist on jQuery.swipe.options")}return null}}var le="left",ce="right",ue="up",fe="down",de="in",pe="out",he="none",me="auto",ge="swipe",ye="pinch",ve="tap",be="doubletap",we="longtap",Se="horizontal",xe="vertical",_e="all",Te=10,Ce="start",Ee="move",Ae="end",ke="cancel",Oe="ontouchstart"in window,Ie=window.navigator.msPointerEnabled&&!window.PointerEvent&&!Oe,Pe=(window.PointerEvent||window.navigator.msPointerEnabled)&&!Oe,De="TouchSwipe";ae.fn.swipe=function(e){var t=ae(this),n=t.data(De);if(n&&"string"==typeof e){if(n[e])return n[e].apply(n,Array.prototype.slice.call(arguments,1));ae.error("Method "+e+" does not exist on jQuery.swipe")}else if(n&&"object"==Ne(e))n.option.apply(n,arguments);else if(!(n||"object"!=Ne(e)&&e))return function(n){return!n||void 0!==n.allowPageScroll||void 0===n.swipe&&void 0===n.swipeStatus||(n.allowPageScroll=he),void 0!==n.click&&void 0===n.tap&&(n.tap=n.click),n=ae.extend({},ae.fn.swipe.defaults,n=n||{}),this.each(function(){var e=ae(this),t=e.data(De);t||(t=new i(this,n),e.data(De,t))})}.apply(this,arguments);return t},ae.fn.swipe.version="1.6.18",ae.fn.swipe.defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0},ae.fn.swipe.phases={PHASE_START:Ce,PHASE_MOVE:Ee,PHASE_END:Ae,PHASE_CANCEL:ke},ae.fn.swipe.directions={LEFT:le,RIGHT:ce,UP:ue,DOWN:fe,IN:de,OUT:pe},ae.fn.swipe.pageScroll={NONE:he,HORIZONTAL:Se,VERTICAL:xe,AUTO:me},ae.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:_e}},n.amdO.jQuery?(i=[n(609)],void 0===(r="function"==typeof(r=o)?r.apply(t,i):r)||(e.exports=r)):o(e.exports?n(609):jQuery)},158:function(e,t){var n;function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}void 0===(n="function"==typeof(n=function(){"use strict";var t=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1;i.configurable=!0;if("value"in i)i.writable=!0;Object.defineProperty(e,i.key,i)}}return function(e,t,n){if(t)i(e.prototype,t);if(n)i(e,n);return e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _=undefined;if(typeof _==="undefined")_={modules:[]};var r=null;function s(e){var t=e.getBoundingClientRect();var n={};for(var i in t)n[i]=t[i];try{if(e.ownerDocument!==document){var r=e.ownerDocument.defaultView.frameElement;if(r){var o=s(r);n.top+=o.top;n.bottom+=o.top;n.left+=o.left;n.right+=o.left}}}catch(e){}return n}function c(e){var t=getComputedStyle(e)||{};var n=t.position;var i=[];if(n==="fixed")return[e];var r=e;while((r=r.parentNode)&&r&&r.nodeType===1){var o=undefined;try{o=getComputedStyle(r)}catch(e){}if(typeof o==="undefined"||o===null){i.push(r);return i}var s=o;var a=s.overflow;var l=s.overflowX;var c=s.overflowY;if(/(auto|scroll|overlay)/.test(a+c+l))if(n!=="absolute"||["relative","absolute","fixed"].indexOf(o.position)>=0)i.push(r)}i.push(e.ownerDocument.body);if(e.ownerDocument!==document)i.push(e.ownerDocument.defaultView);return i}var o=function(){var e=0;return function(){return++e}}(),a={},l=function e(){var t=r;if(!t||!document.body.contains(t)){t=document.createElement("div");t.setAttribute("data-tether-id",o());x(t.style,{top:0,left:0,position:"absolute"});document.body.appendChild(t);r=t}var n=t.getAttribute("data-tether-id");if(typeof a[n]==="undefined"){a[n]=s(t);k(function(){delete a[n]})}return a[n]};function u(){if(r)document.body.removeChild(r);r=null}function T(e){var t=undefined;if(e===document){t=document;e=document.documentElement}else t=e.ownerDocument;var n=t.documentElement;var i=s(e);var r=l();i.top-=r.top;i.left-=r.left;if(typeof i.width==="undefined")i.width=document.body.scrollWidth-i.left-i.right;if(typeof i.height==="undefined")i.height=document.body.scrollHeight-i.top-i.bottom;i.top=i.top-n.clientTop;i.left=i.left-n.clientLeft;i.right=t.body.clientWidth-i.width-i.left;i.bottom=t.body.clientHeight-i.height-i.top;return i}function C(e){return e.offsetParent||document.documentElement}var f=null;function E(){if(f)return f;var e=document.createElement("div");e.style.width="100%";e.style.height="200px";var t=document.createElement("div");x(t.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"});t.appendChild(e);document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var i=e.offsetWidth;if(n===i)i=t.clientWidth;document.body.removeChild(t);var r=n-i;f={width:r,height:r};return f}function x(){var n=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var e=[];Array.prototype.push.apply(e,arguments);e.slice(1).forEach(function(e){if(e)for(var t in e)if({}.hasOwnProperty.call(e,t))n[t]=e[t]});return n}function d(t,e){if(typeof t.classList!=="undefined")e.split(" ").forEach(function(e){if(e.trim())t.classList.remove(e)});else{var n=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi");var i=m(t).replace(n," ");g(t,i)}}function p(t,e){if(typeof t.classList!=="undefined")e.split(" ").forEach(function(e){if(e.trim())t.classList.add(e)});else{d(t,e);var n=m(t)+(" "+e);g(t,n)}}function h(e,t){if(typeof e.classList!=="undefined")return e.classList.contains(t);var n=m(e);return new RegExp("(^| )"+t+"( |$)","gi").test(n)}function m(e){if(e.className instanceof e.ownerDocument.defaultView.SVGAnimatedString)return e.className.baseVal;return e.className}function g(e,t){e.setAttribute("class",t)}function A(t,n,e){e.forEach(function(e){if(n.indexOf(e)===-1&&h(t,e))d(t,e)});n.forEach(function(e){if(!h(t,e))p(t,e)})}var n=[],k=function e(t){n.push(t)},O=function e(){var t=undefined;while(t=n.pop())t()},e=function(){function e(){i(this,e)}t(e,[{key:"on",value:function e(t,n,i){var r=arguments.length<=3||arguments[3]===undefined?false:arguments[3];if(typeof this.bindings==="undefined")this.bindings={};if(typeof this.bindings[t]==="undefined")this.bindings[t]=[];this.bindings[t].push({handler:n,ctx:i,once:r})}},{key:"once",value:function e(t,n,i){this.on(t,n,i,!0)}},{key:"off",value:function e(t,n){if(typeof this.bindings==="undefined"||typeof this.bindings[t]==="undefined")return;if(typeof n==="undefined")delete this.bindings[t];else{var i=0;while(i<this.bindings[t].length)if(this.bindings[t][i].handler===n)this.bindings[t].splice(i,1);else++i}}},{key:"trigger",value:function e(t){if(typeof this.bindings!=="undefined"&&this.bindings[t]){var n=0;for(var i=arguments.length,r=Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];while(n<this.bindings[t].length){var s=this.bindings[t][n];var a=s.handler;var l=s.ctx;var c=s.once;var u=l;if(typeof u==="undefined")u=this;a.apply(u,r);if(c)this.bindings[t].splice(n,1);else++n}}}}]);return e}();_.Utils={getActualBoundingClientRect:s,getScrollParents:c,getBounds:T,getOffsetParent:C,extend:x,addClass:p,removeClass:d,hasClass:h,updateClasses:A,defer:k,flush:O,uniqueId:o,Evented:e,getScrollBarSize:E,removeUtilElements:u};var I=function(){function n(e,t){var n=[];var i=!0;var r=!1;var o=undefined;try{for(var s=e[Symbol.iterator](),a;!(i=(a=s.next()).done);i=!0){n.push(a.value);if(t&&n.length===t)break}}catch(e){r=!0;o=e}finally{try{if(!i&&s["return"])s["return"]()}finally{if(r)throw o}}return n}return function(e,t){if(Array.isArray(e))return e;else if(Symbol.iterator in Object(e))return n(e,t);else throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),t=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1;i.configurable=!0;if("value"in i)i.writable=!0;Object.defineProperty(e,i.key,i)}}return function(e,t,n){if(t)i(e.prototype,t);if(n)i(e,n);return e}}(),y=function e(t,n,i){var r=!0;e:while(r){var o=t,s=n,a=i;r=!1;if(o===null)o=Function.prototype;var l=Object.getOwnPropertyDescriptor(o,s);if(l===undefined){var c=Object.getPrototypeOf(o);if(c===null)return undefined;else{t=c;n=s;i=a;r=!0;l=c=undefined;continue e}}else if("value"in l)return l.value;else{var u=l.get;if(u===undefined)return undefined;return u.call(a)}}};function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(typeof t!=="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+Q(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}if(typeof _==="undefined")throw new Error("You must include the utils.js file before tether.js");var b=_.Utils,c=b.getScrollParents,T=b.getBounds,C=b.getOffsetParent,x=b.extend,p=b.addClass,d=b.removeClass,A=b.updateClasses,k=b.defer,O=b.flush,E=b.getScrollBarSize,u=b.removeUtilElements;function w(e,t){var n=arguments.length<=2||arguments[2]===undefined?1:arguments[2];return e+n>=t&&t>=e-n}var S=function(){if(typeof document==="undefined")return"";var e=document.createElement("div");var t=["transform","WebkitTransform","OTransform","MozTransform","msTransform"];for(var n=0;n<t.length;++n){var i=t[n];if(e.style[i]!==undefined)return i}}(),P=[],D=function e(){P.forEach(function(e){e.position(!1)});O()};function N(){if((typeof performance==="undefined"?"undefined":Q(performance))==="object"&&typeof performance.now==="function")return performance.now();return+new Date}(function(){var t=null;var n=null;var i=null;var r=function e(){if(typeof n!=="undefined"&&n>16){n=Math.min(n-16,250);i=setTimeout(e,250);return}if(typeof t!=="undefined"&&N()-t<10)return;if(i!=null){clearTimeout(i);i=null}t=N();D();n=N()-t};if(typeof window!=="undefined"&&typeof window.addEventListener!=="undefined")["resize","scroll","touchmove"].forEach(function(e){window.addEventListener(e,r)})})();var j={center:"center",left:"right",right:"left"},B={middle:"middle",top:"bottom",bottom:"top"},F={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},L=function e(t,n){var i=t.left;var r=t.top;if(i==="auto")i=j[n.left];if(r==="auto")r=B[n.top];return{left:i,top:r}},V=function e(t){var n=t.left;var i=t.top;if(typeof F[t.left]!=="undefined")n=F[t.left];if(typeof F[t.top]!=="undefined")i=F[t.top];return{left:n,top:i}};function M(){var i={top:0,left:0};for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){var t=e.top;var n=e.left;if(typeof t==="string")t=parseFloat(t,10);if(typeof n==="string")n=parseFloat(n,10);i.top+=t;i.left+=n});return i}function W(e,t){if(typeof e.left==="string"&&e.left.indexOf("%")!==-1)e.left=parseFloat(e.left,10)/100*t.width;if(typeof e.top==="string"&&e.top.indexOf("%")!==-1)e.top=parseFloat(e.top,10)/100*t.height;return e}var H=function e(t){var n=t.split(" ");var i=I(n,2);var r=i[0];var o=i[1];return{top:r,left:o}},R=H,q=function(e){v(n,e);function n(e){var t=this;i(this,n);y(Object.getPrototypeOf(n.prototype),"constructor",this).call(this);this.position=this.position.bind(this);P.push(this);this.history=[];this.setOptions(e,!1);_.modules.forEach(function(e){if(typeof e.initialize!=="undefined")e.initialize.call(t)});this.position()}t(n,[{key:"getClass",value:function e(){var t=arguments.length<=0||arguments[0]===undefined?"":arguments[0];var n=this.options.classes;if(typeof n!=="undefined"&&n[t])return this.options.classes[t];else if(this.options.classPrefix)return this.options.classPrefix+"-"+t;else return t}},{key:"setOptions",value:function e(t){var n=this;var i=arguments.length<=1||arguments[1]===undefined?true:arguments[1];var r={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=x(r,t);var o=this.options;var s=o.element;var a=o.target;var l=o.targetModifier;this.element=s;this.target=a;this.targetModifier=l;if(this.target==="viewport"){this.target=document.body;this.targetModifier="visible"}else if(this.target==="scroll-handle"){this.target=document.body;this.targetModifier="scroll-handle"}["element","target"].forEach(function(e){if(typeof n[e]==="undefined")throw new Error("Tether Error: Both element and target must be defined");if(typeof n[e].jquery!=="undefined")n[e]=n[e][0];else if(typeof n[e]==="string")n[e]=document.querySelector(n[e])});p(this.element,this.getClass("element"));if(!(this.options.addTargetClasses===!1))p(this.target,this.getClass("target"));if(!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=R(this.options.targetAttachment);this.attachment=R(this.options.attachment);this.offset=H(this.options.offset);this.targetOffset=H(this.options.targetOffset);if(typeof this.scrollParents!=="undefined")this.disable();if(this.targetModifier==="scroll-handle")this.scrollParents=[this.target];else this.scrollParents=c(this.target);if(!(this.options.enabled===!1))this.enable(i)}},{key:"getTargetBounds",value:function e(){if(typeof this.targetModifier!=="undefined"){if(this.targetModifier==="visible")if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};else{var t=T(this.target);var n={height:t.height,width:t.width,top:t.top,left:t.left};n.height=Math.min(n.height,t.height-(pageYOffset-t.top));n.height=Math.min(n.height,t.height-(t.top+t.height-(pageYOffset+innerHeight)));n.height=Math.min(innerHeight,n.height);n.height-=2;n.width=Math.min(n.width,t.width-(pageXOffset-t.left));n.width=Math.min(n.width,t.width-(t.left+t.width-(pageXOffset+innerWidth)));n.width=Math.min(innerWidth,n.width);n.width-=2;if(n.top<pageYOffset)n.top=pageYOffset;if(n.left<pageXOffset)n.left=pageXOffset;return n}else if(this.targetModifier==="scroll-handle"){var t=undefined;var i=this.target;if(i===document.body){i=document.documentElement;t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}}else t=T(i);var r=getComputedStyle(i);var o=i.scrollWidth>i.clientWidth||[r.overflow,r.overflowX].indexOf("scroll")>=0||this.target!==document.body;var s=0;if(o)s=15;var a=t.height-parseFloat(r.borderTopWidth)-parseFloat(r.borderBottomWidth)-s;var n={width:15,height:a*.975*(a/i.scrollHeight),left:t.left+t.width-parseFloat(r.borderLeftWidth)-15};var l=0;if(a<408&&this.target===document.body)l=-11e-5*Math.pow(a,2)-.00727*a+22.58;if(this.target!==document.body)n.height=Math.max(n.height,24);var c=this.target.scrollTop/(i.scrollHeight-a);n.top=c*(a-n.height-l)+t.top+parseFloat(r.borderTopWidth);if(this.target===document.body)n.height=Math.max(n.height,24);return n}}else return T(this.target)}},{key:"clearCache",value:function e(){this._cache={}}},{key:"cache",value:function e(t,n){if(typeof this._cache==="undefined")this._cache={};if(typeof this._cache[t]==="undefined")this._cache[t]=n.call(this);return this._cache[t]}},{key:"enable",value:function e(){var t=this;var n=arguments.length<=0||arguments[0]===undefined?true:arguments[0];if(!(this.options.addTargetClasses===!1))p(this.target,this.getClass("enabled"));p(this.element,this.getClass("enabled"));this.enabled=!0;this.scrollParents.forEach(function(e){if(e!==t.target.ownerDocument)e.addEventListener("scroll",t.position)});if(n)this.position()}},{key:"disable",value:function e(){var t=this;d(this.target,this.getClass("enabled"));d(this.element,this.getClass("enabled"));this.enabled=!1;if(typeof this.scrollParents!=="undefined")this.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.position)})}},{key:"destroy",value:function e(){var n=this;this.disable();P.forEach(function(e,t){if(e===n)P.splice(t,1)});if(P.length===0)u()}},{key:"updateAttachClasses",value:function e(t,n){var i=this;t=t||this.attachment;n=n||this.targetAttachment;var r=["left","top","bottom","right","middle","center"];if(typeof this._addAttachClasses!=="undefined"&&this._addAttachClasses.length)this._addAttachClasses.splice(0,this._addAttachClasses.length);if(typeof this._addAttachClasses==="undefined")this._addAttachClasses=[];var o=this._addAttachClasses;if(t.top)o.push(this.getClass("element-attached")+"-"+t.top);if(t.left)o.push(this.getClass("element-attached")+"-"+t.left);if(n.top)o.push(this.getClass("target-attached")+"-"+n.top);if(n.left)o.push(this.getClass("target-attached")+"-"+n.left);var s=[];r.forEach(function(e){s.push(i.getClass("element-attached")+"-"+e);s.push(i.getClass("target-attached")+"-"+e)});k(function(){if(!(typeof i._addAttachClasses!=="undefined"))return;A(i.element,i._addAttachClasses,s);if(!(i.options.addTargetClasses===!1))A(i.target,i._addAttachClasses,s);delete i._addAttachClasses})}},{key:"position",value:function e(){var a=this;var t=arguments.length<=0||arguments[0]===undefined?true:arguments[0];if(!this.enabled)return;this.clearCache();var n=L(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,n);var i=this.cache("element-bounds",function(){return T(a.element)});var r=i.width;var o=i.height;if(r===0&&o===0&&typeof this.lastSize!=="undefined"){var s=this.lastSize;r=s.width;o=s.height}else this.lastSize={width:r,height:o};var l=this.cache("target-bounds",function(){return a.getTargetBounds()});var c=l;var u=W(V(this.attachment),{width:r,height:o});var f=W(V(n),c);var d=W(this.offset,{width:r,height:o});var p=W(this.targetOffset,c);u=M(u,d);f=M(f,p);var h=l.left+f.left-u.left;var m=l.top+f.top-u.top;for(var g=0;g<_.modules.length;++g){var y=_.modules[g];var v=y.position.call(this,{left:h,top:m,targetAttachment:n,targetPos:l,elementPos:i,offset:u,targetOffset:f,manualOffset:d,manualTargetOffset:p,scrollbarSize:x,attachment:this.attachment});if(v===!1)return!1;else if(typeof v==="undefined"||Q(v)!=="object")continue;else{m=v.top;h=v.left}}var b={page:{top:m,left:h},viewport:{top:m-pageYOffset,bottom:pageYOffset-m-o+innerHeight,left:h-pageXOffset,right:pageXOffset-h-r+innerWidth}};var w=this.target.ownerDocument;var S=w.defaultView;var x=undefined;if(S.innerHeight>w.documentElement.clientHeight){x=this.cache("scrollbar-size",E);b.viewport.bottom-=x.height}if(S.innerWidth>w.documentElement.clientWidth){x=this.cache("scrollbar-size",E);b.viewport.right-=x.width}if(["","static"].indexOf(w.body.style.position)===-1||["","static"].indexOf(w.body.parentElement.style.position)===-1){b.page.bottom=w.body.scrollHeight-m-o;b.page.right=w.body.scrollWidth-h-r}if(typeof this.options.optimizations!=="undefined"&&this.options.optimizations.moveElement!==!1&&!(typeof this.targetModifier!=="undefined"))(function(){var e=a.cache("target-offsetparent",function(){return C(a.target)});var t=a.cache("target-offsetparent-bounds",function(){return T(e)});var n=getComputedStyle(e);var i=t;var r={};["Top","Left","Bottom","Right"].forEach(function(e){r[e.toLowerCase()]=parseFloat(n["border"+e+"Width"])});t.right=w.body.scrollWidth-t.left-i.width+r.right;t.bottom=w.body.scrollHeight-t.top-i.height+r.bottom;if(b.page.top>=t.top+r.top&&b.page.bottom>=t.bottom)if(b.page.left>=t.left+r.left&&b.page.right>=t.right){var o=e.scrollTop;var s=e.scrollLeft;b.offset={top:b.page.top-t.top+o-r.top,left:b.page.left-t.left+s-r.left}}})();this.move(b);this.history.unshift(b);if(this.history.length>3)this.history.pop();if(t)O();return!0}},{key:"move",value:function e(t){var a=this;if(!(typeof this.element.parentNode!=="undefined"))return;var n={};for(var i in t){n[i]={};for(var r in t[i]){var o=!1;for(var s=0;s<this.history.length;++s){var l=this.history[s];if(typeof l[i]!=="undefined"&&!w(l[i][r],t[i][r])){o=!0;break}}if(!o)n[i][r]=!0}}var c={top:"",left:"",right:"",bottom:""};var u=function e(t,n){var i=typeof a.options.optimizations!=="undefined";var r=i?a.options.optimizations.gpu:null;if(r!==!1){var o=undefined,s=undefined;if(t.top){c.top=0;o=n.top}else{c.bottom=0;o=-n.bottom}if(t.left){c.left=0;s=n.left}else{c.right=0;s=-n.right}if(typeof window.devicePixelRatio==="number"&&devicePixelRatio%1===0){s=Math.round(s*devicePixelRatio)/devicePixelRatio;o=Math.round(o*devicePixelRatio)/devicePixelRatio}c[S]="translateX("+s+"px) translateY("+o+"px)";if(S!=="msTransform")c[S]+=" translateZ(0)"}else{if(t.top)c.top=n.top+"px";else c.bottom=n.bottom+"px";if(t.left)c.left=n.left+"px";else c.right=n.right+"px"}};var f=!1;if((n.page.top||n.page.bottom)&&(n.page.left||n.page.right)){c.position="absolute";u(n.page,t.page)}else if((n.viewport.top||n.viewport.bottom)&&(n.viewport.left||n.viewport.right)){c.position="fixed";u(n.viewport,t.viewport)}else if(typeof n.offset!=="undefined"&&n.offset.top&&n.offset.left)(function(){c.position="absolute";var e=a.cache("target-offsetparent",function(){return C(a.target)});if(C(a.element)!==e)k(function(){a.element.parentNode.removeChild(a.element);e.appendChild(a.element)});u(n.offset,t.offset);f=!0})();else{c.position="absolute";u({top:!0,left:!0},t.page)}if(!f)if(this.options.bodyElement){if(this.element.parentNode!==this.options.bodyElement)this.options.bodyElement.appendChild(this.element)}else{var d=function e(t){var n=t.ownerDocument;var i=n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement;return i===t};var p=!0;var h=this.element.parentNode;while(h&&h.nodeType===1&&h.tagName!=="BODY"&&!d(h)){if(getComputedStyle(h).position!=="static"){p=!1;break}h=h.parentNode}if(!p){this.element.parentNode.removeChild(this.element);this.element.ownerDocument.body.appendChild(this.element)}}var m={};var g=!1;for(var r in c){var y=c[r];var v=this.element.style[r];if(v!==y){g=!0;m[r]=y}}if(g)k(function(){x(a.element.style,m);a.trigger("repositioned")})}}]);return n}(e);q.modules=[],_.position=D;var z=x(q,_);"use strict";var I=function(){function n(e,t){var n=[];var i=!0;var r=!1;var o=undefined;try{for(var s=e[Symbol.iterator](),a;!(i=(a=s.next()).done);i=!0){n.push(a.value);if(t&&n.length===t)break}}catch(e){r=!0;o=e}finally{try{if(!i&&s["return"])s["return"]()}finally{if(r)throw o}}return n}return function(e,t){if(Array.isArray(e))return e;else if(Symbol.iterator in Object(e))return n(e,t);else throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),b,T=(b=_.Utils).getBounds,x=b.extend,A=b.updateClasses,k=b.defer,U=["left","top","right","bottom"];function $(e,o){if(o==="scrollParent")o=e.scrollParents[0];else if(o==="window")o=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset];if(o===document)o=o.documentElement;if(typeof o.nodeType!=="undefined")(function(){var e=o;var t=T(o);var n=t;var i=getComputedStyle(o);o=[n.left,n.top,t.width+n.left,t.height+n.top];if(e.ownerDocument!==document){var r=e.ownerDocument.defaultView;o[0]+=r.pageXOffset;o[1]+=r.pageYOffset;o[2]+=r.pageXOffset;o[3]+=r.pageYOffset}U.forEach(function(e,t){e=e[0].toUpperCase()+e.substr(1);if(e==="Top"||e==="Left")o[t]+=parseFloat(i["border"+e+"Width"]);else o[t]-=parseFloat(i["border"+e+"Width"])})})();return o}_.modules.push({position:function e(t){var f=this;var d=t.top;var p=t.left;var h=t.targetAttachment;if(!this.options.constraints)return!0;var n=this.cache("element-bounds",function(){return T(f.element)});var m=n.height;var g=n.width;if(g===0&&m===0&&typeof this.lastSize!=="undefined"){var i=this.lastSize;g=i.width;m=i.height}var r=this.cache("target-bounds",function(){return f.getTargetBounds()});var y=r.height;var v=r.width;var o=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(e){var t=e.outOfBoundsClass;var n=e.pinnedClass;if(t)o.push(t);if(n)o.push(n)});o.forEach(function(t){["left","top","right","bottom"].forEach(function(e){o.push(t+"-"+e)})});var b=[];var w=x({},h);var S=x({},this.attachment);this.options.constraints.forEach(function(e){var t=e.to;var n=e.attachment;var i=e.pin;if(typeof n==="undefined")n="";var r=undefined,o=undefined;if(n.indexOf(" ")>=0){var s=n.split(" ");var a=I(s,2);o=a[0];r=a[1]}else r=o=n;var l=$(f,t);if(o==="target"||o==="both"){if(d<l[1]&&w.top==="top"){d+=y;w.top="bottom"}if(d+m>l[3]&&w.top==="bottom"){d-=y;w.top="top"}}if(o==="together"){if(w.top==="top")if(S.top==="bottom"&&d<l[1]){d+=y;w.top="bottom";d+=m;S.top="top"}else if(S.top==="top"&&d+m>l[3]&&d-(m-y)>=l[1]){d-=m-y;w.top="bottom";S.top="bottom"}if(w.top==="bottom")if(S.top==="top"&&d+m>l[3]){d-=y;w.top="top";d-=m;S.top="bottom"}else if(S.top==="bottom"&&d<l[1]&&d+(m*2-y)<=l[3]){d+=m-y;w.top="top";S.top="top"}if(w.top==="middle")if(d+m>l[3]&&S.top==="top"){d-=m;S.top="bottom"}else if(d<l[1]&&S.top==="bottom"){d+=m;S.top="top"}}if(r==="target"||r==="both"){if(p<l[0]&&w.left==="left"){p+=v;w.left="right"}if(p+g>l[2]&&w.left==="right"){p-=v;w.left="left"}}if(r==="together")if(p<l[0]&&w.left==="left"){if(S.left==="right"){p+=v;w.left="right";p+=g;S.left="left"}else if(S.left==="left"){p+=v;w.left="right";p-=g;S.left="right"}}else if(p+g>l[2]&&w.left==="right"){if(S.left==="left"){p-=v;w.left="left";p-=g;S.left="right"}else if(S.left==="right"){p-=v;w.left="left";p+=g;S.left="left"}}else if(w.left==="center")if(p+g>l[2]&&S.left==="left"){p-=g;S.left="right"}else if(p<l[0]&&S.left==="right"){p+=g;S.left="left"}if(o==="element"||o==="both"){if(d<l[1]&&S.top==="bottom"){d+=m;S.top="top"}if(d+m>l[3]&&S.top==="top"){d-=m;S.top="bottom"}}if(r==="element"||r==="both"){if(p<l[0])if(S.left==="right"){p+=g;S.left="left"}else if(S.left==="center"){p+=g/2;S.left="left"}if(p+g>l[2])if(S.left==="left"){p-=g;S.left="right"}else if(S.left==="center"){p-=g/2;S.left="right"}}if(typeof i==="string")i=i.split(",").map(function(e){return e.trim()});else if(i===!0)i=["top","left","right","bottom"];i=i||[];var c=[];var u=[];if(d<l[1])if(i.indexOf("top")>=0){d=l[1];c.push("top")}else u.push("top");if(d+m>l[3])if(i.indexOf("bottom")>=0){d=l[3]-m;c.push("bottom")}else u.push("bottom");if(p<l[0])if(i.indexOf("left")>=0){p=l[0];c.push("left")}else u.push("left");if(p+g>l[2])if(i.indexOf("right")>=0){p=l[2]-g;c.push("right")}else u.push("right");if(c.length)(function(){var t=undefined;if(typeof f.options.pinnedClass!=="undefined")t=f.options.pinnedClass;else t=f.getClass("pinned");b.push(t);c.forEach(function(e){b.push(t+"-"+e)})})();if(u.length)(function(){var t=undefined;if(typeof f.options.outOfBoundsClass!=="undefined")t=f.options.outOfBoundsClass;else t=f.getClass("out-of-bounds");b.push(t);u.forEach(function(e){b.push(t+"-"+e)})})();if(c.indexOf("left")>=0||c.indexOf("right")>=0)S.left=w.left=!1;if(c.indexOf("top")>=0||c.indexOf("bottom")>=0)S.top=w.top=!1;if(w.top!==h.top||w.left!==h.left||S.top!==f.attachment.top||S.left!==f.attachment.left){f.updateAttachClasses(S,w);f.trigger("update",{attachment:S,targetAttachment:w})}});k(function(){if(!(f.options.addTargetClasses===!1))A(f.target,b,o);A(f.element,b,o)});return{top:d,left:p}}});var b,T=(b=_.Utils).getBounds,A=b.updateClasses,k=b.defer;_.modules.push({position:function e(t){var n=this;var i=t.top;var r=t.left;var o=this.cache("element-bounds",function(){return T(n.element)});var s=o.height;var a=o.width;var l=this.getTargetBounds();var c=i+s;var u=r+a;var f=[];if(i<=l.bottom&&c>=l.top)["left","right"].forEach(function(e){var t=l[e];if(t===r||t===u)f.push(e)});if(r<=l.right&&u>=l.left)["top","bottom"].forEach(function(e){var t=l[e];if(t===i||t===c)f.push(e)});var d=[];var p=[];var h=["left","top","right","bottom"];d.push(this.getClass("abutted"));h.forEach(function(e){d.push(n.getClass("abutted")+"-"+e)});if(f.length)p.push(this.getClass("abutted"));f.forEach(function(e){p.push(n.getClass("abutted")+"-"+e)});k(function(){if(!(n.options.addTargetClasses===!1))A(n.target,p,d);A(n.element,p,d)});return!0}});var I=function(){function n(e,t){var n=[];var i=!0;var r=!1;var o=undefined;try{for(var s=e[Symbol.iterator](),a;!(i=(a=s.next()).done);i=!0){n.push(a.value);if(t&&n.length===t)break}}catch(e){r=!0;o=e}finally{try{if(!i&&s["return"])s["return"]()}finally{if(r)throw o}}return n}return function(e,t){if(Array.isArray(e))return e;else if(Symbol.iterator in Object(e))return n(e,t);else throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return _.modules.push({position:function e(t){var n=t.top;var i=t.left;if(!this.options.shift)return;var r=this.options.shift;if(typeof this.options.shift==="function")r=this.options.shift.call(this,{top:n,left:i});var o=undefined,s=undefined;if(typeof r==="string"){r=r.split(" ");r[1]=r[1]||r[0];var a=r;var l=I(a,2);o=l[0];s=l[1];o=parseFloat(o,10);s=parseFloat(s,10)}else{o=r.top;s=r.left}n+=o;i+=s;return{top:n,left:i}}}),z})?n.apply(t,[]):n)||(e.exports=n)},225:function(t,n,i){var r;function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t=i.nmd(t),function(t){"use strict";if(!t.jQuery){var c=function e(t,n){return new e.fn.init(t,n)};c.isWindow=function(e){return e&&e===e.window},c.type=function(e){return e?"object"===u(e)||"function"==typeof e?n[o.call(e)]||"object":u(e):e+""},c.isArray=Array.isArray||function(e){return"array"===c.type(e)},c.isPlainObject=function(e){if(!e||"object"!==c.type(e)||e.nodeType||c.isWindow(e))return!1;try{if(e.constructor&&!i.call(e,"constructor")&&!i.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(var t in e);return void 0===t||i.call(e,t)},c.each=function(e,t,n){var i=0,r=e.length,o=a(e);if(n){if(o)for(;i<r&&!1!==t.apply(e[i],n);i++);else for(i in e)if(e.hasOwnProperty(i)&&!1===t.apply(e[i],n))break}else if(o)for(;i<r&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(e.hasOwnProperty(i)&&!1===t.call(e[i],i,e[i]))break;return e},c.data=function(e,t,n){if(void 0===n){var i=e[c.expando],i=i&&r[i];return void 0===t?i:i&&t in i?i[t]:void 0}if(void 0!==t){e=e[c.expando]||(e[c.expando]=++c.uuid);return r[e]=r[e]||{},r[e][t]=n}},c.removeData=function(e,t){var e=e[c.expando],n=e&&r[e];n&&(t?c.each(t,function(e,t){delete n[t]}):delete r[e])},c.extend=function(){var e,t,n,i,r,o=arguments[0]||{},s=1,a=arguments.length,l=!1;for("boolean"==typeof o&&(l=o,o=arguments[s]||{},s++),"object"!==u(o)&&"function"!==c.type(o)&&(o={}),s===a&&(o=this,s--);s<a;s++)if(i=arguments[s])for(n in i)i.hasOwnProperty(n)&&(r=o[n],o!==(t=i[n])&&(l&&t&&(c.isPlainObject(t)||(e=c.isArray(t)))?(r=e?(e=!1,r&&c.isArray(r)?r:[]):r&&c.isPlainObject(r)?r:{},o[n]=c.extend(l,r,t)):void 0!==t&&(o[n]=t)));return o},c.queue=function(e,t,n){function i(e,t){t=t||[];return e&&(a(Object(e))?function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;)e[r++]=t[i++];if(n!=n)for(;void 0!==t[i];)e[r++]=t[i++];e.length=r}(t,"string"==typeof e?[e]:e):[].push.call(t,e)),t}if(e){var r=c.data(e,t=(t||"fx")+"queue");return n?(!r||c.isArray(n)?r=c.data(e,t,i(n)):r.push(n),r):r||[]}},c.dequeue=function(e,r){c.each(e.nodeType?[e]:e,function(e,t){r=r||"fx";var n=c.queue(t,r),i=n.shift();(i="inprogress"===i?n.shift():i)&&("fx"===r&&n.unshift("inprogress"),i.call(t,function(){c.dequeue(t,r)}))})},c.fn=c.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){var e=this[0],t=function(e){for(var t=e.offsetParent;t&&"html"!==t.nodeName.toLowerCase()&&t.style&&"static"===t.style.position;)t=t.offsetParent;return t||document}(e),n=this.offset(),i=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:c(t).offset();return n.top-=parseFloat(e.style.marginTop)||0,n.left-=parseFloat(e.style.marginLeft)||0,t.style&&(i.top+=parseFloat(t.style.borderTopWidth)||0,i.left+=parseFloat(t.style.borderLeftWidth)||0),{top:n.top-i.top,left:n.left-i.left}}};var r={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var n={},i=n.hasOwnProperty,o=n.toString,e="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<e.length;s++)n["[object "+e[s]+"]"]=e[s].toLowerCase();c.fn.init.prototype=c.fn,t.Velocity={Utilities:c}}function a(e){var t=e.length,n=c.type(e);return"function"!==n&&!c.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e))}}(window),function(e){"use strict";"object"===u(t)&&"object"===u(t.exports)?t.exports=e():void 0===(r="function"==typeof(r=e)?r.call(n,i,n,t):r)||(t.exports=r)}(function(){"use strict";return function(e,H,R,q){var i,t,T=function(){if(R.documentMode)return R.documentMode;for(var e=7;4<e;e--){var t=R.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return q}(),n=(i=0,H.webkitRequestAnimationFrame||H.mozRequestAnimationFrame||function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-i));return i=t+n,setTimeout(function(){e(t+n)},n)}),C=("function"!=typeof(l=H.performance||{}).now&&(t=l.timing&&l.timing.navigationStart?l.timing.navigationStart:(new Date).getTime(),l.now=function(){return(new Date).getTime()-t}),l);function z(){return Array.prototype.includes?function(e,t){return e.includes(t)}:Array.prototype.indexOf?function(e,t){return 0<=e.indexOf(t)}:function(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}}var r=function(){var a=Array.prototype.slice;try{return a.call(R.documentElement),a}catch(e){return function(e,t){var n=this.length;if("number"!=typeof e&&(e=0),"number"!=typeof t&&(t=n),this.slice)return a.call(this,e,t);var i,r=[],o=0<=e?e:Math.max(0,n+e),s=(t<0?n+t:Math.min(t,n))-o;if(0<s)if(r=new Array(s),this.charAt)for(i=0;i<s;i++)r[i]=this.charAt(o+i);else for(i=0;i<s;i++)r[i]=this[o+i];return r}}}();function y(e){return $.isWrapped(e)?e=r.call(e):$.isNode(e)&&(e=[e]),e}var U,$={isNumber:function(e){return"number"==typeof e},isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isWrapped:function(e){return e&&e!==H&&$.isNumber(e.length)&&!$.isString(e)&&!$.isFunction(e)&&!$.isNode(e)&&(0===e.length||$.isNode(e[0]))},isSVG:function(e){return H.SVGElement&&e instanceof H.SVGElement},isEmptyObject:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},o=!1;if(e.fn&&e.fn.jquery?(U=e,o=!0):U=H.Velocity.Utilities,T<=8&&!o)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(!(T<=7)){var s="swing",Q={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:H.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:R.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:U,Redirects:{},Easings:{},Promise:H.Promise,defaults:{queue:"",duration:400,easing:s,begin:q,complete:q,progress:q,display:q,visibility:q,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(e){U.data(e,"velocity",{isSVG:$.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:0},debug:!1,timestamp:!0,pauseAll:function(n){var i=(new Date).getTime();U.each(Q.State.calls,function(e,t){if(t){if(n!==q&&(t[2].queue!==n||!1===t[2].queue))return!0;t[5]={resume:!1}}}),U.each(Q.State.delayedElements,function(e,t){t&&v(t,i)})},resumeAll:function(n){var e=(new Date).getTime();U.each(Q.State.calls,function(e,t){if(t){if(n!==q&&(t[2].queue!==n||!1===t[2].queue))return!0;t[5]&&(t[5].resume=!0)}}),U.each(Q.State.delayedElements,function(e,t){t&&b(t)})}};H.pageYOffset!==q?(Q.State.scrollAnchor=H,Q.State.scrollPropertyLeft="pageXOffset",Q.State.scrollPropertyTop="pageYOffset"):(Q.State.scrollAnchor=R.documentElement||R.body.parentNode||R.body,Q.State.scrollPropertyLeft="scrollLeft",Q.State.scrollPropertyTop="scrollTop");var a=function e(t,n,i){var r,o,s,a,l,c,u,f,d,p,h={x:-1,v:0,tension:null,friction:null},m=[0],g=0;for(t=parseFloat(t)||500,n=parseFloat(n)||20,i=i||null,h.tension=t,h.friction=n,o=(r=null!==i)?(g=e(t,n))/i*.016:.016;l=o,d=p=d=f=u=c=void 0,c={dx:(a=s||h).v,dv:w(a)},u=S(a,.5*l,c),f=S(a,.5*l,u),d=S(a,l,f),p=1/6*(c.dx+2*(u.dx+f.dx)+d.dx),d=1/6*(c.dv+2*(u.dv+f.dv)+d.dv),a.x=a.x+p*l,a.v=a.v+d*l,m.push(1+(s=a).x),g+=16,1e-4<Math.abs(s.x)&&1e-4<Math.abs(s.v););return r?function(e){return m[e*(m.length-1)|0]}:g};Q.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},U.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){Q.Easings[t[0]]=c.apply(null,t[1])});var Y=Q.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e,t,n,i,r,o=0;o<Y.Lists.colors.length;o++){var s="color"===Y.Lists.colors[o]?"0 0 0 1":"255 255 255 1";Y.Hooks.templates[Y.Lists.colors[o]]=["Red Green Blue Alpha",s]}if(T)for(e in Y.Hooks.templates)Y.Hooks.templates.hasOwnProperty(e)&&(n=(t=Y.Hooks.templates[e])[0].split(" "),i=t[1].match(Y.RegEx.valueSplit),"Color"===n[0]&&(n.push(n.shift()),i.push(i.shift()),Y.Hooks.templates[e]=[n.join(" "),i.join(" ")]));for(e in Y.Hooks.templates)if(Y.Hooks.templates.hasOwnProperty(e))for(var a in n=(t=Y.Hooks.templates[e])[0].split(" "))n.hasOwnProperty(a)&&(r=e+n[a],Y.Hooks.registered[r]=[e,a])},getRoot:function(e){var t=Y.Hooks.registered[e];return t?t[0]:e},getUnit:function(e,t){t=(e.substr(t||0,5).match(/^[a-z%]+/)||[])[0]||"";return t&&z(Y.Lists.units)?t:""},fixColors:function(e){return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(e,t,n){return Y.Lists.colorNames.hasOwnProperty(n)?(t||"rgba(")+Y.Lists.colorNames[n]+(t?"":",1)"):t+n})},cleanRootPropertyValue:function(e,t){return Y.RegEx.valueUnwrap.test(t)&&(t=t.match(Y.RegEx.valueUnwrap)[1]),t=Y.Values.isCSSNullValue(t)?Y.Hooks.templates[e][1]:t},extractValue:function(e,t){var n=Y.Hooks.registered[e];if(n){e=n[0],n=n[1];return(t=Y.Hooks.cleanRootPropertyValue(e,t)).toString().match(Y.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,n){var i=Y.Hooks.registered[e];if(i){e=i[0],i=i[1];return(e=(n=Y.Hooks.cleanRootPropertyValue(e,n)).toString().match(Y.RegEx.valueSplit))[i]=t,e.join(" ")}return n}},Normalizations:{registered:{clip:function(e,t,n){switch(e){case"name":return"clip";case"extract":var i=!Y.RegEx.wrappedValueAlreadyExtracted.test(n)&&(i=n.toString().match(Y.RegEx.valueUnwrap))?i[1].replace(/,(\s+)?/g," "):n;return i;case"inject":return"rect("+n+")"}},blur:function(e,t,n){switch(e){case"name":return Q.State.isFirefox?"filter":"-webkit-filter";case"extract":var i,r=parseFloat(n);return r=!r&&0!==r?(i=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i))?i[1]:0:r;case"inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(e,t,n){if(T<=8)switch(e){case"name":return"filter";case"extract":var i=n.toString().match(/alpha\(opacity=(.*)\)/i);return n=i?i[1]/100:1;case"inject":return(t.style.zoom=1)<=parseFloat(n)?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return n}}},register:function(){T&&!(9<T)||Q.State.isGingerbread||(Y.Lists.transformsBase=Y.Lists.transformsBase.concat(Y.Lists.transforms3D));for(var e=0;e<Y.Lists.transformsBase.length;e++)!function(){var r=Y.Lists.transformsBase[e];Y.Normalizations.registered[r]=function(e,t,n){switch(e){case"name":return"transform";case"extract":return K(t)===q||K(t).transformCache[r]===q?/^scale/i.test(r)?1:0:K(t).transformCache[r].replace(/[()]/g,"");case"inject":var i=!1;switch(r.substr(0,r.length-1)){case"translate":i=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":Q.State.isAndroid&&K(t).transformCache[r]===q&&n<1&&(n=1),i=!/(\d)$/i.test(n);break;case"skew":case"rotate":i=!/(deg|\d)$/i.test(n)}return i||(K(t).transformCache[r]="("+n+")"),K(t).transformCache[r]}}}();for(var t=0;t<Y.Lists.colors.length;t++)!function(){var o=Y.Lists.colors[t];Y.Normalizations.registered[o]=function(e,t,n){switch(e){case"name":return o;case"extract":var i,r=Y.RegEx.wrappedValueAlreadyExtracted.test(n)?n:(i={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"},/^[A-z]+$/i.test(n)?r=i[n]!==q?i[n]:i.black:Y.RegEx.isHex.test(n)?r="rgb("+Y.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(r=i.black),(r||n).toString().match(Y.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," "));return(!T||8<T)&&3===r.split(" ").length&&(r+=" 1"),r;case"inject":return/^rgb/.test(n)?n:(T<=8?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(T<=8?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();function o(e,t,n){if("border-box"===Y.getPropertyValue(t,"boxSizing").toString().toLowerCase()!==(n||!1))return 0;for(var i,r=0,e="width"===e?["Left","Right"]:["Top","Bottom"],o=["padding"+e[0],"padding"+e[1],"border"+e[0]+"Width","border"+e[1]+"Width"],s=0;s<o.length;s++)i=parseFloat(Y.getPropertyValue(t,o[s])),isNaN(i)||(r+=i);return n?-r:r}function n(i,r){return function(e,t,n){switch(e){case"name":return i;case"extract":return parseFloat(n)+o(i,t,r);case"inject":return parseFloat(n)-o(i,t,r)+"px"}}}Y.Normalizations.registered.innerWidth=n("width",!0),Y.Normalizations.registered.innerHeight=n("height",!0),Y.Normalizations.registered.outerWidth=n("width"),Y.Normalizations.registered.outerHeight=n("height")}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(T||Q.State.isAndroid&&!Q.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(Q.State.prefixMatches[e])return[Q.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],n=0,i=t.length;n<i;n++){var r=0===n?e:t[n]+e.replace(/^\w/,function(e){return e.toUpperCase()});if($.isString(Q.State.prefixElement.style[r]))return[Q.State.prefixMatches[e]=r,!0]}return[e,!1]}},Values:{hexToRgb:function(e){return e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,i){return t+t+n+n+i+i}),(e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e))?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(e){return!e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){e=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(e,t){var n;e&&(e.classList?e.classList.add(t):$.isString(e.className)?e.className+=(e.className.length?" ":"")+t:(n=e.getAttribute(T<=7?"className":"class")||"",e.setAttribute("class",n+(n?" ":"")+t)))},removeClass:function(e,t){var n;e&&(e.classList?e.classList.remove(t):$.isString(e.className)?e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," "):(n=e.getAttribute(T<=7?"className":"class")||"",e.setAttribute("class",n.replace(new RegExp("(^|s)"+t.split(" ").join("|")+"(s|$)","gi")," "))))}},getPropertyValue:function(e,t,n,a){function l(e,t){var n=0;if(T<=8)n=U.css(e,t);else{var i=!1;/^(width|height)$/.test(t)&&0===Y.getPropertyValue(e,"display")&&(i=!0,Y.setPropertyValue(e,"display",Y.Values.getDisplayType(e)));var r=function(){i&&Y.setPropertyValue(e,"display","none")};if(!a){if("height"===t&&"border-box"!==Y.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var o=e.offsetHeight-(parseFloat(Y.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(Y.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(Y.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(Y.getPropertyValue(e,"paddingBottom"))||0);return r(),o}if("width"===t&&"border-box"!==Y.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var s=e.offsetWidth-(parseFloat(Y.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(Y.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(Y.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(Y.getPropertyValue(e,"paddingRight"))||0);return r(),s}}s=K(e)===q?H.getComputedStyle(e,null):K(e).computedStyle?K(e).computedStyle:K(e).computedStyle=H.getComputedStyle(e,null),"borderColor"===t&&(t="borderTopColor"),""!==(n=9===T&&"filter"===t?s.getPropertyValue(t):s[t])&&null!==n||(n=e.style[t]),r()}return"auto"!==n||!/^(top|right|bottom|left)$/i.test(t)||("fixed"===(r=l(e,"position"))||"absolute"===r&&/top|left/i.test(t))&&(n=U(e).position()[t]+"px"),n}var i,r;if(Y.Hooks.registered[t]?(r=Y.Hooks.getRoot(i=t),n===q&&(n=Y.getPropertyValue(e,Y.Names.prefixCheck(r)[0])),Y.Normalizations.registered[r]&&(n=Y.Normalizations.registered[r]("extract",e,n)),i=Y.Hooks.extractValue(i,n)):Y.Normalizations.registered[t]&&("transform"!==(n=Y.Normalizations.registered[t]("name",e))&&(o=l(e,Y.Names.prefixCheck(n)[0]),Y.Values.isCSSNullValue(o)&&Y.Hooks.templates[t]&&(o=Y.Hooks.templates[t][1])),i=Y.Normalizations.registered[t]("extract",e,o)),!/^[\d-]/.test(i)){var o=K(e);if(o&&o.isSVG&&Y.Names.SVGAttribute(t))if(/^(height|width)$/i.test(t))try{i=e.getBBox()[t]}catch(e){i=0}else i=e.getAttribute(t);else i=l(e,Y.Names.prefixCheck(t)[0])}return Y.Values.isCSSNullValue(i)&&(i=0),Q.debug,i},setPropertyValue:function(e,t,n,i,r){var o=t;if("scroll"===t)r.container?r.container["scroll"+r.direction]=n:"Left"===r.direction?H.scrollTo(n,r.alternateValue):H.scrollTo(r.alternateValue,n);else if(Y.Normalizations.registered[t]&&"transform"===Y.Normalizations.registered[t]("name",e))Y.Normalizations.registered[t]("inject",e,n),o="transform",n=K(e).transformCache[t];else{if(Y.Hooks.registered[t]&&(s=Y.Hooks.getRoot(r=t),i=i||Y.getPropertyValue(e,s),n=Y.Hooks.injectValue(r,n,i),t=s),Y.Normalizations.registered[t]&&(n=Y.Normalizations.registered[t]("inject",e,n),t=Y.Normalizations.registered[t]("name",e)),o=Y.Names.prefixCheck(t)[0],T<=8)try{e.style[o]=n}catch(e){Q.debug}else{var s=K(e);s&&s.isSVG&&Y.Names.SVGAttribute(t)?e.setAttribute(t,n):e.style[o]=n}Q.debug}return[o,n]},flushTransformCache:function(t){var n,i,r,o="",e=K(t);(T||Q.State.isAndroid&&!Q.State.isChrome)&&e&&e.isSVG?(n={translate:[(e=function(e){return parseFloat(Y.getPropertyValue(t,e))})("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]},U.each(K(t).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),n[e]&&(o+=e+"("+n[e].join(" ")+") ",delete n[e])})):(U.each(K(t).transformCache,function(e){return i=K(t).transformCache[e],"transformPerspective"===e?(r=i,!0):void(o+=(e=9===T&&"rotateZ"===e?"rotate":e)+i+" ")}),r&&(o="perspective"+r+" "+o)),Y.setPropertyValue(t,"transform",o)}};Y.Hooks.register(),Y.Normalizations.register(),Q.hook=function(e,i,r){var o;return e=y(e),U.each(e,function(e,t){var n;K(t)===q&&Q.init(t),r===q?o===q&&(o=Y.getPropertyValue(t,i)):("transform"===(n=Y.setPropertyValue(t,i,r))[0]&&Q.CSS.flushTransformCache(t),o=n)}),o};var l=function e(){function t(){return n?k.promise||null:i}var n,i,r,E,A,o=arguments[0]&&(arguments[0].p||U.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||$.isString(arguments[0].properties));$.isWrapped(this)?(n=!1,r=0,i=E=this):(n=!0,r=1,E=o?arguments[0].elements||arguments[0].e:arguments[0]);var k={promise:null,resolver:null,rejecter:null};if(n&&Q.Promise&&(k.promise=new Q.Promise(function(e,t){k.resolver=e,k.rejecter=t})),V=o?(A=arguments[0].properties||arguments[0].p,arguments[0].options||arguments[0].o):(A=arguments[r],arguments[r+1]),E=y(E)){var B,F=E.length,L=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(A)&&!U.isPlainObject(V))for(var V={},s=r+1;s<arguments.length;s++)$.isArray(arguments[s])||!/^(fast|normal|slow)$/i.test(arguments[s])&&!/^\d/.test(arguments[s])?$.isString(arguments[s])||$.isArray(arguments[s])?V.easing=arguments[s]:$.isFunction(arguments[s])&&(V.complete=arguments[s]):V.duration=arguments[s];switch(A){case"scroll":B="scroll";break;case"reverse":B="reverse";break;case"pause":var a=(new Date).getTime();return U.each(E,function(e,t){v(t,a)}),U.each(Q.State.calls,function(e,i){var r=!1;i&&U.each(i[1],function(e,n){var t=V===q?"":V;return!0!==t&&i[2].queue!==t&&(V!==q||!1!==i[2].queue)||(U.each(E,function(e,t){if(t===n)return i[5]={resume:!1},!(r=!0)}),!r&&void 0)})}),t();case"resume":return U.each(E,function(e,t){b(t)}),U.each(Q.State.calls,function(e,i){var r=!1;i&&U.each(i[1],function(e,n){var t=V===q?"":V;return!0!==t&&i[2].queue!==t&&(V!==q||!1!==i[2].queue)||(!i[5]||(U.each(E,function(e,t){if(t===n)return i[5].resume=!0,!(r=!0)}),!r&&void 0))})}),t();case"finish":case"finishAll":case"stop":U.each(E,function(e,t){K(t)&&K(t).delayTimer&&(clearTimeout(K(t).delayTimer.setTimeout),K(t).delayTimer.next&&K(t).delayTimer.next(),delete K(t).delayTimer),"finishAll"!==A||!0!==V&&!$.isString(V)||(U.each(U.queue(t,$.isString(V)?V:""),function(e,t){$.isFunction(t)&&t()}),U.queue(t,$.isString(V)?V:"",[]))});var l=[];return U.each(Q.State.calls,function(r,o){o&&U.each(o[1],function(e,n){var i=V===q?"":V;if(!0!==i&&o[2].queue!==i&&(V!==q||!1!==o[2].queue))return!0;U.each(E,function(e,t){t===n&&(!0!==V&&!$.isString(V)||(U.each(U.queue(t,$.isString(V)?V:""),function(e,t){$.isFunction(t)&&t(null,!0)}),U.queue(t,$.isString(V)?V:"",[])),"stop"===A?((t=K(t))&&t.tweensContainer&&!1!==i&&U.each(t.tweensContainer,function(e,t){t.endValue=t.currentValue}),l.push(r)):"finish"!==A&&"finishAll"!==A||(o[2].duration=1))})})}),"stop"===A&&(U.each(l,function(e,t){O(t,!0)}),k.promise&&k.resolver(E)),t();default:if(!U.isPlainObject(A)||$.isEmptyObject(A)){if($.isString(A)&&Q.Redirects[A]){var c,u=(c=U.extend({},V)).duration,f=c.delay||0;return!0===c.backwards&&(E=U.extend(!0,[],E).reverse()),U.each(E,function(e,t){parseFloat(c.stagger)?c.delay=f+parseFloat(c.stagger)*e:$.isFunction(c.stagger)&&(c.delay=f+c.stagger.call(t,e,F)),c.drag&&(c.duration=parseFloat(u)||(/^(callout|transition)/.test(A)?1e3:400),c.duration=Math.max(c.duration*(c.backwards?1-e/F:(e+1)/F),.75*c.duration,200)),Q.Redirects[A].call(t,t,c||{},e,F,E,k.promise?k:q)}),t()}var d="Velocity: First argument ("+A+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(d)):H.console,t()}B="start"}var M={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},W=[];U.each(E,function(e,t){$.isNode(t)&&g(t,e)}),(c=U.extend({},Q.defaults,V)).loop=parseInt(c.loop,10);var p=2*c.loop-1;if(c.loop)for(var h=0;h<p;h++){var m={delay:c.delay,progress:c.progress};h===p-1&&(m.display=c.display,m.visibility=c.visibility,m.complete=c.complete),e(E,"reverse",m)}return t()}function g(P,C){var D,e,t,N=U.extend({},Q.defaults,V),j={};switch(K(P)===q&&Q.init(P),parseFloat(N.delay)&&!1!==N.queue&&U.queue(P,N.queue,function(e){Q.velocityQueueEntryFlag=!0;var t=Q.State.delayedElements.count++;Q.State.delayedElements[t]=P;var n,t=(n=t,function(){Q.State.delayedElements[n]=!1,e()});K(P).delayBegin=(new Date).getTime(),K(P).delay=parseFloat(N.delay),K(P).delayTimer={setTimeout:setTimeout(e,parseFloat(N.delay)),next:t}}),N.duration.toString().toLowerCase()){case"fast":N.duration=200;break;case"normal":N.duration=400;break;case"slow":N.duration=600;break;default:N.duration=parseFloat(N.duration)||1}function n(e){var O,I,t,n,i,r,o,s;if(N.begin&&0===L)try{N.begin.call(E,E)}catch(e){setTimeout(function(){throw e},1)}if("scroll"===B){var a,l,c,u=/^x$/i.test(N.axis)?"Left":"Top",f=parseFloat(N.offset)||0;N.container?$.isWrapped(N.container)||$.isNode(N.container)?(N.container=N.container[0]||N.container,c=(a=N.container["scroll"+u])+U(P).position()[u.toLowerCase()]+f):N.container=null:(a=Q.State.scrollAnchor[Q.State["scrollProperty"+u]],l=Q.State.scrollAnchor[Q.State["scrollProperty"+("Left"===u?"Top":"Left")]],c=U(P).offset()[u.toLowerCase()]+f),j={scroll:{rootPropertyValue:!1,startValue:a,currentValue:a,endValue:c,unitType:"",easing:N.easing,scrollData:{container:N.container,direction:u,alternateValue:l}},element:P},Q.debug}else if("reverse"===B){if(!(O=K(P)))return;if(!O.tweensContainer)return void U.dequeue(P,N.queue);for(var d in"none"===O.opts.display&&(O.opts.display="auto"),"hidden"===O.opts.visibility&&(O.opts.visibility="visible"),O.opts.loop=!1,O.opts.begin=null,O.opts.complete=null,V.easing||delete N.easing,V.duration||delete N.duration,N=U.extend({},O.opts,N),I=U.extend(!0,{},O?O.tweensContainer:null))I.hasOwnProperty(d)&&"element"!==d&&(t=I[d].startValue,I[d].startValue=I[d].currentValue=I[d].endValue,I[d].endValue=t,$.isEmptyObject(V)||(I[d].easing=N.easing),Q.debug);j=I}else if("start"===B){(O=K(P))&&O.tweensContainer&&!0===O.isAnimating&&(I=O.tweensContainer);var p,h=function(e,t){var n=Y.Hooks.getRoot(e),i=!1,r=t[0],o=t[1],s=t[2];if(O&&O.isSVG||"tween"===n||!1!==Y.Names.prefixCheck(n)[1]||Y.Normalizations.registered[n]!==q){(N.display!==q&&null!==N.display&&"none"!==N.display||N.visibility!==q&&"hidden"!==N.visibility)&&/opacity|filter/.test(e)&&!s&&0!==r&&(s=0),N._cacheValues&&I&&I[e]?(s===q&&(s=I[e].endValue+I[e].unitType),i=O.rootPropertyValueCache[n]):Y.Hooks.registered[e]?s===q?(i=Y.getPropertyValue(P,n),s=Y.getPropertyValue(P,e,i)):i=Y.Hooks.templates[n][1]:s===q&&(s=Y.getPropertyValue(P,e));var a,l,c=!1,t=function(e,t){var t=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return n=e,""}),n=n||Y.Values.getUnitType(e);return[t,n]};if(s!==r&&$.isString(s)&&$.isString(r)){for(var u="",f=0,d=0,p=[],h=[],m=0,g=0,y=0,s=Y.Hooks.fixColors(s),r=Y.Hooks.fixColors(r);f<s.length&&d<r.length;){var v=s[f],b=r[d];if(/[\d\.-]/.test(v)&&/[\d\.-]/.test(b)){for(var w=v,S=b,x=".",_=".";++f<s.length;){if((v=s[f])===x)x="..";else if(!/\d/.test(v))break;w+=v}for(;++d<r.length;){if((b=r[d])===_)_="..";else if(!/\d/.test(b))break;S+=b}var T,C,E=Y.Hooks.getUnit(s,f),A=Y.Hooks.getUnit(r,d);f+=E.length,d+=A.length,E===A?w===S?u+=w+E:(u+="{"+p.length+(g?"!":"")+"}"+E,p.push(parseFloat(w)),h.push(parseFloat(S))):(T=parseFloat(w),C=parseFloat(S),u+=(m<5?"calc":"")+"("+(T?"{"+p.length+(g?"!":"")+"}":"0")+E+" + "+(C?"{"+(p.length+(T?1:0))+(g?"!":"")+"}":"0")+A+")",T&&(p.push(T),h.push(0)),C&&(p.push(0),h.push(C)))}else{if(v!==b){m=0;break}u+=v,f++,d++,0===m&&"c"===v||1===m&&"a"===v||2===m&&"l"===v||3===m&&"c"===v||4<=m&&"("===v?m++:(m&&m<5||4<=m&&")"===v&&--m<5)&&(m=0),0===g&&"r"===v||1===g&&"g"===v||2===g&&"b"===v||3===g&&"a"===v||3<=g&&"("===v?(3===g&&"a"===v&&(y=1),g++):y&&","===v?3<++y&&(g=y=0):(y&&g<(y?5:4)||(y?4:3)<=g&&")"===v&&--g<(y?5:4))&&(g=y=0)}}f===s.length&&d===r.length||(Q.debug,u=q),u&&(p.length?(Q.debug,s=p,r=h,a=l=""):u=q)}u||(s=(n=t(e,s))[0],l=n[1],r=(n=t(e,r))[0].replace(/^([+-\/*])=/,function(e,t){return c=t,""}),a=n[1],s=parseFloat(s)||0,r=parseFloat(r)||0,"%"===a&&(/^(fontSize|lineHeight)$/.test(e)?(r/=100,a="em"):/^scale/.test(e)?(r/=100,a=""):/(Red|Green|Blue)$/i.test(e)&&(r=r/100*255,a="")));if(/[\/*]/.test(c))a=l;else if(l!==a&&0!==s)if(0===r)a=l;else{D=D||function(){var e={myParent:P.parentNode||R.body,position:Y.getPropertyValue(P,"position"),fontSize:Y.getPropertyValue(P,"fontSize")},t=e.position===M.lastPosition&&e.myParent===M.lastParent,n=e.fontSize===M.lastFontSize;M.lastParent=e.myParent,M.lastPosition=e.position,M.lastFontSize=e.fontSize;var i,r={};return n&&t?(r.emToPx=M.lastEmToPx,r.percentToPxWidth=M.lastPercentToPxWidth,r.percentToPxHeight=M.lastPercentToPxHeight):(i=O&&O.isSVG?R.createElementNS("http://www.w3.org/2000/svg","rect"):R.createElement("div"),Q.init(i),e.myParent.appendChild(i),U.each(["overflow","overflowX","overflowY"],function(e,t){Q.CSS.setPropertyValue(i,t,"hidden")}),Q.CSS.setPropertyValue(i,"position",e.position),Q.CSS.setPropertyValue(i,"fontSize",e.fontSize),Q.CSS.setPropertyValue(i,"boxSizing","content-box"),U.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){Q.CSS.setPropertyValue(i,t,"100%")}),Q.CSS.setPropertyValue(i,"paddingLeft","100em"),r.percentToPxWidth=M.lastPercentToPxWidth=(parseFloat(Y.getPropertyValue(i,"width",null,!0))||1)/100,r.percentToPxHeight=M.lastPercentToPxHeight=(parseFloat(Y.getPropertyValue(i,"height",null,!0))||1)/100,r.emToPx=M.lastEmToPx=(parseFloat(Y.getPropertyValue(i,"paddingLeft"))||1)/100,e.myParent.removeChild(i)),null===M.remToPx&&(M.remToPx=parseFloat(Y.getPropertyValue(R.body,"fontSize"))||16),null===M.vwToPx&&(M.vwToPx=parseFloat(H.innerWidth)/100,M.vhToPx=parseFloat(H.innerHeight)/100),r.remToPx=M.remToPx,r.vwToPx=M.vwToPx,r.vhToPx=M.vhToPx,Q.debug,r}();var k=/margin|padding|left|right|width|text|word|letter/i.test(e)||/X$/.test(e)||"x"===e?"x":"y";switch(l){case"%":s*="x"==k?D.percentToPxWidth:D.percentToPxHeight;break;case"px":break;default:s*=D[l+"ToPx"]}switch(a){case"%":s*=1/("x"==k?D.percentToPxWidth:D.percentToPxHeight);break;case"px":break;default:s*=1/D[a+"ToPx"]}}switch(c){case"+":r=s+r;break;case"-":r=s-r;break;case"*":r*=s;break;case"/":r=s/r}j[e]={rootPropertyValue:i,startValue:s,currentValue:s,endValue:r,unitType:a,easing:o},u&&(j[e].pattern=u),Q.debug}else Q.debug};for(p in A)if(A.hasOwnProperty(p)){var m=Y.Names.camelCase(p),g=(n=A[p],s=o=r=i=void 0,$.isFunction(n)&&(n=n.call(P,C,F)),$.isArray(n)?(r=n[0],s=!$.isArray(n[1])&&/^[\d-]/.test(n[1])||$.isFunction(n[1])||Y.RegEx.isHex.test(n[1])?n[1]:$.isString(n[1])&&!Y.RegEx.isHex.test(n[1])&&Q.Easings[n[1]]||$.isArray(n[1])?(o=i?n[1]:X(n[1],N.duration),n[2]):n[1]||n[2]):r=n,i||(o=o||N.easing),[(r=$.isFunction(r)?r.call(P,C,F):r)||0,o,s=$.isFunction(s)?s.call(P,C,F):s]);if(z(Y.Lists.colors)){var y=g[0],v=g[1],b=g[2];if(Y.RegEx.isHex.test(y)){for(var w=["Red","Green","Blue"],S=Y.Values.hexToRgb(y),x=b?Y.Values.hexToRgb(b):q,_=0;_<w.length;_++){var T=[S[_]];v&&T.push(v),x!==q&&T.push(x[_]),h(m+w[_],T)}continue}}h(m,g)}j.element=P}j.element&&(Y.Values.addClass(P,"velocity-animating"),W.push(j),(O=K(P))&&(""===N.queue&&(O.tweensContainer=j,O.opts=N),O.isAnimating=!0),L===F-1?(Q.State.calls.push([W,E,N,null,k.resolver,null,0]),!1===Q.State.isTicking&&(Q.State.isTicking=!0,G())):L++)}!1!==Q.mock&&(!0===Q.mock?N.duration=N.delay=1:(N.duration*=parseFloat(Q.mock)||1,N.delay*=parseFloat(Q.mock)||1)),N.easing=X(N.easing,N.duration),N.begin&&!$.isFunction(N.begin)&&(N.begin=null),N.progress&&!$.isFunction(N.progress)&&(N.progress=null),N.complete&&!$.isFunction(N.complete)&&(N.complete=null),N.display!==q&&null!==N.display&&(N.display=N.display.toString().toLowerCase(),"auto"===N.display&&(N.display=Q.CSS.Values.getDisplayType(P))),N.visibility!==q&&null!==N.visibility&&(N.visibility=N.visibility.toString().toLowerCase()),N.mobileHA=N.mobileHA&&Q.State.isMobile&&!Q.State.isGingerbread,!1===N.queue?N.delay?(e=Q.State.delayedElements.count++,Q.State.delayedElements[e]=P,t=e,e=function(){Q.State.delayedElements[t]=!1,n()},K(P).delayBegin=(new Date).getTime(),K(P).delay=parseFloat(N.delay),K(P).delayTimer={setTimeout:setTimeout(n,parseFloat(N.delay)),next:e}):n():U.queue(P,N.queue,function(e,t){return!0===t?(k.promise&&k.resolver(E),!0):(Q.velocityQueueEntryFlag=!0,void n())}),""!==N.queue&&"fx"!==N.queue||"inprogress"===U.queue(P)[0]||U.dequeue(P)}k.promise&&(A&&V&&!1===V.promiseRejectEmpty?k.resolver():k.rejecter())};(Q=U.extend(l,Q)).animate=l;var E=H.requestAnimationFrame||n;return Q.State.isMobile||R.hidden===q||((o=function(){R.hidden?(E=function(e){return setTimeout(function(){e(!0)},16)},G()):E=H.requestAnimationFrame||n})(),R.addEventListener("visibilitychange",o)),e.Velocity=Q,e!==H&&(e.fn.velocity=l,e.fn.velocity.defaults=Q.defaults),U.each(["Down","Up"],function(e,u){Q.Redirects["slide"+u]=function(n,e,i,t,r,o){var e=U.extend({},e),s=e.begin,a=e.complete,l={},c={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};e.display===q&&(e.display="Down"===u?"inline"===Q.CSS.Values.getDisplayType(n)?"inline-block":"block":"none"),e.begin=function(){for(var e in 0===i&&s&&s.call(r,r),c){var t;c.hasOwnProperty(e)&&(l[e]=n.style[e],t=Y.getPropertyValue(n,e),c[e]="Down"===u?[t,0]:[0,t])}l.overflow=n.style.overflow,n.style.overflow="hidden"},e.complete=function(){for(var e in l)l.hasOwnProperty(e)&&(n.style[e]=l[e]);i===t-1&&(a&&a.call(r,r),o&&o.resolver(r))},Q(n,c,e)}}),U.each(["In","Out"],function(e,l){Q.Redirects["fade"+l]=function(e,t,n,i,r,o){var s=U.extend({},t),a=s.complete,t={opacity:"In"===l?1:0};0!==n&&(s.begin=null),s.complete=n!==i-1?null:function(){a&&a.call(r,r),o&&o.resolver(r)},s.display===q&&(s.display="In"===l?"auto":"none"),Q(this,t,s)}}),Q}function K(e){e=U.data(e,"velocity");return null===e?q:e}function v(e,t){e=K(e);e&&e.delayTimer&&!e.delayPaused&&(e.delayRemaining=e.delay-t+e.delayBegin,e.delayPaused=!0,clearTimeout(e.delayTimer.setTimeout))}function b(e){e=K(e);e&&e.delayTimer&&e.delayPaused&&(e.delayPaused=!1,e.delayTimer.setTimeout=setTimeout(e.delayTimer.next,e.delayRemaining))}function c(s,t,a,n){var l=4,c=1e-7,u=10,f=11,d=1/(f-1),e="Float32Array"in H;if(4!==arguments.length)return!1;for(var i=0;i<4;++i)if("number"!=typeof arguments[i]||isNaN(arguments[i])||!isFinite(arguments[i]))return!1;s=Math.min(s,1),a=Math.min(a,1),s=Math.max(s,0),a=Math.max(a,0);var p=new(e?Float32Array:Array)(f);function r(e,t){return 1-3*t+3*e}function h(e,t,n){return((r(t,n)*e+(3*n-6*t))*e+3*t)*e}function m(e,t,n){return 3*r(t,n)*e*e+2*(3*n-6*t)*e+3*t}function o(e){for(var t=0,n=1,i=f-1;n!==i&&p[n]<=e;++n)t+=d;var r=t+(e-p[--n])/(p[n+1]-p[n])*d,o=m(r,s,a);return.001<=o?function(e,t){for(var n=0;n<l;++n){var i=m(t,s,a);if(0===i)return t;t-=(h(t,s,a)-e)/i}return t}(e,r):0===o?r:function(e,t,n){for(var i,r,o=0;0<(i=h(r=t+(n-t)/2,s,a)-e)?n=r:t=r,Math.abs(i)>c&&++o<u;);return r}(e,t,t+d)}var g=!1;function y(){g=!0,s===t&&a===n||function(){for(var e=0;e<f;++e)p[e]=h(e*d,s,a)}()}e=function(e){return g||y(),s===t&&a===n?e:0===e?0:1===e?1:h(o(e),t,n)};e.getControlPoints=function(){return[{x:s,y:t},{x:a,y:n}]};var v="generateBezier("+[s,t,a,n]+")";return e.toString=function(){return v},e}function w(e){return-e.tension*e.x-e.friction*e.v}function S(e,t,n){e={x:e.x+n.dx*t,v:e.v+n.dv*t,tension:e.tension,friction:e.friction};return{dx:e.v,dv:w(e)}}function X(e,t){var n=e;return $.isString(e)?Q.Easings[e]||(n=!1):n=$.isArray(e)&&1===e.length?function(t){return function(e){return Math.round(e*t)*(1/t)}}.apply(null,e):$.isArray(e)&&2===e.length?a.apply(null,e.concat([t])):!(!$.isArray(e)||4!==e.length)&&c.apply(null,e),n=!1===n?Q.Easings[Q.defaults.easing]?Q.defaults.easing:s:n}function G(e){if(e){var t=Q.timestamp&&!0!==e?e:C.now(),n=Q.State.calls.length;1e4<n&&(Q.State.calls=function(e){for(var t=-1,n=e?e.length:0,i=[];++t<n;){var r=e[t];r&&i.push(r)}return i}(Q.State.calls),n=Q.State.calls.length);for(var i=0;i<n;i++)if(Q.State.calls[i]){var r=Q.State.calls[i],o=r[0],s=r[2],a=!!(f=r[3]),l=null,c=r[5],u=r[6],f=f||(Q.State.calls[i][3]=t-16);if(c){if(!0!==c.resume)continue;f=r[3]=Math.round(t-u-16),r[5]=null}for(var u=r[6]=t-f,d=Math.min(u/s.duration,1),p=0,h=o.length;p<h;p++){var m=o[p],g=m.element;if(K(g)){var y,v,b,w,S,x,_=!1;for(y in s.display!==q&&null!==s.display&&"none"!==s.display&&("flex"===s.display&&U.each(["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"],function(e,t){Y.setPropertyValue(g,"display",t)}),Y.setPropertyValue(g,"display",s.display)),s.visibility!==q&&"hidden"!==s.visibility&&Y.setPropertyValue(g,"visibility",s.visibility),m)m.hasOwnProperty(y)&&"element"!==y&&(v=m[y],b=$.isString(v.easing)?Q.Easings[v.easing]:v.easing,x=$.isString(v.pattern)?v.pattern.replace(/{(\d+)(!)?}/g,1===d?function(e,t,n){t=v.endValue[t];return n?Math.round(t):t}:function(e,t,n){var i=v.startValue[t],t=v.endValue[t]-i,t=i+t*b(d,s,t);return n?Math.round(t):t}):1===d?v.endValue:(S=v.endValue-v.startValue,v.startValue+S*b(d,s,S)),!a&&x===v.currentValue||(v.currentValue=x,"tween"===y?l=x:(Y.Hooks.registered[y]&&(w=Y.Hooks.getRoot(y),(S=K(g).rootPropertyValueCache[w])&&(v.rootPropertyValue=S)),x=Y.setPropertyValue(g,y,v.currentValue+(T<9&&0===parseFloat(x)?"":v.unitType),v.rootPropertyValue,v.scrollData),Y.Hooks.registered[y]&&(Y.Normalizations.registered[w]?K(g).rootPropertyValueCache[w]=Y.Normalizations.registered[w]("extract",null,x[1]):K(g).rootPropertyValueCache[w]=x[1]),"transform"===x[0]&&(_=!0))));s.mobileHA&&K(g).transformCache.translate3d===q&&(K(g).transformCache.translate3d="(0px, 0px, 0px)",_=!0),_&&Y.flushTransformCache(g)}}s.display!==q&&"none"!==s.display&&(Q.State.calls[i][2].display=!1),s.visibility!==q&&"hidden"!==s.visibility&&(Q.State.calls[i][2].visibility=!1),s.progress&&s.progress.call(r[1],r[1],d,Math.max(0,f+s.duration-t),f,l),1===d&&O(i)}}Q.State.isTicking&&E(G)}function O(e,t){if(Q.State.calls[e]){for(var n=Q.State.calls[e][0],i=Q.State.calls[e][1],r=Q.State.calls[e][2],o=Q.State.calls[e][4],s=!1,a=0,l=n.length;a<l;a++){var c=n[a].element;t||r.loop||("none"===r.display&&Y.setPropertyValue(c,"display",r.display),"hidden"===r.visibility&&Y.setPropertyValue(c,"visibility",r.visibility));var u,f=K(c);if(!0===r.loop||U.queue(c)[1]!==q&&/\.velocityQueueEntryFlag/i.test(U.queue(c)[1])||f&&(f.isAnimating=!1,u=!(f.rootPropertyValueCache={}),U.each(Y.Lists.transforms3D,function(e,t){var n=/^scale/.test(t)?1:0,i=f.transformCache[t];f.transformCache[t]!==q&&new RegExp("^\\("+n+"[^.]").test(i)&&(u=!0,delete f.transformCache[t])}),r.mobileHA&&(u=!0,delete f.transformCache.translate3d),u&&Y.flushTransformCache(c),Y.Values.removeClass(c,"velocity-animating")),!t&&r.complete&&!r.loop&&a===l-1)try{r.complete.call(i,i)}catch(e){setTimeout(function(){throw e},1)}o&&!0!==r.loop&&o(i),f&&!0===r.loop&&!t&&(U.each(f.tweensContainer,function(e,t){var n;/^rotate/.test(e)&&(parseFloat(t.startValue)-parseFloat(t.endValue))%360==0&&(n=t.startValue,t.startValue=t.endValue,t.endValue=n),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),Q(c,"reverse",{loop:!0,delay:r.delay})),!1!==r.queue&&U.dequeue(c,r.queue)}Q.State.calls[e]=!1;for(var d=0,p=Q.State.calls.length;d<p;d++)if(!1!==Q.State.calls[d]){s=!0;break}!1===s&&(Q.State.isTicking=!1,delete Q.State.calls,Q.State.calls=[])}}jQuery.fn.velocity=jQuery.fn.animate}(window.jQuery||window.Zepto||window,window,window?window.document:void 0)})},226:function(e,t,n){e.exports=n.g.Tether=n(158)},609:function(e){"use strict";e.exports=jQuery}},i={};function k(e){var t=i[e];if(void 0!==t)return t.exports;t=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,k),t.loaded=!0,t.exports}k.amdO={},k.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(t,{a:t}),t},k.d=function(e,t){for(var n in t)k.o(t,n)&&!k.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},k.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e};!function(){"use strict";k(226),k(249),k(144),k(650),k(653);var e=prestashop,a=k.n(e),e=k(609),l=k.n(e);function i(e,t){var n=t.children().detach();t.empty().append(e.children().detach()),e.append(n)}function r(){a().responsive.mobile?l()("*[id^='_desktop_']").each(function(e,t){var n=l()("#".concat(t.id.replace("_desktop_","_mobile_")));n.length&&i(l()(t),n)}):l()("*[id^='_mobile_']").each(function(e,t){var n=l()("#".concat(t.id.replace("_mobile_","_desktop_")));n.length&&i(l()(t),n)}),a().emit("responsive update",{mobile:a().responsive.mobile})}a().themeSelectors={product:{tabs:".tabs .nav-link",activeNavClass:"js-product-nav-active",activeTabClass:"js-product-tab-active",activeTabs:".tabs .nav-link.active, .js-product-nav-active",imagesModal:".js-product-images-modal",thumb:".js-thumb",thumbContainer:".thumb-container, .js-thumb-container",arrows:".js-arrows",selected:".selected, .js-thumb-selected",modalProductCover:".js-modal-product-cover",cover:".js-qv-product-cover"},listing:{searchFilterToggler:"#search_filter_toggler, .js-search-toggler",searchFiltersWrapper:"#search_filters_wrapper",searchFilterControls:"#search_filter_controls",searchFilters:"#search_filters",activeSearchFilters:"#js-active-search-filters",listTop:"#js-product-list-top",product:".js-product",list:"#js-product-list",listBottom:"#js-product-list-bottom",listHeader:"#js-product-list-header",searchFiltersClearAll:".js-search-filters-clear-all",searchLink:".js-search-link"},order:{returnForm:"#order-return-form, .js-order-return-form"},arrowDown:".arrow-down, .js-arrow-down",arrowUp:".arrow-up, .js-arrow-up",clear:".clear",fileInput:".js-file-input",contentWrapper:"#content-wrapper, .js-content-wrapper",footer:"#footer, .js-footer",modalContent:".js-modal-content",modal:"#modal, .js-checkout-modal",touchspin:".js-touchspin",checkout:{termsLink:".js-terms a",giftCheckbox:".js-gift-checkbox",imagesLink:".card-block .cart-summary-products p a, .js-show-details",carrierExtraContent:".carrier-extra-content, .js-carrier-extra-content"}},l()(document).ready(function(){a().emit("themeSelectorsInit")}),a().responsive=a().responsive||{},a().responsive.current_width=window.innerWidth,a().responsive.min_width=768,a().responsive.mobile=a().responsive.current_width<a().responsive.min_width,l()(window).on("resize",function(){var e=a().responsive.current_width,t=a().responsive.min_width,n=window.innerWidth,t=t<=e&&n<t||e<t&&t<=n;a().responsive.current_width=n,a().responsive.mobile=a().responsive.current_width<a().responsive.min_width,t&&r()}),l()(document).ready(function(){a().responsive.mobile&&r()}),l()(document).ready(function(){1===l()("body#checkout").length&&(l()(a().themeSelectors.checkout.termsLink).on("click",function(e){e.preventDefault();e=l()(e.target).attr("href");e&&(e+="?content_only=1",l().get(e,function(e){l()(a().themeSelectors.modal).find(a().themeSelectors.modalContent).html(l()(e).find(".page-cms").contents())}).fail(function(e){a().emit("handleError",{eventType:"clickTerms",resp:e})})),l()(a().themeSelectors.modal).modal("show")}),l()(a().themeSelectors.checkout.giftCheckbox).on("click",function(){l()("#gift").collapse("toggle")}),l()(a().themeSelectors.checkout.imagesLink).on("click",function(){var e=l()(this).find("i.material-icons");"expand_more"===e.text()?e.text("expand_less"):e.text("expand_more")})),a().on("updatedDeliveryForm",function(e){void 0!==e.deliveryOption&&0!==e.deliveryOption.length&&(l()(a().themeSelectors.checkout.carrierExtraContent).hide(),e.deliveryOption.next(a().themeSelectors.checkout.carrierExtraContent).slideDown())})}),l()(document).ready(function(){l()("body#order-detail")&&l()("".concat(a().themeSelectors.order.returnForm," table thead input[type=checkbox]")).on("click",function(){var n=l()(this).prop("checked");l()("".concat(a().themeSelectors.order.returnForm," table tbody input[type=checkbox]")).each(function(e,t){l()(t).prop("checked",n)})})});k(225);function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,(n=[{key:"init",value:function(){l()(".js-product-miniature").each(function(e,t){var n;5<l()(t).find(".color").length&&(n=0,l()(t).find(".color").each(function(e,t){4<e&&(l()(t).hide(),n+=1)}),l()(t).find(".js-count").append("+".concat(n)))})}}])&&o(t.prototype,n),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}l()(document).ready(function(){var t=window.location.href;a().on("clickQuickView",function(e){e={action:"quickview",id_product:e.dataset.idProduct,id_product_attribute:e.dataset.idProductAttribute};l().post(a().urls.pages.product,e,null,"json").then(function(e){l()("body").append(e.quickview_html);var t=l()("#quickview-modal-".concat(e.product.id,"-").concat(e.product.id_product_attribute));t.modal("show"),n(t),t.on("hidden.bs.modal",function(){t.remove()})}).fail(function(e){a().emit("handleError",{eventType:"clickQuickView",resp:e})})});var n=function(e){var t=l()(a().themeSelectors.product.arrows),n=e.find(".js-qv-product-images");l()(a().themeSelectors.product.thumb).on("click",function(e){l()(a().themeSelectors.product.thumb).hasClass("selected")&&l()(a().themeSelectors.product.thumb).removeClass("selected"),l()(e.currentTarget).addClass("selected"),l()(a().themeSelectors.product.cover).attr("src",l()(e.target).data("image-large-src"))}),n.find("li").length<=4?t.hide():t.on("click",function(e){l()(e.target).hasClass("arrow-up")&&l()(".js-qv-product-images").position().top<0?(i("up"),l()(a().themeSelectors.arrowDown).css("opacity","1")):l()(e.target).hasClass("arrow-down")&&n.position().top+n.height()>l()(".js-qv-mask").height()&&(i("down"),l()(a().themeSelectors.arrowUp).css("opacity","1"))}),e.find(a().selectors.quantityWanted).TouchSpin({verticalbuttons:!0,verticalupclass:"material-icons touchspin-up",verticaldownclass:"material-icons touchspin-down",buttondown_class:"btn btn-touchspin js-touchspin",buttonup_class:"btn btn-touchspin js-touchspin",min:1,max:1e6}),l()(a().themeSelectors.touchspin).off("touchstart.touchspin")},i=function(e){var t=l()(".js-qv-product-images"),n=l()(".js-qv-product-images li img").height()+20,i=t.position().top;t.velocity({translateY:"up"===e?i+n:i-n},function(){0<=t.position().top?l()(".arrow-up").css("opacity",".2"):t.position().top+t.height()<=l()(".js-qv-mask").height()&&l()(".arrow-down").css("opacity",".2")})};l()("body").on("click",a().themeSelectors.listing.searchFilterToggler,function(){l()(a().themeSelectors.listing.searchFiltersWrapper).removeClass("hidden-sm-down"),l()(a().themeSelectors.contentWrapper).addClass("hidden-sm-down"),l()(a().themeSelectors.footer).addClass("hidden-sm-down")}),l()("".concat(a().themeSelectors.listing.searchFilterControls," ").concat(a().themeSelectors.clear)).on("click",function(){l()(a().themeSelectors.listing.searchFiltersWrapper).addClass("hidden-sm-down"),l()(a().themeSelectors.contentWrapper).removeClass("hidden-sm-down"),l()(a().themeSelectors.footer).removeClass("hidden-sm-down")}),l()("".concat(a().themeSelectors.listing.searchFilterControls," .ok")).on("click",function(){l()(a().themeSelectors.listing.searchFiltersWrapper).addClass("hidden-sm-down"),l()(a().themeSelectors.contentWrapper).removeClass("hidden-sm-down"),l()(a().themeSelectors.footer).removeClass("hidden-sm-down")});function r(e){if(void 0!==e.target.dataset.searchUrl)return e.target.dataset.searchUrl;if(void 0===l()(e.target).parent()[0].dataset.searchUrl)throw new Error("Can not parse search URL");return l()(e.target).parent()[0].dataset.searchUrl}l()("body").on("change","".concat(a().themeSelectors.listing.searchFilters," input[data-search-url]"),function(e){a().emit("updateFacets",r(e))}),l()("body").on("click",a().themeSelectors.listing.searchFiltersClearAll,function(e){a().emit("updateFacets",r(e))}),l()("body").on("click",a().themeSelectors.listing.searchLink,function(e){e.preventDefault(),a().emit("updateFacets",l()(e.target).closest("a").get(0).href)}),l()(a().themeSelectors.listing.list).length&&window.addEventListener("popstate",function(e){e=e.state;window.location.href=e&&e.current_url?e.current_url:t}),l()("body").on("change","".concat(a().themeSelectors.listing.searchFilters," select"),function(e){e=l()(e.target).closest("form");a().emit("updateFacets","?".concat(e.serialize()))}),a().on("updateProductList",function(e){!function(e){l()(a().themeSelectors.listing.searchFilters).replaceWith(e.rendered_facets),l()(a().themeSelectors.listing.activeSearchFilters).replaceWith(e.rendered_active_filters),l()(a().themeSelectors.listing.listTop).replaceWith(e.rendered_products_top);var t=l()(e.rendered_products),n=l()(a().themeSelectors.listing.product,t);0<n.length&&n.removeClass().addClass(l()(a().themeSelectors.listing.product).first().attr("class"));l()(a().themeSelectors.listing.list).replaceWith(t),l()(a().themeSelectors.listing.listBottom).replaceWith(e.rendered_products_bottom),e.rendered_products_header&&l()(a().themeSelectors.listing.listHeader).replaceWith(e.rendered_products_header);(new s).init()}(e),window.scrollTo(0,0)})});var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,(n=[{key:"init",value:function(){var t=this,e=l()(".js-modal-arrows"),n=l()(".js-modal-product-images");l()("body").on("click",".js-modal-thumb",function(e){l()(".js-modal-thumb").hasClass("selected")&&l()(".js-modal-thumb").removeClass("selected"),l()(e.currentTarget).addClass("selected"),l()(".js-modal-product-cover").attr("src",l()(e.target).data("image-large-src")),l()(".js-modal-product-cover").attr("title",l()(e.target).attr("title")),l()(".js-modal-product-cover").attr("alt",l()(e.target).attr("alt"))}).on("click","aside#thumbnails",function(e){"thumbnails"===e.target.id&&l()("#product-modal").modal("hide")}),l()(".js-modal-product-images li").length<=5?e.css("opacity",".2"):e.on("click",function(e){l()(e.target).hasClass("arrow-up")&&n.position().top<0?(t.move("up"),l()(".js-modal-arrow-down").css("opacity","1")):l()(e.target).hasClass("arrow-down")&&n.position().top+n.height()>l()(".js-modal-mask").height()&&(t.move("down"),l()(".js-modal-arrow-up").css("opacity","1"))})}},{key:"move",value:function(e){var t=l()(".js-modal-product-images"),n=l()(".js-modal-product-images li img").height()+10,i=t.position().top;t.velocity({translateY:"up"===e?i+n:i-n},function(){0<=t.position().top?l()(".js-modal-arrow-up").css("opacity",".2"):t.position().top+t.height()<=l()(".js-modal-mask").height()&&l()(".js-modal-arrow-down").css("opacity",".2")})}}])&&c(t.prototype,n),i&&c(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();l()(document).ready(function(){var t,e;function i(){function i(e,t){t=t.find(a().themeSelectors.product.thumb),l()(a().themeSelectors.product.modalProductCover).attr("src",t.data("image-large-src")),e.removeClass("selected"),t.addClass("selected"),n.prop("src",t.data("image-medium-src"))}var n=l()(a().themeSelectors.product.cover),r=l()(a().themeSelectors.product.selected);l()(a().themeSelectors.product.thumb).on("click",function(e){r=l()(a().themeSelectors.product.selected),i(r,l()(e.target).closest(a().themeSelectors.product.thumbContainer))}),n.swipe({swipe:function(e,t){var n=(r=l()(a().themeSelectors.product.selected)).closest(a().themeSelectors.product.thumbContainer);"right"===t?0<n.prev().length?i(r,n.prev()):0<n.next().length&&i(r,n.next()):"left"===t&&(0<n.next().length?i(r,n.next()):0<n.prev().length&&i(r,n.prev()))},allowPageScroll:"vertical"})}function r(){2<l()("#main .js-qv-product-images li").length?(l()("#main .js-qv-mask").addClass("scroll"),l()(".scroll-box-arrows").addClass("scroll"),l()("#main .js-qv-mask").scrollbox({direction:"h",distance:113,autoPlay:!1}),l()(".scroll-box-arrows .left").click(function(){l()("#main .js-qv-mask").trigger("backward")}),l()(".scroll-box-arrows .right").click(function(){l()("#main .js-qv-mask").trigger("forward")})):(l()("#main .js-qv-mask").removeClass("scroll"),l()(".scroll-box-arrows").removeClass("scroll"))}function o(){l()(a().themeSelectors.fileInput).on("change",function(e){var t;(e=l()(e.currentTarget)[0])&&(t=e.files[0])&&l()(e).prev().text(t.name)})}(t=l()(a().selectors.quantityWanted)).TouchSpin({verticalbuttons:!0,verticalupclass:"material-icons touchspin-up",verticaldownclass:"material-icons touchspin-down",buttondown_class:"btn btn-touchspin js-touchspin",buttonup_class:"btn btn-touchspin js-touchspin",min:parseInt(t.attr("min"),10),max:1e6}),l()(a().themeSelectors.touchspin).off("touchstart.touchspin"),t.focusout(function(){(""===t.val()||t.val()<t.attr("min"))&&(t.val(t.attr("min")),t.trigger("change"))}),l()("body").on("change keyup",a().selectors.quantityWanted,function(e){""!==t.val()&&(l()(e.currentTarget).trigger("touchspin.stopspin"),a().emit("updateProduct",{eventType:"updatedProductQuantity",event:e}))}),o(),i(),r(),(e=l()(a().themeSelectors.product.tabs)).on("show.bs.tab",function(e){e=l()(e.target);e.addClass(a().themeSelectors.product.activeNavClass),l()(e.attr("href")).addClass(a().themeSelectors.product.activeTabClass)}),e.on("hide.bs.tab",function(e){e=l()(e.target);e.removeClass(a().themeSelectors.product.activeNavClass),l()(e.attr("href")).removeClass(a().themeSelectors.product.activeTabClass)}),a().on("updatedProduct",function(e){var t,n;o(),i(),e&&e.product_minimal_quantity&&(t=parseInt(e.product_minimal_quantity,10),n=a().selectors.quantityWanted,l()(n).trigger("touchspin.updatesettings",{min:t})),r(),l()(l()(a().themeSelectors.product.activeTabs).attr("href")).addClass("active").removeClass("fade"),l()(a().themeSelectors.product.imagesModal).replaceWith(e.product_images_modal),(new u).init()})}),a().cart=a().cart||{},a().cart.active_inputs=null;var f='input[name="product-quantity-spin"]',n=!1,d=!1,p="";function h(){l().each(l()(f),function(e,t){l()(t).TouchSpin({verticalbuttons:!0,verticalupclass:"material-icons touchspin-up",verticaldownclass:"material-icons touchspin-down",buttondown_class:"btn btn-touchspin js-touchspin js-increase-product-quantity",buttonup_class:"btn btn-touchspin js-touchspin js-decrease-product-quantity",min:parseInt(l()(t).attr("min"),10),max:1e6})}),l()(a().themeSelectors.touchspin).off("touchstart.touchspin"),m.switchErrorStat()}l()(document).ready(function(){var i=".js-cart-line-product-quantity",o=[];a().on("updateCart",function(){l()(".quickview").modal("hide")}),a().on("updatedCart",function(){h()}),h();var e=l()("body");function r(e,t){if("on.startupspin"!==(n=t)&&"on.startdownspin"!==n)return{url:e.attr("href"),type:function(e){for(var t,n=e.split("-"),i="",r=0;r<n.length;r+=1)t=n[r],i+=t=0!==r?t.substring(0,1).toUpperCase()+t.substring(1):t;return i}(e.data("link-action"))};var n,e=(e=(e=e).parents(".bootstrap-touchspin").find(i)).is(":focus")?null:e;if(!e)return!1;return"on.startupspin"===t?{url:e.data("up-url"),type:"increaseProductQuantity"}:{url:e.data("down-url"),type:"decreaseProductQuantity"}}function t(e){e.preventDefault();var n=l()(e.currentTarget),i=e.currentTarget.dataset,t=r(n,e.namespace);t&&(s(),l().ajax({url:t.url,method:"POST",data:{ajax:"1",action:"update"},dataType:"json",beforeSend:function(e){o.push(e)}}).then(function(e){var t;m.checkUpdateOpertation(e),(t=n,l()(t.parents(".bootstrap-touchspin").find("input"))).val(e.quantity),a().emit("updateCart",{reason:i,resp:e})}).fail(function(e){a().emit("handleError",{eventType:"updateProductInCart",resp:e,cartAction:t.type})}))}var s=function(){for(;0<o.length;)o.pop().abort()};function n(e){var n,t=l()(e.currentTarget),i=t.data("update-url"),r=t.attr("value"),e=t.val();e!=parseInt(e,10)||e<0||isNaN(e)?t.val(r):0!=(r=e-r)&&(t.attr("value",e),i=i,r=r,r={ajax:"1",qty:Math.abs(r),action:"update",op:0<r?"up":"down"},n=t,s(),l().ajax({url:i,method:"POST",data:r,dataType:"json",beforeSend:function(e){o.push(e)}}).then(function(e){var t;m.checkUpdateOpertation(e),n.val(e.quantity),t=n&&n.dataset?n.dataset:e,a().emit("updateCart",{reason:t,resp:e})}).fail(function(e){a().emit("handleError",{eventType:"updateProductQuantityInCart",resp:e})}))}e.on("click",'[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]',t),e.on("touchspin.on.startdownspin",f,t),e.on("touchspin.on.startupspin",f,t),e.on("focusout keyup",i,function(e){return("keyup"!==e.type||13===e.keyCode)&&n(e),!1});e.on("hidden.bs.collapse","#promo-code",function(){l()(".display-promo").show(400)}),e.on("click",".promo-code-button",function(e){e.preventDefault(),l()("#promo-code").collapse("toggle")}),e.on("click",".display-promo",function(e){l()(e.currentTarget).hide(400)}),e.on("click",".js-discount .code",function(e){e.stopPropagation();e=l()(e.currentTarget);return l()("[name=discount_name]").val(e.text()),l()("#promo-code").collapse("show"),l()(".display-promo").hide(400),!1})});var m={switchErrorStat:function(){var e,t=l()(".checkout a");(l()("#notifications article.alert-danger").length||""!==p&&!n)&&t.addClass("disabled"),""!==p?(e=' <article class="alert alert-danger" role="alert" data-alert="danger"><ul><li>'.concat(p,"</li></ul></article>"),l()("#notifications .container").html(e),p="",d=!1,n&&t.removeClass("disabled")):!n&&d&&(d=n=!1,l()("#notifications .container").html(""),t.removeClass("disabled"))},checkUpdateOpertation:function(e){n=e.hasOwnProperty("hasError");e=e.errors||"";p=e instanceof Array?e.join(" "):e,d=!0}},e=k(291),t=k.n(e);function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var y=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e}var e,n,i;return e=t,(n=[{key:"init",value:function(){this.el.on("show.bs.dropdown",function(e,t){(t?l()("#".concat(t)):l()(e.target)).find(".dropdown-menu").first().stop(!0,!0).slideDown()}),this.el.on("hide.bs.dropdown",function(e,t){(t?l()("#".concat(t)):l()(e.target)).find(".dropdown-menu").first().stop(!0,!0).slideUp()}),this.el.find("select.link").each(function(e,t){l()(t).on("change",function(){window.location=l()(this).val()})})}}])&&g(e.prototype,n),i&&g(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.parentFocus(),this.togglePasswordVisibility()}},{key:"parentFocus",value:function(){l()(".js-child-focus").focus(function(){l()(this).closest(".js-parent-focus").addClass("focus")}),l()(".js-child-focus").focusout(function(){l()(this).closest(".js-parent-focus").removeClass("focus")})}},{key:"togglePasswordVisibility",value:function(){l()('button[data-action="show-password"]').on("click",function(){var e=l()(this).closest(".input-group").children("input.js-visible-password");"password"===e.attr("type")?(e.attr("type","text"),l()(this).text(l()(this).data("textHide"))):(e.attr("type","password"),l()(this).text(l()(this).data("textShow")))})}}])&&v(t.prototype,n),i&&v(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function x(){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(i){t=Object.getOwnPropertyDescriptor(i,t);return t.get?t.get.call(arguments.length<3?e:n):t.value}}).apply(this,arguments)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(n){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=C(n);return function(e,t){{if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")}return function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e)}(this,i?(e=C(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E,A=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&_(e,t)}(r,y);var e,t,n,i=T(r);function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),i.apply(this,arguments)}return e=r,(t=[{key:"init",value:function(){var n,i=this,e=this;this.el.find("li").hover(function(e){var t;i.el.parent().hasClass("mobile")||(t=l()(e.currentTarget).attr("class"),n!==t&&(t=Array.prototype.slice.call(e.currentTarget.classList).map(function(e){return"string"==typeof e&&".".concat(e)}),(n=t.join(""))&&0===l()(e.target).data("depth")&&l()("".concat(n," .js-sub-menu")).css({top:l()("".concat(n)).height()+l()("".concat(n)).position().top})))}),l()("#menu-icon").on("click",function(){l()("#mobile_top_menu_wrapper").toggle(),e.toggleMobileMenu()}),this.el.on("click",function(e){i.el.parent().hasClass("mobile")||e.stopPropagation()}),a().on("responsive update",function(){l()(".js-sub-menu").removeAttr("style"),e.toggleMobileMenu()}),x(C(r.prototype),"init",this).call(this)}},{key:"toggleMobileMenu",value:function(){l()("#header").toggleClass("is-open"),l()("#mobile_top_menu_wrapper").is(":visible")?l()("#notifications, #wrapper, #footer").hide():l()("#notifications, #wrapper, #footer").show()}}])&&S(e.prototype,t),n&&S(e,n),Object.defineProperty(e,"prototype",{writable:!1}),r}();k(46),k(356);for(E in a().blockcart=a().blockcart||{},a().blockcart.showModal=function(e){function t(){return l()("#blockcart-modal")}var n=t();n.length&&n.remove(),l()("body").append(e),(n=t()).modal("show").on("hidden.bs.modal",function(e){a().emit("updateProduct",{reason:e.currentTarget.dataset,event:e})})},t().prototype)a()[E]=t().prototype[E];l()(document).ready(function(){var e=l()(".js-dropdown"),t=new b,n=l()('.js-top-menu ul[data-depth="0"]'),i=new y(e),r=new A(n),e=new s,n=new u;i.init(),t.init(),r.init(),e.init(),n.init(),l()('.carousel[data-touch="true"]').swipe({swipe:function(e,t){"left"===t&&l()(this).carousel("next"),"right"===t&&l()(this).carousel("prev")},allowPageScroll:"vertical"})})}()}();/**
 * 2007-2020 PrestaShop.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
$(document).ready(function(){$('.block_newsletter form').on('submit',function(){var psemailsubscriptionForm=$(this);if(typeof psemailsubscription_subscription==='undefined'){return!0}
$('.block_newsletter_alert').remove();$.ajax({type:'POST',dataType:'JSON',url:psemailsubscription_subscription,cache:!1,data:$(this).serialize(),success:function(data){if(data.nw_error){psemailsubscriptionForm.prepend('<p class="alert alert-danger block_newsletter_alert">'+data.msg+'</p>')}else{psemailsubscriptionForm.prepend('<p class="alert alert-success block_newsletter_alert">'+data.msg+'</p>')}},error:function(err){console.log(err)}});return!1})});/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./_dev/front/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_dev/front/front.scss":
/*!*******************************!*\
  !*** ./_dev/front/front.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./front.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/front.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./_dev/front/index.js":
/*!*****************************!*\
  !*** ./_dev/front/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front.scss */ "./_dev/front/front.scss");
/* harmony import */ var _front_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_front_scss__WEBPACK_IMPORTED_MODULE_0__);
/**
 * 2007-2019 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA
 * @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
$(window).ready(function(){$('.blockreassurance_product img.svg, .blockreassurance img.svg').each(function(){var imgObject=$(this);var imgID=imgObject.attr('id');var imgClass=imgObject.attr('class');var imgURL=imgObject.attr('src');$.ajax({url:imgURL,type:'GET',success:function(data){if($.isXMLDoc(data)){var $svg=$(data).find('svg');$svg=typeof imgID!=='undefined'?$svg.attr('id',imgID):$svg;$svg=typeof imgClass!=='undefined'?$svg.attr('class',imgClass+' replaced-svg'):$svg.attr('class',' replaced-svg');$svg.removeClass('invisible');$svg=$svg.attr('data-img-url',imgURL);$svg=$svg.removeAttr('xmlns:a');$svg.find('path[fill]').attr('fill',psr_icon_color);$svg.find('path:not([fill])').css('fill',psr_icon_color);imgObject.replaceWith($svg)}
imgObject.removeClass('invisible')}})})})}),"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/front.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./_dev/front/front.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
(function(module,exports,__webpack_require__){}),"./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
(function(module,exports,__webpack_require__){var stylesInDom={};var memoize=function(fn){var memo;return function(){if(typeof memo==="undefined")memo=fn.apply(this,arguments);return memo}};var isOldIE=memoize(function(){return window&&document&&document.all&&!window.atob});var getTarget=function(target,parent){if(parent){return parent.querySelector(target)}
return document.querySelector(target)};var getElement=(function(fn){var memo={};return function(target,parent){if(typeof target==='function'){return target()}
if(typeof memo[target]==="undefined"){var styleTarget=getTarget.call(this,target,parent);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}}
memo[target]=styleTarget}
return memo[target]}})();var singleton=null;var singletonCounter=0;var stylesInsertedAtTop=[];var fixUrls=__webpack_require__(/*! ./urls */"./node_modules/style-loader/lib/urls.js");module.exports=function(list,options){if(typeof DEBUG!=="undefined"&&DEBUG){if(typeof document!=="object")throw new Error("The style-loader cannot be used in a non-browser environment")}
options=options||{};options.attrs=typeof options.attrs==="object"?options.attrs:{};if(!options.singleton&&typeof options.singleton!=="boolean")options.singleton=isOldIE();if(!options.insertInto)options.insertInto="head";if(!options.insertAt)options.insertAt="bottom";var styles=listToStyles(list,options);addStylesToDom(styles,options);return function update(newList){var mayRemove=[];for(var i=0;i<styles.length;i++){var item=styles[i];var domStyle=stylesInDom[item.id];domStyle.refs--;mayRemove.push(domStyle)}
if(newList){var newStyles=listToStyles(newList,options);addStylesToDom(newStyles,options)}
for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(domStyle.refs===0){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};function addStylesToDom(styles,options){for(var i=0;i<styles.length;i++){var item=styles[i];var domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++){domStyle.parts[j](item.parts[j])}
for(;j<item.parts.length;j++){domStyle.parts.push(addStyle(item.parts[j],options))}}else{var parts=[];for(var j=0;j<item.parts.length;j++){parts.push(addStyle(item.parts[j],options))}
stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}
function listToStyles(list,options){var styles=[];var newStyles={};for(var i=0;i<list.length;i++){var item=list[i];var id=options.base?item[0]+options.base:item[0];var css=item[1];var media=item[2];var sourceMap=item[3];var part={css:css,media:media,sourceMap:sourceMap};if(!newStyles[id])styles.push(newStyles[id]={id:id,parts:[part]});else newStyles[id].parts.push(part)}
return styles}
function insertStyleElement(options,style){var target=getElement(options.insertInto)
if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.")}
var lastStyleElementInsertedAtTop=stylesInsertedAtTop[stylesInsertedAtTop.length-1];if(options.insertAt==="top"){if(!lastStyleElementInsertedAtTop){target.insertBefore(style,target.firstChild)}else if(lastStyleElementInsertedAtTop.nextSibling){target.insertBefore(style,lastStyleElementInsertedAtTop.nextSibling)}else{target.appendChild(style)}
stylesInsertedAtTop.push(style)}else if(options.insertAt==="bottom"){target.appendChild(style)}else if(typeof options.insertAt==="object"&&options.insertAt.before){var nextSibling=getElement(options.insertAt.before,target);target.insertBefore(style,nextSibling)}else{throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n")}}
function removeStyleElement(style){if(style.parentNode===null)return!1;style.parentNode.removeChild(style);var idx=stylesInsertedAtTop.indexOf(style);if(idx>=0){stylesInsertedAtTop.splice(idx,1)}}
function createStyleElement(options){var style=document.createElement("style");if(options.attrs.type===undefined){options.attrs.type="text/css"}
if(options.attrs.nonce===undefined){var nonce=getNonce();if(nonce){options.attrs.nonce=nonce}}
addAttrs(style,options.attrs);insertStyleElement(options,style);return style}
function createLinkElement(options){var link=document.createElement("link");if(options.attrs.type===undefined){options.attrs.type="text/css"}
options.attrs.rel="stylesheet";addAttrs(link,options.attrs);insertStyleElement(options,link);return link}
function addAttrs(el,attrs){Object.keys(attrs).forEach(function(key){el.setAttribute(key,attrs[key])})}
function getNonce(){if(!1){}
return __webpack_require__.nc}
function addStyle(obj,options){var style,update,remove,result;if(options.transform&&obj.css){result=typeof options.transform==='function'?options.transform(obj.css):options.transform.default(obj.css);if(result){obj.css=result}else{return function(){}}}
if(options.singleton){var styleIndex=singletonCounter++;style=singleton||(singleton=createStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,!1);remove=applyToSingletonTag.bind(null,style,styleIndex,!0)}else if(obj.sourceMap&&typeof URL==="function"&&typeof URL.createObjectURL==="function"&&typeof URL.revokeObjectURL==="function"&&typeof Blob==="function"&&typeof btoa==="function"){style=createLinkElement(options);update=updateLink.bind(null,style,options);remove=function(){removeStyleElement(style);if(style.href)URL.revokeObjectURL(style.href)}}else{style=createStyleElement(options);update=applyToTag.bind(null,style);remove=function(){removeStyleElement(style)}}
update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return}
update(obj=newObj)}else{remove()}}}
var replaceText=(function(){var textStore=[];return function(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n')}})();function applyToSingletonTag(style,index,remove,obj){var css=remove?"":obj.css;if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css)}else{var cssNode=document.createTextNode(css);var childNodes=style.childNodes;if(childNodes[index])style.removeChild(childNodes[index]);if(childNodes.length){style.insertBefore(cssNode,childNodes[index])}else{style.appendChild(cssNode)}}}
function applyToTag(style,obj){var css=obj.css;var media=obj.media;if(media){style.setAttribute("media",media)}
if(style.styleSheet){style.styleSheet.cssText=css}else{while(style.firstChild){style.removeChild(style.firstChild)}
style.appendChild(document.createTextNode(css))}}
function updateLink(link,options,obj){var css=obj.css;var sourceMap=obj.sourceMap;var autoFixUrls=options.convertToAbsoluteUrls===undefined&&sourceMap;if(options.convertToAbsoluteUrls||autoFixUrls){css=fixUrls(css)}
if(sourceMap){css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */"}
var blob=new Blob([css],{type:"text/css"});var oldSrc=link.href;link.href=URL.createObjectURL(blob);if(oldSrc)URL.revokeObjectURL(oldSrc)}}),"./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
(function(module,exports){module.exports=function(css){var location=typeof window!=="undefined"&&window.location;if(!location){throw new Error("fixUrls requires window.location")}
if(!css||typeof css!=="string"){return css}
var baseUrl=location.protocol+"//"+location.host;var currentDir=baseUrl+location.pathname.replace(/\/[^\/]*$/,"/");var fixedCss=css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(fullMatch,origUrl){var unquotedOrigUrl=origUrl.trim().replace(/^"(.*)"$/,function(o,$1){return $1}).replace(/^'(.*)'$/,function(o,$1){return $1});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)){return fullMatch}
var newUrl;if(unquotedOrigUrl.indexOf("//")===0){newUrl=unquotedOrigUrl}else if(unquotedOrigUrl.indexOf("/")===0){newUrl=baseUrl+unquotedOrigUrl}else{newUrl=currentDir+unquotedOrigUrl.replace(/^\.\//,"")}
return"url("+JSON.stringify(newUrl)+")"});return fixedCss}})});/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License version 3.0
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License version 3.0
 */
$(document).ready(function(){prestashop.on('updateProduct',function(params){if(params.eventType==='updatedProductCombination'){var productId=$('input[name="id_product"]').val();var $productAttributes=$(params.event.handleObj.selector);var selectedAttribute=$(params.event.originalEvent.srcElement);var attributes=[];$productAttributes.each(function(key,attribute){if($(attribute).is("input")&&!$(attribute).is(':checked')){return}
attributes.push($(attribute).val())})
ajaxProductCombinationChange(productId,attributes)}});function ajaxProductCombinationChange(productId,attributes){$.ajax({type:'POST',url:prestashopFacebookAjaxController,data:{action:'CustomizeProduct',ajax:!0,id_product:productId,attribute_ids:attributes,}})}});/*
* 2007-2016 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
* @author PrestaShop SA <contact@prestashop.com>
* @copyright 2007-2016 PrestaShop SA
* @license http://opensource.org/licenses/afl-3.0.php Academic Free License (AFL 3.0)
* International Registered Trademark & Property of PrestaShop SA
*/
$(document).ready(function(){wishlistRefreshStatus();$(document).on('change','select[name=wishlists]',function(){WishlistChangeDefault('wishlist_block_list',$(this).val())});$('.wishlist').each(function(){current=$(this);$(this).children('.wishlist_button_list').popover({html:!0,content:function(){return current.children('.popover-content').html()}})})});function WishlistCart(id,action,id_product,id_product_attribute,quantity,id_wishlist){$.ajax({type:'GET',url:baseDir+'modules/blockwishlist/cart.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},async:!0,cache:!1,data:'action='+action+'&id_product='+id_product+'&quantity='+quantity+'&token='+static_token+'&id_product_attribute='+id_product_attribute+'&id_wishlist='+id_wishlist,success:function(data){if(action=='add'){if(isLogged==!0){wishlistProductsIdsAdd(id_product);wishlistRefreshStatus();if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:!0,minHeight:30,content:'<p class="fancybox-error">'+added_to_wishlist+'</p>'}],{padding:0});else alert(added_to_wishlist)}else{if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:!0,minHeight:30,content:'<p class="fancybox-error">'+loggin_required+'</p>'}],{padding:0});else alert(loggin_required)}}
if(action=='delete'){wishlistProductsIdsRemove(id_product);wishlistRefreshStatus()}
if($('#'+id).length!=0){$('#'+id).slideUp('normal');document.getElementById(id).innerHTML=data;$('#'+id).slideDown('normal')}}})}
function WishlistChangeDefault(id,id_wishlist){$.ajax({type:'GET',url:baseDir+'modules/blockwishlist/cart.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},async:!0,data:'id_wishlist='+id_wishlist+'&token='+static_token,cache:!1,success:function(data){$('#'+id).slideUp('normal');document.getElementById(id).innerHTML=data;$('#'+id).slideDown('normal')}})}
function WishlistBuyProduct(token,id_product,id_product_attribute,id_quantity,button,ajax){if(ajax)
ajaxCart.add(id_product,id_product_attribute,!1,button,1,[token,id_quantity]);else{$('#'+id_quantity).val(0);WishlistAddProductCart(token,id_product,id_product_attribute,id_quantity)
document.forms['addtocart'+'_'+id_product+'_'+id_product_attribute].method='POST';document.forms['addtocart'+'_'+id_product+'_'+id_product_attribute].action=baseUri+'?controller=cart';document.forms['addtocart'+'_'+id_product+'_'+id_product_attribute].elements.token.value=static_token;document.forms['addtocart'+'_'+id_product+'_'+id_product_attribute].submit()}
return(!0)}
function WishlistAddProductCart(token,id_product,id_product_attribute,id_quantity){if($('#'+id_quantity).val()<=0)
return(!1);$.ajax({type:'GET',url:baseDir+'modules/blockwishlist/buywishlistproduct.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},data:'token='+token+'&static_token='+static_token+'&id_product='+id_product+'&id_product_attribute='+id_product_attribute,async:!0,cache:!1,success:function(data){if(data){if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:!0,minHeight:30,content:'<p class="fancybox-error">'+data+'</p>'}],{padding:0});else alert(data)}else $('#'+id_quantity).val($('#'+id_quantity).val()-1)}});return(!0)}
function WishlistManage(id,id_wishlist){$.ajax({type:'GET',async:!0,url:baseDir+'modules/blockwishlist/managewishlist.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},data:'id_wishlist='+id_wishlist+'&refresh='+!1,cache:!1,success:function(data){$('#'+id).hide();document.getElementById(id).innerHTML=data;$('#'+id).fadeIn('slow');$('.wishlist_change_button').each(function(index){$(this).change(function(){wishlistProductChange($('option:selected',this).attr('data-id-product'),$('option:selected',this).attr('data-id-product-attribute'),$('option:selected',this).attr('data-id-old-wishlist'),$('option:selected',this).attr('data-id-new-wishlist'))})})}})}
function WishlistProductManage(id,action,id_wishlist,id_product,id_product_attribute,quantity,priority){$.ajax({type:'GET',async:!0,url:baseDir+'modules/blockwishlist/managewishlist.php?rand='+new Date().getTime(),headers:{"cache-control":"no-cache"},data:'action='+action+'&id_wishlist='+id_wishlist+'&id_product='+id_product+'&id_product_attribute='+id_product_attribute+'&quantity='+quantity+'&priority='+priority+'&refresh='+!0,cache:!1,success:function(data){if(action=='delete')
$('#wlp_'+id_product+'_'+id_product_attribute).fadeOut('fast');else if(action=='update'){$('#wlp_'+id_product+'_'+id_product_attribute).fadeOut('fast');$('#wlp_'+id_product+'_'+id_product_attribute).fadeIn('fast')}
nb_products=0;$("[id^='quantity']").each(function(index,element){nb_products+=parseInt(element.value)});$("#wishlist_"+id_wishlist).children('td').eq(1).html(nb_products)}})}
function WishlistDelete(id,id_wishlist,msg){var res=confirm(msg);if(res==!1)
return(!1);if(typeof mywishlist_url=='undefined')
return(!1);$.ajax({type:'GET',async:!0,dataType:"json",url:mywishlist_url,headers:{"cache-control":"no-cache"},cache:!1,data:{rand:new Date().getTime(),deleted:1,myajax:1,id_wishlist:id_wishlist,action:'deletelist'},success:function(data){var mywishlist_siblings_count=$('#'+id).siblings().length;$('#'+id).fadeOut('slow').remove();$("#block-order-detail").html('');if(mywishlist_siblings_count==0)
$("#block-history").remove();if(data.id_default){var td_default=$("#wishlist_"+data.id_default+" > .wishlist_default");$("#wishlist_"+data.id_default+" > .wishlist_default > a").remove();td_default.append('<p class="is_wish_list_default"><i class="icon icon-check-square"></i></p>')}}})}
function WishlistDefault(id,id_wishlist){if(typeof mywishlist_url=='undefined')
return(!1);$.ajax({type:'GET',async:!0,url:mywishlist_url,headers:{"cache-control":"no-cache"},cache:!1,data:{rand:new Date().getTime(),'default':1,id_wishlist:id_wishlist,myajax:1,action:'setdefault'},success:function(data){var old_default_id=$(".is_wish_list_default").parents("tr").attr("id");var td_check=$(".is_wish_list_default").parent();$(".is_wish_list_default").remove();td_check.append('<a href="#" onclick="javascript:event.preventDefault();(WishlistDefault(\''+old_default_id+'\', \''+old_default_id.replace("wishlist_","")+'\'));"><i class="icon icon-square"></i></a>');var td_default=$("#"+id+" > .wishlist_default");$("#"+id+" > .wishlist_default > a").remove();td_default.append('<p class="is_wish_list_default"><i class="icon icon-check-square"></i></p>')}})}
function WishlistVisibility(bought_class,id_button){if($('#hide'+id_button).is(':hidden')){$('.'+bought_class).slideDown('fast');$('#show'+id_button).hide();$('#hide'+id_button).css('display','block')}else{$('.'+bought_class).slideUp('fast');$('#hide'+id_button).hide();$('#show'+id_button).css('display','block')}}
function WishlistSend(id,id_wishlist,id_email){$.post(baseDir+'modules/blockwishlist/sendwishlist.php',{token:static_token,id_wishlist:id_wishlist,email1:$('#'+id_email+'1').val(),email2:$('#'+id_email+'2').val(),email3:$('#'+id_email+'3').val(),email4:$('#'+id_email+'4').val(),email5:$('#'+id_email+'5').val(),email6:$('#'+id_email+'6').val(),email7:$('#'+id_email+'7').val(),email8:$('#'+id_email+'8').val(),email9:$('#'+id_email+'9').val(),email10:$('#'+id_email+'10').val()},function(data){if(data){if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:!0,minHeight:30,content:'<p class="fancybox-error">'+data+'</p>'}],{padding:0});else alert(data)}else WishlistVisibility(id,'hideSendWishlist')})}
function wishlistProductsIdsAdd(id){if($.inArray(parseInt(id),wishlistProductsIds)==-1)
wishlistProductsIds.push(id)}
function wishlistProductsIdsRemove(id){wishlistProductsIds.splice($.inArray(parseInt(id),wishlistProductsIds),1)}
function wishlistRefreshStatus(){$('.addToWishlist').each(function(){if($.inArray(parseInt($(this).prop('rel')),wishlistProductsIds)!=-1)
$(this).addClass('checked');else $(this).removeClass('checked')})}
function wishlistProductChange(id_product,id_product_attribute,id_old_wishlist,id_new_wishlist){if(typeof mywishlist_url=='undefined')
return(!1);var quantity=$('#quantity_'+id_product+'_'+id_product_attribute).val();$.ajax({type:'GET',url:mywishlist_url,headers:{"cache-control":"no-cache"},async:!0,cache:!1,dataType:"json",data:{id_product:id_product,id_product_attribute:id_product_attribute,quantity:quantity,priority:$('#priority_'+id_product+'_'+id_product_attribute).val(),id_old_wishlist:id_old_wishlist,id_new_wishlist:id_new_wishlist,myajax:1,action:'productchangewishlist'},success:function(data){if(data.success==!0){$('#wlp_'+id_product+'_'+id_product_attribute).fadeOut('slow');$('#wishlist_'+id_old_wishlist+' td:nth-child(2)').text($('#wishlist_'+id_old_wishlist+' td:nth-child(2)').text()-quantity);$('#wishlist_'+id_new_wishlist+' td:nth-child(2)').text(+$('#wishlist_'+id_new_wishlist+' td:nth-child(2)').text()+ +quantity)}else{if(!!$.prototype.fancybox)
$.fancybox.open([{type:'inline',autoScale:!0,minHeight:30,content:'<p class="fancybox-error">'+data.error+'</p>'}],{padding:0})}}})};/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($,window,document,undefined){var drag,state,e;/**
	 * Template for status information about drag and touch events.
	 * @private
	 */
	drag = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	};

	/**
	 * Template for some status informations.
	 * @private
	 */
	state = {
		isTouch: false,
		isScrolling: false,
		isSwiping: false,
		direction: false,
		inMotion: false
	};

	/**
	 * Event functions references.
	 * @private
	 */
	e = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	};

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Caches informations about drag and touch events.
		 */
		this.drag = $.extend({}, drag);

		/**
		 * Caches some status informations.
		 * @protected
		 */
		this.state = $.extend({}, state);

		/**
		 * @protected
		 * @todo Must be documented
		 */
		this.e = $.extend({}, e);

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key[0].toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Pipe, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		responsiveClass: false,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		// Classes and Names
		themeClass: 'owl-theme',
		baseClass: 'owl-carousel',
		itemClass: 'owl-item',
		centerClass: 'center',
		activeClass: 'active'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * Update pipe.
	 */
	Owl.Pipe = [ {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var cached = this._clones,
				clones = this.$stage.children('.cloned');

			if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
				this.$stage.children('.cloned').remove();
				this._clones = [];
			}
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var i, n,
				clones = this._clones,
				items = this._items,
				delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;

			for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
				if (delta > 0) {
					this.$stage.children().eq(items.length + clones.length - 1).remove();
					clones.pop();
					this.$stage.children().eq(0).remove();
					clones.pop();
				} else {
					clones.push(clones.length / 2);
					this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
					clones.push(items.length - 1 - (clones.length - 1) / 2);
					this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
				}
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = (this.settings.rtl ? 1 : -1),
				width = (this.width() / this.settings.items).toFixed(3),
				coordinate = 0, merge, i, n;

			this._coordinates = [];
			for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
				merge = this._mergers[this.relative(i)];
				merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
				coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;

				this._coordinates.push(coordinate);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
				'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
				'padding-left': this.settings.stagePadding || '',
				'padding-right': this.settings.stagePadding || ''
			};

			this.$stage.css(css);

			css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
			css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;

			if (!this.settings.autoWidth && $.grep(this._mergers, function(v) { return v > 1 }).length > 0) {
				for (i = 0, n = this._coordinates.length; i < n; i++) {
					css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
					this.$stage.children().eq(i).css(css);
				}
			} else {
				this.$stage.children().css(css);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current && this.reset(this.$stage.children().index(cache.current));
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);

			if (this.settings.center) {
				this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
				this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.trigger('initialize');

		this.$element
			.addClass(this.settings.baseClass)
			.addClass(this.settings.themeClass)
			.toggleClass('owl-rtl', this.settings.rtl);

		// check support
		this.browserSupport();

		if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
				return false;
			}
		}

		this.$element.addClass('owl-loading');

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>')
			.wrap('<div class="owl-stage-outer">');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// set view width
		this._width = this.$element.width();

		// update view
		this.refresh();

		this.$element.removeClass('owl-loading').addClass('owl-loaded');

		// attach generic events
		this.eventsCall();

		// attach generic events
		this.internalEvents();

		// attach custom control events
		this.addTriggerableEvents();

		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class', function(i, c) {
					return c.replace(/\b owl-responsive-\S+/g, '');
				}).addClass('owl-responsive-' + match);
			}
		}

		if (this.settings === null || this._breakpoint !== match) {
			this.trigger('change', { property: { name: 'settings', value: settings } });
			this._breakpoint = match;
			this.settings = settings;
			this.invalidate('settings');
			this.trigger('changed', { property: { name: 'settings', value: this.settings } });
		}
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		// Toggle Center class
		this.$element.toggleClass('owl-center', this.settings.center);

		// if items number is less than in body
		if (this.settings.loop && this._items.length < this.settings.items) {
			this.settings.loop = false;
		}

		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.settings.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		if (this._items.length === 0) {
			return false;
		}

		var start = new Date().getTime();

		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		// hide and show methods helps here to set a proper widths,
		// this prevents scrollbar to be calculated in stage width
		this.$stage.addClass('owl-refresh');

		this.update();

		this.$stage.removeClass('owl-refresh');

		this.state.orientation = window.orientation;

		this.watchVisibility();

		this.trigger('refreshed');
	};

	/**
	 * Save internal event references and add event based functions.
	 * @protected
	 */
	Owl.prototype.eventsCall = function() {
		// Save events references
		this.e._onDragStart = $.proxy(function(e) {
			this.onDragStart(e);
		}, this);
		this.e._onDragMove = $.proxy(function(e) {
			this.onDragMove(e);
		}, this);
		this.e._onDragEnd = $.proxy(function(e) {
			this.onDragEnd(e);
		}, this);
		this.e._onResize = $.proxy(function(e) {
			this.onResize(e);
		}, this);
		this.e._transitionEnd = $.proxy(function(e) {
			this.transitionEnd(e);
		}, this);
		this.e._preventClick = $.proxy(function(e) {
			this.preventClick(e);
		}, this);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (this.trigger('resize').isDefaultPrevented()) {
			return false;
		}

		this._width = this.$element.width();

		this.invalidate('width');

		this.refresh();

		this.trigger('resized');
	};

	/**
	 * Checks for touch/mouse drag event type and add run event handlers.
	 * @protected
	 */
	Owl.prototype.eventsRouter = function(event) {
		var type = event.type;

		if (type === "mousedown" || type === "touchstart") {
			this.onDragStart(event);
		} else if (type === "mousemove" || type === "touchmove") {
			this.onDragMove(event);
		} else if (type === "mouseup" || type === "touchend") {
			this.onDragEnd(event);
		} else if (type === "touchcancel") {
			this.onDragEnd(event);
		}
	};

	/**
	 * Checks for touch/mouse drag options and add necessery event handlers.
	 * @protected
	 */
	Owl.prototype.internalEvents = function() {
		var isTouch = isTouchSupport(),
			isTouchIE = isTouchSupportIE();

		if (this.settings.mouseDrag){
			this.$stage.on('mousedown', $.proxy(function(event) { this.eventsRouter(event) }, this));
			this.$stage.on('dragstart', function() { return false });
			this.$stage.get(0).onselectstart = function() { return false };
		} else {
			this.$element.addClass('owl-text-select-on');
		}

		if (this.settings.touchDrag && !isTouchIE){
			this.$stage.on('touchstart touchcancel', $.proxy(function(event) { this.eventsRouter(event) }, this));
		}

		// catch transitionEnd event
		if (this.transitionEndVendor) {
			this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
		}

		// responsive
		if (this.settings.responsive !== false) {
			this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
		}
	};

	/**
	 * Handles touchstart/mousedown event.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var ev, isTouchEvent, pageX, pageY, animatedPos;

		ev = event.originalEvent || event || window.event;

		// prevent right click
		if (ev.which === 3 || this.state.isTouch) {
			return false;
		}

		if (ev.type === 'mousedown') {
			this.$stage.addClass('owl-grab');
		}

		this.trigger('drag');
		this.drag.startTime = new Date().getTime();
		this.speed(0);
		this.state.isTouch = true;
		this.state.isScrolling = false;
		this.state.isSwiping = false;
		this.drag.distance = 0;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// get stage position left
		this.drag.offsetX = this.$stage.position().left;
		this.drag.offsetY = this.$stage.position().top;

		if (this.settings.rtl) {
			this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
				+ this.settings.margin;
		}

		// catch position // ie to fix
		if (this.state.inMotion && this.support3d) {
			animatedPos = this.getTransformProperty();
			this.drag.offsetX = animatedPos;
			this.animate(animatedPos);
			this.state.inMotion = true;
		} else if (this.state.inMotion && !this.support3d) {
			this.state.inMotion = false;
			return false;
		}

		this.drag.startX = pageX - this.drag.offsetX;
		this.drag.startY = pageY - this.drag.offsetY;

		this.drag.start = pageX - this.drag.startX;
		this.drag.targetEl = ev.target || ev.srcElement;
		this.drag.updatedX = this.drag.start;

		// to do/check
		// prevent links and images dragging;
		if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
			this.drag.targetEl.draggable = false;
		}

		$(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {this.eventsRouter(event)},this));
	};

	/**
	 * Handles the touchmove/mousemove events.
	 * @todo Simplify
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;

		if (!this.state.isTouch) {
			return;
		}

		if (this.state.isScrolling) {
			return;
		}

		ev = event.originalEvent || event || window.event;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// Drag Direction
		this.drag.currentX = pageX - this.drag.startX;
		this.drag.currentY = pageY - this.drag.startY;
		this.drag.distance = this.drag.currentX - this.drag.offsetX;

		// Check move direction
		if (this.drag.distance < 0) {
			this.state.direction = this.settings.rtl ? 'right' : 'left';
		} else if (this.drag.distance > 0) {
			this.state.direction = this.settings.rtl ? 'left' : 'right';
		}
		// Loop
		if (this.settings.loop) {
			if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
				this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			} else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
				this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			}
		} else {
			// pull
			minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
			this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
		}

		// Lock browser if swiping horizontal

		if ((this.drag.distance > 8 || this.drag.distance < -8)) {
			if (ev.preventDefault !== undefined) {
				ev.preventDefault();
			} else {
				ev.returnValue = false;
			}
			this.state.isSwiping = true;
		}

		this.drag.updatedX = this.drag.currentX;

		// Lock Owl if scrolling
		if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
			this.state.isScrolling = true;
			this.drag.updatedX = this.drag.start;
		}

		this.animate(this.drag.updatedX);
	};

	/**
	 * Handles the touchend/mouseup events.
	 * @protected
	 */
	Owl.prototype.onDragEnd = function(event) {
		var compareTimes, distanceAbs, closest;

		if (!this.state.isTouch) {
			return;
		}

		if (event.type === 'mouseup') {
			this.$stage.removeClass('owl-grab');
		}

		this.trigger('dragged');

		// prevent links and images dragging;
		this.drag.targetEl.removeAttribute("draggable");

		// remove drag event listeners

		this.state.isTouch = false;
		this.state.isScrolling = false;
		this.state.isSwiping = false;

		// to check
		if (this.drag.distance === 0 && this.state.inMotion !== true) {
			this.state.inMotion = false;
			return false;
		}

		// prevent clicks while scrolling

		this.drag.endTime = new Date().getTime();
		compareTimes = this.drag.endTime - this.drag.startTime;
		distanceAbs = Math.abs(this.drag.distance);

		// to test
		if (distanceAbs > 3 || compareTimes > 300) {
			this.removeClick(this.drag.targetEl);
		}

		closest = this.closest(this.drag.updatedX);

		this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
		this.current(closest);
		this.invalidate('position');
		this.update();

		// if pullDrag is off then fire transitionEnd event manually when stick
		// to border
		if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
			this.transitionEnd();
		}

		this.drag.distance = 0;

		$(document).off('.owl.dragEvents');
	};

	/**
	 * Attaches `preventClick` to disable link while swipping.
	 * @protected
	 * @param {HTMLElement} [target] - The target of the `click` event.
	 */
	Owl.prototype.removeClick = function(target) {
		this.drag.targetEl = target;
		$(target).on('click.preventClick', this.e._preventClick);
		// to make sure click is removed:
		window.setTimeout(function() {
			$(target).off('click.preventClick');
		}, 300);
	};

	/**
	 * Suppresses click event.
	 * @protected
	 * @param {Event} ev - The event arguments.
	 */
	Owl.prototype.preventClick = function(ev) {
		if (ev.preventDefault) {
			ev.preventDefault();
		} else {
			ev.returnValue = false;
		}
		if (ev.stopPropagation) {
			ev.stopPropagation();
		}
		$(ev.target).off('click.preventClick');
	};

	/**
	 * Catches stage position while animate (only CSS3).
	 * @protected
	 * @returns
	 */
	Owl.prototype.getTransformProperty = function() {
		var transform, matrix3d;

		transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
		// var transform = this.$stage.css(this.vendorName + 'transform')
		transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
		matrix3d = transform.length === 16;

		return matrix3d !== true ? transform[4] : transform[12];
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate) {
		var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				if (coordinate > value - pull && coordinate < value + pull) {
					position = index;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = this.state.direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		this.trigger('translate');
		this.state.inMotion = this.speed() > 0;

		if (this.support3d) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (this.state.isTouch) {
			this.$stage.css({
				left: coordinate + 'px'
			});
		} else {
			this.$stage.animate({
				left: coordinate
			}, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {
				if (this.state.inMotion) {
					this.transitionEnd();
				}
			}, this));
		}
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} part - The part to invalidate.
	 */
	Owl.prototype.invalidate = function(part) {
		this._invalidated[part] = true;
	}

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position for an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = (relative ? this._items.length : this._items.length + this._clones.length);

		if (!$.isNumeric(position) || n < 1) {
			return undefined;
		}

		if (this._clones.length) {
			position = ((position % n) + n) % n;
		} else {
			position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
		}

		return position;
	};

	/**
	 * Converts an absolute position for an item into a relative position.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position = this.normalize(position);
		position = position - this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var maximum, width, i = 0, coordinate,
			settings = this.settings;

		if (relative) {
			return this._items.length - 1;
		}

		if (!settings.loop && settings.center) {
			maximum = this._items.length - 1;
		} else if (!settings.loop && !settings.center) {
			maximum = this._items.length - settings.items;
		} else if (settings.loop || settings.center) {
			maximum = this._items.length + settings.items;
		} else if (settings.autoWidth || settings.merge) {
			revert = settings.rtl ? 1 : -1;
			width = this.$stage.width() - this.$element.width();
			while (coordinate = this.coordinates(i)) {
				if (coordinate * revert >= width) {
					break;
				}
				maximum = ++i;
			}
		} else {
			throw 'Can not detect maximum absolute position.'
		}

		return maximum;
	};

	/**
	 * Gets the minimum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		if (relative) {
			return 0;
		}

		return this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var coordinate = null;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
		} else {
			coordinate = this._coordinates[position - 1] || 0;
		}

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		if (this.settings.loop) {
			var distance = position - this.relative(this.current()),
				revert = this.current(),
				before = this.current(),
				after = this.current() + distance,
				direction = before - after < 0 ? true : false,
				items = this._clones.length + this._items.length;

			if (after < this.settings.items && direction === false) {
				revert = before + this._items.length;
				this.reset(revert);
			} else if (after >= items - this.settings.items && direction === true) {
				revert = before - this._items.length;
				this.reset(revert);
			}
			window.clearTimeout(this.e._goToLoop);
			this.e._goToLoop = window.setTimeout($.proxy(function() {
				this.speed(this.duration(this.current(), revert + distance, speed));
				this.current(revert + distance);
				this.update();
			}, this), 30);
		} else {
			this.speed(this.duration(this.current(), position, speed));
			this.current(position);
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.transitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.state.inMotion = false;
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		position = position === undefined ? this._items.length : this.normalize(position, true);

		this.trigger('add', { content: content, position: position });

		if (this._items.length === 0 || position === this._items.length) {
			this.$stage.append(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Adds triggerable events.
	 * @protected
	 */
	Owl.prototype.addTriggerableEvents = function() {
		var handler = $.proxy(function(callback, event) {
			return $.proxy(function(e) {
				if (e.relatedTarget !== this) {
					this.suppress([ event ]);
					callback.apply(this, [].slice.call(arguments, 1));
					this.release([ event ]);
				}
			}, this);
		}, this);

		$.each({
			'next': this.next,
			'prev': this.prev,
			'to': this.to,
			'destroy': this.destroy,
			'refresh': this.refresh,
			'replace': this.replace,
			'add': this.add,
			'remove': this.remove
		}, $.proxy(function(event, callback) {
			this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
		}, this));

	};

	/**
	 * Watches the visibility of the carousel element.
	 * @protected
	 */
	Owl.prototype.watchVisibility = function() {

		// test on zepto
		if (!isElVisible(this.$element.get(0))) {
			this.$element.addClass('owl-hidden');
			window.clearInterval(this.e._checkVisibile);
			this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
		}

		function isElVisible(el) {
			return el.offsetWidth > 0 && el.offsetHeight > 0;
		}

		function checkVisible() {
			if (isElVisible(this.$element.get(0))) {
				this.$element.removeClass('owl-hidden');
				this.refresh();
				window.clearInterval(this.e._checkVisibile);
			}
		}
	};

	/**
	 * Preloads images with auto width.
	 * @protected
	 * @todo Still to test
	 */
	Owl.prototype.preloadAutoWidthImages = function(imgs) {
		var loaded, that, $el, img;

		loaded = 0;
		that = this;
		imgs.each(function(i, el) {
			$el = $(el);
			img = new Image();

			img.onload = function() {
				loaded++;
				$el.attr('src', img.src);
				$el.css('opacity', 1);
				if (loaded >= imgs.length) {
					that.state.imagesLoaded = true;
					that.initialize();
				}
			};

			img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
		});
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		if (this.$element.hasClass(this.settings.themeClass)) {
			this.$element.removeClass(this.settings.themeClass);
		}

		if (this.settings.responsive !== false) {
			$(window).off('resize.owl.carousel');
		}

		if (this.transitionEndVendor) {
			this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		}

		for ( var i in this._plugins) {
			this._plugins[i].destroy();
		}

		if (this.settings.mouseDrag || this.settings.touchDrag) {
			this.$stage.off('mousedown touchstart touchcancel');
			$(document).off('.owl.dragEvents');
			this.$stage.get(0).onselectstart = function() {};
			this.$stage.off('dragstart', function() { return false });
		}

		// remove event handlers in the ".owl.carousel" namespace
		this.$element.off('.owl');

		this.$stage.children('.cloned').remove();
		this.e = null;
		this.$element.removeData('owlCarousel');

		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.unwrap();
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers an public event.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=.owl.carousel] - The event namespace.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].apply(this, event);
			}
		}

		return event;
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	}

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	}

	/**
	 * Checks the availability of some browser features.
	 * @protected
	 */
	Owl.prototype.browserSupport = function() {
		this.support3d = isPerspective();

		if (this.support3d) {
			this.transformVendor = isTransform();

			// take transitionend event name by detecting transition
			var endVendors = [ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
			this.transitionEndVendor = endVendors[isTransition()];

			// take vendor name from transform name
			this.vendorName = this.transformVendor.replace(/Transform/i, '');
			this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
		}

		this.state.orientation = window.orientation;
	};

	/**
	 * Get touch/drag coordinats.
	 * @private
	 * @param {event} - mousedown/touchstart event
	 * @returns {object} - Contains X and Y of current mouse/touch position
	 */

	function getTouches(event) {
		if (event.touches !== undefined) {
			return {
				x: event.touches[0].pageX,
				y: event.touches[0].pageY
			};
		}

		if (event.touches === undefined) {
			if (event.pageX !== undefined) {
				return {
					x: event.pageX,
					y: event.pageY
				};
			}

		if (event.pageX === undefined) {
			return {
					x: event.clientX,
					y: event.clientY
				};
			}
		}
	}

	/**
	 * Checks for CSS support.
	 * @private
	 * @param {Array} array - The CSS properties to check for.
	 * @returns {Array} - Contains the supported CSS property name and its index or `false`.
	 */
	function isStyleSupported(array) {
		var p, s, fake = document.createElement('div'), list = array;
		for (p in list) {
			s = list[p];
			if (typeof fake.style[s] !== 'undefined') {
				fake = null;
				return [ s, p ];
			}
		}
		return [ false ];
	}

	/**
	 * Checks for CSS transition support.
	 * @private
	 * @todo Realy bad design
	 * @returns {Number}
	 */
	function isTransition() {
		return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
	}

	/**
	 * Checks for CSS transform support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isTransform() {
		return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
	}

	/**
	 * Checks for CSS perspective support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isPerspective() {
		return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
	}

	/**
	 * Checks wether touch is supported or not.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupport() {
		return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
	}

	/**
	 * Checks wether touch is supported or not for IE.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupportIE() {
		return window.navigator.msPointerEnabled;
	}

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @public
	 */
	$.fn.owlCarousel = function(options) {
		return this.each(function() {
			if (!$(this).data('owlCarousel')) {
				$(this).data('owlCarousel', new Owl(this, options));
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = ((e.property && e.property.value) || this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position++)), load);
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	}

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
					=== this._core.$stage.children().eq(this._core.current())) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		this._core.$stage.parent()
			.height(this._core.$stage.children().eq(this._core.current()).height())
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * Whether this is in fullscreen or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._fullscreen = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'resize.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.video && !this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refresh.owl.carousel changed.owl.carousel': $.proxy(function(e) {
				if (this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var $element = $(e.content).find('.owl-video');
				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {

		var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
			id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
			width = target.attr('data-width') || this._core.settings.videoWidth,
			height = target.attr('data-height') || this._core.settings.videoHeight,
			url = target.attr('href');

		if (url) {
			id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {

		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} ev - The event arguments.
	 */
	Video.prototype.play = function(ev) {
		this._core.trigger('play', null, 'video');

		if (this._playing) {
			this.stop();
		}

		var target = $(ev.target || ev.srcElement),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html, wrap;

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
				+ video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
				+ '" height="' + height
				+ '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		}

		item.addClass('owl-video-playing');
		this._playing = item;

		wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
			+ html + '</div>');
		target.after(wrap);
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {

		// if Vimeo Fullscreen mode
		var element = document.fullscreenElement || document.mozFullScreenElement
			|| document.webkitFullscreenElement;

		if (element && $(element).parent().hasClass('owl-video-frame')) {
			this._core.speed(0);
			this._fullscreen = true;
		}

		if (element && this._fullscreen && this._playing) {
			return false;
		}

		// comming back from fullscreen
		if (this._fullscreen) {
			this._fullscreen = false;
			return false;
		}

		// check full screen mode and window orientation
		if (this._playing) {
			if (this._core.state.orientation !== window.orientation) {
				this._core.state.orientation = window.orientation;
				return false;
			}
		}

		return true;
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				this.swapping = e.type == 'translated';
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1 || !this.core.support3d) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}

		if (incoming) {
			next.addClass('animated owl-animated-in')
				.addClass(incoming)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.transitionEnd();
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);

		this.handlers = {
			'translated.owl.carousel refreshed.owl.carousel': $.proxy(function() {
				this.autoplay();
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				this.play(t, s);
			}, this),
			'stop.owl.autoplay': $.proxy(function() {
				this.stop();
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.autoplay();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * @protected
	 * @todo Must be documented.
	 */
	Autoplay.prototype.autoplay = function() {
		if (this.core.settings.autoplay && !this.core.state.videoPlay) {
			window.clearInterval(this.interval);

			this.interval = window.setInterval($.proxy(function() {
				this.play();
			}, this), this.core.settings.autoplayTimeout);
		} else {
			window.clearInterval(this.interval);
		}
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - ...
	 * @param {Number} [speed] - ...
	 * @returns {Boolean|undefined} - ...
	 * @todo Must be documented.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		// if tab is inactive - doesnt work in <IE10
		if (document.hidden === true) {
			return;
		}

		if (this.core.state.isTouch || this.core.state.isScrolling
			|| this.core.state.isSwiping || this.core.state.inMotion) {
			return;
		}

		if (this.core.settings.autoplay === false) {
			window.clearInterval(this.interval);
			return;
		}

		this.core.next(this.core.settings.autoplaySpeed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this.interval);

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){'use strict';/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'add.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'remove.owl.carousel prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
						var current = this._core.current(),
							maximum = this._core.maximum(),
							minimum = this._core.minimum();
						e.data = e.property.value > maximum
							? current >= maximum ? minimum : maximum
							: e.property.value < minimum ? maximum : e.property.value;
					}
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function() {
				if (!this._initialized) {
					this.initialize();
					this._initialized = true;
				}
				this._core.trigger('refresh', null, 'navigation');
				this.update();
				this.draw();
				this._core.trigger('refreshed', null, 'navigation');
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navRewind: true,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotData: false,
		dotsSpeed: false,
		dotsContainer: false,
		controlsClass: 'owl-controls'
	}

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var $container, override,
			options = this._core.settings;

		// create the indicator template
		if (!options.dotsData) {
			this._templates = [ $('<div>')
				.addClass(options.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		// create controls container if needed
		if (!options.navContainer || !options.dotsContainer) {
			this._controls.$container = $('<div>')
				.addClass(options.controlsClass)
				.appendTo(this.$element);
		}

		// create DOM structure for absolute navigation
		this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
			: $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);

		this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$indicators)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, options.dotsSpeed);
		}, this));

		// create DOM structure for relative navigation
		$container = options.navContainer ? $(options.navContainer)
			: $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);

		this._controls.$next = $('<' + options.navElement + '>');
		this._controls.$previous = this._controls.$next.clone();

		this._controls.$previous
			.addClass(options.navClass[0])
			.html(options.navText[0])
			.hide()
			.prependTo($container)
			.on('click', $.proxy(function(e) {
				this.prev(options.navSpeed);
			}, this));
		this._controls.$next
			.addClass(options.navClass[1])
			.html(options.navText[1])
			.hide()
			.appendTo($container)
			.on('click', $.proxy(function(e) {
				this.next(options.navSpeed);
			}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	}

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			options = this._core.settings,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			size = options.center || options.autoWidth || options.dotData
				? 1 : options.dotsEach || options.items;

		if (options.slideBy !== 'page') {
			options.slideBy = Math.min(options.slideBy, options.items);
		}

		if (options.dots || options.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: i - lower,
						end: i - lower + size - 1
					});
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	}

	/**
	 * Draws the user interface.
	 * @todo The option `dotData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference, i, html = '',
			options = this._core.settings,
			$items = this._core.$stage.children(),
			index = this._core.relative(this._core.current());

		if (options.nav && !options.loop && !options.navRewind) {
			this._controls.$previous.toggleClass('disabled', index <= 0);
			this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
		}

		this._controls.$previous.toggle(options.nav);
		this._controls.$next.toggle(options.nav);

		if (options.dots) {
			difference = this._pages.length - this._controls.$indicators.children().length;

			if (options.dotData && difference !== 0) {
				for (i = 0; i < this._controls.$indicators.children().length; i++) {
					html += this._templates[this._core.relative(i)];
				}
				this._controls.$indicators.html(html);
			} else if (difference > 0) {
				html = new Array(difference + 1).join(this._templates[0]);
				this._controls.$indicators.append(html);
			} else if (difference < 0) {
				this._controls.$indicators.children().slice(difference).remove();
			}

			this._controls.$indicators.find('.active').removeClass('active');
			this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}

		this._controls.$indicators.toggle(options.dots);
	}

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotData
				? 1 : settings.dotsEach || settings.items)
		};
	}

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var index = this._core.relative(this._core.current());
		return $.grep(this._pages, function(o) {
			return o.start <= index && o.end >= index;
		}).pop();
	}

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			options = this._core.settings;

		if (options.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += options.slideBy : position -= options.slideBy;
		}
		return position;
	}

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	}

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	}

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){'use strict';var Hash=function(carousel){this._core=carousel;this._hashes={};this.$element=this._core.$element;this._handlers={'initialized.owl.carousel':$.proxy(function(){if(this._core.settings.startPosition=='URLHash'){$(window).trigger('hashchange.owl.navigation')}},this),'prepared.owl.carousel':$.proxy(function(e){var hash=$(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');this._hashes[hash]=e.content},this)};this._core.options=$.extend({},Hash.Defaults,this._core.options);this.$element.on(this._handlers);$(window).on('hashchange.owl.navigation',$.proxy(function(){var hash=window.location.hash.substring(1),items=this._core.$stage.children(),position=this._hashes[hash]&&items.index(this._hashes[hash])||0;if(!hash){return!1}
this._core.to(position,!1,!0)},this))}
Hash.Defaults={URLhashListener:!1}
Hash.prototype.destroy=function(){var handler,property;$(window).off('hashchange.owl.navigation');for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler])}
for(property in Object.getOwnPropertyNames(this)){typeof this[property]!='function'&&(this[property]=null)}}
$.fn.owlCarousel.Constructor.Plugins.Hash=Hash})(window.Zepto||window.jQuery,window,document);/*
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
(function(e){function t(){var e=location.href;hashtag=e.indexOf("#prettyPhoto")!==-1?decodeURI(e.substring(e.indexOf("#prettyPhoto")+1,e.length)):!1;return hashtag}function n(){if(typeof theRel=="undefined")return;location.hash=theRel+"/"+rel_index+"/"}function r(){if(location.href.indexOf("#prettyPhoto")!==-1)location.hash="prettyPhoto"}function i(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n="[\\?&]"+e+"=([^&#]*)";var r=new RegExp(n);var i=r.exec(t);return i==null?"":i[1]}e.prettyPhoto={version:"3.1.5"};e.fn.prettyPhoto=function(s){function g(){e(".pp_loaderIcon").hide();projectedTop=scroll_pos.scrollTop+(d/2-a.containerHeight/2);if(projectedTop<0)projectedTop=0;$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find(".pp_content").animate({height:a.contentHeight,width:a.contentWidth},settings.animation_speed);$pp_pic_holder.animate({top:projectedTop,left:v/2-a.containerWidth/2<0?0:v/2-a.containerWidth/2,width:a.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(a.height).width(a.width);$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);if(isSet&&S(pp_images[set_position])=="image"){$pp_pic_holder.find(".pp_hoverContainer").show()}else{$pp_pic_holder.find(".pp_hoverContainer").hide()}if(settings.allow_expand){if(a.resized){e("a.pp_expand,a.pp_contract").show()}else{e("a.pp_expand").hide()}}if(settings.autoplay_slideshow&&!m&&!f)e.prettyPhoto.startSlideshow();settings.changepicturecallback();f=!0});C();s.ajaxcallback()}function y(t){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden");$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){e(".pp_loaderIcon").show();t()})}function b(t){t>1?e(".pp_nav").show():e(".pp_nav").hide()}function w(e,t){resized=!1;E(e,t);imageWidth=e,imageHeight=t;if((p>v||h>d)&&doresize&&settings.allow_resize&&!u){resized=!0,fitting=!1;while(!fitting){if(p>v){imageWidth=v-200;imageHeight=t/e*imageWidth}else if(h>d){imageHeight=d-200;imageWidth=e/t*imageHeight}else{fitting=!0}h=imageHeight,p=imageWidth}if(p>v||h>d){w(p,h)}E(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(h),containerWidth:Math.floor(p)+settings.horizontal_padding*2,contentHeight:Math.floor(l),contentWidth:Math.floor(c),resized:resized}}function E(t,n){t=parseFloat(t);n=parseFloat(n);$pp_details=$pp_pic_holder.find(".pp_details");$pp_details.width(t);detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom"));$pp_details=$pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({position:"absolute",top:-1e4});detailsHeight+=$pp_details.height();detailsHeight=detailsHeight<=34?36:detailsHeight;$pp_details.remove();$pp_title=$pp_pic_holder.find(".ppt");$pp_title.width(t);titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom"));$pp_title=$pp_title.clone().appendTo(e("body")).css({position:"absolute",top:-1e4});titleHeight+=$pp_title.height();$pp_title.remove();l=n+detailsHeight;c=t;h=l+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height();p=t}function S(e){if(e.match(/youtube\.com\/watch/i)||e.match(/youtu\.be/i)){return"youtube"}else if(e.match(/vimeo\.com/i)){return"vimeo"}else if(e.match(/\b.mov\b/i)){return"quicktime"}else if(e.match(/\b.swf\b/i)){return"flash"}else if(e.match(/\biframe=true\b/i)){return"iframe"}else if(e.match(/\bajax=true\b/i)){return"ajax"}else if(e.match(/\bcustom=true\b/i)){return"custom"}else if(e.substr(0,1)=="#"){return"inline"}else{return"image"}}function x(){if(doresize&&typeof $pp_pic_holder!="undefined"){scroll_pos=T();contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width();projectedTop=d/2+scroll_pos.scrollTop-contentHeight/2;if(projectedTop<0)projectedTop=0;if(contentHeight>d)return;$pp_pic_holder.css({top:projectedTop,left:v/2+scroll_pos.scrollLeft-contentwidth/2})}}function T(){if(self.pageYOffset){return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}}else if(document.documentElement&&document.documentElement.scrollTop){return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}}else if(document.body){return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}}}function N(){d=e(window).height(),v=e(window).width();if(typeof $pp_overlay!="undefined")$pp_overlay.height(e(document).height()).width(v)}function C(){if(isSet&&settings.overlay_gallery&&S(pp_images[set_position])=="image"){itemWidth=52+5;navWidth=settings.theme=="facebook"||settings.theme=="pp_default"?50:30;itemsPerPage=Math.floor((a.containerWidth-100-navWidth)/itemWidth);itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length;totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;if(totalPage==0){navWidth=0;$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()}else{$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show()}galleryWidth=itemsPerPage*itemWidth;fullGalleryWidth=pp_images.length*itemWidth;$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected");goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage;e.prettyPhoto.changeGalleryPage(goToPage);$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")}else{$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")}}function k(t){if(settings.social_tools)facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href));settings.markup=settings.markup.replace("{pp_social}","");e("body").append(settings.markup);$pp_pic_holder=e(".pp_pic_holder"),$ppt=e(".ppt"),$pp_overlay=e("div.pp_overlay");if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(var n=0;n<pp_images.length;n++){if(!pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi)){classname="default";img_src=""}else{classname="";img_src=pp_images[n]}toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>"}toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find("#pp_full_res").after(toInject);$pp_gallery=e(".pp_pic_holder .pp_gallery"),$pp_gallery_li=$pp_gallery.find("li");$pp_gallery.find(".pp_arrow_next").click(function(){e.prettyPhoto.changeGalleryPage("next");e.prettyPhoto.stopSlideshow();return!1});$pp_gallery.find(".pp_arrow_previous").click(function(){e.prettyPhoto.changeGalleryPage("previous");e.prettyPhoto.stopSlideshow();return!1});$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()});itemWidth=52+5;$pp_gallery_li.each(function(t){e(this).find("a").click(function(){e.prettyPhoto.changePage(t);e.prettyPhoto.stopSlideshow();return!1})})}if(settings.slideshow){$pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');$pp_pic_holder.find(".pp_nav .pp_play").click(function(){e.prettyPhoto.startSlideshow();return!1})}$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme);$pp_overlay.css({opacity:0,height:e(document).height(),width:e(window).width()}).bind("click",function(){if(!settings.modal)e.prettyPhoto.close()});e("a.pp_close").bind("click",function(){e.prettyPhoto.close();return!1});if(settings.allow_expand){e("a.pp_expand").bind("click",function(t){if(e(this).hasClass("pp_expand")){e(this).removeClass("pp_expand").addClass("pp_contract");doresize=!1}else{e(this).removeClass("pp_contract").addClass("pp_expand");doresize=!0}y(function(){e.prettyPhoto.open()});return!1})}$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){e.prettyPhoto.changePage("previous");e.prettyPhoto.stopSlideshow();return!1});$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){e.prettyPhoto.changePage("next");e.prettyPhoto.stopSlideshow();return!1});x()}s=jQuery.extend({hook:"rel",animation_speed:"fast",ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:!1,opacity:.8,show_title:!0,allow_resize:!0,allow_expand:!0,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:!1,wmode:"opaque",autoplay:!0,modal:!1,deeplinking:!0,overlay_gallery:!0,overlay_gallery_max:30,keyboard_shortcuts:!0,changepicturecallback:function(){},callback:function(){},ie6_fallback:!0,markup:'<div class="pp_pic_holder"> 						<div class="ppt"> </div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},s);var o=this,u=!1,a,f,l,c,h,p,d=e(window).height(),v=e(window).width(),m;doresize=!0,scroll_pos=T();e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){x();N()});if(s.keyboard_shortcuts){e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(t){if(typeof $pp_pic_holder!="undefined"){if($pp_pic_holder.is(":visible")){switch(t.keyCode){case 37:e.prettyPhoto.changePage("previous");t.preventDefault();break;case 39:e.prettyPhoto.changePage("next");t.preventDefault();break;case 27:if(!settings.modal)e.prettyPhoto.close();t.preventDefault();break}}}})}e.prettyPhoto.initialize=function(){settings=s;if(settings.theme=="pp_default")settings.horizontal_padding=16;theRel=e(this).attr(settings.hook);galleryRegExp=/\[(?:.*)\]/;isSet=galleryRegExp.exec(theRel)?true:!1;pp_images=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).attr("href")}):e.makeArray(e(this).attr("href"));pp_titles=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).find("img").attr("alt")?e(t).find("img").attr("alt"):""}):e.makeArray(e(this).find("img").attr("alt"));pp_descriptions=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).attr("title")?e(t).attr("title"):""}):e.makeArray(e(this).attr("title"));if(pp_images.length>settings.overlay_gallery_max)settings.overlay_gallery=!1;set_position=jQuery.inArray(e(this).attr("href"),pp_images);rel_index=isSet?set_position:e("a["+settings.hook+"^='"+theRel+"']").index(e(this));k(this);if(settings.allow_resize)e(window).bind("scroll.prettyphoto",function(){x()});e.prettyPhoto.open();return!1};e.prettyPhoto.open=function(t){if(typeof settings=="undefined"){settings=s;pp_images=e.makeArray(arguments[0]);pp_titles=arguments[1]?e.makeArray(arguments[1]):e.makeArray("");pp_descriptions=arguments[2]?e.makeArray(arguments[2]):e.makeArray("");isSet=pp_images.length>1?true:!1;set_position=arguments[3]?arguments[3]:0;k(t.target)}if(settings.hideflash)e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden");b(e(pp_images).size());e(".pp_loaderIcon").show();if(settings.deeplinking)n();if(settings.social_tools){facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href));$pp_pic_holder.find(".pp_social").html(facebook_like_link)}if($ppt.is(":hidden"))$ppt.css("opacity",0).show();$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+e(pp_images).size());if(typeof pp_descriptions[set_position]!="undefined"&&pp_descriptions[set_position]!=""){$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position]))}else{$pp_pic_holder.find(".pp_description").hide()}movie_width=parseFloat(i("width",pp_images[set_position]))?i("width",pp_images[set_position]):settings.default_width.toString();movie_height=parseFloat(i("height",pp_images[set_position]))?i("height",pp_images[set_position]):settings.default_height.toString();u=!1;if(movie_height.indexOf("%")!=-1){movie_height=parseFloat(e(window).height()*parseFloat(movie_height)/100-150);u=!0}if(movie_width.indexOf("%")!=-1){movie_width=parseFloat(e(window).width()*parseFloat(movie_width)/100-150);u=!0}$pp_pic_holder.fadeIn(function(){settings.show_title&&pp_titles[set_position]!=""&&typeof pp_titles[set_position]!="undefined"?$ppt.html(unescape(pp_titles[set_position])):$ppt.html(" ");imgPreloader="";skipInjection=!1;switch(S(pp_images[set_position])){case"image":imgPreloader=new Image;nextImage=new Image;if(isSet&&set_position<e(pp_images).size()-1)nextImage.src=pp_images[set_position+1];prevImage=new Image;if(isSet&&pp_images[set_position-1])prevImage.src=pp_images[set_position-1];$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]);imgPreloader.onload=function(){a=w(imgPreloader.width,imgPreloader.height);g()};imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist.");e.prettyPhoto.close()};imgPreloader.src=pp_images[set_position];break;case"youtube":a=w(movie_width,movie_height);movie_id=i("v",pp_images[set_position]);if(movie_id==""){movie_id=pp_images[set_position].split("youtu.be/");movie_id=movie_id[1];if(movie_id.indexOf("?")>0)movie_id=movie_id.substr(0,movie_id.indexOf("?"));if(movie_id.indexOf("&")>0)movie_id=movie_id.substr(0,movie_id.indexOf("&"))}movie="http://www.youtube.com/embed/"+movie_id;i("rel",pp_images[set_position])?movie+="?rel="+i("rel",pp_images[set_position]):movie+="?rel=1";if(settings.autoplay)movie+="&autoplay=1";toInject=settings.iframe_markup.replace(/{width}/g,a.width).replace(/{height}/g,a.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":a=w(movie_width,movie_height);movie_id=pp_images[set_position];var t=/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;var n=movie_id.match(t);movie="http://player.vimeo.com/video/"+n[3]+"?title=0&byline=0&portrait=0";if(settings.autoplay)movie+="&autoplay=1;";vimeo_width=a.width+"/embed/?moog_width="+a.width;toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,a.height).replace(/{path}/g,movie);break;case"quicktime":a=w(movie_width,movie_height);a.height+=15;a.contentHeight+=15;a.containerHeight+=15;toInject=settings.quicktime_markup.replace(/{width}/g,a.width).replace(/{height}/g,a.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":a=w(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf("?"));toInject=settings.flash_markup.replace(/{width}/g,a.width).replace(/{height}/g,a.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":a=w(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1);toInject=settings.iframe_markup.replace(/{width}/g,a.width).replace(/{height}/g,a.height).replace(/{path}/g,frame_url);break;case"ajax":doresize=!1;a=w(movie_width,movie_height);doresize=!0;skipInjection=!0;e.get(pp_images[set_position],function(e){toInject=settings.inline_markup.replace(/{content}/g,e);$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;g()});break;case"custom":a=w(movie_width,movie_height);toInject=settings.custom_markup;break;case"inline":myClone=e(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show();doresize=!1;a=w(e(myClone).width(),e(myClone).height());doresize=!0;e(myClone).remove();toInject=settings.inline_markup.replace(/{content}/g,e(pp_images[set_position]).html());break}if(!imgPreloader&&!skipInjection){$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;g()}});return!1};e.prettyPhoto.changePage=function(t){currentGalleryPage=0;if(t=="previous"){set_position--;if(set_position<0)set_position=e(pp_images).size()-1}else if(t=="next"){set_position++;if(set_position>e(pp_images).size()-1)set_position=0}else{set_position=t}rel_index=set_position;if(!doresize)doresize=!0;if(settings.allow_expand){e(".pp_contract").removeClass("pp_contract").addClass("pp_expand")}y(function(){e.prettyPhoto.open()})};e.prettyPhoto.changeGalleryPage=function(e){if(e=="next"){currentGalleryPage++;if(currentGalleryPage>totalPage)currentGalleryPage=0}else if(e=="previous"){currentGalleryPage--;if(currentGalleryPage<0)currentGalleryPage=totalPage}else{currentGalleryPage=e}slide_speed=e=="next"||e=="previous"?settings.animation_speed:0;slide_to=currentGalleryPage*itemsPerPage*itemWidth;$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)};e.prettyPhoto.startSlideshow=function(){if(typeof m=="undefined"){$pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){e.prettyPhoto.stopSlideshow();return!1});m=setInterval(e.prettyPhoto.startSlideshow,settings.slideshow)}else{e.prettyPhoto.changePage("next")}};e.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){e.prettyPhoto.startSlideshow();return!1});clearInterval(m);m=undefined};e.prettyPhoto.close=function(){if($pp_overlay.is(":animated"))return;e.prettyPhoto.stopSlideshow();$pp_pic_holder.stop().find("object,embed").css("visibility","hidden");e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){e(this).remove()});$pp_overlay.fadeOut(settings.animation_speed,function(){if(settings.hideflash)e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible");e(this).remove();e(window).unbind("scroll.prettyphoto");r();settings.callback();doresize=!0;f=!1;delete settings})};if(!pp_alreadyInitialized&&t()){pp_alreadyInitialized=!0;hashIndex=t();hashRel=hashIndex;hashIndex=hashIndex.substring(hashIndex.indexOf("/")+1,hashIndex.length-1);hashRel=hashRel.substring(0,hashRel.indexOf("/"));setTimeout(function(){e("a["+s.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50)}return this.unbind("click.prettyphoto").bind("click.prettyphoto",e.prettyPhoto.initialize)}})(jQuery);var pp_alreadyInitialized=!1;/*
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
$(document).ready(function(){if($('.prettyPhoto').length>0){$("a[class^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:YBC_BLOG_FREE_GALLERY_SKIN,slideshow:YBC_BLOG_FREE_GALLERY_SPEED,autoplay_slideshow:!1,social_tools:'',deeplinking:!1})}
if($('.gallery_block_slider').length>0){$("a[rel^='prettyPhotoBlock']").prettyPhoto({animation_speed:'normal',theme:YBC_BLOG_FREE_GALLERY_SKIN,slideshow:YBC_BLOG_FREE_GALLERY_SPEED,autoplay_slideshow:YBC_BLOG_FREE_GALLERY_AUTO_PLAY,social_tools:'',deeplinking:!1})}
if($('.ybc-gallery .gallery_item').length>0)
$("a[rel^='prettyPhotoGalleryPage']").prettyPhoto({animation_speed:'normal',theme:YBC_BLOG_FREE_GALLERY_SKIN,slideshow:YBC_BLOG_FREE_GALLERY_SPEED,autoplay_slideshow:($('.ybc-gallery .gallery_item').length>1?YBC_BLOG_FREE_GALLERY_AUTO_PLAY:!1),social_tools:'',deeplinking:!1})});/*
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
$(document).ready(function(){$('#ybc-blog-capcha-refesh').click(function(){originalCapcha=$('#ybc-blog-capcha-img').attr('src');originalCode=$('#ybc-blog-capcha-img').attr('rel');newCode=Math.random();$('#ybc-blog-capcha-img').attr('src',originalCapcha.replace(originalCode,newCode));$('#ybc-blog-capcha-img').attr('rel',newCode)});$('.blog_rating_star').click(function(){var rating=parseInt($(this).attr('rel'));$('.blog_rating_star').removeClass('star_on');$('#blog_rating').val(rating);for(i=1;i<=rating;i++){$('.blog_rating_star_'+i).addClass('star_on')}});$('.ybc-block-comment-report').click(function(){if(!confirm(ybc_blog_free_report_warning))
return!1;btnObj=$(this);btnObj.addClass('active');$.ajax({url:ybc_blog_free_report_url,data:{id_comment:btnObj.attr('rel')},dataType:'json',type:'post',success:function(json){if(json.success)
btnObj.remove();else{alert(json.error)}
btnObj.removeClass('active')},error:function(){alert(ybc_blog_free_error);btnObj.removeClass('active')}})});$('.ybc-blog-like-span').click(function(){btnObj=$(this);if(!btnObj.hasClass('active')){$('.ybc-blog-like-span-'+btnObj.attr('data-id-post')).addClass('active');$.ajax({url:ybc_blog_free_like_url,data:{id_post:btnObj.attr('data-id-post')},dataType:'json',type:'post',success:function(json){if(json.success){$('.ben_'+btnObj.attr('data-id-post')).text(json.likes)}else{$('.ybc-blog-like-span-'+btnObj.attr('data-id-post')).removeClass('active');alert(json.error)}},error:function(){$('.ybc-blog-like-span-'+btnObj.attr('data-id-post')).removeClass('active');alert(ybc_like_error)}})}});if($('.page_home.ybc_block_slider ul').length>0)
$('.page_home.ybc_block_slider ul').owlCarousel({items:4,responsive:{0:{items:1},480:{items:2},768:{items:3},992:{items:3},1199:{items:4}},nav:!0,loop:$(".page_home.ybc_block_slider ul li").length>1,rewindNav:!1,margin:30,dots:!1,navText:['',''],callbacks:!0,});if($('.page_home_gallery.ybc_block_slider ul').length>0)
$('.page_home_gallery.ybc_block_slider ul').owlCarousel({items:6,responsive:{0:{items:3},480:{items:4},768:{items:5},992:{items:6}},nav:!0,loop:$(".page_home_gallery.ybc_block_slider ul li").length>1,rewindNav:!1,margin:30,dots:!1,navText:['',''],callbacks:!0,});if($('.page_blog.ybc_block_slider ul').length>0)
$('.page_blog.ybc_block_slider ul').owlCarousel({items:1,nav:!0,loop:$(".page_blog.ybc_block_slider ul li").length>1,rewindNav:!1,dots:!1,margin:30,navText:['',''],callbacks:!0,});if($('.page_blog_gallery.ybc_block_slider ul').length>0)
$('.page_blog_gallery.ybc_block_slider ul').owlCarousel({items:3,nav:!0,loop:$(".page_blog_gallery.ybc_block_slider ul li").length>1,rewindNav:!1,margin:10,dots:!1,navText:['',''],callbacks:!0,});if($('.ybc-blog-related-products-wrapper .ybc_related_products_type_carousel').length>0)
$('.ybc-blog-related-products-wrapper .ybc_related_products_type_carousel').owlCarousel({items:3,responsive:{0:{items:1},370:{items:2},992:{items:3},},nav:!0,navRewind:!1,margin:30,dots:!1,navText:[,],});if($('.ybc_blog_free_related_posts_type_carousel ul').length>0)
$('.ybc_blog_free_related_posts_type_carousel ul').owlCarousel({items:3,responsive:{0:{items:1},370:{items:2},992:{items:3},},nav:!0,navRewind:!1,margin:30,dots:!1,navText:[,],});if($('#ybc_slider').length>0)
$(window).load(function(){$('#ybc_slider').nivoSlider({manualAdvance:!sliderAutoPlay,pauseTime:YBC_BLOG_FREE_SLIDER_SPEED,afterLoad:function(){$('.ybc-blog-slider').removeClass('loading')}})})});/*
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
var etsReviewTicker={setCookie:function(cname,cvalue,exdays){if(!ETS_RT_REMEMEBER)
return;if(ETS_RT_RELATED_ONLY&&$('body').attr('id')=='product'&&$('input[name="id_product"]').length>0&&parseInt($('input[name="id_product"]').val())>0)
cname+='_product_'+parseInt($('input[name="id_product"]').val());var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/"},getCookie:function(cname){if(ETS_RT_RELATED_ONLY&&$('body').attr('id')=='product'&&$('input[name="id_product"]').length>0&&parseInt($('input[name="id_product"]').val())>0)
cname+='_product_'+parseInt($('input[name="id_product"]').val());var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')
c=c.substring(1);if(c.indexOf(name)==0)
return c.substring(name.length,c.length)}
return""},timer:'',run:function(){if(!ETS_RT_REMEMEBER&&etsReviewTicker.getCookie('ets_rt_ids')!='')
etsReviewTicker.setCookie('ets_rt_ids','');ets_rt_restart=ETS_RT_REMEMEBER&&ETS_RT_REPEAT&&!ets_rt_clsed&&etsReviewTicker.getCookie('ets_rt_ids')!=''?!0:!1;setTimeout(function(){$.ajax({url:ETS_RT_URL_AJAX,type:'post',dataType:'json',data:{excludedIds:etsReviewTicker.getCookie('ets_rt_ids'),id_product:ETS_RT_RELATED_ONLY&&$('body').attr('id')=='product'&&$('input[name="id_product"]').length>0&&parseInt($('input[name="id_product"]').val())>0?parseInt($('input[name="id_product"]').val()):0,},success:function(json){if(json.success){if($('.ets_reviewticker').length>0)
$('.ets_reviewticker').remove();if(json.html)
$('body').append(json.html);if($('.ets_reviewticker > li').length>0){etsReviewTicker.slide()}else if(ets_rt_restart){etsReviewTicker.setCookie('ets_rt_ids','');clearInterval(etsReviewTicker.timer);if(ETS_RT_LOOP_OUT)
setTimeout(function(){etsReviewTicker.run()},ETS_RT_LOOP_OUT);else etsReviewTicker.run()}}}})},ETS_RT_DELAY_START)},slide:function(){if($('.ets_reviewticker > li.done').length<=0){$('.ets_reviewticker').delay(50).queue(function(){$(this).addClass('active');$(this).dequeue()});$('.ets_reviewticker > li:first-child').addClass('active').delay(ETS_RT_TIME_LANDING).queue(function(){$('.ets_reviewticker > li.active').addClass('done');$('.ets_reviewticker').removeClass('active');if(etsReviewTicker.getCookie('ets_rt_ids')==''||(etsReviewTicker.getCookie('ets_rt_ids')!=''&&($.inArray($(this).attr('data-id-order-detail'),etsReviewTicker.getCookie('ets_rt_ids').split(','))==-1)))
etsReviewTicker.setCookie('ets_rt_ids',etsReviewTicker.getCookie('ets_rt_ids')+$(this).attr('data-id-order-detail')+',');$(this).dequeue()})}
if($('.ets_reviewticker > li').length>=1){etsReviewTicker.timer=setInterval(function(){if($('.ets_reviewticker > li.done').length>0&&$('.ets_reviewticker > li.done').last().next('li').length>0){$('.ets_reviewticker > li').removeClass('active');$('.ets_reviewticker').addClass('active');$('.ets_reviewticker > li.done').last().next('li').addClass('active').delay(ETS_RT_TIME_LANDING).queue(function(){$('.ets_reviewticker > li.active').addClass('done');$('.ets_reviewticker').removeClass('active');if(etsReviewTicker.getCookie('ets_rt_ids')==''||(etsReviewTicker.getCookie('ets_rt_ids')!=''&&($.inArray($(this).attr('data-id-order-detail'),etsReviewTicker.getCookie('ets_rt_ids').split(','))==-1)))
etsReviewTicker.setCookie('ets_rt_ids',etsReviewTicker.getCookie('ets_rt_ids')+$(this).attr('data-id-order-detail')+',');$(this).dequeue()})}else if(!ETS_RT_REPEAT){clearInterval(etsReviewTicker.timer)}else{if(ets_rt_restart){etsReviewTicker.setCookie('ets_rt_ids','');clearInterval(etsReviewTicker.timer);if(ETS_RT_LOOP_OUT){setTimeout(function(){etsReviewTicker.run()},ETS_RT_LOOP_OUT)}else etsReviewTicker.run()}else{etsReviewTicker.setCookie('ets_rt_ids','');$('.ets_reviewticker > li').removeClass('done').removeClass('active');clearInterval(etsReviewTicker.timer);if(ETS_RT_LOOP_OUT>0){setTimeout(function(){etsReviewTicker.slide()},ETS_RT_LOOP_OUT)}else{etsReviewTicker.slide()}}}},parseInt(ETS_RT_TIME_OUT+ETS_RT_TIME_LANDING))}else if(ets_rt_restart){setTimeout(function(){etsReviewTicker.setCookie('ets_rt_ids','');clearInterval(etsReviewTicker.timer);etsReviewTicker.run()},parseInt(ETS_RT_TIME_OUT+ETS_RT_TIME_LANDING+ETS_RT_LOOP_OUT))}}}
$(document).ready(function(){if(ETS_RT_TIME_OUT<0)
ETS_RT_TIME_OUT=10000;else ETS_RT_TIME_OUT=ETS_RT_TIME_OUT*1000;if(ETS_RT_TIME_LANDING<0)
ETS_RT_TIME_LANDING=2000;else ETS_RT_TIME_LANDING=ETS_RT_TIME_LANDING*1000;if(ETS_RT_DELAY_START<0)
ETS_RT_DELAY_START=0;else ETS_RT_DELAY_START=ETS_RT_DELAY_START*1000;if(ETS_RT_LOOP_OUT<0)
ETS_RT_LOOP_OUT=0;else ETS_RT_LOOP_OUT=parseInt(ETS_RT_LOOP_OUT*60*1000);ets_rt_restart=!1;ets_rt_clsed=!1;etsReviewTicker.run();$(document).on('click','.ets_rt_close',function(){$('.ets_reviewticker').remove();ets_rt_clsed=!0;if(etsReviewTicker.timer!=='')
clearInterval(etsReviewTicker.timer);if(ETS_RT_CLOSE_PERMANAL)
$.ajax({url:ETS_RT_URL_AJAX,type:'post',dataType:'json',data:{end_alert_life_time:1,},success:function(json){}})});if(ETS_RT_STOP_WHEN_HOVER){$(document).on('mouseenter','.ets_reviewticker',function(){if(!$(this).hasClass('hovered')){$(this).addClass('hovered');if(etsReviewTicker.timer!=''||etsReviewTicker.timer)
clearInterval(etsReviewTicker.timer)}});$(document).on('mouseleave','.ets_reviewticker',function(){if($(this).hasClass('hovered')){$(this).removeClass('hovered');etsReviewTicker.slide()}})}});/*
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
jQuery(window).load(function(){$('.plw_content').addClass('plw_page_loaded')});/*
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
$(document).ready(function(){$('.is_parent_cat_li').addClass('active');$('.is_parent_cat_li > .homecat_ajax_tab_list').addClass('active');$('.homecat_tabs > .homecat_product_list_wrapper:first-child').addClass('active').children('.product_list').addClass('active');$('.homecat_ajax_tab_list').click(function(){var id_parent=$(this).parents('.is_parent_cat_li').data('id-category');var id_category=$(this).data('id-category');$(this).parents('.is_parent_cat_li').removeClass('active').find('.homecat_ajax_tab_list').removeClass('active').parent('li').removeClass('active');$(this).addClass('active').parent('li').addClass('active');if($('.homecat_tabs_'+id_parent+' .hc-wrapper-homecat-tab-'+id_category).length>0){$('.homecat_tabs_'+id_parent+' .homecat_product_list_wrapper').removeClass('active').children('ul').removeClass('active');$('.homecat_tabs_'+id_parent+' .hc-wrapper-homecat-tab-'+id_category).addClass('active').children('ul').addClass('active')}else{if(!$(this).hasClass('loading')){$(this).addClass('loading');$('.homecat_tabs_'+id_parent).addClass('loading');$.ajax({url:homecat_ajax_link,type:'post',dataType:'json',data:{id_category:$(this).data('id-category')!='all'?parseInt($(this).data('id-category')):0,homecateajax:!0,ets_homecat_order_seed:ets_homecat_order_seed,id_parent:id_parent,ets_homecat_order:$('.is_parent_cat_li_'+id_parent+' .homecat_sort_by').val(),},success:function(json){$('.homecat_tabs_'+json.id_parent).append(json.html);$('.is_parent_cat_li_'+json.id_parent).find('.homecat_ajax_tab_list_'+json.id_category).removeClass('loading');if($('.is_parent_cat_li_'+json.id_parent).find('.homecat_ajax_tab_list_'+json.id_category).hasClass('active')){$('.homecat_tabs_'+json.id_parent).removeClass('loading');$('.homecat_tabs_'+json.id_parent+' .homecat_product_list_wrapper').removeClass('active').children('.product_list').removeClass('active');if($('.homecat_tabs_'+json.id_parent+' .hc-wrapper-homecat-tab-'+json.id_category).length>0)
$('.homecat_tabs_'+json.id_parent+' .hc-wrapper-homecat-tab-'+json.id_category).addClass('active').children('.product_list').addClass('active')}
if(ETS_HOMECAT_ENBLE_CAROUSEL&&$('.homecat_tabs_'+json.id_parent+' .hc-wrapper-homecat-tab-'+json.id_category+' .product_list').length>0)
$('.homecat_tabs_'+json.id_parent+' .hc-wrapper-homecat-tab-'+json.id_category+' .product_list').owlCarousel({items:4,responsive:{0:{items:1},545:{items:2},801:{items:3},1200:{items:4}},navText:["<i class='material-icons'>&#xE314;</i>","<i class='material-icons'>&#xE315;</i>"]})},error:function(){$('.homecat_ajax_tab_list').removeClass('loading');$('.homecat_tabs').removeClass('loading')}})}else $('.homecat_tabs_'.id_parent).addClass('loading')}
return!1});$('.homecat_sort_by').prop("disabled",!1);$('.homecat_sort_by').change(function(){if(!(typeof $(this).attr('disabled')!==typeof undefined&&$(this).attr('disabled')!==!1&&$(this).attr('disabled')=='disabled')){$(this).attr('disabled','disabled');var id_parent=$(this).parents('.is_parent_cat_li').data('id-category');var id_category=$(this).parents('.is_parent_cat_li').eq(0).find('.homecat_ajax_tab_list.active').length>0?$(this).parents('.is_parent_cat_li').find('.homecat_ajax_tab_list.active').eq(0).data('id-category'):0;$('.homecat_tabs_'+id_parent).addClass('loading');$.ajax({url:homecat_ajax_link,type:'post',dataType:'json',data:{id_category:id_category,homecateajaxsort:!0,sort_by:$(this).val(),ets_homecat_order_seed:ets_homecat_order_seed,id_parent:id_parent,},success:function(json){if(!json.error){$('.homecat_tabs_'+json.id_parent+' .homecat_product_list_wrapper').remove();$('.homecat_tabs_'+json.id_parent).prepend(json.html);$('.is_parent_cat_li_'+json.id_parent).removeClass('active').children('.homecat_ajax_tab_list').removeClass('active').parent('li').removeClass('active');$('.is_parent_cat_li_'+json.id_parent+' .homecat_ajax_tab_list_'+json.id_category).addClass('active').parent('li').addClass('active');$('.homecat_tabs_'+json.id_category+' .homecat_product_list_wrapper').removeClass('active');if($('.homecat_tabs_'+json.id_parent+' .hc-wrapper-homecat-tab-'+json.id_category).length>0)
$('.homecat_tabs_'+json.id_parent+' .hc-wrapper-homecat-tab-'+json.id_category).addClass('active').children('.product_list').addClass('active');if(ETS_HOMECAT_ENBLE_CAROUSEL&&$('.homecat_tabs_'+json.id_parent+' .hc-wrapper-homecat-tab-'+json.id_category+' .product_list').length>0)
$('.homecat_tabs_'+json.id_parent+' .hc-wrapper-homecat-tab-'+json.id_category+' .product_list').owlCarousel({items:4,responsive:{0:{items:1},545:{items:2},801:{items:3},1200:{items:4}},navText:["<i class='material-icons'>&#xE314;</i>","<i class='material-icons'>&#xE315;</i>"]})}
$('.homecat_tabs_'+json.id_parent).removeClass('loading');$('#homecat_sort_by_'+json.id_parent).prop("disabled",!1)},error:function(){$('.homecat_tabs').removeClass('loading');$('.homecat_sort_by').prop("disabled",!1)}})}});$(document).on('click','.homecat-load-more',function(){if(!$(this).hasClass('active')){var id_category=$(this).data('id-category')!='all'?parseInt($(this).data('id-category')):0;var id_parent=$(this).parents('.is_parent_cat_li').data('id-category');$(this).addClass('active');$.ajax({url:homecat_ajax_link,type:'post',dataType:'json',data:{id_category:id_category,homecateajaxloadmore:!0,product_count:parseInt($(this).attr('data-product-count')),ets_homecat_order_seed:ets_homecat_order_seed,id_parent:id_parent,ets_homecat_order:$('.is_parent_cat_li_'+id_parent+' .homecat_sort_by').val(),},success:function(json){if(json.html){$('.homecat_tabs_'+id_parent+' .homecat-tab-'+json.id_category).append(json.html)}
$('.homecat_tabs_'+id_parent+' .homecat-load-more-'+json.id_category).attr('data-product-count',json.productCount);if(json.nomore)
$('.homecat_tabs_'+id_parent+' .homecat-load-more-'+json.id_category).addClass('hidden');$('.homecat_tabs_'+id_parent+' .homecat-load-more-'+json.id_category).removeClass('active');if(ETS_HOMECAT_ENBLE_CAROUSEL&&$('.homecat_tabs_'+id_parent+' .homecat-tab-'+json.id_category).length>0)
$('.homecat_tabs_'+id_parent+' .homecat-tab-'+json.id_category).owlCarousel({items:4,responsive:{0:{items:1},545:{items:2},801:{items:3},1200:{items:4}},navText:["<i class='material-icons'>&#xE314;</i>","<i class='material-icons'>&#xE315;</i>"]})},error:function(){$('.homecat-load-more').removeClass('active')}})}});if($('.homecat_product_list_wrapper > .product_list').length>0&&ETS_HOMECAT_ENBLE_CAROUSEL)
$('.homecat_product_list_wrapper > .product_list').owlCarousel({items:4,responsive:{0:{items:1},545:{items:2},801:{items:3},1200:{items:4}},navText:["<i class='material-icons'>&#xE314;</i>","<i class='material-icons'>&#xE315;</i>"]})});/*
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
$(function(){if($('.ets_mm_megamenu.sticky_enabled').length>0){var sticky_navigation_offset_top=$('.ets_mm_megamenu.sticky_enabled').offset().top;var headerFloatingHeight=$('.ets_mm_megamenu.sticky_enabled').height()+($('#header').length>0?parseInt($('.ets_mm_megamenu.sticky_enabled').css('marginTop').replace('px',''))+parseInt($('.ets_mm_megamenu.sticky_enabled').css('marginBottom').replace('px','')):0);var oldHeaderMarginBottom=$('#header').length>0?parseInt($('#header').css('marginBottom').replace('px','')):0;var sticky_navigation=function(){if(!$('.ets_mm_megamenu').hasClass('sticky_enabled'))
return!1;var scroll_top=$(window).scrollTop();var heightMenu=$('.ets_mm_megamenu').height();if(scroll_top>sticky_navigation_offset_top+heightMenu){$('.ets_mm_megamenu.sticky_enabled').addClass('scroll_heading')}else{$('.ets_mm_megamenu.sticky_enabled').removeClass('scroll_heading')}};sticky_navigation();$(window).scroll(function(){sticky_navigation()});if($(window).width()<768&&!$('body').hasClass('disable-sticky'))
$('body').addClass('disable-sticky');$(window).on('resize',function(e){if($(window).width()<768&&!$('body').hasClass('disable-sticky'))
$('body').addClass('disable-sticky');else if($(window).width()>=768&&$('body').hasClass('disable-sticky'))
$('body').removeClass('disable-sticky')})}
$('.transition_slide li.mm_menus_li').hover(function(){if($(window).width()>=768){$(this).find('.mm_columns_ul').stop(!0,!0).slideDown(300)}},function(){if($(window).width()>=768){$(this).find('.mm_columns_ul').stop(!0,!0).slideUp(300)}});$('.ybc-menu-toggle').on('click',function(){if($(window).width()<=767){var wrapper=$(this).next('.mm_menus_ul');if($(this).hasClass('closed')){var btnObj=$(this);btnObj.removeClass('closed');btnObj.addClass('opened');wrapper.stop(!0,!0).addClass('active');if($('.transition_slide.transition_default').length!=''){wrapper.stop(!0,!0).slideDown(0)}}else{var btnObj=$(this);btnObj.removeClass('opened');btnObj.addClass('closed');wrapper.stop(!0,!0).removeClass('active');if($('.transition_slide.transition_default').length!=''){wrapper.stop(!0,!0).slideUp(0)}}}});$('.close_menu').on('click',function(){if($(window).width()<=767){$(this).parent().prev().removeClass('opened');$(this).parent().prev().addClass('closed');$(this).parent().stop(!0,!0).removeClass('active');$('#menu-icon').stop(!0,!0).removeClass('opened');$('#menu-icon').stop(!0,!0).addClass('closed')}});$('.arrow').on('click',function(){if($(window).width()<=767){var wrapper=$(this).next('.mm_columns_ul');if($(this).hasClass('closed')){var btnObj=$(this);btnObj.removeClass('closed');btnObj.addClass('opened');wrapper.stop(!0,!0).addClass('active')}else{var btnObj=$(this);btnObj.removeClass('opened');btnObj.addClass('closed');wrapper.stop(!0,!0).removeClass('active')}}});if($('.ets_mm_megamenu').hasClass('enable_active_menu')&&$('.mm_menus_ul > li').length>0){var currentUrl=window.location.href;$('.mm_menus_ul > li').each(function(){if($(this).find('a[href="'+currentUrl+'"]').length>0){$(this).addClass('active');return!1}})}
if($('.mm_breaker').length>0&&$('.mm_breaker').prev('li').length>0){$('.mm_breaker').prev('li').addClass('mm_before_breaker')}});/*
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
(function($){var MLS_Slider=function(element,options){var settings=$.extend({},$.fn.mls_slider.defaults,options);var slider=$(element);var currentSlide=slider.find('li.mls_slide_front.active').eq(0);var playSlide=function(ik){if($('li.mls_slide_front.item_'+ik).length>0&&!$('li.mls_slide_front.item_'+ik).hasClass('active')){if($('li.mls_slide_front.active').length>0){moveOut($('li.mls_slide_front.active'),function(){moveIn($('li.mls_slide_front.item_'+ik),function(){})})}else{moveIn($('li.mls_slide_front.item_'+ik),function(){})}
slider.addClass('mls_running')}}
var moveIn=function(slide,moveInCallBack){slider.addClass('mls_moving_in');$('.mls_pag_button').removeClass('active');$('.mls_pag_button[data-slide-order="'+slide.attr('data-slide-order')+'"]').addClass('active');slide.css('animation-duration',settings.moveIn+'ms');slide.css('transition-duration',settings.moveIn+'ms');slide.removeClass(slide.attr('data-animation-out')).addClass(slide.attr('data-animation-in')).addClass('active').delay(settings.moveIn).queue(function(){if(slide.find('.msl_layer_front').length>0){slide.find('.msl_layer_front').each(function(){$(this).delay($(this).attr('data-delay-in')).queue(function(){$(this).css('animation-duration',$(this).attr('data-move-in')+'ms');$(this).removeClass($(this).attr('data-animation-out')).addClass($(this).attr('data-animation-in')).addClass('active').dequeue()})})}
$(this).dequeue()}).delay(slide.attr('data-max-layer-in')).queue(function(){moveInCallBack.call(this);slider.removeClass('mls_running');slider.removeClass('mls_moving_in');$(this).dequeue()});if(settings.enableRunningBar&&$('.mls_slider_running').length>0){$('.mls_slider_running').eq(0).css('animation-duration',(parseInt(settings.moveIn)+parseInt(slide.attr('data-max-layer-in')))+'ms')}
return slide}
var moveOut=function(slide,moveOutCallback){slide.find('.msl_layer_front').each(function(){$(this).delay($(this).attr('data-delay-out')).queue(function(){$(this).css('animation-duration',$(this).attr('data-move-out')+'ms');$(this).removeClass($(this).attr('data-animation-in')).addClass($(this).attr('data-animation-out')).delay($(this).attr('data-move-out')-100).queue(function(){$(this).removeClass('active').dequeue()}).dequeue()})});slide.delay(slide.attr('data-max-layer-out')).queue(function(){moveOutCallback.call(this);slide.css('animation-duration',settings.moveOut+'ms');slide.css('transition-duration',settings.moveOut+'ms');$(this).removeClass($(this).attr('data-animation-in')).addClass($(this).attr('data-animation-out')).delay(settings.moveOut).queue(function(){$(this).removeClass('active').dequeue()}).dequeue()})}
var play=function(){clearInterval($.fn.mls_slider.itervalTimer);$.fn.mls_slider.itervalTimer=0;if(!settings.enablePagination&&$('.mls_pagination').length>0)
$('.mls_pagination').remove();if(!settings.enableNav&&$('.mls_nav').length>0)
$('.mls_nav').remove();if(!settings.enableRunningBar&&$('.mls_slider_running').length>0)
$('.mls_slider_running').remove();if($('.mls_slide_front.item_'+settings.startSlide).length>0){playSlide(settings.startSlide);if(settings.autoPlay)
autoPlay()}else if($('.mls_slide_front').length>0){playSlide(1);if(settings.autoPlay)
autoPlay()}
$('.mls_pag_button').click(function(){if(!$(this).hasClass('active')&&!slider.hasClass('mls_running')){playSlide($(this).attr('data-slide-order'));if(settings.autoPlay){clearInterval($.fn.mls_slider.itervalTimer);autoPlay()}}});$('.mls_next').click(function(){if(!slider.hasClass('mls_running')){if($('.mls_slide_front.active').length>0&&$('.mls_slide_front.active').next('li.mls_slide_front').length>0){playSlide($('.mls_slide_front.active').next('li.mls_slide_front').attr('data-slide-order'));if(settings.autoPlay){clearInterval($.fn.mls_slider.itervalTimer);autoPlay()}}else if($('.mls_slide_front').length>1&&settings.loop){playSlide(1);if(settings.autoPlay){clearInterval($.fn.mls_slider.itervalTimer);autoPlay()}}}});$('.mls_prev').click(function(){if(!slider.hasClass('mls_running')){if($('.mls_slide_front.active').length>0&&$('.mls_slide_front.active').prev('li.mls_slide_front').length>0){playSlide($('.mls_slide_front.active').prev('li.mls_slide_front').attr('data-slide-order'));if(settings.autoPlay){clearInterval($.fn.mls_slider.itervalTimer);autoPlay()}}else if($('.mls_slide_front').length>1&&settings.loop){playSlide($('.mls_slide_front').length);if(settings.autoPlay){clearInterval($.fn.mls_slider.itervalTimer);autoPlay()}}}});if(settings.pauseOnHover&&settings.autoPlay){slider.hover(function(){clearInterval($.fn.mls_slider.itervalTimer);$.fn.mls_slider.itervalTimer=''},function(){if($.fn.mls_slider.itervalTimer==='')
autoPlay()})}}
var autoPlay=function(){$.fn.mls_slider.itervalTimer=setInterval(function(){if($('.mls_slide_front.active').length>0&&$('.mls_slide_front.active').next('li.mls_slide_front').length>0){playSlide($('.mls_slide_front.active').next('li.mls_slide_front').attr('data-slide-order'))}else if($('.mls_slide_front').length>1&&settings.loop)
playSlide(1)},parseInt(settings.stand)+parseInt(slider.attr('data-max-slide-time'))+1000)}
var backgroundLoaded=!1;var layerImagesLoaded=!1;if(settings.enableLoading){!slider.hasClass('loading')
slider.addClass('loading');if($('.mls_slides_front > li').length>0){var firstSlideBackground=$('.mls_slides_front > li:first-child').attr('data-slide-background-image');if(firstSlideBackground!=''){$('<img/>').attr('src',firstSlideBackground).load(function(){$(this).remove();$('.mls_slides_front > li:first-child').css('background-image','url("'+firstSlideBackground+'")');backgroundLoaded=!0;if(layerImagesLoaded&&slider.hasClass('loading')){slider.removeClass('loading');play()}
return!1})}else backgroundLoaded=!0;if($('.mls_slides_front > li:first-child').find('img').length>0){var images=$('.mls_slides_front > li:first-child img');var elemsCount=images.length;var loadedCount=0;images.load(function(){loadedCount++;if(loadedCount==elemsCount){layerImagesLoaded=!0;if(backgroundLoaded&&slider.hasClass('loading')){slider.removeClass('loading');play();return!1}}})}else layerImagesLoaded=!0;if(backgroundLoaded&&layerImagesLoaded){if(slider.hasClass('loading'))
slider.removeClass('loading');play()}}
setTimeout(function(){if(slider.hasClass('loading')){slider.removeClass('loading');play()}},5000)}else{if(slider.hasClass('loading'))
slider.removeClass('loading');play()}}
$.fn.mls_slider=function(options){var mlsslider=new MLS_Slider(this,options);return this};$.fn.mls_slider.defaults={enableNav:!0,enablePagination:!0,enableLoading:!0,enableRunningBar:!0,moveIn:2000,moveOut:2000,stand:5000,loop:!0,autoPlay:!0,pauseOnHover:!0,startSlide:1,};$.fn.mls_slider.itervalTimer=0})(jQuery);/*
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
var mslFullSliderEnabled=!1;$(document).ready(function(){if($('.mls_slider').length>0){if($('.mls_slider').attr('data-slider-type')=='full'&&$('.mls_slider').parents('#columns').length>0){$('.mls_slider').parents('#columns').eq(0).before($('.ets_multilayerslider'));$('.ets_multilayerslider').removeClass('hidden');mslFullSliderEnabled=!0}else if($('.mls_slider').attr('data-slider-type')=='full'&&$('.mls_slider').parents('#wrapper').length>0){$('.mls_slider').parents('#wrapper').eq(0).prepend($('.ets_multilayerslider'));$('.ets_multilayerslider').removeClass('hidden');mslFullSliderEnabled=!0}else if($('.ets_multilayerslider').length>0)
$('.ets_multilayerslider').removeClass('hidden');$('.mls_slider').mls_slider({enableNav:parseInt($('.mls_slider').attr('data-enable-next-prev')),enablePagination:parseInt($('.mls_slider').attr('data-enable-pagination')),moveIn:parseInt($('.mls_slider').attr('data-move-in')),moveOut:parseInt($('.mls_slider').attr('data-move-out')),stand:parseInt($('.mls_slider').attr('data-stand-duration')),loop:parseInt($('.mls_slider').attr('data-loop')),autoPlay:parseInt($('.mls_slider').attr('data-auto-play')),pauseOnHover:parseInt($('.mls_slider').attr('data-pause-on-hover')),enableLoading:parseInt($('.mls_slider').attr('data-enable-loading-icon')),enableRunningBar:parseInt($('.mls_slider').attr('data-enable-running-bar')),});ScaleSlider();$(window).on('resize',function(e){ScaleSlider()})}});function ScaleSlider(){var ratio=$('.mls_slides').width()/width_slider;var height=ratio*height_slider;if(ratio<=1){var buttonscale=2-ratio}else{var buttonscale=ratio-1}
if($('.mls_slides').width()<width_slider||mslFullSliderEnabled||$('.mls_slider').attr('data-slider-type')=='auto'){$('.ets_multilayerslider').css('height',height+'px');$('.ets_multilayerslider .mls_slides').css('transform','scale('+ratio+')');$('.mls_nav > div').css('transform','scale('+buttonscale+') ');$('.mls_loading_icon img').css('transform','scale('+buttonscale+') translate3d(-50%, -50%, 0px)');$('.mls_pagination').css('transform','scale('+buttonscale+') translateX(-50%)')}else{$('.ets_multilayerslider .mls_slides').css('transform','scale(1)');$('.ets_multilayerslider').css('height','auto')}};/*
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
var Ets_ImageHover={inArray:function(item,items){var length=items.length;for(var i=0;i<length;i++){if(items[i]==item)return!0}
return!1},ets_run_v17:function(){if($('article.product-miniature').length>0){var temps=[],ids='',item=0;$('article.product-miniature').each(function(){item=parseInt($(this).data('id-product'));if(item>0&&!Ets_ImageHover.inArray(item,temps))
temps.push(item)});for(var i=0;i<temps.length;i++)(i!=temps.length-1)?ids+=temps[i]+',':ids+=temps[i];if(ids!=''){$.ajax({url:baseAjax,data:'ids='+ids,type:'get',dataType:'json',success:function(json){if(json){$.each(json,function(i,image){if($('.product-miniature[data-id-product="'+i+'"] a.product-thumbnail img').length>0){$('.product-miniature[data-id-product="'+i+'"] a.product-thumbnail img').after(image)}})}}})}}},ets_run_v16:function(){if($('.ajax_add_to_cart_button').length>0){var temps=[],ids='',item=0;$('.ajax_add_to_cart_button').each(function(){item=parseInt($(this).data('id-product'));if(item>0&&!Ets_ImageHover.inArray(item,temps))
temps.push(item)});for(var i=0;i<temps.length;i++)(i!=temps.length-1)?ids+=temps[i]+',':ids+=temps[i];if(ids!=''){$.ajax({url:baseAjax,data:'ids='+ids,type:'get',dataType:'json',success:function(json){if(json){$.each(json,function(i,image){if($('.ajax_add_to_cart_button[data-id-product="'+i+'"]').closest('.ajax_block_product').find('a.product_img_link img').length>0)
$('.ajax_add_to_cart_button[data-id-product="'+i+'"]').closest('.ajax_block_product').find('a.product_img_link img').after(image);if($('.ajax_add_to_cart_button[data-id-product="'+i+'"]').closest('li.product-box').find('a.product-image img').length>0)
$('.ajax_add_to_cart_button[data-id-product="'+i+'"]').closest('li.product-box').find('a.product-image img').after(image)})}}})}}},ets_run_v15:function(){if($('.ajax_add_to_cart_button').length>0){var temps=[],ids='',item=0;$('.ajax_add_to_cart_button').each(function(){item=parseInt($(this).attr('rel').replace('ajax_id_product_',''));if(item>0&&!Ets_ImageHover.inArray(item,temps))
temps.push(item)});for(var i=0;i<temps.length;i++)(i!=temps.length-1)?ids+=temps[i]+',':ids+=temps[i];if(ids!=''){$.ajax({url:baseAjax,data:'ids='+ids,type:'get',dataType:'json',global:!1,success:function(json){if(json){$.each(json,function(i,image){if($('.ajax_add_to_cart_button[rel="ajax_id_product_'+i+'"]').closest('.ajax_block_product').find('a.product_image img').length>0&&!$('.accessories_block').length)
$('.ajax_add_to_cart_button[rel="ajax_id_product_'+i+'"]').closest('.ajax_block_product').find('a.product_image img').after(image);if($('.ajax_add_to_cart_button[rel="ajax_id_product_'+i+'"]').closest('.ajax_block_product').find('a.product_img_link img').length>0)
$('.ajax_add_to_cart_button[rel="ajax_id_product_'+i+'"]').closest('.ajax_block_product').find('a.product_img_link img').after(image)})}}})}}}}
$(document).ready(function(){if(_PI_VER_17_>0){Ets_ImageHover.ets_run_v17();$(document).ajaxStop(function(){if($('a.product-thumbnail img').length<2*$('a.product-thumbnail').length){Ets_ImageHover.ets_run_v17()}})}
if(_PI_VER_17_<1&&_PI_VER_16_>0){Ets_ImageHover.ets_run_v16();$(document).ajaxStop(function(){if(($('a.product_img_link img').length<2*$('a.product_img_link').length)||($('a.product-image img').length<2*$('a.product-image').length)){Ets_ImageHover.ets_run_v16()}})}
if(_PI_VER_16_<1){Ets_ImageHover.ets_run_v15();$(document).ajaxStop(function(){if(($('a.product_image img').length<2*$('a.product_image').length)||($('a.product_img_link img').length<2*$('a.product_img_link').length)){Ets_ImageHover.ets_run_v15()}})}});/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($,window,document,undefined){/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat--) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&rel=0&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){'use strict';/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){'use strict';/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($,window,document,undefined){var style=$('<support>').get(0).style,prefixes='Webkit Moz O ms'.split(' '),events={transition:{end:{WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd',transition:'transitionend'}},animation:{end:{WebkitAnimation:'webkitAnimationEnd',MozAnimation:'animationend',OAnimation:'oAnimationEnd',animation:'animationend'}}},tests={csstransforms:function(){return!!test('transform')},csstransforms3d:function(){return!!test('perspective')},csstransitions:function(){return!!test('transition')},cssanimations:function(){return!!test('animation')}};function test(property,prefixed){var result=!1,upper=property.charAt(0).toUpperCase()+property.slice(1);$.each((property+' '+prefixes.join(upper+' ')+upper).split(' '),function(i,property){if(style[property]!==undefined){result=prefixed?property:!0;return!1}});return result}
function prefixed(property){return test(property,!0)}
if(tests.csstransitions()){$.support.transition=new String(prefixed('transition'))
$.support.transition.end=events.transition.end[$.support.transition]}
if(tests.cssanimations()){$.support.animation=new String(prefixed('animation'))
$.support.animation.end=events.animation.end[$.support.animation]}
if(tests.csstransforms()){$.support.transform=new String(prefixed('transform'));$.support.transform3d=tests.csstransforms3d()}})(window.Zepto||window.jQuery,window,document);/*!
	Zoom 1.7.20
	license: MIT
	http://www.jacklmoore.com/zoom
*/
(function($){var defaults={url:!1,callback:!1,target:!1,duration:120,on:'mouseover',touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};$.zoom=function(target,source,img,magnify){var targetHeight,targetWidth,sourceHeight,sourceWidth,xRatio,yRatio,offset,$target=$(target),position=$target.css('position'),$source=$(source);target.style.position=/(absolute|fixed)/.test(position)?position:'relative';target.style.overflow='hidden';img.style.width=img.style.height='';$(img).addClass('zoomImg').css({position:'absolute',top:0,left:0,opacity:0,width:img.width*magnify,height:img.height*magnify,border:'none',maxWidth:'none',maxHeight:'none'}).appendTo(target);return{init:function(){targetWidth=$target.outerWidth();targetHeight=$target.outerHeight();if(source===target){sourceWidth=targetWidth;sourceHeight=targetHeight}else{sourceWidth=$source.outerWidth();sourceHeight=$source.outerHeight()}
xRatio=(img.width-targetWidth)/sourceWidth;yRatio=(img.height-targetHeight)/sourceHeight;offset=$source.offset()},move:function(e){var left=(e.pageX-offset.left),top=(e.pageY-offset.top);top=Math.max(Math.min(top,sourceHeight),0);left=Math.max(Math.min(left,sourceWidth),0);img.style.left=(left*-xRatio)+'px';img.style.top=(top*-yRatio)+'px'}}};$.fn.zoom=function(options){return this.each(function(){var
settings=$.extend({},defaults,options||{}),target=settings.target&&$(settings.target)[0]||this,source=this,$source=$(source),img=document.createElement('img'),$img=$(img),mousemove='mousemove.zoom',clicked=!1,touched=!1;if(!settings.url){var srcElement=source.querySelector('img');if(srcElement){settings.url=srcElement.getAttribute('data-src')||srcElement.currentSrc||srcElement.src}
if(!settings.url){return}}
$source.one('zoom.destroy',function(position,overflow){$source.off(".zoom");target.style.position=position;target.style.overflow=overflow;img.onload=null;$img.remove()}.bind(this,target.style.position,target.style.overflow));img.onload=function(){var zoom=$.zoom(target,source,img,settings.magnify);function start(e){zoom.init();zoom.move(e);$img.stop().fadeTo($.support.opacity?settings.duration:0,1,$.isFunction(settings.onZoomIn)?settings.onZoomIn.call(img):!1)}
function stop(){$img.stop().fadeTo(settings.duration,0,$.isFunction(settings.onZoomOut)?settings.onZoomOut.call(img):!1)}
if(settings.on==='grab'){$source.on('mousedown.zoom',function(e){if(e.which===1){$(document).one('mouseup.zoom',function(){stop();$(document).off(mousemove,zoom.move)});start(e);$(document).on(mousemove,zoom.move);e.preventDefault()}})}else if(settings.on==='click'){$source.on('click.zoom',function(e){if(clicked){return}else{clicked=!0;start(e);$(document).on(mousemove,zoom.move);$(document).one('click.zoom',function(){stop();clicked=!1;$(document).off(mousemove,zoom.move)});return!1}})}else if(settings.on==='toggle'){$source.on('click.zoom',function(e){if(clicked){stop()}else{start(e)}
clicked=!clicked})}else if(settings.on==='mouseover'){zoom.init();$source.on('mouseenter.zoom',start).on('mouseleave.zoom',stop).on(mousemove,zoom.move)}
if(settings.touch){$source.on('touchstart.zoom',function(e){e.preventDefault();if(touched){touched=!1;stop()}else{touched=!0;start(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])}}).on('touchmove.zoom',function(e){e.preventDefault();zoom.move(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])}).on('touchend.zoom',function(e){e.preventDefault();if(touched){touched=!1;stop()}})}
if($.isFunction(settings.callback)){settings.callback.call(img)}};img.setAttribute('role','presentation');img.src=settings.url})};$.fn.zoom.defaults=defaults}(window.jQuery));(function(factory){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof exports!=='undefined'){module.exports=factory(require('jquery'))}else{factory(jQuery)}}(function($){'use strict';var Slick=window.Slick||{};Slick=(function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:$(element),appendDots:$(element),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3000,centerMode:!1,centerPadding:'50px',cssEase:'ease',customPaging:function(slider,i){return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i+1)},dots:!1,dotsClass:'slick-dots',draggable:!0,easing:'linear',edgeFriction:0.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:'ondemand',mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:'window',responsive:null,rows:1,rtl:!1,slide:'',slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1000};_.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=!1;_.focussed=!1;_.interrupted=!1;_.hidden='hidden';_.paused=!0;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=!0;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange='visibilitychange';_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data('slick')||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=='undefined'){_.hidden='mozHidden';_.visibilityChange='mozvisibilitychange'}else if(typeof document.webkitHidden!=='undefined'){_.hidden='webkitHidden';_.visibilityChange='webkitvisibilitychange'}
_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(!0)}
return Slick}());Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find('.slick-active').attr({'aria-hidden':'false'}).find('a, input, button, select').attr({'tabindex':'0'})};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof(index)==='boolean'){addBefore=index;index=null}else if(index<0||(index>=_.slideCount)){return!1}
_.unload();if(typeof(index)==='number'){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack)}else if(addBefore){$(markup).insertBefore(_.$slides.eq(index))}else{$(markup).insertAfter(_.$slides.eq(index))}}else{if(addBefore===!0){$(markup).prependTo(_.$slideTrack)}else{$(markup).appendTo(_.$slideTrack)}}
_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr('data-slick-index',index)});_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===!0&&_.options.vertical===!1){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(!0);_.$list.animate({height:targetHeight},_.options.speed)}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===!0&&_.options.vertical===!1){targetLeft=-targetLeft}
if(_.transformsEnabled===!1){if(_.options.vertical===!1){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback)}else{_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback)}}else{if(_.cssTransitions===!1){if(_.options.rtl===!0){_.currentLeft=-(_.currentLeft)}
$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function(now){now=Math.ceil(now);if(_.options.vertical===!1){animProps[_.animType]='translate('+now+'px, 0px)';_.$slideTrack.css(animProps)}else{animProps[_.animType]='translate(0px,'+now+'px)';_.$slideTrack.css(animProps)}},complete:function(){if(callback){callback.call()}}})}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===!1){animProps[_.animType]='translate3d('+targetLeft+'px, 0px, 0px)'}else{animProps[_.animType]='translate3d(0px,'+targetLeft+'px, 0px)'}
_.$slideTrack.css(animProps);if(callback){setTimeout(function(){_.disableTransition();callback.call()},_.options.speed)}}}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null){asNavFor=$(asNavFor).not(_.$slider)}
return asNavFor};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&typeof asNavFor==='object'){asNavFor.each(function(){var target=$(this).slick('getSlick');if(!target.unslicked){target.slideHandler(index,!0)}})}};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===!1){transition[_.transitionType]=_.transformType+' '+_.options.speed+'ms '+_.options.cssEase}else{transition[_.transitionType]='opacity '+_.options.speed+'ms '+_.options.cssEase}
if(_.options.fade===!1){_.$slideTrack.css(transition)}else{_.$slides.eq(slide).css(transition)}};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow){_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed)}};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer){clearInterval(_.autoPlayTimer)}};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===!1){if(_.direction===1&&(_.currentSlide+1)===(_.slideCount-1)){_.direction=0}else if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0){_.direction=1}}}
_.slideHandler(slideTo)}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===!0){_.$prevArrow=$(_.options.prevArrow).addClass('slick-arrow');_.$nextArrow=$(_.options.nextArrow).addClass('slick-arrow');if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.prependTo(_.options.appendArrows)}
if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.appendTo(_.options.appendArrows)}
if(_.options.infinite!==!0){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true')}}else{_.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({'aria-disabled':'true','tabindex':'-1'})}}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===!0){_.$slider.addClass('slick-dotted');dot=$('<ul />').addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1){dot.append($('<li />').append(_.options.customPaging.call(this,_,i)))}
_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find('li').first().addClass('slick-active').attr('aria-hidden','false')}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+':not(.slick-cloned)').addClass('slick-slide');_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr('data-slick-index',index).data('originalStyling',$(element).attr('style')||'')});_.$slider.addClass('slick-slider');_.$slideTrack=(_.slideCount===0)?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();_.$slideTrack.css('opacity',0);if(_.options.centerMode===!0||_.options.swipeToSlide===!0){_.options.slidesToScroll=1}
$('img[data-lazy]',_.$slider).not('[src]').addClass('slick-loading');_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);if(_.options.draggable===!0){_.$list.addClass('draggable')}};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>1){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement('div');for(b=0;b<_.options.rows;b++){var row=document.createElement('div');for(c=0;c<_.options.slidesPerRow;c++){var target=(a*slidesPerSection+((b*_.options.slidesPerRow)+c));if(originalSlides.get(target)){row.appendChild(originalSlides.get(target))}}
slide.appendChild(row)}
newSlides.appendChild(slide)}
_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({'width':(100/_.options.slidesPerRow)+'%','display':'inline-block'})}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=!1;var sliderWidth=_.$slider.width();var windowWidth=window.innerWidth||$(window).width();if(_.respondTo==='window'){respondToWidth=windowWidth}else if(_.respondTo==='slider'){respondToWidth=sliderWidth}else if(_.respondTo==='min'){respondToWidth=Math.min(windowWidth,sliderWidth)}
if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints){if(_.breakpoints.hasOwnProperty(breakpoint)){if(_.originalSettings.mobileFirst===!1){if(respondToWidth<_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint]}}else{if(respondToWidth>_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint]}}}}
if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===!0){_.currentSlide=_.options.initialSlide}
_.refresh(initial)}
triggerBreakpoint=targetBreakpoint}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===!0){_.currentSlide=_.options.initialSlide}
_.refresh(initial)}
triggerBreakpoint=targetBreakpoint}}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===!0){_.currentSlide=_.options.initialSlide}
_.refresh(initial);triggerBreakpoint=targetBreakpoint}}
if(!initial&&triggerBreakpoint!==!1){_.$slider.trigger('breakpoint',[_,triggerBreakpoint])}}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;if($target.is('a')){event.preventDefault()}
if(!$target.is('li')){$target=$target.closest('li')}
unevenOffset=(_.slideCount%_.options.slidesToScroll!==0);indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case 'previous':slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide-slideOffset,!1,dontAnimate)}
break;case 'next':slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide+slideOffset,!1,dontAnimate)}
break;case 'index':var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),!1,dontAnimate);$target.children().trigger('focus');break;default:return}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1]}else{for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break}
prevNavigable=navigables[n]}}
return index};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$('li',_.$dots).off('click.slick',_.changeSlide).off('mouseenter.slick',$.proxy(_.interrupt,_,!0)).off('mouseleave.slick',$.proxy(_.interrupt,_,!1))}
_.$slider.off('focus.slick blur.slick');if(_.options.arrows===!0&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off('click.slick',_.changeSlide);_.$nextArrow&&_.$nextArrow.off('click.slick',_.changeSlide)}
_.$list.off('touchstart.slick mousedown.slick',_.swipeHandler);_.$list.off('touchmove.slick mousemove.slick',_.swipeHandler);_.$list.off('touchend.slick mouseup.slick',_.swipeHandler);_.$list.off('touchcancel.slick mouseleave.slick',_.swipeHandler);_.$list.off('click.slick',_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===!0){_.$list.off('keydown.slick',_.keyHandler)}
if(_.options.focusOnSelect===!0){$(_.$slideTrack).children().off('click.slick',_.selectHandler)}
$(window).off('orientationchange.slick.slick-'+_.instanceUid,_.orientationChange);$(window).off('resize.slick.slick-'+_.instanceUid,_.resize);$('[draggable!=true]',_.$slideTrack).off('dragstart',_.preventDefault);$(window).off('load.slick.slick-'+_.instanceUid,_.setPosition)};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off('mouseenter.slick',$.proxy(_.interrupt,_,!0));_.$list.off('mouseleave.slick',$.proxy(_.interrupt,_,!1))};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>1){originalSlides=_.$slides.children().children();originalSlides.removeAttr('style');_.$slider.empty().append(originalSlides)}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===!1){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault()}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$('.slick-cloned',_.$slider).detach();if(_.$dots){_.$dots.remove()}
if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove()}}
if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove()}}
if(_.$slides){_.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function(){$(this).attr('style',$(this).data('originalStyling'))});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides)}
_.cleanUpRows();_.$slider.removeClass('slick-slider');_.$slider.removeClass('slick-initialized');_.$slider.removeClass('slick-dotted');_.unslicked=!0;if(!refresh){_.$slider.trigger('destroy',[_])}};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]='';if(_.options.fade===!1){_.$slideTrack.css(transition)}else{_.$slides.eq(slide).css(transition)}};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===!1){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback){setTimeout(function(){_.disableTransition(slideIndex);callback.call()},_.options.speed)}}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===!1){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2})}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.focusHandler=function(){var _=this;_.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick','*:not(.slick-arrow)',function(event){event.stopImmediatePropagation();var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){_.focussed=$sf.is(':focus');_.autoPlay()}},0)})};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide};Slick.prototype.getDotCount=function(){var _=this;var breakPoint=0;var counter=0;var pagerQty=0;if(_.options.infinite===!0){if(_.slideCount<=_.options.slidesToShow){++pagerQty}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}}else if(_.options.centerMode===!0){pagerQty=_.slideCount}else if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll)}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}
return pagerQty-1};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(!0);if(_.options.infinite===!0){if(_.slideCount>_.options.slidesToShow){_.slideOffset=(_.slideWidth*_.options.slidesToShow)*-1;verticalOffset=(verticalHeight*_.options.slidesToShow)*-1}
if(_.slideCount%_.options.slidesToScroll!==0){if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow){if(slideIndex>_.slideCount){_.slideOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth)*-1;verticalOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight)*-1}else{_.slideOffset=((_.slideCount%_.options.slidesToScroll)*_.slideWidth)*-1;verticalOffset=((_.slideCount%_.options.slidesToScroll)*verticalHeight)*-1}}}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*_.slideWidth;verticalOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*verticalHeight}}
if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0}
if(_.options.centerMode===!0&&_.slideCount<=_.options.slidesToShow){_.slideOffset=((_.slideWidth*Math.floor(_.options.slidesToShow))/2)-((_.slideWidth*_.slideCount)/2)}else if(_.options.centerMode===!0&&_.options.infinite===!0){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth}else if(_.options.centerMode===!0){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)}
if(_.options.vertical===!1){targetLeft=((slideIndex*_.slideWidth)*-1)+_.slideOffset}else{targetLeft=((slideIndex*verticalHeight)*-1)+verticalOffset}
if(_.options.variableWidth===!0){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===!1){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex)}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow)}
if(_.options.rtl===!0){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else{targetLeft=0}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0}
if(_.options.centerMode===!0){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===!1){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex)}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow+1)}
if(_.options.rtl===!0){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else{targetLeft=0}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0}
targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2}}
return targetLeft};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option]};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===!1){max=_.slideCount}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2}
while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}
return indexes};Slick.prototype.getSlick=function(){return this};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,centerOffset;centerOffset=_.options.centerMode===!0?_.slideWidth*Math.floor(_.options.slidesToShow/2):0;if(_.options.swipeToSlide===!0){_.$slideTrack.find('.slick-slide').each(function(index,slide){if(slide.offsetLeft-centerOffset+($(slide).outerWidth()/2)>(_.swipeLeft*-1)){swipedSlide=slide;return!1}});slidesTraversed=Math.abs($(swipedSlide).attr('data-slick-index')-_.currentSlide)||1;return slidesTraversed}else{return _.options.slidesToScroll}};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:'index',index:parseInt(slide)}},dontAnimate)};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass('slick-initialized')){$(_.$slider).addClass('slick-initialized');_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(!0);_.focusHandler()}
if(creation){_.$slider.trigger('init',[_])}
if(_.options.accessibility===!0){_.initADA()}
if(_.options.autoplay){_.paused=!1;_.autoPlay()}};Slick.prototype.initADA=function(){var _=this;_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({'aria-hidden':'true','tabindex':'-1'}).find('a, input, button, select').attr({'tabindex':'-1'});_.$slideTrack.attr('role','listbox');_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i){$(this).attr('role','option');var describedBySlideId=_.options.centerMode?i:Math.floor(i/_.options.slidesToShow);if(_.options.dots===!0){$(this).attr('aria-describedby','slick-slide'+_.instanceUid+describedBySlideId+'')}});if(_.$dots!==null){_.$dots.attr('role','tablist').find('li').each(function(i){$(this).attr({'role':'presentation','aria-selected':'false','aria-controls':'navigation'+_.instanceUid+i+'','id':'slick-slide'+_.instanceUid+i+''})}).first().attr('aria-selected','true').end().find('button').attr('role','button').end().closest('div').attr('role','toolbar')}
_.activateADA()};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===!0&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off('click.slick').on('click.slick',{message:'previous'},_.changeSlide);_.$nextArrow.off('click.slick').on('click.slick',{message:'next'},_.changeSlide)}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===!0){$('li',_.$dots).on('click.slick',{message:'index'},_.changeSlide)}
if(_.options.dots===!0&&_.options.pauseOnDotsHover===!0){$('li',_.$dots).on('mouseenter.slick',$.proxy(_.interrupt,_,!0)).on('mouseleave.slick',$.proxy(_.interrupt,_,!1))}};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on('mouseenter.slick',$.proxy(_.interrupt,_,!0));_.$list.on('mouseleave.slick',$.proxy(_.interrupt,_,!1))}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on('touchstart.slick mousedown.slick',{action:'start'},_.swipeHandler);_.$list.on('touchmove.slick mousemove.slick',{action:'move'},_.swipeHandler);_.$list.on('touchend.slick mouseup.slick',{action:'end'},_.swipeHandler);_.$list.on('touchcancel.slick mouseleave.slick',{action:'end'},_.swipeHandler);_.$list.on('click.slick',_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===!0){_.$list.on('keydown.slick',_.keyHandler)}
if(_.options.focusOnSelect===!0){$(_.$slideTrack).children().on('click.slick',_.selectHandler)}
$(window).on('orientationchange.slick.slick-'+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on('resize.slick.slick-'+_.instanceUid,$.proxy(_.resize,_));$('[draggable!=true]',_.$slideTrack).on('dragstart',_.preventDefault);$(window).on('load.slick.slick-'+_.instanceUid,_.setPosition);$(_.setPosition)};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===!0&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show()}
if(_.options.dots===!0&&_.slideCount>_.options.slidesToShow){_.$dots.show()}};Slick.prototype.keyHandler=function(event){var _=this;if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')){if(event.keyCode===37&&_.options.accessibility===!0){_.changeSlide({data:{message:_.options.rtl===!0?'next':'previous'}})}else if(event.keyCode===39&&_.options.accessibility===!0){_.changeSlide({data:{message:_.options.rtl===!0?'previous':'next'}})}}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$('img[data-lazy]',imagesScope).each(function(){var image=$(this),imageSource=$(this).attr('data-lazy'),imageSrcSet=$(this).attr('data-srcset'),imageSizes=$(this).attr('data-sizes')||_.$slider.attr('data-sizes'),imageToLoad=document.createElement('img');imageToLoad.onload=function(){image.animate({opacity:0},100,function(){if(imageSrcSet){image.attr('srcset',imageSrcSet);if(imageSizes){image.attr('sizes',imageSizes)}}
image.attr('src',imageSource).animate({opacity:1},200,function(){image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading')});_.$slider.trigger('lazyLoaded',[_,image,imageSource])})};imageToLoad.onerror=function(){image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource])};imageToLoad.src=imageSource})}
if(_.options.centerMode===!0){if(_.options.infinite===!0){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===!0){if(rangeStart>0)rangeStart--;if(rangeEnd<=_.slideCount)rangeEnd++}}
loadRange=_.$slider.find('.slick-slide').slice(rangeStart,rangeEnd);if(_.options.lazyLoad==='anticipated'){var prevSlide=rangeStart-1,nextSlide=rangeEnd,$slides=_.$slider.find('.slick-slide');for(var i=0;i<_.options.slidesToScroll;i++){if(prevSlide<0)prevSlide=_.slideCount-1;loadRange=loadRange.add($slides.eq(prevSlide));loadRange=loadRange.add($slides.eq(nextSlide));prevSlide--;nextSlide++}}
loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find('.slick-slide');loadImages(cloneRange)}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find('.slick-cloned').slice(0,_.options.slidesToShow);loadImages(cloneRange)}else if(_.currentSlide===0){cloneRange=_.$slider.find('.slick-cloned').slice(_.options.slidesToShow*-1);loadImages(cloneRange)}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass('slick-loading');_.initUI();if(_.options.lazyLoad==='progressive'){_.progressiveLazyLoad()}};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:'next'}})};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition()};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=!0};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=!0;_.paused=!1;_.focussed=!1;_.interrupted=!1};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger('afterChange',[_,index]);_.animating=!1;if(_.slideCount>_.options.slidesToShow){_.setPosition()}
_.swipeLeft=null;if(_.options.autoplay){_.autoPlay()}
if(_.options.accessibility===!0){_.initADA()}}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:'previous'}})};Slick.prototype.preventDefault=function(event){event.preventDefault()};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$('img[data-lazy]',_.$slider),image,imageSource,imageSrcSet,imageSizes,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr('data-lazy');imageSrcSet=image.attr('data-srcset');imageSizes=image.attr('data-sizes')||_.$slider.attr('data-sizes');imageToLoad=document.createElement('img');imageToLoad.onload=function(){if(imageSrcSet){image.attr('srcset',imageSrcSet);if(imageSizes){image.attr('sizes',imageSizes)}}
image.attr('src',imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');if(_.options.adaptiveHeight===!0){_.setPosition()}
_.$slider.trigger('lazyLoaded',[_,image,imageSource]);_.progressiveLazyLoad()};imageToLoad.onerror=function(){if(tryCount<3){setTimeout(function(){_.progressiveLazyLoad(tryCount+1)},500)}else{image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);_.progressiveLazyLoad()}};imageToLoad.src=imageSource}else{_.$slider.trigger('allImagesLoaded',[_])}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;if(!_.options.infinite&&(_.currentSlide>lastVisibleIndex)){_.currentSlide=lastVisibleIndex}
if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0}
currentSlide=_.currentSlide;_.destroy(!0);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing){_.changeSlide({data:{message:'index',index:currentSlide}},!1)}};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==='array'&&responsiveSettings.length){_.respondTo=_.options.respondTo||'window';for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;if(responsiveSettings.hasOwnProperty(breakpoint)){currentBreakpoint=responsiveSettings[breakpoint].breakpoint;while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint){_.breakpoints.splice(l,1)}
l--}
_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings}}
_.breakpoints.sort(function(a,b){return(_.options.mobileFirst)?a-b:b-a})}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass('slick-slide');_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0){_.currentSlide=_.currentSlide-_.options.slidesToScroll}
if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0}
_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(!1,!0);if(_.options.focusOnSelect===!0){$(_.$slideTrack).children().on('click.slick',_.selectHandler)}
_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger('reInit',[_])};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked){_.setPosition()}},50)}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof(index)==='boolean'){removeBefore=index;index=removeBefore===!0?0:_.slideCount-1}else{index=removeBefore===!0?--index:index}
if(_.slideCount<1||index<0||index>_.slideCount-1){return!1}
_.unload();if(removeAll===!0){_.$slideTrack.children().remove()}else{_.$slideTrack.children(this.options.slide).eq(index).remove()}
_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===!0){position=-position}
x=_.positionProp=='left'?Math.ceil(position)+'px':'0px';y=_.positionProp=='top'?Math.ceil(position)+'px':'0px';positionProps[_.positionProp]=position;if(_.transformsEnabled===!1){_.$slideTrack.css(positionProps)}else{positionProps={};if(_.cssTransitions===!1){positionProps[_.animType]='translate('+x+', '+y+')';_.$slideTrack.css(positionProps)}else{positionProps[_.animType]='translate3d('+x+', '+y+', 0px)';_.$slideTrack.css(positionProps)}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===!1){if(_.options.centerMode===!0){_.$list.css({padding:('0px '+_.options.centerPadding)})}}else{_.$list.height(_.$slides.first().outerHeight(!0)*_.options.slidesToShow);if(_.options.centerMode===!0){_.$list.css({padding:(_.options.centerPadding+' 0px')})}}
_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===!1&&_.options.variableWidth===!1){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil((_.slideWidth*_.$slideTrack.children('.slick-slide').length)))}else if(_.options.variableWidth===!0){_.$slideTrack.width(5000*_.slideCount)}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(!0)*_.$slideTrack.children('.slick-slide').length)))}
var offset=_.$slides.first().outerWidth(!0)-_.$slides.first().width();if(_.options.variableWidth===!1)_.$slideTrack.children('.slick-slide').width(_.slideWidth-offset)};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=(_.slideWidth*index)*-1;if(_.options.rtl===!0){$(element).css({position:'relative',right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}else{$(element).css({position:'relative',left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1})};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===!0&&_.options.vertical===!1){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(!0);_.$list.css('height',targetHeight)}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){var _=this,l,item,option,value,refresh=!1,type;if($.type(arguments[0])==='object'){option=arguments[0];refresh=arguments[1];type='multiple'}else if($.type(arguments[0])==='string'){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==='responsive'&&$.type(arguments[1])==='array'){type='responsive'}else if(typeof arguments[1]!=='undefined'){type='single'}}
if(type==='single'){_.options[option]=value}else if(type==='multiple'){$.each(option,function(opt,val){_.options[opt]=val})}else if(type==='responsive'){for(item in value){if($.type(_.options.responsive)!=='array'){_.options.responsive=[value[item]]}else{l=_.options.responsive.length-1;while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint){_.options.responsive.splice(l,1)}
l--}
_.options.responsive.push(value[item])}}}
if(refresh){_.unload();_.reinit()}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===!1){_.setCSS(_.getLeft(_.currentSlide))}else{_.setFade()}
_.$slider.trigger('setPosition',[_])};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===!0?'top':'left';if(_.positionProp==='top'){_.$slider.addClass('slick-vertical')}else{_.$slider.removeClass('slick-vertical')}
if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined){if(_.options.useCSS===!0){_.cssTransitions=!0}}
if(_.options.fade){if(typeof _.options.zIndex==='number'){if(_.options.zIndex<3){_.options.zIndex=3}}else{_.options.zIndex=_.defaults.zIndex}}
if(bodyStyle.OTransform!==undefined){_.animType='OTransform';_.transformType='-o-transform';_.transitionType='OTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=!1}
if(bodyStyle.MozTransform!==undefined){_.animType='MozTransform';_.transformType='-moz-transform';_.transitionType='MozTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined)_.animType=!1}
if(bodyStyle.webkitTransform!==undefined){_.animType='webkitTransform';_.transformType='-webkit-transform';_.transitionType='webkitTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=!1}
if(bodyStyle.msTransform!==undefined){_.animType='msTransform';_.transformType='-ms-transform';_.transitionType='msTransition';if(bodyStyle.msTransform===undefined)_.animType=!1}
if(bodyStyle.transform!==undefined&&_.animType!==!1){_.animType='transform';_.transformType='transform';_.transitionType='transition'}
_.transformsEnabled=_.options.useTransform&&(_.animType!==null&&_.animType!==!1)};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden','true');_.$slides.eq(index).addClass('slick-current');if(_.options.centerMode===!0){centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===!0){if(index>=centerOffset&&index<=(_.slideCount-1)-centerOffset){_.$slides.slice(index-centerOffset,index+centerOffset+1).addClass('slick-active').attr('aria-hidden','false')}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1,indexOffset+centerOffset+2).addClass('slick-active').attr('aria-hidden','false')}
if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass('slick-center')}else if(index===_.slideCount-1){allSlides.eq(_.options.slidesToShow).addClass('slick-center')}}
_.$slides.eq(index).addClass('slick-center')}else{if(index>=0&&index<=(_.slideCount-_.options.slidesToShow)){_.$slides.slice(index,index+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false')}else if(allSlides.length<=_.options.slidesToShow){allSlides.addClass('slick-active').attr('aria-hidden','false')}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===!0?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&(_.slideCount-index)<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass('slick-active').attr('aria-hidden','false')}else{allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false')}}}
if(_.options.lazyLoad==='ondemand'||_.options.lazyLoad==='anticipated'){_.lazyLoad()}};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===!0){_.options.centerMode=!1}
if(_.options.infinite===!0&&_.options.fade===!1){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===!0){infiniteCount=_.options.slidesToShow+1}else{infiniteCount=_.options.slidesToShow}
for(i=_.slideCount;i>(_.slideCount-infiniteCount);i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(!0).attr('id','').attr('data-slick-index',slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned')}
for(i=0;i<infiniteCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(!0).attr('id','').attr('data-slick-index',slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned')}
_.$slideTrack.find('.slick-cloned').find('[id]').each(function(){$(this).attr('id','')})}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle){_.autoPlay()}
_.interrupted=toggle};Slick.prototype.selectHandler=function(event){var _=this;var targetElement=$(event.target).is('.slick-slide')?$(event.target):$(event.target).parents('.slick-slide');var index=parseInt(targetElement.attr('data-slick-index'));if(!index)index=0;if(_.slideCount<=_.options.slidesToShow){_.slideHandler(index,!1,!0);return}
_.slideHandler(index)};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||!1;if(_.animating===!0&&_.options.waitForAnimate===!0){return}
if(_.options.fade===!0&&_.currentSlide===index){return}
if(sync===!1){_.asNavFor(index)}
targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===!1&&_.options.centerMode===!1&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===!1){targetSlide=_.currentSlide;if(dontAnimate!==!0){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else{_.postSlide(targetSlide)}}
return}else if(_.options.infinite===!1&&_.options.centerMode===!0&&(index<0||index>(_.slideCount-_.options.slidesToScroll))){if(_.options.fade===!1){targetSlide=_.currentSlide;if(dontAnimate!==!0){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else{_.postSlide(targetSlide)}}
return}
if(_.options.autoplay){clearInterval(_.autoPlayTimer)}
if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-(_.slideCount%_.options.slidesToScroll)}else{animSlide=_.slideCount+targetSlide}}else if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0}else{animSlide=targetSlide-_.slideCount}}else{animSlide=targetSlide}
_.animating=!0;_.$slider.trigger('beforeChange',[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick('getSlick');if(navTarget.slideCount<=navTarget.options.slidesToShow){navTarget.setSlideClasses(_.currentSlide)}}
_.updateDots();_.updateArrows();if(_.options.fade===!0){if(dontAnimate!==!0){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide)})}else{_.postSlide(animSlide)}
_.animateHeight();return}
if(dontAnimate!==!0){_.animateSlide(targetLeft,function(){_.postSlide(animSlide)})}else{_.postSlide(animSlide)}};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===!0&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide()}
if(_.options.dots===!0&&_.slideCount>_.options.slidesToShow){_.$dots.hide()}
_.$slider.addClass('slick-loading')};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0){swipeAngle=360-Math.abs(swipeAngle)}
if((swipeAngle<=45)&&(swipeAngle>=0)){return(_.options.rtl===!1?'left':'right')}
if((swipeAngle<=360)&&(swipeAngle>=315)){return(_.options.rtl===!1?'left':'right')}
if((swipeAngle>=135)&&(swipeAngle<=225)){return(_.options.rtl===!1?'right':'left')}
if(_.options.verticalSwiping===!0){if((swipeAngle>=35)&&(swipeAngle<=135)){return'down'}else{return'up'}}
return'vertical'};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=!1;_.swiping=!1;if(_.scrolling){_.scrolling=!1;return!1}
_.interrupted=!1;_.shouldClick=(_.touchObject.swipeLength>10)?!1:!0;if(_.touchObject.curX===undefined){return!1}
if(_.touchObject.edgeHit===!0){_.$slider.trigger('edge',[_,_.swipeDirection()])}
if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case 'left':case 'down':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case 'right':case 'up':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:}
if(direction!='vertical'){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger('swipe',[_,direction])}}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={}}}};Slick.prototype.swipeHandler=function(event){var _=this;if((_.options.swipe===!1)||('ontouchend' in document&&_.options.swipe===!1)){return}else if(_.options.draggable===!1&&event.type.indexOf('mouse')!==-1){return}
_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===!0){_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold}
switch(event.data.action){case 'start':_.swipeStart(event);break;case 'move':_.swipeMove(event);break;case 'end':_.swipeEnd(event);break}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=!1,curLeft,swipeDirection,swipeLength,positionOffset,touches,verticalSwipeLength;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||_.scrolling||touches&&touches.length!==1){return!1}
curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));verticalSwipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));if(!_.options.verticalSwiping&&!_.swiping&&verticalSwipeLength>4){_.scrolling=!0;return!1}
if(_.options.verticalSwiping===!0){_.touchObject.swipeLength=verticalSwipeLength}
swipeDirection=_.swipeDirection();if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4){_.swiping=!0;event.preventDefault()}
positionOffset=(_.options.rtl===!1?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===!0){positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1}
swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=!1;if(_.options.infinite===!1){if((_.currentSlide===0&&swipeDirection==='right')||(_.currentSlide>=_.getDotCount()&&swipeDirection==='left')){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=!0}}
if(_.options.vertical===!1){_.swipeLeft=curLeft+swipeLength*positionOffset}else{_.swipeLeft=curLeft+(swipeLength*(_.$list.height()/_.listWidth))*positionOffset}
if(_.options.verticalSwiping===!0){_.swipeLeft=curLeft+swipeLength*positionOffset}
if(_.options.fade===!0||_.options.touchMove===!1){return!1}
if(_.animating===!0){_.swipeLeft=null;return!1}
_.setCSS(_.swipeLeft)};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=!0;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return!1}
if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined){touches=event.originalEvent.touches[0]}
_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=!0};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.unload=function(){var _=this;$('.slick-cloned',_.$slider).remove();if(_.$dots){_.$dots.remove()}
if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove()}
if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove()}
_.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden','true').css('width','')};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger('unslick',[_,fromBreakpoint]);_.destroy()};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===!0&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');if(_.currentSlide===0){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false')}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===!1){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false')}else if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===!0){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false')}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find('li').removeClass('slick-active').attr('aria-hidden','true');_.$dots.find('li').eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden','false')}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay){if(document[_.hidden]){_.interrupted=!0}else{_.interrupted=!1}}};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(typeof opt=='object'||typeof opt=='undefined')
_[i].slick=new Slick(_[i],opt);else ret=_[i].slick[opt].apply(_[i].slick,args);if(typeof ret!='undefined')return ret}
return _}}));$(function(){if($('.header_bottom.ybc_float_header').length>0){if($('#header.layout_2').length>0||('#header.layout_3').length>0){if($('.ybc-menu-wrapper').length>0){var sticky_navigation_offset_top=$('.ybc-menu-wrapper').offset().top}}else{var sticky_navigation_offset_top=$('.main-menu').offset().top}
var headerFloatingHeight=$('.main-menu').height();var sticky_navigation=function(){var scroll_top=$(window).scrollTop();if(scroll_top>sticky_navigation_offset_top){if($(window).width()>=992){$('.main-menu').addClass('scroll_heading').css({'position':'fixed','z-index':'10'});$('#header').css({'margin-bottom':''+headerFloatingHeight+'px'});$('.main-menu').addClass('has_fixed');$('.header_style_1 .ybc-menu-main-content').slideUp(0)}}else{$('.main-menu').removeClass('scroll_heading').css({'position':'relative','z-index':'0'});$('#header').css({'margin-bottom':'0px'});$('.main-menu').removeClass('has_fixed');if($(window).width()>1199){$('#index .header_style_1 .ybc-menu-main-content').slideDown(0)}else{$('#index .header_style_1 .ybc-menu-main-content').slideUp(0)}}};sticky_navigation();$(window).scroll(function(){sticky_navigation()})}});$(window).resize(function(){if($(window).width()<768){$('.ybc_custom_float_header').addClass('no_scroll_heading');$('#header').addClass('no_scroll_header')}else{$('.ybc_custom_float_header').removeClass('no_scroll_heading');$('#header').removeClass('no_scroll_header')}});$(document).ready(function(){$(document).on('click','.header_bottom.scroll_heading .ybc-menu-toggle',function(){if($(window).width()>767&&$(window).width()<992){$(this).parent().find('#ybc-menu-main-content').toggleClass('floating_active')}
return!1});if($(window).width()<768){$('.ybc_custom_float_header').addClass('no_scroll_heading');$('#header').addClass('no_scroll_header')}else{$('.ybc_custom_float_header').removeClass('no_scroll_heading');$('#header').removeClass('no_scroll_header')}});$(document).ready(function(){});$(document).ready(function(){$('.ybc_select_option li').click(function(){var clickObj=$(this);if(!$(this).parent('ul').hasClass('active')){$(this).parent('ul').addClass('active');$('.ybc-theme-panel-loading').show();$.ajax({url:YBC_TC_AJAX_URL,type:'post',dataType:'json',data:{'newConfigVal':$(this).data('val'),'configName':$(this).parent('ul').attr('id')},success:function(json){if(json.success){clickObj.parent('ul').find('li').removeClass('active');clickObj.addClass('active');if($('body').hasClass(json.oldClass)&&!json.noReplace){$('body').removeClass(json.oldClass);$('body').addClass(json.newClass)}
if(json.logo){$('a img.logo').attr('src',json.logo)}
if(json.reload)
location.reload()}else alert(json.error);$('.ybc-theme-panel-loading').fadeOut();$('.ybc_select_option').removeClass('active')},error:function(){$('.ybc-theme-panel-loading').fadeOut();$('.ybc_select_option').removeClass('active')}})}});$('.ybc-theme-panel-bg').click(function(){clickObj=this;$('.ybc-theme-panel-loading').show();$.ajax({url:YBC_TC_AJAX_URL,type:'post',dataType:'json',data:{'newConfigVal':$(this).attr('rel'),'configName':'YBC_TC_BG_IMG'},success:function(json){if(json.success){if($('body').hasClass(json.oldClass)){$('body').removeClass(json.oldClass);$('body').addClass(json.newClass);$('.ybc-theme-panel-bg').removeClass('active');$(clickObj).addClass('active')}}else alert(json.error);$('.ybc-theme-panel-loading').fadeOut()},error:function(){$('.ybc-theme-panel-loading').fadeOut()}})});$('#tc-reset').click(function(){$('.ybc-theme-panel-loading').show();$.ajax({url:YBC_TC_AJAX_URL,type:'post',dataType:'json',data:{tcreset:'yes'},success:function(json){$('.ybc-theme-panel-loading').fadeOut();location.reload()},error:function(){$('.ybc-theme-panel-loading').fadeOut();location.reload()}})});$('.ybc-theme-panel-btn').click(function(){if(!$('.ybc-theme-panel').hasClass('moving')){if($('.ybc-theme-panel').hasClass('closed')){$('.ybc-theme-panel').addClass('moving');$('.ybc-theme-panel').animate({'left':0},1000,function(){$('.ybc-theme-panel').removeClass('moving');$('.ybc-theme-panel').removeClass('closed')})}else{$('.ybc-theme-panel').addClass('moving');$('.ybc-theme-panel').animate({'left':'-302px'},1000,function(){$('.ybc-theme-panel').removeClass('moving');$('.ybc-theme-panel').addClass('closed')})}}})});/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),Math.abs(b)>1?c:d}var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.options.defer===!1&&this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&b<0?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});$(document).ready(function(){$('.ets_clock').each(function(){var id_ets_product=$(this).data('id-product');var date_to=$(this).data('date-to');if(date_to!=""&&parseInt(id_ets_product)>0){$(this).countdown(date_to).on('update.countdown',function(event){var d=(event.offset.totalDays>1?event.offset.totalDays+' <span class="number">'+days+'</span> ':event.offset.totalDays+' <span class="number">'+day+'</span>');var h=(event.offset.hours>1?event.offset.hours+' <span class="number">'+hrs+'</span> ':event.offset.hours+' <span class="number">'+hr+'</span>');var m=(event.offset.minutes>1?event.offset.minutes+' <span class="number">'+mins+'</span> ':event.offset.minutes+' <span class="number">'+min+'</span>');var s=(event.offset.seconds>1?event.offset.seconds+' <span class="number">'+secs+'</span> ':event.offset.seconds+' <span class="number">'+sec+'</span>');var $this=$(this).html(event.strftime(''+'<span class = "ybc_cd_item">'+d+'</span> '+'<span class = "ybc_cd_item">'+h+'</span> '+'<span class = "ybc_cd_item">'+m+'</span> '+'<span class = "ybc_cd_item">'+s+'</span> '))});$(this).addClass('active')}});var $owl=$('.ets-product-specific');$owl.owlCarousel({items:1,responsive:{0:{items:1},480:{items:1,margin:30,},768:{items:1}},nav:!0,loop:$(".ets-product-specific .product-miniature").length>1,rewindNav:!1,dots:!1,margin:0,navText:['',''],callbacks:!0,})});/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 */
jQuery.fn.rating=function(generalOptions){const $ratings=$(this);$ratings.each(function initRating(){const $ratingComponent=$(this);var options=generalOptions?generalOptions:{};if(!options.grade&&$ratingComponent.data('grade')){options.grade=$ratingComponent.data('grade')}
if(!options.min&&$ratingComponent.data('min')){options.min=$ratingComponent.data('min')}
if(!options.max&&$ratingComponent.data('max')){options.max=$ratingComponent.data('max')}
if(!options.input&&$ratingComponent.data('input')){options.input=$ratingComponent.data('input')}
var componentOptions=jQuery.extend({grade:null,input:null,min:1,max:5,starWidth:20},options);const minValue=Math.min(componentOptions.min,componentOptions.max);const maxValue=Math.max(componentOptions.min,componentOptions.max);const ratingValue=Math.min(Math.max(minValue,componentOptions.grade),maxValue);$ratingComponent.html('');$ratingComponent.append('<div class="star-content star-empty clearfix"></div>');$ratingComponent.append('<div class="star-content star-full clearfix"></div>');const emptyStars=$('.star-empty',this);const fullStars=$('.star-full',this);const emptyStar=$('<div class="star"></div>');const fullStar=$('<div class="star-on"></div>');var ratingInput;if(componentOptions.input){ratingInput=$('<input type="number" name="'+componentOptions.input+'" id="'+componentOptions.input+'" />');ratingInput.val(ratingValue);ratingInput.css('display','none');ratingInput.change(displayInteractiveGrade);$ratingComponent.append(ratingInput);initInteractiveGrade()}else{displayGrade(ratingValue)}
function initInteractiveGrade(){emptyStars.html('');fullStars.html('');var newStar;for(var i=minValue;i<=maxValue;++i){newStar=emptyStar.clone();newStar.data('grade',i);newStar.hover(function overStar(){var overIndex=$('.star',fullStars).index($(this));$('.star',fullStars).each(function overStars(){$(this).removeClass('star-on');var starIndex=$('.star',fullStars).index($(this));if(starIndex<=overIndex){$(this).addClass('star-hover')}else{$(this).removeClass('star-hover')}})});newStar.click(function selectGrade(){var selectedGrade=$(this).data('grade');ratingInput.val(selectedGrade)});fullStars.append(newStar)}
fullStars.hover(function(){},displayInteractiveGrade);displayInteractiveGrade()}
function displayInteractiveGrade(){$('.star',fullStars).each(function displayStar(){var starValue=$(this).data('grade');$(this).removeClass('star-hover');if(starValue<=ratingInput.val()){$(this).addClass('star-on')}else{$(this).removeClass('star-on')}})}
function displayGrade(grade){emptyStars.html('');fullStars.html('');var newStar;for(var i=minValue;i<=maxValue;++i){if(i<=Math.floor(grade)){newStar=emptyStar.clone();newStar.css('visibility','hidden');emptyStars.append(newStar);fullStars.append(fullStar.clone())}else if(i>Math.ceil(grade)){newStar=emptyStar.clone();emptyStars.append(newStar.clone())}else{var fullWidth=(grade-i+1)*componentOptions.starWidth;var emptyWidth=componentOptions.starWidth-fullWidth;newStar=emptyStar.clone();newStar.css('visibility','hidden');newStar.css('width',fullWidth);emptyStars.append(newStar);newStar=emptyStar.clone();newStar.css('width',emptyWidth);newStar.css('background-position','0px -'+fullWidth+'px');newStar.css('background-position','-'+fullWidth+'px 0px');newStar.css('marginLeft',0);emptyStars.append(newStar);fullStar.css('width',fullWidth);fullStars.append(fullStar.clone())}}}})};/**
 * 2007-2019 PrestaShop SA and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
$(document).ready(function(){productListingComments.init();productListingComments.load()});var productListingComments=(function(){var data={productIDs:[],commentsLoadingInProgress:!1,ajaxIDsLimit:50,ajaxUrl:''}
var DOMStrings={productListReviewsContainer:'.product-list-reviews',productListReviewsNumberOfComments:'.comments-nb',productListReviewsStarsContainer:'.grade-stars',productContainer:'.thumbnail-container'};var DOMClasses={inProgress:'reviews-loading',reviewsLoaded:'reviews-loaded',hasReviews:'has-reviews'};function setEvents(){prestashop.on('updateProductList',function(){addProductsIDs()})}
function setAjaxUrl(){if(data.ajaxUrl!=='')
return;var url=$(DOMStrings.productListReviewsContainer).first().data('url');data.ajaxUrl=url}
function getNewProductsReviewsElements(){var $productListReviews=$(DOMStrings.productContainer).not('.'+DOMClasses.reviewsLoaded+', .'+DOMClasses.inProgress).addClass(DOMClasses.inProgress).find(DOMStrings.productListReviewsContainer);return $productListReviews}
function addProductsIDs(){var $productsList=getNewProductsReviewsElements(),seenIds={};$productsList.each(function(){var id=$(this).data('id');seenIds[id]=!0});var IDsArray=Object.keys(seenIds);var prevDataIDs=data.productIDs.splice(0);data.productIDs=prevDataIDs.concat(IDsArray);if(!data.commentsLoadingInProgress){loadProductsData()}}
function loadProductsData(){if(data.productIDs.length===0)
return;data.commentsLoadingInProgress=!0;var dataIDsCopy=data.productIDs.slice(0);selectedProductIDs=dataIDsCopy.splice(0,data.ajaxIDsLimit);$.get(data.ajaxUrl,{id_products:selectedProductIDs},function(jsonData){if(jsonData){$.each(jsonData.products,function(i,elem){var productData=elem;var $productsReviewsContainer=$('.product-list-reviews[data-id="'+productData.id_product+'"]');$productsReviewsContainer.each(function(){var $self=$(this);if(productData.comments_nb>0){$self.find(DOMStrings.productListReviewsStarsContainer).rating({grade:productData.average_grade,starWidth:16});$self.find(DOMStrings.productListReviewsNumberOfComments).text('('+productData.comments_nb+')');$self.closest(DOMStrings.productContainer).addClass(DOMClasses.hasReviews);$self.css('visibility','visible')}
$self.closest(DOMStrings.productContainer).addClass(DOMClasses.reviewsLoaded);$self.closest(DOMStrings.productContainer).removeClass(DOMClasses.inProgress)});data.productIDs.shift()});data.commentsLoadingInProgress=!1;if(data.productIDs.length>0){loadProductsData()}}})}
return{load:function(){addProductsIDs()},init:function(){setAjaxUrl();setEvents()}}})();/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
/**
 * 2007-2020 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var a=new r.default;window.WishlistEventBus=a,i.default.emit("wishlistEventBusInit"),t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.prototype.toString;e.prototype.toJSON=t,e.prototype.inspect=t,i.default&&(e.prototype[i.default]=t)};var r,i=(r=n(131))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){"function"==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e.prototype,Symbol.toStringTag,{get:function(){return this.constructor.name}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Boolean(e&&"function"==typeof e.then)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateSchema=y,t.assertValidSchema=function(e){var t=y(e);if(0!==t.length)throw new Error(t.map((function(e){return e.message})).join("\n\n"))};var r=v(n(57)),i=v(n(71)),o=v(n(16)),a=v(n(42)),u=v(n(9)),s=n(4),c=n(134),l=n(72),f=n(17),p=n(21),d=n(35),h=n(8);function v(e){return e&&e.__esModule?e:{default:e}}function y(e){if((0,d.assertSchema)(e),e.__validationErrors)return e.__validationErrors;var t=new m(e);!function(e){var t=e.schema,n=t.getQueryType();n?(0,h.isObjectType)(n)||e.reportError("Query root type must be Object type, it cannot be ".concat((0,u.default)(n),"."),g(t,n,"query")):e.reportError("Query root type must be provided.",t.astNode);var r=t.getMutationType();r&&!(0,h.isObjectType)(r)&&e.reportError("Mutation root type must be Object type if provided, it cannot be "+"".concat((0,u.default)(r),"."),g(t,r,"mutation"));var i=t.getSubscriptionType();i&&!(0,h.isObjectType)(i)&&e.reportError("Subscription root type must be Object type if provided, it cannot be "+"".concat((0,u.default)(i),"."),g(t,i,"subscription"))}(t),function(e){for(var t=0,n=e.schema.getDirectives();t<n.length;t++){var r=n[t];if((0,f.isDirective)(r)){b(e,r);for(var i=Object.create(null),o=function(t,n){var o=n[t],a=o.name;if(b(e,o),i[a])return e.reportError("Argument @".concat(r.name,"(").concat(a,":) can only be defined once."),r.astNode&&r.args.filter((function(e){return e.name===a})).map((function(e){return e.astNode}))),"continue";i[a]=!0,(0,h.isInputType)(o.type)||e.reportError("The type of @".concat(r.name,"(").concat(a,":) must be Input Type ")+"but got: ".concat((0,u.default)(o.type),"."),o.astNode)},a=0,s=r.args;a<s.length;a++)o(a,s)}else e.reportError("Expected directive but got: ".concat((0,u.default)(r),"."),r&&r.astNode)}}(t),function(e){for(var t=function(e){var t=Object.create(null),n=[],r=Object.create(null);return function i(a){if(t[a.name])return;t[a.name]=!0,r[a.name]=n.length;for(var u=(0,o.default)(a.getFields()),s=0;s<u.length;s++){var c=u[s];if((0,h.isNonNullType)(c.type)&&(0,h.isInputObjectType)(c.type.ofType)){var l=c.type.ofType,f=r[l.name];if(n.push(c),void 0===f)i(l);else{var p=n.slice(f),d=p.map((function(e){return e.name})).join(".");e.reportError('Cannot reference Input Object "'.concat(l.name,'" within itself through a series of non-null fields: "').concat(d,'".'),p.map((function(e){return e.astNode})))}n.pop()}}r[a.name]=void 0}}(e),n=e.schema.getTypeMap(),r=0,i=(0,o.default)(n);r<i.length;r++){var a=i[r];(0,h.isNamedType)(a)?((0,p.isIntrospectionType)(a)||b(e,a),(0,h.isObjectType)(a)?(T(e,a),_(e,a)):(0,h.isInterfaceType)(a)?T(e,a):(0,h.isUnionType)(a)?E(e,a):(0,h.isEnumType)(a)?N(e,a):(0,h.isInputObjectType)(a)&&(w(e,a),t(a))):e.reportError("Expected GraphQL named type but got: ".concat((0,u.default)(a),"."),a&&a.astNode)}}(t);var n=t.getErrors();return e.__validationErrors=n,n}var m=function(){function e(e){this._errors=[],this.schema=e}var t=e.prototype;return t.reportError=function(e,t){var n=Array.isArray(t)?t.filter(Boolean):t;this.addError(new s.GraphQLError(e,n))},t.addError=function(e){this._errors.push(e)},t.getErrors=function(){return this._errors},e}();function g(e,t,n){for(var r=I(e,(function(e){return e.operationTypes})),i=0;i<r.length;i++){var o=r[i];if(o.operation===n)return o.type}return t.astNode}function b(e,t){if(-1===e.schema.__allowedLegacyNames.indexOf(t.name)){var n=(0,c.isValidNameError)(t.name,t.astNode||void 0);n&&e.addError(n)}}function T(e,t){var n=(0,o.default)(t.getFields());0===n.length&&e.reportError("Type ".concat(t.name," must define one or more fields."),S(t));for(var r=0;r<n.length;r++){var i=n[r];b(e,i),(0,h.isOutputType)(i.type)||e.reportError("The type of ".concat(t.name,".").concat(i.name," must be Output Type ")+"but got: ".concat((0,u.default)(i.type),"."),i.astNode&&i.astNode.type);for(var a=Object.create(null),s=function(n,r){var o=r[n],s=o.name;b(e,o),a[s]&&e.reportError("Field argument ".concat(t.name,".").concat(i.name,"(").concat(s,":) can only be defined once."),i.args.filter((function(e){return e.name===s})).map((function(e){return e.astNode}))),a[s]=!0,(0,h.isInputType)(o.type)||e.reportError("The type of ".concat(t.name,".").concat(i.name,"(").concat(s,":) must be Input ")+"Type but got: ".concat((0,u.default)(o.type),"."),o.astNode&&o.astNode.type)},c=0,l=i.args;c<l.length;c++)s(c,l)}}function _(e,t){for(var n=Object.create(null),r=0,i=t.getInterfaces();r<i.length;r++){var o=i[r];(0,h.isInterfaceType)(o)?n[o.name]?e.reportError("Type ".concat(t.name," can only implement ").concat(o.name," once."),j(t,o)):(n[o.name]=!0,O(e,t,o)):e.reportError("Type ".concat((0,u.default)(t)," must only implement Interface types, ")+"it cannot implement ".concat((0,u.default)(o),"."),j(t,o))}}function O(e,t,n){for(var i=t.getFields(),o=n.getFields(),s=0,c=(0,a.default)(o);s<c.length;s++){var f=c[s],p=f[0],d=f[1],v=i[p];if(v){(0,l.isTypeSubTypeOf)(e.schema,v.type,d.type)||e.reportError("Interface field ".concat(n.name,".").concat(p," expects type ")+"".concat((0,u.default)(d.type)," but ").concat(t.name,".").concat(p," ")+"is type ".concat((0,u.default)(v.type),"."),[d.astNode&&d.astNode.type,v.astNode&&v.astNode.type]);for(var y=function(i,o){var a=o[i],s=a.name,c=(0,r.default)(v.args,(function(e){return e.name===s}));if(!c)return e.reportError("Interface field argument ".concat(n.name,".").concat(p,"(").concat(s,":) expected but ").concat(t.name,".").concat(p," does not provide it."),[a.astNode,v.astNode]),"continue";(0,l.isEqualType)(a.type,c.type)||e.reportError("Interface field argument ".concat(n.name,".").concat(p,"(").concat(s,":) ")+"expects type ".concat((0,u.default)(a.type)," but ")+"".concat(t.name,".").concat(p,"(").concat(s,":) is type ")+"".concat((0,u.default)(c.type),"."),[a.astNode&&a.astNode.type,c.astNode&&c.astNode.type])},m=0,g=d.args;m<g.length;m++)y(m,g);for(var b=function(i,o){var a=o[i],u=a.name;!(0,r.default)(d.args,(function(e){return e.name===u}))&&(0,h.isRequiredArgument)(a)&&e.reportError("Object field ".concat(t.name,".").concat(p," includes required argument ").concat(u," that is missing from the Interface field ").concat(n.name,".").concat(p,"."),[a.astNode,d.astNode])},T=0,_=v.args;T<_.length;T++)b(T,_)}else e.reportError("Interface field ".concat(n.name,".").concat(p," expected but ").concat(t.name," does not provide it."),[d.astNode].concat(S(t)))}}function E(e,t){var n=t.getTypes();0===n.length&&e.reportError("Union type ".concat(t.name," must define one or more member types."),S(t));for(var r=Object.create(null),i=0;i<n.length;i++){var o=n[i];r[o.name]?e.reportError("Union type ".concat(t.name," can only include type ").concat(o.name," once."),k(t,o.name)):(r[o.name]=!0,(0,h.isObjectType)(o)||e.reportError("Union type ".concat(t.name," can only include Object types, ")+"it cannot include ".concat((0,u.default)(o),"."),k(t,String(o))))}}function N(e,t){var n=t.getValues();0===n.length&&e.reportError("Enum type ".concat(t.name," must define one or more values."),S(t));for(var r=0;r<n.length;r++){var i=n[r],o=i.name;b(e,i),"true"!==o&&"false"!==o&&"null"!==o||e.reportError("Enum type ".concat(t.name," cannot include value: ").concat(o,"."),i.astNode)}}function w(e,t){var n=(0,o.default)(t.getFields());0===n.length&&e.reportError("Input Object type ".concat(t.name," must define one or more fields."),S(t));for(var r=0;r<n.length;r++){var i=n[r];b(e,i),(0,h.isInputType)(i.type)||e.reportError("The type of ".concat(t.name,".").concat(i.name," must be Input Type ")+"but got: ".concat((0,u.default)(i.type),"."),i.astNode&&i.astNode.type)}}function S(e){var t=e.astNode,n=e.extensionASTNodes;return t?n?[t].concat(n):[t]:n||[]}function I(e,t){return(0,i.default)(S(e),(function(e){return t(e)||[]}))}function j(e,t){return I(e,(function(e){return e.interfaces})).filter((function(e){return e.name.value===t.name}))}function k(e,t){return I(e,(function(e){return e.types})).filter((function(e){return e.name.value===t}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=Array.prototype.flatMap,i=r?function(e,t){return r.call(e,t)}:function(e,t){for(var n=[],r=0;r<e.length;r++){var i=t(e[r]);Array.isArray(i)?n=n.concat(i):n.push(i)}return n};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isEqualType=function e(t,n){if(t===n)return!0;if((0,r.isNonNullType)(t)&&(0,r.isNonNullType)(n))return e(t.ofType,n.ofType);if((0,r.isListType)(t)&&(0,r.isListType)(n))return e(t.ofType,n.ofType);return!1},t.isTypeSubTypeOf=function e(t,n,i){if(n===i)return!0;if((0,r.isNonNullType)(i))return!!(0,r.isNonNullType)(n)&&e(t,n.ofType,i.ofType);if((0,r.isNonNullType)(n))return e(t,n.ofType,i);if((0,r.isListType)(i))return!!(0,r.isListType)(n)&&e(t,n.ofType,i.ofType);if((0,r.isListType)(n))return!1;if((0,r.isAbstractType)(i)&&(0,r.isObjectType)(n)&&t.isPossibleType(i,n))return!0;return!1},t.doTypesOverlap=function(e,t,n){if(t===n)return!0;if((0,r.isAbstractType)(t))return(0,r.isAbstractType)(n)?e.getPossibleTypes(t).some((function(t){return e.isPossibleType(n,t)})):e.isPossibleType(t,n);if((0,r.isAbstractType)(n))return e.isPossibleType(n,t);return!1};var r=n(8)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.astFromValue=function e(t,n){if((0,p.isNonNullType)(n)){var d=e(t,n.ofType);return d&&d.kind===l.Kind.NULL?null:d}if(null===t)return{kind:l.Kind.NULL};if((0,s.default)(t))return null;if((0,p.isListType)(n)){var v=n.ofType;if((0,r.isCollection)(t)){var y=[];return(0,r.forEach)(t,(function(t){var n=e(t,v);n&&y.push(n)})),{kind:l.Kind.LIST,values:y}}return e(t,v)}if((0,p.isInputObjectType)(n)){if(!(0,c.default)(t))return null;for(var m=[],g=0,b=(0,i.default)(n.getFields());g<b.length;g++){var T=b[g],_=e(t[T.name],T.type);_&&m.push({kind:l.Kind.OBJECT_FIELD,name:{kind:l.Kind.NAME,value:T.name},value:_})}return{kind:l.Kind.OBJECT,fields:m}}if((0,p.isLeafType)(n)){var O=n.serialize(t);if((0,u.default)(O))return null;if("boolean"==typeof O)return{kind:l.Kind.BOOLEAN,value:O};if("number"==typeof O){var E=String(O);return h.test(E)?{kind:l.Kind.INT,value:E}:{kind:l.Kind.FLOAT,value:E}}if("string"==typeof O)return(0,p.isEnumType)(n)?{kind:l.Kind.ENUM,value:O}:n===f.GraphQLID&&h.test(O)?{kind:l.Kind.INT,value:O}:{kind:l.Kind.STRING,value:O};throw new TypeError("Cannot convert value to AST: ".concat((0,o.default)(O)))}(0,a.default)(!1,"Unexpected input type: "+(0,o.default)(n))};var r=n(33),i=d(n(16)),o=d(n(9)),a=d(n(15)),u=d(n(133)),s=d(n(55)),c=d(n(24)),l=n(11),f=n(25),p=n(8);function d(e){return e&&e.__esModule?e:{default:e}}var h=/^-?(?:0|[1-9][0-9]*)$/},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getVariableValues=function(e,t,n,r){var i=r&&r.maxErrors,s=[];try{var h=function(e,t,n,r){for(var i={},s=function(s){var h=t[s],v=h.variable.name.value,m=(0,f.typeFromAST)(e,h.type);if(!(0,l.isInputType)(m)){var g=(0,c.print)(h.type);return r(new u.GraphQLError('Variable "$'.concat(v,'" expected value of type "').concat(g,'" which cannot be used as an input type.'),h.type)),"continue"}if(!y(n,v)){if(h.defaultValue)i[v]=(0,p.valueFromAST)(h.defaultValue,m);else if((0,l.isNonNullType)(m)){var b=(0,o.default)(m);r(new u.GraphQLError('Variable "$'.concat(v,'" of required type "').concat(b,'" was not provided.'),h))}return"continue"}var T=n[v];if(null===T&&(0,l.isNonNullType)(m)){var _=(0,o.default)(m);return r(new u.GraphQLError('Variable "$'.concat(v,'" of non-null type "').concat(_,'" must not be null.'),h)),"continue"}i[v]=(0,d.coerceInputValue)(T,m,(function(e,t,n){var i='Variable "$'.concat(v,'" got invalid value ')+(0,o.default)(t);e.length>0&&(i+=' at "'.concat(v).concat((0,a.default)(e),'"')),r(new u.GraphQLError(i+"; "+n.message,h,void 0,void 0,void 0,n.originalError))}))},h=0;h<t.length;h++)s(h);return i}(e,t,n,(function(e){if(null!=i&&s.length>=i)throw new u.GraphQLError("Too many errors processing variables, error limit reached. Execution aborted.");s.push(e)}));if(0===s.length)return{coerced:h}}catch(e){s.push(e)}return{errors:s}},t.getArgumentValues=v,t.getDirectiveValues=function(e,t,n){var i=t.directives&&(0,r.default)(t.directives,(function(t){return t.name.value===e.name}));if(i)return v(e,i,n)};var r=h(n(57)),i=h(n(34)),o=h(n(9)),a=h(n(100)),u=n(4),s=n(11),c=n(22),l=n(8),f=n(26),p=n(75),d=n(101);function h(e){return e&&e.__esModule?e:{default:e}}function v(e,t,n){for(var r={},a=(0,i.default)(t.arguments||[],(function(e){return e.name.value})),f=0,d=e.args;f<d.length;f++){var h=d[f],v=h.name,m=h.type,g=a[v];if(g){var b=g.value,T=b.kind===s.Kind.NULL;if(b.kind===s.Kind.VARIABLE){var _=b.name.value;if(null==n||!y(n,_)){if(void 0!==h.defaultValue)r[v]=h.defaultValue;else if((0,l.isNonNullType)(m))throw new u.GraphQLError('Argument "'.concat(v,'" of required type "').concat((0,o.default)(m),'" ')+'was provided the variable "$'.concat(_,'" which was not provided a runtime value.'),b);continue}T=null==n[_]}if(T&&(0,l.isNonNullType)(m))throw new u.GraphQLError('Argument "'.concat(v,'" of non-null type "').concat((0,o.default)(m),'" ')+"must not be null.",b);var O=(0,p.valueFromAST)(b,m,n);if(void 0===O)throw new u.GraphQLError('Argument "'.concat(v,'" has invalid value ').concat((0,c.print)(b),"."),b);r[v]=O}else if(void 0!==h.defaultValue)r[v]=h.defaultValue;else if((0,l.isNonNullType)(m))throw new u.GraphQLError('Argument "'.concat(v,'" of required type "').concat((0,o.default)(m),'" ')+"was not provided.",t)}return r}function y(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.valueFromAST=function e(t,n,l){if(!t)return;if((0,c.isNonNullType)(n)){if(t.kind===s.Kind.NULL)return;return e(t,n.ofType,l)}if(t.kind===s.Kind.NULL)return null;if(t.kind===s.Kind.VARIABLE){var p=t.name.value;if(!l||(0,u.default)(l[p]))return;var d=l[p];if(null===d&&(0,c.isNonNullType)(n))return;return d}if((0,c.isListType)(n)){var h=n.ofType;if(t.kind===s.Kind.LIST){for(var v=[],y=0,m=t.values;y<m.length;y++){var g=m[y];if(f(g,l)){if((0,c.isNonNullType)(h))return;v.push(null)}else{var b=e(g,h,l);if((0,u.default)(b))return;v.push(b)}}return v}var T=e(t,h,l);if((0,u.default)(T))return;return[T]}if((0,c.isInputObjectType)(n)){if(t.kind!==s.Kind.OBJECT)return;for(var _=Object.create(null),O=(0,i.default)(t.fields,(function(e){return e.name.value})),E=0,N=(0,r.default)(n.getFields());E<N.length;E++){var w=N[E],S=O[w.name];if(S&&!f(S.value,l)){var I=e(S.value,w.type,l);if((0,u.default)(I))return;_[w.name]=I}else if(void 0!==w.defaultValue)_[w.name]=w.defaultValue;else if((0,c.isNonNullType)(w.type))return}return _}if((0,c.isEnumType)(n)){if(t.kind!==s.Kind.ENUM)return;var j=n.getValue(t.value);if(!j)return;return j.value}if((0,c.isScalarType)(n)){var k;try{k=n.parseLiteral(t,l)}catch(e){return}if((0,u.default)(k))return;return k}(0,a.default)(!1,"Unexpected input type: "+(0,o.default)(n))};var r=l(n(16)),i=l(n(34)),o=l(n(9)),a=l(n(15)),u=l(n(55)),s=n(11),c=n(8);function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t){return e.kind===s.Kind.VARIABLE&&(!t||(0,u.default)(t[e.name.value]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validate=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.specifiedRules,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new s.TypeInfo(e),f=arguments.length>4?arguments[4]:void 0;t||(0,i.default)(0,"Must provide document"),(0,u.assertValidSchema)(e);var p=Object.freeze({}),d=[],h=f&&f.maxErrors,v=new l.ValidationContext(e,t,r,(function(e){if(null!=h&&d.length>=h)throw d.push(new o.GraphQLError("Too many validation errors, error limit reached. Validation aborted.")),p;d.push(e)})),y=(0,a.visitInParallel)(n.map((function(e){return e(v)})));try{(0,a.visit)(t,(0,a.visitWithTypeInfo)(r,y))}catch(e){if(e!==p)throw e}return d},t.validateSDL=p,t.assertValidSDL=function(e){var t=p(e);if(0!==t.length)throw new Error(t.map((function(e){return e.message})).join("\n\n"))},t.assertValidSDLExtension=function(e,t){var n=p(e,t);if(0!==n.length)throw new Error(n.map((function(e){return e.message})).join("\n\n"))},t.ABORT_VALIDATION=void 0;var r,i=(r=n(20))&&r.__esModule?r:{default:r},o=n(4),a=n(12),u=n(70),s=n(59),c=n(137),l=n(105);var f=Object.freeze({});function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.specifiedSDLRules,r=[],i=new l.SDLValidationContext(e,t,(function(e){r.push(e)})),o=n.map((function(e){return e(i)}));return(0,a.visit)(e,(0,a.visitInParallel)(o)),r}t.ABORT_VALIDATION=f},function(e,t,n){var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r};Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),u=n(74),s=Object.prototype.hasOwnProperty,c=function(){function e(){}return e.implementsVisitorMethod=function(t){if(!t.startsWith("visit"))return!1;var n=this.prototype[t];return"function"==typeof n&&(this===e||n!==e.prototype[t])},e.prototype.visitSchema=function(e){},e.prototype.visitScalar=function(e){},e.prototype.visitObject=function(e){},e.prototype.visitFieldDefinition=function(e,t){},e.prototype.visitArgumentDefinition=function(e,t){},e.prototype.visitInterface=function(e){},e.prototype.visitUnion=function(e){},e.prototype.visitEnum=function(e){},e.prototype.visitEnumValue=function(e,t){},e.prototype.visitInputObject=function(e){},e.prototype.visitInputFieldDefinition=function(e,t){},e}();function l(e,t){function n(e,n){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];return t(n,e).every((function(t){var i=t[e].apply(t,o([n],r));if(void 0===i)return!0;if("visitSchema"===e||n instanceof a.GraphQLSchema)throw new Error("Method "+e+" cannot replace schema with "+i);return null===i?(n=null,!1):(n=i,!0)})),n}function r(e){h(e.getFields(),(function(t){var r=n("visitFieldDefinition",t,{objectType:e});return r&&r.args&&h(r.args,(function(t){return n("visitArgumentDefinition",t,{field:r,objectType:e})})),r}))}return function e(t){if(t instanceof a.GraphQLSchema)return n("visitSchema",t),h(t.getTypeMap(),(function(t,n){if(!n.startsWith("__"))return e(t)})),t;if(t instanceof a.GraphQLObjectType){var i=n("visitObject",t);return i&&r(i),i}if(t instanceof a.GraphQLInterfaceType){var o=n("visitInterface",t);return o&&r(o),o}if(t instanceof a.GraphQLInputObjectType){var u=n("visitInputObject",t);return u&&h(u.getFields(),(function(e){return n("visitInputFieldDefinition",e,{objectType:u})})),u}if(t instanceof a.GraphQLScalarType)return n("visitScalar",t);if(t instanceof a.GraphQLUnionType)return n("visitUnion",t);if(t instanceof a.GraphQLEnumType){var s=n("visitEnum",t);return s&&h(s.getValues(),(function(e){return n("visitEnumValue",e,{enumType:s})})),s}throw new Error("Unexpected schema type: "+t)}(e),e}function f(e){return function e(r){if(r instanceof a.GraphQLSchema){var i=r.getTypeMap(),o=Object.create(null);d(i,(function(e,t){if(!t.startsWith("__")){var n=e.name;if(!n.startsWith("__")){if(s.call(o,n))throw new Error("Duplicate schema type name "+n);o[n]=e}}})),d(o,(function(e,t){i[t]=e})),d(r.getDirectives(),(function(e){e.args&&d(e.args,(function(e){e.type=n(e.type)}))})),d(i,(function(t,n){n.startsWith("__")||e(t)})),h(i,(function(e,t){if(!t.startsWith("__")&&!s.call(o,t))return null}))}else if(r instanceof a.GraphQLObjectType)t(r),d(r.getInterfaces(),(function(t){return e(t)}));else if(r instanceof a.GraphQLInterfaceType)t(r);else if(r instanceof a.GraphQLInputObjectType)d(r.getFields(),(function(e){e.type=n(e.type)}));else if(r instanceof a.GraphQLScalarType);else if(r instanceof a.GraphQLUnionType)h(r.getTypes(),(function(e){return n(e)}));else if(!(r instanceof a.GraphQLEnumType))throw new Error("Unexpected schema type: "+r)}(e),e;function t(e){d(e.getFields(),(function(e){e.type=n(e.type),e.args&&d(e.args,(function(e){e.type=n(e.type)}))}))}function n(t){if(t instanceof a.GraphQLList)t=new a.GraphQLList(n(t.ofType));else if(t instanceof a.GraphQLNonNull)t=new a.GraphQLNonNull(n(t.ofType));else if(a.isNamedType(t)){var r=t,i=e.getType(r.name);if(i&&r!==i)return i}return t}}t.SchemaVisitor=c,t.visitSchema=l,t.healSchema=f;var p=function(e){function t(t){var n=e.call(this)||this;return n.name=t.name,n.args=t.args,n.visitedType=t.visitedType,n.schema=t.schema,n.context=t.context,n}return i(t,e),t.getDirectiveDeclaration=function(e,t){return t.getDirective(e)},t.visitSchemaDirectives=function(e,t,n){void 0===n&&(n=Object.create(null));var r=this.getDeclaredDirectives(e,t),i=Object.create(null);return Object.keys(t).forEach((function(e){i[e]=[]})),l(e,(function(o,a){var c=[],l=o.astNode&&o.astNode.directives;return l?(l.forEach((function(i){var l=i.name.value;if(s.call(t,l)){var f=t[l];if(f.implementsVisitorMethod(a)){var p,d=r[l];d?p=u.getArgumentValues(d,i):(p=Object.create(null),i.arguments.forEach((function(e){p[e.name.value]=v(e.value)}))),c.push(new f({name:l,args:p,visitedType:o,schema:e,context:n}))}}})),c.length>0&&c.forEach((function(e){i[e.name].push(e)})),c):c})),f(e),i},t.getDeclaredDirectives=function(e,t){var n=Object.create(null);return d(e.getDirectives(),(function(e){n[e.name]=e})),d(t,(function(t,r){var i=t.getDirectiveDeclaration(r,e);i&&(n[r]=i)})),d(n,(function(e,n){if(s.call(t,n)){var r=t[n];d(e.locations,(function(e){var t=function(e){return"visit"+e.replace(/([^_]*)_?/g,(function(e,t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}))}(e);if(c.implementsVisitorMethod(t)&&!r.implementsVisitorMethod(t))throw new Error("SchemaDirectiveVisitor for @"+n+" must implement "+t+" method")}))}})),n},t}(c);function d(e,t){Object.keys(e).forEach((function(n){t(e[n],n)}))}function h(e,t){var n=0;Object.keys(e).forEach((function(r){var i=t(e[r],r);if(void 0!==i)return null===i?(delete e[r],void n++):void(e[r]=i)})),n>0&&Array.isArray(e)&&e.splice(0).forEach((function(t){e.push(t)}))}function v(e){switch(e.kind){case a.Kind.NULL:return null;case a.Kind.INT:return parseInt(e.value,10);case a.Kind.FLOAT:return parseFloat(e.value);case a.Kind.STRING:case a.Kind.ENUM:case a.Kind.BOOLEAN:return e.value;case a.Kind.LIST:return e.values.map(v);case a.Kind.OBJECT:var t=Object.create(null);return e.fields.forEach((function(e){t[e.name.value]=v(e.value)})),t;default:throw new Error("Unexpected value kind: "+e.kind)}}t.SchemaDirectiveVisitor=p},function(e,t,n){var r=n(196),i=n(79);e.exports=function(e){return r(i(e))}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){e.exports=!0},function(e,t,n){var r=n(31),i=n(14).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){var r=n(117)("keys"),i=n(86);e.exports=function(e){return r[e]||(r[e]=i(e))}},function(e,t,n){var r=n(50).f,i=n(51),o=n(18)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},function(e,t,n){"use strict";var r=n(64);function i(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)}e.exports.f=function(e){return new i(e)}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t,n){e.exports=n(209)},function(e,t,n){"use strict";t.__esModule=!0;var r,i=n(211),o=(r=i)&&r.__esModule?r:{default:r};t.default=function(e){return function(){var t=e.apply(this,arguments);return new o.default((function(e,n){return function r(i,a){try{var u=t[i](a),s=u.value}catch(e){return void n(e)}if(!u.done)return o.default.resolve(s).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(s)}("next")}))}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(s," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,u,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],u={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}n.r(t),n.d(t,"default",(function(){return d}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),u=null,s=0,c=!1,l=function(){},f=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(e,t,n,i){c=n,f=i||{};var a=r(e,t);return h(a),function(t){for(var n=[],i=0;i<a.length;i++){var u=a[i];(s=o[u.id]).refs--,n.push(s)}t?h(a=r(e,t)):a=[];for(i=0;i<n.length;i++){var s;if(0===(s=n[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(y(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(y(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function y(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(p){var i=s++;r=u||(u=v()),t=b.bind(null,r,i,!1),n=b.bind(null,r,i,!0)}else r=v(),t=T.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var m,g=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function b(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function T(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),f.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,c=[],l=!1,f=-1;function p(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=u(p);l=!0;for(var t=c.length;t;){for(s=c,c=[];++f<t;)s&&s[f].run();f=-1,t=c.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.syntaxError=function(e,t,n){return new r.GraphQLError("Syntax Error: ".concat(n),void 0,e,[t])};var r=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLocation=function(e,t){var n,r=/\r\n|[\n\r]/g,i=1,o=t+1;for(;(n=r.exec(e.body))&&n.index<t;)i+=1,o=t+1-(n.index+n[0].length);return{line:i,column:o}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Source=void 0;var r=o(n(20)),i=o(n(68));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(e,t,n){this.body=e,this.name=t||"GraphQL request",this.locationOffset=n||{line:1,column:1},this.locationOffset.line>0||(0,r.default)(0,"line in locationOffset is 1-indexed and must be positive"),this.locationOffset.column>0||(0,r.default)(0,"column in locationOffset is 1-indexed and must be positive")};t.Source=a,(0,i.default)(a)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createLexer=function(e,t){var n=new l(u.TokenKind.SOF,0,0,0,0,null);return{source:e,options:t,lastToken:n,token:n,line:1,lineStart:0,advance:s,lookahead:c}},t.isPunctuatorToken=function(e){var t=e.kind;return t===u.TokenKind.BANG||t===u.TokenKind.DOLLAR||t===u.TokenKind.AMP||t===u.TokenKind.PAREN_L||t===u.TokenKind.PAREN_R||t===u.TokenKind.SPREAD||t===u.TokenKind.COLON||t===u.TokenKind.EQUALS||t===u.TokenKind.AT||t===u.TokenKind.BRACKET_L||t===u.TokenKind.BRACKET_R||t===u.TokenKind.BRACE_L||t===u.TokenKind.PIPE||t===u.TokenKind.BRACE_R};var r,i=(r=n(67))&&r.__esModule?r:{default:r},o=n(92),a=n(52),u=n(53);function s(){return this.lastToken=this.token,this.token=this.lookahead()}function c(){var e=this.token;if(e.kind!==u.TokenKind.EOF)do{e=e.next||(e.next=p(this,e))}while(e.kind===u.TokenKind.COMMENT);return e}function l(e,t,n,r,i,o,a){this.kind=e,this.start=t,this.end=n,this.line=r,this.column=i,this.value=a,this.prev=o,this.next=null}function f(e){return isNaN(e)?u.TokenKind.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function p(e,t){var n=e.source,r=n.body,i=r.length,s=function(e,t,n){var r=e.length,i=t;for(;i<r;){var o=e.charCodeAt(i);if(9===o||32===o||44===o||65279===o)++i;else if(10===o)++i,++n.line,n.lineStart=i;else{if(13!==o)break;10===e.charCodeAt(i+1)?i+=2:++i,++n.line,n.lineStart=i}}return i}(r,t.end,e),c=e.line,p=1+s-e.lineStart;if(s>=i)return new l(u.TokenKind.EOF,i,i,c,p,t);var v=r.charCodeAt(s);switch(v){case 33:return new l(u.TokenKind.BANG,s,s+1,c,p,t);case 35:return function(e,t,n,r,i){var o,a=e.body,s=t;do{o=a.charCodeAt(++s)}while(!isNaN(o)&&(o>31||9===o));return new l(u.TokenKind.COMMENT,t,s,n,r,i,a.slice(t+1,s))}(n,s,c,p,t);case 36:return new l(u.TokenKind.DOLLAR,s,s+1,c,p,t);case 38:return new l(u.TokenKind.AMP,s,s+1,c,p,t);case 40:return new l(u.TokenKind.PAREN_L,s,s+1,c,p,t);case 41:return new l(u.TokenKind.PAREN_R,s,s+1,c,p,t);case 46:if(46===r.charCodeAt(s+1)&&46===r.charCodeAt(s+2))return new l(u.TokenKind.SPREAD,s,s+3,c,p,t);break;case 58:return new l(u.TokenKind.COLON,s,s+1,c,p,t);case 61:return new l(u.TokenKind.EQUALS,s,s+1,c,p,t);case 64:return new l(u.TokenKind.AT,s,s+1,c,p,t);case 91:return new l(u.TokenKind.BRACKET_L,s,s+1,c,p,t);case 93:return new l(u.TokenKind.BRACKET_R,s,s+1,c,p,t);case 123:return new l(u.TokenKind.BRACE_L,s,s+1,c,p,t);case 124:return new l(u.TokenKind.PIPE,s,s+1,c,p,t);case 125:return new l(u.TokenKind.BRACE_R,s,s+1,c,p,t);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return function(e,t,n,r,i){var o=e.body,a=o.length,s=t+1,c=0;for(;s!==a&&!isNaN(c=o.charCodeAt(s))&&(95===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122);)++s;return new l(u.TokenKind.NAME,t,s,n,r,i,o.slice(t,s))}(n,s,c,p,t);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return function(e,t,n,r,i,a){var s=e.body,c=n,p=t,h=!1;45===c&&(c=s.charCodeAt(++p));if(48===c){if((c=s.charCodeAt(++p))>=48&&c<=57)throw(0,o.syntaxError)(e,p,"Invalid number, unexpected digit after 0: ".concat(f(c),"."))}else p=d(e,p,c),c=s.charCodeAt(p);46===c&&(h=!0,c=s.charCodeAt(++p),p=d(e,p,c),c=s.charCodeAt(p));69!==c&&101!==c||(h=!0,43!==(c=s.charCodeAt(++p))&&45!==c||(c=s.charCodeAt(++p)),p=d(e,p,c),c=s.charCodeAt(p));if(46===c||69===c||101===c)throw(0,o.syntaxError)(e,p,"Invalid number, expected digit but got: ".concat(f(c),"."));return new l(h?u.TokenKind.FLOAT:u.TokenKind.INT,t,p,r,i,a,s.slice(t,p))}(n,s,v,c,p,t);case 34:return 34===r.charCodeAt(s+1)&&34===r.charCodeAt(s+2)?function(e,t,n,r,i,s){var c=e.body,p=t+3,d=p,h=0,v="";for(;p<c.length&&!isNaN(h=c.charCodeAt(p));){if(34===h&&34===c.charCodeAt(p+1)&&34===c.charCodeAt(p+2))return v+=c.slice(d,p),new l(u.TokenKind.BLOCK_STRING,t,p+3,n,r,i,(0,a.dedentBlockStringValue)(v));if(h<32&&9!==h&&10!==h&&13!==h)throw(0,o.syntaxError)(e,p,"Invalid character within String: ".concat(f(h),"."));10===h?(++p,++s.line,s.lineStart=p):13===h?(10===c.charCodeAt(p+1)?p+=2:++p,++s.line,s.lineStart=p):92===h&&34===c.charCodeAt(p+1)&&34===c.charCodeAt(p+2)&&34===c.charCodeAt(p+3)?(v+=c.slice(d,p)+'"""',d=p+=4):++p}throw(0,o.syntaxError)(e,p,"Unterminated string.")}(n,s,c,p,t,e):function(e,t,n,r,i){var a=e.body,s=t+1,c=s,p=0,d="";for(;s<a.length&&!isNaN(p=a.charCodeAt(s))&&10!==p&&13!==p;){if(34===p)return d+=a.slice(c,s),new l(u.TokenKind.STRING,t,s+1,n,r,i,d);if(p<32&&9!==p)throw(0,o.syntaxError)(e,s,"Invalid character within String: ".concat(f(p),"."));if(++s,92===p){switch(d+=a.slice(c,s-1),p=a.charCodeAt(s)){case 34:d+='"';break;case 47:d+="/";break;case 92:d+="\\";break;case 98:d+="\b";break;case 102:d+="\f";break;case 110:d+="\n";break;case 114:d+="\r";break;case 116:d+="\t";break;case 117:var v=(m=a.charCodeAt(s+1),g=a.charCodeAt(s+2),b=a.charCodeAt(s+3),T=a.charCodeAt(s+4),h(m)<<12|h(g)<<8|h(b)<<4|h(T));if(v<0){var y=a.slice(s+1,s+5);throw(0,o.syntaxError)(e,s,"Invalid character escape sequence: \\u".concat(y,"."))}d+=String.fromCharCode(v),s+=4;break;default:throw(0,o.syntaxError)(e,s,"Invalid character escape sequence: \\".concat(String.fromCharCode(p),"."))}++s,c=s}}var m,g,b,T;throw(0,o.syntaxError)(e,s,"Unterminated string.")}(n,s,c,p,t)}throw(0,o.syntaxError)(n,s,function(e){if(e<32&&9!==e&&10!==e&&13!==e)return"Cannot contain the invalid character ".concat(f(e),".");if(39===e)return"Unexpected single quote character ('), did you mean to use a double quote (\")?";return"Cannot parse the unexpected character ".concat(f(e),".")}(v))}function d(e,t,n){var r=e.body,i=t,a=n;if(a>=48&&a<=57){do{a=r.charCodeAt(++i)}while(a>=48&&a<=57);return i}throw(0,o.syntaxError)(e,i,"Invalid number, expected digit but got: ".concat(f(a),"."))}function h(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}(0,i.default)(l,(function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.locatedError=function(e,t,n){if(e&&Array.isArray(e.path))return e;return new r.GraphQLError(e&&e.message,e&&e.nodes||t,e&&e.source,e&&e.positions,n,e)};var r=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(null===Object.getPrototypeOf(e))return e;for(var t=Object.create(null),n=0,r=(0,i.default)(e);n<r.length;n++){var o=r[n],a=o[0],u=o[1];t[a]=u}return t};var r,i=(r=n(42))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){return e instanceof t};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOperationRootType=function(e,t){if("query"===t.operation){var n=e.getQueryType();if(!n)throw new r.GraphQLError("Schema does not define the required query root type.",t);return n}if("mutation"===t.operation){var i=e.getMutationType();if(!i)throw new r.GraphQLError("Schema is not configured for mutations.",t);return i}if("subscription"===t.operation){var o=e.getSubscriptionType();if(!o)throw new r.GraphQLError("Schema is not configured for subscriptions.",t);return o}throw new r.GraphQLError("Can only have query, mutation and subscription operations.",t)};var r=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.map((function(e){return"number"==typeof e?"["+e.toString()+"]":"."+e})).join("")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.coerceInputValue=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v;return y(e,t,n)};var r=n(33),i=h(n(16)),o=h(n(9)),a=h(n(15)),u=h(n(44)),s=h(n(24)),c=h(n(45)),l=h(n(100)),f=n(56),p=n(4),d=n(8);function h(e){return e&&e.__esModule?e:{default:e}}function v(e,t,n){var r="Invalid value "+(0,o.default)(t);throw e.length>0&&(r+=' at "value'.concat((0,l.default)(e),'": ')),n.message=r+": "+n.message,n}function y(e,t,n,l){if((0,d.isNonNullType)(t))return null!=e?y(e,t.ofType,n,l):void n((0,f.pathToArray)(l),e,new p.GraphQLError("Expected non-nullable type ".concat((0,o.default)(t)," not to be null.")));if(null==e)return null;if((0,d.isListType)(t)){var h=t.ofType;if((0,r.isCollection)(e)){var v=[];return(0,r.forEach)(e,(function(e,t){v.push(y(e,h,n,(0,f.addPath)(l,t)))})),v}return[y(e,h,n,l)]}if((0,d.isInputObjectType)(t)){if(!(0,s.default)(e))return void n((0,f.pathToArray)(l),e,new p.GraphQLError("Expected type ".concat(t.name," to be an object.")));for(var m={},g=t.getFields(),b=0,T=(0,i.default)(g);b<T.length;b++){var _=T[b],O=e[_.name];if(void 0!==O)m[_.name]=y(O,_.type,n,(0,f.addPath)(l,_.name));else if(void 0!==_.defaultValue)m[_.name]=_.defaultValue;else if((0,d.isNonNullType)(_.type)){var E=(0,o.default)(_.type);n((0,f.pathToArray)(l),e,new p.GraphQLError("Field ".concat(_.name," of required type ").concat(E," was not provided.")))}}for(var N=0,w=Object.keys(e);N<w.length;N++){var S=w[N];if(!g[S]){var I=(0,c.default)(S,Object.keys(t.getFields()));n((0,f.pathToArray)(l),e,new p.GraphQLError('Field "'.concat(S,'" is not defined by type ').concat(t.name,".")+(0,u.default)(I)))}}return m}if((0,d.isScalarType)(t)){var j;try{j=t.parseValue(e)}catch(r){return void n((0,f.pathToArray)(l),e,new p.GraphQLError("Expected type ".concat(t.name,". ")+r.message,void 0,void 0,void 0,void 0,r))}return void 0===j&&n((0,f.pathToArray)(l),e,new p.GraphQLError("Expected type ".concat(t.name,"."))),j}if((0,d.isEnumType)(t)){if("string"==typeof e){var k=t.getValue(e);if(k)return k.value}var L=(0,c.default)(String(e),t.getValues().map((function(e){return e.name})));n((0,f.pathToArray)(l),e,new p.GraphQLError("Expected type ".concat(t.name,".")+(0,u.default)(L)))}else(0,a.default)(!1,"Unexpected input type: "+(0,o.default)(t))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.versionInfo=t.version=void 0;t.version="14.6.0";var r=Object.freeze({major:14,minor:6,patch:0,preReleaseTag:null});t.versionInfo=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.graphql=function(e,t,n,r,i,o,a,u){var s=arguments;return new Promise((function(l){return l(1===s.length?c(e):c({schema:e,source:t,rootValue:n,contextValue:r,variableValues:i,operationName:o,fieldResolver:a,typeResolver:u}))}))},t.graphqlSync=function(e,t,n,r,o,a,u,s){var l=c(1===arguments.length?e:{schema:e,source:t,rootValue:n,contextValue:r,variableValues:o,operationName:a,fieldResolver:u,typeResolver:s});if((0,i.default)(l))throw new Error("GraphQL execution failed to complete synchronously.");return l};var r,i=(r=n(69))&&r.__esModule?r:{default:r},o=n(41),a=n(76),u=n(70),s=n(48);function c(e){var t,n=e.schema,r=e.source,i=e.rootValue,c=e.contextValue,l=e.variableValues,f=e.operationName,p=e.fieldResolver,d=e.typeResolver,h=(0,u.validateSchema)(n);if(h.length>0)return{errors:h};try{t=(0,o.parse)(r)}catch(e){return{errors:[e]}}var v=(0,a.validate)(n,t);return v.length>0?{errors:v}:(0,s.execute)({schema:n,document:t,rootValue:i,contextValue:c,variableValues:l,operationName:f,fieldResolver:p,typeResolver:d})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.badValueMessage=d,t.badEnumValueMessage=h,t.requiredFieldMessage=v,t.unknownFieldMessage=y,t.ValuesOfCorrectType=function(e){return{NullValue:function(t){var n=e.getInputType();(0,f.isNonNullType)(n)&&e.reportError(new c.GraphQLError(d((0,o.default)(n),(0,l.print)(t)),t))},ListValue:function(t){var n=(0,f.getNullableType)(e.getParentInputType());if(!(0,f.isListType)(n))return m(e,t),!1},ObjectValue:function(t){var n=(0,f.getNamedType)(e.getInputType());if(!(0,f.isInputObjectType)(n))return m(e,t),!1;for(var a=(0,i.default)(t.fields,(function(e){return e.name.value})),u=0,s=(0,r.default)(n.getFields());u<s.length;u++){var l=s[u];if(!a[l.name]&&(0,f.isRequiredInputField)(l)){var p=(0,o.default)(l.type);e.reportError(new c.GraphQLError(v(n.name,l.name,p),t))}}},ObjectField:function(t){var n=(0,f.getNamedType)(e.getParentInputType());if(!e.getInputType()&&(0,f.isInputObjectType)(n)){var r=(0,s.default)(t.name.value,Object.keys(n.getFields()));e.reportError(new c.GraphQLError(y(n.name,t.name.value,r),t))}},EnumValue:function(t){var n=(0,f.getNamedType)(e.getInputType());(0,f.isEnumType)(n)?n.getValue(t.value)||e.reportError(new c.GraphQLError(h(n.name,(0,l.print)(t),g(n,t)),t)):m(e,t)},IntValue:function(t){return m(e,t)},FloatValue:function(t){return m(e,t)},StringValue:function(t){return m(e,t)},BooleanValue:function(t){return m(e,t)}}};var r=p(n(16)),i=p(n(34)),o=p(n(9)),a=p(n(55)),u=p(n(44)),s=p(n(45)),c=n(4),l=n(22),f=n(8);function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n){return"Expected type ".concat(e,", found ").concat(t)+(n?"; ".concat(n):".")}function h(e,t,n){return"Expected type ".concat(e,", found ").concat(t,".")+(0,u.default)("the enum value",n)}function v(e,t,n){return"Field ".concat(e,".").concat(t," of required type ").concat(n," was not provided.")}function y(e,t,n){return'Field "'.concat(t,'" is not defined by type ').concat(e,".")+(0,u.default)(n)}function m(e,t){var n=e.getInputType();if(n){var r=(0,f.getNamedType)(n);if((0,f.isScalarType)(r))try{var i=r.parseLiteral(t,void 0);(0,a.default)(i)&&e.reportError(new c.GraphQLError(d((0,o.default)(n),(0,l.print)(t)),t))}catch(r){e.reportError(new c.GraphQLError(d((0,o.default)(n),(0,l.print)(t),r.message),t,void 0,void 0,void 0,r))}else{var u=(0,f.isEnumType)(r)?h((0,o.default)(n),(0,l.print)(t),g(r,t)):d((0,o.default)(n),(0,l.print)(t));e.reportError(new c.GraphQLError(u,t))}}}function g(e,t){var n=e.getValues().map((function(e){return e.name}));return(0,s.default)((0,l.print)(t),n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ValidationContext=t.SDLValidationContext=t.ASTValidationContext=void 0;var r=n(11),i=n(12),o=n(59);function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var u=function(){function e(e,t){this._ast=e,this._errors=[],this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}var t=e.prototype;return t.reportError=function(e){this._errors.push(e),this._onError&&this._onError(e)},t.getErrors=function(){return this._errors},t.getDocument=function(){return this._ast},t.getFragment=function(e){var t=this._fragments;return t||(this._fragments=t=this.getDocument().definitions.reduce((function(e,t){return t.kind===r.Kind.FRAGMENT_DEFINITION&&(e[t.name.value]=t),e}),Object.create(null))),t[e]},t.getFragmentSpreads=function(e){var t=this._fragmentSpreads.get(e);if(!t){t=[];for(var n=[e];0!==n.length;)for(var i=0,o=n.pop().selections;i<o.length;i++){var a=o[i];a.kind===r.Kind.FRAGMENT_SPREAD?t.push(a):a.selectionSet&&n.push(a.selectionSet)}this._fragmentSpreads.set(e,t)}return t},t.getRecursivelyReferencedFragments=function(e){var t=this._recursivelyReferencedFragments.get(e);if(!t){t=[];for(var n=Object.create(null),r=[e.selectionSet];0!==r.length;)for(var i=r.pop(),o=0,a=this.getFragmentSpreads(i);o<a.length;o++){var u=a[o].name.value;if(!0!==n[u]){n[u]=!0;var s=this.getFragment(u);s&&(t.push(s),r.push(s.selectionSet))}}this._recursivelyReferencedFragments.set(e,t)}return t},e}();t.ASTValidationContext=u;var s=function(e){function t(t,n,r){var i;return(i=e.call(this,t,r)||this)._schema=n,i}return a(t,e),t.prototype.getSchema=function(){return this._schema},t}(u);t.SDLValidationContext=s;var c=function(e){function t(t,n,r,i){var o;return(o=e.call(this,n,i)||this)._schema=t,o._typeInfo=r,o._variableUsages=new Map,o._recursiveVariableUsages=new Map,o}a(t,e);var n=t.prototype;return n.getSchema=function(){return this._schema},n.getVariableUsages=function(e){var t=this._variableUsages.get(e);if(!t){var n=[],r=new o.TypeInfo(this._schema);(0,i.visit)(e,(0,i.visitWithTypeInfo)(r,{VariableDefinition:function(){return!1},Variable:function(e){n.push({node:e,type:r.getInputType(),defaultValue:r.getDefaultValue()})}})),t=n,this._variableUsages.set(e,t)}return t},n.getRecursiveVariableUsages=function(e){var t=this._recursiveVariableUsages.get(e);if(!t){t=this.getVariableUsages(e);for(var n=0,r=this.getRecursivelyReferencedFragments(e);n<r.length;n++){var i=r[n];t=t.concat(this.getVariableUsages(i))}this._recursiveVariableUsages.set(e,t)}return t},n.getType=function(){return this._typeInfo.getType()},n.getParentType=function(){return this._typeInfo.getParentType()},n.getInputType=function(){return this._typeInfo.getInputType()},n.getParentInputType=function(){return this._typeInfo.getParentInputType()},n.getFieldDef=function(){return this._typeInfo.getFieldDef()},n.getDirective=function(){return this._typeInfo.getDirective()},n.getArgument=function(){return this._typeInfo.getArgument()},t}(u);t.ValidationContext=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"subscribe",{enumerable:!0,get:function(){return r.subscribe}}),Object.defineProperty(t,"createSourceEventStream",{enumerable:!0,get:function(){return r.createSourceEventStream}});var r=n(254)},function(e,t){var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r};function r(e,t){return t.reduce((function(e,t){return t.transformSchema?t.transformSchema(e):e}),e)}function i(e,t){return t.reduce((function(e,t){return t.transformRequest?t.transformRequest(e):e}),e)}function o(e,t){return t.reduce((function(e,t){return t.transformResult?t.transformResult(e):e}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.applySchemaTransforms=r,t.applyRequestTransforms=i,t.applyResultTransforms=o,t.composeTransforms=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var a=n(e).reverse();return{transformSchema:function(t){return r(t,e)},transformRequest:function(e){return i(e,a)},transformResult:function(e){return o(e,a)}}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.default=function(e,t){var n=e.__typename;if(!n)throw new Error("Did not fetch typename for object, unable to resolve interface.");var i=t.getType(n);if(!(i instanceof r.GraphQLObjectType))throw new Error("__typename did not match an object type: "+n);return i}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(30),o=n(110),a=n(175);t.default=function(e,t,n,u){if(!e)return null;var s=a.getResponseKeyFromInfo(u),c=o.getErrorsFromParent(e,s);if("OWN"===c.kind)throw i.locatedError(new Error(c.error.message),u.fieldNodes,r.responsePathAsArray(u.path));var l=e[s];return null==l&&(l=e[u.fieldName]),!l&&e.data&&e.data[s]&&(l=e.data[s]),c.errors&&(l=o.annotateWithChildrenErrors(l,c.errors)),l}},function(e,t,n){(function(e){var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),u=n(30),s=n(175);function c(e,n){var r;if(!n||0===n.length)return e;if(Array.isArray(e)){var i={};return n.forEach((function(e){if(e.path){var t=e.path[1],n=i[t]||[];n.push(o(o({},e),{path:e.path.slice(1)})),i[t]=n}})),e.map((function(e,t){return c(e,i[t])}))}return o(o({},e),((r={})[t.ERROR_SYMBOL]=n.map((function(e){return o(o({},e),e.path?{path:e.path.slice(1)}:{})})),r))}void 0!==e&&"Symbol"in e||"undefined"!=typeof window&&"Symbol"in window?t.ERROR_SYMBOL=Symbol("subSchemaErrors"):t.ERROR_SYMBOL="@@__subSchemaErrors",t.annotateWithChildrenErrors=c,t.getErrorsFromParent=function(e,n){for(var r=[],i=0,o=e&&e[t.ERROR_SYMBOL]||[];i<o.length;i++){var a=o[i];if(!a.path||1===a.path.length&&a.path[0]===n)return{kind:"OWN",error:a};a.path[0]===n&&r.push(a)}return{kind:"CHILDREN",errors:r}};var l=function(e){function t(t,n){var r=e.call(this,t)||this;return r.errors=n,r}return i(t,e),t}(Error);t.checkResultAndHandleErrors=function(e,t,n){if(n||(n=s.getResponseKeyFromInfo(t)),e.errors&&(!e.data||null==e.data[n])){var r=1===e.errors.length&&((i=e.errors[0]).result||i.extensions||i.originalError&&i.originalError.result)?e.errors[0]:new l(e.errors.map((function(e){return e.message})).join("\n"),e.errors);throw u.locatedError(r,t.fieldNodes,a.responsePathAsArray(t.path))}var i,o=e.data[n];return e.errors&&(o=c(o,e.errors)),o}}).call(this,n(40))},function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},o=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r};Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),u=n(107),s=n(180),c=n(181),l=n(183),f=n(184),p=n(296),d=n(185),h=n(186),v=n(297);function y(e){return r(this,void 0,void 0,(function(){var t,n,r,y,m,g,b,T,_,O,E;return i(this,(function(i){switch(i.label){case 0:if(t=e.info,n=e.args,r=void 0===n?{}:n,y=e.operation||t.operation.operation,m=function(e,t,n,r,i,u){var s=[],c=[];n.forEach((function(e){var t=e.selectionSet?e.selectionSet.selections:[];s=s.concat(t),c=c.concat(e.arguments||[])}));var l=null;s.length>0&&(l={kind:a.Kind.SELECTION_SET,selections:s});var f={kind:a.Kind.FIELD,alias:null,arguments:c,selectionSet:l,name:{kind:a.Kind.NAME,value:e}},p={kind:a.Kind.SELECTION_SET,selections:[f]},d={kind:a.Kind.OPERATION_DEFINITION,operation:t,variableDefinitions:i,selectionSet:p,name:u};return{kind:a.Kind.DOCUMENT,definitions:o([d],r)}}(e.fieldName,y,t.fieldNodes,Object.keys(t.fragments).map((function(e){return t.fragments[e]})),t.operation.variableDefinitions,t.operation.name),g={document:m,variables:t.variableValues},b=o(e.transforms||[],[new d.default(t.schema,e.schema)]),t.mergeInfo&&t.mergeInfo.fragments&&b.push(new h.default(e.schema,t.mergeInfo.fragments)),b=b.concat([new s.default(e.schema,r),new c.default(e.schema),new l.default(e.schema),new f.default(t,e.fieldName)]),a.isEnumType(e.info.returnType)&&(b=b.concat(new v.default(e.info.returnType))),T=u.applyRequestTransforms(g,b),!e.skipValidation&&(_=a.validate(e.schema,T.document)).length>0)throw _;return"query"!==y&&"mutation"!==y?[3,2]:(O=u.applyResultTransforms,[4,a.execute(e.schema,T.document,t.rootValue,e.context,T.variables)]);case 1:return[2,O.apply(void 0,[i.sent(),b])];case 2:return"subscription"!==y?[3,4]:[4,a.subscribe(e.schema,T.document,t.rootValue,e.context,T.variables)];case 3:return E=i.sent(),[2,p.default(E,(function(e){var t,n=u.applyResultTransforms(e,b);return(t={})[Object.keys(e.data)[0]]=n,t}))];case 4:return[2]}}))}))}t.default=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e instanceof a.GraphQLSchema)throw new Error("Passing positional arguments to delegateToSchema is a deprecated. Please pass named parameters instead.");return y(e)}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(179),o=n(60),a=n(61),u=function(){function e(e){this.transform=e}return e.prototype.transformSchema=function(e){var t,n=this;return o.visitSchema(e,((t={})[o.VisitSchemaKind.QUERY]=function(e){return s(e,(function(e,t){return n.transform("Query",e,t)}))},t[o.VisitSchemaKind.MUTATION]=function(e){return s(e,(function(e,t){return n.transform("Mutation",e,t)}))},t[o.VisitSchemaKind.SUBSCRIPTION]=function(e){return s(e,(function(e,t){return n.transform("Subscription",e,t)}))},t))},e}();function s(e,t){var n=a.createResolveType((function(e,t){return t})),o=e.getFields(),u={};return Object.keys(o).forEach((function(e){var r=o[e],i=t(e,r);void 0===i?u[e]=a.fieldToFieldConfig(r,n,!0):null!==i&&(i.name?u[i.name]=i.field:u[e]=i)})),i.default(u)?null:new r.GraphQLObjectType({name:e.name,description:e.description,astNode:e.astNode,fields:u})}t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(235));t.default=function(e,t,n){i.default.use(o.default);var u=new o.default({defaultClient:a.default}),s=document.querySelectorAll(t),c=i.default.extend(e),l={};s.forEach((function(e){var t=!0,i=!1,o=void 0;try{for(var a,s=(0,r.default)(n);!(t=(a=s.next()).done);t=!0){var f=a.value;e.dataset[f.name]&&(f.type===Number?l[f.name]=parseInt(e.dataset[f.name],10):f.type===Boolean?l[f.name]="true"===e.dataset[f.name]:l[f.name]=e.dataset[f.name])}}catch(e){i=!0,o=e}finally{try{!t&&s.return&&s.return()}finally{if(i)throw o}}new c({el:e,delimiters:["((","))"],apolloProvider:u,propsData:l})}))}
/**
   * 2007-2020 PrestaShop and Contributors
   *
   * NOTICE OF LICENSE
   *
   * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
   * that is bundled with this package in the file LICENSE.txt.
   * It is also available through the world-wide-web at this URL:
   * https://opensource.org/licenses/AFL-3.0
   * If you did not receive a copy of the license and are unable to
   * obtain it through the world-wide-web, please send an email
   * to license@prestashop.com so we can send you a copy immediately.
   *
   * @author    PrestaShop SA <contact@prestashop.com>
   * @copyright 2007-2020 PrestaShop SA and Contributors
   * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
   * International Registered Trademark & Property of PrestaShop SA
   */;var i=u(n(130)),o=u(n(240)),a=u(n(241));function u(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";var r=n(80),i=n(37),o=n(199),a=n(32),u=n(49),s=n(200),c=n(84),l=n(206),f=n(18)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};e.exports=function(e,t,n,h,v,y,m){s(n,t,h);var g,b,T,_=function(e){if(!p&&e in w)return w[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},O=t+" Iterator",E="values"==v,N=!1,w=e.prototype,S=w[f]||w["@@iterator"]||v&&w[v],I=S||_(v),j=v?E?_("entries"):I:void 0,k="Array"==t&&w.entries||S;if(k&&(T=l(k.call(new e)))!==Object.prototype&&T.next&&(c(T,O,!0),r||"function"==typeof T[f]||a(T,f,d)),E&&S&&"values"!==S.name&&(N=!0,I=function(){return S.call(this)}),r&&!m||!p&&!N&&w[f]||a(w,f,I),u[t]=I,u[O]=d,v)if(g={values:E?I:_("values"),keys:y?I:_("keys"),entries:j},m)for(b in g)b in w||o(w,b,g[b]);else i(i.P+i.F*(p||N),t,g);return g}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(82),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},function(e,t,n){var r=n(19),i=n(14),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(80)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(14).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(62),i=n(18)("toStringTag"),o="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),i))?n:o?r(t):"Object"==(a=r(t))&&"function"==typeof t.callee?"Arguments":a}},function(e,t,n){var r=n(23),i=n(64),o=n(18)("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||null==(n=r(a)[o])?t:i(n)}},function(e,t,n){var r,i,o,a=n(63),u=n(219),s=n(119),c=n(81),l=n(14),f=l.process,p=l.setImmediate,d=l.clearImmediate,h=l.MessageChannel,v=l.Dispatch,y=0,m={},g=function(){var e=+this;if(m.hasOwnProperty(e)){var t=m[e];delete m[e],t()}},b=function(e){g.call(e.data)};p&&d||(p=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return m[++y]=function(){u("function"==typeof e?e:Function(e),t)},r(y),y},d=function(e){delete m[e]},"process"==n(62)(f)?r=function(e){f.nextTick(a(g,e,1))}:v&&v.now?r=function(e){v.now(a(g,e,1))}:h?(o=(i=new h).port2,i.port1.onmessage=b,r=a(o.postMessage,o,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(e){l.postMessage(e+"","*")},l.addEventListener("message",b,!1)):r="onreadystatechange"in c("script")?function(e){s.appendChild(c("script")).onreadystatechange=function(){s.removeChild(this),g.call(e)}}:function(e){setTimeout(a(g,e,1),0)}),e.exports={set:p,clear:d}},function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},function(e,t,n){var r=n(23),i=n(31),o=n(85);e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e);return(0,n.resolve)(t),n.promise}},function(e,t,n){"use strict";t.__esModule=!0;var r=o(n(310)),i=o(n(313));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){return(0,i.default)((0,r.default)(e,{raw:{value:(0,i.default)(t)}}))}},function(e,t,n){n(193);for(var r=n(14),i=n(32),o=n(49),a=n(18)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<u.length;s++){var c=u[s],l=r[c],f=l&&l.prototype;f&&!f[a]&&i(f,a,c),o[c]=o.Array}},function(e,t,n){var r=n(50),i=n(23),o=n(202);e.exports=n(36)?Object.defineProperties:function(e,t){i(e);for(var n,a=o(t),u=a.length,s=0;u>s;)r.f(e,n=a[s++],t[n]);return e}},function(e,t,n){"use strict";var r=n(208)(!0);n(114)(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})}))},function(e,t,n){var r=n(120),i=n(18)("iterator"),o=n(49);e.exports=n(19).getIteratorMethod=function(e){if(null!=e)return e[i]||e["@@iterator"]||o[r(e)]}},function(e,t,n){"use strict";n.r(t),function(e,n){var r=Object.freeze({});function i(e){return null==e}function o(e){return null!=e}function a(e){return!0===e}function u(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function s(e){return null!==e&&"object"==typeof e}var c=Object.prototype.toString;function l(e){return"[object Object]"===c.call(e)}function f(e){return"[object RegExp]"===c.call(e)}function p(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function d(e){return o(e)&&"function"==typeof e.then&&"function"==typeof e.catch}function h(e){return null==e?"":Array.isArray(e)||l(e)&&e.toString===c?JSON.stringify(e,null,2):String(e)}function v(e){var t=parseFloat(e);return isNaN(t)?e:t}function y(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var m=y("slot,component",!0),g=y("key,ref,slot,slot-scope,is");function b(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var T=Object.prototype.hasOwnProperty;function _(e,t){return T.call(e,t)}function O(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}var E=/-(\w)/g,N=O((function(e){return e.replace(E,(function(e,t){return t?t.toUpperCase():""}))})),w=O((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),S=/\B([A-Z])/g,I=O((function(e){return e.replace(S,"-$1").toLowerCase()}));var j=Function.prototype.bind?function(e,t){return e.bind(t)}:function(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n};function k(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function L(e,t){for(var n in t)e[n]=t[n];return e}function x(e){for(var t={},n=0;n<e.length;n++)e[n]&&L(t,e[n]);return t}function A(e,t,n){}var D=function(e,t,n){return!1},P=function(e){return e};function R(e,t){if(e===t)return!0;var n=s(e),r=s(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every((function(e,n){return R(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||o)return!1;var a=Object.keys(e),u=Object.keys(t);return a.length===u.length&&a.every((function(n){return R(e[n],t[n])}))}catch(e){return!1}}function M(e,t){for(var n=0;n<e.length;n++)if(R(e[n],t))return n;return-1}function F(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var C=["component","directive","filter"],Q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:A,parsePlatformTagName:P,mustUseProp:D,async:!0,_lifecycleHooks:Q},G=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function K(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function $(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var q=new RegExp("[^"+G.source+".$_\\d]");var U,B="__proto__"in{},Y="undefined"!=typeof window,J="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,W=J&&WXEnvironment.platform.toLowerCase(),H=Y&&window.navigator.userAgent.toLowerCase(),z=H&&/msie|trident/.test(H),X=H&&H.indexOf("msie 9.0")>0,Z=H&&H.indexOf("edge/")>0,ee=(H&&H.indexOf("android"),H&&/iphone|ipad|ipod|ios/.test(H)||"ios"===W),te=(H&&/chrome\/\d+/.test(H),H&&/phantomjs/.test(H),H&&H.match(/firefox\/(\d+)/)),ne={}.watch,re=!1;if(Y)try{var ie={};Object.defineProperty(ie,"passive",{get:function(){re=!0}}),window.addEventListener("test-passive",null,ie)}catch(e){}var oe=function(){return void 0===U&&(U=!Y&&!J&&void 0!==e&&(e.process&&"server"===e.process.env.VUE_ENV)),U},ae=Y&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ue(e){return"function"==typeof e&&/native code/.test(e.toString())}var se,ce="undefined"!=typeof Symbol&&ue(Symbol)&&"undefined"!=typeof Reflect&&ue(Reflect.ownKeys);se="undefined"!=typeof Set&&ue(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var le=A,fe=0,pe=function(){this.id=fe++,this.subs=[]};pe.prototype.addSub=function(e){this.subs.push(e)},pe.prototype.removeSub=function(e){b(this.subs,e)},pe.prototype.depend=function(){pe.target&&pe.target.addDep(this)},pe.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},pe.target=null;var de=[];function he(e){de.push(e),pe.target=e}function ve(){de.pop(),pe.target=de[de.length-1]}var ye=function(e,t,n,r,i,o,a,u){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=u,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},me={child:{configurable:!0}};me.child.get=function(){return this.componentInstance},Object.defineProperties(ye.prototype,me);var ge=function(e){void 0===e&&(e="");var t=new ye;return t.text=e,t.isComment=!0,t};function be(e){return new ye(void 0,void 0,void 0,String(e))}function Te(e){var t=new ye(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var _e=Array.prototype,Oe=Object.create(_e);["push","pop","shift","unshift","splice","sort","reverse"].forEach((function(e){var t=_e[e];$(Oe,e,(function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o}))}));var Ee=Object.getOwnPropertyNames(Oe),Ne=!0;function we(e){Ne=e}var Se=function(e){this.value=e,this.dep=new pe,this.vmCount=0,$(e,"__ob__",this),Array.isArray(e)?(B?function(e,t){e.__proto__=t}(e,Oe):function(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];$(e,o,t[o])}}(e,Oe,Ee),this.observeArray(e)):this.walk(e)};function Ie(e,t){var n;if(s(e)&&!(e instanceof ye))return _(e,"__ob__")&&e.__ob__ instanceof Se?n=e.__ob__:Ne&&!oe()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Se(e)),t&&n&&n.vmCount++,n}function je(e,t,n,r,i){var o=new pe,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var u=a&&a.get,s=a&&a.set;u&&!s||2!==arguments.length||(n=e[t]);var c=!i&&Ie(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=u?u.call(e):n;return pe.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(t)&&xe(t))),t},set:function(t){var r=u?u.call(e):n;t===r||t!=t&&r!=r||u&&!s||(s?s.call(e,t):n=t,c=!i&&Ie(t),o.notify())}})}}function ke(e,t,n){if(Array.isArray(e)&&p(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(je(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Le(e,t){if(Array.isArray(e)&&p(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||_(e,t)&&(delete e[t],n&&n.dep.notify())}}function xe(e){for(var t=void 0,n=0,r=e.length;n<r;n++)(t=e[n])&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&xe(t)}Se.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)je(e,t[n])},Se.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Ie(e[t])};var Ae=V.optionMergeStrategies;function De(e,t){if(!t)return e;for(var n,r,i,o=ce?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)"__ob__"!==(n=o[a])&&(r=e[n],i=t[n],_(e,n)?r!==i&&l(r)&&l(i)&&De(r,i):ke(e,n,i));return e}function Pe(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,i="function"==typeof e?e.call(n,n):e;return r?De(r,i):i}:t?e?function(){return De("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function Re(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(n):n}function Me(e,t,n,r){var i=Object.create(e||null);return t?L(i,t):i}Ae.data=function(e,t,n){return n?Pe(e,t,n):t&&"function"!=typeof t?e:Pe(e,t)},Q.forEach((function(e){Ae[e]=Re})),C.forEach((function(e){Ae[e+"s"]=Me})),Ae.watch=function(e,t,n,r){if(e===ne&&(e=void 0),t===ne&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in L(i,e),t){var a=i[o],u=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(u):Array.isArray(u)?u:[u]}return i},Ae.props=Ae.methods=Ae.inject=Ae.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return L(i,e),t&&L(i,t),i},Ae.provide=Pe;var Fe=function(e,t){return void 0===t?e:t};function Ce(e,t,n){if("function"==typeof t&&(t=t.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[N(i)]={type:null});else if(l(n))for(var a in n)i=n[a],o[N(a)]=l(i)?i:{type:i};else 0;e.props=o}}(t),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?L({from:o},a):{from:a}}else 0}}(t),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(t),!t._base&&(t.extends&&(e=Ce(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Ce(e,t.mixins[r],n);var o,a={};for(o in e)u(o);for(o in t)_(e,o)||u(o);function u(r){var i=Ae[r]||Fe;a[r]=i(e[r],t[r],n,r)}return a}function Qe(e,t,n,r){if("string"==typeof n){var i=e[t];if(_(i,n))return i[n];var o=N(n);if(_(i,o))return i[o];var a=w(o);return _(i,a)?i[a]:i[n]||i[o]||i[a]}}function Ve(e,t,n,r){var i=t[e],o=!_(n,e),a=n[e],u=$e(Boolean,i.type);if(u>-1)if(o&&!_(i,"default"))a=!1;else if(""===a||a===I(e)){var s=$e(String,i.type);(s<0||u<s)&&(a=!0)}if(void 0===a){a=function(e,t,n){if(!_(t,"default"))return;var r=t.default;0;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==Ge(t.type)?r.call(e):r}(r,i,e);var c=Ne;we(!0),Ie(a),we(c)}return a}function Ge(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function Ke(e,t){return Ge(e)===Ge(t)}function $e(e,t){if(!Array.isArray(t))return Ke(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(Ke(t[n],e))return n;return-1}function qe(e,t,n){he();try{if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){Be(e,r,"errorCaptured hook")}}Be(e,t,n)}finally{ve()}}function Ue(e,t,n,r,i){var o;try{(o=n?e.apply(t,n):e.call(t))&&!o._isVue&&d(o)&&!o._handled&&(o.catch((function(e){return qe(e,r,i+" (Promise/async)")})),o._handled=!0)}catch(e){qe(e,r,i)}return o}function Be(e,t,n){if(V.errorHandler)try{return V.errorHandler.call(null,e,t,n)}catch(t){t!==e&&Ye(t,null,"config.errorHandler")}Ye(e,t,n)}function Ye(e,t,n){if(!Y&&!J||"undefined"==typeof console)throw e;console.error(e)}var Je,We=!1,He=[],ze=!1;function Xe(){ze=!1;var e=He.slice(0);He.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!=typeof Promise&&ue(Promise)){var Ze=Promise.resolve();Je=function(){Ze.then(Xe),ee&&setTimeout(A)},We=!0}else if(z||"undefined"==typeof MutationObserver||!ue(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Je=void 0!==n&&ue(n)?function(){n(Xe)}:function(){setTimeout(Xe,0)};else{var et=1,tt=new MutationObserver(Xe),nt=document.createTextNode(String(et));tt.observe(nt,{characterData:!0}),Je=function(){et=(et+1)%2,nt.data=String(et)},We=!0}function rt(e,t){var n;if(He.push((function(){if(e)try{e.call(t)}catch(e){qe(e,t,"nextTick")}else n&&n(t)})),ze||(ze=!0,Je()),!e&&"undefined"!=typeof Promise)return new Promise((function(e){n=e}))}var it=new se;function ot(e){!function e(t,n){var r,i,o=Array.isArray(t);if(!o&&!s(t)||Object.isFrozen(t)||t instanceof ye)return;if(t.__ob__){var a=t.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(o)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,it),it.clear()}var at=O((function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}}));function ut(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return Ue(r,null,arguments,t,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Ue(i[o],null,e,t,"v-on handler")}return n.fns=e,n}function st(e,t,n,r,o,u){var s,c,l,f;for(s in e)c=e[s],l=t[s],f=at(s),i(c)||(i(l)?(i(c.fns)&&(c=e[s]=ut(c,u)),a(f.once)&&(c=e[s]=o(f.name,c,f.capture)),n(f.name,c,f.capture,f.passive,f.params)):c!==l&&(l.fns=c,e[s]=l));for(s in t)i(e[s])&&r((f=at(s)).name,t[s],f.capture)}function ct(e,t,n){var r;e instanceof ye&&(e=e.data.hook||(e.data.hook={}));var u=e[t];function s(){n.apply(this,arguments),b(r.fns,s)}i(u)?r=ut([s]):o(u.fns)&&a(u.merged)?(r=u).fns.push(s):r=ut([u,s]),r.merged=!0,e[t]=r}function lt(e,t,n,r,i){if(o(t)){if(_(t,n))return e[n]=t[n],i||delete t[n],!0;if(_(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function ft(e){return u(e)?[be(e)]:Array.isArray(e)?function e(t,n){var r,s,c,l,f=[];for(r=0;r<t.length;r++)i(s=t[r])||"boolean"==typeof s||(c=f.length-1,l=f[c],Array.isArray(s)?s.length>0&&(pt((s=e(s,(n||"")+"_"+r))[0])&&pt(l)&&(f[c]=be(l.text+s[0].text),s.shift()),f.push.apply(f,s)):u(s)?pt(l)?f[c]=be(l.text+s):""!==s&&f.push(be(s)):pt(s)&&pt(l)?f[c]=be(l.text+s.text):(a(t._isVList)&&o(s.tag)&&i(s.key)&&o(n)&&(s.key="__vlist"+n+"_"+r+"__"),f.push(s)));return f}(e):void 0}function pt(e){return o(e)&&o(e.text)&&!1===e.isComment}function dt(e,t){if(e){for(var n=Object.create(null),r=ce?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){for(var a=e[o].from,u=t;u;){if(u._provided&&_(u._provided,a)){n[o]=u._provided[a];break}u=u.$parent}if(!u)if("default"in e[o]){var s=e[o].default;n[o]="function"==typeof s?s.call(t):s}else 0}}return n}}function ht(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var u=a.slot,s=n[u]||(n[u]=[]);"template"===o.tag?s.push.apply(s,o.children||[]):s.push(o)}}for(var c in n)n[c].every(vt)&&delete n[c];return n}function vt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function yt(e,t,n){var i,o=Object.keys(t).length>0,a=e?!!e.$stable:!o,u=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&n&&n!==r&&u===n.$key&&!o&&!n.$hasNormal)return n;for(var s in i={},e)e[s]&&"$"!==s[0]&&(i[s]=mt(t,s,e[s]))}else i={};for(var c in t)c in i||(i[c]=gt(t,c));return e&&Object.isExtensible(e)&&(e._normalized=i),$(i,"$stable",a),$(i,"$key",u),$(i,"$hasNormal",o),i}function mt(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});return(e=e&&"object"==typeof e&&!Array.isArray(e)?[e]:ft(e))&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function gt(e,t){return function(){return e[t]}}function bt(e,t){var n,r,i,a,u;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(s(e))if(ce&&e[Symbol.iterator]){n=[];for(var c=e[Symbol.iterator](),l=c.next();!l.done;)n.push(t(l.value,n.length)),l=c.next()}else for(a=Object.keys(e),n=new Array(a.length),r=0,i=a.length;r<i;r++)u=a[r],n[r]=t(e[u],u,r);return o(n)||(n=[]),n._isVList=!0,n}function Tt(e,t,n,r){var i,o=this.$scopedSlots[e];o?(n=n||{},r&&(n=L(L({},r),n)),i=o(n)||t):i=this.$slots[e]||t;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},i):i}function _t(e){return Qe(this.$options,"filters",e)||P}function Ot(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function Et(e,t,n,r,i){var o=V.keyCodes[t]||n;return i&&r&&!V.keyCodes[t]?Ot(i,r):o?Ot(o,e):r?I(r)!==t:void 0}function Nt(e,t,n,r,i){if(n)if(s(n)){var o;Array.isArray(n)&&(n=x(n));var a=function(a){if("class"===a||"style"===a||g(a))o=e;else{var u=e.attrs&&e.attrs.type;o=r||V.mustUseProp(t,u,a)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var s=N(a),c=I(a);s in o||c in o||(o[a]=n[a],i&&((e.on||(e.on={}))["update:"+a]=function(e){n[a]=e}))};for(var u in n)a(u)}return e}function wt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||It(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r}function St(e,t,n){return It(e,"__once__"+t+(n?"_"+n:""),!0),e}function It(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&jt(e[r],t+"_"+r,n);else jt(e,t,n)}function jt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function kt(e,t){if(t)if(l(t)){var n=e.on=e.on?L({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}return e}function Lt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var o=e[i];Array.isArray(o)?Lt(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return r&&(t.$key=r),t}function xt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"==typeof r&&r&&(e[t[n]]=t[n+1])}return e}function At(e,t){return"string"==typeof e?t+e:e}function Dt(e){e._o=St,e._n=v,e._s=h,e._l=bt,e._t=Tt,e._q=R,e._i=M,e._m=wt,e._f=_t,e._k=Et,e._b=Nt,e._v=be,e._e=ge,e._u=Lt,e._g=kt,e._d=xt,e._p=At}function Pt(e,t,n,i,o){var u,s=this,c=o.options;_(i,"_uid")?(u=Object.create(i))._original=i:(u=i,i=i._original);var l=a(c._compiled),f=!l;this.data=e,this.props=t,this.children=n,this.parent=i,this.listeners=e.on||r,this.injections=dt(c.inject,i),this.slots=function(){return s.$slots||yt(e.scopedSlots,s.$slots=ht(n,i)),s.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return yt(e.scopedSlots,this.slots())}}),l&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=yt(e.scopedSlots,this.$slots)),c._scopeId?this._c=function(e,t,n,r){var o=Gt(u,e,t,n,r,f);return o&&!Array.isArray(o)&&(o.fnScopeId=c._scopeId,o.fnContext=i),o}:this._c=function(e,t,n,r){return Gt(u,e,t,n,r,f)}}function Rt(e,t,n,r,i){var o=Te(e);return o.fnContext=n,o.fnOptions=r,t.slot&&((o.data||(o.data={})).slot=t.slot),o}function Mt(e,t){for(var n in t)e[N(n)]=t[n]}Dt(Pt.prototype);var Ft={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;Ft.prepatch(n,n)}else{(e.componentInstance=function(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns);return new e.componentOptions.Ctor(n)}(e,zt)).$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions;!function(e,t,n,i,o){0;var a=i.data.scopedSlots,u=e.$scopedSlots,s=!!(a&&!a.$stable||u!==r&&!u.$stable||a&&e.$scopedSlots.$key!==a.$key),c=!!(o||e.$options._renderChildren||s);e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i);if(e.$options._renderChildren=o,e.$attrs=i.data.attrs||r,e.$listeners=n||r,t&&e.$options.props){we(!1);for(var l=e._props,f=e.$options._propKeys||[],p=0;p<f.length;p++){var d=f[p],h=e.$options.props;l[d]=Ve(d,h,t,e)}we(!0),e.$options.propsData=t}n=n||r;var v=e.$options._parentListeners;e.$options._parentListeners=n,Ht(e,n,v),c&&(e.$slots=ht(o,i.context),e.$forceUpdate());0}(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,tn(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,rn.push(t)):en(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(n&&(t._directInactive=!0,Zt(t)))return;if(!t._inactive){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);tn(t,"deactivated")}}(t,!0):t.$destroy())}},Ct=Object.keys(Ft);function Qt(e,t,n,u,c){if(!i(e)){var l=n.$options._base;if(s(e)&&(e=l.extend(e)),"function"==typeof e){var f;if(i(e.cid)&&void 0===(e=function(e,t){if(a(e.error)&&o(e.errorComp))return e.errorComp;if(o(e.resolved))return e.resolved;var n=$t;n&&o(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n);if(a(e.loading)&&o(e.loadingComp))return e.loadingComp;if(n&&!o(e.owners)){var r=e.owners=[n],u=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return b(r,n)}));var f=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},p=F((function(n){e.resolved=qt(n,t),u?r.length=0:f(!0)})),h=F((function(t){o(e.errorComp)&&(e.error=!0,f(!0))})),v=e(p,h);return s(v)&&(d(v)?i(e.resolved)&&v.then(p,h):d(v.component)&&(v.component.then(p,h),o(v.error)&&(e.errorComp=qt(v.error,t)),o(v.loading)&&(e.loadingComp=qt(v.loading,t),0===v.delay?e.loading=!0:c=setTimeout((function(){c=null,i(e.resolved)&&i(e.error)&&(e.loading=!0,f(!1))}),v.delay||200)),o(v.timeout)&&(l=setTimeout((function(){l=null,i(e.resolved)&&h(null)}),v.timeout)))),u=!1,e.loading?e.loadingComp:e.resolved}}(f=e,l)))return function(e,t,n,r,i){var o=ge();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}(f,t,n,u,c);t=t||{},Nn(e),o(t.model)&&function(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var i=t.on||(t.on={}),a=i[r],u=t.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(u):a!==u)&&(i[r]=[u].concat(a)):i[r]=u}(e.options,t);var p=function(e,t,n){var r=t.options.props;if(!i(r)){var a={},u=e.attrs,s=e.props;if(o(u)||o(s))for(var c in r){var l=I(c);lt(a,s,c,l,!0)||lt(a,u,c,l,!1)}return a}}(t,e);if(a(e.options.functional))return function(e,t,n,i,a){var u=e.options,s={},c=u.props;if(o(c))for(var l in c)s[l]=Ve(l,c,t||r);else o(n.attrs)&&Mt(s,n.attrs),o(n.props)&&Mt(s,n.props);var f=new Pt(n,s,a,i,e),p=u.render.call(null,f._c,f);if(p instanceof ye)return Rt(p,n,f.parent,u,f);if(Array.isArray(p)){for(var d=ft(p)||[],h=new Array(d.length),v=0;v<d.length;v++)h[v]=Rt(d[v],n,f.parent,u,f);return h}}(e,p,t,n,u);var h=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var v=t.slot;t={},v&&(t.slot=v)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<Ct.length;n++){var r=Ct[n],i=t[r],o=Ft[r];i===o||i&&i._merged||(t[r]=i?Vt(o,i):o)}}(t);var y=e.options.name||c;return new ye("vue-component-"+e.cid+(y?"-"+y:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:p,listeners:h,tag:c,children:u},f)}}}function Vt(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function Gt(e,t,n,r,c,l){return(Array.isArray(n)||u(n))&&(c=r,r=n,n=void 0),a(l)&&(c=2),function(e,t,n,r,u){if(o(n)&&o(n.__ob__))return ge();o(n)&&o(n.is)&&(t=n.is);if(!t)return ge();0;Array.isArray(r)&&"function"==typeof r[0]&&((n=n||{}).scopedSlots={default:r[0]},r.length=0);2===u?r=ft(r):1===u&&(r=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(r));var c,l;if("string"==typeof t){var f;l=e.$vnode&&e.$vnode.ns||V.getTagNamespace(t),c=V.isReservedTag(t)?new ye(V.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!o(f=Qe(e.$options,"components",t))?new ye(t,n,r,void 0,void 0,e):Qt(f,n,e,r,t)}else c=Qt(t,n,e,r);return Array.isArray(c)?c:o(c)?(o(l)&&function e(t,n,r){t.ns=n,"foreignObject"===t.tag&&(n=void 0,r=!0);if(o(t.children))for(var u=0,s=t.children.length;u<s;u++){var c=t.children[u];o(c.tag)&&(i(c.ns)||a(r)&&"svg"!==c.tag)&&e(c,n,r)}}(c,l),o(n)&&function(e){s(e.style)&&ot(e.style);s(e.class)&&ot(e.class)}(n),c):ge()}(e,t,n,r,c)}var Kt,$t=null;function qt(e,t){return(e.__esModule||ce&&"Module"===e[Symbol.toStringTag])&&(e=e.default),s(e)?t.extend(e):e}function Ut(e){return e.isComment&&e.asyncFactory}function Bt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(o(n)&&(o(n.componentOptions)||Ut(n)))return n}}function Yt(e,t){Kt.$on(e,t)}function Jt(e,t){Kt.$off(e,t)}function Wt(e,t){var n=Kt;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function Ht(e,t,n){Kt=e,st(t,n||{},Yt,Jt,Wt,e),Kt=void 0}var zt=null;function Xt(e){var t=zt;return zt=e,function(){zt=t}}function Zt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function en(e,t){if(t){if(e._directInactive=!1,Zt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)en(e.$children[n]);tn(e,"activated")}}function tn(e,t){he();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,o=n.length;i<o;i++)Ue(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),ve()}var nn=[],rn=[],on={},an=!1,un=!1,sn=0;var cn=0,ln=Date.now;if(Y&&!z){var fn=window.performance;fn&&"function"==typeof fn.now&&ln()>document.createEvent("Event").timeStamp&&(ln=function(){return fn.now()})}function pn(){var e,t;for(cn=ln(),un=!0,nn.sort((function(e,t){return e.id-t.id})),sn=0;sn<nn.length;sn++)(e=nn[sn]).before&&e.before(),t=e.id,on[t]=null,e.run();var n=rn.slice(),r=nn.slice();sn=nn.length=rn.length=0,on={},an=un=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,en(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&tn(r,"updated")}}(r),ae&&V.devtools&&ae.emit("flush")}var dn=0,hn=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++dn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new se,this.newDepIds=new se,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!q.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}(t),this.getter||(this.getter=A)),this.value=this.lazy?void 0:this.get()};hn.prototype.get=function(){var e;he(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;qe(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ot(e),ve(),this.cleanupDeps()}return e},hn.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},hn.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},hn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==on[t]){if(on[t]=!0,un){for(var n=nn.length-1;n>sn&&nn[n].id>e.id;)n--;nn.splice(n+1,0,e)}else nn.push(e);an||(an=!0,rt(pn))}}(this)},hn.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||s(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){qe(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},hn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},hn.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},hn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||b(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var vn={enumerable:!0,configurable:!0,get:A,set:A};function yn(e,t,n){vn.get=function(){return this[t][n]},vn.set=function(e){this[t][n]=e},Object.defineProperty(e,n,vn)}function mn(e){e._watchers=[];var t=e.$options;t.props&&function(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[];e.$parent&&we(!1);var o=function(o){i.push(o);var a=Ve(o,t,n,e);je(r,o,a),o in e||yn(e,"_props",o)};for(var a in t)o(a);we(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]="function"!=typeof t[n]?A:j(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;l(t=e._data="function"==typeof t?function(e,t){he();try{return e.call(t,t)}catch(e){return qe(e,t,"data()"),{}}finally{ve()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var o=n[i];0,r&&_(r,o)||K(o)||yn(e,"_data",o)}Ie(t,!0)}(e):Ie(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=oe();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;0,r||(n[i]=new hn(e,a||A,A,gn)),i in e||bn(e,i,o)}}(e,t.computed),t.watch&&t.watch!==ne&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)On(e,n,r[i]);else On(e,n,r)}}(e,t.watch)}var gn={lazy:!0};function bn(e,t,n){var r=!oe();"function"==typeof n?(vn.get=r?Tn(t):_n(n),vn.set=A):(vn.get=n.get?r&&!1!==n.cache?Tn(t):_n(n.get):A,vn.set=n.set||A),Object.defineProperty(e,t,vn)}function Tn(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),pe.target&&t.depend(),t.value}}function _n(e){return function(){return e.call(this,this)}}function On(e,t,n,r){return l(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}var En=0;function Nn(e){var t=e.options;if(e.super){var n=Nn(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}(e);r&&L(e.extendOptions,r),(t=e.options=Ce(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function wn(e){this._init(e)}function Sn(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name;var a=function(e){this._init(e)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=t++,a.options=Ce(n.options,e),a.super=n,a.options.props&&function(e){var t=e.options.props;for(var n in t)yn(e.prototype,"_props",n)}(a),a.options.computed&&function(e){var t=e.options.computed;for(var n in t)bn(e.prototype,n,t[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,C.forEach((function(e){a[e]=n[e]})),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=L({},a.options),i[r]=a,a}}function In(e){return e&&(e.Ctor.options.name||e.tag)}function jn(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:!!f(e)&&e.test(t)}function kn(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var u=In(a.componentOptions);u&&!t(u)&&Ln(n,o,r,i)}}}function Ln(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,b(n,t)}!function(e){e.prototype._init=function(e){var t=this;t._uid=En++,t._isVue=!0,e&&e._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(t,e):t.$options=Ce(Nn(t.constructor),e||{},t),t._renderProxy=t,t._self=t,function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}(t),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Ht(e,t)}(t),function(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=ht(t._renderChildren,i),e.$scopedSlots=r,e._c=function(t,n,r,i){return Gt(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Gt(e,t,n,r,i,!0)};var o=n&&n.data;je(e,"$attrs",o&&o.attrs||r,null,!0),je(e,"$listeners",t._parentListeners||r,null,!0)}(t),tn(t,"beforeCreate"),function(e){var t=dt(e.$options.inject,e);t&&(we(!1),Object.keys(t).forEach((function(n){je(e,n,t[n])})),we(!0))}(t),mn(t),function(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}(t),tn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(wn),function(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=ke,e.prototype.$delete=Le,e.prototype.$watch=function(e,t,n){if(l(t))return On(this,e,t,n);(n=n||{}).user=!0;var r=new hn(this,e,t,n);if(n.immediate)try{t.call(this,r.value)}catch(e){qe(e,this,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}(wn),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,o=e.length;i<o;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;for(var u=a.length;u--;)if((o=a[u])===t||o.fn===t){a.splice(u,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?k(n):n;for(var r=k(arguments,1),i='event handler for "'+e+'"',o=0,a=n.length;o<a;o++)Ue(n[o],t,r,t,i)}return t}}(wn),function(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,o=Xt(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){tn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||b(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),tn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(wn),function(e){Dt(e.prototype),e.prototype.$nextTick=function(e){return rt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=yt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{$t=t,e=r.call(t._renderProxy,t.$createElement)}catch(n){qe(n,t,"render"),e=t._vnode}finally{$t=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof ye||(e=ge()),e.parent=i,e}}(wn);var xn=[String,RegExp,Array],An={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:xn,exclude:xn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Ln(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",(function(t){kn(e,(function(e){return jn(t,e)}))})),this.$watch("exclude",(function(t){kn(e,(function(e){return!jn(t,e)}))}))},render:function(){var e=this.$slots.default,t=Bt(e),n=t&&t.componentOptions;if(n){var r=In(n),i=this.include,o=this.exclude;if(i&&(!r||!jn(i,r))||o&&r&&jn(o,r))return t;var a=this.cache,u=this.keys,s=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;a[s]?(t.componentInstance=a[s].componentInstance,b(u,s),u.push(s)):(a[s]=t,u.push(s),this.max&&u.length>parseInt(this.max)&&Ln(a,u[0],u,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}};!function(e){var t={get:function(){return V}};Object.defineProperty(e,"config",t),e.util={warn:le,extend:L,mergeOptions:Ce,defineReactive:je},e.set=ke,e.delete=Le,e.nextTick=rt,e.observable=function(e){return Ie(e),e},e.options=Object.create(null),C.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,L(e.options.components,An),function(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=k(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}(e),function(e){e.mixin=function(e){return this.options=Ce(this.options,e),this}}(e),Sn(e),function(e){C.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}(e)}(wn),Object.defineProperty(wn.prototype,"$isServer",{get:oe}),Object.defineProperty(wn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(wn,"FunctionalRenderContext",{value:Pt}),wn.version="2.6.11";var Dn=y("style,class"),Pn=y("input,textarea,option,select,progress"),Rn=function(e,t,n){return"value"===n&&Pn(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Mn=y("contenteditable,draggable,spellcheck"),Fn=y("events,caret,typing,plaintext-only"),Cn=y("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Qn="http://www.w3.org/1999/xlink",Vn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Gn=function(e){return Vn(e)?e.slice(6,e.length):""},Kn=function(e){return null==e||!1===e};function $n(e){for(var t=e.data,n=e,r=e;o(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(t=qn(r.data,t));for(;o(n=n.parent);)n&&n.data&&(t=qn(t,n.data));return function(e,t){if(o(e)||o(t))return Un(e,Bn(t));return""}(t.staticClass,t.class)}function qn(e,t){return{staticClass:Un(e.staticClass,t.staticClass),class:o(e.class)?[e.class,t.class]:t.class}}function Un(e,t){return e?t?e+" "+t:e:t||""}function Bn(e){return Array.isArray(e)?function(e){for(var t,n="",r=0,i=e.length;r<i;r++)o(t=Bn(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}(e):s(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var Yn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Jn=y("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Wn=y("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Hn=function(e){return Jn(e)||Wn(e)};function zn(e){return Wn(e)?"svg":"math"===e?"math":void 0}var Xn=Object.create(null);var Zn=y("text,number,password,search,email,tel,url");function er(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}var tr=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(e,t){return document.createElementNS(Yn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),nr={create:function(e,t){rr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(rr(e,!0),rr(t))},destroy:function(e){rr(e,!0)}};function rr(e,t){var n=e.data.ref;if(o(n)){var r=e.context,i=e.componentInstance||e.elm,a=r.$refs;t?Array.isArray(a[n])?b(a[n],i):a[n]===i&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])?a[n].indexOf(i)<0&&a[n].push(i):a[n]=[i]:a[n]=i}}var ir=new ye("",{},[]),or=["create","activate","update","remove","destroy"];function ar(e,t){return e.key===t.key&&(e.tag===t.tag&&e.isComment===t.isComment&&o(e.data)===o(t.data)&&function(e,t){if("input"!==e.tag)return!0;var n,r=o(n=e.data)&&o(n=n.attrs)&&n.type,i=o(n=t.data)&&o(n=n.attrs)&&n.type;return r===i||Zn(r)&&Zn(i)}(e,t)||a(e.isAsyncPlaceholder)&&e.asyncFactory===t.asyncFactory&&i(t.asyncFactory.error))}function ur(e,t,n){var r,i,a={};for(r=t;r<=n;++r)o(i=e[r].key)&&(a[i]=r);return a}var sr={create:cr,update:cr,destroy:function(e){cr(e,ir)}};function cr(e,t){(e.data.directives||t.data.directives)&&function(e,t){var n,r,i,o=e===ir,a=t===ir,u=fr(e.data.directives,e.context),s=fr(t.data.directives,t.context),c=[],l=[];for(n in s)r=u[n],i=s[n],r?(i.oldValue=r.value,i.oldArg=r.arg,dr(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(dr(i,"bind",t,e),i.def&&i.def.inserted&&c.push(i));if(c.length){var f=function(){for(var n=0;n<c.length;n++)dr(c[n],"inserted",t,e)};o?ct(t,"insert",f):f()}l.length&&ct(t,"postpatch",(function(){for(var n=0;n<l.length;n++)dr(l[n],"componentUpdated",t,e)}));if(!o)for(n in u)s[n]||dr(u[n],"unbind",e,e,a)}(e,t)}var lr=Object.create(null);function fr(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=lr),i[pr(r)]=r,r.def=Qe(t.$options,"directives",r.name);return i}function pr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function dr(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){qe(r,n.context,"directive "+e.name+" "+t+" hook")}}var hr=[nr,sr];function vr(e,t){var n=t.componentOptions;if(!(o(n)&&!1===n.Ctor.options.inheritAttrs||i(e.data.attrs)&&i(t.data.attrs))){var r,a,u=t.elm,s=e.data.attrs||{},c=t.data.attrs||{};for(r in o(c.__ob__)&&(c=t.data.attrs=L({},c)),c)a=c[r],s[r]!==a&&yr(u,r,a);for(r in(z||Z)&&c.value!==s.value&&yr(u,"value",c.value),s)i(c[r])&&(Vn(r)?u.removeAttributeNS(Qn,Gn(r)):Mn(r)||u.removeAttribute(r))}}function yr(e,t,n){e.tagName.indexOf("-")>-1?mr(e,t,n):Cn(t)?Kn(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Mn(t)?e.setAttribute(t,function(e,t){return Kn(t)||"false"===t?"false":"contenteditable"===e&&Fn(t)?t:"true"}(t,n)):Vn(t)?Kn(n)?e.removeAttributeNS(Qn,Gn(t)):e.setAttributeNS(Qn,t,n):mr(e,t,n)}function mr(e,t,n){if(Kn(n))e.removeAttribute(t);else{if(z&&!X&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var gr={create:vr,update:vr};function br(e,t){var n=t.elm,r=t.data,a=e.data;if(!(i(r.staticClass)&&i(r.class)&&(i(a)||i(a.staticClass)&&i(a.class)))){var u=$n(t),s=n._transitionClasses;o(s)&&(u=Un(u,Bn(s))),u!==n._prevClass&&(n.setAttribute("class",u),n._prevClass=u)}}var Tr,_r,Or,Er,Nr,wr,Sr={create:br,update:br},Ir=/[\w).+\-_$\]]/;function jr(e){var t,n,r,i,o,a=!1,u=!1,s=!1,c=!1,l=0,f=0,p=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),a)39===t&&92!==n&&(a=!1);else if(u)34===t&&92!==n&&(u=!1);else if(s)96===t&&92!==n&&(s=!1);else if(c)47===t&&92!==n&&(c=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||l||f||p){switch(t){case 34:u=!0;break;case 39:a=!0;break;case 96:s=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===t){for(var h=r-1,v=void 0;h>=0&&" "===(v=e.charAt(h));h--);v&&Ir.test(v)||(c=!0)}}else void 0===i?(d=r+1,i=e.slice(0,r).trim()):y();function y(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==d&&y(),o)for(r=0;r<o.length;r++)i=kr(i,o[r]);return i}function kr(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==i?","+i:i)}function Lr(e,t){console.error("[Vue compiler]: "+e)}function xr(e,t){return e?e.map((function(e){return e[t]})).filter((function(e){return e})):[]}function Ar(e,t,n,r,i){(e.props||(e.props=[])).push(Gr({name:t,value:n,dynamic:i},r)),e.plain=!1}function Dr(e,t,n,r,i){(i?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[])).push(Gr({name:t,value:n,dynamic:i},r)),e.plain=!1}function Pr(e,t,n,r){e.attrsMap[t]=n,e.attrsList.push(Gr({name:t,value:n},r))}function Rr(e,t,n,r,i,o,a,u){(e.directives||(e.directives=[])).push(Gr({name:t,rawName:n,value:r,arg:i,isDynamicArg:o,modifiers:a},u)),e.plain=!1}function Mr(e,t,n){return n?"_p("+t+',"'+e+'")':e+t}function Fr(e,t,n,i,o,a,u,s){var c;(i=i||r).right?s?t="("+t+")==='click'?'contextmenu':("+t+")":"click"===t&&(t="contextmenu",delete i.right):i.middle&&(s?t="("+t+")==='click'?'mouseup':("+t+")":"click"===t&&(t="mouseup")),i.capture&&(delete i.capture,t=Mr("!",t,s)),i.once&&(delete i.once,t=Mr("~",t,s)),i.passive&&(delete i.passive,t=Mr("&",t,s)),i.native?(delete i.native,c=e.nativeEvents||(e.nativeEvents={})):c=e.events||(e.events={});var l=Gr({value:n.trim(),dynamic:s},u);i!==r&&(l.modifiers=i);var f=c[t];Array.isArray(f)?o?f.unshift(l):f.push(l):c[t]=f?o?[l,f]:[f,l]:l,e.plain=!1}function Cr(e,t,n){var r=Qr(e,":"+t)||Qr(e,"v-bind:"+t);if(null!=r)return jr(r);if(!1!==n){var i=Qr(e,t);if(null!=i)return JSON.stringify(i)}}function Qr(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function Vr(e,t){for(var n=e.attrsList,r=0,i=n.length;r<i;r++){var o=n[r];if(t.test(o.name))return n.splice(r,1),o}}function Gr(e,t){return t&&(null!=t.start&&(e.start=t.start),null!=t.end&&(e.end=t.end)),e}function Kr(e,t,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=$r(t,o);e.model={value:"("+t+")",expression:JSON.stringify(t),callback:"function ($$v) {"+a+"}"}}function $r(e,t){var n=function(e){if(e=e.trim(),Tr=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<Tr-1)return(Er=e.lastIndexOf("."))>-1?{exp:e.slice(0,Er),key:'"'+e.slice(Er+1)+'"'}:{exp:e,key:null};_r=e,Er=Nr=wr=0;for(;!Ur();)Br(Or=qr())?Jr(Or):91===Or&&Yr(Or);return{exp:e.slice(0,Nr),key:e.slice(Nr+1,wr)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function qr(){return _r.charCodeAt(++Er)}function Ur(){return Er>=Tr}function Br(e){return 34===e||39===e}function Yr(e){var t=1;for(Nr=Er;!Ur();)if(Br(e=qr()))Jr(e);else if(91===e&&t++,93===e&&t--,0===t){wr=Er;break}}function Jr(e){for(var t=e;!Ur()&&(e=qr())!==t;);}var Wr;function Hr(e,t,n){var r=Wr;return function i(){var o=t.apply(null,arguments);null!==o&&Zr(e,i,n,r)}}var zr=We&&!(te&&Number(te[1])<=53);function Xr(e,t,n,r){if(zr){var i=cn,o=t;t=o._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return o.apply(this,arguments)}}Wr.addEventListener(e,t,re?{capture:n,passive:r}:n)}function Zr(e,t,n,r){(r||Wr).removeEventListener(e,t._wrapper||t,n)}function ei(e,t){if(!i(e.data.on)||!i(t.data.on)){var n=t.data.on||{},r=e.data.on||{};Wr=t.elm,function(e){if(o(e.__r)){var t=z?"change":"input";e[t]=[].concat(e.__r,e[t]||[]),delete e.__r}o(e.__c)&&(e.change=[].concat(e.__c,e.change||[]),delete e.__c)}(n),st(n,r,Xr,Zr,Hr,t.context),Wr=void 0}}var ti,ni={create:ei,update:ei};function ri(e,t){if(!i(e.data.domProps)||!i(t.data.domProps)){var n,r,a=t.elm,u=e.data.domProps||{},s=t.data.domProps||{};for(n in o(s.__ob__)&&(s=t.data.domProps=L({},s)),u)n in s||(a[n]="");for(n in s){if(r=s[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===u[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n&&"PROGRESS"!==a.tagName){a._value=r;var c=i(r)?"":String(r);ii(a,c)&&(a.value=c)}else if("innerHTML"===n&&Wn(a.tagName)&&i(a.innerHTML)){(ti=ti||document.createElement("div")).innerHTML="<svg>"+r+"</svg>";for(var l=ti.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;l.firstChild;)a.appendChild(l.firstChild)}else if(r!==u[n])try{a[n]=r}catch(e){}}}}function ii(e,t){return!e.composing&&("OPTION"===e.tagName||function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(e,t)||function(e,t){var n=e.value,r=e._vModifiers;if(o(r)){if(r.number)return v(n)!==v(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}(e,t))}var oi={create:ri,update:ri},ai=O((function(e){var t={},n=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach((function(e){if(e){var r=e.split(n);r.length>1&&(t[r[0].trim()]=r[1].trim())}})),t}));function ui(e){var t=si(e.style);return e.staticStyle?L(e.staticStyle,t):t}function si(e){return Array.isArray(e)?x(e):"string"==typeof e?ai(e):e}var ci,li=/^--/,fi=/\s*!important$/,pi=function(e,t,n){if(li.test(t))e.style.setProperty(t,n);else if(fi.test(n))e.style.setProperty(I(t),n.replace(fi,""),"important");else{var r=hi(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},di=["Webkit","Moz","ms"],hi=O((function(e){if(ci=ci||document.createElement("div").style,"filter"!==(e=N(e))&&e in ci)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<di.length;n++){var r=di[n]+t;if(r in ci)return r}}));function vi(e,t){var n=t.data,r=e.data;if(!(i(n.staticStyle)&&i(n.style)&&i(r.staticStyle)&&i(r.style))){var a,u,s=t.elm,c=r.staticStyle,l=r.normalizedStyle||r.style||{},f=c||l,p=si(t.data.style)||{};t.data.normalizedStyle=o(p.__ob__)?L({},p):p;var d=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=ui(i.data))&&L(r,n);(n=ui(e.data))&&L(r,n);for(var o=e;o=o.parent;)o.data&&(n=ui(o.data))&&L(r,n);return r}(t,!0);for(u in f)i(d[u])&&pi(s,u,"");for(u in d)(a=d[u])!==f[u]&&pi(s,u,null==a?"":a)}}var yi={create:vi,update:vi},mi=/\s+/;function gi(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(mi).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function bi(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(mi).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function Ti(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&L(t,_i(e.name||"v")),L(t,e),t}return"string"==typeof e?_i(e):void 0}}var _i=O((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),Oi=Y&&!X,Ei="transition",Ni="transitionend",wi="animation",Si="animationend";Oi&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Ei="WebkitTransition",Ni="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(wi="WebkitAnimation",Si="webkitAnimationEnd"));var Ii=Y?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function ji(e){Ii((function(){Ii(e)}))}function ki(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),gi(e,t))}function Li(e,t){e._transitionClasses&&b(e._transitionClasses,t),bi(e,t)}function xi(e,t,n){var r=Di(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var u="transition"===i?Ni:Si,s=0,c=function(){e.removeEventListener(u,l),n()},l=function(t){t.target===e&&++s>=a&&c()};setTimeout((function(){s<a&&c()}),o+1),e.addEventListener(u,l)}var Ai=/\b(transform|all)(,|$)/;function Di(e,t){var n,r=window.getComputedStyle(e),i=(r[Ei+"Delay"]||"").split(", "),o=(r[Ei+"Duration"]||"").split(", "),a=Pi(i,o),u=(r[wi+"Delay"]||"").split(", "),s=(r[wi+"Duration"]||"").split(", "),c=Pi(u,s),l=0,f=0;return"transition"===t?a>0&&(n="transition",l=a,f=o.length):"animation"===t?c>0&&(n="animation",l=c,f=s.length):f=(n=(l=Math.max(a,c))>0?a>c?"transition":"animation":null)?"transition"===n?o.length:s.length:0,{type:n,timeout:l,propCount:f,hasTransform:"transition"===n&&Ai.test(r[Ei+"Property"])}}function Pi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return Ri(t)+Ri(e[n])})))}function Ri(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Mi(e,t){var n=e.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Ti(e.data.transition);if(!i(r)&&!o(n._enterCb)&&1===n.nodeType){for(var a=r.css,u=r.type,c=r.enterClass,l=r.enterToClass,f=r.enterActiveClass,p=r.appearClass,d=r.appearToClass,h=r.appearActiveClass,y=r.beforeEnter,m=r.enter,g=r.afterEnter,b=r.enterCancelled,T=r.beforeAppear,_=r.appear,O=r.afterAppear,E=r.appearCancelled,N=r.duration,w=zt,S=zt.$vnode;S&&S.parent;)w=S.context,S=S.parent;var I=!w._isMounted||!e.isRootInsert;if(!I||_||""===_){var j=I&&p?p:c,k=I&&h?h:f,L=I&&d?d:l,x=I&&T||y,A=I&&"function"==typeof _?_:m,D=I&&O||g,P=I&&E||b,R=v(s(N)?N.enter:N);0;var M=!1!==a&&!X,C=Qi(A),Q=n._enterCb=F((function(){M&&(Li(n,L),Li(n,k)),Q.cancelled?(M&&Li(n,j),P&&P(n)):D&&D(n),n._enterCb=null}));e.data.show||ct(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),A&&A(n,Q)})),x&&x(n),M&&(ki(n,j),ki(n,k),ji((function(){Li(n,j),Q.cancelled||(ki(n,L),C||(Ci(R)?setTimeout(Q,R):xi(n,u,Q)))}))),e.data.show&&(t&&t(),A&&A(n,Q)),M||C||Q()}}}function Fi(e,t){var n=e.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Ti(e.data.transition);if(i(r)||1!==n.nodeType)return t();if(!o(n._leaveCb)){var a=r.css,u=r.type,c=r.leaveClass,l=r.leaveToClass,f=r.leaveActiveClass,p=r.beforeLeave,d=r.leave,h=r.afterLeave,y=r.leaveCancelled,m=r.delayLeave,g=r.duration,b=!1!==a&&!X,T=Qi(d),_=v(s(g)?g.leave:g);0;var O=n._leaveCb=F((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),b&&(Li(n,l),Li(n,f)),O.cancelled?(b&&Li(n,c),y&&y(n)):(t(),h&&h(n)),n._leaveCb=null}));m?m(E):E()}function E(){O.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),p&&p(n),b&&(ki(n,c),ki(n,f),ji((function(){Li(n,c),O.cancelled||(ki(n,l),T||(Ci(_)?setTimeout(O,_):xi(n,u,O)))}))),d&&d(n,O),b||T||O())}}function Ci(e){return"number"==typeof e&&!isNaN(e)}function Qi(e){if(i(e))return!1;var t=e.fns;return o(t)?Qi(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Vi(e,t){!0!==t.data.show&&Mi(t)}var Gi=function(e){var t,n,r={},s=e.modules,c=e.nodeOps;for(t=0;t<or.length;++t)for(r[or[t]]=[],n=0;n<s.length;++n)o(s[n][or[t]])&&r[or[t]].push(s[n][or[t]]);function l(e){var t=c.parentNode(e);o(t)&&c.removeChild(t,e)}function f(e,t,n,i,u,s,l){if(o(e.elm)&&o(s)&&(e=s[l]=Te(e)),e.isRootInsert=!u,!function(e,t,n,i){var u=e.data;if(o(u)){var s=o(e.componentInstance)&&u.keepAlive;if(o(u=u.hook)&&o(u=u.init)&&u(e,!1),o(e.componentInstance))return p(e,t),d(n,e.elm,i),a(s)&&function(e,t,n,i){var a,u=e;for(;u.componentInstance;)if(u=u.componentInstance._vnode,o(a=u.data)&&o(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](ir,u);t.push(u);break}d(n,e.elm,i)}(e,t,n,i),!0}}(e,t,n,i)){var f=e.data,v=e.children,y=e.tag;o(y)?(e.elm=e.ns?c.createElementNS(e.ns,y):c.createElement(y,e),g(e),h(e,v,t),o(f)&&m(e,t),d(n,e.elm,i)):a(e.isComment)?(e.elm=c.createComment(e.text),d(n,e.elm,i)):(e.elm=c.createTextNode(e.text),d(n,e.elm,i))}}function p(e,t){o(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,v(e)?(m(e,t),g(e)):(rr(e),t.push(e))}function d(e,t,n){o(e)&&(o(n)?c.parentNode(n)===e&&c.insertBefore(e,t,n):c.appendChild(e,t))}function h(e,t,n){if(Array.isArray(t)){0;for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r)}else u(e.text)&&c.appendChild(e.elm,c.createTextNode(String(e.text)))}function v(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return o(e.tag)}function m(e,n){for(var i=0;i<r.create.length;++i)r.create[i](ir,e);o(t=e.data.hook)&&(o(t.create)&&t.create(ir,e),o(t.insert)&&n.push(e))}function g(e){var t;if(o(t=e.fnScopeId))c.setStyleScope(e.elm,t);else for(var n=e;n;)o(t=n.context)&&o(t=t.$options._scopeId)&&c.setStyleScope(e.elm,t),n=n.parent;o(t=zt)&&t!==e.context&&t!==e.fnContext&&o(t=t.$options._scopeId)&&c.setStyleScope(e.elm,t)}function b(e,t,n,r,i,o){for(;r<=i;++r)f(n[r],o,e,t,!1,n,r)}function T(e){var t,n,i=e.data;if(o(i))for(o(t=i.hook)&&o(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(o(t=e.children))for(n=0;n<e.children.length;++n)T(e.children[n])}function _(e,t,n){for(;t<=n;++t){var r=e[t];o(r)&&(o(r.tag)?(O(r),T(r)):l(r.elm))}}function O(e,t){if(o(t)||o(e.data)){var n,i=r.remove.length+1;for(o(t)?t.listeners+=i:t=function(e,t){function n(){0==--n.listeners&&l(e)}return n.listeners=t,n}(e.elm,i),o(n=e.componentInstance)&&o(n=n._vnode)&&o(n.data)&&O(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);o(n=e.data.hook)&&o(n=n.remove)?n(e,t):t()}else l(e.elm)}function E(e,t,n,r){for(var i=n;i<r;i++){var a=t[i];if(o(a)&&ar(e,a))return i}}function N(e,t,n,u,s,l){if(e!==t){o(t.elm)&&o(u)&&(t=u[s]=Te(t));var p=t.elm=e.elm;if(a(e.isAsyncPlaceholder))o(t.asyncFactory.resolved)?I(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,h=t.data;o(h)&&o(d=h.hook)&&o(d=d.prepatch)&&d(e,t);var y=e.children,m=t.children;if(o(h)&&v(t)){for(d=0;d<r.update.length;++d)r.update[d](e,t);o(d=h.hook)&&o(d=d.update)&&d(e,t)}i(t.text)?o(y)&&o(m)?y!==m&&function(e,t,n,r,a){var u,s,l,p=0,d=0,h=t.length-1,v=t[0],y=t[h],m=n.length-1,g=n[0],T=n[m],O=!a;for(0;p<=h&&d<=m;)i(v)?v=t[++p]:i(y)?y=t[--h]:ar(v,g)?(N(v,g,r,n,d),v=t[++p],g=n[++d]):ar(y,T)?(N(y,T,r,n,m),y=t[--h],T=n[--m]):ar(v,T)?(N(v,T,r,n,m),O&&c.insertBefore(e,v.elm,c.nextSibling(y.elm)),v=t[++p],T=n[--m]):ar(y,g)?(N(y,g,r,n,d),O&&c.insertBefore(e,y.elm,v.elm),y=t[--h],g=n[++d]):(i(u)&&(u=ur(t,p,h)),i(s=o(g.key)?u[g.key]:E(g,t,p,h))?f(g,r,e,v.elm,!1,n,d):ar(l=t[s],g)?(N(l,g,r,n,d),t[s]=void 0,O&&c.insertBefore(e,l.elm,v.elm)):f(g,r,e,v.elm,!1,n,d),g=n[++d]);p>h?b(e,i(n[m+1])?null:n[m+1].elm,n,d,m,r):d>m&&_(t,p,h)}(p,y,m,n,l):o(m)?(o(e.text)&&c.setTextContent(p,""),b(p,null,m,0,m.length-1,n)):o(y)?_(y,0,y.length-1):o(e.text)&&c.setTextContent(p,""):e.text!==t.text&&c.setTextContent(p,t.text),o(h)&&o(d=h.hook)&&o(d=d.postpatch)&&d(e,t)}}}function w(e,t,n){if(a(n)&&o(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var S=y("attrs,class,staticClass,staticStyle,key");function I(e,t,n,r){var i,u=t.tag,s=t.data,c=t.children;if(r=r||s&&s.pre,t.elm=e,a(t.isComment)&&o(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(o(s)&&(o(i=s.hook)&&o(i=i.init)&&i(t,!0),o(i=t.componentInstance)))return p(t,n),!0;if(o(u)){if(o(c))if(e.hasChildNodes())if(o(i=s)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,f=e.firstChild,d=0;d<c.length;d++){if(!f||!I(f,c[d],n,r)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else h(t,c,n);if(o(s)){var v=!1;for(var y in s)if(!S(y)){v=!0,m(t,n);break}!v&&s.class&&ot(s.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,u){if(!i(t)){var s,l=!1,p=[];if(i(e))l=!0,f(t,p);else{var d=o(e.nodeType);if(!d&&ar(e,t))N(e,t,p,null,null,u);else{if(d){if(1===e.nodeType&&e.hasAttribute("data-server-rendered")&&(e.removeAttribute("data-server-rendered"),n=!0),a(n)&&I(e,t,p))return w(t,p,!0),e;s=e,e=new ye(c.tagName(s).toLowerCase(),{},[],void 0,s)}var h=e.elm,y=c.parentNode(h);if(f(t,p,h._leaveCb?null:y,c.nextSibling(h)),o(t.parent))for(var m=t.parent,g=v(t);m;){for(var b=0;b<r.destroy.length;++b)r.destroy[b](m);if(m.elm=t.elm,g){for(var O=0;O<r.create.length;++O)r.create[O](ir,m);var E=m.data.hook.insert;if(E.merged)for(var S=1;S<E.fns.length;S++)E.fns[S]()}else rr(m);m=m.parent}o(y)?_([e],0,0):o(e.tag)&&T(e)}}return w(t,p,l),t.elm}o(e)&&T(e)}}({nodeOps:tr,modules:[gr,Sr,ni,oi,yi,Y?{create:Vi,activate:Vi,remove:function(e,t){!0!==e.data.show?Fi(e,t):t()}}:{}].concat(hr)});X&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&Wi(e,"input")}));var Ki={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ct(n,"postpatch",(function(){Ki.componentUpdated(e,t,n)})):$i(e,t,n.context),e._vOptions=[].map.call(e.options,Bi)):("textarea"===n.tag||Zn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Yi),e.addEventListener("compositionend",Ji),e.addEventListener("change",Ji),X&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){$i(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Bi);if(i.some((function(e,t){return!R(e,r[t])})))(e.multiple?t.value.some((function(e){return Ui(e,i)})):t.value!==t.oldValue&&Ui(t.value,i))&&Wi(e,"change")}}};function $i(e,t,n){qi(e,t,n),(z||Z)&&setTimeout((function(){qi(e,t,n)}),0)}function qi(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,u=0,s=e.options.length;u<s;u++)if(a=e.options[u],i)o=M(r,Bi(a))>-1,a.selected!==o&&(a.selected=o);else if(R(Bi(a),r))return void(e.selectedIndex!==u&&(e.selectedIndex=u));i||(e.selectedIndex=-1)}}function Ui(e,t){return t.every((function(t){return!R(t,e)}))}function Bi(e){return"_value"in e?e._value:e.value}function Yi(e){e.target.composing=!0}function Ji(e){e.target.composing&&(e.target.composing=!1,Wi(e.target,"input"))}function Wi(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Hi(e){return!e.componentInstance||e.data&&e.data.transition?e:Hi(e.componentInstance._vnode)}var zi={model:Ki,show:{bind:function(e,t,n){var r=t.value,i=(n=Hi(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Mi(n,(function(){e.style.display=o}))):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=Hi(n)).data&&n.data.transition?(n.data.show=!0,r?Mi(n,(function(){e.style.display=e.__vOriginalDisplay})):Fi(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},Xi={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Zi(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Zi(Bt(t.children)):e}function eo(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[N(o)]=i[o];return t}function to(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var no=function(e){return e.tag||Ut(e)},ro=function(e){return"show"===e.name},io={name:"transition",props:Xi,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(no)).length){0;var r=this.mode;0;var i=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return i;var o=Zi(i);if(!o)return i;if(this._leaving)return to(e,i);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:u(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var s=(o.data||(o.data={})).transition=eo(this),c=this._vnode,l=Zi(c);if(o.data.directives&&o.data.directives.some(ro)&&(o.data.show=!0),l&&l.data&&!function(e,t){return t.key===e.key&&t.tag===e.tag}(o,l)&&!Ut(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=L({},s);if("out-in"===r)return this._leaving=!0,ct(f,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),to(e,i);if("in-out"===r){if(Ut(o))return c;var p,d=function(){p()};ct(s,"afterEnter",d),ct(s,"enterCancelled",d),ct(f,"delayLeave",(function(e){p=e}))}}return i}}},oo=L({tag:String,moveClass:String},Xi);function ao(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function uo(e){e.data.newPos=e.elm.getBoundingClientRect()}function so(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete oo.mode;var co={Transition:io,TransitionGroup:{props:oo,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Xt(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=eo(this),u=0;u<i.length;u++){var s=i[u];if(s.tag)if(null!=s.key&&0!==String(s.key).indexOf("__vlist"))o.push(s),n[s.key]=s,(s.data||(s.data={})).transition=a}if(r){for(var c=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?c.push(p):l.push(p)}this.kept=e(t,null,c),this.removed=l}return e(t,null,o)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(ao),e.forEach(uo),e.forEach(so),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;ki(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ni,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ni,e),n._moveCb=null,Li(n,t))})}})))},methods:{hasMove:function(e,t){if(!Oi)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){bi(n,e)})),gi(n,t),n.style.display="none",this.$el.appendChild(n);var r=Di(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};wn.config.mustUseProp=Rn,wn.config.isReservedTag=Hn,wn.config.isReservedAttr=Dn,wn.config.getTagNamespace=zn,wn.config.isUnknownElement=function(e){if(!Y)return!0;if(Hn(e))return!1;if(e=e.toLowerCase(),null!=Xn[e])return Xn[e];var t=document.createElement(e);return e.indexOf("-")>-1?Xn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Xn[e]=/HTMLUnknownElement/.test(t.toString())},L(wn.options.directives,zi),L(wn.options.components,co),wn.prototype.__patch__=Y?Gi:A,wn.prototype.$mount=function(e,t){return function(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=ge),tn(e,"beforeMount"),r=function(){e._update(e._render(),n)},new hn(e,r,A,{before:function(){e._isMounted&&!e._isDestroyed&&tn(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,tn(e,"mounted")),e}(this,e=e&&Y?er(e):void 0,t)},Y&&setTimeout((function(){V.devtools&&ae&&ae.emit("init",wn)}),0);var lo=/\{\{((?:.|\r?\n)+?)\}\}/g,fo=/[-.*+?^${}()|[\]\/\\]/g,po=O((function(e){var t=e[0].replace(fo,"\\$&"),n=e[1].replace(fo,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}));var ho={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=Qr(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=Cr(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}};var vo,yo={staticKeys:["staticStyle"],transformNode:function(e,t){t.warn;var n=Qr(e,"style");n&&(e.staticStyle=JSON.stringify(ai(n)));var r=Cr(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},mo=function(e){return(vo=vo||document.createElement("div")).innerHTML=e,vo.textContent},go=y("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),bo=y("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),To=y("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),_o=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Oo=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Eo="[a-zA-Z_][\\-\\.0-9_a-zA-Z"+G.source+"]*",No="((?:"+Eo+"\\:)?"+Eo+")",wo=new RegExp("^<"+No),So=/^\s*(\/?)>/,Io=new RegExp("^<\\/"+No+"[^>]*>"),jo=/^<!DOCTYPE [^>]+>/i,ko=/^<!\--/,Lo=/^<!\[/,xo=y("script,style,textarea",!0),Ao={},Do={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t","&#39;":"'"},Po=/&(?:lt|gt|quot|amp|#39);/g,Ro=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Mo=y("pre,textarea",!0),Fo=function(e,t){return e&&Mo(e)&&"\n"===t[0]};function Co(e,t){var n=t?Ro:Po;return e.replace(n,(function(e){return Do[e]}))}var Qo,Vo,Go,Ko,$o,qo,Uo,Bo,Yo=/^@|^v-on:/,Jo=/^v-|^@|^:|^#/,Wo=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Ho=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,zo=/^\(|\)$/g,Xo=/^\[.*\]$/,Zo=/:(.*)$/,ea=/^:|^\.|^v-bind:/,ta=/\.[^.\]]+(?=[^\]]*$)/g,na=/^v-slot(:|$)|^#/,ra=/[\r\n]/,ia=/\s+/g,oa=O(mo);function aa(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:da(t),rawAttrsMap:{},parent:n,children:[]}}function ua(e,t){Qo=t.warn||Lr,qo=t.isPreTag||D,Uo=t.mustUseProp||D,Bo=t.getTagNamespace||D;var n=t.isReservedTag||D;(function(e){return!!e.component||!n(e.tag)}),Go=xr(t.modules,"transformNode"),Ko=xr(t.modules,"preTransformNode"),$o=xr(t.modules,"postTransformNode"),Vo=t.delimiters;var r,i,o=[],a=!1!==t.preserveWhitespace,u=t.whitespace,s=!1,c=!1;function l(e){if(f(e),s||e.processed||(e=sa(e,t)),o.length||e===r||r.if&&(e.elseif||e.else)&&la(r,{exp:e.elseif,block:e}),i&&!e.forbidden)if(e.elseif||e.else)a=e,(u=function(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}(i.children))&&u.if&&la(u,{exp:a.elseif,block:a});else{if(e.slotScope){var n=e.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[n]=e}i.children.push(e),e.parent=i}var a,u;e.children=e.children.filter((function(e){return!e.slotScope})),f(e),e.pre&&(s=!1),qo(e.tag)&&(c=!1);for(var l=0;l<$o.length;l++)$o[l](e,t)}function f(e){if(!c)for(var t;(t=e.children[e.children.length-1])&&3===t.type&&" "===t.text;)e.children.pop()}return function(e,t){for(var n,r,i=[],o=t.expectHTML,a=t.isUnaryTag||D,u=t.canBeLeftOpenTag||D,s=0;e;){if(n=e,r&&xo(r)){var c=0,l=r.toLowerCase(),f=Ao[l]||(Ao[l]=new RegExp("([\\s\\S]*?)(</"+l+"[^>]*>)","i")),p=e.replace(f,(function(e,n,r){return c=r.length,xo(l)||"noscript"===l||(n=n.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Fo(l,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""}));s+=e.length-p.length,e=p,S(l,s-c,s)}else{var d=e.indexOf("<");if(0===d){if(ko.test(e)){var h=e.indexOf("--\x3e");if(h>=0){t.shouldKeepComment&&t.comment(e.substring(4,h),s,s+h+3),E(h+3);continue}}if(Lo.test(e)){var v=e.indexOf("]>");if(v>=0){E(v+2);continue}}var y=e.match(jo);if(y){E(y[0].length);continue}var m=e.match(Io);if(m){var g=s;E(m[0].length),S(m[1],g,s);continue}var b=N();if(b){w(b),Fo(b.tagName,e)&&E(1);continue}}var T=void 0,_=void 0,O=void 0;if(d>=0){for(_=e.slice(d);!(Io.test(_)||wo.test(_)||ko.test(_)||Lo.test(_)||(O=_.indexOf("<",1))<0);)d+=O,_=e.slice(d);T=e.substring(0,d)}d<0&&(T=e),T&&E(T.length),t.chars&&T&&t.chars(T,s-T.length,s)}if(e===n){t.chars&&t.chars(e);break}}function E(t){s+=t,e=e.substring(t)}function N(){var t=e.match(wo);if(t){var n,r,i={tagName:t[1],attrs:[],start:s};for(E(t[0].length);!(n=e.match(So))&&(r=e.match(Oo)||e.match(_o));)r.start=s,E(r[0].length),r.end=s,i.attrs.push(r);if(n)return i.unarySlash=n[1],E(n[0].length),i.end=s,i}}function w(e){var n=e.tagName,s=e.unarySlash;o&&("p"===r&&To(n)&&S(r),u(n)&&r===n&&S(n));for(var c=a(n)||!!s,l=e.attrs.length,f=new Array(l),p=0;p<l;p++){var d=e.attrs[p],h=d[3]||d[4]||d[5]||"",v="a"===n&&"href"===d[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;f[p]={name:d[1],value:Co(h,v)}}c||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f,start:e.start,end:e.end}),r=n),t.start&&t.start(n,f,c,e.start,e.end)}function S(e,n,o){var a,u;if(null==n&&(n=s),null==o&&(o=s),e)for(u=e.toLowerCase(),a=i.length-1;a>=0&&i[a].lowerCasedTag!==u;a--);else a=0;if(a>=0){for(var c=i.length-1;c>=a;c--)t.end&&t.end(i[c].tag,n,o);i.length=a,r=a&&i[a-1].tag}else"br"===u?t.start&&t.start(e,[],!0,n,o):"p"===u&&(t.start&&t.start(e,[],!1,n,o),t.end&&t.end(e,n,o))}S()}(e,{warn:Qo,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,outputSourceRange:t.outputSourceRange,start:function(e,n,a,u,f){var p=i&&i.ns||Bo(e);z&&"svg"===p&&(n=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];ha.test(r.name)||(r.name=r.name.replace(va,""),t.push(r))}return t}(n));var d,h=aa(e,n,i);p&&(h.ns=p),"style"!==(d=h).tag&&("script"!==d.tag||d.attrsMap.type&&"text/javascript"!==d.attrsMap.type)||oe()||(h.forbidden=!0);for(var v=0;v<Ko.length;v++)h=Ko[v](h,t)||h;s||(!function(e){null!=Qr(e,"v-pre")&&(e.pre=!0)}(h),h.pre&&(s=!0)),qo(h.tag)&&(c=!0),s?function(e){var t=e.attrsList,n=t.length;if(n)for(var r=e.attrs=new Array(n),i=0;i<n;i++)r[i]={name:t[i].name,value:JSON.stringify(t[i].value)},null!=t[i].start&&(r[i].start=t[i].start,r[i].end=t[i].end);else e.pre||(e.plain=!0)}(h):h.processed||(ca(h),function(e){var t=Qr(e,"v-if");if(t)e.if=t,la(e,{exp:t,block:e});else{null!=Qr(e,"v-else")&&(e.else=!0);var n=Qr(e,"v-else-if");n&&(e.elseif=n)}}(h),function(e){null!=Qr(e,"v-once")&&(e.once=!0)}(h)),r||(r=h),a?l(h):(i=h,o.push(h))},end:function(e,t,n){var r=o[o.length-1];o.length-=1,i=o[o.length-1],l(r)},chars:function(e,t,n){if(i&&(!z||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){var r,o,l,f=i.children;if(e=c||e.trim()?"script"===(r=i).tag||"style"===r.tag?e:oa(e):f.length?u?"condense"===u&&ra.test(e)?"":" ":a?" ":"":"")c||"condense"!==u||(e=e.replace(ia," ")),!s&&" "!==e&&(o=function(e,t){var n=t?po(t):lo;if(n.test(e)){for(var r,i,o,a=[],u=[],s=n.lastIndex=0;r=n.exec(e);){(i=r.index)>s&&(u.push(o=e.slice(s,i)),a.push(JSON.stringify(o)));var c=jr(r[1].trim());a.push("_s("+c+")"),u.push({"@binding":c}),s=i+r[0].length}return s<e.length&&(u.push(o=e.slice(s)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:u}}}(e,Vo))?l={type:2,expression:o.expression,tokens:o.tokens,text:e}:" "===e&&f.length&&" "===f[f.length-1].text||(l={type:3,text:e}),l&&f.push(l)}},comment:function(e,t,n){if(i){var r={type:3,text:e,isComment:!0};0,i.children.push(r)}}}),r}function sa(e,t){var n;!function(e){var t=Cr(e,"key");if(t){e.key=t}}(e),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,function(e){var t=Cr(e,"ref");t&&(e.ref=t,e.refInFor=function(e){var t=e;for(;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(e))}(e),function(e){var t;"template"===e.tag?(t=Qr(e,"scope"),e.slotScope=t||Qr(e,"slot-scope")):(t=Qr(e,"slot-scope"))&&(e.slotScope=t);var n=Cr(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,e.slotTargetDynamic=!(!e.attrsMap[":slot"]&&!e.attrsMap["v-bind:slot"]),"template"===e.tag||e.slotScope||Dr(e,"slot",n,function(e,t){return e.rawAttrsMap[":"+t]||e.rawAttrsMap["v-bind:"+t]||e.rawAttrsMap[t]}(e,"slot")));if("template"===e.tag){var r=Vr(e,na);if(r){0;var i=fa(r),o=i.name,a=i.dynamic;e.slotTarget=o,e.slotTargetDynamic=a,e.slotScope=r.value||"_empty_"}}else{var u=Vr(e,na);if(u){0;var s=e.scopedSlots||(e.scopedSlots={}),c=fa(u),l=c.name,f=c.dynamic,p=s[l]=aa("template",[],e);p.slotTarget=l,p.slotTargetDynamic=f,p.children=e.children.filter((function(e){if(!e.slotScope)return e.parent=p,!0})),p.slotScope=u.value||"_empty_",e.children=[],e.plain=!1}}}(e),"slot"===(n=e).tag&&(n.slotName=Cr(n,"name")),function(e){var t;(t=Cr(e,"is"))&&(e.component=t);null!=Qr(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var r=0;r<Go.length;r++)e=Go[r](e,t)||e;return function(e){var t,n,r,i,o,a,u,s,c=e.attrsList;for(t=0,n=c.length;t<n;t++){if(r=i=c[t].name,o=c[t].value,Jo.test(r))if(e.hasBindings=!0,(a=pa(r.replace(Jo,"")))&&(r=r.replace(ta,"")),ea.test(r))r=r.replace(ea,""),o=jr(o),(s=Xo.test(r))&&(r=r.slice(1,-1)),a&&(a.prop&&!s&&"innerHtml"===(r=N(r))&&(r="innerHTML"),a.camel&&!s&&(r=N(r)),a.sync&&(u=$r(o,"$event"),s?Fr(e,'"update:"+('+r+")",u,null,!1,0,c[t],!0):(Fr(e,"update:"+N(r),u,null,!1,0,c[t]),I(r)!==N(r)&&Fr(e,"update:"+I(r),u,null,!1,0,c[t])))),a&&a.prop||!e.component&&Uo(e.tag,e.attrsMap.type,r)?Ar(e,r,o,c[t],s):Dr(e,r,o,c[t],s);else if(Yo.test(r))r=r.replace(Yo,""),(s=Xo.test(r))&&(r=r.slice(1,-1)),Fr(e,r,o,a,!1,0,c[t],s);else{var l=(r=r.replace(Jo,"")).match(Zo),f=l&&l[1];s=!1,f&&(r=r.slice(0,-(f.length+1)),Xo.test(f)&&(f=f.slice(1,-1),s=!0)),Rr(e,r,i,o,f,s,a,c[t])}else Dr(e,r,JSON.stringify(o),c[t]),!e.component&&"muted"===r&&Uo(e.tag,e.attrsMap.type,r)&&Ar(e,r,"true",c[t])}}(e),e}function ca(e){var t;if(t=Qr(e,"v-for")){var n=function(e){var t=e.match(Wo);if(!t)return;var n={};n.for=t[2].trim();var r=t[1].trim().replace(zo,""),i=r.match(Ho);i?(n.alias=r.replace(Ho,"").trim(),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(t);n&&L(e,n)}}function la(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function fa(e){var t=e.name.replace(na,"");return t||"#"!==e.name[0]&&(t="default"),Xo.test(t)?{name:t.slice(1,-1),dynamic:!0}:{name:'"'+t+'"',dynamic:!1}}function pa(e){var t=e.match(ta);if(t){var n={};return t.forEach((function(e){n[e.slice(1)]=!0})),n}}function da(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}var ha=/^xmlns:NS\d+/,va=/^NS\d+:/;function ya(e){return aa(e.tag,e.attrsList.slice(),e.parent)}var ma=[ho,yo,{preTransformNode:function(e,t){if("input"===e.tag){var n,r=e.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=Cr(e,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=Qr(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=Qr(e,"v-else",!0),u=Qr(e,"v-else-if",!0),s=ya(e);ca(s),Pr(s,"type","checkbox"),sa(s,t),s.processed=!0,s.if="("+n+")==='checkbox'"+o,la(s,{exp:s.if,block:s});var c=ya(e);Qr(c,"v-for",!0),Pr(c,"type","radio"),sa(c,t),la(s,{exp:"("+n+")==='radio'"+o,block:c});var l=ya(e);return Qr(l,"v-for",!0),Pr(l,":type",n),sa(l,t),la(s,{exp:i,block:l}),a?s.else=!0:u&&(s.elseif=u),s}}}}];var ga,ba,Ta={expectHTML:!0,modules:ma,directives:{model:function(e,t,n){n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return Kr(e,r,i),!1;if("select"===o)!function(e,t,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"});";r=r+" "+$r(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Fr(e,"change",r,null,!0)}(e,r,i);else if("input"===o&&"checkbox"===a)!function(e,t,n){var r=n&&n.number,i=Cr(e,"value")||"null",o=Cr(e,"true-value")||"true",a=Cr(e,"false-value")||"false";Ar(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),Fr(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+$r(t,"$$a.concat([$$v])")+")}else{$$i>-1&&("+$r(t,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+$r(t,"$$c")+"}",null,!0)}(e,r,i);else if("input"===o&&"radio"===a)!function(e,t,n){var r=n&&n.number,i=Cr(e,"value")||"null";Ar(e,"checked","_q("+t+","+(i=r?"_n("+i+")":i)+")"),Fr(e,"change",$r(t,i),null,!0)}(e,r,i);else if("input"===o||"textarea"===o)!function(e,t,n){var r=e.attrsMap.type;0;var i=n||{},o=i.lazy,a=i.number,u=i.trim,s=!o&&"range"!==r,c=o?"change":"range"===r?"__r":"input",l="$event.target.value";u&&(l="$event.target.value.trim()");a&&(l="_n("+l+")");var f=$r(t,l);s&&(f="if($event.target.composing)return;"+f);Ar(e,"value","("+t+")"),Fr(e,c,f,null,!0),(u||a)&&Fr(e,"blur","$forceUpdate()")}(e,r,i);else{if(!V.isReservedTag(o))return Kr(e,r,i),!1}return!0},text:function(e,t){t.value&&Ar(e,"textContent","_s("+t.value+")",t)},html:function(e,t){t.value&&Ar(e,"innerHTML","_s("+t.value+")",t)}},isPreTag:function(e){return"pre"===e},isUnaryTag:go,mustUseProp:Rn,canBeLeftOpenTag:bo,isReservedTag:Hn,getTagNamespace:zn,staticKeys:function(e){return e.reduce((function(e,t){return e.concat(t.staticKeys||[])}),[]).join(",")}(ma)},_a=O((function(e){return y("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(e?","+e:""))}));function Oa(e,t){e&&(ga=_a(t.staticKeys||""),ba=t.isReservedTag||D,function e(t){if(t.static=function(e){if(2===e.type)return!1;if(3===e.type)return!0;return!(!e.pre&&(e.hasBindings||e.if||e.for||m(e.tag)||!ba(e.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}(e)||!Object.keys(e).every(ga)))}(t),1===t.type){if(!ba(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++){var u=t.ifConditions[o].block;e(u),u.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++)e(t.ifConditions[o].block,n)}}(e,!1))}var Ea=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Na=/\([^)]*?\);*$/,wa=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,Sa={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Ia={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},ja=function(e){return"if("+e+")return null;"},ka={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:ja("$event.target !== $event.currentTarget"),ctrl:ja("!$event.ctrlKey"),shift:ja("!$event.shiftKey"),alt:ja("!$event.altKey"),meta:ja("!$event.metaKey"),left:ja("'button' in $event && $event.button !== 0"),middle:ja("'button' in $event && $event.button !== 1"),right:ja("'button' in $event && $event.button !== 2")};function La(e,t){var n=t?"nativeOn:":"on:",r="",i="";for(var o in e){var a=xa(e[o]);e[o]&&e[o].dynamic?i+=o+","+a+",":r+='"'+o+'":'+a+","}return r="{"+r.slice(0,-1)+"}",i?n+"_d("+r+",["+i.slice(0,-1)+"])":n+r}function xa(e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map((function(e){return xa(e)})).join(",")+"]";var t=wa.test(e.value),n=Ea.test(e.value),r=wa.test(e.value.replace(Na,""));if(e.modifiers){var i="",o="",a=[];for(var u in e.modifiers)if(ka[u])o+=ka[u],Sa[u]&&a.push(u);else if("exact"===u){var s=e.modifiers;o+=ja(["ctrl","shift","alt","meta"].filter((function(e){return!s[e]})).map((function(e){return"$event."+e+"Key"})).join("||"))}else a.push(u);return a.length&&(i+=function(e){return"if(!$event.type.indexOf('key')&&"+e.map(Aa).join("&&")+")return null;"}(a)),o&&(i+=o),"function($event){"+i+(t?"return "+e.value+"($event)":n?"return ("+e.value+")($event)":r?"return "+e.value:e.value)+"}"}return t||n?e.value:"function($event){"+(r?"return "+e.value:e.value)+"}"}function Aa(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Sa[e],r=Ia[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var Da={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}},cloak:A},Pa=function(e){this.options=e,this.warn=e.warn||Lr,this.transforms=xr(e.modules,"transformCode"),this.dataGenFns=xr(e.modules,"genData"),this.directives=L(L({},Da),e.directives);var t=e.isReservedTag||D;this.maybeComponent=function(e){return!!e.component||!t(e.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1};function Ra(e,t){var n=new Pa(t);return{render:"with(this){return "+(e?Ma(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function Ma(e,t){if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return Fa(e,t);if(e.once&&!e.onceProcessed)return Ca(e,t);if(e.for&&!e.forProcessed)return Va(e,t);if(e.if&&!e.ifProcessed)return Qa(e,t);if("template"!==e.tag||e.slotTarget||t.pre){if("slot"===e.tag)return function(e,t){var n=e.slotName||'"default"',r=qa(e,t),i="_t("+n+(r?","+r:""),o=e.attrs||e.dynamicAttrs?Ya((e.attrs||[]).concat(e.dynamicAttrs||[]).map((function(e){return{name:N(e.name),value:e.value,dynamic:e.dynamic}}))):null,a=e.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(e,t);var n;if(e.component)n=function(e,t,n){var r=t.inlineTemplate?null:qa(t,n,!0);return"_c("+e+","+Ga(t,n)+(r?","+r:"")+")"}(e.component,e,t);else{var r;(!e.plain||e.pre&&t.maybeComponent(e))&&(r=Ga(e,t));var i=e.inlineTemplate?null:qa(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return qa(e,t)||"void 0"}function Fa(e,t){e.staticProcessed=!0;var n=t.pre;return e.pre&&(t.pre=e.pre),t.staticRenderFns.push("with(this){return "+Ma(e,t)+"}"),t.pre=n,"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function Ca(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Qa(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+Ma(e,t)+","+t.onceId+++","+n+")":Ma(e,t)}return Fa(e,t)}function Qa(e,t,n,r){return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+e(t,n,r,i):""+a(o.block);function a(e){return r?r(e,n):e.once?Ca(e,n):Ma(e,n)}}(e.ifConditions.slice(),t,n,r)}function Va(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",u=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+u+"){return "+(n||Ma)(e,t)+"})"}function Ga(e,t){var n="{",r=function(e,t){var n=e.directives;if(!n)return;var r,i,o,a,u="directives:[",s=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var c=t.directives[o.name];c&&(a=!!c(e,o,t.warn)),a&&(s=!0,u+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?",arg:"+(o.isDynamicArg?o.arg:'"'+o.arg+'"'):"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(s)return u.slice(0,-1)+"]"}(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:"+Ya(e.attrs)+","),e.props&&(n+="domProps:"+Ya(e.props)+","),e.events&&(n+=La(e.events,!1)+","),e.nativeEvents&&(n+=La(e.nativeEvents,!0)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=function(e,t,n){var r=e.for||Object.keys(t).some((function(e){var n=t[e];return n.slotTargetDynamic||n.if||n.for||Ka(n)})),i=!!e.if;if(!r)for(var o=e.parent;o;){if(o.slotScope&&"_empty_"!==o.slotScope||o.for){r=!0;break}o.if&&(i=!0),o=o.parent}var a=Object.keys(t).map((function(e){return $a(t[e],n)})).join(",");return"scopedSlots:_u(["+a+"]"+(r?",null,true":"")+(!r&&i?",null,false,"+function(e){var t=5381,n=e.length;for(;n;)t=33*t^e.charCodeAt(--n);return t>>>0}(a):"")+")"}(e,e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var o=function(e,t){var n=e.children[0];0;if(n&&1===n.type){var r=Ra(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map((function(e){return"function(){"+e+"}"})).join(",")+"]}"}}(e,t);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",e.dynamicAttrs&&(n="_b("+n+',"'+e.tag+'",'+Ya(e.dynamicAttrs)+")"),e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function Ka(e){return 1===e.type&&("slot"===e.tag||e.children.some(Ka))}function $a(e,t){var n=e.attrsMap["slot-scope"];if(e.if&&!e.ifProcessed&&!n)return Qa(e,t,$a,"null");if(e.for&&!e.forProcessed)return Va(e,t,$a);var r="_empty_"===e.slotScope?"":String(e.slotScope),i="function("+r+"){return "+("template"===e.tag?e.if&&n?"("+e.if+")?"+(qa(e,t)||"undefined")+":undefined":qa(e,t)||"undefined":Ma(e,t))+"}",o=r?"":",proxy:true";return"{key:"+(e.slotTarget||'"default"')+",fn:"+i+o+"}"}function qa(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag){var u=n?t.maybeComponent(a)?",1":",0":"";return""+(r||Ma)(a,t)+u}var s=n?function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(Ua(i)||i.ifConditions&&i.ifConditions.some((function(e){return Ua(e.block)}))){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some((function(e){return t(e.block)})))&&(n=1)}}return n}(o,t.maybeComponent):0,c=i||Ba;return"["+o.map((function(e){return c(e,t)})).join(",")+"]"+(s?","+s:"")}}function Ua(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function Ba(e,t){return 1===e.type?Ma(e,t):3===e.type&&e.isComment?function(e){return"_e("+JSON.stringify(e.text)+")"}(e):function(e){return"_v("+(2===e.type?e.expression:Ja(JSON.stringify(e.text)))+")"}(e)}function Ya(e){for(var t="",n="",r=0;r<e.length;r++){var i=e[r],o=Ja(i.value);i.dynamic?n+=i.name+","+o+",":t+='"'+i.name+'":'+o+","}return t="{"+t.slice(0,-1)+"}",n?"_d("+t+",["+n.slice(0,-1)+"])":t}function Ja(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");function Wa(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),A}}function Ha(e){var t=Object.create(null);return function(n,r,i){(r=L({},r)).warn;delete r.warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r);var u={},s=[];return u.render=Wa(a.render,s),u.staticRenderFns=a.staticRenderFns.map((function(e){return Wa(e,s)})),t[o]=u}}var za,Xa,Za=(za=function(e,t){var n=ua(e.trim(),t);!1!==t.optimize&&Oa(n,t);var r=Ra(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(n)for(var a in n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=L(Object.create(e.directives||null),n.directives)),n)"modules"!==a&&"directives"!==a&&(r[a]=n[a]);r.warn=function(e,t,n){(n?o:i).push(e)};var u=za(t.trim(),r);return u.errors=i,u.tips=o,u}return{compile:t,compileToFunctions:Ha(t)}})(Ta),eu=(Za.compile,Za.compileToFunctions);function tu(e){return(Xa=Xa||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',Xa.innerHTML.indexOf("&#10;")>0}var nu=!!Y&&tu(!1),ru=!!Y&&tu(!0),iu=O((function(e){var t=er(e);return t&&t.innerHTML})),ou=wn.prototype.$mount;wn.prototype.$mount=function(e,t){if((e=e&&er(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=iu(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}(e));if(r){0;var i=eu(r,{outputSourceRange:!1,shouldDecodeNewlines:nu,shouldDecodeNewlinesForHref:ru,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return ou.call(this,e,t)},wn.compile=eu,t.default=wn}.call(this,n(40),n(238).setImmediate)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):void 0;t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.printLocation=function(e){return i(e.source,(0,r.getLocation)(e.source,e.start))},t.printSourceLocation=i;var r=n(93);function i(e,t){var n=e.locationOffset.column-1,r=a(n)+e.body,i=t.line-1,u=e.locationOffset.line-1,s=t.line+u,c=1===t.line?n:0,l=t.column+c,f="".concat(e.name,":").concat(s,":").concat(l,"\n"),p=r.split(/\r\n|[\n\r]/g),d=p[i];if(d.length>120){for(var h=Math.floor(l/80),v=l%80,y=[],m=0;m<d.length;m+=80)y.push(d.slice(m,m+80));return f+o([["".concat(s),y[0]]].concat(y.slice(1,h+1).map((function(e){return["",e]})),[[" ",a(v-1)+"^"],["",y[h+1]]]))}return f+o([["".concat(s-1),p[i-1]],["".concat(s),d],["",a(l-1)+"^"],["".concat(s+1),p[i+1]]])}function o(e){var t=e.filter((function(e){e[0];return void 0!==e[1]})),n=Math.max.apply(Math,t.map((function(e){return e[0].length})));return t.map((function(e){var t,r=e[0],i=e[1];return a(n-(t=r).length)+t+(i?" | "+i:" |")})).join("\n")}function a(e){return Array(e+1).join(" ")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return null==e||e!=e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.assertValidName=function(e){var t=u(e);if(t)throw t;return e},t.isValidNameError=u;var r,i=(r=n(20))&&r.__esModule?r:{default:r},o=n(4);var a=/^[_a-zA-Z][_a-zA-Z0-9]*$/;function u(e,t){return"string"==typeof e||(0,i.default)(0,"Expected string"),e.length>1&&"_"===e[0]&&"_"===e[1]?new o.GraphQLError('Name "'.concat(e,'" must not begin with "__", which is reserved by GraphQL introspection.'),t):a.test(e)?void 0:new o.GraphQLError('Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "'.concat(e,'" does not.'),t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n=Object.create(null),r=0,o=(0,i.default)(e);r<o.length;r++){var a=o[r],u=a[0],s=a[1];n[u]=t(s,u)}return n};var r,i=(r=n(42))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.valueFromASTUntyped=function e(t,n){switch(t.kind){case u.Kind.NULL:return null;case u.Kind.INT:return parseInt(t.value,10);case u.Kind.FLOAT:return parseFloat(t.value);case u.Kind.STRING:case u.Kind.ENUM:case u.Kind.BOOLEAN:return t.value;case u.Kind.LIST:return t.values.map((function(t){return e(t,n)}));case u.Kind.OBJECT:return(0,o.default)(t.fields,(function(e){return e.name.value}),(function(t){return e(t.value,n)}));case u.Kind.VARIABLE:var s=t.name.value;return n&&!(0,a.default)(n[s])?n[s]:void 0}(0,i.default)(!1,"Unexpected value node: "+(0,r.default)(t))};var r=s(n(9)),i=s(n(15)),o=s(n(43)),a=s(n(55)),u=n(11);function s(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.specifiedSDLRules=t.specifiedRules=void 0;var r=n(138),i=n(139),o=n(140),a=n(141),u=n(142),s=n(143),c=n(144),l=n(145),f=n(146),p=n(147),d=n(148),h=n(149),v=n(150),y=n(151),m=n(152),g=n(153),b=n(154),T=n(155),_=n(156),O=n(157),E=n(158),N=n(104),w=n(159),S=n(160),I=n(161),j=n(162),k=n(163),L=n(164),x=n(165),A=n(166),D=n(167),P=n(168),R=n(169),M=Object.freeze([r.ExecutableDefinitions,i.UniqueOperationNames,o.LoneAnonymousOperation,a.SingleFieldSubscriptions,u.KnownTypeNames,s.FragmentsOnCompositeTypes,c.VariablesAreInputTypes,l.ScalarLeafs,f.FieldsOnCorrectType,p.UniqueFragmentNames,d.KnownFragmentNames,h.NoUnusedFragments,v.PossibleFragmentSpreads,y.NoFragmentCycles,m.UniqueVariableNames,g.NoUndefinedVariables,b.NoUnusedVariables,T.KnownDirectives,_.UniqueDirectivesPerLocation,O.KnownArgumentNames,E.UniqueArgumentNames,N.ValuesOfCorrectType,w.ProvidedRequiredArguments,S.VariablesInAllowedPosition,I.OverlappingFieldsCanBeMerged,j.UniqueInputFieldNames]);t.specifiedRules=M;var F=Object.freeze([k.LoneSchemaDefinition,L.UniqueOperationTypes,x.UniqueTypeNames,A.UniqueEnumValueNames,D.UniqueFieldDefinitionNames,P.UniqueDirectiveNames,u.KnownTypeNames,T.KnownDirectives,_.UniqueDirectivesPerLocation,R.PossibleTypeExtensions,O.KnownArgumentNamesOnDirectives,E.UniqueArgumentNames,j.UniqueInputFieldNames,w.ProvidedRequiredArgumentsOnDirectives]);t.specifiedSDLRules=F},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nonExecutableDefinitionMessage=a,t.ExecutableDefinitions=function(e){return{Document:function(t){for(var n=0,u=t.definitions;n<u.length;n++){var s=u[n];(0,o.isExecutableDefinitionNode)(s)||e.reportError(new r.GraphQLError(a(s.kind===i.Kind.SCHEMA_DEFINITION||s.kind===i.Kind.SCHEMA_EXTENSION?"schema":s.name.value),s))}return!1}}};var r=n(4),i=n(11),o=n(46);function a(e){return"The ".concat(e," definition is not executable.")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.duplicateOperationNameMessage=i,t.UniqueOperationNames=function(e){var t=Object.create(null);return{OperationDefinition:function(n){var o=n.name;return o&&(t[o.value]?e.reportError(new r.GraphQLError(i(o.value),[t[o.value],o])):t[o.value]=o),!1},FragmentDefinition:function(){return!1}}};var r=n(4);function i(e){return'There can be only one operation named "'.concat(e,'".')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.anonOperationNotAloneMessage=o,t.LoneAnonymousOperation=function(e){var t=0;return{Document:function(e){t=e.definitions.filter((function(e){return e.kind===i.Kind.OPERATION_DEFINITION})).length},OperationDefinition:function(n){!n.name&&t>1&&e.reportError(new r.GraphQLError("This anonymous operation must be the only defined operation.",n))}}};var r=n(4),i=n(11);function o(){return"This anonymous operation must be the only defined operation."}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.singleFieldOnlyMessage=i,t.SingleFieldSubscriptions=function(e){return{OperationDefinition:function(t){"subscription"===t.operation&&1!==t.selectionSet.selections.length&&e.reportError(new r.GraphQLError(i(t.name&&t.name.value),t.selectionSet.selections.slice(1)))}}};var r=n(4);function i(e){return e?'Subscription "'.concat(e,'" must select only one top level field.'):"Anonymous Subscription must select only one top level field."}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unknownTypeMessage=s,t.KnownTypeNames=function(e){for(var t=e.getSchema(),n=t?t.getTypeMap():Object.create(null),r=Object.create(null),u=0,l=e.getDocument().definitions;u<l.length;u++){var f=l[u];(0,a.isTypeDefinitionNode)(f)&&(r[f.name.value]=!0)}var p=Object.keys(n).concat(Object.keys(r));return{NamedType:function(t,u,l,f,d){var h,v=t.name.value;if(!n[v]&&!r[v]){var y=d[2]||l,m=(h=y,Boolean(h&&!Array.isArray(h)&&((0,a.isTypeSystemDefinitionNode)(h)||(0,a.isTypeSystemExtensionNode)(h))));if(m&&function(e){return-1!==c.indexOf(e)}(v))return;var g=(0,i.default)(v,m?c.concat(p):p);e.reportError(new o.GraphQLError(s(v,g),t))}}}};var r=u(n(44)),i=u(n(45)),o=n(4),a=n(46);function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return'Unknown type "'.concat(e,'".')+(0,r.default)(t.map((function(e){return'"'.concat(e,'"')})))}var c=n(25).specifiedScalarTypes.map((function(e){return e.name}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.inlineFragmentOnNonCompositeErrorMessage=u,t.fragmentOnNonCompositeErrorMessage=s,t.FragmentsOnCompositeTypes=function(e){return{InlineFragment:function(t){var n=t.typeCondition;if(n){var s=(0,a.typeFromAST)(e.getSchema(),n);s&&!(0,o.isCompositeType)(s)&&e.reportError(new r.GraphQLError(u((0,i.print)(n)),n))}},FragmentDefinition:function(t){var n=(0,a.typeFromAST)(e.getSchema(),t.typeCondition);n&&!(0,o.isCompositeType)(n)&&e.reportError(new r.GraphQLError(s(t.name.value,(0,i.print)(t.typeCondition)),t.typeCondition))}}};var r=n(4),i=n(22),o=n(8),a=n(26);function u(e){return'Fragment cannot condition on non composite type "'.concat(e,'".')}function s(e,t){return'Fragment "'.concat(e,'" cannot condition on non composite type "').concat(t,'".')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nonInputTypeOnVarMessage=u,t.VariablesAreInputTypes=function(e){return{VariableDefinition:function(t){var n=(0,a.typeFromAST)(e.getSchema(),t.type);if(n&&!(0,o.isInputType)(n)){var s=t.variable.name.value;e.reportError(new r.GraphQLError(u(s,(0,i.print)(t.type)),t.type))}}}};var r=n(4),i=n(22),o=n(8),a=n(26);function u(e,t){return'Variable "$'.concat(e,'" cannot be non-input type "').concat(t,'".')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.noSubselectionAllowedMessage=u,t.requiredSubselectionMessage=s,t.ScalarLeafs=function(e){return{Field:function(t){var n=e.getType(),r=t.selectionSet;n&&((0,a.isLeafType)((0,a.getNamedType)(n))?r&&e.reportError(new o.GraphQLError(u(t.name.value,(0,i.default)(n)),r)):r||e.reportError(new o.GraphQLError(s(t.name.value,(0,i.default)(n)),t)))}}};var r,i=(r=n(9))&&r.__esModule?r:{default:r},o=n(4),a=n(8);function u(e,t){return'Field "'.concat(e,'" must not have a selection since type "').concat(t,'" has no subfields.')}function s(e,t){return'Field "'.concat(e,'" of type "').concat(t,'" must have a selection of subfields. Did you mean "').concat(e,' { ... }"?')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.undefinedFieldMessage=s,t.FieldsOnCorrectType=function(e){return{Field:function(t){var n=e.getParentType();if(n&&!e.getFieldDef()){var r=e.getSchema(),u=t.name.value,c=function(e,t,n){if((0,a.isAbstractType)(t)){for(var r=[],i=Object.create(null),o=0,u=e.getPossibleTypes(t);o<u.length;o++){var s=u[o];if(s.getFields()[n]){r.push(s.name);for(var c=0,l=s.getInterfaces();c<l.length;c++){var f=l[c];f.getFields()[n]&&(i[f.name]=(i[f.name]||0)+1)}}}return Object.keys(i).sort((function(e,t){return i[t]-i[e]})).concat(r)}return[]}(r,n,u),l=0!==c.length?[]:function(e,t,n){if((0,a.isObjectType)(t)||(0,a.isInterfaceType)(t)){var r=Object.keys(t.getFields());return(0,i.default)(n,r)}return[]}(0,n,u);e.reportError(new o.GraphQLError(s(u,n.name,c,l),t))}}}};var r=u(n(44)),i=u(n(45)),o=n(4),a=n(8);function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,i){var o=n.map((function(e){return'"'.concat(e,'"')})),a=i.map((function(e){return'"'.concat(e,'"')}));return'Cannot query field "'.concat(e,'" on type "').concat(t,'".')+((0,r.default)("to use an inline fragment on",o)||(0,r.default)(a))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.duplicateFragmentNameMessage=i,t.UniqueFragmentNames=function(e){var t=Object.create(null);return{OperationDefinition:function(){return!1},FragmentDefinition:function(n){var o=n.name.value;return t[o]?e.reportError(new r.GraphQLError(i(o),[t[o],n.name])):t[o]=n.name,!1}}};var r=n(4);function i(e){return'There can be only one fragment named "'.concat(e,'".')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unknownFragmentMessage=i,t.KnownFragmentNames=function(e){return{FragmentSpread:function(t){var n=t.name.value;e.getFragment(n)||e.reportError(new r.GraphQLError(i(n),t.name))}}};var r=n(4);function i(e){return'Unknown fragment "'.concat(e,'".')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unusedFragMessage=i,t.NoUnusedFragments=function(e){var t=[],n=[];return{OperationDefinition:function(e){return t.push(e),!1},FragmentDefinition:function(e){return n.push(e),!1},Document:{leave:function(){for(var o=Object.create(null),a=0;a<t.length;a++)for(var u=t[a],s=0,c=e.getRecursivelyReferencedFragments(u);s<c.length;s++){o[c[s].name.value]=!0}for(var l=0;l<n.length;l++){var f=n[l],p=f.name.value;!0!==o[p]&&e.reportError(new r.GraphQLError(i(p),f))}}}}};var r=n(4);function i(e){return'Fragment "'.concat(e,'" is never used.')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.typeIncompatibleSpreadMessage=c,t.typeIncompatibleAnonSpreadMessage=l,t.PossibleFragmentSpreads=function(e){return{InlineFragment:function(t){var n=e.getType(),r=e.getParentType();(0,a.isCompositeType)(n)&&(0,a.isCompositeType)(r)&&!(0,s.doTypesOverlap)(e.getSchema(),n,r)&&e.reportError(new o.GraphQLError(l((0,i.default)(r),(0,i.default)(n)),t))},FragmentSpread:function(t){var n=t.name.value,r=function(e,t){var n=e.getFragment(t);if(n){var r=(0,u.typeFromAST)(e.getSchema(),n.typeCondition);if((0,a.isCompositeType)(r))return r}}(e,n),l=e.getParentType();r&&l&&!(0,s.doTypesOverlap)(e.getSchema(),r,l)&&e.reportError(new o.GraphQLError(c(n,(0,i.default)(l),(0,i.default)(r)),t))}}};var r,i=(r=n(9))&&r.__esModule?r:{default:r},o=n(4),a=n(8),u=n(26),s=n(72);function c(e,t,n){return'Fragment "'.concat(e,'" cannot be spread here as objects of type "').concat(t,'" can never be of type "').concat(n,'".')}function l(e,t){return'Fragment cannot be spread here as objects of type "'.concat(e,'" can never be of type "').concat(t,'".')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cycleErrorMessage=i,t.NoFragmentCycles=function(e){var t=Object.create(null),n=[],o=Object.create(null);return{OperationDefinition:function(){return!1},FragmentDefinition:function(a){return function a(u){if(t[u.name.value])return;var s=u.name.value;t[s]=!0;var c=e.getFragmentSpreads(u.selectionSet);if(0===c.length)return;o[s]=n.length;for(var l=0;l<c.length;l++){var f=c[l],p=f.name.value,d=o[p];if(n.push(f),void 0===d){var h=e.getFragment(p);h&&a(h)}else{var v=n.slice(d),y=v.slice(0,-1).map((function(e){return e.name.value}));e.reportError(new r.GraphQLError(i(p,y),v))}n.pop()}o[s]=void 0}(a),!1}}};var r=n(4);function i(e,t){var n=t.length?" via "+t.join(", "):"";return'Cannot spread fragment "'.concat(e,'" within itself').concat(n,".")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.duplicateVariableMessage=i,t.UniqueVariableNames=function(e){var t=Object.create(null);return{OperationDefinition:function(){t=Object.create(null)},VariableDefinition:function(n){var o=n.variable.name.value;t[o]?e.reportError(new r.GraphQLError(i(o),[t[o],n.variable.name])):t[o]=n.variable.name}}};var r=n(4);function i(e){return'There can be only one variable named "'.concat(e,'".')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.undefinedVarMessage=i,t.NoUndefinedVariables=function(e){var t=Object.create(null);return{OperationDefinition:{enter:function(){t=Object.create(null)},leave:function(n){for(var o=e.getRecursiveVariableUsages(n),a=0;a<o.length;a++){var u=o[a].node,s=u.name.value;!0!==t[s]&&e.reportError(new r.GraphQLError(i(s,n.name&&n.name.value),[u,n]))}}},VariableDefinition:function(e){t[e.variable.name.value]=!0}}};var r=n(4);function i(e,t){return t?'Variable "$'.concat(e,'" is not defined by operation "').concat(t,'".'):'Variable "$'.concat(e,'" is not defined.')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unusedVariableMessage=i,t.NoUnusedVariables=function(e){var t=[];return{OperationDefinition:{enter:function(){t=[]},leave:function(n){for(var o=Object.create(null),a=e.getRecursiveVariableUsages(n),u=n.name?n.name.value:null,s=0;s<a.length;s++){o[a[s].node.name.value]=!0}for(var c=0,l=t;c<l.length;c++){var f=l[c],p=f.variable.name.value;!0!==o[p]&&e.reportError(new r.GraphQLError(i(p,u),f))}}},VariableDefinition:function(e){t.push(e)}}};var r=n(4);function i(e,t){return t?'Variable "$'.concat(e,'" is never used in operation "').concat(t,'".'):'Variable "$'.concat(e,'" is never used.')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unknownDirectiveMessage=u,t.misplacedDirectiveMessage=s,t.KnownDirectives=function(e){for(var t=Object.create(null),n=e.getSchema(),c=n?n.getDirectives():a.specifiedDirectives,l=0;l<c.length;l++){var f=c[l];t[f.name]=f.locations}for(var p=e.getDocument().definitions,d=0;d<p.length;d++){var h=p[d];h.kind===i.Kind.DIRECTIVE_DEFINITION&&(t[h.name.value]=h.locations.map((function(e){return e.value})))}return{Directive:function(n,a,c,l,f){var p=n.name.value,d=t[p];if(d){var h=function(e){var t=e[e.length-1];if(!Array.isArray(t))switch(t.kind){case i.Kind.OPERATION_DEFINITION:switch(t.operation){case"query":return o.DirectiveLocation.QUERY;case"mutation":return o.DirectiveLocation.MUTATION;case"subscription":return o.DirectiveLocation.SUBSCRIPTION}break;case i.Kind.FIELD:return o.DirectiveLocation.FIELD;case i.Kind.FRAGMENT_SPREAD:return o.DirectiveLocation.FRAGMENT_SPREAD;case i.Kind.INLINE_FRAGMENT:return o.DirectiveLocation.INLINE_FRAGMENT;case i.Kind.FRAGMENT_DEFINITION:return o.DirectiveLocation.FRAGMENT_DEFINITION;case i.Kind.VARIABLE_DEFINITION:return o.DirectiveLocation.VARIABLE_DEFINITION;case i.Kind.SCHEMA_DEFINITION:case i.Kind.SCHEMA_EXTENSION:return o.DirectiveLocation.SCHEMA;case i.Kind.SCALAR_TYPE_DEFINITION:case i.Kind.SCALAR_TYPE_EXTENSION:return o.DirectiveLocation.SCALAR;case i.Kind.OBJECT_TYPE_DEFINITION:case i.Kind.OBJECT_TYPE_EXTENSION:return o.DirectiveLocation.OBJECT;case i.Kind.FIELD_DEFINITION:return o.DirectiveLocation.FIELD_DEFINITION;case i.Kind.INTERFACE_TYPE_DEFINITION:case i.Kind.INTERFACE_TYPE_EXTENSION:return o.DirectiveLocation.INTERFACE;case i.Kind.UNION_TYPE_DEFINITION:case i.Kind.UNION_TYPE_EXTENSION:return o.DirectiveLocation.UNION;case i.Kind.ENUM_TYPE_DEFINITION:case i.Kind.ENUM_TYPE_EXTENSION:return o.DirectiveLocation.ENUM;case i.Kind.ENUM_VALUE_DEFINITION:return o.DirectiveLocation.ENUM_VALUE;case i.Kind.INPUT_OBJECT_TYPE_DEFINITION:case i.Kind.INPUT_OBJECT_TYPE_EXTENSION:return o.DirectiveLocation.INPUT_OBJECT;case i.Kind.INPUT_VALUE_DEFINITION:return e[e.length-3].kind===i.Kind.INPUT_OBJECT_TYPE_DEFINITION?o.DirectiveLocation.INPUT_FIELD_DEFINITION:o.DirectiveLocation.ARGUMENT_DEFINITION}}(f);h&&-1===d.indexOf(h)&&e.reportError(new r.GraphQLError(s(p,h),n))}else e.reportError(new r.GraphQLError(u(p),n))}}};var r=n(4),i=n(11),o=n(54),a=n(17);function u(e){return'Unknown directive "'.concat(e,'".')}function s(e,t){return'Directive "'.concat(e,'" may not be used on ').concat(t,".")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.duplicateDirectiveMessage=a,t.UniqueDirectivesPerLocation=function(e){for(var t=Object.create(null),n=e.getSchema(),u=n?n.getDirectives():o.specifiedDirectives,s=0;s<u.length;s++){var c=u[s];t[c.name]=!c.isRepeatable}for(var l=e.getDocument().definitions,f=0;f<l.length;f++){var p=l[f];p.kind===i.Kind.DIRECTIVE_DEFINITION&&(t[p.name.value]=!p.repeatable)}return{enter:function(n){var i=n.directives;if(i)for(var o=Object.create(null),u=0;u<i.length;u++){var s=i[u],c=s.name.value;t[c]&&(o[c]?e.reportError(new r.GraphQLError(a(c),[o[c],s])):o[c]=s)}}}};var r=n(4),i=n(11),o=n(17);function a(e){return'The directive "'.concat(e,'" can only be used once at this location.')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unknownArgMessage=f,t.unknownDirectiveArgMessage=p,t.KnownArgumentNames=function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d(e),{Argument:function(t){var n=e.getArgument(),r=e.getFieldDef(),a=e.getParentType();if(!n&&r&&a){var u=t.name.value,s=r.args.map((function(e){return e.name}));e.reportError(new o.GraphQLError(f(u,r.name,a.name,(0,i.default)(u,s)),t))}}})},t.KnownArgumentNamesOnDirectives=d;var r=s(n(44)),i=s(n(45)),o=n(4),a=n(11),u=n(17);function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t,n,i){return'Unknown argument "'.concat(e,'" on field "').concat(t,'" of type "').concat(n,'".')+(0,r.default)(i.map((function(e){return'"'.concat(e,'"')})))}function p(e,t,n){return'Unknown argument "'.concat(e,'" on directive "@').concat(t,'".')+(0,r.default)(n.map((function(e){return'"'.concat(e,'"')})))}function d(e){for(var t=Object.create(null),n=e.getSchema(),r=n?n.getDirectives():u.specifiedDirectives,s=0;s<r.length;s++){var c=r[s];t[c.name]=c.args.map((function(e){return e.name}))}for(var l=e.getDocument().definitions,f=0;f<l.length;f++){var d=l[f];d.kind===a.Kind.DIRECTIVE_DEFINITION&&(t[d.name.value]=d.arguments?d.arguments.map((function(e){return e.name.value})):[])}return{Directive:function(n){var r=n.name.value,a=t[r];if(n.arguments&&a)for(var u=0,s=n.arguments;u<s.length;u++){var c=s[u],l=c.name.value;if(-1===a.indexOf(l)){var f=(0,i.default)(l,a);e.reportError(new o.GraphQLError(p(l,r,f),c))}}return!1}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.duplicateArgMessage=i,t.UniqueArgumentNames=function(e){var t=Object.create(null);return{Field:function(){t=Object.create(null)},Directive:function(){t=Object.create(null)},Argument:function(n){var o=n.name.value;return t[o]?e.reportError(new r.GraphQLError(i(o),[t[o],n.name])):t[o]=n.name,!1}}};var r=n(4);function i(e){return'There can be only one argument named "'.concat(e,'".')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.missingFieldArgMessage=d,t.missingDirectiveArgMessage=h,t.ProvidedRequiredArguments=function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},v(e),{Field:{leave:function(t){var n=e.getFieldDef();if(!n)return!1;for(var a=t.arguments||[],u=(0,i.default)(a,(function(e){return e.name.value})),s=0,l=n.args;s<l.length;s++){var f=l[s];!u[f.name]&&(0,c.isRequiredArgument)(f)&&e.reportError(new o.GraphQLError(d(n.name,f.name,(0,r.default)(f.type)),t))}}}})},t.ProvidedRequiredArgumentsOnDirectives=v;var r=l(n(9)),i=l(n(34)),o=n(4),a=n(11),u=n(22),s=n(17),c=n(8);function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t,n){return'Field "'.concat(e,'" argument "').concat(t,'" of type "').concat(n,'" is required, but it was not provided.')}function h(e,t,n){return'Directive "@'.concat(e,'" argument "').concat(t,'" of type "').concat(n,'" is required, but it was not provided.')}function v(e){for(var t=Object.create(null),n=e.getSchema(),l=n?n.getDirectives():s.specifiedDirectives,f=0;f<l.length;f++){var p=l[f];t[p.name]=(0,i.default)(p.args.filter(c.isRequiredArgument),(function(e){return e.name}))}for(var d=e.getDocument().definitions,v=0;v<d.length;v++){var m=d[v];m.kind===a.Kind.DIRECTIVE_DEFINITION&&(t[m.name.value]=(0,i.default)(m.arguments?m.arguments.filter(y):[],(function(e){return e.name.value})))}return{Directive:{leave:function(n){var a=n.name.value,s=t[a];if(s)for(var l=n.arguments||[],f=(0,i.default)(l,(function(e){return e.name.value})),p=0,d=Object.keys(s);p<d.length;p++){var v=d[p];if(!f[v]){var y=s[v].type;e.reportError(new o.GraphQLError(h(a,v,(0,c.isType)(y)?(0,r.default)(y):(0,u.print)(y)),n))}}}}}}function y(e){return e.type.kind===a.Kind.NON_NULL_TYPE&&null==e.defaultValue}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.badVarPosMessage=l,t.VariablesInAllowedPosition=function(e){var t=Object.create(null);return{OperationDefinition:{enter:function(){t=Object.create(null)},leave:function(n){for(var r=e.getRecursiveVariableUsages(n),a=0;a<r.length;a++){var u=r[a],c=u.node,p=u.type,d=u.defaultValue,h=c.name.value,v=t[h];if(v&&p){var y=e.getSchema(),m=(0,s.typeFromAST)(y,v.type);m&&!f(y,m,v.defaultValue,p,d)&&e.reportError(new o.GraphQLError(l(h,(0,i.default)(m),(0,i.default)(p)),[v,c]))}}}},VariableDefinition:function(e){t[e.variable.name.value]=e}}};var r,i=(r=n(9))&&r.__esModule?r:{default:r},o=n(4),a=n(11),u=n(8),s=n(26),c=n(72);function l(e,t,n){return'Variable "$'.concat(e,'" of type "').concat(t,'" used in position expecting type "').concat(n,'".')}function f(e,t,n,r,i){if((0,u.isNonNullType)(r)&&!(0,u.isNonNullType)(t)){if(!(null!=n&&n.kind!==a.Kind.NULL)&&!(void 0!==i))return!1;var o=r.ofType;return(0,c.isTypeSubTypeOf)(e,t,o)}return(0,c.isTypeSubTypeOf)(e,t,r)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fieldsConflictMessage=p,t.OverlappingFieldsCanBeMerged=function(e){var t=new b,n=new Map;return{SelectionSet:function(r){for(var o=function(e,t,n,r,o){var a=[],u=m(e,t,r,o),s=u[0],c=u[1];if(function(e,t,n,r,o){for(var a=0,u=(0,i.default)(o);a<u.length;a++){var s=u[a],c=s[0],l=s[1];if(l.length>1)for(var f=0;f<l.length;f++)for(var p=f+1;p<l.length;p++){var d=y(e,n,r,!1,c,l[f],l[p]);d&&t.push(d)}}}(e,a,t,n,s),0!==c.length)for(var l=Object.create(null),f=0;f<c.length;f++){d(e,a,t,l,n,!1,s,c[f]);for(var p=f+1;p<c.length;p++)h(e,a,t,n,!1,c[f],c[p])}return a}(e,n,t,e.getParentType(),r),u=0;u<o.length;u++){var s=o[u],c=s[0],l=c[0],f=c[1],v=s[1],g=s[2];e.reportError(new a.GraphQLError(p(l,f),v.concat(g)))}}}};var r=f(n(57)),i=f(n(42)),o=f(n(9)),a=n(4),u=n(11),s=n(22),c=n(8),l=n(26);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){return'Fields "'.concat(e,'" conflict because ').concat(function e(t){if(Array.isArray(t))return t.map((function(t){var n=t[0],r=t[1];return'subfields "'.concat(n,'" conflict because ').concat(e(r))})).join(" and ");return t}(t),". ")+"Use different aliases on the fields to fetch both if this was intentional."}function d(e,t,n,r,i,o,a,u){if(!r[u]){r[u]=!0;var s=e.getFragment(u);if(s){var c=g(e,n,s),l=c[0],f=c[1];if(a!==l){v(e,t,n,i,o,a,l);for(var p=0;p<f.length;p++)d(e,t,n,r,i,o,a,f[p])}}}}function h(e,t,n,r,i,o,a){if(o!==a&&!r.has(o,a,i)){r.add(o,a,i);var u=e.getFragment(o),s=e.getFragment(a);if(u&&s){var c=g(e,n,u),l=c[0],f=c[1],p=g(e,n,s),d=p[0],y=p[1];v(e,t,n,r,i,l,d);for(var m=0;m<y.length;m++)h(e,t,n,r,i,o,y[m]);for(var b=0;b<f.length;b++)h(e,t,n,r,i,f[b],a)}}}function v(e,t,n,r,i,o,a){for(var u=0,s=Object.keys(o);u<s.length;u++){var c=s[u],l=a[c];if(l)for(var f=o[c],p=0;p<f.length;p++)for(var d=0;d<l.length;d++){var h=y(e,n,r,i,c,f[p],l[d]);h&&t.push(h)}}}function y(e,t,n,i,a,u,l){var f=u[0],p=u[1],y=u[2],g=l[0],b=l[1],T=l[2],_=i||f!==g&&(0,c.isObjectType)(f)&&(0,c.isObjectType)(g),O=y&&y.type,E=T&&T.type;if(!_){var N=p.name.value,w=b.name.value;if(N!==w)return[[a,"".concat(N," and ").concat(w," are different fields")],[p],[b]];if(!function(e,t){if(e.length!==t.length)return!1;return e.every((function(e){var n,i,o=(0,r.default)(t,(function(t){return t.name.value===e.name.value}));return!!o&&(n=e.value,i=o.value,!n&&!i||(0,s.print)(n)===(0,s.print)(i))}))}(p.arguments||[],b.arguments||[]))return[[a,"they have differing arguments"],[p],[b]]}if(O&&E&&function e(t,n){if((0,c.isListType)(t))return!(0,c.isListType)(n)||e(t.ofType,n.ofType);if((0,c.isListType)(n))return!0;if((0,c.isNonNullType)(t))return!(0,c.isNonNullType)(n)||e(t.ofType,n.ofType);if((0,c.isNonNullType)(n))return!0;if((0,c.isLeafType)(t)||(0,c.isLeafType)(n))return t!==n;return!1}(O,E))return[[a,"they return conflicting types ".concat((0,o.default)(O)," and ").concat((0,o.default)(E))],[p],[b]];var S=p.selectionSet,I=b.selectionSet;return S&&I?function(e,t,n,r){if(e.length>0)return[[t,e.map((function(e){return e[0]}))],e.reduce((function(e,t){var n=t[1];return e.concat(n)}),[n]),e.reduce((function(e,t){var n=t[2];return e.concat(n)}),[r])]}(function(e,t,n,r,i,o,a,u){var s=[],c=m(e,t,i,o),l=c[0],f=c[1],p=m(e,t,a,u),y=p[0],g=p[1];if(v(e,s,t,n,r,l,y),0!==g.length)for(var b=Object.create(null),T=0;T<g.length;T++)d(e,s,t,b,n,r,l,g[T]);if(0!==f.length)for(var _=Object.create(null),O=0;O<f.length;O++)d(e,s,t,_,n,r,y,f[O]);for(var E=0;E<f.length;E++)for(var N=0;N<g.length;N++)h(e,s,t,n,r,f[E],g[N]);return s}(e,t,n,_,(0,c.getNamedType)(O),S,(0,c.getNamedType)(E),I),a,p,b):void 0}function m(e,t,n,r){var i=t.get(r);if(!i){var o=Object.create(null),a=Object.create(null);!function e(t,n,r,i,o){for(var a=0,s=r.selections;a<s.length;a++){var f=s[a];switch(f.kind){case u.Kind.FIELD:var p=f.name.value,d=void 0;((0,c.isObjectType)(n)||(0,c.isInterfaceType)(n))&&(d=n.getFields()[p]);var h=f.alias?f.alias.value:p;i[h]||(i[h]=[]),i[h].push([n,f,d]);break;case u.Kind.FRAGMENT_SPREAD:o[f.name.value]=!0;break;case u.Kind.INLINE_FRAGMENT:var v=f.typeCondition,y=v?(0,l.typeFromAST)(t.getSchema(),v):n;e(t,y,f.selectionSet,i,o)}}}(e,n,r,o,a),i=[o,Object.keys(a)],t.set(r,i)}return i}function g(e,t,n){var r=t.get(n.selectionSet);if(r)return r;var i=(0,l.typeFromAST)(e.getSchema(),n.typeCondition);return m(e,t,i,n.selectionSet)}var b=function(){function e(){this._data=Object.create(null)}var t=e.prototype;return t.has=function(e,t,n){var r=this._data[e],i=r&&r[t];return void 0!==i&&(!1!==n||!1===i)},t.add=function(e,t,n){T(this._data,e,t,n),T(this._data,t,e,n)},e}();function T(e,t,n,r){var i=e[t];i||(i=Object.create(null),e[t]=i),i[n]=r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.duplicateInputFieldMessage=i,t.UniqueInputFieldNames=function(e){var t=[],n=Object.create(null);return{ObjectValue:{enter:function(){t.push(n),n=Object.create(null)},leave:function(){n=t.pop()}},ObjectField:function(t){var o=t.name.value;n[o]?e.reportError(new r.GraphQLError(i(o),[n[o],t.name])):n[o]=t.name}}};var r=n(4);function i(e){return'There can be only one input field named "'.concat(e,'".')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.schemaDefinitionNotAloneMessage=i,t.canNotDefineSchemaWithinExtensionMessage=o,t.LoneSchemaDefinition=function(e){var t=e.getSchema(),n=t&&(t.astNode||t.getQueryType()||t.getMutationType()||t.getSubscriptionType()),i=0;return{SchemaDefinition:function(t){n?e.reportError(new r.GraphQLError("Cannot define a new schema within a schema extension.",t)):(i>0&&e.reportError(new r.GraphQLError("Must provide only one schema definition.",t)),++i)}}};var r=n(4);function i(){return"Must provide only one schema definition."}function o(){return"Cannot define a new schema within a schema extension."}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.duplicateOperationTypeMessage=i,t.existedOperationTypeMessage=o,t.UniqueOperationTypes=function(e){var t=e.getSchema(),n=Object.create(null),a=t?{query:t.getQueryType(),mutation:t.getMutationType(),subscription:t.getSubscriptionType()}:{};return{SchemaDefinition:u,SchemaExtension:u};function u(t){if(t.operationTypes)for(var u=0,s=t.operationTypes||[];u<s.length;u++){var c=s[u],l=c.operation,f=n[l];a[l]?e.reportError(new r.GraphQLError(o(l),c)):f?e.reportError(new r.GraphQLError(i(l),[f,c])):n[l]=c}return!1}};var r=n(4);function i(e){return"There can be only one ".concat(e," type in schema.")}function o(e){return"Type for ".concat(e," already defined in the schema. It cannot be redefined.")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.duplicateTypeNameMessage=i,t.existedTypeNameMessage=o,t.UniqueTypeNames=function(e){var t=Object.create(null),n=e.getSchema();return{ScalarTypeDefinition:a,ObjectTypeDefinition:a,InterfaceTypeDefinition:a,UnionTypeDefinition:a,EnumTypeDefinition:a,InputObjectTypeDefinition:a};function a(a){var u=a.name.value;if(!n||!n.getType(u))return t[u]?e.reportError(new r.GraphQLError(i(u),[t[u],a.name])):t[u]=a.name,!1;e.reportError(new r.GraphQLError(o(u),a.name))}};var r=n(4);function i(e){return'There can be only one type named "'.concat(e,'".')}function o(e){return'Type "'.concat(e,'" already exists in the schema. It cannot also be defined in this type definition.')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.duplicateEnumValueNameMessage=o,t.existedEnumValueNameMessage=a,t.UniqueEnumValueNames=function(e){var t=e.getSchema(),n=t?t.getTypeMap():Object.create(null),u=Object.create(null);return{EnumTypeDefinition:s,EnumTypeExtension:s};function s(t){var s=t.name.value;if(u[s]||(u[s]=Object.create(null)),t.values)for(var c=u[s],l=0,f=t.values;l<f.length;l++){var p=f[l],d=p.name.value,h=n[s];(0,i.isEnumType)(h)&&h.getValue(d)?e.reportError(new r.GraphQLError(a(s,d),p.name)):c[d]?e.reportError(new r.GraphQLError(o(s,d),[c[d],p.name])):c[d]=p.name}return!1}};var r=n(4),i=n(8);function o(e,t){return'Enum value "'.concat(e,".").concat(t,'" can only be defined once.')}function a(e,t){return'Enum value "'.concat(e,".").concat(t,'" already exists in the schema. It cannot also be defined in this type extension.')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.duplicateFieldDefinitionNameMessage=o,t.existedFieldDefinitionNameMessage=a,t.UniqueFieldDefinitionNames=function(e){var t=e.getSchema(),n=t?t.getTypeMap():Object.create(null),i=Object.create(null);return{InputObjectTypeDefinition:s,InputObjectTypeExtension:s,InterfaceTypeDefinition:s,InterfaceTypeExtension:s,ObjectTypeDefinition:s,ObjectTypeExtension:s};function s(t){var s=t.name.value;if(i[s]||(i[s]=Object.create(null)),t.fields)for(var c=i[s],l=0,f=t.fields;l<f.length;l++){var p=f[l],d=p.name.value;u(n[s],d)?e.reportError(new r.GraphQLError(a(s,d),p.name)):c[d]?e.reportError(new r.GraphQLError(o(s,d),[c[d],p.name])):c[d]=p.name}return!1}};var r=n(4),i=n(8);function o(e,t){return'Field "'.concat(e,".").concat(t,'" can only be defined once.')}function a(e,t){return'Field "'.concat(e,".").concat(t,'" already exists in the schema. It cannot also be defined in this type extension.')}function u(e,t){return!!((0,i.isObjectType)(e)||(0,i.isInterfaceType)(e)||(0,i.isInputObjectType)(e))&&e.getFields()[t]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.duplicateDirectiveNameMessage=i,t.existedDirectiveNameMessage=o,t.UniqueDirectiveNames=function(e){var t=Object.create(null),n=e.getSchema();return{DirectiveDefinition:function(a){var u=a.name.value;if(!n||!n.getDirective(u))return t[u]?e.reportError(new r.GraphQLError(i(u),[t[u],a.name])):t[u]=a.name,!1;e.reportError(new r.GraphQLError(o(u),a.name))}}};var r=n(4);function i(e){return'There can be only one directive named "'.concat(e,'".')}function o(e){return'Directive "'.concat(e,'" already exists in the schema. It cannot be redefined.')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extendingUnknownTypeMessage=p,t.extendingDifferentTypeKindMessage=d,t.PossibleTypeExtensions=function(e){for(var t=e.getSchema(),n=Object.create(null),r=0,i=e.getDocument().definitions;r<i.length;r++){var l=i[r];(0,s.isTypeDefinitionNode)(l)&&(n[l.name.value]=l)}return{ScalarTypeExtension:f,ObjectTypeExtension:f,InterfaceTypeExtension:f,UnionTypeExtension:f,EnumTypeExtension:f,InputObjectTypeExtension:f};function f(r){var i=r.name.value,s=n[i],l=t&&t.getType(i);if(s){var f=h[s.kind];f!==r.kind&&e.reportError(new a.GraphQLError(d(i,v(f)),[s,r]))}else if(l){var y=function(e){if((0,c.isScalarType)(e))return u.Kind.SCALAR_TYPE_EXTENSION;if((0,c.isObjectType)(e))return u.Kind.OBJECT_TYPE_EXTENSION;if((0,c.isInterfaceType)(e))return u.Kind.INTERFACE_TYPE_EXTENSION;if((0,c.isUnionType)(e))return u.Kind.UNION_TYPE_EXTENSION;if((0,c.isEnumType)(e))return u.Kind.ENUM_TYPE_EXTENSION;if((0,c.isInputObjectType)(e))return u.Kind.INPUT_OBJECT_TYPE_EXTENSION}(l);y!==r.kind&&e.reportError(new a.GraphQLError(d(i,v(y)),r))}else{var m=Object.keys(n);t&&(m=m.concat(Object.keys(t.getTypeMap())));var g=(0,o.default)(i,m);e.reportError(new a.GraphQLError(p(i,g),r.name))}}};var r,i=l(n(44)),o=l(n(45)),a=n(4),u=n(11),s=n(46),c=n(8);function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return'Cannot extend type "'.concat(e,'" because it is not defined.')+(0,i.default)(t.map((function(e){return'"'.concat(e,'"')})))}function d(e,t){return"Cannot extend non-".concat(t,' type "').concat(e,'".')}var h=(f(r={},u.Kind.SCALAR_TYPE_DEFINITION,u.Kind.SCALAR_TYPE_EXTENSION),f(r,u.Kind.OBJECT_TYPE_DEFINITION,u.Kind.OBJECT_TYPE_EXTENSION),f(r,u.Kind.INTERFACE_TYPE_DEFINITION,u.Kind.INTERFACE_TYPE_EXTENSION),f(r,u.Kind.UNION_TYPE_DEFINITION,u.Kind.UNION_TYPE_EXTENSION),f(r,u.Kind.ENUM_TYPE_DEFINITION,u.Kind.ENUM_TYPE_EXTENSION),f(r,u.Kind.INPUT_OBJECT_TYPE_DEFINITION,u.Kind.INPUT_OBJECT_TYPE_EXTENSION),r);function v(e){switch(e){case u.Kind.SCALAR_TYPE_EXTENSION:return"scalar";case u.Kind.OBJECT_TYPE_EXTENSION:return"object";case u.Kind.INTERFACE_TYPE_EXTENSION:return"interface";case u.Kind.UNION_TYPE_EXTENSION:return"union";case u.Kind.ENUM_TYPE_EXTENSION:return"enum";case u.Kind.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:return"unknown type"}}},function(e,t,n){"use strict";function r(e){var t=!(e&&!1===e.descriptions);return"\n    query IntrospectionQuery {\n      __schema {\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ".concat(t?"description":"","\n          locations\n          args {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ").concat(t?"description":"","\n      fields(includeDeprecated: true) {\n        name\n        ").concat(t?"description":"","\n        args {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ").concat(t?"description":"","\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ").concat(t?"description":"","\n      type { ...TypeRef }\n      defaultValue\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ")}Object.defineProperty(t,"__esModule",{value:!0}),t.getIntrospectionQuery=r,t.introspectionQuery=void 0;var i=r();t.introspectionQuery=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildASTSchema=E,t.getDescription=j,t.buildSchema=function(e,t){return E((0,f.parse)(e,t),t)},t.ASTDefinitionBuilder=void 0;var r=O(n(16)),i=O(n(34)),o=O(n(9)),a=O(n(15)),u=O(n(20)),s=O(n(43)),c=n(11),l=n(53),f=n(41),p=n(46),d=n(52),h=n(76),v=n(74),y=n(25),m=n(21),g=n(35),b=n(17),T=n(8),_=n(75);function O(e){return e&&e.__esModule?e:{default:e}}function E(e,t){var n;e&&e.kind===c.Kind.DOCUMENT||(0,u.default)(0,"Must provide valid Document AST"),t&&(t.assumeValid||t.assumeValidSDL)||(0,h.assertValidSDL)(e);for(var i=[],o=[],a=0,s=e.definitions;a<s.length;a++){var l=s[a];l.kind===c.Kind.SCHEMA_DEFINITION?n=l:(0,p.isTypeDefinitionNode)(l)?i.push(l):l.kind===c.Kind.DIRECTIVE_DEFINITION&&o.push(l)}var f=new w(t,(function(e){var t=d[e];if(void 0===t)throw new Error('Type "'.concat(e,'" not found in document.'));return t})),d=S(i,(function(e){return f.buildType(e)})),v=n?function(e){for(var t={},n=0,r=e.operationTypes;n<r.length;n++){var i=r[n];t[i.operation]=i.type.name.value}return t}(n):{query:"Query",mutation:"Mutation",subscription:"Subscription"},y=o.map((function(e){return f.buildDirective(e)}));return y.some((function(e){return"skip"===e.name}))||y.push(b.GraphQLSkipDirective),y.some((function(e){return"include"===e.name}))||y.push(b.GraphQLIncludeDirective),y.some((function(e){return"deprecated"===e.name}))||y.push(b.GraphQLDeprecatedDirective),new g.GraphQLSchema({query:v.query?d[v.query]:null,mutation:v.mutation?d[v.mutation]:null,subscription:v.subscription?d[v.subscription]:null,types:(0,r.default)(d),directives:y,astNode:n,assumeValid:t&&t.assumeValid,allowedLegacyNames:t&&t.allowedLegacyNames})}var N=(0,i.default)(y.specifiedScalarTypes.concat(m.introspectionTypes),(function(e){return e.name})),w=function(){function e(e,t){this._options=e,this._resolveType=t}var t=e.prototype;return t.getNamedType=function(e){var t=e.name.value;return N[t]||this._resolveType(t)},t.getWrappedType=function(e){return e.kind===c.Kind.LIST_TYPE?new T.GraphQLList(this.getWrappedType(e.type)):e.kind===c.Kind.NON_NULL_TYPE?new T.GraphQLNonNull(this.getWrappedType(e.type)):this.getNamedType(e)},t.buildDirective=function(e){var t=this,n=e.locations.map((function(e){return e.value}));return new b.GraphQLDirective({name:e.name.value,description:j(e,this._options),locations:n,isRepeatable:e.repeatable,args:S(e.arguments||[],(function(e){return t.buildArg(e)})),astNode:e})},t.buildField=function(e){var t=this;return{type:this.getWrappedType(e.type),description:j(e,this._options),args:S(e.arguments||[],(function(e){return t.buildArg(e)})),deprecationReason:I(e),astNode:e}},t.buildArg=function(e){var t=this.getWrappedType(e.type);return{type:t,description:j(e,this._options),defaultValue:(0,_.valueFromAST)(e.defaultValue,t),astNode:e}},t.buildInputField=function(e){var t=this.getWrappedType(e.type);return{type:t,description:j(e,this._options),defaultValue:(0,_.valueFromAST)(e.defaultValue,t),astNode:e}},t.buildEnumValue=function(e){return{description:j(e,this._options),deprecationReason:I(e),astNode:e}},t.buildType=function(e){var t=e.name.value;if(N[t])return N[t];switch(e.kind){case c.Kind.OBJECT_TYPE_DEFINITION:return this._makeTypeDef(e);case c.Kind.INTERFACE_TYPE_DEFINITION:return this._makeInterfaceDef(e);case c.Kind.ENUM_TYPE_DEFINITION:return this._makeEnumDef(e);case c.Kind.UNION_TYPE_DEFINITION:return this._makeUnionDef(e);case c.Kind.SCALAR_TYPE_DEFINITION:return this._makeScalarDef(e);case c.Kind.INPUT_OBJECT_TYPE_DEFINITION:return this._makeInputObjectDef(e)}(0,a.default)(!1,"Unexpected type definition node: "+(0,o.default)(e))},t._makeTypeDef=function(e){var t=this,n=e.interfaces,r=e.fields,i=n&&n.length>0?function(){return n.map((function(e){return t.getNamedType(e)}))}:[],o=r&&r.length>0?function(){return S(r,(function(e){return t.buildField(e)}))}:Object.create(null);return new T.GraphQLObjectType({name:e.name.value,description:j(e,this._options),interfaces:i,fields:o,astNode:e})},t._makeInterfaceDef=function(e){var t=this,n=e.fields,r=n&&n.length>0?function(){return S(n,(function(e){return t.buildField(e)}))}:Object.create(null);return new T.GraphQLInterfaceType({name:e.name.value,description:j(e,this._options),fields:r,astNode:e})},t._makeEnumDef=function(e){var t=this,n=e.values||[];return new T.GraphQLEnumType({name:e.name.value,description:j(e,this._options),values:S(n,(function(e){return t.buildEnumValue(e)})),astNode:e})},t._makeUnionDef=function(e){var t=this,n=e.types,r=n&&n.length>0?function(){return n.map((function(e){return t.getNamedType(e)}))}:[];return new T.GraphQLUnionType({name:e.name.value,description:j(e,this._options),types:r,astNode:e})},t._makeScalarDef=function(e){return new T.GraphQLScalarType({name:e.name.value,description:j(e,this._options),astNode:e})},t._makeInputObjectDef=function(e){var t=this,n=e.fields;return new T.GraphQLInputObjectType({name:e.name.value,description:j(e,this._options),fields:n?function(){return S(n,(function(e){return t.buildInputField(e)}))}:Object.create(null),astNode:e})},e}();function S(e,t){return(0,s.default)(e,(function(e){return e.name.value}),t)}function I(e){var t=(0,v.getDirectiveValues)(b.GraphQLDeprecatedDirective,e);return t&&t.reason}function j(e,t){if(e.description)return e.description.value;if(t&&t.commentDescriptions){var n=function(e){var t=e.loc;if(!t)return;var n=[],r=t.startToken.prev;for(;r&&r.kind===l.TokenKind.COMMENT&&r.next&&r.prev&&r.line+1===r.next.line&&r.line!==r.prev.line;){var i=String(r.value);n.push(i),r=r.prev}return n.reverse().join("\n")}(e);if(void 0!==n)return(0,d.dedentBlockStringValue)("\n"+n)}}t.ASTDefinitionBuilder=w},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.coerceValue=function(e,t,n,s){var c=[],l=(0,u.coerceInputValue)(e,t,(function(e,t,u){var l="Invalid value "+(0,r.default)(t),f=[].concat((0,o.pathToArray)(s),e);f.length>0&&(l+=' at "value'.concat((0,i.default)(f),'"')),c.push(new a.GraphQLError(l+": "+u.message,n,void 0,void 0,void 0,u.originalError))}));return c.length>0?{errors:c,value:void 0}:{errors:void 0,value:l}};var r=s(n(9)),i=s(n(100)),o=n(56),a=n(4),u=n(101);function s(e){return e&&e.__esModule?e:{default:e}}},function(e,t){function n(e){return e&&"object"==typeof e&&!Array.isArray(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,r){var i=Object.assign({},t);return n(t)&&n(r)&&Object.keys(r).forEach((function(o){var a,u;n(r[o])?o in t?i[o]=e(t[o],r[o]):Object.assign(i,((a={})[o]=r[o],a)):Object.assign(i,((u={})[o]=r[o],u))})),i}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.specifiedScalarTypes=[r.GraphQLString,r.GraphQLInt,r.GraphQLFloat,r.GraphQLBoolean,r.GraphQLID],t.default=function(e){return r.isNamedType(e)&&(e.name===r.GraphQLString.name||e.name===r.GraphQLInt.name||e.name===r.GraphQLFloat.name||e.name===r.GraphQLBoolean.name||e.name===r.GraphQLID.name)}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getResponseKeyFromInfo=function(e){return e.fieldNodes[0].alias?e.fieldNodes[0].alias.value:e.fieldName}},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var i=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),i[t]=e>>>((3&t)<<3)&255;return i}}},function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,i=n;return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),i=n(28);t.execute=i.execute,t.default=function(e){return function(t){return r.makePromise(r.execute(e,t))}}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return!0;for(var t in e)if(Object.hasOwnProperty.call(e,t))return!1;return!0}},function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r};Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),a=function(){function e(e,t){this.schema=e,this.args=t}return e.prototype.transformRequest=function(e){var t=function(e,t,n){var a=t.definitions.filter((function(e){return e.kind===o.Kind.OPERATION_DEFINITION})),s=t.definitions.filter((function(e){return e.kind===o.Kind.FRAGMENT_DEFINITION})),c={},l=a.map((function(t){var i,a=t.variableDefinitions.map((function(e){return e.variable.name.value})),s=0,l={};i="subscription"===t.operation?e.getSubscriptionType():"mutation"===t.operation?e.getMutationType():e.getQueryType();var f=[];return t.selectionSet.selections.forEach((function(e){if(e.kind===o.Kind.FIELD){var t={};e.arguments.forEach((function(e){t[e.name.value]=e}));var p=e.name.value;i.getFields()[p].args.forEach((function(e){if(e.name in n){var r=function(e){var t;do{t="_v"+s+"_"+e,s++}while(-1!==a.indexOf(t));return t}(e.name);c[e.name]=r,t[e.name]={kind:o.Kind.ARGUMENT,name:{kind:o.Kind.NAME,value:e.name},value:{kind:o.Kind.VARIABLE,name:{kind:o.Kind.NAME,value:r}}},a.push(r),l[r]={kind:o.Kind.VARIABLE_DEFINITION,variable:{kind:o.Kind.VARIABLE,name:{kind:o.Kind.NAME,value:r}},type:u(e.type)}}})),f.push(r(r({},e),{arguments:Object.keys(t).map((function(e){return t[e]}))}))}else f.push(e)})),r(r({},t),{variableDefinitions:t.variableDefinitions.concat(Object.keys(l).map((function(e){return l[e]}))),selectionSet:{kind:o.Kind.SELECTION_SET,selections:f}})})),f={};return Object.keys(c).forEach((function(e){f[c[e]]=n[e]})),{document:r(r({},t),{definitions:i(l,s)}),newVariables:f}}(this.schema,e.document,this.args),n=t.document,a=t.newVariables;return{document:n,variables:r(r({},e.variables),a)}},e}();function u(e){if(e instanceof o.GraphQLNonNull){var t=u(e.ofType);if(t.kind===o.Kind.LIST_TYPE||t.kind===o.Kind.NAMED_TYPE)return{kind:o.Kind.NON_NULL_TYPE,type:t};throw new Error("Incorrent inner non-null type")}return e instanceof o.GraphQLList?{kind:o.Kind.LIST_TYPE,type:u(e.ofType)}:{kind:o.Kind.NAMED_TYPE,name:{kind:o.Kind.NAME,value:e.toString()}}}t.default=a},function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r};Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),a=n(182),u=function(){function e(e){this.targetSchema=e}return e.prototype.transformRequest=function(e){var t=function(e,t){var n=t.definitions.filter((function(e){return e.kind===o.Kind.OPERATION_DEFINITION})),r=t.definitions.filter((function(e){return e.kind===o.Kind.FRAGMENT_DEFINITION})),a=[],u=[],c=[],f=r.filter((function(t){var n=t.typeCondition.name.value;return Boolean(e.getType(n))})),p={};f.forEach((function(t){var n=t.typeCondition.name.value,r=e.getType(n);p[t.name.value]=r}));var d=Object.create(null);return n.forEach((function(t){var n;n="subscription"===t.operation?e.getSubscriptionType():"mutation"===t.operation?e.getMutationType():e.getQueryType();var r=s(e,n,p,t.selectionSet),i=r.selectionSet,h=r.usedFragments,v=r.usedVariables;a=l(a,h);var y=function(e,t,n,r,i){var a=[],u=[],c=function(){var c=i.pop(),f=n.find((function(e){return e.name.value===c}));if(f){var p=c,d=f.typeCondition.name.value,h=e.getType(d),v=s(e,h,r,f.selectionSet),y=v.selectionSet,m=v.usedFragments,g=v.usedVariables;i=l(i,m),a=l(a,g),t[p]||(t[p]=!0,u.push({kind:o.Kind.FRAGMENT_DEFINITION,name:{kind:o.Kind.NAME,value:p},typeCondition:f.typeCondition,selectionSet:y}))}};for(;0!==i.length;)c();return{usedVariables:a,newFragments:u,fragmentSet:t}}(e,d,f,p,a),m=y.usedVariables,g=y.newFragments,b=y.fragmentSet,T=l(v,m);c=g,d=b;var _=t.variableDefinitions.filter((function(e){return-1!==T.indexOf(e.variable.name.value)}));u.push({kind:o.Kind.OPERATION_DEFINITION,operation:t.operation,name:t.name,directives:t.directives,variableDefinitions:_,selectionSet:i})})),{kind:o.Kind.DOCUMENT,definitions:i(u,c)}}(this.targetSchema,e.document);return r(r({},e),{document:t})},e}();function s(e,t,n,i){var u,s=[],l=[],f=[t];return{selectionSet:o.visit(i,((u={})[o.Kind.FIELD]={enter:function(e){var t=c(f[f.length-1]);if(t instanceof o.GraphQLObjectType||t instanceof o.GraphQLInterfaceType){var n=t.getFields(),i="__typename"===e.name.value?o.TypeNameMetaFieldDef:n[e.name.value];if(!i)return null;f.push(i.type);var a=(i.args||[]).map((function(e){return e.name}));if(e.arguments){var u=e.arguments.filter((function(e){return-1!==a.indexOf(e.name.value)}));if(u.length!==e.arguments.length)return r(r({},e),{arguments:u})}}else t instanceof o.GraphQLUnionType&&"__typename"===e.name.value&&f.push(o.TypeNameMetaFieldDef.type)},leave:function(e){var t,n=c(f.pop());if(n instanceof o.GraphQLObjectType||n instanceof o.GraphQLInterfaceType){var r=e.selectionSet&&e.selectionSet.selections||null;if(!r||0===r.length)return o.visit(e,((t={})[o.Kind.VARIABLE]=function(e){var t=l.indexOf(e.name.value);-1!==t&&l.splice(t,1)},t)),null}}},u[o.Kind.FRAGMENT_SPREAD]=function(t){if(t.name.value in n){var r=c(f[f.length-1]),i=n[t.name.value];return a.default(e,r,i)?void s.push(t.name.value):null}return null},u[o.Kind.INLINE_FRAGMENT]={enter:function(t){if(t.typeCondition){var n=e.getType(t.typeCondition.name.value),r=c(f[f.length-1]);if(!a.default(e,r,n))return null;f.push(n)}},leave:function(e){f.pop()}},u[o.Kind.VARIABLE]=function(e){l.push(e.name.value)},u)),usedFragments:s,usedVariables:l}}function c(e){for(var t=e;t instanceof o.GraphQLNonNull||t instanceof o.GraphQLList;)t=t.ofType;return t}function l(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n={},r=[];return e.forEach((function(e){e.forEach((function(e){n[e]||(n[e]=!0,r.push(e))}))})),r}t.default=u},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.default=function(e,t,n){return t===n||!(!r.isCompositeType(t)||!r.isCompositeType(n))&&r.doTypesOverlap(e,t,n)}},function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=function(){function e(e){this.targetSchema=e}return e.prototype.transformRequest=function(e){var t=function(e,t){var n,o=new i.TypeInfo(e);return i.visit(t,i.visitWithTypeInfo(o,((n={})[i.Kind.SELECTION_SET]=function(e){var t=o.getParentType(),n=e.selections;if(t&&(t instanceof i.GraphQLInterfaceType||t instanceof i.GraphQLUnionType)&&!n.find((function(e){return e.kind===i.Kind.FIELD&&"__typename"===e.name.value}))&&(n=n.concat({kind:i.Kind.FIELD,name:{kind:i.Kind.NAME,value:"__typename"}})),n!==e.selections)return r(r({},e),{selections:n})},n)))}(this.targetSchema,e.document);return r(r({},e),{document:t})},e}();t.default=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(110),i=function(){function e(e,t){this.info=e,this.fieldName=t}return e.prototype.transformResult=function(e){return r.checkResultAndHandleErrors(e,this.info,this.fieldName)},e}();t.default=i},function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r};Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),a=n(182),u=function(){function e(e,t){var n,r;this.targetSchema=t,this.mapping=function(e,t){var n=e.getTypeMap(),r={};return Object.keys(n).forEach((function(i){var a=n[i];if(o.isAbstractType(a)){var u=t.getType(i);if(!o.isAbstractType(u)){var s=e.getPossibleTypes(a)||[];r[i]=s.filter((function(e){return t.getType(e.name)})).map((function(e){return e.name}))}}})),r}(e,t),this.reverseMapping=(n=this.mapping,r={},Object.keys(n).forEach((function(e){n[e].forEach((function(t){r[t]||(r[t]=[]),r[t].push(e)}))})),r)}return e.prototype.transformRequest=function(e){var t=function(e,t,n,u){var s,c=u.definitions.filter((function(e){return e.kind===o.Kind.OPERATION_DEFINITION})),l=u.definitions.filter((function(e){return e.kind===o.Kind.FRAGMENT_DEFINITION})),f=l.map((function(e){return e.name.value})),p=0,d=[],h={};l.forEach((function(e){d.push(e);var n=t[e.typeCondition.name.value];n&&(h[e.name.value]=[],n.forEach((function(t){var n=function(e){var t;do{t="_"+e+"_Fragment"+p,p++}while(-1!==f.indexOf(t));return t}(t);f.push(n);var r={kind:o.Kind.FRAGMENT_DEFINITION,name:{kind:o.Kind.NAME,value:n},typeCondition:{kind:o.Kind.NAMED_TYPE,name:{kind:o.Kind.NAME,value:t}},selectionSet:e.selectionSet};d.push(r),h[e.name.value].push({fragmentName:n,typeName:t})})))}));var v=r(r({},u),{definitions:i(c,d)}),y=new o.TypeInfo(e);return o.visit(v,o.visitWithTypeInfo(y,((s={})[o.Kind.SELECTION_SET]=function(u){var s=i(u.selections),c=o.getNamedType(y.getParentType());if(u.selections.forEach((function(n){if(n.kind===o.Kind.INLINE_FRAGMENT){var r=t[n.typeCondition.name.value];r&&r.forEach((function(t){a.default(e,c,e.getType(t))&&s.push({kind:o.Kind.INLINE_FRAGMENT,typeCondition:{kind:o.Kind.NAMED_TYPE,name:{kind:o.Kind.NAME,value:t}},selectionSet:n.selectionSet})}))}else if(n.kind===o.Kind.FRAGMENT_SPREAD){var i=n.name.value,u=h[i];u&&u.forEach((function(t){var n=t.typeName;a.default(e,c,e.getType(n))&&s.push({kind:o.Kind.FRAGMENT_SPREAD,name:{kind:o.Kind.NAME,value:t.fragmentName}})}))}})),c&&n[c.name]&&s.push({kind:o.Kind.FIELD,name:{kind:o.Kind.NAME,value:"__typename"}}),s.length!==u.selections.length)return r(r({},u),{selections:s})},s)))}(this.targetSchema,this.mapping,this.reverseMapping,e.document);return r(r({},e),{document:t})},e}();t.default=u},function(e,t,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=function(){function e(e,t){this.targetSchema=e,this.mapping={};for(var n=0,r=t;n<r.length;n++){var i=r[n],o=i.field,u=a(i.fragment),s=u.typeCondition.name.value;this.mapping[s]=this.mapping[s]||{},this.mapping[s][o]?this.mapping[s][o].push(u):this.mapping[s][o]=[u]}}return e.prototype.transformRequest=function(e){var t=function(e,t,n){var o,a=new i.TypeInfo(e);return i.visit(t,i.visitWithTypeInfo(a,((o={})[i.Kind.SELECTION_SET]=function(e){var t=a.getParentType();if(t){var o=t.name,s=e.selections;if(n[o]&&e.selections.forEach((function(e){if(e.kind===i.Kind.FIELD){var t=e.name.value,r=n[o][t];if(r&&r.length>0){var a=u(o,r);s=s.concat(a)}}})),s!==e.selections)return r(r({},e),{selections:s})}},o)))}(this.targetSchema,e.document,this.mapping);return r(r({},e),{document:t})},e}();function a(e){if(e.trim().startsWith("fragment"))for(var t=0,n=i.parse(e).definitions;t<n.length;t++){var r=n[t];if(r.kind===i.Kind.FRAGMENT_DEFINITION)return{kind:i.Kind.INLINE_FRAGMENT,typeCondition:r.typeCondition,selectionSet:r.selectionSet}}for(var o=0,a=i.parse("{"+e+"}").definitions[0].selectionSet.selections;o<a.length;o++){var u=a[o];if(u.kind===i.Kind.INLINE_FRAGMENT)return u}throw new Error("Could not parse fragment")}function u(e,t){var n,o=t.reduce((function(e,t){return e.concat(t.selectionSet.selections)}),[]),a=(n=o.reduce((function(e,t){var n,i,o;switch(t.kind){case"Field":return t.alias?e.hasOwnProperty(t.alias.value)?e:r(r({},e),((n={})[t.alias.value]=t,n)):e.hasOwnProperty(t.name.value)?e:r(r({},e),((i={})[t.name.value]=t,i));case"FragmentSpread":return e.hasOwnProperty(t.name.value)?e:r(r({},e),((o={})[t.name.value]=t,o));case"InlineFragment":if(e.__fragment){var a=e.__fragment;return r(r({},e),{__fragment:u(a.typeCondition.name.value,[a,t])})}return r(r({},e),{__fragment:t});default:return e}}),{}),Object.keys(n).reduce((function(e,t){return e.concat(n[t])}),[]));return{kind:i.Kind.INLINE_FRAGMENT,typeCondition:{kind:i.Kind.NAMED_TYPE,name:{kind:i.Kind.NAME,value:e}},selectionSet:{kind:i.Kind.SELECTION_SET,selections:a}}}t.default=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(299);t.transformSchema=r.default;var i=n(180);t.AddArgumentsAsVariables=i.default;var o=n(184);t.CheckResultAndHandleErrors=o.default;var a=n(186);t.ReplaceFieldWithFragment=a.default;var u=n(183);t.AddTypenameToAbstract=u.default;var s=n(181);t.FilterToSchema=s.default;var c=n(301);t.RenameTypes=c.default;var l=n(302);t.FilterTypes=l.default;var f=n(112);t.TransformRootFields=f.default;var p=n(303);t.RenameRootFields=p.default;var d=n(304);t.FilterRootFields=d.default;var h=n(185);t.ExpandAbstractTypes=h.default;var v=n(305);t.ExtractField=v.default;var y=n(306);t.WrapQuery=y.default},function(e,t,n){"use strict";(function(e,r){var i,o=n(189);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=Object(o.a)(i);t.a=a}).call(this,n(40),n(243)(e))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},function(e,t,n){e.exports=n(244).Observable},function(e,t,n){"use strict";e.exports=function(e,t){t||(t={}),"function"==typeof t&&(t={cmp:t});var n,r="boolean"==typeof t.cycles&&t.cycles,i=t.cmp&&(n=t.cmp,function(e){return function(t,r){var i={key:t,value:e[t]},o={key:r,value:e[r]};return n(i,o)}}),o=[];return function e(t){if(t&&t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON()),void 0!==t){if("number"==typeof t)return isFinite(t)?""+t:"null";if("object"!=typeof t)return JSON.stringify(t);var n,a;if(Array.isArray(t)){for(a="[",n=0;n<t.length;n++)n&&(a+=","),a+=e(t[n])||"null";return a+"]"}if(null===t)return"null";if(-1!==o.indexOf(t)){if(r)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var u=o.push(t)-1,s=Object.keys(t).sort(i&&i(t));for(a="",n=0;n<s.length;n++){var c=s[n],l=e(t[c]);l&&(a&&(a+=","),a+=JSON.stringify(c)+":"+l)}return o.splice(u,1),"{"+a+"}"}}(e)}},function(e,t){e.exports=window.prestashop},function(e,t,n){"use strict";var r=n(194),i=n(195),o=n(49),a=n(78);e.exports=n(114)(Array,"Array",(function(e,t){this._t=a(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,i(1)):i(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){var r=n(62);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t,n){e.exports=!n(36)&&!n(65)((function(){return 7!=Object.defineProperty(n(81)("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(31);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){e.exports=n(32)},function(e,t,n){"use strict";var r=n(201),i=n(115),o=n(84),a={};n(32)(a,n(18)("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=r(a,{next:i(1,n)}),o(e,t+" Iterator")}},function(e,t,n){var r=n(23),i=n(127),o=n(118),a=n(83)("IE_PROTO"),u=function(){},s=function(){var e,t=n(81)("iframe"),r=o.length;for(t.style.display="none",n(119).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),s=e.F;r--;)delete s.prototype[o[r]];return s()};e.exports=Object.create||function(e,t){var n;return null!==e?(u.prototype=r(e),n=new u,u.prototype=null,n[a]=e):n=s(),void 0===t?n:i(n,t)}},function(e,t,n){var r=n(203),i=n(118);e.exports=Object.keys||function(e){return r(e,i)}},function(e,t,n){var r=n(51),i=n(78),o=n(204)(!1),a=n(83)("IE_PROTO");e.exports=function(e,t){var n,u=i(e),s=0,c=[];for(n in u)n!=a&&r(u,n)&&c.push(n);for(;t.length>s;)r(u,n=t[s++])&&(~o(c,n)||c.push(n));return c}},function(e,t,n){var r=n(78),i=n(116),o=n(205);e.exports=function(e){return function(t,n,a){var u,s=r(t),c=i(s.length),l=o(a,c);if(e&&n!=n){for(;c>l;)if((u=s[l++])!=u)return!0}else for(;c>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var r=n(82),i=Math.max,o=Math.min;e.exports=function(e,t){return(e=r(e))<0?i(e+t,0):o(e,t)}},function(e,t,n){var r=n(51),i=n(207),o=n(83)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),r(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){var r=n(79);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(82),i=n(79);e.exports=function(e){return function(t,n){var o,a,u=String(i(t)),s=r(n),c=u.length;return s<0||s>=c?e?"":void 0:(o=u.charCodeAt(s))<55296||o>56319||s+1===c||(a=u.charCodeAt(s+1))<56320||a>57343?e?u.charAt(s):o:e?u.slice(s,s+2):a-56320+(o-55296<<10)+65536}}},function(e,t,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(210),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"==typeof e,c=t.regeneratorRuntime;if(c)s&&(e.exports=c);else{(c=t.regeneratorRuntime=s?e.exports:{}).wrap=v;var l={},f={};f[o]=function(){return this};var p=Object.getPrototypeOf,d=p&&p(p(S([])));d&&d!==n&&r.call(d,o)&&(f=d);var h=b.prototype=m.prototype=Object.create(f);g.prototype=h.constructor=b,b.constructor=g,b[u]=g.displayName="GeneratorFunction",c.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(h),e},c.awrap=function(e){return{__await:e}},T(_.prototype),_.prototype[a]=function(){return this},c.AsyncIterator=_,c.async=function(e,t,n,r){var i=new _(v(e,t,n,r));return c.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},T(h),h[u]="Generator",h[o]=function(){return this},h.toString=function(){return"[object Generator]"},c.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},c.values=S,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;N(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}}}function v(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),a=new w(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return I()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var u=O(a,n);if(u){if(u===l)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=y(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,a),o}function y(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function m(){}function g(){}function b(){}function T(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function _(e){var t;this._invoke=function(n,i){function o(){return new Promise((function(t,o){!function t(n,i,o,a){var u=y(e[n],e,i);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"==typeof c&&r.call(c,"__await")?Promise.resolve(c.__await).then((function(e){t("next",e,o,a)}),(function(e){t("throw",e,o,a)})):Promise.resolve(c).then((function(e){s.value=e,o(s)}),a)}a(u.arg)}(n,i,t,o)}))}return t=t?t.then(o,o):o()}}function O(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=y(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:I}}function I(){return{value:void 0,done:!0}}}(function(){return this}()||Function("return this")())},function(e,t,n){e.exports={default:n(212),__esModule:!0}},function(e,t,n){n(213),n(128),n(126),n(214),n(225),n(226),e.exports=n(19).Promise},function(e,t){},function(e,t,n){"use strict";var r,i,o,a,u=n(80),s=n(14),c=n(63),l=n(120),f=n(37),p=n(31),d=n(64),h=n(215),v=n(216),y=n(121),m=n(122).set,g=n(220)(),b=n(85),T=n(123),_=n(221),O=n(124),E=s.TypeError,N=s.process,w=N&&N.versions,S=w&&w.v8||"",I=s.Promise,j="process"==l(N),k=function(){},L=i=b.f,x=!!function(){try{var e=I.resolve(1),t=(e.constructor={})[n(18)("species")]=function(e){e(k,k)};return(j||"function"==typeof PromiseRejectionEvent)&&e.then(k)instanceof t&&0!==S.indexOf("6.6")&&-1===_.indexOf("Chrome/66")}catch(e){}}(),A=function(e){var t;return!(!p(e)||"function"!=typeof(t=e.then))&&t},D=function(e,t){if(!e._n){e._n=!0;var n=e._c;g((function(){for(var r=e._v,i=1==e._s,o=0,a=function(t){var n,o,a,u=i?t.ok:t.fail,s=t.resolve,c=t.reject,l=t.domain;try{u?(i||(2==e._h&&M(e),e._h=1),!0===u?n=r:(l&&l.enter(),n=u(r),l&&(l.exit(),a=!0)),n===t.promise?c(E("Promise-chain cycle")):(o=A(n))?o.call(n,s,c):s(n)):c(r)}catch(e){l&&!a&&l.exit(),c(e)}};n.length>o;)a(n[o++]);e._c=[],e._n=!1,t&&!e._h&&P(e)}))}},P=function(e){m.call(s,(function(){var t,n,r,i=e._v,o=R(e);if(o&&(t=T((function(){j?N.emit("unhandledRejection",i,e):(n=s.onunhandledrejection)?n({promise:e,reason:i}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",i)})),e._h=j||R(e)?2:1),e._a=void 0,o&&t.e)throw t.v}))},R=function(e){return 1!==e._h&&0===(e._a||e._c).length},M=function(e){m.call(s,(function(){var t;j?N.emit("rejectionHandled",e):(t=s.onrejectionhandled)&&t({promise:e,reason:e._v})}))},F=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),D(t,!0))},C=function(e){var t,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw E("Promise can't be resolved itself");(t=A(e))?g((function(){var r={_w:n,_d:!1};try{t.call(e,c(C,r,1),c(F,r,1))}catch(e){F.call(r,e)}})):(n._v=e,n._s=1,D(n,!1))}catch(e){F.call({_w:n,_d:!1},e)}}};x||(I=function(e){h(this,I,"Promise","_h"),d(e),r.call(this);try{e(c(C,this,1),c(F,this,1))}catch(e){F.call(this,e)}},(r=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(222)(I.prototype,{then:function(e,t){var n=L(y(this,I));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=j?N.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&D(this,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new r;this.promise=e,this.resolve=c(C,e,1),this.reject=c(F,e,1)},b.f=L=function(e){return e===I||e===a?new o(e):i(e)}),f(f.G+f.W+f.F*!x,{Promise:I}),n(84)(I,"Promise"),n(223)("Promise"),a=n(19).Promise,f(f.S+f.F*!x,"Promise",{reject:function(e){var t=L(this);return(0,t.reject)(e),t.promise}}),f(f.S+f.F*(u||!x),"Promise",{resolve:function(e){return O(u&&this===a?I:this,e)}}),f(f.S+f.F*!(x&&n(224)((function(e){I.all(e).catch(k)}))),"Promise",{all:function(e){var t=this,n=L(t),r=n.resolve,i=n.reject,o=T((function(){var n=[],o=0,a=1;v(e,!1,(function(e){var u=o++,s=!1;n.push(void 0),a++,t.resolve(e).then((function(e){s||(s=!0,n[u]=e,--a||r(n))}),i)})),--a||r(n)}));return o.e&&i(o.v),n.promise},race:function(e){var t=this,n=L(t),r=n.reject,i=T((function(){v(e,!1,(function(e){t.resolve(e).then(n.resolve,r)}))}));return i.e&&r(i.v),n.promise}})},function(e,t){e.exports=function(e,t,n,r){if(!(e instanceof t)||void 0!==r&&r in e)throw TypeError(n+": incorrect invocation!");return e}},function(e,t,n){var r=n(63),i=n(217),o=n(218),a=n(23),u=n(116),s=n(129),c={},l={};(t=e.exports=function(e,t,n,f,p){var d,h,v,y,m=p?function(){return e}:s(e),g=r(n,f,t?2:1),b=0;if("function"!=typeof m)throw TypeError(e+" is not iterable!");if(o(m)){for(d=u(e.length);d>b;b++)if((y=t?g(a(h=e[b])[0],h[1]):g(e[b]))===c||y===l)return y}else for(v=m.call(e);!(h=v.next()).done;)if((y=i(v,g,h.value,t))===c||y===l)return y}).BREAK=c,t.RETURN=l},function(e,t,n){var r=n(23);e.exports=function(e,t,n,i){try{return i?t(r(n)[0],n[1]):t(n)}catch(t){var o=e.return;throw void 0!==o&&r(o.call(e)),t}}},function(e,t,n){var r=n(49),i=n(18)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[i]===e)}},function(e,t){e.exports=function(e,t,n){var r=void 0===n;switch(t.length){case 0:return r?e():e.call(n);case 1:return r?e(t[0]):e.call(n,t[0]);case 2:return r?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return r?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return r?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)}},function(e,t,n){var r=n(14),i=n(122).set,o=r.MutationObserver||r.WebKitMutationObserver,a=r.process,u=r.Promise,s="process"==n(62)(a);e.exports=function(){var e,t,n,c=function(){var r,i;for(s&&(r=a.domain)&&r.exit();e;){i=e.fn,e=e.next;try{i()}catch(r){throw e?n():t=void 0,r}}t=void 0,r&&r.enter()};if(s)n=function(){a.nextTick(c)};else if(!o||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var l=u.resolve(void 0);n=function(){l.then(c)}}else n=function(){i.call(r,c)};else{var f=!0,p=document.createTextNode("");new o(c).observe(p,{characterData:!0}),n=function(){p.data=f=!f}}return function(r){var i={fn:r,next:void 0};t&&(t.next=i),e||(e=i,n()),t=i}}},function(e,t,n){var r=n(14).navigator;e.exports=r&&r.userAgent||""},function(e,t,n){var r=n(32);e.exports=function(e,t,n){for(var i in t)n&&e[i]?e[i]=t[i]:r(e,i,t[i]);return e}},function(e,t,n){"use strict";var r=n(14),i=n(19),o=n(50),a=n(36),u=n(18)("species");e.exports=function(e){var t="function"==typeof i[e]?i[e]:r[e];a&&t&&!t[u]&&o.f(t,u,{configurable:!0,get:function(){return this}})}},function(e,t,n){var r=n(18)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},e(o)}catch(e){}return n}},function(e,t,n){"use strict";var r=n(37),i=n(19),o=n(14),a=n(121),u=n(124);r(r.P+r.R,"Promise",{finally:function(e){var t=a(this,i.Promise||o.Promise),n="function"==typeof e;return this.then(n?function(n){return u(t,e()).then((function(){return n}))}:e,n?function(n){return u(t,e()).then((function(){throw n}))}:e)}})},function(e,t,n){"use strict";var r=n(37),i=n(85),o=n(123);r(r.S,"Promise",{try:function(e){var t=i.f(this),n=o(e);return(n.e?t.reject:t.resolve)(n.v),t.promise}})},function(e,t){var n=/^(attrs|props|on|nativeOn|class|style|hook)$/;function r(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}}e.exports=function(e){return e.reduce((function(e,t){var i,o,a,u,s;for(a in t)if(i=e[a],o=t[a],i&&n.test(a))if("class"===a&&("string"==typeof i&&(s=i,e[a]=i={},i[s]=!0),"string"==typeof o&&(s=o,t[a]=o={},o[s]=!0)),"on"===a||"nativeOn"===a||"hook"===a)for(u in o)i[u]=r(i[u],o[u]);else if(Array.isArray(i))e[a]=i.concat(o);else if(Array.isArray(o))e[a]=[i].concat(o);else for(u in o)i[u]=o[u];else e[a]=t[a];return e}),{})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={addToCart:{Accept:"application/json, text/javascript"},products:{"Content-Type":"application/json",Accept:"application/json, text/javascript, */*; q=0.01"}}},function(e,t,n){"use strict";n.r(t);var r=n(230),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=i.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=s(n(87)),o=s(n(88)),a=s(n(341)),u=s(n(66));function s(e){return e&&e.__esModule?e:{default:e}}t.default={name:"Create",props:{url:{type:String,required:!0,default:"#"},title:{type:String,required:!0,default:"New wishlist"},label:{type:String,required:!0,default:"Wishlist name"},placeholder:{type:String,required:!0,default:"Add name"},cancelText:{type:String,required:!0,default:"Cancel"},lengthText:{type:String,required:!0,default:"List title is too short"},createText:{type:String,required:!0,default:"Create"}},data:function(){return{value:"",isHidden:!0}},methods:{toggleModal:function(){this.isHidden=!this.isHidden},createWishlist:(r=(0,o.default)(i.default.mark((function e(){var t,n;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.value.replace(/ /g,"")<1)){e.next=4;break}return u.default.$emit("showToast",{detail:{type:"error",message:this.lengthText}}),e.abrupt("return",!1);case 4:return e.next=6,this.$apollo.mutate({mutation:a.default,variables:{name:this.value,url:this.url}});case 6:return t=e.sent,n=t.data,u.default.$emit("showToast",{detail:{type:n.createList.success?"success":"error",message:n.createList.message}}),u.default.$emit("refetchList"),this.toggleModal(),u.default.$emit("showAddToWishList",{detail:{forceOpen:!0}}),e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var e=this;u.default.$on("showCreateWishlist",(function(){e.value="",e.toggleModal()}))}}},function(e,t,n){var r=n(343);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(90).default)("061fc30c",r,!1,{})},function(e,t,n){"use strict";n.r(t);var r=n(233),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=i.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(66),o=(r=i)&&r.__esModule?r:{default:r};t.default={name:"Button",props:{renameWishlistText:{type:String,required:!0},addedWishlistText:{type:String,required:!0},deleteWishlistText:{type:String,required:!0},createWishlistText:{type:String,required:!0},deleteProductText:{type:String,required:!0},copyText:{type:String,required:!0}},data:function(){return{text:"",active:!1,timeout:null,type:"basic"}},mounted:function(){var e=this;o.default.$on("showToast",(function(t){t.detail.message&&(e[t.detail.message]?e.text=e[t.detail.message]:e.text=t.detail.message),e.active=!0,e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.active=!1,e.timeout=null}),2500),e.type=t.detail.type?t.detail.type:"basic"}))}}},function(e,t,n){var r=n(348);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(90).default)("0174a4e3",r,!1,{})},function(e,t,n){e.exports={default:n(236),__esModule:!0}},function(e,t,n){n(126),n(128),e.exports=n(237)},function(e,t,n){var r=n(23),i=n(129);e.exports=n(19).getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return r(t.call(e))}},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(239),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(40))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,i,o,a,u,s=1,c={},l=!1,f=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){h(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){h(e.data)},r=function(e){o.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,i.removeChild(t),t=null},i.appendChild(t)}):r=function(e){setTimeout(h,0,e)}:(a="setImmediate$"+Math.random()+"$",u=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),r=function(t){e.postMessage(a+t,"*")}),p.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var i={callback:e,args:t};return c[s]=i,r(s),s++},p.clearImmediate=d}function d(e){delete c[e]}function h(e){if(l)setTimeout(h,0,e);else{var t=c[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{d(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(40),n(91))},function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"ApolloMutation",(function(){return z})),n.d(t,"ApolloProvider",(function(){return J})),n.d(t,"ApolloQuery",(function(){return W})),n.d(t,"ApolloSubscribeToMore",(function(){return H})),n.d(t,"install",(function(){return Y}));var r=n(39),i=n.n(r);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?v(e):t}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function T(e,t,n,r){var i,o=!1,a=0;function u(){i&&clearTimeout(i)}function s(){var s=this,c=Date.now()-a,l=arguments;function f(){a=Date.now(),n.apply(s,l)}function p(){i=void 0}o||(r&&!i&&f(),u(),void 0===r&&c>e?f():!0!==t&&(i=setTimeout(r?p:f,void 0===r?e-c:e)))}return"boolean"!=typeof t&&(r=n,n=t,t=void 0),s.cancel=function(){u(),o=!0},s}var _=Object.freeze({__proto__:null,throttle:T,debounce:function(e,t,n){return void 0===n?T(e,t,!1):T(e,n,!1!==t)}}),O=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var n=t.Globals={};function r(e){return function(t,n){return e(n,t)}}t.throttle=r(_.throttle),t.debounce=r(_.debounce),t.getMergedDefinition=function(e){return n.Vue.util.mergeOptions({},e)},t.reapply=function(e,t){for(;"function"==typeof e;)e=e.call(t);return e},t.omit=function(e,t){return Object.entries(e).filter((function(e){var n=g(e,1)[0];return!t.includes(n)})).reduce((function(e,t){var n=g(t,2),r=n[0],i=n[1];return e[r]=i,e}),{})},t.addGqlError=function(e){e.graphQLErrors&&e.graphQLErrors.length&&(e.gqlError=e.graphQLErrors[0])},t.noop=function(){}})),E=O.Globals,N=O.throttle,w=O.debounce,S=(O.getMergedDefinition,O.reapply),I=O.omit,j=O.addGqlError,k=(O.noop,function(){function e(t,n,r){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];a(this,e),c(this,"type",null),c(this,"vueApolloSpecialKeys",[]),this.vm=t,this.key=n,this.initialOptions=r,this.options=Object.assign({},r),this._skip=!1,this._pollInterval=null,this._watchers=[],this._destroyed=!1,this.lastApolloOptions=null,i&&this.autostart()}return s(e,[{key:"autostart",value:function(){var e=this;"function"==typeof this.options.skip?this._skipWatcher=this.vm.$watch((function(){return e.options.skip.call(e.vm,e.vm,e.key)}),this.skipChanged.bind(this),{immediate:!0,deep:this.options.deep}):this.options.skip?this._skip=!0:this.start(),"function"==typeof this.options.pollInterval&&(this._pollWatcher=this.vm.$watch(this.options.pollInterval.bind(this.vm),this.pollIntervalChanged.bind(this),{immediate:!0}))}},{key:"pollIntervalChanged",value:function(e,t){e!==t&&(this.pollInterval=e,null==e?this.stopPolling():this.startPolling(e))}},{key:"skipChanged",value:function(e,t){e!==t&&(this.skip=e)}},{key:"refresh",value:function(){this._skip||(this.stop(),this.start())}},{key:"start",value:function(){var e=this;this.starting=!0;for(var t=function(t,n){var r=n[t];if("function"==typeof e.initialOptions[r]){var i=e.initialOptions[r].bind(e.vm);e.options[r]=i();var o=function(t){e.options[r]=t,e.refresh()};e.vm.$isServer||(o=e.options.throttle?N(o,e.options.throttle):o,o=e.options.debounce?w(o,e.options.debounce):o),e._watchers.push(e.vm.$watch(i,o,{deep:e.options.deep}))}},n=0,r=["query","document","context"];n<r.length;n++)t(n,r);if("function"==typeof this.options.variables){var i=this.executeApollo.bind(this);this.vm.$isServer||(i=this.options.throttle?N(i,this.options.throttle):i,i=this.options.debounce?w(i,this.options.debounce):i),this._watchers.push(this.vm.$watch((function(){return e.options.variables.call(e.vm)}),i,{immediate:!0,deep:this.options.deep}))}else this.executeApollo(this.options.variables)}},{key:"stop",value:function(){for(var e=0,t=this._watchers;e<t.length;e++){(0,t[e])()}this.sub&&(this.sub.unsubscribe(),this.sub=null)}},{key:"generateApolloOptions",value:function(e){var t=I(this.options,this.vueApolloSpecialKeys);return t.variables=e,this.lastApolloOptions=t,t}},{key:"executeApollo",value:function(e){this.starting=!1}},{key:"nextResult",value:function(e){var t=e.error;t&&j(t)}},{key:"callHandlers",value:function(e){for(var t=!1,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(var o=0;o<e.length;o++){var a=e[o];if(a){t=!0;var u=a.apply(this.vm,r);if(void 0!==u&&!u)break}}return t}},{key:"errorHandler",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.callHandlers.apply(this,[[this.options.error,this.vm.$apollo.error,this.vm.$apollo.provider.errorHandler]].concat(t))}},{key:"catchError",value:function(e){if(j(e),!this.errorHandler(e,this.vm,this.key,this.type,this.lastApolloOptions))if(e.graphQLErrors&&0!==e.graphQLErrors.length){console.error("GraphQL execution errors for ".concat(this.type," '").concat(this.key,"'"));for(var t=0,n=e.graphQLErrors;t<n.length;t++){var r=n[t];console.error(r)}}else if(e.networkError)console.error("Error sending the ".concat(this.type," '").concat(this.key,"'"),e.networkError);else{var i;if(console.error("[vue-apollo] An error has occurred for ".concat(this.type," '").concat(this.key,"'")),Array.isArray(e))(i=console).error.apply(i,b(e));else console.error(e)}}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,this.stop(),this._skipWatcher&&this._skipWatcher())}},{key:"pollInterval",get:function(){return this._pollInterval},set:function(e){this._pollInterval=e}},{key:"skip",get:function(){return this._skip},set:function(e){e?this.stop():this.start(),this._skip=e}}]),e}()),L=["variables","watch","update","result","error","loadingKey","watchLoading","skip","throttle","debounce","subscribeToMore","prefetch","manual"],x=function(e){function t(e,n,r){var i,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return a(this,t),e.$data.$apolloData&&!e.$data.$apolloData.queries[n]&&e.$set(e.$data.$apolloData.queries,n,{loading:!1}),c(v(i=y(this,d(t).call(this,e,n,r,!1))),"type","query"),c(v(i),"vueApolloSpecialKeys",L),c(v(i),"_loading",!1),c(v(i),"_linkedSubscriptions",[]),e.$isServer&&(i.firstRun=new Promise((function(e,t){i._firstRunResolve=e,i._firstRunReject=t}))),i.vm.$isServer&&(i.options.fetchPolicy="network-only"),r.manual||(i.hasDataField=i.vm.$data.hasOwnProperty(n),i.hasDataField?Object.defineProperty(i.vm.$data.$apolloData.data,n,{get:function(){return i.vm.$data[n]},enumerable:!0,configurable:!0}):Object.defineProperty(i.vm.$data,n,{get:function(){return i.vm.$data.$apolloData.data[n]},enumerable:!0,configurable:!0})),o&&i.autostart(),i}return p(t,e),s(t,[{key:"stop",value:function(){m(d(t.prototype),"stop",this).call(this),this.loadingDone(),this.observer&&(this.observer.stopPolling(),this.observer=null)}},{key:"executeApollo",value:function(e){var n=JSON.stringify(e);if(this.sub){if(n===this.previousVariablesJson)return;this.sub.unsubscribe();for(var r=0,i=this._linkedSubscriptions;r<i.length;r++){i[r].stop()}}if(this.previousVariablesJson=n,this.observer=this.vm.$apollo.watchQuery(this.generateApolloOptions(e)),this.startQuerySubscription(),"no-cache"!==this.options.fetchPolicy||this.options.notifyOnNetworkStatusChange){var o=this.maySetLoading();o.loading&&!this.options.notifyOnNetworkStatusChange||this.nextResult(o)}m(d(t.prototype),"executeApollo",this).call(this,e);for(var a=0,u=this._linkedSubscriptions;a<u.length;a++){u[a].start()}}},{key:"startQuerySubscription",value:function(){this.sub&&!this.sub.closed||(this.sub=this.observer.subscribe({next:this.nextResult.bind(this),error:this.catchError.bind(this)}))}},{key:"maySetLoading",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.observer.currentResult();return(e||t.loading)&&(this.loading||this.applyLoadingModifier(1),this.loading=!0),t}},{key:"nextResult",value:function(e){m(d(t.prototype),"nextResult",this).call(this,e);var n=e.data,r=e.loading,i=e.error,o=e.errors;if((i||o)&&this.firstRunReject(),r||this.loadingDone(),o&&o.length){var a=new Error("GraphQL error: ".concat(o.map((function(e){return e.message})).join(" | ")));Object.assign(a,{graphQLErrors:o,networkError:null}),m(d(t.prototype),"catchError",this).call(this,a)}if("none"!==this.observer.options.errorPolicy||!i&&!o){var u="function"==typeof this.options.result;null==n||(this.options.manual?u||console.error("".concat(this.key," query must have a 'result' hook in manual mode")):"function"==typeof this.options.update?this.setData(this.options.update.call(this.vm,n)):void 0===n[this.key]&&Object.keys(n).length?console.error("Missing ".concat(this.key," attribute on result"),n):this.setData(n[this.key])),u&&this.options.result.call(this.vm,e,this.key)}}},{key:"setData",value:function(e){this.vm.$set(this.hasDataField?this.vm.$data:this.vm.$data.$apolloData.data,this.key,e)}},{key:"catchError",value:function(e){m(d(t.prototype),"catchError",this).call(this,e),this.firstRunReject(),this.loadingDone(e),this.nextResult(this.observer.currentResult()),this.resubscribeToQuery()}},{key:"resubscribeToQuery",value:function(){var e=this.observer.getLastError(),t=this.observer.getLastResult();this.observer.resetLastResults(),this.startQuerySubscription(),Object.assign(this.observer,{lastError:e,lastResult:t})}},{key:"watchLoading",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.callHandlers.apply(this,[[this.options.watchLoading,this.vm.$apollo.watchLoading,this.vm.$apollo.provider.watchLoading]].concat(t,[this]))}},{key:"applyLoadingModifier",value:function(e){var t=this.loadingKey;t&&"number"==typeof this.vm[t]&&(this.vm[t]+=e),this.watchLoading(1===e,e)}},{key:"loadingDone",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.loading&&this.applyLoadingModifier(-1),this.loading=!1,e||this.firstRunResolve()}},{key:"fetchMore",value:function(){var e,t=this;if(this.observer)return this.maySetLoading(!0),(e=this.observer).fetchMore.apply(e,arguments).then((function(e){return e.loading||t.loadingDone(),e}))}},{key:"subscribeToMore",value:function(){var e;if(this.observer)return{unsubscribe:(e=this.observer).subscribeToMore.apply(e,arguments)}}},{key:"refetch",value:function(e){var t=this;if(e&&(this.options.variables=e),this.observer){var n=this.observer.refetch(e).then((function(e){return e.loading||t.loadingDone(),e}));return this.maySetLoading(),n}}},{key:"setVariables",value:function(e,t){if(this.options.variables=e,this.observer){var n=this.observer.setVariables(e,t);return this.maySetLoading(),n}}},{key:"setOptions",value:function(e){if(Object.assign(this.options,e),this.observer){var t=this.observer.setOptions(e);return this.maySetLoading(),t}}},{key:"startPolling",value:function(){var e;if(this.observer)return(e=this.observer).startPolling.apply(e,arguments)}},{key:"stopPolling",value:function(){var e;if(this.observer)return(e=this.observer).stopPolling.apply(e,arguments)}},{key:"firstRunResolve",value:function(){this._firstRunResolve&&(this._firstRunResolve(),this._firstRunResolve=null)}},{key:"firstRunReject",value:function(e){this._firstRunReject&&(this._firstRunReject(e),this._firstRunReject=null)}},{key:"destroy",value:function(){m(d(t.prototype),"destroy",this).call(this),this.loading&&this.watchLoading(!1,-1),this.loading=!1}},{key:"client",get:function(){return this.vm.$apollo.getClient(this.options)}},{key:"loading",get:function(){return this.vm.$data.$apolloData&&this.vm.$data.$apolloData.queries[this.key]?this.vm.$data.$apolloData.queries[this.key].loading:this._loading},set:function(e){this._loading!==e&&(this._loading=e,this.vm.$data.$apolloData&&this.vm.$data.$apolloData.queries[this.key]&&(this.vm.$data.$apolloData.queries[this.key].loading=e,this.vm.$data.$apolloData.loading+=e?1:-1))}},{key:"loadingKey",get:function(){return this.options.loadingKey||this.vm.$apollo.loadingKey}}]),t}(k),A=function(e){function t(){var e,n;a(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return c(v(n=y(this,(e=d(t)).call.apply(e,[this].concat(i)))),"type","subscription"),c(v(n),"vueApolloSpecialKeys",["variables","result","error","throttle","debounce","linkedQuery"]),n}return p(t,e),s(t,[{key:"executeApollo",value:function(e){var n=JSON.stringify(e);if(this.sub){if(n===this.previousVariablesJson)return;this.sub.unsubscribe()}this.previousVariablesJson=n;var r=this.generateApolloOptions(e);if("function"==typeof r.updateQuery&&(r.updateQuery=r.updateQuery.bind(this.vm)),this.options.linkedQuery){if("function"==typeof this.options.result){var i=this.options.result.bind(this.vm),o=r.updateQuery&&r.updateQuery.bind(this.vm);r.updateQuery=function(){return i.apply(void 0,arguments),o&&o.apply(void 0,arguments)}}this.sub=this.options.linkedQuery.subscribeToMore(r)}else this.observer=this.vm.$apollo.subscribe(r),this.sub=this.observer.subscribe({next:this.nextResult.bind(this),error:this.catchError.bind(this)});m(d(t.prototype),"executeApollo",this).call(this,e)}},{key:"nextResult",value:function(e){m(d(t.prototype),"nextResult",this).call(this,e),"function"==typeof this.options.result&&this.options.result.call(this.vm,e,this.key)}}]),t}(k),D=function(){function e(t){a(this,e),this._apolloSubscriptions=[],this._watchers=[],this.vm=t,this.queries={},this.subscriptions={},this.client=void 0,this.loadingKey=void 0,this.error=void 0}return s(e,[{key:"getClient",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!e||!e.client){if("object"===o(this.client))return this.client;if(this.client){if(this.provider.clients){var t=this.provider.clients[this.client];if(!t)throw new Error("[vue-apollo] Missing client '".concat(this.client,"' in 'apolloProvider'"));return t}throw new Error("[vue-apollo] Missing 'clients' options in 'apolloProvider'")}return this.provider.defaultClient}var n=this.provider.clients[e.client];if(!n)throw new Error("[vue-apollo] Missing client '".concat(e.client,"' in 'apolloProvider'"));return n}},{key:"query",value:function(e){return this.getClient(e).query(e)}},{key:"watchQuery",value:function(e){var t=this,n=this.getClient(e).watchQuery(e),r=n.subscribe.bind(n);return n.subscribe=function(e){var n=r(e);return t._apolloSubscriptions.push(n),n},n}},{key:"mutate",value:function(e){return this.getClient(e).mutate(e)}},{key:"subscribe",value:function(e){var t=this;if(!this.vm.$isServer){var n=this.getClient(e).subscribe(e),r=n.subscribe.bind(n);return n.subscribe=function(e){var n=r(e);return t._apolloSubscriptions.push(n),n},n}}},{key:"addSmartQuery",value:function(e,t){var n=this,r=S(t,this.vm);r.query||(r={query:r});var i,o=this.vm.$options.apollo,a=this.provider.defaultOptions;if(a&&a.$query&&(i=a.$query),o&&o.$query&&(i=f({},i||{},{},o.$query)),i)for(var u in i)void 0===r[u]&&(r[u]=i[u]);var s=this.queries[e]=new x(this.vm,e,r,!1);if(this.vm.$isServer&&!1===r.prefetch||s.autostart(),!this.vm.$isServer){var c=r.subscribeToMore;c&&(Array.isArray(c)?c.forEach((function(t,r){n.addSmartSubscription("".concat(e).concat(r),f({},t,{linkedQuery:s}))})):this.addSmartSubscription(e,f({},c,{linkedQuery:s})))}return s}},{key:"addSmartSubscription",value:function(e,t){if(!this.vm.$isServer){t=S(t,this.vm);var n=this.subscriptions[e]=new A(this.vm,e,t,!1);return n.autostart(),t.linkedQuery&&t.linkedQuery._linkedSubscriptions.push(n),n}}},{key:"defineReactiveSetter",value:function(e,t,n){var r=this;this._watchers.push(this.vm.$watch(t,(function(t){r[e]=t}),{immediate:!0,deep:n}))}},{key:"destroy",value:function(){for(var e=0,t=this._watchers;e<t.length;e++){(0,t[e])()}for(var n in this.queries)this.queries[n].destroy();for(var r in this.subscriptions)this.subscriptions[r].destroy();this._apolloSubscriptions.forEach((function(e){e.unsubscribe()}))}},{key:"provider",get:function(){return this.vm.$apolloProvider}},{key:"loading",get:function(){return 0!==this.vm.$data.$apolloData.loading}},{key:"data",get:function(){return this.vm.$data.$apolloData.data}},{key:"skipAllQueries",set:function(e){for(var t in this.queries)this.queries[t].skip=e}},{key:"skipAllSubscriptions",set:function(e){for(var t in this.subscriptions)this.subscriptions[t].skip=e}},{key:"skipAll",set:function(e){this.skipAllQueries=e,this.skipAllSubscriptions=e}}]),e}(),P=function(){function e(t){if(a(this,e),!t)throw new Error("Options argument required");this.clients=t.clients||{},t.defaultClient&&(this.clients.defaultClient=this.defaultClient=t.defaultClient),this.defaultOptions=t.defaultOptions,this.watchLoading=t.watchLoading,this.errorHandler=t.errorHandler,this.prefetch=t.prefetch}return s(e,[{key:"provide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"$apolloProvider";return console.warn("<ApolloProvider>.provide() is deprecated. Use the 'apolloProvider' option instead with the provider object directly."),c({},e,this)}}]),e}();var R={name:"ApolloQuery",provide:function(){return{getDollarApollo:this.getDollarApollo,getApolloQuery:this.getApolloQuery}},props:{query:{type:[Function,Object],required:!0},variables:{type:Object,default:void 0},fetchPolicy:{type:String,default:void 0},pollInterval:{type:Number,default:void 0},notifyOnNetworkStatusChange:{type:Boolean,default:void 0},context:{type:Object,default:void 0},update:{type:Function,default:function(e){return e}},skip:{type:Boolean,default:!1},debounce:{type:Number,default:0},throttle:{type:Number,default:0},clientId:{type:String,default:void 0},deep:{type:Boolean,default:void 0},tag:{type:String,default:"div"},prefetch:{type:Boolean,default:!0},options:{type:Object,default:function(){return{}}}},data:function(){return{result:{data:null,loading:!1,networkStatus:7,error:null},times:0}},watch:{fetchPolicy:function(e){this.$apollo.queries.query.setOptions({fetchPolicy:e})},pollInterval:function(e){this.$apollo.queries.query.setOptions({pollInterval:e})},notifyOnNetworkStatusChange:function(e){this.$apollo.queries.query.setOptions({notifyOnNetworkStatusChange:e})},"$data.$apolloData.loading":function(e){this.$emit("loading",!!e)}},apollo:{$client:function(){return this.clientId},query:function(){return f({query:function(){return"function"==typeof this.query?this.query(i.a):this.query},variables:function(){return this.variables},fetchPolicy:this.fetchPolicy,pollInterval:this.pollInterval,debounce:this.debounce,throttle:this.throttle,notifyOnNetworkStatusChange:this.notifyOnNetworkStatusChange,context:function(){return this.context},skip:function(){return this.skip},deep:this.deep,prefetch:this.prefetch},this.options,{manual:!0,result:function(e){var t=e,n=t.errors,r=t.loading,i=t.networkStatus,o=e.error;e=Object.assign({},e),n&&n.length&&((o=new Error("Apollo errors occurred (".concat(n.length,")"))).graphQLErrors=n);var a={};r?Object.assign(a,this.$_previousData,e.data):o?Object.assign(a,this.$apollo.queries.query.observer.getLastResult()||{},e.data):(a=e.data,this.$_previousData=e.data);var u=function(e){return Object.keys(e).length>0}(a);this.result={data:u?this.update(a):void 0,fullData:u?a:void 0,loading:r,error:o,networkStatus:i},this.times=++this.$_times,this.$emit("result",this.result)},error:function(e){this.result.loading=!1,this.result.error=e,this.$emit("error",e)}})}},created:function(){this.$_times=0},methods:{getDollarApollo:function(){return this.$apollo},getApolloQuery:function(){return this.$apollo.queries.query}},render:function(e){var t=this.$scopedSlots.default({result:this.result,times:this.times,query:this.$apollo.queries.query,isLoading:this.$apolloData.loading,gqlError:this.result&&this.result.error&&this.result.error.gqlError});return t=Array.isArray(t)?t.concat(this.$slots.default):[t].concat(this.$slots.default),this.tag?e(this.tag,t):t[0]}},M=0,F={name:"ApolloSubscribeToMore",inject:["getDollarApollo","getApolloQuery"],props:{document:{type:[Function,Object],required:!0},variables:{type:Object,default:void 0},updateQuery:{type:Function,default:void 0}},watch:{document:"refresh",variables:"refresh"},created:function(){this.$_key="sub_component_".concat(M++)},mounted:function(){this.refresh()},beforeDestroy:function(){this.destroy()},methods:{destroy:function(){this.$_sub&&this.$_sub.destroy()},refresh:function(){this.destroy();var e=this.document;"function"==typeof e&&(e=e(i.a)),this.$_sub=this.getDollarApollo().addSmartSubscription(this.$_key,{document:e,variables:this.variables,updateQuery:this.updateQuery,linkedQuery:this.getApolloQuery()})}},render:function(e){return null}},C={props:{mutation:{type:[Function,Object],required:!0},variables:{type:Object,default:void 0},optimisticResponse:{type:Object,default:void 0},update:{type:Function,default:void 0},refetchQueries:{type:Function,default:void 0},clientId:{type:String,default:void 0},tag:{type:String,default:"div"}},data:function(){return{loading:!1,error:null}},watch:{loading:function(e){this.$emit("loading",e)}},methods:{mutate:function(e){var t=this;this.loading=!0,this.error=null;var n=this.mutation;"function"==typeof n&&(n=n(i.a)),this.$apollo.mutate(f({mutation:n,client:this.clientId,variables:this.variables,optimisticResponse:this.optimisticResponse,update:this.update,refetchQueries:this.refetchQueries},e)).then((function(e){t.$emit("done",e),t.loading=!1})).catch((function(e){j(e),t.error=e,t.$emit("error",e),t.loading=!1}))}},render:function(e){var t=this.$scopedSlots.default({mutate:this.mutate,loading:this.loading,error:this.error,gqlError:this.error&&this.error.gqlError});return t=Array.isArray(t)?t.concat(this.$slots.default):[t].concat(this.$slots.default),this.tag?e(this.tag,t):t[0]}};function Q(e,t){return void 0!==e&&Object.prototype.hasOwnProperty.call(e,t)}function V(){var e=this.$options,t=e.apolloProvider;if(t)this.$apolloProvider="function"==typeof t?t():t;else if(e.parent&&e.parent.$apolloProvider)this.$apolloProvider=e.parent.$apolloProvider;else if(e.provide){var n="function"==typeof e.provide?e.provide.call(this):e.provide;n&&n.$apolloProvider&&(this.$apolloProvider=n.$apolloProvider)}}function G(){var e=this;this.$_apolloInitData={};var t=this.$options.apollo;if(t){var n=function(n){"$"!==n.charAt(0)&&(t[n].manual||Q(e.$options.props,n)||Q(e.$options.computed,n)||Q(e.$options.methods,n)||Object.defineProperty(e,n,{get:function(){return e.$data.$apolloData.data[n]},set:function(t){return e.$_apolloInitData[n]=t},enumerable:!0,configurable:!0}))};for(var r in t)n(r)}}function K(){var e=this,t=this.$apolloProvider;if(!this._apolloLaunched&&t){this._apolloLaunched=!0;var n=this.$options.apollo;if(n){for(var r in this.$_apolloPromises=[],n.$init||(n.$init=!0,t.defaultOptions&&(n=this.$options.apollo=Object.assign({},t.defaultOptions,n))),$(this.$apollo,"skipAll",n.$skipAll,n.$deep),$(this.$apollo,"skipAllQueries",n.$skipAllQueries,n.$deep),$(this.$apollo,"skipAllSubscriptions",n.$skipAllSubscriptions,n.$deep),$(this.$apollo,"client",n.$client,n.$deep),$(this.$apollo,"loadingKey",n.$loadingKey,n.$deep),$(this.$apollo,"error",n.$error,n.$deep),$(this.$apollo,"watchLoading",n.$watchLoading,n.$deep),Object.defineProperty(this,"$apolloData",{get:function(){return e.$data.$apolloData},enumerable:!0,configurable:!0}),n)if("$"!==r.charAt(0)){var i=n[r],o=this.$apollo.addSmartQuery(r,i);this.$isServer&&(i=S(i,this),!1===t.prefetch||!1===i.prefetch||!1===n.$prefetch||o.skip||this.$_apolloPromises.push(o.firstRun))}if(n.subscribe&&E.Vue.util.warn("vue-apollo -> `subscribe` option is deprecated. Use the `$subscribe` option instead."),n.$subscribe)for(var a in n.$subscribe)this.$apollo.addSmartSubscription(a,n.$subscribe[a])}}}function $(e,t,n,r){void 0!==n&&("function"==typeof n?e.defineReactiveSetter(t,n,r):e[t]=n)}function q(){this.$_apollo&&this.$_apollo.destroy()}function U(e,t){e.mixin(f({},"1"===t?{init:V}:{},{},"2"===t?{data:function(){return{$apolloData:{queries:{},loading:0,data:this.$_apolloInitData}}},beforeCreate:function(){V.call(this),G.call(this)},serverPrefetch:function(){var e=this;if(this.$_apolloPromises)return Promise.all(this.$_apolloPromises).then((function(){q.call(e)})).catch((function(t){return q.call(e),Promise.reject(t)}))}}:{},{created:K,destroyed:q}))}var B=["$subscribe"];function Y(e,t){if(!Y.installed){Y.installed=!0,E.Vue=e;var n=e.version.substr(0,e.version.indexOf(".")),r=e.config.optionMergeStrategies.methods;e.config.optionMergeStrategies.apollo=function(e,t,n){if(!e)return t;if(!t)return e;for(var i=Object.assign({},I(e,B),e.data),o=Object.assign({},I(t,B),t.data),a={},u=0;u<B.length;u++){var s=B[u];a[s]=r(e[s],t[s])}return Object.assign(a,r(i,o))},Object.defineProperty(e.prototype,"$apollo",{get:function(){return this.$_apollo||(this.$_apollo=new D(this)),this.$_apollo}}),U(e,n),"2"===n&&(e.component("apollo-query",R),e.component("ApolloQuery",R),e.component("apollo-subscribe-to-more",F),e.component("ApolloSubscribeToMore",F),e.component("apollo-mutation",C),e.component("ApolloMutation",C))}}P.install=Y,P.version="3.0.3";var J=P,W=R,H=F,z=C,X=null;"undefined"!=typeof window?X=window.Vue:void 0!==e&&(X=e.Vue),X&&X.use(P),t.default=P}.call(this,n(40))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(242),o=n(245),a=n(318),u=n(252),s=(r=u)&&r.__esModule?r:{default:r};
/**
 * 2007-2020 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
/**
 * 2007-2020 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
t.default="\n  scalar JSON\n  scalar JSONObject\n\n  type List {\n    id_wishlist: Int\n    name: String\n    listUrl: String\n    shareUrl: String\n    default: Int\n    nbProducts: Int\n  }\n\n  type ShareUrl {\n    url: String\n  }\n\n  type CreateResponse {\n    datas: List\n    success: Boolean!\n    message: String!\n  }\n\n  type ProductListResponse {\n    datas: JSONObject\n  }\n\n  type Response {\n    success: Boolean!\n    message: String!\n  }\n\n  type Query {\n    products(listId: Int!, url: String!): ProductListResponse\n    lists(url: String!): [List]\n  }\n\n  type Mutation {\n    createList(name: String!, url: String!): CreateResponse\n    shareList(listId: String!, userId: Int!): ShareUrl\n    renameList(name: String!, url: String!, listId: Int!): Response\n    addToList(listId: Int!, productId: Int!, quantity: Int!, productAttributeId: Int!, url: String!): Response\n    removeFromList(listId: Int!, productId: Int!, productAttributeId: Int!, url: String!): Response\n    deleteList(listId: Int!, url: String!): Response\n  }\n"},function(e,t,n){e.exports={default:n(311),__esModule:!0}},function(e,t,n){n(312);var r=n(19).Object;e.exports=function(e,t){return r.defineProperties(e,t)}},function(e,t,n){var r=n(37);r(r.S+r.F*!n(36),"Object",{defineProperties:n(127)})},function(e,t,n){e.exports={default:n(314),__esModule:!0}},function(e,t,n){n(315),e.exports=n(19).Object.freeze},function(e,t,n){var r=n(31),i=n(316).onFreeze;n(317)("freeze",(function(e){return function(t){return e&&r(t)?e(i(t)):t}}))},function(e,t,n){var r=n(86)("meta"),i=n(31),o=n(51),a=n(50).f,u=0,s=Object.isExtensible||function(){return!0},c=!n(65)((function(){return s(Object.preventExtensions({}))})),l=function(e){a(e,r,{value:{i:"O"+ ++u,w:{}}})},f=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,r)){if(!s(e))return"F";if(!t)return"E";l(e)}return e[r].i},getWeak:function(e,t){if(!o(e,r)){if(!s(e))return!0;if(!t)return!1;l(e)}return e[r].w},onFreeze:function(e){return c&&f.NEED&&s(e)&&!o(e,r)&&l(e),e}}},function(e,t,n){var r=n(37),i=n(19),o=n(65);e.exports=function(e,t){var n=(i.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*o((function(){n(1)})),"Object",a)}},function(e,t,n){"use strict";n.r(t),n.d(t,"HeuristicFragmentMatcher",(function(){return $})),n.d(t,"InMemoryCache",(function(){return ce})),n.d(t,"IntrospectionFragmentMatcher",(function(){return q})),n.d(t,"ObjectCache",(function(){return X})),n.d(t,"StoreReader",(function(){return J})),n.d(t,"StoreWriter",(function(){return ne})),n.d(t,"WriteError",(function(){return ee})),n.d(t,"assertIdValue",(function(){return z})),n.d(t,"defaultDataIdFromObject",(function(){return ae})),n.d(t,"defaultNormalizedCacheFactory",(function(){return Z})),n.d(t,"enhanceErrorWithDocument",(function(){return te}));var r=n(0),i=n(1);function o(e){return{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GeneratedClientQuery"},selectionSet:a(e)}]}}function a(e){if("number"==typeof e||"boolean"==typeof e||"string"==typeof e||null==e)return null;if(Array.isArray(e))return a(e[0]);var t=[];return Object.keys(e).forEach((function(n){var r={kind:"Field",name:{kind:"Name",value:n},selectionSet:a(e[n])||void 0};t.push(r)})),{kind:"SelectionSet",selections:t}}var u,s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:null,variableDefinitions:null,directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:null,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:null}]}}]},c=function(){function e(){}return e.prototype.transformDocument=function(e){return e},e.prototype.transformForLink=function(e){return e},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!1),this.read({query:e.query,variables:e.variables,optimistic:t})},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!1),this.read({query:Object(i.k)(e.fragment,e.fragmentName),variables:e.variables,rootId:e.id,optimistic:t})},e.prototype.writeQuery=function(e){this.write({dataId:"ROOT_QUERY",result:e.data,query:e.query,variables:e.variables})},e.prototype.writeFragment=function(e){this.write({dataId:e.id,result:e.data,variables:e.variables,query:Object(i.k)(e.fragment,e.fragmentName)})},e.prototype.writeData=function(e){var t,n,r=e.id,i=e.data;if(void 0!==r){var u=null;try{u=this.read({rootId:r,optimistic:!1,query:s})}catch(e){}var c=u&&u.__typename||"__ClientData",l=Object.assign({__typename:c},i);this.writeFragment({id:r,fragment:(t=l,n=c,{kind:"Document",definitions:[{kind:"FragmentDefinition",typeCondition:{kind:"NamedType",name:{kind:"Name",value:n||"__FakeType"}},name:{kind:"Name",value:"GeneratedClientQuery"},selectionSet:a(t)}]}),data:l})}else this.writeQuery({query:o(i),data:i})},e}();u||(u={});var l=n(29),f=null,p={},d=1,h=Array,v=h["@wry/context:Slot"]||function(){var e=function(){function e(){this.id=["slot",d++,Date.now(),Math.random().toString(36).slice(2)].join(":")}return e.prototype.hasValue=function(){for(var e=f;e;e=e.parent)if(this.id in e.slots){var t=e.slots[this.id];if(t===p)break;return e!==f&&(f.slots[this.id]=t),!0}return f&&(f.slots[this.id]=p),!1},e.prototype.getValue=function(){if(this.hasValue())return f.slots[this.id]},e.prototype.withValue=function(e,t,n,r){var i,o=((i={__proto__:null})[this.id]=e,i),a=f;f={parent:a,slots:o};try{return t.apply(r,n)}finally{f=a}},e.bind=function(e){var t=f;return function(){var n=f;try{return f=t,e.apply(this,arguments)}finally{f=n}}},e.noContext=function(e,t,n){if(!f)return e.apply(n,t);var r=f;try{return f=null,e.apply(n,t)}finally{f=r}},e}();try{Object.defineProperty(h,"@wry/context:Slot",{value:h["@wry/context:Slot"]=e,enumerable:!1,writable:!1,configurable:!1})}finally{return e}}();v.bind,v.noContext;function y(){}var m=function(){function e(e,t){void 0===e&&(e=1/0),void 0===t&&(t=y),this.max=e,this.dispose=t,this.map=new Map,this.newest=null,this.oldest=null}return e.prototype.has=function(e){return this.map.has(e)},e.prototype.get=function(e){var t=this.getEntry(e);return t&&t.value},e.prototype.getEntry=function(e){var t=this.map.get(e);if(t&&t!==this.newest){var n=t.older,r=t.newer;r&&(r.older=n),n&&(n.newer=r),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=r)}return t},e.prototype.set=function(e,t){var n=this.getEntry(e);return n?n.value=t:(n={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=n),this.newest=n,this.oldest=this.oldest||n,this.map.set(e,n),n.value)},e.prototype.clean=function(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)},e.prototype.delete=function(e){var t=this.map.get(e);return!!t&&(t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.map.delete(e),this.dispose(t.value,e),!0)},e}(),g=new v,b=[],T=[];function _(e,t){if(!e)throw new Error(t||"assertion failure")}function O(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}var E=function(){function e(t,n){this.fn=t,this.args=n,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],++e.count}return e.prototype.recompute=function(){if(_(!this.recomputing,"already recomputing"),function(e){var t=g.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),w(e)?j(t,e):k(t,e),t}(this)||!x(this))return w(this)?function(e){var t=A(e);g.withValue(e,N,[e]),function(e){if("function"==typeof e.subscribe)try{P(e),e.unsubscribe=e.subscribe.apply(null,e.args)}catch(t){return e.setDirty(),!1}return!0}(e)&&function(e){if(e.dirty=!1,w(e))return;I(e)}(e);return t.forEach(x),O(e.value)}(this):O(this.value)},e.prototype.setDirty=function(){this.dirty||(this.dirty=!0,this.value.length=0,S(this),P(this))},e.prototype.dispose=function(){var e=this;A(this).forEach(x),P(this),this.parents.forEach((function(t){t.setDirty(),D(t,e)}))},e.count=0,e}();function N(e){e.recomputing=!0,e.value.length=0;try{e.value[0]=e.fn.apply(null,e.args)}catch(t){e.value[1]=t}e.recomputing=!1}function w(e){return e.dirty||!(!e.dirtyChildren||!e.dirtyChildren.size)}function S(e){e.parents.forEach((function(t){return j(t,e)}))}function I(e){e.parents.forEach((function(t){return k(t,e)}))}function j(e,t){if(_(e.childValues.has(t)),_(w(t)),e.dirtyChildren){if(e.dirtyChildren.has(t))return}else e.dirtyChildren=T.pop()||new Set;e.dirtyChildren.add(t),S(e)}function k(e,t){_(e.childValues.has(t)),_(!w(t));var n,r,i,o=e.childValues.get(t);0===o.length?e.childValues.set(t,t.value.slice(0)):(n=o,r=t.value,(i=n.length)>0&&i===r.length&&n[i-1]===r[i-1]||e.setDirty()),L(e,t),w(e)||I(e)}function L(e,t){var n=e.dirtyChildren;n&&(n.delete(t),0===n.size&&(T.length<100&&T.push(n),e.dirtyChildren=null))}function x(e){return 0===e.parents.size&&"function"==typeof e.reportOrphan&&!0===e.reportOrphan()}function A(e){var t=b;return e.childValues.size>0&&(t=[],e.childValues.forEach((function(n,r){D(e,r),t.push(r)}))),_(null===e.dirtyChildren),t}function D(e,t){t.parents.delete(e),e.childValues.delete(t),L(e,t)}function P(e){var t=e.unsubscribe;"function"==typeof t&&(e.unsubscribe=void 0,t())}var R=function(){function e(e){this.weakness=e}return e.prototype.lookup=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.lookupArray(e)},e.prototype.lookupArray=function(e){var t=this;return e.forEach((function(e){return t=t.getChildTrie(e)})),t.data||(t.data=Object.create(null))},e.prototype.getChildTrie=function(t){var n=this.weakness&&function(e){switch(typeof e){case"object":if(null===e)break;case"function":return!0}return!1}(t)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map),r=n.get(t);return r||n.set(t,r=new e(this.weakness)),r},e}();var M=new R("function"==typeof WeakMap);function F(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return M.lookupArray(e)}var C=new Set;function Q(e,t){void 0===t&&(t=Object.create(null));var n=new m(t.max||Math.pow(2,16),(function(e){return e.dispose()})),r=!!t.disposable,i=t.makeCacheKey||F;function o(){if(!r||g.hasValue()){var o=i.apply(null,arguments);if(void 0===o)return e.apply(null,arguments);var a=Array.prototype.slice.call(arguments),u=n.get(o);u?u.args=a:(u=new E(e,a),n.set(o,u),u.subscribe=t.subscribe,r&&(u.reportOrphan=function(){return n.delete(o)}));var s=u.recompute();return n.set(o,u),C.add(n),g.hasValue()||(C.forEach((function(e){return e.clean()})),C.clear()),r?void 0:s}}return o.dirty=function(){var e=i.apply(null,arguments),t=void 0!==e&&n.get(e);t&&t.setDirty()},o}var V=n(3),G=!1;function K(){var e=!G;return Object(i.y)()||(G=!0),e}var $=function(){function e(){}return e.prototype.ensureReady=function(){return Promise.resolve()},e.prototype.canBypassInit=function(){return!0},e.prototype.match=function(e,t,n){var r=n.store.get(e.id),i="ROOT_QUERY"===e.id;if(!r)return i;var o=r.__typename,a=void 0===o?i&&"Query":o;return a&&a===t||(K(),"heuristic")},e}(),q=function(){function e(e){e&&e.introspectionQueryResultData?(this.possibleTypesMap=this.parseIntrospectionResult(e.introspectionQueryResultData),this.isReady=!0):this.isReady=!1,this.match=this.match.bind(this)}return e.prototype.match=function(e,t,n){Object(V.b)(this.isReady,2);var r=n.store.get(e.id),i="ROOT_QUERY"===e.id;if(!r)return i;var o=r.__typename,a=void 0===o?i&&"Query":o;if(Object(V.b)(a,3),a===t)return!0;var u=this.possibleTypesMap[t];return!!(a&&u&&u.indexOf(a)>-1)},e.prototype.parseIntrospectionResult=function(e){var t={};return e.__schema.types.forEach((function(e){"UNION"!==e.kind&&"INTERFACE"!==e.kind||(t[e.name]=e.possibleTypes.map((function(e){return e.name})))})),t},e}(),U=Object.prototype.hasOwnProperty,B=function(){function e(e){var t=this;void 0===e&&(e=Object.create(null)),this.data=e,this.depend=Q((function(e){return t.data[e]}),{disposable:!0,makeCacheKey:function(e){return e}})}return e.prototype.toObject=function(){return this.data},e.prototype.get=function(e){return this.depend(e),this.data[e]},e.prototype.set=function(e,t){t!==this.data[e]&&(this.data[e]=t,this.depend.dirty(e))},e.prototype.delete=function(e){U.call(this.data,e)&&(delete this.data[e],this.depend.dirty(e))},e.prototype.clear=function(){this.replace(null)},e.prototype.replace=function(e){var t=this;e?(Object.keys(e).forEach((function(n){t.set(n,e[n])})),Object.keys(this.data).forEach((function(n){U.call(e,n)||t.delete(n)}))):Object.keys(this.data).forEach((function(e){t.delete(e)}))},e}();function Y(e){return new B(e)}var J=function(){function e(e){var t=this,n=void 0===e?{}:e,r=n.cacheKeyRoot,o=void 0===r?new R(i.e):r,a=n.freezeResults,u=void 0!==a&&a,s=this.executeStoreQuery,c=this.executeSelectionSet,l=this.executeSubSelectedArray;this.freezeResults=u,this.executeStoreQuery=Q((function(e){return s.call(t,e)}),{makeCacheKey:function(e){var t=e.query,n=e.rootValue,r=e.contextValue,i=e.variableValues,a=e.fragmentMatcher;if(r.store instanceof B)return o.lookup(r.store,t,a,JSON.stringify(i),n.id)}}),this.executeSelectionSet=Q((function(e){return c.call(t,e)}),{makeCacheKey:function(e){var t=e.selectionSet,n=e.rootValue,r=e.execContext;if(r.contextValue.store instanceof B)return o.lookup(r.contextValue.store,t,r.fragmentMatcher,JSON.stringify(r.variableValues),n.id)}}),this.executeSubSelectedArray=Q((function(e){return l.call(t,e)}),{makeCacheKey:function(e){var t=e.field,n=e.array,r=e.execContext;if(r.contextValue.store instanceof B)return o.lookup(r.contextValue.store,t,n,JSON.stringify(r.variableValues))}})}return e.prototype.readQueryFromStore=function(e){return this.diffQueryAgainstStore(Object(r.a)(Object(r.a)({},e),{returnPartialData:!1})).result},e.prototype.diffQueryAgainstStore=function(e){var t=e.store,n=e.query,r=e.variables,o=e.previousResult,a=e.returnPartialData,u=void 0===a||a,s=e.rootId,c=void 0===s?"ROOT_QUERY":s,f=e.fragmentMatcherFunction,p=e.config,d=Object(i.o)(n);r=Object(i.c)({},Object(i.h)(d),r);var h={store:t,dataIdFromObject:p&&p.dataIdFromObject,cacheRedirects:p&&p.cacheRedirects||{}},v=this.executeStoreQuery({query:n,rootValue:{type:"id",id:c,generated:!0,typename:"Query"},contextValue:h,variableValues:r,fragmentMatcher:f}),y=v.missing&&v.missing.length>0;return y&&!u&&v.missing.forEach((function(e){if(!e.tolerable)throw new V.a(8)})),o&&Object(l.a)(o,v.result)&&(v.result=o),{result:v.result,complete:!y}},e.prototype.executeStoreQuery=function(e){var t=e.query,n=e.rootValue,r=e.contextValue,o=e.variableValues,a=e.fragmentMatcher,u=void 0===a?H:a,s=Object(i.l)(t),c=Object(i.j)(t),l={query:t,fragmentMap:Object(i.g)(c),contextValue:r,variableValues:o,fragmentMatcher:u};return this.executeSelectionSet({selectionSet:s.selectionSet,rootValue:n,execContext:l})},e.prototype.executeSelectionSet=function(e){var t=this,n=e.selectionSet,o=e.rootValue,a=e.execContext,u=a.fragmentMap,s=a.contextValue,c=a.variableValues,l={result:null},f=[],p=s.store.get(o.id),d=p&&p.__typename||"ROOT_QUERY"===o.id&&"Query"||void 0;function h(e){var t;return e.missing&&(l.missing=l.missing||[],(t=l.missing).push.apply(t,e.missing)),e.result}return n.selections.forEach((function(e){var n;if(Object(i.F)(e,c))if(Object(i.t)(e)){var l=h(t.executeField(p,d,e,a));void 0!==l&&f.push(((n={})[Object(i.E)(e)]=l,n))}else{var v=void 0;if(Object(i.v)(e))v=e;else if(!(v=u[e.name.value]))throw new V.a(9);var y=v.typeCondition&&v.typeCondition.name.value,m=!y||a.fragmentMatcher(o,y,s);if(m){var g=t.executeSelectionSet({selectionSet:v.selectionSet,rootValue:o,execContext:a});"heuristic"===m&&g.missing&&(g=Object(r.a)(Object(r.a)({},g),{missing:g.missing.map((function(e){return Object(r.a)(Object(r.a)({},e),{tolerable:!0})}))})),f.push(h(g))}}})),l.result=Object(i.B)(f),this.freezeResults,l},e.prototype.executeField=function(e,t,n,r){var o=r.variableValues,a=r.contextValue,u=function(e,t,n,r,o,a){a.resultKey;var u=a.directives,s=n;(r||u)&&(s=Object(i.p)(s,r,u));var c=void 0;if(e&&void 0===(c=e[s])&&o.cacheRedirects&&"string"==typeof t){var l=o.cacheRedirects[t];if(l){var f=l[n];f&&(c=f(e,r,{getCacheKey:function(e){var t=o.dataIdFromObject(e);return t&&Object(i.H)({id:t,typename:e.__typename})}}))}}if(void 0===c)return{result:c,missing:[{object:e,fieldName:s,tolerable:!1}]};Object(i.w)(c)&&(c=c.json);return{result:c}}(e,t,n.name.value,Object(i.b)(n,o),a,{resultKey:Object(i.E)(n),directives:Object(i.i)(n,o)});return Array.isArray(u.result)?this.combineExecResults(u,this.executeSubSelectedArray({field:n,array:u.result,execContext:r})):n.selectionSet?null==u.result?u:this.combineExecResults(u,this.executeSelectionSet({selectionSet:n.selectionSet,rootValue:u.result,execContext:r})):(W(n,u.result),this.freezeResults,u)},e.prototype.combineExecResults=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.forEach((function(t){t.missing&&(e=e||[]).push.apply(e,t.missing)})),{result:t.pop().result,missing:e}},e.prototype.executeSubSelectedArray=function(e){var t,n=this,r=e.field,i=e.array,o=e.execContext;function a(e){return e.missing&&(t=t||[]).push.apply(t,e.missing),e.result}return i=i.map((function(e){return null===e?null:Array.isArray(e)?a(n.executeSubSelectedArray({field:r,array:e,execContext:o})):r.selectionSet?a(n.executeSelectionSet({selectionSet:r.selectionSet,rootValue:e,execContext:o})):(W(r,e),e)})),this.freezeResults,{result:i,missing:t}},e}();function W(e,t){if(!e.selectionSet&&Object(i.u)(t))throw new V.a(10)}function H(){return!0}function z(e){Object(V.b)(Object(i.u)(e),11)}var X=function(){function e(e){void 0===e&&(e=Object.create(null)),this.data=e}return e.prototype.toObject=function(){return this.data},e.prototype.get=function(e){return this.data[e]},e.prototype.set=function(e,t){this.data[e]=t},e.prototype.delete=function(e){this.data[e]=void 0},e.prototype.clear=function(){this.data=Object.create(null)},e.prototype.replace=function(e){this.data=e||Object.create(null)},e}();function Z(e){return new X(e)}var ee=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="WriteError",t}return Object(r.c)(t,e),t}(Error);function te(e,t){var n=new ee("Error writing result to store for query:\n "+JSON.stringify(t));return n.message+="\n"+e.message,n.stack=e.stack,n}var ne=function(){function e(){}return e.prototype.writeQueryToStore=function(e){var t=e.query,n=e.result,r=e.store,i=void 0===r?Y():r,o=e.variables,a=e.dataIdFromObject,u=e.fragmentMatcherFunction;return this.writeResultToStore({dataId:"ROOT_QUERY",result:n,document:t,store:i,variables:o,dataIdFromObject:a,fragmentMatcherFunction:u})},e.prototype.writeResultToStore=function(e){var t=e.dataId,n=e.result,r=e.document,o=e.store,a=void 0===o?Y():o,u=e.variables,s=e.dataIdFromObject,c=e.fragmentMatcherFunction,l=Object(i.m)(r);try{return this.writeSelectionSetToStore({result:n,dataId:t,selectionSet:l.selectionSet,context:{store:a,processedData:{},variables:Object(i.c)({},Object(i.h)(l),u),dataIdFromObject:s,fragmentMap:Object(i.g)(Object(i.j)(r)),fragmentMatcherFunction:c}})}catch(e){throw te(e,r)}},e.prototype.writeSelectionSetToStore=function(e){var t=this,n=e.result,r=e.dataId,o=e.selectionSet,a=e.context,u=a.variables,s=a.store,c=a.fragmentMap;return o.selections.forEach((function(e){var o;if(Object(i.F)(e,u))if(Object(i.t)(e)){var s=Object(i.E)(e),l=n[s];if(void 0!==l)t.writeFieldToStore({dataId:r,value:l,field:e,context:a});else{var f=!1,p=!1;e.directives&&e.directives.length&&(f=e.directives.some((function(e){return e.name&&"defer"===e.name.value})),p=e.directives.some((function(e){return e.name&&"client"===e.name.value}))),!f&&!p&&a.fragmentMatcherFunction}}else{var d=void 0;Object(i.v)(e)?d=e:(d=(c||{})[e.name.value],Object(V.b)(d,4));var h=!0;if(a.fragmentMatcherFunction&&d.typeCondition){var v=r||"self",y=Object(i.H)({id:v,typename:void 0}),m={store:new X((o={},o[v]=n,o)),cacheRedirects:{}},g=a.fragmentMatcherFunction(y,d.typeCondition.name.value,m);Object(i.x)(),h=!!g}h&&t.writeSelectionSetToStore({result:n,selectionSet:d.selectionSet,dataId:r,context:a})}})),s},e.prototype.writeFieldToStore=function(e){var t,n,o,a=e.field,u=e.value,s=e.dataId,c=e.context,f=c.variables,p=c.dataIdFromObject,d=c.store,h=Object(i.G)(a,f);if(a.selectionSet&&null!==u)if(Array.isArray(u)){var v=s+"."+h;n=this.processArrayValue(u,v,a.selectionSet,c)}else{var y=s+"."+h,m=!0;if(re(y)||(y="$"+y),p){var g=p(u);Object(V.b)(!g||!re(g),5),(g||"number"==typeof g&&0===g)&&(y=g,m=!1)}ie(y,a,c.processedData)||this.writeSelectionSetToStore({dataId:y,result:u,selectionSet:a.selectionSet,context:c});var b=u.__typename;n=Object(i.H)({id:y,typename:b},m);var T=(o=d.get(s))&&o[h];if(T!==n&&Object(i.u)(T)){var _=void 0!==T.typename,O=void 0!==b,E=_&&O&&T.typename!==b;Object(V.b)(!m||T.generated||E,6),Object(V.b)(!_||O,7),T.generated&&(E?m||d.delete(T.id):function e(t,n,o){if(t===n)return!1;var a=o.get(t),u=o.get(n),s=!1;Object.keys(a).forEach((function(t){var n=a[t],r=u[t];Object(i.u)(n)&&re(n.id)&&Object(i.u)(r)&&!Object(l.a)(n,r)&&e(n.id,r.id,o)&&(s=!0)})),o.delete(t);var c=Object(r.a)(Object(r.a)({},a),u);if(Object(l.a)(c,u))return s;return o.set(n,c),!0}(T.id,n.id,d))}}else n=null!=u&&"object"==typeof u?{type:"json",json:u}:u;(o=d.get(s))&&Object(l.a)(n,o[h])||d.set(s,Object(r.a)(Object(r.a)({},o),((t={})[h]=n,t)))},e.prototype.processArrayValue=function(e,t,n,r){var o=this;return e.map((function(e,a){if(null===e)return null;var u=t+"."+a;if(Array.isArray(e))return o.processArrayValue(e,u,n,r);var s=!0;if(r.dataIdFromObject){var c=r.dataIdFromObject(e);c&&(u=c,s=!1)}return ie(u,n,r.processedData)||o.writeSelectionSetToStore({dataId:u,result:e,selectionSet:n,context:r}),Object(i.H)({id:u,typename:e.__typename},s)}))},e}();function re(e){return"$"===e[0]}function ie(e,t,n){if(!n)return!1;if(n[e]){if(n[e].indexOf(t)>=0)return!0;n[e].push(t)}else n[e]=[t];return!1}var oe={fragmentMatcher:new $,dataIdFromObject:ae,addTypename:!0,resultCaching:!0,freezeResults:!1};function ae(e){if(e.__typename){if(void 0!==e.id)return e.__typename+":"+e.id;if(void 0!==e._id)return e.__typename+":"+e._id}return null}var ue=Object.prototype.hasOwnProperty,se=function(e){function t(t,n,r){var i=e.call(this,Object.create(null))||this;return i.optimisticId=t,i.parent=n,i.transaction=r,i}return Object(r.c)(t,e),t.prototype.toObject=function(){return Object(r.a)(Object(r.a)({},this.parent.toObject()),this.data)},t.prototype.get=function(e){return ue.call(this.data,e)?this.data[e]:this.parent.get(e)},t}(X),ce=function(e){function t(t){void 0===t&&(t={});var n=e.call(this)||this;n.watches=new Set,n.typenameDocumentCache=new Map,n.cacheKeyRoot=new R(i.e),n.silenceBroadcast=!1,n.config=Object(r.a)(Object(r.a)({},oe),t),n.config.customResolvers&&(n.config.cacheRedirects=n.config.customResolvers),n.config.cacheResolvers&&(n.config.cacheRedirects=n.config.cacheResolvers),n.addTypename=!!n.config.addTypename,n.data=n.config.resultCaching?new B:new X,n.optimisticData=n.data,n.storeWriter=new ne,n.storeReader=new J({cacheKeyRoot:n.cacheKeyRoot,freezeResults:t.freezeResults});var o=n,a=o.maybeBroadcastWatch;return n.maybeBroadcastWatch=Q((function(e){return a.call(n,e)}),{makeCacheKey:function(e){if(!e.optimistic&&!e.previousResult)return o.data instanceof B?o.cacheKeyRoot.lookup(e.query,JSON.stringify(e.variables)):void 0}}),n}return Object(r.c)(t,e),t.prototype.restore=function(e){return e&&this.data.replace(e),this},t.prototype.extract=function(e){return void 0===e&&(e=!1),(e?this.optimisticData:this.data).toObject()},t.prototype.read=function(e){if("string"==typeof e.rootId&&void 0===this.data.get(e.rootId))return null;var t=this.config.fragmentMatcher,n=t&&t.match;return this.storeReader.readQueryFromStore({store:e.optimistic?this.optimisticData:this.data,query:this.transformDocument(e.query),variables:e.variables,rootId:e.rootId,fragmentMatcherFunction:n,previousResult:e.previousResult,config:this.config})||null},t.prototype.write=function(e){var t=this.config.fragmentMatcher,n=t&&t.match;this.storeWriter.writeResultToStore({dataId:e.dataId,result:e.result,variables:e.variables,document:this.transformDocument(e.query),store:this.data,dataIdFromObject:this.config.dataIdFromObject,fragmentMatcherFunction:n}),this.broadcastWatches()},t.prototype.diff=function(e){var t=this.config.fragmentMatcher,n=t&&t.match;return this.storeReader.diffQueryAgainstStore({store:e.optimistic?this.optimisticData:this.data,query:this.transformDocument(e.query),variables:e.variables,returnPartialData:e.returnPartialData,previousResult:e.previousResult,fragmentMatcherFunction:n,config:this.config})},t.prototype.watch=function(e){var t=this;return this.watches.add(e),function(){t.watches.delete(e)}},t.prototype.evict=function(e){throw new V.a(1)},t.prototype.reset=function(){return this.data.clear(),this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(e){for(var t=[],n=0,r=this.optimisticData;r instanceof se;)r.optimisticId===e?++n:t.push(r),r=r.parent;if(n>0){for(this.optimisticData=r;t.length>0;){var i=t.pop();this.performTransaction(i.transaction,i.optimisticId)}this.broadcastWatches()}},t.prototype.performTransaction=function(e,t){var n=this.data,r=this.silenceBroadcast;this.silenceBroadcast=!0,"string"==typeof t&&(this.data=this.optimisticData=new se(t,this.optimisticData,e));try{e(this)}finally{this.silenceBroadcast=r,this.data=n}this.broadcastWatches()},t.prototype.recordOptimisticTransaction=function(e,t){return this.performTransaction(e,t)},t.prototype.transformDocument=function(e){if(this.addTypename){var t=this.typenameDocumentCache.get(e);return t||(t=Object(i.a)(e),this.typenameDocumentCache.set(e,t),this.typenameDocumentCache.set(t,t)),t}return e},t.prototype.broadcastWatches=function(){var e=this;this.silenceBroadcast||this.watches.forEach((function(t){return e.maybeBroadcastWatch(t)}))},t.prototype.maybeBroadcastWatch=function(e){e.callback(this.diff({query:e.query,variables:e.variables,previousResult:e.previousResult&&e.previousResult(),optimistic:e.optimistic}))},t}(c)},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wishlist-toast",class:[{isActive:this.active},this.type]},[t("p",{staticClass:"wishlist-toast-text"},[this._v("\n    "+this._s(this.text)+"\n  ")])])},i=[];r._withStripped=!0},function(e,t,n){"use strict";n.r(t);var r=n(321),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=i.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=c(n(87)),o=c(n(88)),a=c(n(335)),u=c(n(192)),s=c(n(66));function c(e){return e&&e.__esModule?e:{default:e}}t.default={name:"Button",props:{url:{type:String,required:!0,default:"#"},productId:{type:Number,required:!0,default:null},productAttributeId:{type:Number,required:!0,default:null},checked:{type:Boolean,required:!1,default:!1},isProduct:{type:Boolean,required:!1,default:!1}},data:function(){return{isChecked:"true"===this.checked,idList:this.listId}},methods:{toggleCheck:function(){this.isChecked=!this.isChecked},addToWishlist:(r=(0,o.default)(i.default.mark((function e(t){var n,r,o,c;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=document.querySelector(".product-quantity input#quantity_wanted"),u.default.customer.is_logged){e.next=5;break}return s.default.$emit("showLogin"),e.abrupt("return");case 5:if(this.isChecked){e.next=9;break}s.default.$emit("showAddToWishList",{detail:{productId:this.productId,productAttributeId:parseInt(this.productAttributeId,10),forceOpen:!0,quantity:n?parseInt(n.value,10):0}}),e.next=16;break;case 9:return e.next=11,this.$apollo.mutate({mutation:a.default,variables:{productId:this.productId,url:this.url,productAttributeId:this.productAttributeId,listId:this.idList?this.idList:this.listId}});case 11:r=e.sent,o=r.data,c=o.removeFromList,s.default.$emit("showToast",{detail:{type:c.success?"success":"error",message:c.message}}),c.error||this.toggleCheck();case 16:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},mounted:function(){var e=this;s.default.$on("addedToWishlist",(function(t){t.detail.productId===e.productId&&(e.isChecked=!0,e.idList=t.detail.listId)}));var t=productsAlreadyTagged.filter((function(t){return t.id_product===e.productId.toString()&&t.id_product_attribute===e.productAttributeId.toString()}));t.length>0&&(this.isChecked=!0,this.idList=parseInt(t[0].id_wishlist,10)),this.isProduct&&(u.default.on("updateProduct",(function(t){"updatedProductQuantity"===t.eventType&&(e.isChecked=!1)})),u.default.on("updatedProduct",(function(n){var r=document.querySelector(".product-quantity input#quantity_wanted");e.productAttributeId=n.id_product_attribute,productsAlreadyTagged.filter((function(t){return t.id_product===e.productId.toString()&&t.quantity===r.value&&t.id_product_attribute===e.productAttributeId.toString()})).length>0?(e.isChecked=!0,e.idList=parseInt(t[0].id_wishlist,10)):e.isChecked=!1})))}}},function(e,t,n){var r=n(373);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(90).default)("0e4dc420",r,!1,{})},,,,function(e,t,n){"use strict";n.r(t);var r=n(327),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=i.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(66)),i=o(n(381));function o(e){return e&&e.__esModule?e:{default:e}}t.default={name:"AddToWishlist",components:{ChooseList:i.default},props:{url:{type:String,required:!0,default:"#"}},data:function(){return{value:"",isHidden:!0,productAttributeId:0,productId:0,quantity:0}},methods:{toggleModal:function(e){this.isHidden=!0!==e&&!this.isHidden},openNewWishlistModal:function(){this.toggleModal(),r.default.$emit("showCreateWishlist")}},mounted:function(){var e=this;r.default.$on("showAddToWishList",(function(t){e.toggleModal(t.detail.forceOpen?t.detail.forceOpen:null),t.detail.productId&&(e.productId=t.detail.productId),t.detail.productAttributeId&&(e.productAttributeId=t.detail.productAttributeId),t.detail.quantity&&(e.quantity=t.detail.quantity)}))}}},function(e,t,n){"use strict";n.r(t);var r=n(329),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=i.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=l(n(87)),o=l(n(88)),a=l(n(344)),u=l(n(382)),s=l(n(66)),c=n(336);function l(e){return e&&e.__esModule?e:{default:e}}t.default={name:"ChooseList",components:{ContentLoader:c.ContentLoader},apollo:{lists:{query:a.default,variables:function(){return{url:this.url}}}},props:{productId:{type:Number,required:!0,default:0},quantity:{type:Number,required:!0,default:0},productAttributeId:{type:Number,required:!0,default:0},url:{type:String,required:!0,default:""},emptyText:{type:String,required:!0,default:"No list found"},addUrl:{type:String,required:!0,default:""}},methods:{select:(r=(0,o.default)(i.default.mark((function e(t){var n,r,o;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$apollo.mutate({mutation:u.default,variables:{listId:t,url:this.addUrl,productId:this.productId,quantity:this.quantity,productAttributeId:this.productAttributeId}});case 2:n=e.sent,r=n.data,o=r.addToList,this.$emit("hide"),s.default.$emit("showToast",{detail:{type:o.success?"success":"error",message:o.message}}),s.default.$emit("addedToWishlist",{detail:{productId:this.productId,listId:t}});case 8:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},mounted:function(){var e=this;s.default.$on("refetchList",(function(){e.$apollo.queries.lists.refetch()}))}}},function(e,t,n){var r=n(384);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(90).default)("74f2cc0d",r,!1,{})},function(e,t,n){var r=n(386);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(90).default)("2875cd80",r,!1,{})},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,o(n(125)).default)(["\n  mutation removeFromList($listId: Int!, $productId: Int!, $productAttributeId: Int!, $url: String!) {\n    removeFromList(listId: $listId, productId: $productId, productAttributeId: $productAttributeId, url: $url) {\n      success\n      message\n    }\n  }\n"],["\n  mutation removeFromList($listId: Int!, $productId: Int!, $productAttributeId: Int!, $url: String!) {\n    removeFromList(listId: $listId, productId: $productId, productAttributeId: $productAttributeId, url: $url) {\n      success\n      message\n    }\n  }\n"]),i=o(n(39));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)(r)},function(e,t,n){"use strict";n.r(t),n.d(t,"ContentLoader",(function(){return a})),n.d(t,"BulletListLoader",(function(){return u})),n.d(t,"CodeLoader",(function(){return s})),n.d(t,"FacebookLoader",(function(){return c})),n.d(t,"ListLoader",(function(){return l})),n.d(t,"InstagramLoader",(function(){return f}));var r=n(227),i=n.n(r),o=function(){return Math.random().toString(36).substring(2)},a={name:"ContentLoader",functional:!0,props:{width:{type:[Number,String],default:400},height:{type:[Number,String],default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(e,t){var n=t.props,r=t.data,a=t.children,u=n.uniqueKey?n.uniqueKey+"-idClip":o(),s=n.uniqueKey?n.uniqueKey+"-idGradient":o();return e("svg",i()([r,{attrs:{viewBox:"0 0 "+n.width+" "+n.height,version:"1.1",preserveAspectRatio:n.preserveAspectRatio}}]),[e("rect",{style:{fill:"url("+n.baseUrl+"#"+s+")"},attrs:{"clip-path":"url("+n.baseUrl+"#"+u+")",x:"0",y:"0",width:n.width,height:n.height}}),e("defs",[e("clipPath",{attrs:{id:u}},[a||e("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:n.width,height:n.height}})]),e("linearGradient",{attrs:{id:s}},[e("stop",{attrs:{offset:"0%","stop-color":n.primaryColor,"stop-opacity":n.primaryOpacity}},[n.animate?e("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:n.speed+"s",repeatCount:"indefinite"}}):null]),e("stop",{attrs:{offset:"50%","stop-color":n.secondaryColor,"stop-opacity":n.secondaryOpacity}},[n.animate?e("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:n.speed+"s",repeatCount:"indefinite"}}):null]),e("stop",{attrs:{offset:"100%","stop-color":n.primaryColor,"stop-opacity":n.primaryOpacity}},[n.animate?e("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:n.speed+"s",repeatCount:"indefinite"}}):null])])])])}},u={name:"BulletListLoader",functional:!0,render:function(e,t){var n=t.data;return e(a,n,[e("circle",{attrs:{cx:"10",cy:"20",r:"8"}}),e("rect",{attrs:{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}}),e("circle",{attrs:{cx:"10",cy:"50",r:"8"}}),e("rect",{attrs:{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}}),e("circle",{attrs:{cx:"10",cy:"80",r:"8"}}),e("rect",{attrs:{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}}),e("circle",{attrs:{cx:"10",cy:"110",r:"8"}}),e("rect",{attrs:{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"}})])}},s={name:"CodeLoader",functional:!0,render:function(e,t){var n=t.data;return e(a,n,[e("rect",{attrs:{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"}}),e("rect",{attrs:{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"}}),e("rect",{attrs:{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"}}),e("rect",{attrs:{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"}}),e("rect",{attrs:{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"}}),e("rect",{attrs:{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"}}),e("rect",{attrs:{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"}}),e("rect",{attrs:{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"}}),e("rect",{attrs:{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"}})])}},c={name:"FacebookLoader",functional:!0,render:function(e,t){var n=t.data;return e(a,n,[e("rect",{attrs:{x:"70",y:"15",rx:"4",ry:"4",width:"117",height:"6.4"}}),e("rect",{attrs:{x:"70",y:"35",rx:"3",ry:"3",width:"85",height:"6.4"}}),e("rect",{attrs:{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"6.4"}}),e("rect",{attrs:{x:"0",y:"100",rx:"3",ry:"3",width:"380",height:"6.4"}}),e("rect",{attrs:{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6.4"}}),e("circle",{attrs:{cx:"30",cy:"30",r:"30"}})])}},l={name:"ListLoader",functional:!0,render:function(e,t){var n=t.data;return e(a,n,[e("rect",{attrs:{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"}}),e("rect",{attrs:{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"}}),e("rect",{attrs:{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"}}),e("rect",{attrs:{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"}}),e("rect",{attrs:{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"}}),e("rect",{attrs:{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"}})])}},f={name:"InstagramLoader",functional:!0,render:function(e,t){var n=t.data;return e(a,i()([n,{attrs:{height:480}}]),[e("circle",{attrs:{cx:"30",cy:"30",r:"30"}}),e("rect",{attrs:{x:"75",y:"13",rx:"4",ry:"4",width:"100",height:"13"}}),e("rect",{attrs:{x:"75",y:"37",rx:"4",ry:"4",width:"50",height:"8"}}),e("rect",{attrs:{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"400"}})])}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"wishlist-button-add",class:{"wishlist-button-product":this.isProduct},on:{click:this.addToWishlist}},[this.isChecked?t("i",{staticClass:"material-icons"},[this._v("favorite")]):t("i",{staticClass:"material-icons"},[this._v("favorite_border")])])},i=[];r._withStripped=!0},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wishlist-chooselist"},[n("ul",{staticClass:"wishlist-list"},e._l(e.lists,(function(t){return n("li",{key:t.id_wishlist,staticClass:"wishlist-list-item",on:{click:function(n){return e.select(t.id_wishlist)}}},[n("p",[e._v("\n        "+e._s(t.name)+"\n      ")])])})),0),e._v(" "),e.$apollo.queries.lists.loading?n("ContentLoader",{staticClass:"wishlist-list-loader",attrs:{height:"105"}},[n("rect",{attrs:{x:"0",y:"12",rx:"3",ry:"0",width:"100%",height:"11"}}),e._v(" "),n("rect",{attrs:{x:"0",y:"36",rx:"3",ry:"0",width:"100%",height:"11"}}),e._v(" "),n("rect",{attrs:{x:"0",y:"60",rx:"3",ry:"0",width:"100%",height:"11"}}),e._v(" "),n("rect",{attrs:{x:"0",y:"84",rx:"3",ry:"0",width:"100%",height:"11"}})]):e._e(),e._v(" "),e.lists&&e.lists.length<=0&&!e.$apollo.queries.lists.loading?n("p",{staticClass:"wishlist-list-empty"},[e._v("\n    "+e._s(e.emptyText)+"\n  ")]):e._e()],1)},i=[];r._withStripped=!0},function(e,t,n){"use strict";var r=o(n(113)),i=o(n(340));function o(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2020 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var a=[{name:"url",type:String},{name:"title",type:String},{name:"label",type:String},{name:"productId",type:Number},{name:"placeholder",type:String},{name:"cancelText",type:String},{name:"lengthText",type:String},{name:"createText",type:String}];(0,r.default)(i.default,".wishlist-create",a)},function(e,t,n){"use strict";n.r(t);var r=n(229);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n(342);var o=n(38),a=Object(o.a)(r.default,void 0,void 0,!1,null,"939b3d2a",null);a.options.__file="_dev/front/js/components/Create/Create.vue",t.default=a.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,o(n(125)).default)(["\n  mutation createList($name: String!, $url: String!) {\n    createList(name: $name, url: $url) {\n      message\n      datas {\n        name\n        id_wishlist\n      }\n      success\n    }\n  }\n"],["\n  mutation createList($name: String!, $url: String!) {\n    createList(name: $name, url: $url) {\n      message\n      datas {\n        name\n        id_wishlist\n      }\n      success\n    }\n  }\n"]),i=o(n(39));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)(r)},function(e,t,n){"use strict";var r=n(231);n.n(r).a},function(e,t,n){(t=n(89)(!1)).push([e.i,".wishlist-create .wishlist-modal[data-v-939b3d2a]{display:block;opacity:0;pointer-events:none;z-index:0}.wishlist-create .wishlist-modal.show[data-v-939b3d2a]{opacity:1;pointer-events:all;z-index:1053}\n",""]),e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,o(n(125)).default)(["\n  query lists($url: String!) {\n    lists(url: $url) {\n      id_wishlist\n      name\n      listUrl\n      shareUrl\n      nbProducts\n      default\n    }\n  }\n"],["\n  query lists($url: String!) {\n    lists(url: $url) {\n      id_wishlist\n      name\n      listUrl\n      shareUrl\n      nbProducts\n      default\n    }\n  }\n"]),i=o(n(39));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)(r)},function(e,t,n){"use strict";var r=o(n(113)),i=o(n(346));function o(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2020 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var a=[{name:"renameWishlistText",type:String},{name:"createWishlistText",type:String},{name:"addedWishlistText",type:String},{name:"shareText",type:String},{name:"deleteWishlistText",type:String},{name:"deleteProductText",type:String},{name:"copyText",type:String}];(0,r.default)(i.default,".wishlist-toast",a)},function(e,t,n){"use strict";n.r(t);var r=n(319),i=n(232);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n(347);var a=n(38),u=Object(a.a)(i.default,r.a,r.b,!1,null,null,null);u.options.__file="_dev/front/js/components/Toast/Toast.vue",t.default=u.exports},function(e,t,n){"use strict";var r=n(234);n.n(r).a},function(e,t,n){(t=n(89)(!1)).push([e.i,".wishlist-toast{padding:14px 20px;box-sizing:border-box;border:1px solid #e5e5e5;border-radius:4px;background-color:#ffffff;box-shadow:2px 2px 10px 0 rgba(0,0,0,0.2);position:fixed;right:20px;z-index:9999;top:70px;transition:0.2s ease-out;transform:translateY(-10px);pointer-events:none;opacity:0}.wishlist-toast.success{background-color:#69b92d;border-color:#69b92d}.wishlist-toast.success .wishlist-toast-text{color:white}.wishlist-toast.error{background-color:#b9312d;border-color:#b9312d}.wishlist-toast.error .wishlist-toast-text{color:white}.wishlist-toast.isActive{transform:translateY(0);pointer-events:all;opacity:1}.wishlist-toast-text{color:#232323;font-size:14px;letter-spacing:0;line-height:19px;margin-bottom:0}\n",""]),e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(113)),i=o(n(371));function o(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2020 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var a=function(){var e=[{name:"url",type:String},{name:"checked",type:Boolean},{name:"productId",type:Number},{name:"productAttributeId",type:Number},{name:"isProduct",type:Boolean}];(0,r.default)(i.default,".wishlist-button",e)};a(),t.default=a},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(369),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=i.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(66)),i=o(n(192));function o(e){return e&&e.__esModule?e:{default:e}}t.default={name:"Login",props:{cancelText:{type:String,required:!0,default:"Cancel"},loginText:{type:String,required:!0,default:"Login"}},data:function(){return{value:"",isHidden:!0,listId:null,prestashop:i.default}},methods:{toggleModal:function(){this.isHidden=!this.isHidden}},mounted:function(){var e=this;r.default.$on("showLogin",(function(){e.toggleModal()}))}}},function(e,t,n){var r=n(435);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(90).default)("80f5b90a",r,!1,{})},function(e,t,n){"use strict";n.r(t);var r=n(337),i=n(320);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n(372);var a=n(38),u=Object(a.a)(i.default,r.a,r.b,!1,null,null,null);u.options.__file="_dev/front/js/components/Button/Button.vue",t.default=u.exports},function(e,t,n){"use strict";var r=n(322);n.n(r).a},function(e,t,n){(t=n(89)(!1)).push([e.i,".wishlist-button-product{margin-left:20px}.wishlist-button-add{display:flex;align-items:center;justify-content:center;height:40px;width:40px;min-width:40px;padding-top:3px;background-color:#ffffff;box-shadow:2px 2px 4px 0 rgba(0,0,0,0.2);border-radius:50%;cursor:pointer;transition:0.2s ease-out;border:none}.wishlist-button-add:hover{opacity:0.7}.wishlist-button-add:focus{outline:0}.wishlist-button-add:active{transform:scale(1.2)}.wishlist-button-add i{color:#7a7a7a}\n",""]),e.exports=t},,,,,,function(e,t,n){"use strict";var r=o(n(113)),i=o(n(380));function o(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2020 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var a=[{name:"url",type:String}];(0,r.default)(i.default,".wishlist-add-to",a)},function(e,t,n){"use strict";n.r(t);var r=n(326);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n(385);var o=n(38),a=Object(o.a)(r.default,void 0,void 0,!1,null,"cab62222",null);a.options.__file="_dev/front/js/components/AddToWishlist/AddToWishlist.vue",t.default=a.exports},function(e,t,n){"use strict";n.r(t);var r=n(338),i=n(328);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n(383);var a=n(38),u=Object(a.a)(i.default,r.a,r.b,!1,null,null,null);u.options.__file="_dev/front/js/components/ChooseList/ChooseList.vue",t.default=u.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,o(n(125)).default)(["\n  mutation addToList($listId: Int!, $productId: Int!, $quantity: Int!, $productAttributeId: Int!, $url: String!) {\n    addToList(\n      listId: $listId\n      productId: $productId\n      quantity: $quantity\n      productAttributeId: $productAttributeId\n      url: $url\n    ) {\n      success\n      message\n    }\n  }\n"],["\n  mutation addToList($listId: Int!, $productId: Int!, $quantity: Int!, $productAttributeId: Int!, $url: String!) {\n    addToList(\n      listId: $listId\n      productId: $productId\n      quantity: $quantity\n      productAttributeId: $productAttributeId\n      url: $url\n    ) {\n      success\n      message\n    }\n  }\n"]),i=o(n(39));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)(r)},function(e,t,n){"use strict";var r=n(330);n.n(r).a},function(e,t,n){(t=n(89)(!1)).push([e.i,".wishlist-list{max-height:55vh;overflow-y:scroll;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;margin:0}.wishlist-list-empty{font-size:30;text-align:center;padding:30px;padding-bottom:20px;font-weight:bold;color:#000}.wishlist-list-item{padding:14px 0;transition:0.25s ease-out;cursor:pointer}.wishlist-list-item:hover{background:#ecf8fb}.wishlist-list-item p{font-size:14px;letter-spacing:0;color:#232323;margin-bottom:0;line-height:16px;padding:0 40px}\n",""]),e.exports=t},function(e,t,n){"use strict";var r=n(331);n.n(r).a},function(e,t,n){(t=n(89)(!1)).push([e.i,".wishlist-add-to-new[data-v-cab62222]{cursor:pointer;transition:0.2s ease-out;height:16px;width:79px;font-size:14px;letter-spacing:0;line-height:16px}.wishlist-add-to-new[data-v-cab62222]:not([href]):not([tabindex]){color:#2fb5d2}.wishlist-add-to-new[data-v-cab62222]:hover{opacity:0.7}.wishlist-add-to-new i[data-v-cab62222]{margin-right:5px;vertical-align:middle;color:#2fb5d2;margin-top:-2px;font-size:20px}.wishlist-add-to .modal-body[data-v-cab62222]{padding:0}.wishlist-add-to .modal-footer[data-v-cab62222]{text-align:left;padding:12px 20px}\n",""]),e.exports=t},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){n(430),n(349),n(345),n(432),n(339),e.exports=n(379)},function(e,t,n){"use strict";var r=o(n(349)),i=o(n(431));function o(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2020 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var a=function(){document.querySelectorAll(".js-product-miniature").forEach((function(e){var t=document.createElement("div");t.classList.add("wishlist-button"),t.dataset.productId=e.dataset.idProduct,t.dataset.url=i.default,t.dataset.productAttributeId=e.dataset.idProductAttribute,t.dataset.checked=!1,e.querySelector(".thumbnail-container").append(t)}))};a(),(0,r.default)();var u=document.querySelectorAll("#products, .featured-products"),s={attributes:!1,childList:!0};u.forEach((function(e){new MutationObserver((function(){a(),(0,r.default)()})).observe(e,s)}))},function(e,t){e.exports=window.removeFromWishlistUrl},function(e,t,n){"use strict";var r=o(n(113)),i=o(n(433));function o(e){return e&&e.__esModule?e:{default:e}}
/**
 * 2007-2020 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */var a=[{name:"loginText",type:String},{name:"cancelText",type:String}];(0,r.default)(i.default,".wishlist-login",a)},function(e,t,n){"use strict";n.r(t);var r=n(368);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n(434);var o=n(38),a=Object(o.a)(r.default,void 0,void 0,!1,null,"a4bec002",null);a.options.__file="_dev/front/js/components/Login/Login.vue",t.default=a.exports},function(e,t,n){"use strict";var r=n(370);n.n(r).a},function(e,t,n){(t=n(89)(!1)).push([e.i,".wishlist-login .wishlist-modal[data-v-a4bec002]{display:block;opacity:0;pointer-events:none;z-index:0}.wishlist-login .wishlist-modal.show[data-v-a4bec002]{opacity:1;pointer-events:all;z-index:1053}\n",""]),e.exports=t}]);$(document).ready(function(){var $searchWidget=$('#search_widget');var $searchBox=$searchWidget.find('input[type=text]');var searchURL=$searchWidget.attr('data-search-controller-url');var $clearButton=$searchWidget.find('i.clear');$.widget('prestashop.psBlockSearchAutocomplete',$.ui.autocomplete,{_renderItem:function(ul,product){var image=(product.cover)?product.cover:prestashop.urls.no_picture_image;var $img=$('<img class="autocomplete-thumbnail" src="'+image.bySize.small_default.url+'">');return $("<li>").append($("<a>").append($img).append($("<span>").html(product.name).addClass("product"))).appendTo(ul)}});var isMobile=function(){return $(window).width()<768};var autocompletePosition=function(){return{my:'right top',at:'right bottom',of:isMobile()?'.header-top':'#search_widget',}};$searchBox.psBlockSearchAutocomplete({position:autocompletePosition(),source:function(query,response){$.post(searchURL,{s:query.term,resultsPerPage:10},null,'json').then(function(resp){response(resp.products)}).fail(response)},select:function(event,ui){var url=ui.item.url;window.location.href=url},}).psBlockSearchAutocomplete("widget").addClass('searchbar-autocomplete');$(window).resize(function(){$searchBox.psBlockSearchAutocomplete({position:autocompletePosition(),});$searchBox.keyup()});$clearButton.click(function(){$searchBox.val("");$clearButton.hide()});$searchBox.keyup(function(){$clearButton.toggle($searchBox.val()!==""&&isMobile())})});/**
 * 2007-2020 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
$(document).ready(function(){prestashop.blockcart=prestashop.blockcart||{};var showModal=prestashop.blockcart.showModal||function(modal){var $body=$('body');$body.append(modal);$body.one('click','#blockcart-modal',function(event){if(event.target.id==='blockcart-modal'){$(event.target).remove()}})};prestashop.on('updateCart',function(event){var refreshURL=$('.blockcart').data('refresh-url');var requestData={};if(event&&event.reason&&typeof event.resp!=='undefined'&&!event.resp.hasError){requestData={id_customization:event.reason.idCustomization,id_product_attribute:event.reason.idProductAttribute,id_product:event.reason.idProduct,action:event.reason.linkAction}}
if(event&&event.resp&&event.resp.hasError){prestashop.emit('showErrorNextToAddtoCartButton',{errorMessage:event.resp.errors.join('<br/>')})}
$.post(refreshURL,requestData).then(function(resp){var html=$('<div />').append($.parseHTML(resp.preview));$('.blockcart').replaceWith($(resp.preview).find('.blockcart'));if(resp.modal){showModal(resp.modal)}}).fail(function(resp){prestashop.emit('handleError',{eventType:'updateShoppingCart',resp:resp})})})});/*! http://responsiveslides.com v1.54 by @viljamis */
(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",j=d+"_on",w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before(b);F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),n=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after(b);n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("click",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);/**
 * 2007-2020 PrestaShop.
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
jQuery(document).ready(function($){var homesliderConfig={speed:500,timeout:$('.homeslider-container').data('interval'),nav:!0,random:!1,pause:$('.homeslider-container').data('pause'),maxwidth:"",namespace:"homeslider",before:function(){},after:function(){}};$(".rslides").responsiveSlides(homesliderConfig)})