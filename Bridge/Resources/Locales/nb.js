﻿Bridge.merge(new Bridge.CultureInfo("nb", true), {
    englishName: "Norwegian (Bokmål)",
    nativeName: "norsk (bokmål)",

    numberFormat: Bridge.merge(new Bridge.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-INF",
        positiveInfinitySymbol: "INF",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "kr",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 12,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new Bridge.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["søn","man","tir","ons","tor","fre","lør"],
        abbreviatedMonthGenitiveNames: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des",""],
        abbreviatedMonthNames: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des",""],
        amDesignator: "",
        dateSeparator: ".",
        dayNames: ["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "d. MMMM yyyy HH:mm:ss",
        longDatePattern: "d. MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d. MMMM",
        monthGenitiveNames: ["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember",""],
        monthNames: ["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd.MM.yyyy",
        shortestDayNames: ["sø","ma","ti","on","to","fr","lø"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
