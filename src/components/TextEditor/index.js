import {Component} from 'react'

import {GoItalic} from 'react-icons/go'

import {VscBold} from 'react-icons/vsc'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  InsideContainer,
  ListItem,
  FirstContainer,
  HorizontalLine,
  Button,
  TextArea,
  Image,
  OptionContainer,
  SecondContainer,
  InsideSecondContainer,
  Heading,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    bold: false,
    italic: false,
    underline: false,
  }

  boldClicked = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  italicClicked = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  underlineClicked = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state
    return (
      <MainContainer>
        <InsideContainer>
          <FirstContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </FirstContainer>
          <SecondContainer>
            <InsideSecondContainer>
              <OptionContainer>
                <ListItem>
                  <Button
                    data-testid="bold"
                    color={bold}
                    onClick={this.boldClicked}
                  >
                    <VscBold size={25} />
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    data-testid="italic"
                    color={italic}
                    onClick={this.italicClicked}
                  >
                    <GoItalic size={25} />
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    data-testid="underline"
                    color={underline}
                    onClick={this.underlineClicked}
                  >
                    <AiOutlineUnderline size={25} />
                  </Button>
                </ListItem>
              </OptionContainer>
              <HorizontalLine />
              <TextArea
                cols="45"
                rows="20"
                bold={bold}
                italic={italic}
                underline={underline}
              />
            </InsideSecondContainer>
          </SecondContainer>
        </InsideContainer>
      </MainContainer>
    )
  }
}
export default TextEditor
