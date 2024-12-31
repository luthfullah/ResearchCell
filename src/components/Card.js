import { useState } from 'react'

import { Card as BootstrapCard, Button } from 'react-bootstrap'

const CustomCard = ({ imageSrc, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const maxLength = 100 // Maximum number of characters to show before truncating

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

  const truncatedDescription = description.slice(0, maxLength)
  const shouldTruncate = description.length > maxLength

  return (
    <BootstrapCard className="bg-white shadow-sm" >
      <div  style={{ height: '200px'}}>
        <img
          src="Picture2.png"
          alt={title}
          height={200}
          layout="fill"
          objectFit="cover"
          className="card-img-top"
          style={{objectFit:"cover"}}
        />
      </div>
      <div className="card-body d-flex flex-column flex-grow-1">
        <BootstrapCard.Title className="text-xl font-semibold mb-2">{title}</BootstrapCard.Title>
        <BootstrapCard.Text className="text-gray-600">
          {isExpanded ? description : truncatedDescription}
          {shouldTruncate && !isExpanded && '...'}
        </BootstrapCard.Text>
        {shouldTruncate && (
          <Button
            variant="link"
            onClick={toggleReadMore}
            className="text-blue-500 hover:text-blue-700"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </Button>
        )}
      </div>
    </BootstrapCard>
  )
}

export default CustomCard
