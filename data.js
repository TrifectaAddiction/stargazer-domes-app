// Seed data from "Trifecta Meets Stargazer Domes — Design and Purchase List" (7 pp).
// q1 = qty per dome, q2 = both domes. unit = CAD each (null = quote required). note flags.
window.SEED=[
{id:"tim",name:"Timberustic pieces",note:"Request one brown/walnut finish throughout. 'Site $' = displayed base-variant price, currency unverified.",items:[
["Statement floor lamp — Varellis (style match)",1,2,2165,"54H × 11W in; sample brown finish. Identify exact lamp from screenshot first.","unverified"],
["Twin XL beds / headboards — Raw Flow Zen (custom)",2,4,null,"38 × 80 in mattress; flush outside edges, removable headboards"],
["Bedside tables — Flowtwist",2,4,815,"14W × 20H in target; depth to confirm","unverified"],
["Desk / vanity — Arvello",1,2,1975,"50W × 19D × 30H in target","unverified"],
["Vanity shelves — Elvaria SPA254336",2,4,365,"22L × 8D in target","unverified"],
["Vanity mirror — Solaceform",1,2,425,"28W × 30H in target","unverified"],
["Small lounge table — Lunara",1,2,960,"18W × 24H in target; confirm footprint","unverified"],
["Low storage cabinet — custom low divided sideboard",1,2,null,"Target 48W × 16D × 30H in; measure first"]]},
{id:"seat",name:"Seating, rugs & mattresses",note:"Verified-CAD seating + rug subtotal: $797.98/dome, $1,595.96 both.",items:[
["Lounge chairs — IKEA EKENÄSET walnut / Kilanda light beige",2,4,299,"65W × 74D × 75H cm"],
["Vanity chair — IKEA ODGER white/beige",1,2,120,"45W × 51D × 81H cm"],
["Faux-fur bedside rugs — IKEA TOFTLUND white",2,4,39.99,"90 × 150 cm, synthetic, machine washable"],
["Rug underlays — marble-compatible non-slip",2,4,null,"Cut to rug outline"],
["Twin XL mattresses — hospitality supplier",2,4,null,"38 × 80 in; matched height; model to test"]]},
{id:"king",name:"King mode (dome two)",note:"Dome two only. No extra king mattress assumed. All costs need quotes.",items:[
["Joining kit — manufacturer-approved",0,1,null,"Flush frame edges, matched mattresses"],
["Bridge / topper (optional)",0,1,null,"Compatible comfort accessory"],
["King sheet sets",0,3,null,""],["King duvet covers",0,3,null,""],["King duvet insert",0,1,null,""],
["King mattress protectors (if required)",0,2,null,""]]},
{id:"lin",name:"Linens & towels",note:"Pillowcase totals include any supplied with sheet sets.",items:[
["Twin XL sheet sets",6,12,null,"3 per bed; white washable cotton"],["Duvet covers",6,12,null,"3 per bed"],
["Duvet inserts",2,4,null,"Washable; suitable warmth"],["Sleeping pillows",4,8,null,"Comfort options"],
["Pillowcases",8,16,null,"Total target"],["Mattress protectors",4,8,null,"2 per mattress, waterproof"],
["Pillow protectors",8,16,null,"2 per pillow"],["Bed throws",2,4,null,"No real fur"],
["Decorative cushion + cover",2,4,null,"Removable washable cover"],["Bath towels",6,12,null,"3 per client"],
["Hand towels",6,12,null,""],["Washcloths",12,24,null,"6 per client"],["Dark makeup cloths",4,8,null,""],
["Hot-tub towels",4,8,null,"2 per client"]]},
{id:"light",name:"Lighting & fit-out",note:"",items:[
["Bedside reading lights",2,4,null,"One reachable light per bed"],["Desk lighting",1,2,null,"Compact, warm dimmable"],
["Glass, curtain & shelving support",1,2,null,"Site measure"]]},
{id:"touch",name:"Finishing touches & yoga",note:"",items:[
["Robes",4,8,null,"2 per client incl. spare"],["Bath mats",3,6,null,""],["Luggage racks",2,4,null,"Protect floor"],
["Hangers",12,24,null,"6 per client"],["Laundry hamper",1,2,null,""],["Lidded room bin",1,2,null,""],
["Water carafe + 2 tumblers",1,2,null,""],["Welcome tray",1,2,null,""],["Yoga mats",2,4,null,""],
["Yoga blocks",4,8,null,"Storage basket if needed"],["Yoga straps",2,4,null,"Washable"]]},
{id:"kit",name:"Kitchenette (optional, minimal)",optional:true,note:"Optional and minimal — Rob already cooks outdoors over fire.",items:[
["Bar fridge",1,2,null,""],["Electric kettle",1,2,null,""],["Coffee maker",1,2,null,""],
["Small storage unit",1,2,null,"Measure wall space"]]},
{id:"out",name:"Outdoor kitchen upgrades",note:"Builds on Rob's existing outdoor fire setup. Prices to be quoted.",items:[
["Covered prep counter",1,1,null,"Shared"],["Cookware storage (weatherproof)",1,1,null,""],
["Fire extinguisher",1,1,null,"Rated for cooking fires"],["Fire blanket",1,1,null,""]]},
{id:"build",name:"Build work",checklistOnly:true,note:"Checklist only — no prices.",items:[
["Interior finishing",1,2,null,""],["Insulation",1,2,null,""],["Heating",1,2,null,""],["Power / electrical",1,2,null,""],
["Water & drainage",1,2,null,""],["Permits (RDCO / BC)",1,2,null,""],["Flooring (marble-look)",1,2,null,""]]}
];
