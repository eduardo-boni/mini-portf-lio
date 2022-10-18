const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", function() {

        if(tab.classList.contains("select")){
            return;
        }

        selectTab(tab);
        showInformationTab(tab);
        
    });
});

function selectTab(tab) {
    const selectTab = document.querySelector(".tab.select");
        selectTab.classList.remove("select");
        tab.classList.add("select");
}

function showInformationTab(tab) {
    const selectInformation = document.querySelector(".information.select");
        selectInformation.classList.remove("select");
        
        const tabInfoElementId = `information-${tab.id}`;
        
        const informationTobeShown = document.getElementById(tabInfoElementId);
        informationTobeShown.classList.add("select");
}