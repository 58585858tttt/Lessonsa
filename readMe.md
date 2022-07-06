//Export-ը նախատեսված է մի ֆայլից մյուս ֆայլ ինֆորմացիա(օբյեկտ, փոփոխական, ֆունկցիա, զանգված ․․․ ) արտահանելու համար։
Նշված ինֆորմացիան արտահանելիս դիմացից նշվում է export բառը, կամ էջի վերջում նշվում է արտահանվող ինֆորմացիաների անունները։ Օրինակ՝ 
**JS**
Export {info1, info2}

Այն ֆայլից, որտեղից պետք է հասանելիություն ունենալ նշված ինֆորմացիային գրում ենք import բառը,
հետևյալ կիրառություններով

import ինֆո1 from "module-name";// Կվերցնի այն ինֆորմացիան, որ export է արված defaut գրվածքով

1-ին ֆայլից | export //script.js
export default function sos2() {
    return 'Help2'
}

2-րդ ֆայլից | import
import ինֆո1 from "1-in fayli hascen//orinak./script.js"
ինֆո1-ը այն անունն է, որով կօգտագործվի արտահանված ինֆորմացիան

import * as տարբերակ2 from "1-in fayli hascen//orinak./script.js";
Ինչան export կա առաջին ֆայլում ներմուծում է տարբերակ2 անունով, որը կիրառելիս պետք է նշել տարբերակ2․info1


1-ին ֆայլից | export //script.js
export {info1, info2, info3...}

2-րդ ֆայլից | import
import * as տարբերակ2 from "1-in fayli hascen//orinak./script.js";
ինֆո1-ը այն անուններից մեկն է, որով արտահանվել է ինֆորմացիան

import { ինֆօ1 } from "1-in fayli hascen//orinak./script.js";;
Կոնկտրետ նշված ինֆորմացիայի ներմուծում

import { ինֆօ1 as մեկայլանուն } from "1-in fayli hascen//orinak./script.js";
Կոնկտրետ նշված ինֆորմացիայի ներմուծում մեկ այլ անունով

import { export1 , export2 } from "module-name";
Կոնկտրետ մի քանի նշված ինֆորմացիայի ներմուծում


import defaultExport, { ինֆո1, ինֆո2 as մեկայլանուն } from  "1-in fayli hascen//orinak./script.js";
Առանձնացվում է դեֆոլթ արժեքը, ներմուծում վերը նշված ձևերով

import ինչ-որԱնուն, * as name from "1-in fayli hascen//orinak./script.js";
Առանձնացվում է դեֆոլթ արժեքը ինչ-որ անվամբ, ներմուծում վերը նշված ձևերով
