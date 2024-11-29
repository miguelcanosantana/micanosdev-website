//LOCALIZATION
const localization = {
    en: {
        //INDEX

        //Hero Section
        hero_hello : "Hello!",
        hero_im : "I'm Miguel",
        hero_aka: "a.k.a Micanos DEV"
    },

    es: {
        //INDEX

        //Hero Section
        hero_hello : "Hola!",
        hero_im : "Soy Miguel",
        hero_aka: "alias Micanos DEV"
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

//Set the default language to the client's browser one if no previous one was saved
window.addEventListener("load", (event) => {
    
    const previousLocale = localStorage.getItem("previousLocale");

    if (previousLocale == null) {

        const preferedLang = navigator.language

        if (preferedLang.startsWith("es")) {
            localeSelector.value = "es"
            setLocale("es")
        }
        else {
            localeSelector.value = "en"
            setLocale("en")
        }

    } else {
        localeSelector.value = previousLocale
        setLocale(previousLocale)
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

    //Save locale in localStorage so next time loading page it can be loaded
    localStorage.setItem("previousLocale", locale)
}