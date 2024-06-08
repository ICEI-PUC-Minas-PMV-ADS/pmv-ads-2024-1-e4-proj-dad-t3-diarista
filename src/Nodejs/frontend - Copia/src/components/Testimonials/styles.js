import styled from 'styled-components';

export const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const Testimonial = styled.div`
  margin: 20px 0;
  text-align: center;
  max-width: 600px;

  p {
    font-size: 1em;
    color: #333;
    font-style: italic;
  }

  h4 {
    margin-top: 10px;
    font-size: 1.2em;
    font-weight: bold;
  }
`;
