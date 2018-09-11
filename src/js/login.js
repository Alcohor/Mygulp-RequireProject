//先加载config配置文件
require(["config"],function(){
    require(["jquery","base","animate"],function($,test,animate){
        $(".test").css("backgroundColor","green")
      console.log(test.myFunction);
      test.myFunction();
      var test = document.getElementsByClassName("test")[0]
      animate(test,{width:400})
    })
    
})