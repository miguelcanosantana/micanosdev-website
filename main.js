//LOCALIZATION
const localization = {
    en: {
        //INDEX

        //Hero Section
        hero_hello : "Hello!",
        hero_im : "I'm Miguel",
        hero_aka: "a.k.a Micanos DEV",
        hero_full_stack: "I'm passionate about being a full-stack developer and learning new technologies to apply them to the projects I craft.",
        hero_button_know_more: "Know more",

        //Tech Skills
        tech_skills_title: "Tech Skills",

        //Tech Alerts
        tech_alert_csharp_title: "C#",
        tech_alert_csharp_explanation: "C# is the language that I use in all of my .NET projects.",

        tech_alert_net_title: ".NET",
        tech_alert_net_explanation: "I've developed under the .NET ecosystem using different tech: <br><br> <b>• ASP.NET</b>: The old reliable. Used it to develop and maintain older applications following the MVC pattern in the Cirsa Company. <br><br> <b>• .NET Core</b>: As a newer alternative to ASP.NET, for different applications and also the development of a newer API. <br><br> <b>• MSTest</b>: For unit testing all the .NET projects.",

        tech_alert_blazor_title: "Blazor",
        tech_alert_blazor_explanation: "My newest projects in the Cirsa Company were developer in Blazor. <br> The hottest tech just from the oven, newer than a typical .NET Core app and using a similar approach to Angular. <br> I've developed server sided rendered and client web assembly rendered apps using it. ",
    },

    es: {
        //INDEX

        //Hero Section
        hero_hello : "Hola!",
        hero_im : "Soy Miguel",
        hero_aka: "alias Micanos DEV",
        hero_full_stack: "Me apasiona ser desarrollador full-stack y aprender nuevas tecnologías para poder aplicarlas a los proyectos que realizo.",
        hero_button_know_more: "Saber más",

        //Tech Skills
        tech_skills_title: "Skills digitales"

        //Tech Alerts
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


//Remove the display property after the page loads using the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tech-skill-alert").style.display = "none";
});


//Show text in the tech skill alert depending of the selected one and locale
function showTechSkillAlert(textKey) {

    var alert = document.getElementById("tech-skill-alert");
    var alertTitle = document.getElementById("tech-skill-alert-title");
    var alertContent = document.getElementById("tech-skill-alert-explanation");
    var locale = localStorage.getItem("previousLocale");

    alertTitle.innerHTML = localization[locale][textKey + "_title"];
    alertContent.innerHTML = localization[locale][textKey + "_explanation"];

    //alertTitle.textContent = 

    alert.style.display = "block";
    alert.scrollIntoView()
}