export function toNPWP (number) {
  // Menghilangkan semua karakter selain angka
  const cleanNumber = number.replace(/\D/g, '');

  // Memeriksa apakah panjang angka sudah sesuai dengan NPWP (15 digit)
  if (cleanNumber.length !== 15) {
    return "Nomor NPWP tidak valid";
  }

  // Memformat angka sesuai dengan format NPWP (XX.XXX.XXX.X-XXX.XXX)
  const formattedNumber = cleanNumber.slice(0, 2) + '.' + cleanNumber.slice(2, 5) + '.' + cleanNumber.slice(5, 8) + '.' + cleanNumber.slice(8, 9) + '-' + cleanNumber.slice(9, 12) + '.' + cleanNumber.slice(12, 15);

  return formattedNumber;
}

export function limitchar (text,limit=75) {
  if (typeof text === 'string' &&
      typeof limit === 'number'
  ) {
    if (text.length >= limit) return `${text.slice(0,limit)} ...`
    if (text.length <= limit) return `${text.slice(0,limit)}`
  } else {
    return 'invalid type of parameters'
  }
}

export function toLocale(date, opt=0, c) {
  const options = [
    { year: 'numeric', month: 'numeric', day: 'numeric'},
    { year: 'numeric', month: 'long', day: 'numeric'},
    { year: 'numeric', month: 'long', day: 'numeric', weekday:'long' },
    { hour: '2-digit', minute: '2-digit', second: '2-digit'}
  ];
  const a = date.toLocaleDateString('id-ID', options[opt])
  const b = `${date.toLocaleDateString('id-ID', options[2])} | Pukul : ${date.toLocaleTimeString('id-ID', options[3])}`
  if (c === undefined) {
    return a;
  } else {
    return b
  }
}
