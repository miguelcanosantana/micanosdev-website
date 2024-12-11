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
        tech_alert_net_explanation: "I've developed under the .NET ecosystem using different tech: <br><br> <b>• ASP.NET</b>: The old reliable. Used it to develop and maintain older applications following the MVC pattern in the Cirsa Company. <br><br> <b>• .NET Core</b>: As a newer alternative to ASP.NET, for different applications and also the development of a newer API. <br><br> <b>• Entity Framework and LINQ</b>: I developed queries in LINQ alongside Entity framework to replace the database queries with a dynamic ORM solution. <br><br> <b>• MSTest</b>: For unit testing all the .NET projects.",

        tech_alert_blazor_title: "Blazor",
        tech_alert_blazor_explanation: "My newest projects in the Cirsa Company were developer in Blazor. <br> The hottest tech just from the oven, newer than a typical .NET Core app and using a similar approach to Angular. <br> I've developed server sided rendered and client web assembly rendered apps using it. ",

        tech_alert_unity_title: "Unity",
        tech_alert_unity_explanation: "I'm passionate about developing videogames in different tools, one of them being the Unity Engine, which forms part of the .NET ecosystem too.",

        tech_alert_android_title: "Android",
        tech_alert_android_explanation: "In my studies I've touched the development of native Android apps using Java, nowadays I prefer Kotlin. <br> I have experience developing apps with Android XML Layouts, and would like to try Jetpack compose or even Compose multiplatform in a future. <br><br> I've also published 2 apps at the moment of writing this in the play store. <br> <br> <a href='https://play.google.com/store/apps/dev?id=7644279889113215830' target='_blank' rel='noopener noreferrer'> Check them here</a>",

        tech_alert_kotlin_title: "Kotlin",
        tech_alert_kotlin_explanation: "After learning the basis of Java for Android app development I stumbled upon Kotlin, which I preferred learning it by myself for modern developments, as it's syntax is nicer without compromising being a powerful language.",

        tech_alert_ionic_title: "Ionic",
        tech_alert_ionic_explanation: "I applied Ionic whilst studying in a vocational training course the Ionic framework. Later I used it in my internship with the Properly Software SL company for creating hybrid apps with native functions with Capacitor alongside Angular.",

        tech_alert_angular_title: "Angular",
        tech_alert_angular_explanation: "I've experienced Angular alongside Ionic, but I'm willing to explore new ways of using it, like in a standalone way or with other frameworks.",

        tech_alert_firebase_title: "Firebase",
        tech_alert_firebase_explanation: "When I discovered Firebase in my vocational training course I instantly fell in love with it. It's a non relational database with some powerful capabilities. <br> First tune I used it was with Ionic and Angular, later I used it in some Android projects with Kotlin.",

        tech_alert_plsql_title: "PL/SQL",
        tech_alert_plsql_explanation: "When working in Cirsa, I had to translate a lot of queries from the Oracle PL/SQL to entity framework, but I also made some PL/SQL new ones. Later, I learned to manage some database aspects like tables and relationships in different environments like testing, integration, production...",

        tech_alert_lua_title: "Lua, Luau and Roblox",
        tech_alert_lua_explanation: "As a game developer too, I discovered the metaverse of Roblox and it's programming tools. <br> Roblox uses Luau, which is Lua with extended capabilities like better types support. <br><br> I made a game in the platform, it wasn't a hit but made me learn a lot of concepts about game design too. <br><br> <a href='https://bleepingdragon.com/markdown/games/DontStepThere/' target='_blank' rel='noopener noreferrer'> Check an article I made about it here</a>",
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