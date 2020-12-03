import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMedium,faGithub} from '@fortawesome/free-brands-svg-icons'
import {Footer,Button,Svg} from './Footer-Styles'

export default props =>
  <Footer>
      <Button
       href={`https://medium.com/p/${props.mediumId}`}
       title="Medium Article"
       provider="medium"
       >
           <Svg>
               <FontAwesomeIcon icon={faMedium} size='3x' color='#fff'/>
           </Svg>
       </Button>
       <Button
        href={`https://github.com/qb1968/${props.githubRepo}`}
        title="Github repo"
        provider="github"
        >
            <Svg>
                <FontAwesomeIcon icon={faGithub} size='3x' color='#fff'/>
            </Svg>
        </Button>
  </Footer>