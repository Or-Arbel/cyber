import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
`;

export const Header = styled.div`
  background: ${props => props.theme.colors.bg.card};
  backdrop-filter: blur(8px);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.large} ${props => props.theme.borderRadius.large} 0 0;
  padding: ${props => props.theme.spacing.md};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

export const IconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(to bottom right, ${props => props.theme.colors.bg.highlight}, ${props => props.theme.colors.border});
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    color: ${props => props.theme.colors.primary};
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: bold;
  color: ${props => props.theme.colors.text.primary};
`;

export const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.sm};
  max-height: calc(100vh - 16rem);
`;

export const MessageRow = styled.div<{ isSelf: boolean }>`
  display: flex;
  justify-content: ${props => props.isSelf ? 'flex-end' : 'flex-start'};
`;

export const MessageBubble = styled.div<{ isSelf: boolean }>`
  max-width: 80%;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.large};
  background: ${props => props.isSelf ? props.theme.colors.primary : props.theme.colors.bg.card};
  border: ${props => props.isSelf ? 'none' : `1px solid ${props.theme.colors.border}`};
  border-bottom-right-radius: ${props => props.isSelf ? '0' : props.theme.borderRadius.large};
  border-bottom-left-radius: ${props => !props.isSelf ? '0' : props.theme.borderRadius.large};
`;

export const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: ${props => props.theme.spacing.xs};
`;

export const Sender = styled.p<{ isSelf: boolean }>`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: bold;
  color: ${props => props.isSelf ? props.theme.colors.text.light : props.theme.colors.primary};
`;

export const Time = styled.p<{ isSelf: boolean }>`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.isSelf ? 'rgba(255, 255, 255, 0.7)' : props.theme.colors.text.tertiary};
  margin-left: ${props => props.theme.spacing.sm};
`;

export const Content = styled.p<{ isSelf: boolean }>`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.isSelf ? props.theme.colors.text.light : props.theme.colors.text.primary};
  line-height: 1.4;
`;

export const InputContainer = styled.div`
  background: ${props => props.theme.colors.bg.card};
  backdrop-filter: blur(8px);
  border: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.large};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

export const Input = styled.input`
  flex: 1;
  background: white;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 9999px;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.sm};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const SendButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: ${props => props.theme.colors.primaryLight};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;