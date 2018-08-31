var current_locale = 'fr-CA'; // default locale
var accounting_options_locale = {};
accounting_options_locale[current_locale] = { symbol: "$", precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };

$(document).ready(function () {

    var getLocaleFromURL = function () {
        var pageURL = decodeURIComponent(window.location.pathname);
        var URLVariables = pageURL.split('/');
        if (URLVariables.length > 2) {
            return URLVariables[1];
        }
        else {
            return 'en';
        }
    };

    //current_locale = getLocaleFromURL(); // Keep default for now

    var setupAccountingOptionsLocale = function () {
        accounting_options_locale['af']     = { symbol: "R",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['ar']     = { symbol: "$",    precision: 2, decimal: ".", thousand: "،", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['az']     = { symbol: "AZN",  precision: 2, decimal: ".", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['be']     = { symbol: "$",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['bg']     = { symbol: "лв.",  precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['bn']     = { symbol: "₹",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s %v", neg: "(%s %v)", zero: "-" } };
        accounting_options_locale['bs']     = { symbol: "KM",   precision: 2, decimal: ",", thousand: ".", format: { pos: "%v%s", neg: "(%v%s)", zero: "-" } };
        accounting_options_locale['ca']     = { symbol: "€",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['cs']     = { symbol: "Kč",   precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['cy']     = { symbol: "£",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['da']     = { symbol: "DKK",  precision: 2, decimal: ",", thousand: ".", format: { pos: "%s %v", neg: "(%s %v)", zero: "-" } };
        accounting_options_locale['de-AT']  = { symbol: "€",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%s %v", neg: "(%s %v)", zero: "-" } };
        accounting_options_locale['de-CH']  = { symbol: "CHF",  precision: 2, decimal: ".", thousand: "'", format: { pos: "%s %v", neg: "(%s %v)", zero: "-" } };
        accounting_options_locale['de-DE']  = { symbol: "€",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['de']     = { symbol: "€",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['el']     = { symbol: "€",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['en-AU']  = { symbol: "$",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['en-CA']  = { symbol: "$",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['en-GB']  = { symbol: "£",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['en-IE']  = { symbol: "€",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['en-IN']  = { symbol: "₹",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['en-NZ']  = { symbol: "$",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['en-US']  = { symbol: "$",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['en-ZA']  = { symbol: "R",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['en']     = { symbol: "$",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['eo']     = { symbol: "€",    precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['es-419'] = { symbol: "¤",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['es-AR']  = { symbol: "$",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['es-CL']  = { symbol: "$",    precision: 0, decimal: ",", thousand: ".", format: { pos: "%s %v", neg: "(%s %v)", zero: "-" } };
        accounting_options_locale['es-CO']  = { symbol: "$",    precision: 0, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['es-CR']  = { symbol: "¢",    precision: 0, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['es-EC']  = { symbol: "$",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['es-ES']  = { symbol: "€",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['es-MX']  = { symbol: "$",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['es-PA']  = { symbol: "B/.",  precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['es-PE']  = { symbol: "S/.",  precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['es-US']  = { symbol: "$",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['es-VE']  = { symbol: "Bs.",  precision: 2, decimal: ",", thousand: ".", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['es']     = { symbol: "€",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['et']     = { symbol: "€",    precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['eu']     = { symbol: "€",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['fa']     = { symbol: "﷼",    precision: 0, decimal: "٫", thousand: "٬", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['fi']     = { symbol: "€",    precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['fr-CA']  = { symbol: "$",    precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['fr-CH']  = { symbol: "sFr.", precision: 2, decimal: ".", thousand: "'", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['fr-FR']  = { symbol: "€",    precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['fr']     = { symbol: "€",    precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['gl']     = { symbol: "€",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['he']     = { symbol: "₪",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s %v", neg: "(%s %v)", zero: "-" } };
        accounting_options_locale['hi-IN']  = { symbol: "₹",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['hi']     = { symbol: "₹",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['hr']     = { symbol: "kn",   precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['hu']     = { symbol: "Ft",   precision: 0, decimal: ",", thousand: "",  format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['id']     = { symbol: "Rp",   precision: 2, decimal: ",", thousand: ".", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['is']     = { symbol: "kr.",  precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['it-CH']  = { symbol: "CHF",  precision: 2, decimal: ".", thousand: "'", format: { pos: "%s %v", neg: "(%s %v)", zero: "-" } };
        accounting_options_locale['it']     = { symbol: "€",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['ja']     = { symbol: "円",   precision: 0, decimal: ".", thousand: ",", format: { pos: "%v%s", neg: "(%v%s)", zero: "-" } };
        accounting_options_locale['ka']     = { symbol: "ლ",   precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['km']     = { symbol: "៛",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['kn']     = { symbol: "$",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['ko']     = { symbol: "원",   precision: 0, decimal: ".", thousand: ",", format: { pos: "%v%s", neg: "(%v%s)", zero: "-" } };
        accounting_options_locale['lb']     = { symbol: "€",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['lo']     = { symbol: "Kip",  precision: 2, decimal: ".", thousand: ",", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['lt']     = { symbol: "€",    precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['lv']     = { symbol: "€",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['mk']     = { symbol: "MKD",  precision: 2, decimal: ".", thousand: ",", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['ml']     = { symbol: "$",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['mn']     = { symbol: "төг.", precision: 2, decimal: ".", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['mr-IN']  = { symbol: "₹",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['ms']     = { symbol: "RM",   precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['nb']     = { symbol: "kr",   precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['ne']     = { symbol: "$",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['nl']     = { symbol: "€",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%s %v", neg: "(%s %v)", zero: "-" } };
        accounting_options_locale['nn']     = { symbol: "kr",   precision: 2, decimal: ".", thousand: ",", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['or']     = { symbol: "₹",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['pa']     = { symbol: "$",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['pl']     = { symbol: "zł",   precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['pt-BR']  = { symbol: "R$",   precision: 2, decimal: ",", thousand: ".", format: { pos: "%s %v", neg: "(%s %v)", zero: "-" } };
        accounting_options_locale['pt']     = { symbol: "€",    precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['rm']     = { symbol: "CHF",  precision: 2, decimal: ".", thousand: "'", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['ro']     = { symbol: "RON",  precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['ru']     = { symbol: "руб.", precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['sk']     = { symbol: "€",    precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['sl']     = { symbol: "€",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['sq']     = { symbol: "LEK",  precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['sr']     = { symbol: "ДИН",  precision: 2, decimal: ".", thousand: ",", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['sv-SE']  = { symbol: "kr",   precision: 2, decimal: ",", thousand: "",  format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['sv']     = { symbol: "kr",   precision: 2, decimal: ",", thousand: "",  format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['sw']     = { symbol: "/=",   precision: 2, decimal: ",", thousand: ".", format: { pos: "%v%s", neg: "(%v%s)", zero: "-" } };
        accounting_options_locale['ta']     = { symbol: "₹",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['th']     = { symbol: "บาท",  precision: 2, decimal: ".", thousand: ",", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['tl']     = { symbol: "₱",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['tr']     = { symbol: "₺",    precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['tt']     = { symbol: "сум",  precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['ug']     = { symbol: "CN¥",  precision: 2, decimal: ".", thousand: ",", format: { pos: "%s %v", neg: "(%s %v)", zero: "-" } };
        accounting_options_locale['uk']     = { symbol: "грн.", precision: 2, decimal: ",", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['ur']     = { symbol: "Rs",   precision: 2, decimal: ".", thousand: ",", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['uz']     = { symbol: "sum.", precision: 2, decimal: ".", thousand: " ", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['vi']     = { symbol: "đồng", precision: 2, decimal: ",", thousand: ".", format: { pos: "%v %s", neg: "(%v %s)", zero: "-" } };
        accounting_options_locale['wo']     = { symbol: "$",    precision: 2, decimal: ".", thousand: ",", format: { pos: "%s%v", neg: "(%s%v)", zero: "-" } };
        accounting_options_locale['zh-CN']  = { symbol: "CN¥",  precision: 2, decimal: ".", thousand: ",", format: { pos: "%s %v", neg: "(%s %v)", zero: "-" } };
        accounting_options_locale['zh-HK']  = { symbol: "HK$",  precision: 2, decimal: ".", thousand: ",", format: { pos: "%s %v", neg: "(%s %v)", zero: "-" } };
        accounting_options_locale['zh-TW']  = { symbol: "NT$",  precision: 2, decimal: ".", thousand: ",", format: { pos: "%s %v", neg: "(%s %v)", zero: "-" } };
        accounting_options_locale['zh-YUE'] = { symbol: "HK$",  precision: 2, decimal: ".", thousand: ",", format: { pos: "%s %v", neg: "(%s %v)", zero: "-" } };
    };

    setupAccountingOptionsLocale();

});
