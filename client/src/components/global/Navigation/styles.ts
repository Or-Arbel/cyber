import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: 0.5rem;
`;

export const NavContent = styled.div`
  max-width: 28rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const NavButton = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 0.5rem;
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.text.secondary};
  background: ${props => props.isActive ? props.theme.colors.bg.highlight : 'transparent'};

  &:hover {
    background: ${props => props.theme.colors.bg.highlight};
  }
`;

export const IconWrapper = styled.div`
  height: 1.25rem;
  width: 1.25rem;
`;

export const Label = styled.span`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 500;
`;