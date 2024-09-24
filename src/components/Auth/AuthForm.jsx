import styled from "styled-components";

function AuthForm({ title, children }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <FormContainer>{children}</FormContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  flex: 1;
  padding: 3rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Title = styled.h1`
  color: var(--color-black-light);
  font-size: 1.875rem;
  font-weight: 800;
`;
const FormContainer = styled.div`
  display: flex;
  justify-self: center !important;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin: auto 0 !important;
`;

export default AuthForm;
