$(document).ready(function () {

    // $(body).click(function () {
    //     $('.menu-panel').css('display', 'none');
    // });
    // $('.menu-panel').on('focusout', function(event){
    //     console.log('sassas')
    //  });
});


$(document).mouseup(function (e){

    var settingBtn = $(".setting-btn");
    var optPanel = $(".opt-panel");

	if (!settingBtn.is(e.target) && settingBtn.has(e.target).length === 0 && (!optPanel.is(e.target) && optPanel.has(e.target).length === 0)){
		optPanel.fadeOut();
	} 
});


function openOptionPanel() {
    $('.opt-panel').toggle();

}

function closeOptionPanel() {
    $('.opt-panel').toggle();
}




