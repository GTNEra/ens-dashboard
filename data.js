
document.addEventListener("DOMContentLoaded", () => {
    const domains = [
        "gtnera.eth",
        "humanaipartner.eth",
        "ethicalhumanai.eth",
        "humanaisymbiosis.eth",
        "tetyanamode.eth",
        "ethicalaiecosystem.eth",
        "tenaiplatform.eth",
        "dynamicaipartnership.eth",
        "resonantai.eth",
        "coachai.eth",
        "servicesai.eth"
    ];

    const dashboard = document.getElementById("dashboard");
    domains.forEach(domain => {
        const div = document.createElement("div");
        div.className = "domain";
        div.innerHTML = `
            <strong>${domain}</strong><br>
            <a href="https://app.ens.domains/name/${domain}" target="_blank">View on ENS</a> |
            <a href="https://opensea.io/assets/ethereum/${domain}" target="_blank">View on OpenSea</a>
        `;
        dashboard.appendChild(div);
    });
});
