import styles from './pages.module.css';

export function About() {
    return <div className={styles.about}>
        <img className={styles.aboutPicture}
            src="https://png.pngitem.com/pimgs/s/56-560573_working-woman-illustration-png-transparent-png.png"
            alt="Obrazek pracowników" />
        <br></br>
        <span>Jesteśmy firmą lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum tortor justo, varius at pharetra et,
            sollicitudin at neque. Maecenas a lorem ipsum.
            Nulla facilisi. Nullam tempor nulla ut porttitor tristique.
            Donec eget nisl pellentesque, placerat urna vel, venenatis odio. Aliquam et purus massa.
            Aenean suscipit dui a lobortis hendrerit. Aliquam consectetur mauris et nunc pharetra, in suscipit elit efficitur.
            In pharetra ultricies enim sit amet pretium. Cras in semper nunc. Ut sed venenatis nunc, nec interdum nisi.
            Aenean ante enim, rutrum id ullamcorper sed, interdum eu massa. Quisque volutpat libero at augue lacinia sodales.
            Donec ut rhoncus sem</span>
    </div>

}