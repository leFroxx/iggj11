export default (key, params = {}) => {
    let localized = dictionary[key];

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
    "card_agreement_title": "Bestätigen",
    "card_offer_raise_title": "Angebot",
    "card_offer_holiday_title": "",
    "card_offer_bonus_title": "",
    "card_declinement_title": "",
    "card_attack_description": "",
    "card_agreement_description": "Angebot annehmen",
    "card_offer_raise_description": "Dem Gegner ein Angebot machen",
    "card_offer_holiday_description": "",
    "card_offer_bonus_description": "",
    "card_declinement_description": "",
    "card_attack_description": "",
    "stat_moral": "Moral",
    "stat_wealth": "Vermögen",
    "stat_reputation": "Ansehen",
    "player_boss": "Arbeitgeber",
    "player_worker": "Arbeitnehmer",
    "phase_negotiation": "Verhandlungsphase",
    "phase_dispute": "Arbeitskampfphase"
}
