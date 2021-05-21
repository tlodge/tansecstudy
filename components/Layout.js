

export default function Layout({id, children}) {
    console.log(id);
    return (
      <>{children}</>
    );
  }
  
export async function getServerSideProps(context) {
    console.log("ah --- meger");
    return {
      props: {id: Math.round(Math.random()  * 500)}
    }
  }
  