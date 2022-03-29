import styles from './pages.module.css'

export function Contact() {
    return <div className={styles.contactDiv}>
        <img
            className={styles.shopPicture}
            src="https://media.istockphoto.com/photos/the-olde-time-candy-shop-picture-id1200207445?k=20&m=1200207445&s=612x612&w=0&h=7KFUyo2UY-CViQ7blBBK3COO7YzCL3etpUdHTARhuzU="
            alt="Zdjęcie sklepu stacjonarnego" />
        <br></br>
        <span className={styles.contactText}>
            <u>Nasz adres:</u>
            <br></br>
            Ulica Słodka 52
            <br></br>
            12-345 Cukierkowo
            <br></br>
            Nr tel: 663 773 883
            <br></br>
            email: candyshop@biuro.com
        </span>
    </div>
}