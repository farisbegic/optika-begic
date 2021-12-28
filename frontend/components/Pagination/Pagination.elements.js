import styled from "styled-components";

export const PaginationBar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  list-style-type: none;
`;

export const PaginationArrow = styled.li`
  display: ${prop => prop.disabled ? "none" : "block"};
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
  font-size: 17px;
`;

export const PaginationElement = styled(PaginationArrow)`
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 8px;
  color: ${props => !props.selected ? "var(--white)" : "var(--black)"};
  background-color: ${props => !props.selected ? "var(--orange)" : "var(--white)"}
`;