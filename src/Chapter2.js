import React from 'react'
import DialogBox from './ats1/DialogBox'
function Ch2_Layout(){
    return(
      <div className='Ch2'> 
        <DialogBox
      messages={[
          { action: 'speak', message: 'hey this is the second chaper' },
          { action: 'speak', message: 'you should know that this might be a good thing' },
          {action: 'speak', message: 'no fuck you for now'},
          {action: 'speak', message: 'YOU didnt RUINED EVERYTHING! yay!'}
      ]}
      characterName="Character" 
      screenWidth={window.innerWidth}
      screenHeight={window.innerHeight}
      onDialogEnded={() => console.log('Dialog ended')}
            />
      </div>
    ) 
  }
export default Ch2_Layout;