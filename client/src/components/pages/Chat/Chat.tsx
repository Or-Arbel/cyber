import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { mockChatMessages } from './ChatData';
import {
  Container,
  Header,
  HeaderContent,
  IconWrapper,
  Title,
  MessageList,
  MessageRow,
  MessageBubble,
  MessageHeader,
  Sender,
  Time,
  Content,
  InputContainer,
  InputWrapper,
  Input,
  SendButton
} from './styles';

const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const currentUserId = '104'; // Mock current user ID

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Handle message sending here
    setMessage('');
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <IconWrapper>
            <MessageSquare />
          </IconWrapper>
          <Title>Group Chat</Title>
        </HeaderContent>
      </Header>

      <MessageList>
        {mockChatMessages.map((msg) => (
          <MessageRow key={msg._id} isSelf={msg.sender._id === currentUserId}>
            <MessageBubble isSelf={msg.sender._id === currentUserId}>
              <MessageHeader>
                <Sender isSelf={msg.sender._id === currentUserId}>
                  {msg.sender._id === currentUserId ? 'You' : `${msg.sender.firstName} ${msg.sender.lastName}`}
                </Sender>
                <Time isSelf={msg.sender._id === currentUserId}>
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </Time>
              </MessageHeader>
              <Content isSelf={msg.sender._id === currentUserId}>
                {msg.content}
              </Content>
            </MessageBubble>
          </MessageRow>
        ))}
      </MessageList>

      <form onSubmit={handleSendMessage}>
        <InputContainer>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <SendButton type="submit">
              <Send />
            </SendButton>
          </InputWrapper>
        </InputContainer>
      </form>
    </Container>
  );
};

export default Chat;