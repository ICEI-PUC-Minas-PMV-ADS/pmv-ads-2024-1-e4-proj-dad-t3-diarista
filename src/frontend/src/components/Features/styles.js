import styled from 'styled-components';

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Feature = styled.div`
  margin: 20px 0;
  text-align: center;

  h3 {
    margin-bottom: 10px;
    font-size: 1.5em;
  }

  p {
    font-size: 1em;
    color: #666;
  }
`;
