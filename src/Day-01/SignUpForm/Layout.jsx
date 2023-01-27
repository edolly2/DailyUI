import styled from 'styled-components';

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <main>{children}</main>
    </LayoutContainer>
  );
};

export default Layout;
