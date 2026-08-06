class Peserta {
    constructor(nama, umur, proglat, nilai)
    {
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
        this.nilai = nilai;
    }
    //getter
    get nilai(){
        return this._nilai
    }
    //setter
    set nilai(nilaiBaru){
        if (nilaiBaru > 100){
            console.log('Nilai tidak boleh diatas 100!');
            this._nilai = 100;
        }else if (nilaiBaru < 0){
            console.log('Nilai tidak boleh dibawah 0!');
            this._nilai = 0;
        }else{
            this._nilai = nilaiBaru;
        }
    }
    //method
    grade() {
        if(this.nilai >=90) {
            console.log(`${this.nama} ${this.umur} ${this.proglat} : Sangat baik ${this.nilai}`);
        }else if(this.nilai >=80) {
            console.log(`${this.nama} ${this.umur} ${this.proglat} : Baik ${this.nilai}`);
        }else if(this.nilai >=70) {
            console.log(`${this.nama} ${this.umur} ${this.proglat} : Cukup ${this.nilai}`);
        }else if(this.nilai >=60) {
            console.log(`${this.nama} ${this.umur} ${this.proglat} : Kurang ${this.nilai}`);
        }else{
            console.log(`${this.nama} ${this.umur} ${this.proglat} : Tidak lulus ${this.nilai}`);
        }
    }
}

module.exports = Peserta;