import styled from 'styled-components';
import Button from './Button';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignUpForm = styled.form`
  background-color: blue;
  flex-direction: column;
  padding: 60px 40px;
  min-width: 10%;
  min-height: 25%;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

const SignUpLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
`;

const SignUpInput = styled.input`
  border-radius: 4px;
  padding: 4px 6px;
  font-size: 16px;
  /* width: 50%; */
`;

const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`;

const Form = (props) => {
  return (
    <Container>
      <SignUpForm style={props.style}>
        <FormGroup>
          <SignUpLabel htmlFor='name'>Name</SignUpLabel>
          <SignUpInput type='text' name='name' id='name' />
        </FormGroup>
        <FormGroup>
          <SignUpLabel htmlFor='email'>Email</SignUpLabel>
          <SignUpInput type='email' name='email' id='email' />
        </FormGroup>
        <FormGroup>
          <SignUpLabel htmlFor='password'>Password</SignUpLabel>
          <SignUpInput type='password' name='password' id='password' />
        </FormGroup>
        <FormGroup>
          <SignUpLabel htmlFor='re-password'>Retype Password</SignUpLabel>
          <SignUpInput type='re-password' name='re-password' id='re-password' />
        </FormGroup>
        <BtnGroup>
          <Button></Button>
          <Button></Button>
        </BtnGroup>
      </SignUpForm>
    </Container>
  );
};

export default Form;
