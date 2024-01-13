// App.js
import React, {useState} from 'react'
import {
  EditorContainer,
  MainHeading,
  Image,
  UnorderedList,
  ListItem,
  Button,
  Textarea,
} from './styles'
import {VscBold, GoItalic, AiOutlineUnderline} from 'react-icons/all'

const App = () => {
  const [boldActive, setBoldActive] = useState(false)
  const [italicActive, setItalicActive] = useState(false)
  const [underlineActive, setUnderlineActive] = useState(false)
  const [text, setText] = useState('')

  const handleButtonClick = style => {
    switch (style) {
      case 'bold':
        setBoldActive(!boldActive)
        break
      case 'italic':
        setItalicActive(!italicActive)
        break
      case 'underline':
        setUnderlineActive(!underlineActive)
        break
      default:
        break
    }
  }

  const applyStyle = () => {
    let style = ''
    if (boldActive) {
      style += 'font-weight: bold; '
    }
    if (italicActive) {
      style += 'font-style: italic; '
    }
    if (underlineActive) {
      style += 'text-decoration: underline; '
    }
    return style
  }

  return (
    <EditorContainer>
      <MainHeading>Text Editor</MainHeading>
      <Image
        src="https://your-text-editor-image-url.com/editor.png"
        alt="text editor"
      />
      <UnorderedList>
        <ListItem>
          <Button
            data-testid="bold"
            active={boldActive}
            onClick={() => handleButtonClick('bold')}
          >
            <VscBold size={25} />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            data-testid="italic"
            active={italicActive}
            onClick={() => handleButtonClick('italic')}
          >
            <GoItalic size={25} />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            data-testid="underline"
            active={underlineActive}
            onClick={() => handleButtonClick('underline')}
          >
            <AiOutlineUnderline size={25} />
          </Button>
        </ListItem>
      </UnorderedList>
      <Textarea
        style={{...applyStyle()}}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type here..."
      />
    </EditorContainer>
  )
}

export default App
