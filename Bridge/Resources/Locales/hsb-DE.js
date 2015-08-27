﻿Bridge.merge(new Bridge.CultureInfo("hsb-DE", true), {
    englishName: "Upper Sorbian (Germany)",
    nativeName: "hornjoserbšćina (Němska)",

    numberFormat: Bridge.merge(new Bridge.NumberFormatInfo(), {
        naNSymbol: "njedefinowane",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-njekónčne",
        positiveInfinitySymbol: "+njekónčne",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: ".",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "€",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: ".",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: ".",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new Bridge.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["nje","pón","wut","srj","štw","pja","sob"],
        abbreviatedMonthGenitiveNames: ["jan","feb","měr","apr","mej","jun","jul","awg","sep","okt","now","dec",""],
        abbreviatedMonthNames: ["jan","feb","měr","apr","mej","jun","jul","awg","sep","okt","now","dec",""],
        amDesignator: "",
        dateSeparator: ". ",
        dayNames: ["njedźela","póndźela","wutora","srjeda","štwórtk","pjatk","sobota"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, 'dnja' d. MMMM yyyy H.mm.ss",
        longDatePattern: "dddd, 'dnja' d. MMMM yyyy",
        longTimePattern: "H.mm.ss",
        monthDayPattern: "d. MMMM",
        monthGenitiveNames: ["januara","februara","měrca","apryla","meje","junija","julija","awgusta","septembra","oktobra","nowembra","decembra",""],
        monthNames: ["januar","februar","měrc","apryl","meja","junij","julij","awgust","september","oktober","nowember","december",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d. M. yyyy",
        shortestDayNames: ["n","p","w","s","š","p","s"],
        shortTimePattern: "H.mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ".",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
