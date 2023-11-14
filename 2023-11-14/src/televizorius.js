class Televizorius {
    kanalas = 1;
    garsas = 50;

    constructor(gamintojas) {
        this.gamintojas = gamintojas;
    }

    setGarsas(lygis) {
        this.garsas = lygis > 100 || lygis < 0 ? 50 : lygis;
    }

    setKanalas(kanalas) {
        this.kanalas = kanalas > 50 || kanalas <= 0 ? 1 : kanalas;
    }

    factoryReset() {
        this.kanalas = 1;
        this.garsas = 50;
    }

    statusas() {
        return `Televizorius ${this.gamintojas} šiuo metu rodo ${this.kanalas} kanalą. Garso lygis ${this.garsas}`;
    }
}

export default Televizorius;