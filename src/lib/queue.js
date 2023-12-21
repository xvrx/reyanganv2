import { writable } from "svelte/store";

export let queueCategory = writable([
    {namaLoket: "Konsultasi Pajak", kode:"A", next_que: '2A', queue_count : 10, current_call : "2A"},
    {namaLoket: "Aplikasi Efaktur - dll", kode:"B", next_que: '3B', queue_count : 5, current_call : "2B"},
    {namaLoket: "Billing", kode:"C", next_que: '1C', queue_count : 10, current_call : "2C"},
    {namaLoket: "Efin", kode:"D", next_que: '3D', queue_count : 3, current_call : "2D"},
    {namaLoket: "Konsultasi Kehamilan", kode:"E", next_que: '', queue_count : 10, current_call : "2E"},
    {namaLoket: "Konsultasi Penyakit Dalam", kode:"F", next_que: '', queue_count : 12, current_call : "2F"},
    {namaLoket: "Debat Israel-Palestina", kode:"G", next_que: '', queue_count : 5, current_call : "2G"},
    {namaLoket: "Debat Pilihan Capres", kode:"H", next_que: '', queue_count : 10, current_call : "2G"},
])


export let que_last_call = writable('0')
export let que_on_call = writable("C")

export let dataAntrian = writable([
    {_id:'g5guerh98f98w4hf8wh4f894',nomor: "1", kode:"A", called:true, assignedTo:'A', time: new Date(), nik :'', npwp:'184864564712000', nama:'Budi Waseso',kendala:'saya lupa BAB kemarin bang' },
    {_id:'vre5rgergerg',nomor: "2", kode:"C", called:true, assignedTo:'A', time: new Date(), nik :'245245245242545', npwp:'184864564712000', nama:'Budi Waseso',kendala:'saya lupa BAB kemarin bang' },
    {_id:'etdvbtdgh5ege5rg',nomor: "3", kode:"A", called:true, assignedTo:'A', time: new Date(), nik :'245245245242545', npwp:'184864564712000', nama:'Budi Waseso',kendala:'saya lupa BAB kemarin bang' },
    {_id:'etgtge5tge5tgeg',nomor: "4", kode:"D", called:false, assignedTo:'', time: new Date(), nik :'', npwp:'184864564712000', nama:'Budi Waseso',kendala:'saya lupa BAB kemarin bang' },
    {_id:'etgtge5tge5tgeg',nomor: "5", kode:"B", called:false, assignedTo:'', time: new Date(), nik :'', npwp:'184864564712000', nama:'Budi Waseso',kendala:'saya lupa BAB kemarin bang' },
    {_id:'etgtge5tge5tgeg',nomor: "6", kode:"B", called:false, assignedTo:'', time: new Date(), nik :'', npwp:'184864564712000', nama:'Budi Waseso',kendala:'saya lupa BAB kemarin bang' },
    {_id:'ege5gegfrgreg',nomor: "7", kode:"G", called:true, assignedTo:'A', time: new Date(), nik :'245245245242545', npwp:'184864564712000', nama:'Budi Waseso',kendala:'saya lupa BAB kemarin bang' },
])