import React, { useEffect, useState } from 'react'
// import styles from './Style.scss'
import './Style.css'

import DisplayComments from './components/DisplayComments'
import { ActionProvider } from './components/ActionContext'
import SignField from './components/SignField'
import Input from './components/Input'

export const CommentSection = ({
  commentsArray,
  currentUser,
  setComment,
  signinUrl,
  signupUrl,
  customInput
}) => {
  const [comments, setComments] = useState(commentsArray)
  useEffect(() => {
    setComments(commentsArray)
  }, [commentsArray])

  return (
    <ActionProvider
      currentUser={currentUser}
      setComment={setComment}
      comments={comments}
      signinUrl={signinUrl}
      signupUrl={signupUrl}
      customInput={customInput}
    >
      <div className="section">
        <div className="inputBox">
          {signupUrl && !currentUser ? <SignField /> : <Input />}
        </div>
        <div className="displayComments">
          <DisplayComments comments={comments} />
        </div>
      </div>
    </ActionProvider>
  )
}
