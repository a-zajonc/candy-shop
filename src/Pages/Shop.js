import { Link } from 'react-router-dom';

export function Shop() {
    return <div className="p-2">
        <h2 className="text-center p-2">Wybierz kategorie:</h2>
        <div className='container'>
            <div className="row pb-1">
                <div className="col d-flex justify-content-end">
                    <Link to="/sklep/cukierki" className='text-decoration-none'>
                        <img className="rounded" style={{ height: "250px", width: "250px" }} aria-label="Cukierki"
                            src="https://www.kindpng.com/picc/m/39-390697_candy-png-candy-icon-sweets-emoji-transparent-png.png"
                            alt="Cukierki" />
                        <h6 className='d-flex justify-content-center text-dark'>Cukierki</h6>
                    </Link>
                </div>
                <div className="col d-flex justify-content-start">
                    <Link to="/sklep/przekaskislone" className='text-decoration-none'>
                        <img className="rounded" style={{ height: "250px", width: "250px" }} aria-label="Przekąski słone"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBZ2t6ct-s4hHIxlRmjowVRIMuQ2ga3_5o3-BOedfEW4Q7K_nvsGYNPBCOPQ-4pMHtj0&usqp=CAU"
                            alt="Przekąski słone" />
                        <h6 className='d-flex justify-content-center text-dark'>Przekąski słone</h6>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className='col d-flex justify-content-end'>
                    <Link to="/sklep/czekoladyibatoniki" className='text-decoration-none'>
                        <img className="rounded" style={{ height: "250px", width: "250px" }} aria-label="Czekolady i batoniki"
                            src="https://www.kindpng.com/picc/m/225-2254356_candy-bar-clipart-transparent-background-chocolate-bar-clipart.png"
                            alt="Czekolady i batoniki" />
                        <h6 className='d-flex justify-content-center text-dark'>Czekolady i batoniki</h6>
                    </Link>
                </div>
                <div className="col d-flex justify-content-start">
                    <Link to="/sklep/napoje" className='text-decoration-none bg-gray'>
                        <img className="rounded" style={{ height: "250px", width: "250px" }} aria-label="Napoje słodzone"
                            src="https://www.seekpng.com/png/detail/18-186518_cartoon-soda-png-svg-royalty-free-download-soda.png"
                            alt="Napoje słodzone" />
                        <h6 className='d-flex justify-content-center text-dark'>Napoje słodzone</h6>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}