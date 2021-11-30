const {unicodeList} = require('./lib');

function detect_lang(text) {
    let language;
    let unicodeRange;

    text = text.replace(/\s/g,'');

    for (let unicode in unicodeList) {
        const range = unicode.split('-');
        const firstCharUnicode = text[0].charCodeAt(0);

        if (range[0] <= firstCharUnicode && firstCharUnicode <= range[1]) {
            unicodeRange = range;
            language = unicodeList[unicode];
            break;
        }
    }

    for (let i = 1; i < text.length; i++) {
        if (unicodeRange[0] <= text[i].charCodeAt(0) && text[i].charCodeAt(0) <= unicodeRange[1]) {
            continue;
        } else {
            console.log('Text contains multiple languages :( ');
            return null;
        }
    }

    return language;
}


console.log(detect_lang('ասասաս գդֆգդֆfsdfsdfsdfգ'));