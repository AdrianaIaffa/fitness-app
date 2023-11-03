
export async function getServerSideProps(context) {
    const { id } = context.query;
    const res = await fetch(`${process.env.NEXTAUTH_URL}/workouts/${id}`);
    const workout = await res.json();
    console.log(workout);
  
    return {
      props: { workout },
    };
  }
  