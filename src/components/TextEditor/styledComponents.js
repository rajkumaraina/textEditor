import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InsideContainer = styled.div`
  background-color: #1b1c22;
  display: flex;
  width: 80%;
`
export const Heading = styled.h1`
  color: #ffffff;
  text-align: center;
`
export const FirstContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Image = styled.img`
  width: 80%;
  height: 350px;
  margin: 8px;
`
export const SecondContainer = styled.div`
  width: 50%;
  padding: 8px;
`
export const InsideSecondContainer = styled.div`
  background-color: #25262c;
  border-radius: 8px;

  border: 1px solid #cbd5e1;
`
export const OptionContainer = styled.ul`
  display: flex;
  width: 100%;
  padding: 8px;
`

export const ListItem = styled.li`
  list-style-type: none;
  margin: 8px;
`

export const Button = styled.button`
  border: 0 none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.color ? '#faff00' : '#f1f5f9')};
`

export const HorizontalLine = styled.hr`
  border: 1px solid #f8f8f8;
  width: 100%;
`

export const TextArea = styled.textarea`
  border: 0 none;
  outline: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 18px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
