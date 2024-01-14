// styles.js
import styled from 'styled-components'

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

export const MainHeading = styled.h1`
  text-align: center;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  margin: 10px 0;
`

export const ListItem = styled.li`
  margin: 0 10px;
`

export const Button = styled.button`
  color: ${props => props.color};
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  margin: 5px;
  padding: 5px;
  border: none;
  cursor: pointer;
`

export const Textarea = styled.textarea`
  width: 300px;
  height: 150px;
  margin: 10px;
  font-size: 16px;
  padding: 5px;
  ${props => props.style}
`
