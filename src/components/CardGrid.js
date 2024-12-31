import Card from './Card'

const cardData = [
  {
    imageSrc: '/placeholder.svg?height=300&width=400',
    title: 'Card 1This is a short description for Card 1.',
    description: 'This is a short description for Card 1This is a short description for Card 1.This is a short description for Card 1.This is a short description for Card 1.This is a short description for Card 1.This is a short description for Card 1..',
  },
  {
    imageSrc: '/placeholder.svg?height=300&width=400',
    title: 'Card 2 This is a short description for Card 1.',
    description: 'This is a longer description for Card 2. It will be truncated and have a "Read More" option. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    imageSrc: '/placeholder.svg?height=300&width=400',
    title: 'Card 3 This is a short description for Card 1.v',
    description: 'Another short description for Card 3.This is a short description for Card 1.This is a short description for Card 1.This is a short description for Card 1.This is a short description for Card 1.',
  },
  {
    imageSrc: '/placeholder.svg?height=300&width=400',
    title: 'Card 4This is a short description for Card 1.',
    description: 'This is another long description for Card 4. It will also be truncated and have a "Read More" option. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    imageSrc: '/placeholder.svg?height=300&width=400',
    title: 'Card 3 This is a short description for Card 1.v',
    description: 'Another short description for Card 3.This is a short description for Card 1.This is a short description for Card 1.This is a short description for Card 1.This is a short description for Card 1.',
  },
  {
    imageSrc: '/placeholder.svg?height=300&width=400',
    title: 'Card 4This is a short description for Card 1.',
    description: 'This is another long description for Card 4. It will also be truncated and have a "Read More" option. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

 const CardGrid=()=> {
    return (
    
        <div className="container" style={{padding:"0px"}}>
            <h1> Upcomming events</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 ">
          {cardData.map((card, index) => (
            <div key={index} className="col">
              <Card {...card} />
            </div>
          ))}
        </div>
        </div>
        
    )
  }
  export default CardGrid
