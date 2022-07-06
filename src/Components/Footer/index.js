import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons'


export function Footer() {
    return <div className="bg-info rounded-top" >
        <div>
            <h6 className="d-flex justify-content-center pt-2  text-muted">Kontakt</h6>
        </div>
        <div className="modal-content text-center text-muted">
            <span>
                <a href="https://www.facebook.com/"><FontAwesomeIcon className="pe-2" icon={faFacebook} /></a>
                <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>

            </span>
            <span>Candy Shop<br />
                <FontAwesomeIcon className="pe-2" icon={faLocationPin} />ul. Warszawska 1/2<br />
                01-001 Warszawa<br />
                <FontAwesomeIcon className="pe-2" icon={faPhone} />656 656 656<br />
                <FontAwesomeIcon className="pe-2" icon={faAt} />candy@shop.pl<br /></span>
        </div>
        <div className="text-muted text-end pe-2">
            <span>
                Created by a-zajonc, {new Date().getFullYear()}
            </span>
        </div>
    </div>
}