import NoContent from './no_content'
import styles from "../styles/Home.module.css";

export default function Sims({records}){
    return(
        <section>
             <div className={styles.grid}>
          {records.fields.hasOwnProperty("Simulations") === false ? (
            <NoContent />
          ) : (
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "2rem",
            }} 
            >

              <div className= {styles.videoGrid}>
              {
                
                records.fields['Title (from Simulations)'].map((title,index)=>(
                
                  
                    <div key={index} className={styles.videoCard}>
                 
                    <h3>  {title} </h3>
                    <p>{records.fields['Description (from Simulations)'][index]}</p>
                    <button className={styles.button} onClick={()=>window.open(records.fields['Url (from Simulations)'][index])}>Launch Simulation</button>
               
               </div>

                
                ))
              }            
            </div>
            </div>
          )}
          
        </div> 
        </section>
    )
}


export async function getStaticProps(context) {
    const { id } = context.query;
    const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  
    const res = await fetch(
      `https://api.airtable.com/v0/appL3eEYotbT6ZB0m/Science/${id}`,
      {
        headers: { Authorization: `Bearer ${PUBLIC_API_KEY}` },
      }
    );
  
    const records = await res.json();
  
    return {
      props: { records: records },
       // will be passed to the page component as props
       revalidate: 604800,
      
    };
  }