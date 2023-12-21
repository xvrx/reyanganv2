import { writable } from "svelte/store"

export let userModel = writable({
    user : '817931767',
    role : 'admin',
    nama : 'Azriel Situmorang',
    unseenNotif : [
      {
        issueID : '23r344f354egrg',
        nip : '810202918',
        title : 'Penambahan Data Pelayanan',
        desc : 'ditambahkan data sesuai dengan anu',
        status : true,
        file_address: '817931767/chasing/around'
      }
    ]
  })


  export let petugas = writable([
    {nama : 'Azriel', value:"Azriel Situmorang", nip : '817931767'},
    {nama : 'Adila', value:"Adila", nip : '810202918'},
    {nama : 'Wiji', value:"M. Wiji Kurniawan", nip : '06002942'},
    {nama : 'Satrio', value:"Satrio K.I.W", nip : '060075288'},
]
)