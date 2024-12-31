// import CardGrid from '../components/CardGrid'
// import { Container } from 'react-bootstrap'

import EventsDisplay from "../components/EventsDisplay";

// const Events = () => {
//   return (
//     <main className="min-h-screen  py-5">
//         <CardGrid />
//     </main>
//   )
// }

// export default Events


 const  Events=()=> {
  return (
    <div className="bg-light"
    style={{
       paddingBottom:"10px"
      }}>
        <EventsDisplay />
      
    </div>
  );
}

export default Events