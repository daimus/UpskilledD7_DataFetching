# Event Handling & React Hooks

## Cara Kerja
1. Jika data belum terinisialisasi, maka data permulaan akan diambil dari API
2. Data dikelola redux dan disimpan ke local storage menggunakan redux-persist

Sehingga call API hanya terjadi 1 kali pada saat pertama membuka website (sebab kunjungan ke website selanjutnya terdapat state pada local storage)

## Instalasi
1. Clone repository
```
git clone https://github.com/daimus/UpskilledD4_EventHooks
```
2. Install dependency
```
npm install
atau
yarn install
```
3. Jalankan aplikasi
```
npm run start
atau
yarn start
```

## Demo

[Demo](https://upskilled-d7-data-fetching.vercel.app/)
