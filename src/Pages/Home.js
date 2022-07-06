import Logo from '../logowhole.png';

export function Home() {
    return <div className="d-flex flex-column p-2 align-items-center">
        <img className="img-fluid p-2" style={{ width: "50%" }} src={Logo} alt=" Duże logo sklepu ze słodyczami" />
        <div className="card git" style={{ width: "50%" }} >
            <div className="card-body fs-4" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar vitae eros id consectetur.
                Curabitur cursus sed sem in porttitor. In arcu massa, fermentum a mauris eu, pulvinar faucibus nulla.
                Donec nec massa eget elit efficitur auctor. Duis sed convallis magna. In vel mollis purus.
                Suspendisse dapibus ullamcorper eros, sit amet facilisis justo lacinia eu. Cras sit amet ante ante.
                Donec mollis tristique urna quis hendrerit. Ut et euismod est. Mauris venenatis risus non eros volutpat gravida.
                Donec dui libero, cursus ac justo eu, suscipit fermentum orci. Nulla sed consequat eros.
                Donec metus neque, pellentesque bibendum augue eget, efficitur laoreet turpis.
            </div>
        </div>
    </div>
}

