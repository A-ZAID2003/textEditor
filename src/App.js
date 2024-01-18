import React, {useState} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
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
    const styleObj = {
      fontWeight: styles.bold ? 'bold' : 'normal',
      fontStyle: styles.italic ? 'italic' : 'normal',
      textDecoration: styles.underline ? 'underline' : 'none',
    }

    return styleObj
  }

  return (
    <EditorContainer>
      <MainHeading>Text Editor</MainHeading>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
        alt="text editor"
      />
      <UnorderedList>
        <ListItem>
          <Button
            color="#f1f5f9"
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
      <Textarea style={applyStyle()} placeholder="Type here..." />
    </EditorContainer>
  )
}

export default App
