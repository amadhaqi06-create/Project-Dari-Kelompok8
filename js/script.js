document.addEventListener("DOMContentLoaded", function () {

    const inputTagihan = document.getElementById("input-tagihan");
    const inputOrang   = document.getElementById("input-orang");
    const btnReset     = document.getElementById("btn-reset");
    const hasil        = document.getElementById("hasil");
    const statistik    = document.getElementById("statistik");

    if (!inputTagihan) return;

    let jumlahHitung = 0;

    function hitungPatungan(persenTip) {
        if (inputTagihan.value === "" || inputOrang.value === "") {
            hasil.textContent = "Masukkan tagihan & jumlah orang!";
            return;
        }

        const tagihan = Number(inputTagihan.value);
        const orang   = Number(inputOrang.value);

        if (tagihan < 0) {
            hasil.textContent = "Tagihan tidak boleh negatif!";
            return;
        }

        if (orang <= 0) {
            hasil.textContent = "Jumlah orang tidak valid!";
            return;
        }

        const nilaiTip   = tagihan * (persenTip / 100);
        const totalBayar = tagihan + nilaiTip;
        const perOrang   = totalBayar / orang;

        hasil.textContent = "Per orang bayar: Rp " +
                            Math.round(perOrang).toLocaleString('id-ID');

        jumlahHitung++;
        statistik.textContent = "Riwayat transaksi dihitung: " + jumlahHitung;
    }

    document.getElementById("btn-tip-0").addEventListener("click",  () => hitungPatungan(0));
    document.getElementById("btn-tip-5").addEventListener("click",  () => hitungPatungan(5));
    document.getElementById("btn-tip-10").addEventListener("click", () => hitungPatungan(10));
    document.getElementById("btn-tip-15").addEventListener("click", () => hitungPatungan(15));

    btnReset.addEventListener("click", function () {
        inputTagihan.value = "";
        inputOrang.value   = "";
        hasil.textContent  = "Per orang bayar: Rp 0";
    });
});