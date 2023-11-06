// const hitungTotalBiaya = (harga, voucher, jarak, pajak) => {
//     let totalBiaya = harga
//     let diskon = 0
//     if (voucher === 'FAZZFOOD50' && harga >= 50000) {
//         diskon = Math.min(0.5 * harga, 50000)
//     } else if (voucher === 'DITRAKTIR60' && harga >= 25000) {
//         diskon = Math.min(0.6 * harga, 30000)
//     }
//     totalBiaya -= diskon;
//     let biayaPengiriman = 0
//     if (jarak <= 2) {
//         biayaPengiriman = 5000
//     } else {
//         biayaPengiriman = 5000 + (jarak - 2) * 3000
//     }
//     if (pajak) {
//         totalBiaya += 0.05 * harga
//     }
//     totalBiaya += biayaPengiriman
//     return totalBiaya
// }
// const hargaMakanan = 60000
// const kodeVoucher = 'FAZZFOOD50'
// const jarakPengiriman = 4
// const dikenakanPajak = true

// const totalBiaya = hitungTotalBiaya(hargaMakanan, kodeVoucher, jarakPengiriman, dikenakanPajak)
// console.log("Total Biaya: " + totalBiaya)

//dengan built-in

const hitungDiskon = (harga, voucher) => {
    if (voucher === 'FAZZFOOD50' && harga >= 50000) {
        return Math.min(harga * 0.5, 50000)
    } else if (voucher === 'DITRAKTIR60' && harga >= 25000) {
        return Math.min(harga * 0.6, 30000)
    }
    return 0
}
const hitungBiayaPengiriman = (jarak) => {
    return 5000 + Math.max(0, jarak - 2) * 3000
}
const hitungTotalBiaya = (harga, voucher, jarak, pajak, callbackDiskon, callbackBiayaPengiriman) => {
    const diskon = callbackDiskon(harga, voucher)
    const biayaPengiriman = callbackBiayaPengiriman(jarak)
    if (pajak) {
        harga += harga * 0.05
    }
    return harga - diskon + biayaPengiriman
}
const hargaMakanan = 60000
const kodeVoucher = 'FAZZFOOD50'
const jarakPengiriman = 4
const dikenakanPajak = true
const totalBiaya = hitungTotalBiaya(hargaMakanan, kodeVoucher, jarakPengiriman, dikenakanPajak, hitungDiskon, hitungBiayaPengiriman)
console.log("Total Biaya: " + totalBiaya)

