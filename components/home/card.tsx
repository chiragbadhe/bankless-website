import React from 'react';

import { Text, Link, Divider } from '@chakra-ui/react';

interface I_Props {
    img: string,
    title: string,
    text: string,
    href: string
}

class Card extends React.PureComponent<I_Props> {

    render() { 
        return (
            <div className='card'>
                <div className='card-top' style={{position: 'relative', backgroundImage: `url(${this.props.img})`, backgroundSize:'cover'}}>
                </div>
                <div className='card-bottom'>
                    <Text fontSize='4xl' fontWeight={700}>{this.props.title.toUpperCase()}</Text>
                    <Text fontSize='m' className='card-text'>{this.props.text}</Text>

                    <Divider className='card-divider'/>

                    <Link fontSize='m' href={this.props.href}>Start</Link>

                </div>
            </div>
        )
    }

}

export default Card;