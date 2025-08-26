# @t8/date-format

*Locale-agnostic date formatting utilities*

## Date formatting

```js
formatDate(new Date(), '{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}');
// = 2022-07-19 12:34:56
```

### List of placeholders

| Placeholder | Value |
|-------------|-------|
| `{Y}` | Year |
| `{YY}` | Year, zero-prefixed when shorter than 2 digits |
| `{YYYY}` | Year, zero-prefixed when shorter than 4 digits |
| `{yy}` | Year, last 2 digits zero-prefixed when shorter than 2 digits |
| `{YE}` | Year of a calendar era (specified by AD/BC or CE/BCE) |
| `{E}` | Christian era: 1 for AD, -1 for BC |
| `{CE}` | Common Era: 1 for CE, -1 for BCE |
| `{M}` | Month |
| `{MM}` | Month, zero-prefixed when shorter than 2 digits |
| `{D}` | Day |
| `{DD}` | Day, zero-prefixed when shorter than 2 digits |
| `{H}` | Hours |
| `{HH}` | Hours, zero-prefixed when shorter than 2 digits |
| `{h}` | 12h-clock hours |
| `{hh}` | 12h-clock hours, zero-prefixed when shorter than 2 digits |
| `{a}` | Day period: AM/PM |
| `{m}` | Minutes |
| `{mm}` | Minutes, zero-prefixed when shorter than 2 digits |
| `{s}` | Seconds |
| `{ss}` | Seconds, zero-prefixed when shorter than 2 digits |
| `{ms}` | Milliseconds, zero-prefixed when shorter than 3 digits |
| `{tz}` | Time zone |
| `{iso}` | Local time zone ISO date string |
| `{isoDate}` | Date (= `{YYYY}-{MM}-{DD}`) |
| `{isoTime}` | Time (= `{HH}:{mm}:{ss}`) |
| `{isoTimeMs}` | Time with milliseconds |

The following unformatted date components are also available as placeholder values: `timestamp`, `year`, `month`, `day`, `hours`, `hours12` (12h-clock hours), `minutes`, `seconds`, `milliseconds`, `weekDay`, `timezoneOffset`, `input` (the first argument of the `formatDate()` call).

### Formatting with a user-defined locale

```js
formatDate(new Date(), customLocale.fullDate);
// = þriðjudagur 19. júlí 2022
```

```js
// custom-locale.js (outside the package)
const customWeekDays = [
    'sunnudagur',
    'mánudagur',
    'þriðjudagur',
    'miðvikudagur',
    'fimmtudagur',
    'föstudagur',
    'laugardagur',
];

const customMonths = [
    'janúar',
    'febrúar',
    'mars',
    'apríl',
    'maí',
    'júní',
    'júlí',
    'ágúst',
    'september',
    'október',
    'nóvember',
    'desember',
];

export const customLocale = {
    fullDate: {
        template: '{WD} {D}. {MMM} {Y}',
        transform: {
            WD: ({weekDay}) => customWeekDays[weekDay],
            MMM: ({month}) => customMonths[month],
        },
    },
};
```

### Dynamic templates

```js
let eraTemplate = ({E}) => E === 1 ? 'AD {YE}' : '{YE} BC';

formatDate('2022-07-19', eraTemplate);
// = AD 2022

formatDate(-62200000000000, eraTemplate);
// = 3 BC
```

## Durations

```js
formatDuration(123456);
// = 2'03.456"
```
