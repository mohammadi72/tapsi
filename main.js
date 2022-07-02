const toggler = document.querySelector('.nav__toggler');
const navbar = document.querySelector('.nav');
toggler.addEventListener('click', (e) => {
  console.log('clicked');
  navbar.classList.toggle('expanded');
});

// ***************************************************************************************
const tabs = document.querySelectorAll(' .tab');
const tabContents = document.querySelectorAll(' .tab-content');
tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    const targetTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    //remove previous actived classes
    tabs.forEach((tab) => tab.classList.remove('active'));
    tabContents.forEach((tabContent) => tabContent.classList.remove('active'));

    //add new active classes
    tab.classList.add('active');
    targetTabContent.classList.add('active');
  });
});
