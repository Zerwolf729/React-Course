import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

const ChatMessage = ({ message, sender }) => {
  return(
    <div className={
      sender === 'user' 
      ? 'chat-message-user' 
      : 'chat-message-robot'
    }>
      {sender === 'robot' && (
        <img 
          src={RobotProfileImage} 
          className="chat-message-profile"
          alt="Robot"
        />
      )}

      <div className="chat-message-text">
        {message}
      </div>

      {sender === 'user' && (
        <img 
          src={UserProfileImage} 
          className="chat-message-profile"
          alt="User"
        />
      )}
    </div>
  )
}

export default ChatMessage