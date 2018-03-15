function _isNull(obj) {

    if (typeof (obj) == 'undefined' || obj == null || obj == 'undefined') {

	return true;
    }
    else {
	return false;
    }
}//function _isNull(obj)


function _popData(sData,callback){
  try {
		$.blockUI({
	    overlayCSS: { opacity: 0.2 ,cursor:null},
	    css: {
				border: 'none',
				'-webkit-border-radius': '3px',
				'-moz-border-radius': '3px',
				//padding: '10px',
				width: '68.75%',
				left: '50%',
				top: '35%',
				backgroundColor: 'transparent',
				maxWidth: '350px',
				transform: 'translateX(-50%)',
				cursor:null
	    },
	    message: sData,
	    onBlock:function(){
				if (typeof callback === "function") callback("onBlock");
				return;
	    }
		});
  } catch (e) {
		if (typeof callback === "function") callback("error:"+e.message);
		return;
}

}//_popData


function _getViewObject(sName,callback){
  try {
		$.ajax({
		    type: "GET",
		    url: sName,
		    success: function (data) {
					if (!_isNull(data)) {
					    if (typeof callback === "function") callback(data);
					} else {
					    if (typeof callback === "function") callback(_getErrObj("45002","取得服务失败"));					}
		    },
		    error: function (xhr, err) {
					if (typeof callback === "function") callback(_getErrObj("45002","取得服务失败"));
					var strErrHtml = xhr.responseText;
					console.log(strErrHtml);
		    }
		});// $.ajax
  } catch (e) {
		if (typeof callback === "function") callback(_getErrObj("45002","取得服务失败"));
  }
}// _getViewObject

function _showPopBtnWithDoCallback(sContent, sBtn, callback) {
  try {
		_getViewObject("views/popBtnWithCloseView-do.html?", function(
		data) {
	    data = String(data).replace("{content}", sContent);
	    data = String(data).replace("{btn_text}", sBtn);

	    _popData(data, function(sFun) {
		// after show
				if (_isNull(sFun)) {
				    console.log("pop error");
				    if (typeof callback === "function")
							callback("");
				    return;
				}
				if (sFun != "onBlock") {
				    console.log("pop error" + sFun);
				    if (typeof callback === "function")
							callback("");
				    return;
				}

				// button event handle
				$(".popup_section .doBtn").on("click", function() {
			    $.unblockUI();
			    if (typeof callback === "function")
						callback("click");
				});
				$(".popup_section .pupup_close").on("click", function() {
				    $.unblockUI();
				});
   		});
		});
	} catch (e) {
		console.log(e.message);
	}
}// function _showPopBtnCallback()
//ex:
    // _showPopBtnWithDoCallback('先完成个人资料','前去填写资料', function(){
    //   location.href ='./member_info.html';
    // });



function _showPopBtnWithNotDoCallback(sContent, sBtn, callback) {
  try {
		_getViewObject("views/popBtnWithCloseView-notdo.html?", function(
		data) {
	    data = String(data).replace("{content}", sContent);
	    data = String(data).replace("{btn_text}", sBtn);

	    _popData(data, function(sFun) {
		// after show
				if (_isNull(sFun)) {
				    console.log("pop error");
				    if (typeof callback === "function")
							callback("");
				    return;
				}
				if (sFun != "onBlock") {
				    console.log("pop error" + sFun);
				    if (typeof callback === "function")
							callback("");
				    return;
				}

				$(".popup_section .pupup_close, .popup_section .noBtn").on("click", function() {
				    $.unblockUI();
				});
   		});
		});
	} catch (e) {
		console.log(e.message);
	}
}// function _showPopBtnCallback()
//ex:
    // _showPopBtnWithNotDoCallback('先完成个人资料','知道了');

function _showPopBtnWithAllCallback(sContent, notdo_btn, do_btn, callback) {
  try {
		_getViewObject("views/popBtnWithCloseView-all.html?", function(
		data) {
	    data = String(data).replace("{content}", sContent);
	    data = String(data).replace("{notdo_btn_text}", notdo_btn);
	    data = String(data).replace("{do_btn_text}", do_btn);

	    _popData(data, function(sFun) {
		// after show
				if (_isNull(sFun)) {
				    console.log("pop error");
				    if (typeof callback === "function")
							callback("");
				    return;
				}
				if (sFun != "onBlock") {
				    console.log("pop error" + sFun);
				    if (typeof callback === "function")
							callback("");
				    return;
				}


				// button event handle
				$(".popup_section .doBtn").on("click", function() {
			    $.unblockUI();
			    if (typeof callback === "function")
						callback("click");
				});
				$(".popup_section .pupup_close, .popup_section .noBtn").on("click", function() {
				    $.unblockUI();
				});
   		});
		});
	} catch (e) {
		console.log(e.message);
	}
}// function _showPopBtnCallback()
//ex:
	// _showPopBtnWithAllCallback('这里是文字标题文字标题这里是文字标题文字标题这里是文字标题文字标题这里是文字标题文字标题','下次再去','立即前往', function(){
	// location.href ='./member_info.html';
	// });