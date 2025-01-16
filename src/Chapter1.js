import React from 'react'
import DialogBox from './ats1/DialogBox'
function Ch1_Layout(){
    return(
      <div className='Ch1'> 
        <DialogBox
      messages={[
          { action: 'speak', message: 'Hello, how are you?' },
          { action: 'speak', message: 'I am doing well, thank you.' },
          {action: 'speak', message: 'have a nice day'},
          {action: 'speak', message: 'byeb yeee'}
      ]}
      characterName="Character" 
      screenWidth={window.innerWidth}
      screenHeight={window.innerHeight}
      onDialogEnded={() => console.log('Dialog ended')}
            />
      </div>
    ) 
  }
export default Ch1_Layout;