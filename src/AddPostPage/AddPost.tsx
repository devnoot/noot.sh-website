import React from 'react'
import {Button, TextField} from '@material-ui/core'
import Markdown from 'react-markdown'

const AddPost = () => {

    const [postValue, setPostValue] = React.useState('')
    const [isPreview, setIsPreview] = React.useState(false)

    const handleInputChange = e => {
        setPostValue(e.target.value)
    }

    const handleSubmit = e => {
        console.log(postValue)
    }

    const handleToggle = () => {
        setIsPreview(!isPreview)
    }

    return (
        <div>
            <Button onClick={handleToggle} variant="contained" color={isPreview ? "secondary": "primary"}>
                {isPreview ? "Back to editor" : "Preview post"}
            </Button>
            {!isPreview && <TextField type="text" multiline onChange={handleInputChange} value={postValue} fullWidth rows={8}/>}
            {isPreview && <Markdown>{postValue}</Markdown>}
            <Button onClick={handleSubmit}>Submit Post</Button>
        </div>
    )
}

export { AddPost }
