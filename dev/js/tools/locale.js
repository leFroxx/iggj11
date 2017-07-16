export default (key, params = {}) => {
    let localized = dictionary[key] || "[" + key + JSON.stringify(params) + "]";

    // insert params
    Object.forEach(params, (k, v) => {
        const varString = delimiter_start + k + delimiter_end;
        const regex = new RegExp(varString, 'g');

        localized = localized.replace(regex, v);
    });

    return localized;
}
const delimiter_start = "§";
const delimiter_end = ";";

const dictionary = {
    "card_agreement_title": "Einigung",
    "card_offer_raise_title": "Angebot",
    "card_offer_holiday_title": "Urlaubstage",
    "card_offer_bonus_title": "Rentenzuschuss",
    "card_declinement_title": "Verhandlung gescheitert",
    "card_attack_1_title": "Öffentlichkeitsarbeit",
	"card_attack_2_title": "Leiharbeiter",
	"card_attack_3_title": "Aussperrung",
	"card_attack_4_title": "Entlassungen androhen",
	"card_attack_5_title": "Personalabbau",
	"card_attack_6_title": "Loyalität steigern",
	"card_attack_7_title": "Streikverzicht",
	"card_attack_8_title": "Warnstreik",
	"card_attack_9_title": "Schwerpunktstreik",
	"card_attack_10_title": "Flächenstreik",
	"card_attack_11_title": "Sympathiestreik",
    "card_agreement_description": "Angebot annehmen",
    "card_offer_raise_description": "Dem Gegner ein Angebot machen",
    "card_offer_holiday_description": "Über die Urlaubstage verhandeln",
    "card_offer_bonus_description": "Ein Angebot zum Rentenzuschuss machen",
    "card_declinement_description": "In den Arbeitskampf übergehen",
    "card_attack_1_description": "Die öffentliche Meinung gewinnen",
	"card_attack_2_description": "Leiharbeiter einstellen um finanziell abgesichert zu sein",
	"card_attack_3_description": "Mitarbeiter aussperren und keinen Lohn zahlen",
	"card_attack_4_description": "Senkt die Moral der Streikenden",
	"card_attack_5_description": "Personal entlassen",
	"card_attack_6_description": "Nicht-streikende Mitarbeiter belohnen",
	"card_attack_7_description": "Guten Willen zeigen und auf Streik verzichten",
	"card_attack_8_description": "Streikbereitschaft demonstrieren",
	"card_attack_9_description": "Gezielt Abteilungen bestreiken um Umsätze zu drosseln",
	"card_attack_10_description": "Alle Gewerkschafsmitglieder legen die Arbeit nieder",
	"card_attack_11_description": "Streik in anderer Branche durchführen",
    "stat_moral": "Moral",
    "stat_wealth": "Finanzen",
    "stat_reputation": "Ansehen",
    "player_boss": "Arbeitgeberverband",
    "player_worker": "Gewerkschaft",
    "phase_negotiation": "Verhandlungsphase",
    "phase_dispute": "Arbeitskampfphase"
}
