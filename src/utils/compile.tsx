const zero = '+[]';
const one = '+!![]';

const toNum = (n: number) => {
  if (n === 0) return zero;
  return Array.from({ length: n }, () => one).join(' + ');
};

const charMap = new Map<string, string>();

const fromStr = (str: string): string =>
  str
    .split('')
    .map((x) => {
      if (!charMap.has(x)) {
        const charCode = x.charCodeAt(0);
        return `([]+[])[${fromStr('constructor')}][${fromStr(
          'fromCharCode'
        )}](${toNum(charCode)})`;
      }
      return charMap.get(x);
    })
    .join('+');

charMap.set('a', `(+{}+[])[${toNum(1)}]`);
charMap.set('b', `({}+[])[${toNum(2)}]`);
charMap.set('o', `({}+[])[${toNum(1)}]`);
charMap.set('e', `({}+[])[${toNum(4)}]`);
charMap.set('c', `({}+[])[${toNum(5)}]`);
charMap.set('t', `({}+[])[${toNum(6)}]`);
charMap.set(' ', `({}+[])[${toNum(7)}]`);
charMap.set('f', `(![]+[])[${toNum(0)}]`);
charMap.set('s', `(![]+[])[${toNum(3)}]`);
charMap.set('r', `(!![]+[])[${toNum(1)}]`);
charMap.set('u', `(!![]+[])[${toNum(2)}]`);
charMap.set('i', `((+!![]/+[])+[])[${toNum(3)}]`);
charMap.set('n', `((+!![]/+[])+[])[${toNum(4)}]`);
charMap.set('S', `([]+([]+[])[${fromStr('constructor')}])[${toNum(9)}]`);
charMap.set('g', `([]+([]+[])[${fromStr('constructor')}])[${toNum(14)}]`);
charMap.set('p', `([]+(/-/)[${fromStr('constructor')}])[${toNum(14)}]`);
charMap.set('\\', `(/\\\\/+[])[${toNum(1)}]`);
charMap.set('d', `(${toNum(13)})[${fromStr('toString')}](${toNum(14)})`);
charMap.set('h', `(${toNum(17)})[${fromStr('toString')}](${toNum(18)})`);
charMap.set('m', `(${toNum(22)})[${fromStr('toString')}](${toNum(23)})`);
charMap.set(
  'C',
  `((()=>{})[${fromStr('constructor')}](${fromStr(
    'return escape'
  )})()(${charMap.get('\\')}))[${toNum(2)}]`
);

export default function getCompiledCode(code: string) {
  return code.length > 0
    ? `(()=>{})[${fromStr('constructor')}](${fromStr(code)})()`
    : '';
}
