//LOCALIZATION
const localization = {
    en: {
        //INDEX

        //Hero Section
        hero_hello : "Hello!",
        hero_im_miguel_cano : "I'm Miguel Cano",
        hero_aka: "a.k.a Micanos DEV"
    },

    es: {
        //INDEX

        //Hero Section
        hero_hello : "Hola!",
        hero_im_miguel_cano : "Soy Miguel Cano",
        hero_aka: "también conocido como Micanos DEV"
    }
}

//Setup locale selector
const localizableNodeList = document.querySelectorAll("[id^=localizable-]");

const localeSelector = document.querySelector("#locale-selector")

localeSelector.addEventListener("change", (event) => 
    {
        setLocale(event.target.value)
    }
)

//Set the default language to the client's browser one if no url param has been specified
window.addEventListener("load", (event) => {
    
    const preferedLang = navigator.language

    if (preferedLang.startsWith("es")) {
        localeSelector.value = "es"
        setLocale("es")
    }
    else {
        localeSelector.value = "en"
        setLocale("en")
    }

});




function setLocale(locale) {

    switch (locale) {

        case 'es':
            localizableNodeList.forEach(element => {
                const cleanId = element.id.replace('localizable-', '')
                element.textContent = localization.es[cleanId]
            });
            break;

        case 'en':
            localizableNodeList.forEach(element => {
                const cleanId = element.id.replace('localizable-', '')
                element.textContent = localization.en[cleanId]
            });
            break;
    
        default:
            localizableNodeList.forEach(element => {
                const cleanId = element.id.replace('localizable-', '')
                element.textContent = localization.en[cleanId]
            });
            break;
    }

}