import Image from "next/image"
import styles from '../styles/Home.module.css'


export default function BuyNotebooks() {
    return (
        <section style={{
            display: 'flex',
            bottom: '0',
            flexDirection: 'column',
            backgroundColor: '#2944D1',
            color: 'white',
            paddingTop: '0.8rem',
            paddingBottom: '1rem',
            width: '100%',
            alignItems: 'center',
        }}>
            <div style={{
                width: '80%',
            }}>
            <Image src="/proud.webp" width={100} height={100} alt={"Support cat"} />
                <h1 style={{
                    fontSize: '1.5rem',
                }}>Y☀️ur Supp❄️rt </h1>
            <p style={{
                fontSize: '1.15rem',
                fontWeight: '300',
                lineHeight: '1.5',
            }}>
            We sincerely hope nae raste helps with your studies. Our mission is to provide high-quality learning resources from around the world right at your fingertips. If you use this website to learn and study, considering buying our notebooks. This will support for the maintenance and growth of nae raste.
            </p>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem',
                justifyContent: 'flex-end',
            }}>
                
                <button style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: 'solid 1px white',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.15rem',
                    marginTop: '1rem',
                    cursor: 'pointer',
                }}>
                    Learn More
                </button>
                <button style={{
                    backgroundColor: 'white',
                    color: 'black',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.15rem',
                    marginTop: '1rem',
                    cursor: 'pointer',
                }} onClick={()=> window.open('https://wa.me/c/917004606792')}>
                    Buy Notebooks 
                </button>
            </div>

            </div>
            
        </section>
    )
}