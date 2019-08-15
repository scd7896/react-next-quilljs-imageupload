webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/TestEdit.js":
/*!********************************!*\
  !*** ./components/TestEdit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);







var EditPost = function EditPost() {
  var ReactQuill;
  var quillRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var dropzone = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var DropZone, ImageFile;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      showContent = _useState4[0],
      setShowContent = _useState4[1];

  if (true) {
    ReactQuill = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
  }

  var quillModules = {
    toolbar: {
      container: [['bold', 'italic', 'underline', 'strike'], ['image']],
      handlers: {
        image: function image() {
          var input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.setAttribute('accept', 'image/*');
          input.click();
          input.addEventListener('change',
          /*#__PURE__*/
          Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
            var file, formData, quill, range, res;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('이미지 변환됨');
                    file = input.files[0];
                    formData = new FormData();
                    formData.append('image', file);
                    quill = quillRef.current.getEditor();
                    range = quill.getSelection(true);
                    _context.next = 8;
                    return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:3060/api/image', formData);

                  case 8:
                    res = _context.sent;
                    quill.setSelection(range.index + 1);
                    quill.deleteText(range.index, 1);
                    quill.insertEmbed(range.index, 'image', "../../uploads/".concat(res.data));

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })));
        }
      }
    }
  };

  var setContent = function setContent(e) {
    if (e.match(/^<p><img/g)) {
      //여기서 변환 코드를 작성하자
      console.log('파일이 들어온것이여');
    }

    console.log(e);
    setText(e);
  };

  var saveContents = function saveContents() {
    var arr = text.split('<p>');
    arr = arr.filter(function (e) {
      return e !== '';
    });
    arr = arr.map(function (el) {
      return '<p>' + el;
    });
    console.log(arr);
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('http://localhost:3060/api/posts', {
      title: 'test',
      arr: arr
    }); // axios.get('http://localhost:3060/api/test')
    //     .then((res)=> setShowContent(res.data))
    //     .catch((err)=> console.error(err))
    // socket.on('connect', ()=>{
    //     console.log(socket.id)
    // })
    // webSocekt.onmessage = (e)=>{
    //     console.log(e.data)
    // }
    // webSocekt.onopen = ()=>{
    //     console.log(text)
    //     conn.send(text)
    // }
    // webSocekt.onerror = (message)=>{
    //      console.log(message)
    // }

    setText('');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {}, []);
  return  true && ReactQuill ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ReactQuill, {
    ref: quillRef,
    value: text,
    placeholder: '내용을 입력하시오',
    modules: quillModules,
    onChange: setContent
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: saveContents
  }, "\uB0B4\uC6A9 \uC800\uC7A5\uD574\uBC84\uB9AC\uAE30~"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: {
      pathname: "/posts",
      query: {
        id: 2
      }
    },
    as: "/posts/2"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", null, "\uB0B4\uC6A9 \uBD88\uB7EC\uBC84\uB9AC\uAE30")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, showContent ? showContent : '', react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "C:\\\\Users\\\\scd78\\\\Desktop\\\\react-next-quilljs\\\\uploads\\\\\uB514\uBE44 \uCD5C\uC885\uBCF81565848383953.jpg"
  }))) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (EditPost);

/***/ })

})
//# sourceMappingURL=index.js.7ec58db26c6bfeeb9fef.hot-update.js.map