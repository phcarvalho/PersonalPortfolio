import React, { useState } from 'react'
import Img from 'gatsby-image'

import { Container, FocusImage, ThumbnailList } from './styles'

function ImageSlider({ images }) {
  const [selected, setSelected] = useState(0)

  return (
    <>
      {images && (
        <Container>
          <FocusImage>
            <div>
              <Img
                fluid={images[selected].node.childImageSharp.fluid}
                alt={images[selected].node.base.split('.')[0]}
              />
            </div>
          </FocusImage>
          {images.length > 1 && (
            <ThumbnailList>
              {images.map(({ node }, index) => (
                <Img
                  fluid={node.childImageSharp.fluid}
                  alt={node.base.split('.')[0]}
                />
              ))}
            </ThumbnailList>
          )}
        </Container>
      )}
    </>
  )
}

export default ImageSlider
