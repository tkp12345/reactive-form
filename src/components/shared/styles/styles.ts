import { colorTokens } from "@/ui/token";
import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 800px;
  margin: 24px auto;
  padding: 16px;
  background-color: ${colorTokens.secondary};
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
;`

export const FormHeaderStyle = styled.div`
  color: ${colorTokens.primary};
  margin-bottom: 24px;

  h1 {
    font-size: 2rem;
    margin-bottom: 8px;
  }

  p {
    font-size: 1rem;
    color: ${colorTokens.textSecondary};
  }
`;

export const InputStyle = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid ${colorTokens.textSecondary};
  border-radius: 4px;
  color: ${colorTokens.textPrimary};

  &:focus {
    outline: none;
    border-color: ${colorTokens.primary};
  }
`;

export const ButtonStyle = styled.button`
  padding: 16px 24px;
  background-color: ${colorTokens.primary};
  color: ${colorTokens.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #5e35b1;
  }
`;

export const CardStyle = styled.div`
  background-color: ${colorTokens.white};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
