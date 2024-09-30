const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function hitung() {
  rl.question("Masukkan Nama kamu : ", (nama) => {
     rl.question("Masukkan Tanggal Lahir (1-31) : ", (tanggal) => {
     rl.question("Masukkan Bulan Lahir (1-12) : ", (bulan) => {
     rl.question("Masukkan Tahun Lahir : ", (tahun) => {
        const tanggalLahir = new Date(parseInt(tahun), parseInt(bulan) - 1, parseInt(tanggal))
        const hariIni = new Date()

        const lamaHidupMs = hariIni - tanggalLahir
        const lamaHidupHari = Math.floor(lamaHidupMs / (1000 * 60 * 60 * 24))

        const usiaTahun = hariIni.getFullYear() - tanggalLahir.getFullYear()
        const usiaBulan = (lamaHidupHari % 365) / 30
                    
        console.log(`\nHalo ${nama}`)
        console.log(`Anda lahir pada: ${tanggalLahir.toDateString()}`)
        console.log(`Anda telah hidup selama: ${lamaHidupHari} hari (${Math.floor(usiaBulan)} bulan)`)
        console.log(`Usia Anda: ${usiaTahun} tahun :)`)

        pilihinput() /** when input 1 bakal mengulang data di atas **/
                })
            })
        })
    })
}
/** input log **/
function pilihinput() {
    rl.question("\nIngin mengulanginya?\n1. Ya\n2. Tidak\nPilih (1/2): ", (pilihan) => {
        if (pilihan === '1') {
            console.clear() 
            hitung() 
        } else if (pilihan === '2') {
            console.log("Terimakasih :)")
            rl.close()
            process.exit()
        } else {
            console.log("Pilihan tidak valid. Silakan pilih 1 atau 2.")
            pilihinput()
        }
    })
}
/** jalanin program yg paling atas **/
hitung()
