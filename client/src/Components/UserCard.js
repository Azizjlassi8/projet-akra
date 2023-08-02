import React from 'react'
import { Button, Card } from 'react-bootstrap'

const UserCard = ({user}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard;