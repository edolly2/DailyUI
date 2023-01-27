import styled from 'styled-components';
import Button from './Button';

const CTAContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const CTA = (props) => {
  return (
    <CTAContainer>
      <Button text='Sign-Up' onClick={props.onClick} />
    </CTAContainer>
  );
};

export default CTA;
