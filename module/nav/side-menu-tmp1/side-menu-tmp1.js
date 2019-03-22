//Main Menu 	
$('#cd-menu-trigger').on('click', function openMainMenu(){
   
    $('#cd-side-menu')[0].style.width = '35%';
});

$('#cd-x-trigger').on('click', function closeMainMenu(){
$('#cd-side-menu')[0].style.width = '0';
});

//Expertise Menu
//Education
$('#education-law-menu-item').on('mouseenter', function openExpertiseEducationMenu(){
$('#education-law-side-menu')[0].style.width = '75%';
$('#education-law-side-menu')[0].style.marginLeft = '25%';
});

$('#education-law-side-menu').on('mouseenter', function keepOpenExpertiseEducationMenu(){
$('#education-law-side-menu')[0].style.width = '75%';
$('#education-law-side-menu')[0].style.marginLeft = '25%';
});

$('#education-law-menu-item').on('mouseleave', function closeExpertiseEducationMenu(){
$('#education-law-side-menu')[0].style.width = '0';
});


//Team Side Menu
$('#team-menu-item').on('mouseenter', function openTeamMenu(){
$('#team-side-menu')[0].style.width = '75%';
$('#team-side-menu')[0].style.marginLeft = '25%';
});

$('#team-side-menu').on('mouseenter', function keepOpenExpertiseEducationMenu(){
$('#team-side-menu')[0].style.width = '75%';
$('#team-side-menu')[0].style.marginLeft = '25%';
});

$('#team-menu-item').on('mouseleave', function closeExpertiseEducationMenu(){
$('#team-side-menu')[0].style.width = '0';
});