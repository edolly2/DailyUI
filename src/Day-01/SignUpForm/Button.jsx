import styled from 'styled-components';

const Btn = styled.button`
  padding: 0.5rem 2rem;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  background-color: transparent;
  border: 2px solid rgb(182, 49, 49);
  color: rgb(182, 49, 49);
  font-weight: 500;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  &:hover {
    background-color: rgb(182, 49, 49);
    transform: scale(1.1);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    color: white;
    cursor: pointer;
  }
`;

const Button = (props) => {
  return (
    <Btn onClick={props.onClick} text={props.text}>
      {props.text}
    </Btn>
  );
};

export default Button;
