// App.js
import React, {useState} from 'react'
import {VscBold, GoItalic, AiOutlineUnderline} from 'react-icons/all'
import {
  EditorContainer,
  MainHeading,
  Image,
  UnorderedList,
  ListItem,
  Button,
  Textarea,
} from './Styles'

const App = () => {
  const [styles, setStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
  })

  const handleButtonClick = style => {
    setStyles(prevStyles => ({
      ...prevStyles,
      [style]: !prevStyles[style],
    }))
  }

  const applyStyle = () => {
    let style = ''
    if (styles.bold) {
      style += 'font-weight: bold; '
    }
    if (styles.italic) {
      style += 'font-style: italic; '
    }
    if (styles.underline) {
      style += 'text-decoration: underline; '
    }
    return style
  }

  return (
    <EditorContainer>
      <h1>Text Editor</h1>
      <Image
        src="https://your-text-editor-image-url.com/editor.png"
        alt="text editor"
      />
      <UnorderedList>
        <ListItem>
          <Button
            data-testid="bold"
            active={styles.bold}
            onClick={() => handleButtonClick('bold')}
          >
            <VscBold size={25} />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            data-testid="italic"
            active={styles.italic}
            onClick={() => handleButtonClick('italic')}
          >
            <GoItalic size={25} />
          </Button>
        </ListItem>
        <ListItem>
          <Button
            data-testid="underline"
            active={styles.underline}
            onClick={() => handleButtonClick('underline')}
          >
            <AiOutlineUnderline size={25} />
          </Button>
        </ListItem>
      </UnorderedList>
      <Textarea style={{...applyStyle()}} placeholder="Type here..." />
    </EditorContainer>
  )
}

export default App
