
export function Contact() {
    return <div className="d-flex flex-column p-2 align-items-center">
        <img
            className="rounded"
            src="https://media.istockphoto.com/photos/the-olde-time-candy-shop-picture-id1200207445?k=20&m=1200207445&s=612x612&w=0&h=7KFUyo2UY-CViQ7blBBK3COO7YzCL3etpUdHTARhuzU="
            alt="Zdjęcie sklepu stacjonarnego" />
        <br></br>
        <div className="card align-items-center" >
            <span className="card-body fs-5" >
                <h5 className="card-title">Nasz adres</h5>
                Candy Shop<br />
                ul. Warszawska 1/2<br />
                01-001 Warszawa<br />
                Nr tel: 656 656 656<br />
                email: candy@shop.pl
            </span>
        </div>
    </div>
}