// /* global  window */
// 'use strict';
//
// const $ = require('jquery');
// const { gsap } = require('gsap');
// const barba = require('@barba/core');
// const barbaPrefetch = require('@barba/prefetch');
//
// barba.hooks.enter(() => {
//   window.scrollTo(0, 0);
// });
//
// barba.use(barbaPrefetch);
//
// barba.init({
//   timeout: 2000,
//   transitions: [{
//     name: 'default-transition',
//     sync: true,
//     leave(data) {
//       return gsap.to(data.current.container, {
//         opacity: 0
//       });
//     },
//     beforeEnter(data) {
//       $(data.current.container).find('script').each(function (i, script) {
//         var $script = $(script);
//           $.ajax({
//             url: $script.attr('src'),
//             cache: true,
//             dataType: 'script',
//             success: function () {
//               $script.trigger('load');
//             }
//           });
//        });
//     },
//     enter(data) {
//       return gsap.from(data.next.container, {
//         opacity: 0
//       });
//     }
//   }]
// });
