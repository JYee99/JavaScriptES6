const koreanAir = {
  airline: "KoreanAir",
  iataCode: "KAL",
  booking: [],
  book(flightNum, name) {
    console.log(this);

    console.log(
      `${name}이 ${this.airline} 항공의 ${this.iataCode}${flightNum} 예약`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
koreanAir.book(921, "Kim"); // Kim이 KoreanAir 항공의 KAL921 예약
koreanAir.book(384, "Lee"); // Lee이 KoreanAir 항공의 KAL384 예약

const asianaAir = {
  airline: "asianaAir",
  iataCode: "ASA",
  booking: [],
};

// Call

const book = koreanAir.book;
// book.call(asianaAir, 548, "Lee"); // Lee이 asianaAir 항공의 ASA548 예약
// book.call(koreanAir, 754, "Lim"); // Lim이 KoreanAir 항공의 KAL754 예약

// Apply

const flightData = [231, "Joji"];
book.apply(asianaAir, flightData);
// console.log(asianaAir);
// Joji이 asianaAir 항공의 ASA231 예약
// {
//   airline: 'asianaAir',
//   iataCode: 'ASA',
//   booking: [ { flight: 'ASA231', name: 'Joji' } ]
// }

// Bind
const bookAsiana = book.bind(asianaAir);
bookAsiana(914, "JinYeong");
// JinYeong이 asianaAir 항공의 ASA914 예약
// {
//   airline: 'asianaAir',
//   iataCode: 'ASA',
//   booking: [
//     { flight: 'ASA231', name: 'Joji' },
//     { flight: 'ASA914', name: 'JinYeong' }
//   ]
// }

const bookAsiana55 = book.bind(asianaAir, 55);
bookAsiana55("Yeong");
// Yeong이 asianaAir 항공의 ASA55 예약
// {
//   airline: 'asianaAir',
//   iataCode: 'ASA',
//   booking: [
//     { flight: 'ASA231', name: 'Joji' },
//     { flight: 'ASA914', name: 'JinYeong' },
//     { flight: 'ASA55', name: 'Yeong' }
//   ]
// }
