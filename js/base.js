


//popupfullpage
function popupHeight(){
    var h = $(window).height();
    var mh = h-49-53; 
    $('.popup_full_warp').height(mh);
}


// _getViewObject
function _getViewObject(sName,callback){

  $.ajax({
    type: "GET",
    url: sName,
    success: function (data) {
      if (!_isNull(data)) {
          if (typeof callback === "function") callback(data);
      } else {
          if (typeof callback === "function") callback(console.log("取得服务失败"));         }
    },
    error: function (xhr, err) {
      if (typeof callback === "function") callback(console.log("取得服务失败"));
      var strErrHtml = xhr.responseText;
      console.log(strErrHtml);
    }
  });
}


function switchs(){

  $('.switch').on('click',function() {
    $(this).toggleClass('on').toggleClass('off');
    if($('.switch').hasClass('on')){
      $('#tbal').css('visibility','visible');
    }else{
      $('#tbal').css('visibility','hidden');
    }    
  });  
}

function goTop(){
  $("#gotop").click(function(){ 
    $("html,body").animate({ 
      scrollTop:0 
    },1000); 
  }); 
}




function baseCtrl(){
  switchs();
  goTop();
//   footerPopC();
//   navC();
//   footerImgChange();  

//   //登录验证
//   setLoginValid();


//   getQaView();
//   getTermsView();
//   getAboutView();  
//   closeNav();
}