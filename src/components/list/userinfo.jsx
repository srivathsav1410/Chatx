import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';
import { AddSquareRegular } from '@fluentui/react-icons';
import './userinfo.css';
const UserInfo=({AddName})=>{
    const [hideDialog, setHideDialog] = React.useState(true);
    const [inputValue, setInputValue] = React.useState('');
    const toggleDialog = () => setHideDialog(!hideDialog);

    const handleInputChange = (event, newValue) => {
      setInputValue(newValue || '');
    };
  
    const handleSubmit = () => {
      console.log('Submitted value:', inputValue);
        AddName(inputValue); 
      toggleDialog();
    };

   return(
        <div className="userinfo">
            <div className='user' style={{ fontSize: '25px' }}>
            ChatX
             </div>
            <div className='icons'>
            <AddSquareRegular style={{ fontSize: '32px' }}  onClick={toggleDialog}/>
            </div>
            <Dialog
        hidden={hideDialog}
        onDismiss={toggleDialog}
        dialogContentProps={{
          type: DialogType.normal,
          title: 'Enter Your Input',
          subText: 'Please provide your input below.',
        }}
        modalProps={{
          isBlocking: false,
        }}
      >
        <TextField
          label="Your Input"
          value={inputValue}
          onChange={handleInputChange}
        />
        <DialogFooter>
          <PrimaryButton onClick={handleSubmit} text="Submit" />
          <DefaultButton onClick={toggleDialog} text="Cancel" />
        </DialogFooter>
      </Dialog>
        </div>
    )
}
export default UserInfo;