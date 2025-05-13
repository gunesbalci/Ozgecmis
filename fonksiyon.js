function sayfayaGit(sayfaID)
{
    document.getElementById(sayfaID).scrollIntoView();
}

function birSonrakiProje()
{
    let wrapper = document.getElementById("ana-bölüm-projeler-içerikler-wrapper");
    const scrollAmount = wrapper.offsetWidth;
    wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

function birÖncekiProje()
{
    let wrapper = document.getElementById("ana-bölüm-projeler-içerikler-wrapper");
    const scrollAmount = wrapper.offsetWidth;
    wrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
}